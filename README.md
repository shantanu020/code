# Python Collections Challenge

A private, no-login coding contest for two. Open a link, pick a nickname,
write and run real Python in the browser, get graded against hidden test
cases, and see a fun results screen at the end.

100% static — no server, no database, no accounts. Deploys for free to
GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

---

## 1. What's inside

```
coding-contest/
├── index.html              Entry point. Loads fonts, CodeMirror (CDN), and the app.
├── package.json            Optional — only for a local dev convenience script.
├── README.md                This file.
├── public/                  (empty — put a favicon or other static assets here if you want)
└── src/
    ├── questions.js         ⭐ THE ONLY FILE YOU NEED TO EDIT. Contest config + all questions.
    ├── app.js                Main app controller (views, state machine, event wiring).
    ├── editorSetup.js        CodeMirror editor configuration.
    ├── timer.js              Countdown timer logic.
    ├── storage.js            localStorage persistence (resume-on-refresh).
    ├── utils.js              Small helpers (output normalization, scoring math, etc).
    ├── styles.css             All styling (dark mode, gradients, layout, responsiveness).
    └── runners/
        ├── index.js           Language runner registry — the extension point for C++/Java later.
        ├── pythonRunner.js    Main-thread side of Python execution (timeouts, worker lifecycle).
        └── pyodideWorker.js   Runs inside a Web Worker; loads Pyodide and executes submissions.
```

No React, no build tool, no bundler. Just static files. This was a
deliberate choice: Pyodide (Python-in-the-browser via WebAssembly) plus
plain ES modules means the whole thing can run from a single `index.html`
with zero backend and zero hosting cost.

---

## 2. Running it locally

Because the app uses ES modules (`import`/`export`), you can't just
double-click `index.html` — browsers block module imports over the
`file://` protocol. You need a tiny local web server (this does **not**
require Node, npm, or any install if you have Python):

```bash
cd coding-contest
python3 -m http.server 5173
```

Then open **http://localhost:5173** in your browser.

If you'd rather use Node, `package.json` includes a convenience script:

```bash
npm run dev
```

Either way, the first time you click **Run** or **Submit**, the browser
downloads Pyodide from a CDN (a few MB, cached after that) — this needs an
internet connection the first time; after that it's cached by the browser.

---

## 3. Editing the contest — `src/questions.js`

This is the **only file you should need to touch** to make the contest
your own. It exports two things:

### `CONTEST_CONFIG`
Landing page title/subtitle, contest duration, when to warn about time
remaining, whether refreshing resumes or restarts the contest, the final
"you owe me a coffee" message, and the performance-tier labels shown on
the results screen. Every field has an inline comment explaining it.

### `QUESTIONS`
An array of question objects. Copy an existing one and edit it — the file
has a full field-by-field guide at the top. The short version:

