import type { Metadata } from "next";
import { differentiation } from "@/content/differentiation";
import { PageHero, Section, Callout } from "@/components/ui";

const dc = differentiation;

export const metadata: Metadata = {
  title: "Differentiation Supports",
  description: "Universal Design for Learning supports that keep the same rigorous question accessible to every learner.",
};

export default function DifferentiationPage() {
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · Access by Design"
        title="Differentiation supports"
        lead={dc.intro}
      />

      <Section>
        <Callout variant="note" title="A note on language">
          <p style={{ marginBottom: 0 }}>{dc.languageNote}</p>
        </Callout>

        <div className="stack-lg" style={{ marginTop: "2rem" }}>
          {dc.supports.map((s, i) => (
            <article
              key={s.audience}
              className="card card--pad-lg card--num"
              style={{ borderLeft: "4px solid var(--navy-soft)" }}
            >
              <span className="card__num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-0">{s.audience}</h3>
              <p style={{ color: "var(--ink-soft)", fontStyle: "italic" }}>{s.principle}</p>
              <h4 style={{ marginTop: "1rem" }}>Strategies</h4>
              <ul>
                {s.strategies.map((st, j) => (
                  <li key={j}>{st}</li>
                ))}
              </ul>
              <Callout variant="info" title="In the Reconstruction unit">
                <p style={{ marginBottom: 0 }}>{s.classroomExample}</p>
              </Callout>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
