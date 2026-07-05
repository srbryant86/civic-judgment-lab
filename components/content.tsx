import { ReactNode } from "react";
import type {
  LessonDay,
  QuizItem,
  Rubric,
  Source,
  SourceWithTask,
  VocabItem,
  InformationRevolutions,
  DataTable,
} from "@/content/types";

export function DataTableView({ table }: { table: DataTable }) {
  return (
    <div className="table-scroll">
      <table className="data">
        {table.caption ? <caption>{table.caption}</caption> : null}
        <thead>
          <tr>
            {table.columns.map((c, i) => (
              <th key={i} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) =>
                ci === 0 ? (
                  <th key={ci} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={ci}>{cell}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SourceCard({
  source,
  label = "Primary Source",
}: {
  source: Source | SourceWithTask;
  label?: string;
}) {
  const task = (source as SourceWithTask).task;
  const kind = source.sourceType ?? "text";
  const kindLabel =
    kind === "data" ? "Data Source" : kind === "image" || kind === "map" ? "Visual Source" : label;
  return (
    <figure className="source">
      <figcaption className="source__head">
        <span className="source__label">{kindLabel}</span>
        <span className="source__title">{source.title}</span>
      </figcaption>
      <div className="source__body">
        {kind === "data" && source.dataTable ? (
          <DataTableView table={source.dataTable} />
        ) : (kind === "image" || kind === "map") && source.imageDescription ? (
          <div className="image-source" role="img" aria-label={source.alt ?? source.imageDescription}>
            <span className="image-source__tag">Image described — teacher-provided</span>
            <p style={{ marginBottom: 0 }}>{source.imageDescription}</p>
          </div>
        ) : (
          <blockquote className="source__excerpt">{source.excerpt}</blockquote>
        )}
        <div className="source__attr" style={{ marginTop: "0.75rem" }}>— {source.attribution}</div>
        {source.contextNote ? (
          <p className="source__context">Context: {source.contextNote}</p>
        ) : null}
        {task ? (
          <p className="source__task">
            <strong>Analyze:</strong> {task}
          </p>
        ) : null}
      </div>
    </figure>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="field">
      <div className="field__label">{label}</div>
      <div className="field__body">{children}</div>
    </div>
  );
}

const DIFF_LABELS: { key: keyof LessonDay["differentiation"]; label: string }[] = [
  { key: "strugglingReaders", label: "Struggling readers" },
  { key: "advanced", label: "Advanced" },
  { key: "englishLearners", label: "English learners" },
  { key: "iepAnd504", label: "IEP / 504" },
  { key: "executiveFunction", label: "Executive function" },
  { key: "alternateResponse", label: "Alternate response" },
];

export function LessonDayCard({ day }: { day: LessonDay }) {
  const diffs = DIFF_LABELS.filter((d) => day.differentiation?.[d.key]);
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
          <p className="lesson-day__obj">
            <strong>Objective:</strong> {day.objective}
          </p>
        </div>
      </header>
      <div className="lesson-day__body">
        <Field label="Bell ringer">{day.bellRinger}</Field>
        <Field label="Mini-lesson">{day.miniLesson}</Field>
        <Field label="Source activity">
          <SourceCard source={day.sourceActivity} />
        </Field>
        <Field label="Discussion question">{day.discussionQuestion}</Field>
        <Field label="Student task">{day.studentTask}</Field>
        <Field label="Exit ticket">{day.exitTicket}</Field>
        {diffs.length ? (
          <Field label="Differentiation supports">
            <div className="diff-grid">
              {diffs.map((d) => (
                <div className="diff-item" key={d.key}>
                  <div className="diff-item__label">{d.label}</div>
                  <div className="diff-item__body">{day.differentiation[d.key]}</div>
                </div>
              ))}
            </div>
          </Field>
        ) : null}
      </div>
    </article>
  );
}

export function VocabList({ items }: { items: VocabItem[] }) {
  return (
    <dl className="vocab">
      {items.map((v) => (
        <div key={v.term}>
          <dt>{v.term}</dt>
          <dd>{v.definition}</dd>
        </div>
      ))}
    </dl>
  );
}

export function RubricTable({ rubric }: { rubric: Rubric }) {
  return (
    <div className="table-scroll">
      <table className="data">
        <thead>
          <tr>
            <th scope="col">Criterion</th>
            {rubric.levels.map((l) => (
              <th scope="col" key={l}>
                {l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rubric.criteria.map((c) => (
            <tr key={c.name}>
              <th scope="row">{c.name}</th>
              {rubric.levels.map((_, i) => (
                <td key={i}>{c.descriptors[i] ?? "—"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function QuizList({ items }: { items: QuizItem[] }) {
  return (
    <ol className="stack">
      {items.map((q, i) => (
        <li key={i} style={{ marginBottom: "1rem" }}>
          <p style={{ fontWeight: 600, color: "var(--navy-deep)", marginBottom: "0.4rem" }}>
            {q.question}
          </p>
          {q.choices?.length ? (
            <ul style={{ margin: "0 0 0.5rem" }}>
              {q.choices.map((c, j) => (
                <li key={j}>{c}</li>
              ))}
            </ul>
          ) : null}
          <p className="muted" style={{ fontSize: "0.9rem", marginBottom: 0 }}>
            <strong style={{ color: "var(--ok)" }}>Answer:</strong> {q.answer}
            {q.explanation ? ` — ${q.explanation}` : ""}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Timeline({ items }: { items: InformationRevolutions["timeline"] }) {
  return (
    <ol className="timeline">
      {items.map((t, i) => (
        <li key={i}>
          <div className="timeline__era">{t.era}</div>
          <div className="timeline__tech">{t.technology}</div>
          <p className="timeline__body">{t.whatChanged}</p>
          {t.tension ? <p className="timeline__tension">Central tension: {t.tension}</p> : null}
        </li>
      ))}
    </ol>
  );
}
