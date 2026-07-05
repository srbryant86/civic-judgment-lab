import Link from "next/link";
import type { ReconstructionUnit } from "@/content/types";
import { STANDARDS_NOTE, RECURRING_QUESTION } from "@/content/site";
import { strandById } from "@/content/strands";
import { UNITS_BY_SEQUENCE, type UnitMeta } from "@/content/units";
import { PageHero, Section, Callout, StandardsNote, Jump } from "@/components/ui";
import {
  LessonDayCard,
  VocabList,
  RubricTable,
  QuizList,
  SourceCard,
} from "@/components/content";
import ActionBar from "@/components/ActionBar";
import { LevelToggle } from "@/components/LevelToggle";
import { reconstructionToMarkdown } from "@/lib/markdown";

function neighbors(meta: UnitMeta) {
  const seq = UNITS_BY_SEQUENCE.filter((u) => u.status === "available");
  const idx = seq.findIndex((u) => u.slug === meta.slug);
  return {
    prev: idx > 0 ? seq[idx - 1] : undefined,
    next: idx >= 0 && idx < seq.length - 1 ? seq[idx + 1] : undefined,
  };
}

export function UnitView({
  unit,
  meta,
  eyebrow,
  relatedLinks = [],
}: {
  unit: ReconstructionUnit;
  meta: UnitMeta;
  eyebrow: string;
  relatedLinks?: { href: string; label: string }[];
}) {
  const { prev, next } = neighbors(meta);
  const strands = meta.strandIds.map(strandById).filter(Boolean);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={unit.title}>
        <div className="meta-bar">
          <span className="badge badge--navy">{meta.course}</span>
          <span className="badge">Grades {meta.gradeBand}</span>
          <span className="badge badge--muted">Main version: Grade 10</span>
          <span className="badge badge--muted">Middle-school support included</span>
        </div>
        <Jump
          items={[
            { href: "#overview", label: "Overview" },
            { href: "#skills", label: "Skills & Vocabulary" },
            { href: "#alignment", label: "Alignment" },
            { href: "#sequence", label: "5-Day Sequence" },
            { href: "#judgment", label: "Judgment Spine" },
            { href: "#assessment", label: "Assessment" },
            { href: "#supports", label: "Supports" },
          ]}
        />
      </PageHero>

      <Section id="overview">
        <ActionBar text={reconstructionToMarkdown(unit)} downloadName={meta.slug} />
        <div className="btn-row no-print" style={{ marginBottom: "1.25rem" }}>
          <Link href={`/print/${meta.slug}`} className="btn btn--ghost btn--sm">
            Administrator one-pager →
          </Link>
        </div>
        <LevelToggle modifiedReading={unit.modifiedReading} />
        <Callout variant="caution" title="Driving question">
          <p style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: 0 }}>
            {unit.drivingQuestion}
          </p>
        </Callout>
        <p className="lead" style={{ maxWidth: "72ch", marginTop: "1.5rem" }}>
          {unit.overview}
        </p>

        <div className="grid-2" style={{ marginTop: "2rem" }}>
          <div>
            <h3>Essential questions</h3>
            <ul>
              {unit.essentialQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Learning objectives</h3>
            <ul>
              {unit.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="tint" id="skills" eyebrow="Disciplinary foundation" title="Historical thinking skills & vocabulary">
        <div className="grid-2">
          <div>
            <h3>Historical thinking skills</h3>
            <ul className="checklist">
              {unit.historicalThinkingSkills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Teacher notes</h3>
            <ul>
              {unit.teacherNotes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
        <h3 style={{ marginTop: "2rem" }}>Key vocabulary</h3>
        <VocabList items={unit.vocabulary} />
      </Section>

      <Section id="alignment" eyebrow="Standards" title="Sample alignment categories">
        <ul className="tag-list" style={{ gap: "0.5rem", marginBottom: "1.25rem" }}>
          {unit.alignmentCategories.map((a) => (
            <li key={a}>
              <span className="badge badge--accent">{a}</span>
            </li>
          ))}
        </ul>
        <StandardsNote />
      </Section>

      <Section
        variant="tint"
        id="sequence"
        eyebrow="Instruction"
        title="Five-day lesson sequence"
        intro="Each day includes an objective, bell ringer, mini-lesson, primary-source activity, discussion, student task, exit ticket, and differentiation supports."
      >
        {unit.days.map((d) => (
          <LessonDayCard key={d.day} day={d} />
        ))}
      </Section>

      <Section id="judgment" eyebrow="The spine" title="Where this unit sits in the judgment spine">
        <div className="grid-2">
          <div>
            <h3 className="mt-0">Thematic strands</h3>
            <ul className="tag-list" style={{ gap: "0.5rem", marginBottom: "1rem" }}>
              {strands.map((s) => (
                <li key={s!.id}>
                  <span className="badge badge--navy">{s!.label}</span>
                </li>
              ))}
            </ul>
            <h4>This unit re-asks</h4>
            <ul>
              {meta.travelingQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <Callout variant="info" title="Runs on the Bias Consequence Ladder">
              <p>{meta.ladderApplication}</p>
              <p style={{ marginBottom: 0 }}>
                <strong>Ladder focus:</strong> {meta.ladderFocus}
              </p>
            </Callout>
            <p style={{ marginTop: "1rem", color: "var(--ink-soft)" }}>
              <strong>{RECURRING_QUESTION}</strong>
            </p>
            <div className="btn-row">
              <Link href="/civic-judgment" className="btn btn--ghost btn--sm">
                The judgment method →
              </Link>
              <Link href="/scope-and-sequence" className="btn btn--ghost btn--sm">
                Scope &amp; sequence →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="tint" id="assessment" eyebrow="Assessment" title="Quiz, DBQ, and rubric">
        <div className="card card--pad-lg">
          <h3 className="mt-0">Check for understanding</h3>
          <QuizList items={unit.quiz} />
        </div>

        <div className="card card--pad-lg" style={{ marginTop: "1.5rem" }}>
          <h3 className="mt-0">DBQ-style writing prompt</h3>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.08rem" }}>{unit.dbq.prompt}</p>
          <Callout variant="note" title="Guidance">
            <p style={{ marginBottom: 0 }}>{unit.dbq.guidance}</p>
          </Callout>
          <div className="stack" style={{ marginTop: "1.25rem" }}>
            {unit.dbq.documents.map((doc, i) => (
              <SourceCard key={i} source={doc} label={`Document ${String.fromCharCode(65 + i)}`} />
            ))}
          </div>
        </div>

        <h3 style={{ marginTop: "2rem" }}>Analytic rubric</h3>
        <RubricTable rubric={unit.rubric} />
      </Section>

      <Section id="supports" eyebrow="Access & flexibility" title="Modified reading, extension, and sub plan">
        <div className="card-grid card-grid--2">
          <div className="card">
            <div className="card__eyebrow">Modified reading support</div>
            <p className="card__body" style={{ marginBottom: 0 }}>{unit.modifiedReading}</p>
          </div>
          <div className="card">
            <div className="card__eyebrow">Advanced extension</div>
            <p className="card__body" style={{ marginBottom: 0 }}>{unit.advancedExtension}</p>
          </div>
          <div className="card">
            <div className="card__eyebrow">Substitute plan</div>
            <p className="card__body" style={{ marginBottom: 0 }}>{unit.subPlan}</p>
          </div>
        </div>

        {relatedLinks.length ? (
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            {relatedLinks.map((l) => (
              <Link key={l.href} href={l.href} className="btn btn--ghost">
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}

        <div
          className="grid-2"
          style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--line)" }}
        >
          <div>
            {prev ? (
              <Link href={prev.href!} className="card card--link" style={{ display: "block" }}>
                <div className="card__eyebrow">← Earlier in the sequence</div>
                <strong style={{ color: "var(--navy-deep)" }}>{prev.title}</strong>
              </Link>
            ) : null}
          </div>
          <div>
            {next ? (
              <Link href={next.href!} className="card card--link" style={{ display: "block", textAlign: "right" }}>
                <div className="card__eyebrow">Next in the sequence →</div>
                <strong style={{ color: "var(--navy-deep)" }}>{next.title}</strong>
              </Link>
            ) : null}
          </div>
        </div>
      </Section>
    </>
  );
}
