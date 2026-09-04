/**
 * Language runner registry.
 *
 * Every runner implements the same tiny async interface:
 *   { init(): Promise<void>,
 *     run(code, stdin, timeLimitSec): Promise<{stdout, stderr, error, timedOut}>,
 *     dispose(): void }
 *
 * To add a new language later (C++, Java, ...):
 *   1. Create runners/cppRunner.js (or similar) implementing the interface
 *      above — typically by compiling/running against a WASM toolchain or a
 *      sandboxed backend API.
 *   2. Register it below.
 *   3. Flip `enabled: true` for that language in questions.js.
 * Nothing else in the app needs to change — contest.js only ever calls
 * `getRunner(languageId)`.
 */

import { createPythonRunner } from "./pythonRunner.js";

const registry = {
  python: createPythonRunner,
  // cpp: createCppRunner,   // not implemented yet — see runners/README below
  // java: createJavaRunner, // not implemented yet
};

const instances = new Map();

export function getRunner(languageId) {
  if (!instances.has(languageId)) {
    const factory = registry[languageId];
    if (!factory) {
      throw new Error(
        `No runner registered for language "${languageId}". ` +
          `Add one in src/runners/index.js.`
      );
    }
    instances.set(languageId, factory());
  }
  return instances.get(languageId);
}
