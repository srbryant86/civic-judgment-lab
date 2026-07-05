"use client";

import { useState } from "react";

type Mode = "full" | "modified" | "el";

export function LevelToggle({ modifiedReading }: { modifiedReading: string }) {
  const [mode, setMode] = useState<Mode>("full");

  return (
    <div className="no-print">
      <div className="leveltoggle">
        <span className="leveltoggle__label">Reading level:</span>
        <div className="leveltoggle__btns" role="group" aria-label="Reading level">
          {(["full", "modified", "el"] as Mode[]).map((m) => (
            <button
              key={m}
              type="button"
              className="leveltoggle__btn"
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
            >
              {m === "full" ? "Full" : m === "modified" ? "Modified" : "EL support"}
            </button>
          ))}
        </div>
      </div>

      {mode === "modified" ? (
        <div className="callout callout--note" style={{ marginBottom: "1.5rem" }}>
          <div className="callout__title">Modified reading support</div>
          <p>{modifiedReading}</p>
          <p className="muted" style={{ marginBottom: 0, fontSize: "0.85rem" }}>
            Each day&rsquo;s &ldquo;Struggling readers&rdquo; support below also applies. The central
            question and cognitive demand stay the same — only the reading load changes.
          </p>
        </div>
      ) : null}

      {mode === "el" ? (
        <div className="callout callout--info" style={{ marginBottom: "1.5rem" }}>
          <div className="callout__title">English-learner support</div>
          <p style={{ marginBottom: 0 }}>
            Use each day&rsquo;s &ldquo;English learners&rdquo; differentiation below: pre-taught
            vocabulary with cognates and visuals, sentence frames, partner rehearsal before writing,
            and permission to reason first in a home language. Content expectations are unchanged;
            only the language scaffolding is added.
          </p>
        </div>
      ) : null}
    </div>
  );
}
