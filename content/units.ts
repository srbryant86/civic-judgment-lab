import type { StrandId } from "./strands";

/* Lightweight registry of units/packs. Drives the Scope & Sequence
   (Spine Map) page and the "this unit re-asks / runs on the ladder"
   sections. Full authored content lives in the per-unit data files;
   this is the navigable metadata layer. */

export type UnitStatus = "available" | "planned";

export type UnitMeta = {
  slug: string;
  title: string;
  short: string;
  course: string;
  gradeBand: string;
  bandStart: number;
  bandEnd: number;
  sequenceIndex: number;
  status: UnitStatus;
  href?: string;
  strandIds: StrandId[];
  drivingQuestion: string;
  travelingQuestions: string[];
  recurringDocuments: string[];
  ladderFocus: string;
  ladderApplication: string;
  summary: string;
  dayCount?: number;
};

export const UNITS: UnitMeta[] = [
  {
    slug: "civil-war-causes",
    title: "Causes of the Civil War",
    short: "Civil War Causes",
    course: "U.S. History I",
    gradeBand: "8–11",
    bandStart: 8,
    bandEnd: 11,
    sequenceIndex: 1,
    status: "available",
    href: "/civil-war-causes",
    strandIds: ["evidence", "persuasion", "citizenship"],
    drivingQuestion:
      "What did Americans in 1860–1861 say the Civil War was about, and why did later generations remember it so differently?",
    travelingQuestions: [
      "How do historians tell what a conflict was really about?",
      "What does a biased narrative do?",
    ],
    recurringDocuments: [
      "Declarations of the Immediate Causes of Secession",
      "Alexander Stephens's “Cornerstone Speech”",
      "The Lost Cause narrative",
    ],
    ladderFocus: "Rungs 4–6 (emphasis, omission, who benefits from the narrative)",
    ladderApplication:
      "Students corroborate what secessionists said in 1861 against the later “states' rights” retelling — the purest form of “what does the bias do?”",
    summary:
      "The chronological prequel to Reconstruction: sourcing and corroboration in their sharpest form, comparing what secessionists said at the time against the Lost Cause story told later.",
    dayCount: 5,
  },
  {
    slug: "reconstruction",
    title: "Reconstruction & the Meaning of Citizenship",
    short: "Reconstruction",
    course: "U.S. History I",
    gradeBand: "8–11",
    bandStart: 8,
    bandEnd: 11,
    sequenceIndex: 2,
    status: "available",
    href: "/reconstruction",
    strandIds: ["citizenship", "power", "evidence"],
    drivingQuestion:
      "After the Civil War, did Reconstruction transform American citizenship, or did biased stories about race, power, and freedom help restore the old order?",
    travelingQuestions: [
      "Who counts as a full member of the nation, and who decides?",
      "Why can rights on paper still fail in practice?",
    ],
    recurringDocuments: [
      "The 13th, 14th & 15th Amendments",
      "The Black Codes",
      "The Lost Cause narrative",
    ],
    ladderFocus: "Rungs 6–8 (who benefits, who is harmed, what happens when people act on it)",
    ladderApplication:
      "The “What Did the Bias Do?” activity runs the ladder on a civil-rights claim, a Black Code, and a Lost Cause narrative.",
    summary:
      "The flagship unit: a five-day, source-based investigation of whether legal freedom changed lived reality for formerly enslaved people.",
    dayCount: 5,
  },
  {
    slug: "civil-rights",
    title: "The Civil Rights Movement",
    short: "Civil Rights",
    course: "U.S. History II",
    gradeBand: "10–11",
    bandStart: 10,
    bandEnd: 11,
    sequenceIndex: 3,
    status: "available",
    href: "/civil-rights",
    dayCount: 5,
    strandIds: ["citizenship", "power", "persuasion"],
    drivingQuestion:
      "Why did rights guaranteed in the 1860s still have to be fought for a century later — and what finally forced enforcement?",
    travelingQuestions: [
      "Who counts as a full member of the nation, and who decides?",
      "Why can rights on paper still fail in practice?",
    ],
    recurringDocuments: [
      "The 14th & 15th Amendments (contested, under-enforced)",
      "Brown v. Board (1954)",
      "The Civil Rights Act (1964) & Voting Rights Act (1965)",
    ],
    ladderFocus: "Full 10 rungs with cross-source corroboration",
    ladderApplication:
      "The “Second Reconstruction”: the same amendments return as contested law, analyzed with new source media (court opinions, statutes, photographs).",
    summary:
      "The direct sequel on the citizenship/power thread — the amendments written in Reconstruction return as promises still being enforced.",
  },
  {
    slug: "information-revolutions",
    title: "From Printing Press to AI",
    short: "Information Revolutions",
    course: "Interdisciplinary / Civics",
    gradeBand: "9–12",
    bandStart: 9,
    bandEnd: 12,
    sequenceIndex: 4,
    status: "available",
    href: "/information-revolutions",
    strandIds: ["technology", "persuasion", "evidence"],
    drivingQuestion:
      "When new technologies change who can produce, distribute, or act on information, do they strengthen democracy, destabilize society, or both?",
    travelingQuestions: [
      "How does a message move people, and what does it make easier to justify?",
      "When a technology changes who can act on information, what changes with it?",
    ],
    recurringDocuments: [
      "Printing press & Reformation sources",
      "Radio, TV & mass-persuasion cases",
      "Social media & AI as the execution layer",
    ],
    ladderFocus: "Transfer: run the ladder on media systems and machine-generated text",
    ladderApplication:
      "The transfer module: the ladder learned on history is applied to the machine and to modern media.",
    summary:
      "The far-transfer module spanning six centuries — where the judgment method meets social media and AI.",
    dayCount: 3,
  },
  {
    slug: "cold-war-media",
    title: "Cold War Media and Power",
    short: "Cold War Media",
    course: "U.S. History II",
    gradeBand: "10–12",
    bandStart: 10,
    bandEnd: 12,
    sequenceIndex: 5,
    status: "available",
    href: "/cold-war-media",
    dayCount: 5,
    strandIds: ["persuasion", "technology", "power"],
    drivingQuestion:
      "How did rival superpowers use media to shape what millions of people believed — and how do you judge a source built to persuade?",
    travelingQuestions: [
      "How does a message move people, and what does it make easier to justify?",
      "How do we know what we know, and how good is the evidence?",
    ],
    recurringDocuments: [
      "Government propaganda posters (public domain)",
      "Radio & broadcast persuasion",
      "Polling & “missile gap” data",
    ],
    ladderFocus: "Emphasis/omission at state scale; corroboration between rival systems",
    ladderApplication:
      "The designated bridge from settled history to the contemporary mechanism — propaganda, then algorithmic amplification.",
    summary:
      "Extends the persuasion/technology thread to state-scale propaganda and the first quantitative-source work.",
  },
  {
    slug: "medieval-europe",
    title: "Medieval Europe and Authority",
    short: "Medieval Europe",
    course: "World History",
    gradeBand: "6–9",
    bandStart: 6,
    bandEnd: 9,
    sequenceIndex: 6,
    status: "available",
    href: "/medieval-europe",
    dayCount: 5,
    strandIds: ["power", "technology", "evidence"],
    drivingQuestion:
      "Who controlled knowledge and authority when few could read — and how do we judge sources that survived by chance?",
    travelingQuestions: [
      "Who holds power, and who decides what counts as knowledge?",
      "How do we know what we know when the evidence is sparse?",
    ],
    recurringDocuments: [
      "Magna Carta",
      "Monastic chronicles & charters",
      "The Domesday Book",
    ],
    ladderFocus: "Gatekeeping and survivorship: what the record omits",
    ladderApplication:
      "The world-history entry point and source-diversity capstone: translated, pre-modern, and sparse sources.",
    summary:
      "A grades 6–9 world-history entry point on who controlled literacy, scripture, and authority.",
  },
  {
    slug: "american-government",
    title: "American Government: Rights & Responsibilities",
    short: "American Government",
    course: "Civics / Government",
    gradeBand: "11–12",
    bandStart: 11,
    bandEnd: 12,
    sequenceIndex: 7,
    status: "available",
    href: "/american-government",
    dayCount: 5,
    strandIds: ["citizenship", "evidence", "persuasion"],
    drivingQuestion:
      "How should a citizen judge competing claims about rights, law, and policy without simply believing what they already prefer?",
    travelingQuestions: [
      "Who counts as a full member of the nation, and who decides?",
      "How do we know what we know, and how good is the evidence?",
    ],
    recurringDocuments: [
      "The Constitution & Bill of Rights",
      "The 14th & 15th Amendments (living law)",
      "Court opinions: majority vs. dissent",
    ],
    ladderFocus: "Tier 3 capstone: run the ladder on systems, AI, and one's own reasoning",
    ladderApplication:
      "The grade-12 capstone: historical judgment becomes present-day civic judgment on structural, nonpartisan cases.",
    summary:
      "The capstone that turns historical judgment into present-day civic judgment for a second course and department.",
  },
];

