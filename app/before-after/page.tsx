import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "@/content/portfolio";
import { PageHero, Section, Card, Callout } from "@/components/ui";

const ba = portfolio.beforeAfter;

export const metadata: Metadata = {
  title: "Before / After",
  description: "From a rough teacher idea to a structured, differentiated, standards-aligned unit — the instructional-design value made visible.",
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · Instructional Design"
        title="From rough idea to finished lesson system"
        lead="The same honest teaching instinct — framed, sequenced, differentiated, assessed, and documented."
      />

      <Section>
        <div className="ba-grid">
          <div className="ba-col ba-col--before">
            <div className="ba-col__label">Before · a teacher's rough idea</div>
            <div className="ba-before">“{ba.roughIdea}”</div>
          </div>
          <div className="ba-col ba-col--after">
            <div className="ba-col__label">After · a structured teaching brief</div>
            <Card>
              <p className="mb-0">{ba.teachingBrief}</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section variant="tint" eyebrow="The finished system" title="How the idea becomes a unit">
        <h3>Lesson sequence</h3>
        <ol className="steps" style={{ maxWidth: "82ch" }}>
          {ba.lessonSequence.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>

        <div className="card-grid card-grid--2" style={{ marginTop: "2rem" }}>
          <Card eyebrow="Source activity">
            <p className="mb-0">{ba.sourceActivity}</p>
          </Card>
          <Card eyebrow="Assessment">
            <p className="mb-0">{ba.assessment}</p>
          </Card>
        </div>

        <h3 style={{ marginTop: "2rem" }}>Differentiated supports</h3>
        <ul className="checklist" style={{ maxWidth: "82ch" }}>
          {ba.differentiatedSupports.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <Callout variant="info" title="Printable packet" >
          <p style={{ marginBottom: 0 }}>{ba.packetNote}</p>
        </Callout>
      </Section>

      <Section variant="ink">
        <div style={{ maxWidth: "72ch" }}>
          <span className="eyebrow">The value</span>
          <p style={{ fontSize: "1.15rem", color: "#eef2f7" }}>{ba.closingValue}</p>
          <div className="btn-row" style={{ marginTop: "1.25rem" }}>
            <Link href="/reconstruction" className="btn btn--on-ink">
              See the finished unit
            </Link>
            <Link href="/product" className="btn btn--on-ink-ghost">
              Product overview
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
