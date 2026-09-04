/**
 * ============================================================================
 *  APP CONTROLLER
 * ============================================================================
 * Small hand-rolled SPA controller — no framework needed for a page this
 * size. Three views: landing -> contest -> results. State is authoritative
 * in the `state` object below and mirrored to localStorage (storage.js)
 * after every change that matters, so a refresh can resume mid-contest.
 * ============================================================================
 */

import contestData from "./questions.js";
import { loadState, saveState, clearState, freshState } from "./storage.js";
import { createTimer } from "./timer.js";
import { getRunner } from "./runners/index.js";
import { createEditor } from "./editorSetup.js";
import { outputsMatch, computeQuestionScore, escapeHtml, formatTime, clamp } from "./utils.js";

const contest = contestData?.contest ?? contestData;

export const CONTEST_CONFIG = {
  title: contest?.title || "Python Collections Challenge",
  subtitle: "Let's see how good you really are at coding 😌",
  namePlaceholder: "Enter a nickname (optional)",
  startButtonLabel: "Start Contest",
  durationMinutes: Number(contest?.duration_minutes ?? 45),
  warnAtMinutes: [10, 5],
  resumeOnRefresh: true,
  languages: [
    { id: "python", label: "Python 3", codeMirrorMode: "python", enabled: true },
    { id: "cpp", label: "C++ (coming soon)", codeMirrorMode: "cpp", enabled: false },
    { id: "java", label: "Java (coming soon)", codeMirrorMode: "java", enabled: false },
  ],
  finalMessage: "Thanks for taking the challenge!",
  performanceTiers: [
    { minPercent: 90, label: "🔥 Excellent", note: "Certified coding genius." },
    { minPercent: 70, label: "🌟 Great job", note: "You clearly know your stuff." },
    { minPercent: 50, label: "💪 Solid effort", note: "Not bad at all!" },
    { minPercent: 25, label: "🙂 Good try", note: "Everyone starts somewhere." },
    { minPercent: 0, label: "You tried!", note: "Keep practicing and try again." },
  ],
};

function buildStarterCode(question) {
  const id = String(question?.id ?? "");

  const templates = {
    list_clean_rotate: `def list_clean_rotate(nums, k):
    # Write your code here
    pass
`,
    tuple_records: `def tuple_records(records):
    # Write your code here
    pass
`,
    set_common_ground: `def common_ground(first, second):
    # Write your code here
    pass
`,
    string_transform: `def transform_text(text):
    # Write your code here
    pass
`,
    dictionary_inventory: `def inventory_master(initial, updates):
    # Write your code here
    pass
`,
  };

  return templates[id] || `def solve():
    import sys
    data = sys.stdin.read()
    print(data.strip() or "EMPTY")


if __name__ == "__main__":
    solve()
`;
}

export const QUESTIONS = (contest?.questions || []).map((question, index) => ({
  id: String(question.id ?? String(index + 1)),
  label: question.category || `Problem ${index + 1}`,
  title: question.title || `Question ${index + 1}`,
  difficulty: question.category || "Custom",
  points: Number(question.marks ?? 10),
  timeLimitSec: 2,
  description: question.statement || "",
  inputFormat: question.input_format || "",
  outputFormat: question.output_format || "",
  constraints: Array.isArray(question.constraints)
    ? question.constraints
    : question.constraints
      ? [question.constraints]
      : [],
  examples: (question.examples || []).map((example) => ({
    input: String(example.input ?? ""),
    output: String(example.output ?? ""),
  })),
  starterCode: buildStarterCode(question),
  testCases: (question.test_cases || []).map((testCase) => ({
    input: String(testCase.input ?? ""),
    expectedOutput: String(testCase.expected_output ?? ""),
  })),
}));

const root = document.getElementById("app");
const ACTIVE_LANGUAGE = CONTEST_CONFIG.languages.find((l) => l.enabled) || CONTEST_CONFIG.languages[0];
const TOTAL_POINTS = QUESTIONS.reduce((sum, q) => sum + q.points, 0);

let state = null;
let timer = null;
let editor = null;
let saveTimeoutId = null;
let submitting = false;
let activeMobilePanel = "problem";
let lastTabWarnAt = 0;

