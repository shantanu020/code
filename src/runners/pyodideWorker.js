/**
 * ============================================================================
 *  PYTHON EXECUTION WORKER
 * ============================================================================
 * This file runs inside a Web Worker (see pyRunner.js, which creates it).
 * Running Pyodide in a worker — instead of on the main thread — is what
 * keeps the UI responsive: even if the participant's code runs slowly or
 * infinite-loops, the page itself never freezes. The main thread enforces
 * the time limit by terminating this worker if it doesn't reply in time
 * (see pyRunner.js for exactly how).
 *
 * Protocol (all messages are plain JSON-serializable objects):
 *   -> { type: "init" }
 *   <- { type: "ready" }                                on success
 *   <- { type: "init-error", message }                   on failure
 *
 *   -> { type: "exec", reqId, code, stdin }
 *   <- { type: "exec-result", reqId, stdout, stderr, error }
 *
 * A fresh Python namespace is used for every "exec" call, so state never
 * leaks between test cases (e.g. a global variable set while grading test
 * #1 cannot affect test #2).
 * ============================================================================
 */

/* global importScripts, loadPyodide */

const PYODIDE_VERSION = "0.26.4";
const PYODIDE_INDEX_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let pyodideReadyPromise = null;

async function initPyodide() {
  importScripts(`${PYODIDE_INDEX_URL}pyodide.js`);
  const pyodide = await loadPyodide({ indexURL: PYODIDE_INDEX_URL });

  // Define one reusable Python helper. It builds a *fresh* globals dict for
  // every call (so runs never see each other's variables), redirects
  // stdin/stdout/stderr for the duration of the call, and safely captures
  // any exception as a traceback string instead of letting it escape.
  pyodide.runPython(`
import sys, io, traceback

def __contest_run(code, stdin_text):
    old_out, old_err, old_in = sys.stdout, sys.stderr, sys.stdin
    out = io.StringIO()
    sys.stdout = out
    sys.stderr = out
    sys.stdin = io.StringIO(stdin_text)
    error = None
    try:
        ns = {"__name__": "__main__"}
        exec(compile(code, "<solution.py>", "exec"), ns)
    except SystemExit:
        pass
    except BaseException:
        error = traceback.format_exc()
    finally:
        sys.stdout, sys.stderr, sys.stdin = old_out, old_err, old_in
    return out.getvalue(), error
`);

  return pyodide;
}

self.onmessage = async (event) => {
  const msg = event.data;

  if (msg.type === "init") {
    if (!pyodideReadyPromise) pyodideReadyPromise = initPyodide();
    try {
      await pyodideReadyPromise;
      self.postMessage({ type: "ready" });
    } catch (err) {
      self.postMessage({ type: "init-error", message: String(err) });
    }
    return;
  }

  if (msg.type === "exec") {
    const { reqId, code, stdin } = msg;
    try {
      const pyodide = await pyodideReadyPromise;
      const runFn = pyodide.globals.get("__contest_run");
      let stdout = "";
      let error = null;
      try {
        const resultProxy = runFn(code, stdin ?? "");
        const [out, err] = resultProxy.toJs();
        resultProxy.destroy();
        stdout = out;
        error = err;
      } finally {
        runFn.destroy();
      }
      self.postMessage({ type: "exec-result", reqId, stdout, stderr: "", error });
    } catch (err) {
      // Something went wrong at the JS/Pyodide layer itself (rare) —
      // report it as a generic runtime error rather than crashing silently.
      self.postMessage({
        type: "exec-result",
        reqId,
        stdout: "",
        stderr: "",
        error: `Internal execution error: ${err && err.message ? err.message : String(err)}`,
      });
    }
  }
};