export const UNITS_BY_SEQUENCE = [...UNITS].sort((a, b) => a.sequenceIndex - b.sequenceIndex);

export function availableUnits(): UnitMeta[] {
  return UNITS_BY_SEQUENCE.filter((u) => u.status === "available");
}

export function unitBySlug(slug: string): UnitMeta | undefined {
  return UNITS.find((u) => u.slug === slug);
}

/* Documents whose analysis travels across units — the interlock that
   makes the catalog a spine rather than a pile of packs. */
export const RECURRING_THREADS: { document: string; unitSlugs: string[]; note: string }[] = [
  {
    document: "The 14th & 15th Amendments",
    unitSlugs: ["reconstruction", "civil-rights", "american-government"],
    note: "Written in Reconstruction, contested and under-enforced through Civil Rights, living law in American Government.",
  },
  {
    document: "The Lost Cause narrative",
    unitSlugs: ["civil-war-causes", "reconstruction"],
    note: "The reframing of the war's cause; students corroborate it against the 1861 secession declarations, then trace what it did to Reconstruction.",
  },
  {
    document: "Mass persuasion & media technology",
    unitSlugs: ["cold-war-media", "information-revolutions"],
    note: "Propaganda and broadcast power set up the analysis of social media and AI as the modern execution layer.",
  },
];
