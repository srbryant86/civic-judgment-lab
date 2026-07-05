import type { Metadata } from "next";
import Link from "next/link";
import { STRANDS } from "@/content/strands";
import { UNITS_BY_SEQUENCE, RECURRING_THREADS, unitBySlug } from "@/content/units";
import { JUDGMENT_RUBRIC } from "@/content/judgmentRubric";
import { PageHero, Section, Callout, StandardsNote } from "@/components/ui";
import { BiasConsequenceLadder } from "@/components/BiasConsequenceLadder";
import ActionBar from "@/components/ActionBar";

export const metadata: Metadata = {
  title: "Scope & Sequence",
  description:
    "The thematic spine, the unit sequence, and the traveling judgment rubric — how the packs form one deepening skill rather than a loose collection.",
};

export default function ScopeAndSequencePage() {
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · For Department Chairs"
        title="Scope & sequence"
        lead="One method, taught deeper each year. Five thematic strands and one judgment ladder run across every unit, so the catalog reads as a coherent arc — not a loose collection."
      />

      <Section>
        <ActionBar print downloadName="scope-and-sequence" note="Print or save this map as a one-page overview for administrators." />
      </Section>

      <Section variant="tint" eyebrow="The spine" title="Five strands that travel across every unit">
        <div className="card-grid">
          {STRANDS.map((s) => (
            <div className="card" key={s.id}>
              <div className="card__eyebrow">{s.label}</div>
              <p style={{ fontFamily: "var(--font-serif)", color: "var(--navy-deep)", fontSize: "1.02rem", margin: "0 0 0.5rem" }}>
                {s.travelingQuestion}
              </p>
              <p className="card__body" style={{ marginBottom: 0, fontSize: "0.92rem" }}>
                {s.blurb}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Coverage" title="Which strands each unit exercises">
        <div className="table-scroll">
          <table className="data">
            <thead>
              <tr>
                <th scope="col">Unit</th>
                <th scope="col">Grades</th>
                {STRANDS.map((s) => (
                  <th scope="col" key={s.id} style={{ textAlign: "center" }}>
                    {s.label}
                  </th>
                ))}
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {UNITS_BY_SEQUENCE.map((u) => (
                <tr key={u.slug}>
                  <th scope="row">
                    {u.href ? <Link href={u.href}>{u.short}</Link> : u.short}
                  </th>
                  <td>{u.gradeBand}</td>
                  {STRANDS.map((s) => (
                    <td key={s.id} style={{ textAlign: "center", color: u.strandIds.includes(s.id) ? "var(--accent)" : "var(--line)", fontSize: "1.1rem" }}>
                      {u.strandIds.includes(s.id) ? "●" : "·"}
                    </td>
                  ))}
                  <td>
                    {u.status === "available" ? (
                      <span className="badge badge--navy">Available</span>
                    ) : (
                      <span className="badge badge--muted">In development</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="tint" eyebrow="The arc" title="Units in sequence">
        <div className="stack-lg">
          {UNITS_BY_SEQUENCE.map((u, i) => (
            <article className="card card--pad-lg card--num" key={u.slug}>
              <span className="card__num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.6rem" }}>
                <h3 className="mt-0" style={{ marginBottom: 0 }}>
                  {u.href ? <Link href={u.href}>{u.title}</Link> : u.title}
                </h3>
                {u.status === "available" ? (
                  <span className="badge badge--navy">Available</span>
                ) : (
                  <span className="badge badge--muted">In development</span>
                )}
              </div>
              <p className="muted" style={{ margin: "0.25rem 0 0.75rem", fontSize: "0.9rem" }}>
                {u.course} · Grades {u.gradeBand}
                {u.dayCount ? ` · ${u.dayCount} days` : ""}
              </p>
              <p style={{ fontFamily: "var(--font-serif)", color: "var(--ink)", fontStyle: "italic" }}>
                {u.drivingQuestion}
              </p>
              <p className="card__body">{u.summary}</p>
              <ul className="tag-list" style={{ gap: "0.4rem", marginBottom: "0.75rem" }}>
                {u.strandIds.map((sid) => (
                  <li key={sid}>
                    <span className="badge">{sid}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginBottom: 0, fontSize: "0.92rem", color: "var(--ink-mute)" }}>
                <strong style={{ color: "var(--navy-deep)" }}>Ladder focus:</strong> {u.ladderFocus}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Interlock" title="Documents that travel between units">
        <p className="section__intro" style={{ marginBottom: "1.5rem" }}>
          The clearest sign this is a spine and not a pile of packs: the same sources reappear, and
          students corroborate them across eras.
        </p>
        <div className="stack">
          {RECURRING_THREADS.map((t) => (
            <div className="card" key={t.document}>
              <h3 className="card__title">{t.document}</h3>
              <ul className="tag-list" style={{ gap: "0.4rem", margin: "0 0 0.6rem" }}>
                {t.unitSlugs.map((slug) => {
                  const u = unitBySlug(slug);
                  return (
                    <li key={slug}>
                      <span className="badge badge--muted">{u ? u.short : slug}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="card__body" style={{ marginBottom: 0 }}>
                {t.note}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="tint" eyebrow="One method, taught deeper" title="The Bias Consequence Ladder across the grades">
        <p className="section__intro" style={{ marginBottom: "1.5rem" }}>
          Every unit runs the same 10-step ladder. What rises across the grade band is how much of it
          students do independently, and how unfamiliar the material is.
        </p>
        <BiasConsequenceLadder compact showCalibration />
        <p style={{ marginTop: "1.5rem" }}>
          <Link href="/civic-judgment" className="btn btn--primary">
            See the full framework
          </Link>
        </p>
      </Section>

      <Section eyebrow="Measuring judgment" title="The Traveling Judgment Rubric">
        <p className="section__intro" style={{ marginBottom: "1rem" }}>
          {JUDGMENT_RUBRIC.note}
        </p>
        <div className="table-scroll">
          <table className="data">
            <thead>
              <tr>
                <th scope="col">Dimension</th>
                {JUDGMENT_RUBRIC.levels.map((l) => (
                  <th scope="col" key={l}>
                    {l}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {JUDGMENT_RUBRIC.dimensions.map((d) => (
                <tr key={d.name}>
                  <th scope="row">
                    {d.name}
                    <span style={{ display: "block", fontWeight: 400, fontSize: "0.8rem", color: "var(--ink-mute)" }}>
                      {d.ladderRungs}
                    </span>
                  </th>
                  {d.descriptors.map((desc, i) => (
                    <td key={i}>{desc}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="btn-row" style={{ marginTop: "1.5rem" }}>
          <Link href="/mixed-source-dbq" className="btn btn--ghost btn--sm">
            The Mixed-Source DBQ (text + data + image) →
          </Link>
          <Link href="/judgment-lab" className="btn btn--ghost btn--sm">
            The AI-age Judgment Lab →
          </Link>
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <StandardsNote />
        </div>
      </Section>
    </>
  );
}
