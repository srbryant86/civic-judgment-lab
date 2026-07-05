import type { Metadata } from "next";
import { civilWarCauses } from "@/content/civilWarCauses";
import { unitBySlug } from "@/content/units";
import { UnitView } from "@/components/UnitView";

const meta = unitBySlug("civil-war-causes")!;

export const metadata: Metadata = {
  title: "Causes of the Civil War",
  description:
    "A five-day source-based unit: what secessionists said in 1860–1861 versus how the war was later remembered.",
};

export default function CivilWarCausesPage() {
  return (
    <UnitView
      unit={civilWarCauses}
      meta={meta}
      eyebrow="History Judgment Lab · U.S. History I"
      relatedLinks={[
        { href: "/reconstruction", label: "Continue to Reconstruction" },
        { href: "/mixed-source-dbq", label: "The Mixed-Source DBQ (text + data + map)" },
        { href: "/civic-judgment", label: "The “What Did the Bias Do?” framework" },
        { href: "/scope-and-sequence", label: "See the full scope & sequence" },
      ]}
    />
  );
}
