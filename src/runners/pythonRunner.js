/**
 * ============================================================================
 *  PYTHON RUNNER — main-thread side
 * ============================================================================
 * Wraps the Pyodide Web Worker (pyodideWorker.js) behind a small, generic
 * interface: `init()`, `run(code, stdin, timeLimitSec)`. Every language
 * runner in this app implements the same interface (see runners/index.js),
 * so the rest of the app (contest.js) never needs to know it's talking to
 * Python specifically.
 *
 * TIMEOUT STRATEGY (please read — this is an honest limitation, not a bug)
 * ----------------------------------------------------------------------------
 * Pyodide executes Python synchronously on whichever JS thread it's running
 * on. There is no reliable, dependency-free way to interrupt a single
 * infinite loop mid-execution from the *outside* in a plain static site
 * (Pyodide's real interrupt mechanism needs SharedArrayBuffer, which in turn
 * needs cross-origin-isolation HTTP headers — not something GitHub
 * Pages / Netlify's default static hosting gives you for free).
 *
 * So instead: each test case runs in a Web Worker. If it doesn't respond
 * within `timeLimitSec`, we call `worker.terminate()` — which *does*
 * forcibly kill a hung worker, loop and all — count that test as failed
 * ("Time Limit Exceeded"), and transparently spin up a fresh worker for the
 * next test case. The main thread (and therefore the UI) is never blocked,
 * which is the important part for user experience; the cost is that a
 * timed-out test costs ~1-2 extra seconds to recover from while Pyodide
 * reloads in the new worker.
 * ============================================================================
 */

const WORKER_URL = new URL("./pyodideWorker.js", import.meta.url);

export function createPythonRunner() {
  let worker = null;
  let readyPromise = null;
  let nextReqId = 1;

  function spawnWorker() {
    // Classic (non-module) worker on purpose: it lets pyodideWorker.js use
    // importScripts() to load Pyodide's UMD build directly from the CDN,
    // which is simpler and more broadly compatible than juggling ESM
    // imports inside a worker.
    worker = new Worker(WORKER_URL);
    readyPromise = new Promise((resolve, reject) => {
      const onMessage = (event) => {
        if (event.data?.type === "ready") {
          worker.removeEventListener("message", onMessage);
          resolve();
        } else if (event.data?.type === "init-error") {
          worker.removeEventListener("message", onMessage);
          reject(new Error(event.data.message || "Failed to start Python."));
        }
      };
      worker.addEventListener("message", onMessage);
      worker.addEventListener("error", (e) => reject(e));
      worker.postMessage({ type: "init" });
    });
    return readyPromise;
  }

  function destroyWorker() {
    if (worker) {
      worker.terminate();
      worker = null;
      readyPromise = null;
    }
  }

  async function init() {
    if (!worker) await spawnWorker();
    await readyPromise;
  }

  /**
   * Run `code` with `stdin` fed to input(), enforcing timeLimitSec.
   * Resolves with { stdout, stderr, error, timedOut }. Never rejects for
   * normal program errors — those show up in `error` as a traceback string.
   */
  async function run(code, stdin, timeLimitSec) {
    await init();

    const reqId = nextReqId++;
    const timeoutMs = Math.max(1, timeLimitSec) * 1000;

    const resultPromise = new Promise((resolve) => {
      const onMessage = (event) => {
        const data = event.data;
        if (data?.type === "exec-result" && data.reqId === reqId) {
          worker.removeEventListener("message", onMessage);
          resolve({
            stdout: data.stdout || "",
            stderr: data.stderr || "",
            error: data.error || null,
            timedOut: false,
          });
        }
      };
      worker.addEventListener("message", onMessage);
      worker.postMessage({ type: "exec", reqId, code, stdin });
    });

    const timeoutPromise = new Promise((resolve) => {
      setTimeout(() => resolve({ timedOut: true }), timeoutMs);
    });

    const result = await Promise.race([resultPromise, timeoutPromise]);

    if (result.timedOut) {
      // Kill and discard the hung worker; a new one is created lazily on
      // the next call to run() / init().
      destroyWorker();
      return {
        stdout: "",
        stderr: "",
        error: `Time Limit Exceeded (> ${timeLimitSec}s). Check for infinite loops or slow code.`,
        timedOut: true,
      };
    }

    return result;
  }

  function dispose() {
    destroyWorker();
  }

  return { init, run, dispose };
}
