import type { Metadata } from "next";
import { medievalEurope } from "@/content/medievalEurope";
import { unitBySlug } from "@/content/units";
import { UnitView } from "@/components/UnitView";

const meta = unitBySlug("medieval-europe")!;

export const metadata: Metadata = {
  title: "Medieval Europe and Authority",
  description:
    "A grades 6–9 world-history entry point: who controlled knowledge when few could read, and how to judge sources that survived by chance.",
};

export default function MedievalEuropePage() {
  return (
    <UnitView
      unit={medievalEurope}
      meta={meta}
      eyebrow="History Judgment Lab · World History"
      relatedLinks={[
        { href: "/information-revolutions", label: "Continue to Printing Press → AI" },
        { href: "/library", label: "Browse the unit library" },
        { href: "/scope-and-sequence", label: "See the scope & sequence" },
      ]}
    />
  );
}
