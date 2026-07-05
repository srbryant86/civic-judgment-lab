import type { Metadata } from "next";
import Link from "next/link";
import { judgmentLab as jl } from "@/content/judgmentLab";
import { civicJudgment } from "@/content/civicJudgment";
import { PageHero, Section, Callout, Card, Jump } from "@/components/ui";

export const metadata: Metadata = {
  title: "Judgment Lab — Bias in the Age of AI",
  description:
    "Drop-in activities that run the Bias Consequence Ladder on AI-generated summaries, algorithmic feeds, and your own reasoning.",
};

export default function JudgmentLabPage() {
  const audit = jl.aiSummaryAudit;
  const feeds = jl.twoFeedsLab;
  const self = jl.runItOnYourself;

  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · The AI Age"
        title="Judgment Lab: bias in the age of AI"
        lead={jl.intro}
      >
        <Jump
          items={[
            { href: "#audit", label: "AI-Summary Audit" },
            { href: "#feeds", label: "Two Feeds, One Topic" },
            { href: "#self", label: "Run It On Yourself" },
          ]}
        />
      </PageHero>

      <Section variant="ink">
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
            color: "#fff",
            lineHeight: 1.3,
            margin: 0,
            maxWidth: "24ch",
          }}
        >
          “{civicJudgment.aiAndBias.keyLine}”
        </p>
      </Section>

      <Section id="audit" eyebrow="Activity 1 · Far transfer" title={audit.title}>
        <p className="lead" style={{ maxWidth: "72ch" }}>{audit.overview}</p>
        {audit.sourceUsed ? (
          <p className="muted"><strong>Source used:</strong> {audit.sourceUsed}</p>
        ) : null}
        <Card eyebrow="Setup" className="card--pad-lg">
          <p style={{ marginBottom: 0 }}>{audit.setup}</p>
        </Card>
        {audit.exampleSummaryNote ? (
          <Callout variant="caution" title="What a flawed AI summary tends to do">
            <p style={{ marginBottom: 0 }}>{audit.exampleSummaryNote}</p>
          </Callout>
        ) : null}
        <h3 style={{ marginTop: "1.5rem" }}>Steps</h3>
        <ol className="steps" style={{ maxWidth: "80ch" }}>
          {audit.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
        <h3 style={{ marginTop: "1.5rem" }}>Questions to answer</h3>
        <ul>
          {audit.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
        <div className="card-grid card-grid--2" style={{ marginTop: "1.5rem" }}>
          <Callout variant="info" title="Exit ticket">
            <p style={{ marginBottom: 0 }}>{audit.exitTicket}</p>
          </Callout>
          <Callout variant="note" title="Teacher note">
            <p style={{ marginBottom: 0 }}>{audit.teacherNote}</p>
          </Callout>
        </div>
      </Section>

      <Section variant="tint" id="feeds" eyebrow="Activity 2 · The feed" title={feeds.title}>
        <p className="lead" style={{ maxWidth: "72ch" }}>{feeds.overview}</p>
        <Callout variant="info" title="The scenario (fictional & de-identified)">
          <p style={{ marginBottom: 0 }}>{feeds.scenario}</p>
        </Callout>
        <Card eyebrow="Setup" className="card--pad-lg">
          <p style={{ marginBottom: 0 }}>{feeds.setup}</p>
        </Card>
        <h3 style={{ marginTop: "1.5rem" }}>Questions to answer</h3>
        <ul>
          {feeds.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
        <div className="card-grid card-grid--2" style={{ marginTop: "1.5rem" }}>
          <Callout variant="info" title="Exit ticket">
            <p style={{ marginBottom: 0 }}>{feeds.exitTicket}</p>
          </Callout>
          <Callout variant="note" title="Teacher note">
            <p style={{ marginBottom: 0 }}>{feeds.teacherNote}</p>
          </Callout>
        </div>
      </Section>

      <Section id="self" eyebrow="Activity 3 · The capstone" title={self.title}>
        <p className="lead" style={{ maxWidth: "72ch" }}>{self.overview}</p>
        <h3>Steps</h3>
        <ol className="steps" style={{ maxWidth: "80ch" }}>
          {self.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
        <Callout variant="caution" title="Guardrail">
          <p style={{ marginBottom: 0 }}>{self.guardrail}</p>
        </Callout>
        <Callout variant="note" title="Teacher note">
          <p style={{ marginBottom: 0 }}>{self.teacherNote}</p>
        </Callout>
        <div className="btn-row" style={{ marginTop: "1.75rem" }}>
          <Link href="/civic-judgment" className="btn btn--primary">
            The Bias Consequence Ladder
          </Link>
          <Link href="/responsible-ai" className="btn btn--ghost">
            Responsible AI statement
          </Link>
          <Link href="/scope-and-sequence" className="btn btn--ghost">
            The traveling judgment rubric
          </Link>
        </div>
      </Section>
    </>
  );
}
