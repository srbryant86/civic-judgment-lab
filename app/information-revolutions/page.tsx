import type { Metadata } from "next";
import Link from "next/link";
import { informationRevolutions } from "@/content/informationRevolutions";
import { PageHero, Section, Callout, Card, Jump } from "@/components/ui";
import { Timeline } from "@/components/content";
import ActionBar from "@/components/ActionBar";
import { infoRevToMarkdown } from "@/lib/markdown";
import type { InfoRevDay } from "@/content/types";

const m = informationRevolutions;

export const metadata: Metadata = {
  title: "Information Revolutions Module",
  description: m.overview.slice(0, 155),
};

function DayBlock({ day }: { day: InfoRevDay }) {
  return (
    <article className="lesson-day" id={`day-${day.day}`}>
      <header className="lesson-day__head">
        <span className="lesson-day__num" aria-hidden>
          {day.day}
        </span>
        <div>
          <h3 className="lesson-day__title">
            Day {day.day}: {day.title}
          </h3>
        </div>
      </header>
      <div className="lesson-day__body">
        <div className="field">
          <div className="field__label">Teacher notes</div>
          <ul style={{ margin: 0 }}>
            {day.teacherNotes.map((n, i) => (
              <li key={i} style={{ color: "var(--ink-soft)" }}>
                {n}
              </li>
            ))}
          </ul>
        </div>

        <div className="field">
          <div className="field__label">Student reading — {day.studentReading.title}</div>
          <div className="field__body">
            {day.studentReading.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="field">
          <div className="field__label">Discussion prompts</div>
          <ul style={{ margin: 0 }}>
            {day.discussionPrompts.map((p, i) => (
              <li key={i} style={{ color: "var(--ink-soft)" }}>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="field">
          <div className="field__label">Source / media analysis — {day.mediaAnalysis.title}</div>
          <div className="field__body">
            <p>{day.mediaAnalysis.instructions}</p>
            {day.mediaAnalysis.focus ? (
              <p className="muted" style={{ fontSize: "0.9rem" }}>
                Focus: {day.mediaAnalysis.focus}
              </p>
            ) : null}
            <ul style={{ margin: 0 }}>
              {day.mediaAnalysis.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="field">
          <div className="field__label">Claim–Evidence–Reasoning task</div>
          <div className="field__body">
            <p style={{ fontWeight: 600, color: "var(--navy-deep)" }}>{day.cerTask.prompt}</p>
            <p style={{ marginBottom: 0 }}>{day.cerTask.guidance}</p>
          </div>
        </div>

        <div className="field">
          <div className="field__label">Reflection</div>
          <div className="field__body">{day.reflection}</div>
        </div>
      </div>
    </article>
  );
}

export default function InformationRevolutionsPage() {
  return (
    <>
      <PageHero eyebrow="History Judgment Lab · Bonus Module" title={m.title}>
        <Jump
          items={[
            { href: "#idea", label: "Core Idea" },
            { href: "#timeline", label: "Timeline" },
            { href: "#days", label: "3-Day Module" },
            { href: "#norms", label: "Discussion Norms" },
          ]}
        />
      </PageHero>

      <Section id="idea">
        <ActionBar text={infoRevToMarkdown(m)} downloadName="information-revolutions-module" />
        <Callout variant="caution" title="Driving question">
          <p style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: 0 }}>
            {m.drivingQuestion}
          </p>
        </Callout>
        <div className="card card--pad-lg" style={{ marginTop: "1.5rem" }}>
          <div className="card__eyebrow">Core idea</div>
          <p className="lead mb-0">{m.coreIdea}</p>
        </div>
        <p style={{ maxWidth: "72ch", marginTop: "1.5rem", color: "var(--ink-soft)" }}>{m.overview}</p>
      </Section>

      <Section variant="tint" id="timeline" eyebrow="The long view" title="Who could produce, distribute, and act on information">
        <Timeline items={m.timeline} />
      </Section>

      <Section id="days" eyebrow="Instruction" title="Three-day module">
        {m.days.map((d) => (
          <DayBlock key={d.day} day={d} />
        ))}
      </Section>

      <Section variant="tint" id="norms" eyebrow="Classroom culture" title="Discussion norms for civil disagreement">
        <Card>
          <ul className="checklist" style={{ margin: 0 }}>
            {m.discussionNorms.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </Card>
        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/civic-judgment" className="btn btn--primary">
            Continue to the civic-judgment framework
          </Link>
        </div>
      </Section>
    </>
  );
}
