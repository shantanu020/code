/**
 * Thin wrapper around CodeMirror 5 (loaded globally from a CDN in
 * index.html — see the <script> tags there). Kept in one place so the
 * editor's configuration (theme, tab behaviour, etc.) lives in exactly one
 * spot.
 */

/* global CodeMirror */

export function createEditor(container, { value, mode = "python", onChange }) {
  const cm = CodeMirror(container, {
    value: value || "",
    mode,
    theme: "dracula",
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    lineWrapping: false,
    matchBrackets: true,
    autoCloseBrackets: true,
    styleActiveLine: true,
    viewportMargin: Infinity,
    extraKeys: {
      Tab: (cm) => {
        if (cm.somethingSelected()) {
          cm.execCommand("indentMore");
        } else {
          const spaces = " ".repeat(cm.getOption("indentUnit"));
          cm.replaceSelection(spaces);
        }
      },
      "Shift-Tab": "indentLess",
    },
  });

  if (onChange) {
    cm.on("change", () => onChange(cm.getValue()));
  }

  return cm;
}
