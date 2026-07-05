import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";
import ActionBar from "@/components/ActionBar";

export const metadata: Metadata = {
  title: "For Principals & Department Chairs",
  description:
    "A one-page case for adopting History Judgment Lab: nonpartisan, source-verified, standards-aware civic-reasoning curriculum.",
};

export default function ForAdministratorsPage() {
  return (
    <Section>
      <div className="onepager">
        <div className="btn-row no-print" style={{ marginBottom: "1.25rem" }}>
          <Link href="/product" className="btn btn--ghost btn--sm">
            ← Product overview
          </Link>
        </div>
        <ActionBar
          print
          downloadName="history-judgment-lab-for-administrators"
          note="Print or save this page as a one-page PDF to share with your leadership team."
        />

        <p className="eyebrow" style={{ marginBottom: "0.25rem" }}>
          History Judgment Lab · For Principals &amp; Department Chairs
        </p>
        <h1 style={{ fontSize: "1.7rem", marginBottom: "0.35rem" }}>
          Rigorous, nonpartisan history that teaches judgment
        </h1>
        <p className="muted" style={{ marginTop: 0 }}>
          A source-based social studies system for grades 6–12 — safe to adopt, ready to teach.
        </p>
        <hr className="onepager__rule" />

        <h2>The problem it addresses</h2>
        <p>
          Information is abundant and easy to fabricate; AI can turn a poorly examined assumption into
          a polished, authoritative-sounding paragraph in seconds. The scarce, teachable skill is
          <strong> judgment</strong> — evaluating evidence, bias, and consequence. Social studies is
          where that skill is built, which makes it more important in the AI age, not less.
        </p>

        <h2>What students actually learn</h2>
        <ul>
          <li>
            To move past &ldquo;is this biased?&rdquo; to <strong>&ldquo;what does the bias do?&rdquo;</strong>{" "}
            — who benefits, who is harmed, and what follows when people act on a claim.
          </li>
          <li>
            Close reading and corroboration of <strong>genuine primary sources</strong>, and
            evidence-based (claim–evidence–reasoning) writing.
          </li>
          <li>A transferable routine — the <strong>Bias Consequence Ladder</strong> — that recurs and deepens across every unit.</li>
        </ul>

        <h2>Why it is safe to adopt</h2>
        <ul>
          <li>
            <strong>Nonpartisan and evidence-based.</strong> It teaches historical reasoning, not a
            political position, and does not flatten analysis into &ldquo;both sides are always
            equal.&rdquo; Students judge which accounts survive corroboration and which collapse.
          </li>
          <li>
            <strong>Verified, public-domain sources.</strong> Every document is genuine and checked
            against the record — the failure mode of AI lesson generators is designed out.
          </li>
          <li>
            <strong>Standards-aware, honestly.</strong> Alignment is shown as sample thematic
            categories with a clear instruction to verify exact codes against your course of study —
            no asserted codes we cannot guarantee.
          </li>
          <li>
            <strong>Student privacy by design.</strong> No login, no database, no student data
            collected, and no live AI in the classroom product.
          </li>
          <li>
            <strong>Access for every learner.</strong> UDL/MTSS supports — modified readings,
            multilingual-learner scaffolds, and IEP/504 accommodations — hold the same rigorous
            question for all students.
          </li>
        </ul>

        <h2>What you can review in ten minutes</h2>
        <ul>
          <li>The live system: <strong>civic-judgment-lab.vercel.app</strong></li>
          <li>A one-page alignment &amp; source-provenance sheet for any unit</li>
          <li>The full six-unit scope &amp; sequence, grades 6–12</li>
        </ul>

        <hr className="onepager__rule" style={{ marginTop: "1.5rem" }} />
        <p style={{ fontWeight: 600, color: "var(--navy-deep)" }}>Next step</p>
        <p style={{ marginBottom: 0 }}>
          Pilot one unit with a single teacher this term at no cost, or request a building/district
          license. Walk the live demo, then reach out to start a pilot.
        </p>

        <div className="btn-row no-print" style={{ marginTop: "1.5rem" }}>
          <Link href="/scope-and-sequence" className="btn btn--primary">
            See the scope &amp; sequence
          </Link>
          <Link href="/reconstruction-pack" className="btn btn--ghost">
            The flagship unit
          </Link>
        </div>
      </div>
    </Section>
  );
}