// ----------------------------------------------------------------------------
// Boot
// ----------------------------------------------------------------------------
function boot() {
  setupToastStack();
  setupAntiCheatBasics();

  state = loadState();

  if (state.finished) {
    renderResults();
  } else if (state.started) {
    if (CONTEST_CONFIG.resumeOnRefresh) {
      renderContestView();
    } else {
      clearState();
      state = freshState();
      renderLanding();
    }
  } else {
    renderLanding();
  }
}

function getCurrentQuestion() {
  return QUESTIONS.find((q) => q.id === state.currentQuestionId) || QUESTIONS[0];
}

function getProgress(questionId) {
  if (!state.progress[questionId]) {
    const q = QUESTIONS.find((qq) => qq.id === questionId);
    state.progress[questionId] = {
      code: q.starterCode,
      solved: false,
      passed: 0,
      total: q.testCases.length,
      score: 0,
      lastRun: null,
    };
  }
  return state.progress[questionId];
}

function persist() {
  saveState(state);
}

// ============================================================================
// LANDING VIEW
// ============================================================================
function renderLanding() {
  teardownEditor();
  root.innerHTML = `
    <div class="landing">
      <div class="landing-card">
        <h1 class="landing-title">${escapeHtml(CONTEST_CONFIG.title)}</h1>
        <p class="landing-subtitle">${escapeHtml(CONTEST_CONFIG.subtitle)}</p>
        <form class="landing-form" id="landing-form" autocomplete="off">
          <input
            class="landing-input"
            id="name-input"
            type="text"
            maxlength="40"
            placeholder="${escapeHtml(CONTEST_CONFIG.namePlaceholder)}"
            autocomplete="off"
          />
          <button type="submit" class="btn btn-primary landing-start-btn">
            ${escapeHtml(CONTEST_CONFIG.startButtonLabel)}
          </button>
        </form>
        <div class="landing-meta">
          <span>${CONTEST_CONFIG.durationMinutes} minutes &middot; ${QUESTIONS.length} problems &middot; ${TOTAL_POINTS} points</span>
          <span>No login, no email, no signup — just open and code.</span>
        </div>
      </div>
    </div>
  `;

  const form = document.getElementById("landing-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name-input").value.trim();
    startContest(name);
  });
}

function startContest(name) {
  state = freshState();
  state.started = true;
  state.name = name;
  state.startedAt = Date.now();
  state.currentQuestionId = QUESTIONS[0].id;
  QUESTIONS.forEach((q) => {
    state.progress[q.id] = {
      code: q.starterCode,
      solved: false,
      passed: 0,
      total: q.testCases.length,
      score: 0,
      lastRun: null,
    };
  });
  persist();
  renderContestView();
}

// ============================================================================
// CONTEST VIEW
// ============================================================================
function renderContestView() {
  teardownEditor();
  activeMobilePanel = "problem";

  root.innerHTML = `
    <div class="contest-shell">
      <aside class="sidebar">
        <div class="sidebar-header">${escapeHtml(CONTEST_CONFIG.title)}</div>
        <ul class="question-nav" id="question-nav"></ul>
        <div class="sidebar-footer">
          <div class="sidebar-score-label">Total score</div>
          <div>
            <span class="sidebar-score-value" id="sidebar-score-value">0</span>
            <span class="sidebar-score-total"> / ${TOTAL_POINTS}</span>
          </div>
          <div class="sidebar-progress-track">
            <div class="sidebar-progress-fill" id="sidebar-progress-fill" style="width:0%"></div>
          </div>
          <button class="btn btn-ghost finish-early-btn" id="finish-early-btn">Finish contest early</button>
        </div>
      </aside>

      <main class="workspace">
        <header class="workspace-top">
          <div class="workspace-question-meta">
            <span class="workspace-question-title" id="workspace-question-title"></span>
            <span class="workspace-question-points" id="workspace-question-points"></span>
          </div>
          <div class="timer" id="timer-display">⏱ --:--</div>
        </header>

        <div class="mobile-tabs">
          <button class="btn btn-ghost mobile-tab-btn active" id="tab-problem-btn">Problem</button>
          <button class="btn btn-ghost mobile-tab-btn" id="tab-editor-btn">Code</button>
        </div>

        <div class="panels" id="panels" data-active-panel="problem">
          <section class="problem-panel" id="problem-panel"></section>

          <section class="editor-panel">
            <div class="editor-toolbar">
              <span class="problem-chip">🐍 ${escapeHtml(ACTIVE_LANGUAGE.label)}</span>
              <div class="toolbar-spacer"></div>
              <button class="btn btn-ghost" id="clear-btn">Clear</button>
              <button class="btn btn-ghost" id="run-btn">▶ Run</button>
              <button class="btn btn-primary" id="submit-btn">Submit</button>
            </div>
            <div class="editor-host" id="editor-host"></div>
            <div class="console-panel">
              <div class="console-tabs"><span class="console-tab active">Console</span></div>
              <div class="console-body empty" id="console-body"></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  `;

  editor = createEditor(document.getElementById("editor-host"), {
    value: getProgress(getCurrentQuestion().id).code,
    mode: ACTIVE_LANGUAGE.codeMirrorMode,
    onChange: onEditorChange,
  });

  document.getElementById("finish-early-btn").addEventListener("click", onFinishEarlyClick);
  document.getElementById("clear-btn").addEventListener("click", onClearClick);
  document.getElementById("run-btn").addEventListener("click", onRunClick);
  document.getElementById("submit-btn").addEventListener("click", onSubmitClick);
  document.getElementById("tab-problem-btn").addEventListener("click", () => setMobilePanel("problem"));
  document.getElementById("tab-editor-btn").addEventListener("click", () => setMobilePanel("editor"));

  renderQuestionNav();
  renderProblemPanel();
  updateScoreDisplay();
  startOrResumeTimer();
}

