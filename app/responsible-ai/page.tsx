import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "@/content/portfolio";
import { civicJudgment } from "@/content/civicJudgment";
import { PageHero, Section, Card, CardGrid, Callout } from "@/components/ui";

const r = portfolio.responsibleAI;
const ai = civicJudgment.aiAndBias;

export const metadata: Metadata = {
  title: "Responsible AI & Civic Judgment",
  description: r.intro.slice(0, 155),
};

export default function ResponsibleAIPage() {
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · Responsible Practice"
        title="Responsible AI & civic judgment"
        lead={r.intro}
      />

      <Section eyebrow="How AI is — and isn't — used" title="A clear account for families and administrators">
        <CardGrid cols={2}>
          {r.points.map((p) => (
            <Card key={p.title} title={p.title}>
              <p style={{ marginBottom: 0 }}>{p.text}</p>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section variant="ink" eyebrow="Bias, AI, and motivated reasoning at scale">
        <p style={{ maxWidth: "70ch" }}>{ai.intro}</p>
        <div className="grid-2" style={{ marginTop: "1.5rem" }}>
          {ai.points.map((p) => (
            <div key={p.title} className="card" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.16)" }}>
              <h4 style={{ color: "#fff", marginBottom: "0.4rem" }}>{p.title}</h4>
              <p style={{ color: "#cdd7e4", marginBottom: 0, fontSize: "0.96rem" }}>{p.text}</p>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
            color: "#fff",
            lineHeight: 1.3,
            marginTop: "2rem",
            maxWidth: "24ch",
          }}
        >
          “{ai.keyLine}”
        </p>
      </Section>

      <Section>
        <Callout variant="caution" title="A specific caution for educators — student data">
          <p style={{ marginBottom: 0 }}>{r.teacherDataNote}</p>
        </Callout>
        <div className="prose" style={{ marginTop: "2rem" }}>
          <p className="lead">{r.closing}</p>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/civic-judgment" className="btn btn--primary">
            See the civic-judgment framework
          </Link>
        </div>
      </Section>
    </>
  );
}
