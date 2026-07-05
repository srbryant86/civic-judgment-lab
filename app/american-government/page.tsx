import type { Metadata } from "next";
import { americanGovernment } from "@/content/americanGovernment";
import { unitBySlug } from "@/content/units";
import { UnitView } from "@/components/UnitView";

const meta = unitBySlug("american-government")!;

export const metadata: Metadata = {
  title: "American Government: Rights & Responsibilities",
  description:
    "The capstone: how a citizen judges competing claims about rights, law, and policy without simply believing what they already prefer.",
};

export default function AmericanGovernmentPage() {
  return (
    <UnitView
      unit={americanGovernment}
      meta={meta}
      eyebrow="History Judgment Lab · Civics / Government"
      relatedLinks={[
        { href: "/judgment-lab", label: "The AI-age Judgment Lab" },
        { href: "/civic-judgment", label: "The judgment framework" },
        { href: "/library", label: "Browse the unit library" },
      ]}
    />
  );
}
