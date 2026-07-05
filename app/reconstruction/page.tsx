import type { Metadata } from "next";
import { reconstruction } from "@/content/reconstruction";
import { unitBySlug } from "@/content/units";
import { UnitView } from "@/components/UnitView";

const meta = unitBySlug("reconstruction")!;

export const metadata: Metadata = {
  title: "Reconstruction Starter Pack",
  description: reconstruction.overview.slice(0, 155),
};

export default function ReconstructionPage() {
  return (
    <UnitView
      unit={reconstruction}
      meta={meta}
      eyebrow="History Judgment Lab · Flagship Unit"
      relatedLinks={[
        { href: "/student-packet", label: "View the printable student packet" },
        { href: "/dashboard", label: "Open the teacher dashboard" },
        { href: "/civic-judgment", label: "The “What Did the Bias Do?” activity" },
      ]}
    />
  );
}
