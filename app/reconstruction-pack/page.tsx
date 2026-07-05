import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "@/content/portfolio";
import { PRODUCT_SALE } from "@/content/site";
import { PageHero, Section, Card, CardGrid, Callout } from "@/components/ui";

const p = portfolio.product;

export const metadata: Metadata = {
  title: "Get the Reconstruction Starter Pack",
  description: p.tagline,
};

const WHY = [
  {
    title: "Genuine, verified sources",
    text: "Every document is a real, public-domain primary source, checked against the record — not a plausible-sounding fabrication. That is exactly what AI lesson generators get wrong on hard history.",
  },
  {
    title: "Teaches judgment, not just content",
    text: "The whole pack runs on one move — not “is this biased?” but “what does the bias do?” Students leave able to weigh evidence, power, and consequence, not just recall dates.",
  },
  {
    title: "Differentiation built in",
    text: "A modified reading version, an advanced extension, and per-lesson supports for striving readers, multilingual learners, and IEP/504 needs — the same rigorous question, made accessible.",
  },
];

const FAQ = [
  {
    q: "Is it standards-aligned?",
    a: "It ships with sample thematic alignment categories and a one-page overview an administrator can review. Exact standard codes should be verified against your current course of study before classroom use — the pack tells you so plainly rather than asserting codes it can’t guarantee.",
  },
  {
    q: "Did AI help make this?",
    a: "Yes — AI was used to draft and fact-check content at scale. What AI did not do is decide what’s true or what a lesson means. Every source is public-domain and verified, and materials are reviewed by a teacher before they reach students. That’s the same responsible-AI stance the pack teaches.",
  },
  {
    q: "Can I edit it?",
    a: "A production release ships as print-ready PDFs plus editable documents so you can adapt it to your class. This preview lets you copy and download the materials as text to see the full structure.",
  },
  {
    q: "What grades is it for?",
    a: "Grade band 8–11, calibrated to Grade 10, with a middle-school (6/8) support version and an advanced extension included — so one pack serves a range of readers.",
  },
];

export default function ReconstructionPackSalesPage() {
  return (
    <>
      <PageHero eyebrow="History Judgment Lab · Reconstruction Starter Pack" title={p.name} lead={p.tagline}>
        <div className="btn-row" style={{ marginTop: "1.25rem" }}>
          <Link href="/reconstruction#sequence" className="btn btn--accent">
            Get the free sample lesson
          </Link>
          <Link href="/reconstruction" className="btn btn--ghost">
            Preview the full pack
          </Link>
        </div>
        <p className="muted" style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
          Portfolio demonstration — not currently for sale. Everything below shows the design standard
          of a finished pack.
        </p>
      </PageHero>

      <Section variant="tint" eyebrow="Try it first" title="Free sample: “Freedom on Paper”">
        <div className="card card--pad-lg">
          <p className="lead" style={{ marginBottom: "1.25rem" }}>{p.sampleLesson}</p>
          <Link href="/reconstruction#sequence" className="btn btn--primary">
            Open the sample lesson
          </Link>
        </div>
      </Section>

      <Section eyebrow="What's included" title="A complete, ready-to-run unit">
        <div className="grid-2">
          <div>
            <h3>Everything in the pack</h3>
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

      <Section variant="tint" eyebrow="Low prep" title="Use it tomorrow">
        <ol className="steps" style={{ maxWidth: "80ch" }}>
          {p.useTomorrow.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Why this, not a chatbot lesson" title="What makes it worth it">
        <CardGrid>
          {WHY.map((w) => (
            <Card key={w.title} title={w.title}>
              <p style={{ marginBottom: 0 }}>{w.text}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section variant="tint" eyebrow="Pricing & licensing" title="Straightforward, teacher-first">
        <Callout variant="note" title="A note on pricing">
          <p style={{ marginBottom: 0 }}>{p.pricingNote}</p>
        </Callout>
        <p className="muted" style={{ marginTop: "1rem" }}>
          In a live release: single-teacher, building, and district licenses, with the Day&nbsp;1
          lesson always free.
        </p>

        {PRODUCT_SALE.available && PRODUCT_SALE.purchaseUrl ? (
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <a
              href={PRODUCT_SALE.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent"
            >
              Buy the pack — {PRODUCT_SALE.price}
            </a>
            <Link href="/reconstruction#sequence" className="btn btn--ghost">
              Try the free sample first
            </Link>
            <Link href="/for-administrators" className="btn btn--ghost">
              For principals &amp; chairs
            </Link>
          </div>
        ) : (
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/reconstruction#sequence" className="btn btn--accent">
              Try the free sample
            </Link>
            <Link href="/for-administrators" className="btn btn--ghost">
              For principals &amp; chairs
            </Link>
            {PRODUCT_SALE.contactEmail ? (
              <a
                href={`mailto:${PRODUCT_SALE.contactEmail}?subject=History%20Judgment%20Lab%20licensing`}
                className="btn btn--ghost"
              >
                Licensing enquiries
              </a>
            ) : null}
          </div>
        )}
      </Section>

      <Section eyebrow="Questions" title="Frequently asked">
        <div className="stack">
          {FAQ.map((f) => (
            <div className="card" key={f.q}>
              <h3 className="card__title">{f.q}</h3>
              <p className="card__body" style={{ marginBottom: 0 }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="ink">
        <div style={{ maxWidth: "60ch" }}>
          <h2 style={{ color: "#fff" }}>See the pack that proves it</h2>
          <p>Start with the free lesson, then walk the full five-day unit.</p>
          <div className="btn-row" style={{ marginTop: "1.25rem" }}>
            <Link href="/reconstruction#sequence" className="btn btn--on-ink">
              Get the free sample
            </Link>
            <Link href="/reconstruction" className="btn btn--on-ink-ghost">
              Preview the full pack
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
