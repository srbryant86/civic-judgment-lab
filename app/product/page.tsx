import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "@/content/portfolio";
import { PageHero, Section, Card, CardGrid, Callout } from "@/components/ui";

const p = portfolio.product;

export const metadata: Metadata = {
  title: "Product Overview",
  description: p.tagline,
};

export default function ProductPage() {
  return (
    <>
      <PageHero eyebrow="History Judgment Lab · Product Demonstration" title={p.name} lead={p.tagline}>
        <div className="btn-row" style={{ marginTop: "1.25rem" }}>
          <Link href="/reconstruction-pack" className="btn btn--primary">
            Get the Reconstruction pack
          </Link>
          <Link href="/reconstruction" className="btn btn--ghost">
            Preview the full pack
          </Link>
          <Link href="/student-packet" className="btn btn--ghost">
            See the student packet
          </Link>
        </div>
      </PageHero>

      <Section eyebrow="What's included" title="Everything a teacher needs to run it">
        <div className="grid-2">
          <div>
            <h3>What's included</h3>
            <ul className="checklist">
              {p.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Who it's for</h3>
            <ul className="checklist">
              {p.forWho.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="tint" eyebrow="Low prep" title="How teachers can use it tomorrow">
        <ol className="steps" style={{ maxWidth: "80ch" }}>
          {p.useTomorrow.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Try before the rest" title="Free sample lesson">
        <div className="card card--pad-lg">
          <p className="mb-0" style={{ fontSize: "1.05rem", color: "var(--ink-soft)" }}>
            {p.sampleLesson}
          </p>
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <Link href="/reconstruction#sequence" className="btn btn--accent">
            Open the sample lesson
          </Link>
        </div>
      </Section>

      <Section variant="tint" eyebrow="The roadmap" title="Future packs">
        <CardGrid>
          {p.futurePacks.map((pack) => (
            <Card key={pack}>
              <div className="card__eyebrow">Planned</div>
              <h3 className="card__title" style={{ marginBottom: 0 }}>
                {pack}
              </h3>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <Callout variant="note" title="Pricing & licensing">
          <p style={{ marginBottom: 0 }}>{p.pricingNote}</p>
        </Callout>
      </Section>
    </>
  );
}
