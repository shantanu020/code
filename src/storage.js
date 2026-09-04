/**
 * All localStorage persistence lives here. Because there's no login and no
 * backend, the entire contest state — name, code per question, scores,
 * timer start — is kept in the browser's localStorage so a refresh doesn't
 * lose progress (when CONTEST_CONFIG.resumeOnRefresh is true).
 */

// v2 introduced function-based starter templates with input/output wrappers.
// A new key ensures an old in-progress session cannot retain the obsolete
// templates that only defined functions and never printed their results.
const STORAGE_KEY = "coding_contest_state_v2";

const defaultState = () => ({
  started: false,
  finished: false,
  name: "",
  startedAt: null, // epoch ms — used to compute remaining time, survives refresh
  finishedAt: null,
  currentQuestionId: null,
  // per-question runtime data, keyed by question id (as string)
  progress: {}, // { [id]: { code, solved, passed, total, score, lastRun } }
});

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch (err) {
    console.warn("Could not read saved contest state, starting fresh.", err);
    return defaultState();
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    // localStorage can fail in private-browsing modes on some browsers —
    // the contest still works, it just won't survive a refresh.
    console.warn("Could not save contest state to localStorage.", err);
  }
}

export function clearState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn("Could not clear saved contest state.", err);
  }
}

export function freshState() {
  return defaultState();
}
