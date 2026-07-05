import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "@/content/portfolio";
import { civicJudgment } from "@/content/civicJudgment";
import { PageHero, Section } from "@/components/ui";

const ref = portfolio.reflection;

export const metadata: Metadata = {
  title: "Educator Reflection",
  description: "Why this project was built, how it reflects serious history instruction, and why civic reasoning matters in the AI age.",
};

export default function ReflectionPage() {
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · Candidate Reflection"
        title={ref.title}
        lead="From the perspective of a secondary history teacher and instructional-systems builder."
      />

      <Section>
        <div className="prose stack" style={{ maxWidth: "72ch", fontSize: "1.08rem" }}>
          {ref.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>{civicJudgment.reflectionAddition}</p>
        </div>

        <hr className="divider" />
        <div className="btn-row">
          <Link href="/reconstruction" className="btn btn--primary">
            See the flagship unit
          </Link>
          <Link href="/civic-judgment" className="btn btn--ghost">
            From bias detection to civic judgment
          </Link>
          <Link href="/product" className="btn btn--ghost">
            Product overview
          </Link>
        </div>
      </Section>
    </>
  );
}