function setMobilePanel(which) {
  activeMobilePanel = which;
  document.getElementById("panels").dataset.activePanel = which;
  document.getElementById("tab-problem-btn").classList.toggle("active", which === "problem");
  document.getElementById("tab-editor-btn").classList.toggle("active", which === "editor");
  if (which === "editor" && editor) editor.refresh();
}

function teardownEditor() {
  editor = null; // CodeMirror instance is discarded along with its DOM when root.innerHTML is replaced
  if (saveTimeoutId) {
    clearTimeout(saveTimeoutId);
    saveTimeoutId = null;
  }
  if (timer) {
    timer.stop();
    timer = null;
  }
}

// ---- Sidebar / question nav -------------------------------------------------
function renderQuestionNav() {
  const nav = document.getElementById("question-nav");
  nav.innerHTML = QUESTIONS.map((q, i) => {
    const p = getProgress(q.id);
    const statusClass = p.solved ? "solved" : p.passed > 0 ? "partial" : "";
    const activeClass = q.id === state.currentQuestionId ? "active" : "";
    const numContent = p.solved ? "" : String(i + 1);
    return `
      <li class="question-nav-item ${statusClass} ${activeClass}" data-question-id="${q.id}">
        <span class="question-nav-num">${numContent}</span>
        <span class="question-nav-text">
          <div class="question-nav-label">${escapeHtml(q.label)}</div>
          <div class="question-nav-points">${p.solved || p.passed > 0 ? `${p.score} / ${q.points} pts` : `${q.points} pts`}</div>
        </span>
      </li>
    `;
  }).join("");

  nav.querySelectorAll(".question-nav-item").forEach((el) => {
    el.addEventListener("click", () => selectQuestion(el.dataset.questionId));
  });
}

function updateSidebarActiveState() {
  document.querySelectorAll(".question-nav-item").forEach((el) => {
    el.classList.toggle("active", String(el.dataset.questionId) === String(state.currentQuestionId));
  });
}

function updateScoreDisplay() {
  const total = QUESTIONS.reduce((sum, q) => sum + getProgress(q.id).score, 0);
  document.getElementById("sidebar-score-value").textContent = total;
  const pct = TOTAL_POINTS === 0 ? 0 : (total / TOTAL_POINTS) * 100;
  document.getElementById("sidebar-progress-fill").style.width = `${clamp(pct, 0, 100)}%`;
}

