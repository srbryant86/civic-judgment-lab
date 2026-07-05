import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UNIT_DATA, unitData } from "@/content/unitData";
import { unitBySlug } from "@/content/units";
import { strandById } from "@/content/strands";
import { STANDARDS_NOTE } from "@/content/site";
import { Section } from "@/components/ui";
import ActionBar from "@/components/ActionBar";

export function generateStaticParams() {
  return Object.keys(UNIT_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const unit = unitData(slug);
  return {
    title: unit ? `One-pager · ${unit.title}` : "One-pager",
    robots: { index: false },
  };
}

export default async function OnePagerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const unit = unitData(slug);
  const meta = unitBySlug(slug);
  if (!unit || !meta) notFound();

  const strands = meta.strandIds.map(strandById).filter(Boolean);

  return (
    <Section>
      <div className="onepager">
        <div className="btn-row no-print" style={{ marginBottom: "1.5rem" }}>
          <Link href={meta.href ?? "/library"} className="btn btn--ghost btn--sm">
            ← Back to the unit
          </Link>
        </div>
        <ActionBar
          print
          downloadName={`${slug}-one-pager`}
          note="Print or save as PDF — one page an administrator or department chair can review at a glance."
        />

        <p className="eyebrow" style={{ marginBottom: "0.25rem" }}>
          History Judgment Lab · Administrator One-Pager
        </p>
        <h1 style={{ fontSize: "1.6rem", marginBottom: "0.25rem" }}>{unit.title}</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          {meta.course} · Grades {meta.gradeBand}
          {meta.dayCount ? ` · ${meta.dayCount} days` : ""}
        </p>
        <hr className="onepager__rule" />

        <h2>Enduring question</h2>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>{unit.drivingQuestion}</p>

        <h2>Essential questions</h2>
        <ul>
          {unit.essentialQuestions.slice(0, 4).map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>

        <h2>Sample alignment categories</h2>
        <ul className="tag-list" style={{ gap: "0.4rem", marginBottom: "0.6rem" }}>
          {unit.alignmentCategories.map((a) => (
            <li key={a}>
              <span className="badge badge--accent">{a}</span>
            </li>
          ))}
        </ul>
        <p className="provenance">{STANDARDS_NOTE}</p>

        <h2>Sources &amp; provenance</h2>
        <p className="provenance" style={{ marginBottom: "0.5rem" }}>
          Every source is a genuine, public-domain document, verified against the record.
        </p>
        <ul>
          {unit.dbq.documents.map((d, i) => (
            <li key={i}>
              <strong>{d.title}</strong> — <span className="provenance">{d.attribution}</span>
            </li>
          ))}
        </ul>

        <h2>Thematic strands</h2>
        <ul className="tag-list" style={{ gap: "0.4rem" }}>
          {strands.map((s) => (
            <li key={s!.id}>
              <span className="badge badge--navy">{s!.label}</span>
            </li>
          ))}
        </ul>

        <h2>Assessment</h2>
        <p style={{ marginBottom: 0 }}>
          A document-based writing task and claim-writing exit tickets, scored with an analytic
          rubric and the program&rsquo;s Traveling Judgment Rubric.
        </p>

        <hr className="onepager__rule" style={{ marginTop: "1.5rem" }} />
        <p className="provenance">
          <strong>Stance:</strong> This unit teaches evidence-based historical reasoning, not a
          political position. It is nonpartisan and does not flatten analysis into treating every
          claim as equally supported — students judge which accounts survive corroboration and which
          collapse, and why. Review all materials before classroom use.
        </p>
      </div>
    </Section>
  );
}
