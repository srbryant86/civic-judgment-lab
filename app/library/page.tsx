import type { Metadata } from "next";
import Link from "next/link";
import { UNITS_BY_SEQUENCE, availableUnits } from "@/content/units";
import { strandById } from "@/content/strands";
import { PageHero, Section, Callout } from "@/components/ui";

export const metadata: Metadata = {
  title: "Unit Library",
  description:
    "Browse the History Judgment Lab catalog — source-based units from Medieval Europe to American Government, all built on one judgment method.",
};

function UnitCard({ slug }: { slug: string }) {
  const u = UNITS_BY_SEQUENCE.find((x) => x.slug === slug)!;
  const available = u.status === "available";
  const inner = (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
        <span className="card__eyebrow" style={{ margin: 0 }}>{u.course}</span>
        {available ? (
          <span className="badge badge--navy">Available</span>
        ) : (
          <span className="badge badge--muted">In development</span>
        )}
      </div>
      <h3 className="card__title" style={{ color: "var(--navy-deep)" }}>{u.title}</h3>
      <p className="muted" style={{ fontSize: "0.85rem", margin: "0 0 0.6rem" }}>
        Grades {u.gradeBand}
        {u.dayCount ? ` · ${u.dayCount} days` : ""}
      </p>
      <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--ink-soft)", fontSize: "0.98rem" }}>
        {u.drivingQuestion}
      </p>
      <ul className="tag-list" style={{ gap: "0.35rem", marginTop: "0.6rem" }}>
        {u.strandIds.map((sid) => {
          const s = strandById(sid);
          return (
            <li key={sid}>
              <span className="badge">{s ? s.label : sid}</span>
            </li>
          );
        })}
      </ul>
      {available ? (
        <p style={{ marginTop: "0.9rem", marginBottom: 0, fontWeight: 600, color: "var(--navy)" }}>
          Open unit →
        </p>
      ) : null}
    </>
  );

  return available && u.href ? (
    <Link href={u.href} className="card card--link card--pad-lg">
      {inner}
    </Link>
  ) : (
    <div className="card card--pad-lg" style={{ opacity: 0.85 }}>
      {inner}
    </div>
  );
}

export default function LibraryPage() {
  const avail = availableUnits().length;
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · Catalog"
        title="Unit library"
        lead={`Source-based units from Medieval Europe to American Government — ${avail} available now, more in development, all built on one judgment method.`}
      />

      <Section>
        <Callout variant="note" title="One method, many eras">
          <p style={{ marginBottom: 0 }}>
            Every unit runs the same <Link href="/civic-judgment">Bias Consequence Ladder</Link> and
            threads the same five strands. See how they connect on the{" "}
            <Link href="/scope-and-sequence">Scope &amp; Sequence</Link> map.
          </p>
        </Callout>

        <div className="card-grid card-grid--2" style={{ marginTop: "2rem" }}>
          {UNITS_BY_SEQUENCE.map((u) => (
            <UnitCard key={u.slug} slug={u.slug} />
          ))}
        </div>
      </Section>
    </>
  );
}
