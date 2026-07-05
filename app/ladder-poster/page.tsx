import type { Metadata } from "next";
import Link from "next/link";
import { civicJudgment } from "@/content/civicJudgment";
import { CORE_PRINCIPLE, RECURRING_QUESTION } from "@/content/site";
import { Section } from "@/components/ui";
import ActionBar from "@/components/ActionBar";

export const metadata: Metadata = {
  title: "The Bias Consequence Ladder — Classroom Poster",
  description:
    "A free, printable one-page classroom poster of the 10-step Bias Consequence Ladder.",
};

export default function LadderPosterPage() {
  return (
    <Section>
      <div className="poster">
        <div className="no-print" style={{ marginBottom: "1.25rem" }}>
          <ActionBar print downloadName="bias-consequence-ladder-poster" note="Free to print and post. Attribution: History Judgment Lab." />
          <Link href="/civic-judgment" className="btn btn--ghost btn--sm">
            ← The full framework
          </Link>
        </div>

        <p className="eyebrow" style={{ marginBottom: "0.25rem" }}>Civic Judgment Lab · Classroom Poster</p>
        <h1 style={{ marginBottom: "0.35rem" }}>The Bias Consequence Ladder</h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1.15rem",
            color: "var(--accent)",
            marginTop: 0,
          }}
        >
          {RECURRING_QUESTION}
        </p>
        <hr className="onepager__rule" />

        <div>
          {civicJudgment.ladder.map((s) => (
            <div className="poster__rung" key={s.step}>
              <span className="poster__n" aria-hidden>
                {s.step}
              </span>
              <span>
                <strong style={{ color: "var(--navy-deep)" }}>{s.title}</strong>
              </span>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.2rem",
            color: "var(--navy-deep)",
            marginTop: "1.5rem",
            textAlign: "center",
          }}
        >
          &ldquo;{CORE_PRINCIPLE}&rdquo;
        </p>
        <p className="provenance center">History Judgment Lab · civicjudgmentlab.example</p>
      </div>
    </Section>
  );
}
