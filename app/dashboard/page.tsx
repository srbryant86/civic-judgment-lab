import type { Metadata } from "next";
import Link from "next/link";
import { reconstruction } from "@/content/reconstruction";
import { PageHero, Section, Card } from "@/components/ui";
import { SourceCard, VocabList } from "@/components/content";
import ActionBar from "@/components/ActionBar";
import { dashboardToMarkdown } from "@/lib/markdown";

const d = reconstruction.dashboard;

export const metadata: Metadata = {
  title: "Teacher Dashboard",
  description: "An at-a-glance teaching dashboard for the day's objective, source, vocabulary, misconceptions, and exit ticket.",
};

export default function DashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · Teacher Dashboard"
        title="Today's teaching dashboard"
        lead={`Everything for one class period, at a glance — ${d.focusDay}.`}
      />

      <Section>
        <ActionBar text={dashboardToMarkdown(d)} downloadName="teacher-dashboard" />

        <div className="card-grid card-grid--2">
          <Card eyebrow="Today's objective">
            <p className="mb-0">{d.todaysObjective}</p>
          </Card>
          <Card eyebrow="Essential question">
            <p className="mb-0" style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}>
              {d.essentialQuestion}
            </p>
          </Card>
        </div>

        <h3 style={{ marginTop: "2rem" }}>Source of the day</h3>
        <SourceCard source={d.sourceOfTheDay} label="Source of the Day" />

        <h3 style={{ marginTop: "2rem" }}>Key vocabulary</h3>
        <VocabList items={d.keyVocabulary} />

        <div className="card-grid card-grid--2" style={{ marginTop: "2rem" }}>
          <Card eyebrow="Misconceptions to watch">
            <ul style={{ margin: 0 }}>
              {d.misconceptions.map((mm) => (
                <li key={mm}>{mm}</li>
              ))}
            </ul>
          </Card>
          <Card eyebrow="Discussion protocol">
            <p className="mb-0">{d.discussionProtocol}</p>
          </Card>
          <Card eyebrow="Differentiation supports">
            <ul style={{ margin: 0 }}>
              {d.differentiationSupports.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Card>
          <Card eyebrow="Exit ticket">
            <p className="mb-0">{d.exitTicket}</p>
          </Card>
        </div>

        <div className="callout callout--info" style={{ marginTop: "2rem" }}>
          <div className="callout__title">Tomorrow's bridge</div>
          <p style={{ marginBottom: 0 }}>{d.tomorrowsBridge}</p>
        </div>

        <div style={{ marginTop: "1.75rem" }}>
          <Link href="/reconstruction" className="btn btn--ghost">
            ← Back to the full unit
          </Link>
        </div>
      </Section>
    </>
  );
}
