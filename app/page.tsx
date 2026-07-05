import Link from "next/link";
import { portfolio } from "@/content/portfolio";
import { SITE, CORE_PRINCIPLE, RECURRING_QUESTION } from "@/content/site";
import { Section, Card, CardGrid } from "@/components/ui";

const { landing, product } = portfolio;

const HERO_LINKS = [
  { href: "/reconstruction", label: "View Reconstruction Starter Pack", primary: true },
  { href: "/information-revolutions", label: "View Information Revolutions Module" },
  { href: "/dashboard", label: "View Teacher Dashboard" },
  { href: "/student-packet", label: "View Student Packet" },
  { href: "/responsible-ai", label: "Read Responsible AI Statement" },
];

const PAGE_CARDS = [
  { href: "/reconstruction", eyebrow: "Flagship unit", title: "Reconstruction Starter Pack", text: "A five-day, source-based unit on citizenship, power, and the fight over what freedom meant." },
  { href: "/civil-war-causes", eyebrow: "Unit", title: "Causes of the Civil War", text: "What secessionists said in 1861 versus how the story was later retold — sourcing and corroboration in their sharpest form." },
  { href: "/civic-judgment", eyebrow: "Framework", title: "From Bias Detection to Civic Judgment", text: "Move students past “is this biased?” to the harder question: what does the bias do?" },
  { href: "/scope-and-sequence", eyebrow: "The system", title: "Scope & Sequence", text: "Five thematic strands and one judgment ladder that run across every unit — a spine, not a loose collection." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow hero__eyebrow">{SITE.program}</span>
          <h1 className="hero__title">{SITE.name}</h1>
          <p className="hero__tagline">{SITE.tagline}</p>
          <p className="hero__lead">{SITE.description}</p>
          <div className="hero__actions btn-row">
            {HERO_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`btn ${l.primary ? "btn--primary" : "btn--ghost"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section variant="tint" eyebrow="The thesis" title="Access. Execution. Judgment.">
        <div className="thesis">
          {landing.thesisSteps.map((s, i) => (
            <div className="thesis__step" key={s.label}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <div className="thesis__label">{s.label}</div>
              <p style={{ marginBottom: 0, color: "var(--ink-soft)" }}>{s.text}</p>
            </div>
          ))}
        </div>
        <p className="lead" style={{ marginTop: "1.75rem", maxWidth: "72ch" }}>
          {landing.mainCopy}
        </p>
      </Section>

      <Section variant="ink">
        <div style={{ maxWidth: "60ch" }}>
          <span className="eyebrow">A working principle</span>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              lineHeight: 1.3,
              color: "#fff",
              margin: "0 0 1rem",
            }}
          >
            “{CORE_PRINCIPLE}”
          </p>
          <p style={{ marginBottom: "1.25rem" }}>
            Civic judgment is more than detecting bias. The sharper question we teach students to ask
            is not only <em>“Is this biased?”</em> but <strong style={{ color: "#fff" }}>“{RECURRING_QUESTION}”</strong>
          </p>
          <Link href="/civic-judgment" className="btn btn--on-ink">
            Explore the civic-judgment framework
          </Link>
        </div>
      </Section>

      <Section eyebrow="What's inside" title="A coherent system, not a loose collection">
        <CardGrid cols={2}>
          {PAGE_CARDS.map((c) => (
            <Link href={c.href} key={c.href} className="card card--link">
              <div className="card__eyebrow">{c.eyebrow}</div>
              <h3 className="card__title">{c.title}</h3>
              <p className="card__body" style={{ marginBottom: 0 }}>
                {c.text}
              </p>
            </Link>
          ))}
        </CardGrid>

        <div className="grid-2" style={{ marginTop: "2rem" }}>
          {landing.features.map((f) => (
            <Card key={f.title} title={f.title}>
              <p style={{ marginBottom: 0 }}>{f.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="tint" eyebrow="Why it matters now" title="Judgment is the scarce resource">
        <p className="lead" style={{ maxWidth: "72ch" }}>
          {landing.whyItMatters}
        </p>
      </Section>

      <Section eyebrow="Who it's for" title="Built for serious secondary social studies">
        <ul className="tag-list" style={{ gap: "0.6rem" }}>
          {landing.audience.map((a) => (
            <li key={a}>
              <span className="badge badge--muted">{a}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="ink">
        <div className="grid-2" style={{ alignItems: "center" }}>
          <div>
            <span className="eyebrow">Product demonstration</span>
            <h2 style={{ color: "#fff" }}>{product.name}</h2>
            <p>{product.tagline}</p>
          </div>
          <div className="btn-row" style={{ justifyContent: "flex-start" }}>
            <Link href="/product" className="btn btn--on-ink">
              View the product page
            </Link>
            <Link href="/before-after" className="btn btn--on-ink-ghost">
              See Before / After
            </Link>
            <Link href="/reflection" className="btn btn--on-ink-ghost">
              Read the educator reflection
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
