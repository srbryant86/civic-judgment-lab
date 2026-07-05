import type { Metadata } from "next";
import { coldWarMedia } from "@/content/coldWarMedia";
import { unitBySlug } from "@/content/units";
import { UnitView } from "@/components/UnitView";

const meta = unitBySlug("cold-war-media")!;

export const metadata: Metadata = {
  title: "Cold War Media and Power",
  description:
    "How rival superpowers used media to shape belief — and how to judge a source built to persuade. Includes the first quantitative-source work.",
};

export default function ColdWarMediaPage() {
  return (
    <UnitView
      unit={coldWarMedia}
      meta={meta}
      eyebrow="History Judgment Lab · U.S. History II"
      relatedLinks={[
        { href: "/information-revolutions", label: "Continue to Printing Press → AI" },
        { href: "/judgment-lab", label: "Apply it to today: the Judgment Lab" },
        { href: "/library", label: "Browse the unit library" },
      ]}
    />
  );
}
