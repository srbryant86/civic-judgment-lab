import type { Metadata } from "next";
import { civilRights } from "@/content/civilRights";
import { unitBySlug } from "@/content/units";
import { UnitView } from "@/components/UnitView";

const meta = unitBySlug("civil-rights")!;

export const metadata: Metadata = {
  title: "The Civil Rights Movement",
  description:
    "The “Second Reconstruction”: why rights guaranteed in the 1860s had to be fought for a century later, and what forced enforcement.",
};

export default function CivilRightsPage() {
  return (
    <UnitView
      unit={civilRights}
      meta={meta}
      eyebrow="History Judgment Lab · U.S. History II"
      relatedLinks={[
        { href: "/reconstruction", label: "Back to the first Reconstruction" },
        { href: "/library", label: "Browse the unit library" },
        { href: "/scope-and-sequence", label: "See the scope & sequence" },
      ]}
    />
  );
}
