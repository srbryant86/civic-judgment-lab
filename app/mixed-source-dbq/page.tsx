import type { Metadata } from "next";
import Link from "next/link";
import { mixedSourceDbq as m } from "@/content/mixedSourceDbq";
import { RECURRING_QUESTION } from "@/content/site";
import { PageHero, Section, Callout, Card } from "@/components/ui";
import { SourceCard, DataTableView } from "@/components/content";
import ActionBar from "@/components/ActionBar";

export const metadata: Metadata = {
  title: "Mixed-Source DBQ",
  description:
    "One question, three kinds of evidence — a text source, a data table, and a described image — analyzed with the same judgment ladder.",
};

export default function MixedSourceDbqPage() {
  return (
    <>
      <PageHero eyebrow="History Judgment Lab · Signature Assessment" title={m.title} lead={m.overview} />

      <Section>
        <ActionBar print downloadName="mixed-source-dbq" note="Print or save this DBQ as a PDF." />
        <Callout variant="caution" title="Driving question">
          <p style={{ fontSize: "1.1rem", fontFamily: "var(--font-serif)", marginBottom: 0 }}>
            {m.drivingQuestion}
          </p>
        </Callout>
        <Callout variant="info" title="Why three source types">
          <p style={{ marginBottom: 0 }}>
            The same civic-judgment move — <strong>{RECURRING_QUESTION}</strong> — works whether the
            bias lives in a statute&rsquo;s wording, a census table&rsquo;s categories, or a
            map&rsquo;s shading. {m.rubricNote}
          </p>
        </Callout>
      </Section>

      <Section variant="tint" eyebrow="The evidence" title="Three kinds of source, one question">
        <div className="stack-lg">
          <SourceCard source={{ ...m.textSource, sourceType: "text" }} label="Text Source" />

          <figure className="source" style={{ margin: 0 }}>
            <figcaption className="source__head">
              <span className="source__label">Data Source</span>
              <span className="source__title">{m.dataSource.title}</span>
            </figcaption>
            <div className="source__body">
              <DataTableView
                table={{ caption: m.dataSource.caption, columns: m.dataSource.columns, rows: m.dataSource.rows }}
              />
              <div className="source__attr" style={{ marginTop: "0.75rem" }}>— {m.dataSource.attribution}</div>
              <p className="source__context">Context: {m.dataSource.contextNote}</p>
              <p className="source__task" style={{ marginBottom: "0.4rem" }}>
                <strong>Read the numbers:</strong>
              </p>
              <ul style={{ margin: 0 }}>
                {m.dataSource.readingQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </figure>

          <figure className="source" style={{ margin: 0 }}>
            <figcaption className="source__head">
              <span className="source__label">Visual Source</span>
              <span className="source__title">{m.imageSource.title}</span>
            </figcaption>
            <div className="source__body">
              <div className="image-source" role="img" aria-label={m.imageSource.description}>
                <span className="image-source__tag">Image described — teacher-provided</span>
                <p style={{ marginBottom: 0 }}>{m.imageSource.description}</p>
              </div>
              <div className="source__attr" style={{ marginTop: "0.75rem" }}>
                — {m.imageSource.attribution} · {m.imageSource.archiveHint}
              </div>
              <p className="source__context">Context: {m.imageSource.contextNote}</p>
              <p className="source__task" style={{ marginBottom: "0.4rem" }}>
                <strong>What to look for:</strong>
              </p>
              <ul style={{ margin: 0 }}>
                {m.imageSource.whatToLookFor.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
          </figure>
        </div>
      </Section>

      <Section eyebrow="The analysis" title="Run the ladder across all three">
        <Card className="card--pad-lg">
          <ol style={{ margin: 0 }}>
            {m.ladderQuestions.map((q, i) => (
              <li key={i} style={{ marginBottom: "0.4rem" }}>
                {q}
              </li>
            ))}
          </ol>
        </Card>
        <Callout variant="note" title="Corroboration task">
          <p style={{ marginBottom: 0 }}>{m.corroborationTask}</p>
        </Callout>
        <div className="card-grid card-grid--2" style={{ marginTop: "1.5rem" }}>
          <Callout variant="info" title="Exit ticket">
            <p style={{ marginBottom: 0 }}>{m.exitTicket}</p>
          </Callout>
          <Callout variant="note" title="Teacher note">
            <p style={{ marginBottom: 0 }}>{m.teacherNote}</p>
          </Callout>
        </div>
        <div className="btn-row" style={{ marginTop: "1.75rem" }}>
          <Link href="/civil-war-causes" className="btn btn--primary">
            The Civil War Causes unit
          </Link>
          <Link href="/scope-and-sequence" className="btn btn--ghost">
            The Traveling Judgment Rubric
          </Link>
        </div>
      </Section>
    </>
  );
}
