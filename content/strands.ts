/* The five-strand thematic spine that runs across every unit.
   These turn the "thematic spine, not a loose collection" claim into
   real structure the Scope & Sequence map is built on. */

export type Strand = {
  id: StrandId;
  label: string;
  travelingQuestion: string;
  blurb: string;
};

export type StrandId =
  | "evidence"
  | "power"
  | "citizenship"
  | "persuasion"
  | "technology";

export const STRANDS: Strand[] = [
  {
    id: "evidence",
    label: "Evidence",
    travelingQuestion: "How do we know what we know — and how good is the evidence?",
    blurb:
      "Sourcing, corroboration, and the discipline of testing a claim against the record instead of accepting it because it is confident or familiar.",
  },
  {
    id: "power",
    label: "Power",
    travelingQuestion: "Who holds power — and why can rights on paper still fail in practice?",
    blurb:
      "The gap between law and lived reality: how authority is organized, contested, enforced, or withheld.",
  },
  {
    id: "citizenship",
    label: "Citizenship",
    travelingQuestion: "Who counts as a full member of the nation, and who decides?",
    blurb:
      "Membership, rights, and belonging — expanded, denied, and fought over across American history.",
  },
  {
    id: "persuasion",
    label: "Persuasion",
    travelingQuestion: "How does a message move people — and what does it make easier to justify?",
    blurb:
      "Rhetoric, framing, propaganda, and narrative: what a source emphasizes, hides, and does once people believe it.",
  },
  {
    id: "technology",
    label: "Technology",
    travelingQuestion:
      "When a new technology changes who can produce, spread, or act on information, what changes with it?",
    blurb:
      "From the printing press to AI: how the tools of information reshape power, persuasion, and public life.",
  },
];

export function strandById(id: StrandId): Strand | undefined {
  return STRANDS.find((s) => s.id === id);
}