// ---- Problem panel -----------------------------------------------------
function renderProblemPanel() {
  const q = getCurrentQuestion();
  document.getElementById("workspace-question-title").textContent = q.title;
  document.getElementById("workspace-question-points").textContent = `${q.points} pts`;

  const examplesHtml = q.examples
    .map(
      (ex, i) => `
      <div class="example-card">
        <div class="example-card-header">Example ${i + 1}</div>
        <div class="example-io">
          <div>
            <div class="example-io-label">INPUT</div>
            <pre>${escapeHtml(ex.input)}</pre>
          </div>
          <div>
            <div class="example-io-label">OUTPUT</div>
            <pre>${escapeHtml(ex.output)}</pre>
          </div>
        </div>
      </div>`
    )
    .join("");

  const constraintsHtml = (q.constraints || [])
    .map((c) => `<li>${escapeHtml(c)}</li>`)
    .join("");

  document.getElementById("problem-panel").innerHTML = `
    <div class="problem-meta-row">
      <span class="problem-chip">${escapeHtml(q.difficulty)}</span>
      <span class="problem-chip">${q.points} points</span>
      <span class="problem-chip">${q.timeLimitSec}s time limit / test</span>
    </div>
    <div class="problem-description">${q.description}</div>

    <div class="problem-section-title">Input format</div>
    <div class="problem-description">${escapeHtml(q.inputFormat)}</div>

    <div class="problem-section-title">Output format</div>
    <div class="problem-description">${escapeHtml(q.outputFormat)}</div>

    ${constraintsHtml ? `<div class="problem-section-title">Constraints</div><ul class="constraints-list">${constraintsHtml}</ul>` : ""}

    <div class="problem-section-title">Sample examples</div>
    ${examplesHtml}
  `;
}

function selectQuestion(id) {
  const targetId = String(id);
  if (targetId === String(state.currentQuestionId)) return;
  flushEditorCode();
  state.currentQuestionId = targetId;
  persist();
  editor.setValue(getProgress(targetId).code || getCurrentQuestion().starterCode);
  clearConsole();
  renderProblemPanel();
  updateSidebarActiveState();
  if (window.innerWidth <= 980) setMobilePanel("problem");
}

// ---- Editor / code persistence -----------------------------------------
function onEditorChange(value) {
  const q = getCurrentQuestion();
  getProgress(q.id).code = value;
  if (saveTimeoutId) clearTimeout(saveTimeoutId);
  saveTimeoutId = setTimeout(persist, 400);
}

function flushEditorCode() {
  if (!editor) return;
  const q = getCurrentQuestion();
  getProgress(q.id).code = editor.getValue();
  persist();
}

function onClearClick() {
  const q = getCurrentQuestion();
  editor.setValue(q.starterCode);
  getProgress(q.id).code = q.starterCode;
  persist();
}

// ---- Console rendering ---------------------------------------------------
function clearConsole() {
  const body = document.getElementById("console-body");
  body.innerHTML = "";
  body.classList.add("empty");
}

function writeConsole(html) {
  const body = document.getElementById("console-body");
  body.classList.remove("empty");
  body.innerHTML = html;
}

function setButtonsBusy(busy, label) {
  const runBtn = document.getElementById("run-btn");
  const submitBtn = document.getElementById("submit-btn");
  runBtn.disabled = busy;
  submitBtn.disabled = busy;
  if (busy) {
    runBtn.dataset.prevLabel = runBtn.textContent;
    submitBtn.dataset.prevLabel = submitBtn.textContent;
    if (label) {
      (label === "run" ? runBtn : submitBtn).textContent = "Running…";
    }
  } else {
    if (runBtn.dataset.prevLabel) runBtn.textContent = runBtn.dataset.prevLabel;
    if (submitBtn.dataset.prevLabel) submitBtn.textContent = submitBtn.dataset.prevLabel;
  }
}

// ---- Run (public examples only — safe to show real output) ---------------
async function onRunClick() {
  if (submitting) return;
  submitting = true;
  setButtonsBusy(true, "run");
  const q = getCurrentQuestion();
  const code = editor.getValue();
  const runner = getRunner(ACTIVE_LANGUAGE.id);

  writeConsole(`<div>Running against ${q.examples.length} sample example(s)…</div>`);

  try {
    let html = "";
    for (let i = 0; i < q.examples.length; i++) {
      const ex = q.examples[i];
      const result = await runner.run(code, ex.input, q.timeLimitSec);
      const actual = (result.stdout || "").trim();
      const expected = ex.output.trim();
      const pass = !result.error && outputsMatch(actual, expected);

      html += `<div style="margin-bottom:14px;">`;
      html += `<div class="${pass ? "ok-line" : "err-line"}">Example ${i + 1}: ${pass ? "✅ matched expected output" : "❌ did not match"}</div>`;
      if (result.error) {
        html += `<div class="err-line" style="white-space:pre-wrap;">${escapeHtml(result.error)}</div>`;
      } else {
        html += `<div>Output:\n${escapeHtml(actual || "(no output)")}</div>`;
        if (!pass) html += `<div>Expected:\n${escapeHtml(expected)}</div>`;
      }
      html += `</div>`;
    }
    writeConsole(html);
  } catch (err) {
    writeConsole(`<div class="err-line">Couldn't run your code: ${escapeHtml(String(err.message || err))}</div>`);
  } finally {
    submitting = false;
    setButtonsBusy(false);
  }
}

