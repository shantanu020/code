/**
 * Countdown timer. Computed from an absolute `startedAt` timestamp rather
 * than decremented every tick, so it stays correct across page refreshes,
 * throttled background tabs, and clock drift.
 */
import { formatTime } from "./utils.js";

export function createTimer({ durationMinutes, warnAtMinutes, startedAt, onTick, onWarn, onExpire }) {
  const durationMs = durationMinutes * 60 * 1000;
  const endAt = startedAt + durationMs;
  const warned = new Set();
  let intervalId = null;
  let expired = false;

  function remainingMs() {
    return Math.max(0, endAt - Date.now());
  }

  function tick() {
    const remaining = remainingMs();
    const remainingSec = Math.ceil(remaining / 1000);
    onTick({ remainingMs: remaining, remainingSec, label: formatTime(remainingSec) });

    // Fire each warning exactly once, right as we cross its threshold.
    // The 1200ms window comfortably contains several 250ms ticks, so we
    // never skip over the moment we cross a threshold.
    for (const w of warnAtMinutes) {
      if (remaining <= w * 60000 && remaining > (w * 60000 - 1200) && !warned.has(w)) {
        warned.add(w);
        onWarn(w);
      }
    }

    if (remaining <= 0 && !expired) {
      expired = true;
      stop();
      onExpire();
    }
  }

  function start() {
    tick();
    intervalId = setInterval(tick, 250);
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return { start, stop, remainingMs, get expired() { return expired; } };
}
