import type { Metadata } from "next";
import Link from "next/link";
import { civicJudgment as cj } from "@/content/civicJudgment";
import { PageHero, Section, Card, CardGrid, Callout, Jump } from "@/components/ui";
import { BiasConsequenceLadder } from "@/components/BiasConsequenceLadder";
import ActionBar from "@/components/ActionBar";

export const metadata: Metadata = {
  title: "From Bias Detection to Civic Judgment",
  description:
    "Move students past “is this biased?” to the harder civic question: what does the bias do? Includes the Bias Consequence Ladder and a Reconstruction activity.",
};

const introParagraphs = cj.intro.split("\n\n");

const activityText = [
  `# ${cj.activity.title}`,
  cj.activity.overview,
  "",
  ...cj.activity.sources.map((s) => `## ${s.label}\n${s.description}\n\n${s.example ?? ""}`),
  "",
  "## Answer for each source",
  ...cj.activity.questions.map((q, i) => `${i + 1}. ${q}`),
  "",
  `Exit ticket: ${cj.activity.exitTicket}`,
  `Constructed response: ${cj.activity.constructedResponse}`,
].join("\n");

export default function CivicJudgmentPage() {
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · Framework"
        title="From Bias Detection to Civic Judgment"
      >
        <Jump
          items={[
            { href: "#principle", label: "Working Principle" },
            { href: "#shift", label: "The Shift" },
            { href: "#questions", label: "Inquiry Questions" },
            { href: "#ladder", label: "Bias Consequence Ladder" },
            { href: "#activity", label: "Activity" },
          ]}
        />
      </PageHero>

      <Section>
        <div className="prose stack" style={{ maxWidth: "72ch", fontSize: "1.08rem" }}>
          {introParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section variant="ink" id="principle" eyebrow="A working principle">
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.4rem, 3.4vw, 2.2rem)",
            lineHeight: 1.28,
            color: "#fff",
            margin: "0 0 1.25rem",
            maxWidth: "24ch",
          }}
        >
          “{cj.corePrinciple}”
        </p>
        <p style={{ maxWidth: "70ch" }}>{cj.principleExplanation}</p>
        <div
          className="callout callout--caution"
          style={{ marginTop: "1.5rem", background: "rgba(255,255,255,0.06)", borderLeftColor: "var(--accent-soft)" }}
        >
          <div className="callout__title" style={{ color: "#f0c9c0" }}>
            The danger
          </div>
          <p style={{ marginBottom: 0, color: "#e8eef5" }}>{cj.dangerLine}</p>
        </div>
      </Section>

      <Section id="shift" eyebrow="The shift" title={cj.fromDetectionToJudgment.intro ? "Bias detection is only the doorway" : ""}>
        <p className="lead" style={{ maxWidth: "72ch" }}>
          {cj.fromDetectionToJudgment.intro}
        </p>
        <CardGrid cols={2}>
          {cj.fromDetectionToJudgment.points.map((p, i) => (
            <div className="card card--num" key={p.title}>
              <span className="card__num" aria-hidden>
                {i + 1}
              </span>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__body" style={{ marginBottom: 0 }}>
                {p.text}
              </p>
            </div>
          ))}
        </CardGrid>
      </Section>

      <Section variant="tint" id="questions" eyebrow="The recurring question" title={cj.recurringQuestion}>
        <p className="section__intro" style={{ marginBottom: "1.5rem" }}>
          When students meet any source — a document, a feed, an AI answer — they learn to run these
          eight questions, not just “is it biased?”
        </p>
        <div className="card-grid">
          {cj.inquiryQuestions.map((q, i) => (
            <div className="card" key={q} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span
                aria-hidden
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--accent)",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  lineHeight: 1.1,
                }}
              >
                {i + 1}
              </span>
              <span style={{ color: "var(--ink-soft)" }}>{q}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="ladder" eyebrow="Student-facing framework" title="The Bias Consequence Ladder" intro="A ten-step routine students climb from a raw claim to a judgment they can defend. It runs in every unit and deepens across the grades.">
        <BiasConsequenceLadder showCalibration />
        <p className="btn-row" style={{ marginTop: "1.5rem" }}>
          <Link href="/scope-and-sequence" className="btn btn--ghost btn--sm">
            See how the ladder travels across units &amp; the judgment rubric →
          </Link>
          <Link href="/ladder-poster" className="btn btn--ghost btn--sm">
            Printable classroom poster →
          </Link>
        </p>
      </Section>

      <Section variant="tint" id="activity" eyebrow="Classroom activity" title={cj.activity.title}>
        <ActionBar text={activityText} downloadName="what-did-the-bias-do" />
        <p className="lead" style={{ maxWidth: "72ch" }}>
          {cj.activity.overview}
        </p>

        <div className="stack-lg" style={{ marginTop: "1.5rem" }}>
          {cj.activity.sources.map((s) => (
            <figure className="source" key={s.label} style={{ margin: 0 }}>
              <figcaption className="source__head">
                <span className="source__title" style={{ fontSize: "0.98rem" }}>
                  {s.label}
                </span>
              </figcaption>
              <div className="source__body">
                <p style={{ color: "var(--ink-soft)" }}>{s.description}</p>
                {s.example ? <blockquote className="source__excerpt">{s.example}</blockquote> : null}
              </div>
            </figure>
          ))}
        </div>

        <Card title="Answer these questions for each source" className="card--pad-lg" >
          <ol style={{ margin: 0, columns: "2 240px", columnGap: "2rem" }}>
            {cj.activity.questions.map((q) => (
              <li key={q} style={{ marginBottom: "0.4rem" }}>
                {q}
              </li>
            ))}
          </ol>
        </Card>

        <div className="card-grid card-grid--2" style={{ marginTop: "1.5rem" }}>
          <Callout variant="info" title="Exit ticket">
            <p style={{ marginBottom: 0 }}>{cj.activity.exitTicket}</p>
          </Callout>
          <Callout variant="info" title="Constructed-response prompt">
            <p style={{ marginBottom: 0 }}>{cj.activity.constructedResponse}</p>
          </Callout>
        </div>

        <Callout variant="note" title="Teacher note">
          <p style={{ marginBottom: 0 }}>{cj.activity.teacherNote}</p>
        </Callout>

        <div style={{ marginTop: "1.75rem" }}>
          <Link href="/reconstruction" className="btn btn--primary">
            Use this with the Reconstruction unit
          </Link>{" "}
          <Link href="/responsible-ai" className="btn btn--ghost">
            Bias &amp; AI on the Responsible AI page
          </Link>
        </div>
      </Section>
    </>
  );
}