// ---- Submit (hidden test cases — never reveal their content) -------------
async function onSubmitClick() {
  if (submitting) return;
  if (state.finished) return;
  submitting = true;
  setButtonsBusy(true, "submit");
  const q = getCurrentQuestion();
  const code = editor.getValue();
  const runner = getRunner(ACTIVE_LANGUAGE.id);

  writeConsole(`<div>Grading against ${q.testCases.length} hidden test case(s)…</div>`);

  try {
    let passed = 0;
    let firstFailureNote = null;
    for (const tc of q.testCases) {
      const result = await runner.run(code, tc.input, q.timeLimitSec);
      const actual = (result.stdout || "").trim();
      const ok = !result.error && outputsMatch(actual, tc.expectedOutput.trim());
      if (ok) {
        passed++;
      } else if (!firstFailureNote) {
        // Non-spoiling feedback only — never the hidden input/expected output.
        if (result.timedOut) firstFailureNote = "One of your solutions timed out — check for infinite loops or slow algorithms.";
        else if (result.error) firstFailureNote = "One of your runs crashed with a runtime error — check the traceback style errors under 'Run' with the sample input.";
        else firstFailureNote = "Some test cases failed. Try checking edge cases.";
      }
    }

    const total = q.testCases.length;
    const score = computeQuestionScore(q.points, passed, total);
    const progress = getProgress(q.id);
    progress.passed = passed;
    progress.total = total;
    progress.score = score;
    progress.solved = passed === total;
    progress.lastRun = Date.now();
    persist();

    renderQuestionNav();
    updateScoreDisplay();

    const allPass = passed === total;
    const noneOrFew = passed === 0;
    const resultClass = allPass ? "pass" : noneOrFew ? "fail" : "partial";
    const icon = allPass ? "✅" : noneOrFew ? "❌" : "⚠️";

    writeConsole(`
      <div class="submission-result ${resultClass}">
        <div class="submission-result-title">Submission Result</div>
        <div class="submission-result-detail">${icon} ${passed} / ${total} test cases passed</div>
        <div class="submission-result-detail">Score: ${score} / ${q.points}</div>
        ${!allPass ? `<div class="submission-result-detail">${escapeHtml(firstFailureNote || "Some test cases failed. Try checking edge cases.")}</div>` : ""}
      </div>
    `);
  } catch (err) {
    writeConsole(`<div class="err-line">Couldn't grade your submission: ${escapeHtml(String(err.message || err))}</div>`);
  } finally {
    submitting = false;
    setButtonsBusy(false);
  }
}

// ---- Timer ----------------------------------------------------------------
function startOrResumeTimer() {
  timer = createTimer({
    durationMinutes: CONTEST_CONFIG.durationMinutes,
    warnAtMinutes: CONTEST_CONFIG.warnAtMinutes,
    startedAt: state.startedAt,
    onTick: ({ remainingSec, label }) => {
      const el = document.getElementById("timer-display");
      if (!el) return;
      el.textContent = `⏱ ${label}`;
      el.classList.toggle("warn", remainingSec <= 5 * 60 && remainingSec > 60);
      el.classList.toggle("critical", remainingSec <= 60);
    },
    onWarn: (minutesLeft) => {
      showToast(`⏳ ${minutesLeft} minute${minutesLeft === 1 ? "" : "s"} remaining!`, "warn");
    },
    onExpire: () => {
      finishContest("time_up");
    },
  });
  timer.start();
}

// ---- Finishing the contest -------------------------------------------------
function onFinishEarlyClick() {
  const ok = window.confirm("Finish the contest now? You won't be able to submit any more answers.");
  if (ok) finishContest("manual");
}

function finishContest(reason) {
  flushEditorCode();
  state.finished = true;
  state.finishedAt = Date.now();
  state.finishReason = reason;
  persist();
  if (timer) {
    timer.stop();
    timer = null;
  }
  renderResults();
}