```js
{
  id: 1,                        // unique, never reuse
  label: "Warm Up",             // sidebar label
  title: "Sum of Digits",       // full title on the problem page
  difficulty: "Easy",
  points: 10,                   // max points for a perfect solution
  timeLimitSec: 2,               // per-test-case execution time limit
  description: "…",             // shown to the participant (HTML allowed)
  inputFormat: "…",
  outputFormat: "…",
  constraints: ["1 ≤ N ≤ 10^6"],
  examples: [                   // PUBLIC — shown on the problem page
    { input: "12345", output: "15" }
  ],
  starterCode: `# starter code shown in the editor`,
  testCases: [                  // HIDDEN — used only for grading, never shown
    { input: "12345", expectedOutput: "15" },
    // ...as many as you want
  ],
}
```

Every question is graded the same way: the participant's program reads
from stdin (`input()`) and writes to stdout (`print()`); the grader
compares stdout against `expectedOutput` (see "How grading works" below).

**Sidebar order** follows the array order in `QUESTIONS`, so reorder the
array to reorder the sidebar.

---

## 4. How hidden test cases work

- `examples` are **public** — the participant sees these on the problem
  page, and clicking **Run** executes the code against them, showing the
  real stdout/stderr so they can debug.
- `testCases` are **hidden** — they only exist inside `questions.js`, and
  clicking **Submit** runs the code against every one of them, but the UI
  only ever shows *how many* passed, never the inputs, expected outputs,
  or which specific case(s) failed. On failure, a short generic hint is
  shown ("Some test cases failed. Try checking edge cases.") instead of
  spoiling anything.
- Output comparison is **normalized** before comparing: trailing spaces
  per line and trailing blank lines are ignored, and `\r\n`/`\n` are
  treated the same, so harmless formatting differences don't fail a
  correct solution (see `normalizeOutput` in `src/utils.js`).

**Read this before you rely on it for anything beyond a fun private
contest:** because there's no backend, `questions.js` — hidden test cases
included — ships to the browser like any other static file. The UI never
displays them, but someone who opens their browser's Network/Sources tab
could technically find the file. That's an inherent limitation of a
serverless, no-login app. Fine for you and your girlfriend; not something
to reuse for anything you need to keep genuinely secret from a motivated
person. See "Limitations" below for the full list.

---

## 5. How scoring works

Each question is worth its configured `points`. Passing a subset of hidden
tests gives **partial credit**, proportional to how many passed:

```
question_score = round(points × passed_tests / total_tests)
```

Example: 8/10 hidden tests pass on a 20-point question → `round(20 × 8/10)
= 16` points. The contest total is just the sum of every question's
`points` (100 in the example set: 10+15+20+25+30).

Resubmitting a question re-grades it and overwrites its score with the
latest attempt (so improving a solution and resubmitting always reflects
your best current code, not your first attempt).

---

## 6. Code execution — how it actually runs Python

- **Pyodide** (real CPython compiled to WebAssembly) runs entirely in the
  browser — no backend, no API keys, no per-request cost. Nothing is
  faked; every submission genuinely executes.
- It runs inside a **Web Worker**, not the main thread, so a slow or
  looping solution never freezes the page or the timer.
- Each test case gets a fresh Python namespace (no shared state between
  runs) and its own captured stdout/stderr.
- **Timeouts:** if a test case doesn't finish within its `timeLimitSec`,
  the worker is forcibly terminated (this *does* stop an infinite loop)
  and that test is marked "Time Limit Exceeded." A fresh worker is
  transparently created for the next run — this costs a second or two of
  Pyodide reinitialization only in that timeout case, which is a fair
  trade-off for a dependency-free static site. (The "proper" fix —
  `SharedArrayBuffer`-based interrupts — needs cross-origin-isolation HTTP
  headers that most free static hosts don't set by default, so it's
  intentionally not used here. See `src/runners/pythonRunner.js` for the
  full explanation in comments.)
- Syntax errors and runtime exceptions are caught and shown as real Python
  tracebacks under **Run**, never as generic "something went wrong"
  messages.

---

## 7. Adding C++ or Java later

The language runner is behind a small, generic interface so this is
additive, not a rewrite:

1. Add a new file, e.g. `src/runners/cppRunner.js`, that exports a
   `createCppRunner()` returning `{ init(), run(code, stdin, timeLimitSec), dispose() }`
   — same shape as `pythonRunner.js`. (You'd likely back this with a WASM
   C++ toolchain, or a sandboxed execution API if you're OK adding a
   backend.)
2. Register it in `src/runners/index.js`.
3. Flip `enabled: true` for that language in `CONTEST_CONFIG.languages`
   inside `questions.js`, and set `codeMirrorMode` to the right CodeMirror
   mode name (e.g. `"clike"` for C++/Java, loaded via an extra `<script>`
   tag in `index.html`).

Nothing in `app.js`, the grading logic, or the UI needs to change.

---

## 8. Deploying for free

This is a static site, so any static host works. GitHub Pages, exact
steps:

1. **Create a GitHub repository.**
   Go to github.com → New repository → name it (e.g. `our-coding-challenge`)
   → set it to **Private** if you don't want it publicly listed → Create.

2. **Upload the files.**
   Either drag-and-drop the whole `coding-contest/` folder's *contents*
   (not the folder itself — `index.html` should be at the repo root) using
   GitHub's web uploader, or via git:
   ```bash
   cd coding-contest
   git init
   git add .
   git commit -m "Our coding challenge"
   git branch -M main
   git remote add origin https://github.com/<you>/our-coding-challenge.git
   git push -u origin main
   ```

3. **Enable GitHub Pages.**
   Repo → Settings → Pages → under "Build and deployment", set Source to
   **Deploy from a branch** → Branch: `main`, folder: `/ (root)` → Save.

4. **Open the generated URL.**
   GitHub shows it on that same Pages settings screen, something like
   `https://<you>.github.io/our-coding-challenge/`. Give it a minute after
   your first push for the first deploy to finish.

   > Note: a **private** GitHub repo's Pages site is still publicly
   > reachable if someone has the exact URL (GitHub Pages doesn't support
   > password-protecting a free-tier private repo's site). If you want
   > real access control, use Netlify or Cloudflare Pages instead (step 5)
   > and turn on their password-protection feature, or just rely on the
   > URL not being guessable/shared.

5. **Send the URL to your girlfriend.** That's it — she opens it, types a
   nickname (or skips it), and clicks Start.

**Alternative: Netlify / Vercel / Cloudflare Pages** — all three let you
drag-and-drop the `coding-contest` folder in their dashboard and get a
live URL in under a minute, no git required. Netlify and Cloudflare Pages
both offer simple password-protection on their free tiers if you want an
extra layer of privacy beyond an unguessable URL.

---

## 9. Configuring resume-vs-restart on refresh

In `questions.js`:

```js
resumeOnRefresh: true,   // refreshing continues the same in-progress contest
resumeOnRefresh: false,  // refreshing always starts a brand new contest
```

When `true` (the default), progress, code, score, and the timer's start
time are kept in `localStorage`, so an accidental refresh or tab close
doesn't lose anything — the countdown keeps counting down in real time
even while the page was closed.

---

## 10. What was tested before delivery

I don't have a real browser available in the environment I built this in,
so testing split into what could be verified directly and what depends on
things (CDN-hosted Pyodide/CodeMirror, an actual browser) that aren't
reachable from that sandbox:

**Verified directly:**
- Every JS file parses as valid ES module syntax (`node --check`).
- A full jsdom-based simulation of the app (with a stubbed CodeMirror)
  confirmed: the landing page renders with the right title/subtitle, name
  input, and Start button; starting a contest builds the 5-question
  sidebar, mounts the editor, and persists correct state to localStorage;
  switching questions updates the problem panel; the Clear button resets
  the editor; Finish Early transitions to the results page with the exact
  custom completion message; Try Again clears
  localStorage and returns to the landing page.
- The exact Python grading routine used inside the Web Worker
  (`__contest_run` in `pyodideWorker.js`) was extracted and run against a
  real Python 3 interpreter with correct reference solutions for **all 5**
  example questions — every one passes 100% of its own hidden test cases,
  and every public example's expected output was independently
  re-verified against real execution. A deliberately buggy solution was
  confirmed to correctly fail. Syntax errors, runtime errors (e.g.
  division by zero), stdin/`input()` plumbing, and namespace isolation
  between runs were all explicitly tested and passed.
- This caught and fixed a real bug: my first draft of Question 4's hidden
  test cases had incorrect expected outputs — the validation script above
  is what caught it, and it's now fixed and re-verified.

**Not independently verified in-browser** (the sandbox this was built in
can't reach the CDNs involved or launch a real browser), so please
double-check once after deploying:
- Pyodide actually loading and executing inside a real Web Worker in
  Chrome/Firefox/Safari/mobile Safari (the worker/timeout/messaging code
  was carefully written and reviewed, and it uses Pyodide's documented
  public API, but hasn't run against the real WASM runtime).
- CodeMirror rendering/typing/tab-behavior in an actual browser (same
  reasoning — configured against documented CodeMirror 5 options).
- Visual polish/responsiveness on an actual phone screen.

If anything looks off after you deploy it, open the browser DevTools
console — errors there will point straight at the problem, and the code
is small enough to track down quickly.

---

## 11. Limitations (please read)

- **Not cheat-proof.** This is a private, static, no-backend app. Anyone
  who opens DevTools can read the page's own source, including hidden
  test cases in `questions.js`. Right-click is disabled and tab-switches
  show a gentle (non-punitive) toast, but that's a deterrent, not
  security — appropriate for a fun private contest between two people,
  not a real assessment platform.
- **Timeouts are "kill the worker," not "interrupt the loop."** See
  section 6 — an infinite loop is stopped, but recovering costs a couple
  of seconds while Pyodide reloads in a fresh worker.
- **First load needs internet** (to fetch Pyodide/CodeMirror/fonts from
  their CDNs). After that, browsers cache them, but there's no offline
  mode.
- **Only Python 3 today.** C++ and Java are structurally ready to add
  (section 7) but not implemented.
- **`localStorage` is per-browser, per-device.** If she starts the
  contest on her phone and later opens the link on her laptop, that's a
  fresh attempt — progress doesn't sync across devices.
- A **private GitHub repo's Pages URL is still technically public** to
  anyone with the link (see section 8) — use Netlify/Cloudflare Pages'
  password protection if you want more than an unguessable URL.
#   c o d e  
 