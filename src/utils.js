/**
 * Small, dependency-free helpers shared across the app.
 */

/**
 * Normalize program output for comparison so that harmless differences
 * (trailing spaces, trailing blank lines, \r\n vs \n) don't fail a
 * correct solution.
 */
export function normalizeOutput(str) {
  if (str == null) return "";
  return String(str)
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, "")) // strip trailing spaces per line
    .join("\n")
    .replace(/\n+$/g, ""); // strip trailing blank lines
}

export function outputsMatch(actual, expected) {
  return normalizeOutput(actual) === normalizeOutput(expected);
}

export function formatTime(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Round-half-up integer scoring, e.g. 8/10 tests on 20 pts -> 16. */
export function computeQuestionScore(points, passed, total) {
  if (total === 0) return 0;
  return Math.round((points * passed) / total);
}
