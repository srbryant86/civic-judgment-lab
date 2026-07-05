import { civicJudgment } from "@/content/civicJudgment";

const TIERS = [
  {
    tier: "Tier 1 · Grades 6–8",
    label: "Spot what it does",
    body: "Run rungs 1–8 on a single, sharply contrasting source, focusing on emphasis, omission, and who benefits or is harmed. Sentence frames scaffold the writing.",
  },
  {
    tier: "Tier 2 · Grades 9–10",
    label: "Weigh competing accounts",
    body: "Run all 10 rungs across a small source set, adding corroboration (rung 9) and evidence-accountable judgment (rung 10). This is where the Reconstruction DBQ lives.",
  },
  {
    tier: "Tier 3 · Grades 11–12",
    label: "Judge systems — and yourself",
    body: "Apply the ladder to media systems, AI output, and one's own motivated reasoning, handling genuinely ambiguous, near-present cases.",
  },
];

export function BiasConsequenceLadder({
  compact = false,
  showCalibration = false,
}: {
  compact?: boolean;
  showCalibration?: boolean;
}) {
  return (
    <div>
      <ol className="steps" style={{ maxWidth: "80ch" }}>
        {civicJudgment.ladder.map((s) => (
          <li key={s.step}>
            <strong style={{ color: "var(--navy-deep)" }}>{s.title}</strong>
            {compact ? null : (
              <> <span style={{ color: "var(--ink-soft)" }}>{s.prompt}</span></>
            )}
          </li>
        ))}
      </ol>

      {showCalibration ? (
        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          {TIERS.map((t) => (
            <div className="card" key={t.tier}>
              <div className="card__eyebrow">{t.tier}</div>
              <h4 style={{ margin: "0 0 0.35rem" }}>{t.label}</h4>
              <p className="card__body" style={{ marginBottom: 0 }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