// ============================================================================
// RESULTS VIEW
// ============================================================================
function renderResults() {
  teardownEditor();

  const totalScore = QUESTIONS.reduce((sum, q) => sum + getProgress(q.id).score, 0);
  const solvedCount = QUESTIONS.filter((q) => getProgress(q.id).solved).length;
  const percent = TOTAL_POINTS === 0 ? 0 : Math.round((totalScore / TOTAL_POINTS) * 100);

  const durationSec = CONTEST_CONFIG.durationMinutes * 60;
  const rawUsedSec = state.startedAt && state.finishedAt ? (state.finishedAt - state.startedAt) / 1000 : durationSec;
  const usedSec = clamp(rawUsedSec, 0, durationSec);

  const tier =
    CONTEST_CONFIG.performanceTiers.find((t) => percent >= t.minPercent) ||
    CONTEST_CONFIG.performanceTiers[CONTEST_CONFIG.performanceTiers.length - 1];

  const name = state.name && state.name.trim() ? state.name.trim() : "you";
  const circumference = 2 * Math.PI * 78;
  const dash = (clamp(percent, 0, 100) / 100) * circumference;

  root.innerHTML = `
    <div class="results">
      <div class="results-card">
        <div class="results-kicker">🎉</div>
        <h1 class="results-title">Contest Complete!<br>${escapeHtml(name)}, you survived!</h1>

        <div class="results-score-ring">
          <svg width="172" height="172" viewBox="0 0 172 172">
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ef6c8e" />
                <stop offset="100%" stop-color="#7c6cf0" />
              </linearGradient>
            </defs>
            <circle cx="86" cy="86" r="78" fill="none" stroke="#242032" stroke-width="12" />
            <circle
              cx="86" cy="86" r="78" fill="none"
              stroke="url(#scoreGradient)" stroke-width="12" stroke-linecap="round"
              stroke-dasharray="${dash} ${circumference}"
            />
          </svg>
          <div>
            <div class="results-score-value">${totalScore}</div>
            <div class="results-score-total">/ ${TOTAL_POINTS} pts</div>
          </div>
        </div>

        <div class="results-stats">
          <div class="results-stat">
            <div class="results-stat-label">Your Score</div>
            <div class="results-stat-value">${totalScore} / ${TOTAL_POINTS}</div>
          </div>
          <div class="results-stat">
            <div class="results-stat-label">Solved</div>
            <div class="results-stat-value">${solvedCount} / ${QUESTIONS.length}</div>
          </div>
          <div class="results-stat">
            <div class="results-stat-label">Time Used</div>
            <div class="results-stat-value">${formatTime(usedSec)}</div>
          </div>
        </div>

        <div class="results-performance">${tier.label}</div>
        <div class="results-performance-note">${escapeHtml(tier.note)}</div>

        <div class="results-final-message">${escapeHtml(CONTEST_CONFIG.finalMessage)}</div>

        <button class="btn btn-primary" id="try-again-btn">Try Again</button>
      </div>
    </div>
  `;

  document.getElementById("try-again-btn").addEventListener("click", () => {
    clearState();
    state = freshState();
    renderLanding();
  });
}

// ============================================================================
// TOASTS
// ============================================================================
function setupToastStack() {
  if (document.getElementById("toast-stack")) return;
  const stack = document.createElement("div");
  stack.className = "toast-stack";
  stack.id = "toast-stack";
  document.body.appendChild(stack);
}

function showToast(message, type = "info", ms = 4000) {
  const stack = document.getElementById("toast-stack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type === "warn" ? "warn" : ""}`;
  toast.textContent = message;
  stack.appendChild(toast);
  setTimeout(() => toast.remove(), ms);
}

// ============================================================================
// LIGHT ANTI-CHEATING (see note below — this is intentionally not bulletproof)
// ============================================================================
// A no-login, no-backend, fully client-side app can never fully prevent
// cheating — anyone with DevTools open can read the page's own JavaScript,
// including this file and questions.js. What follows are light deterrents
// appropriate for a private, just-for-fun contest between two people, not
// a defense against a determined adversary.
function setupAntiCheatBasics() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") return;
    if (!state || !state.started || state.finished) return;
    const now = Date.now();
    if (now - lastTabWarnAt < 3000) return; // debounce flicker
    lastTabWarnAt = now;
    showToast("👀 Welcome back! (Tab switches aren't penalized, just noted.)", "warn");
  });
}

boot();
