/* The Traveling Judgment Rubric — the Bias Consequence Ladder collapsed
   into five content-neutral dimensions so a student's judgment can be
   scored the same way in every unit and growth becomes a visible delta.
   It scores the accountability of the reasoning, never the stance. */

export type JudgmentRubric = {
  note: string;
  levels: string[];
  dimensions: { name: string; ladderRungs: string; descriptors: string[] }[];
};

export const JUDGMENT_RUBRIC: JudgmentRubric = {
  note: "This rubric scores how accountable the reasoning is — evidence, corroboration, and consequence — not the conclusion a student reaches. Two students who disagree can both earn top marks.",
  levels: ["Exemplary (4)", "Proficient (3)", "Developing (2)", "Beginning (1)"],
  dimensions: [
    {
      name: "Claim & Stance",
      ladderRungs: "Rungs 1, 10",
      descriptors: [
        "States a precise, defensible claim and treats it as revisable in light of evidence.",
        "States a clear claim that answers the question.",
        "States a claim, but it is vague or only partly answers the question.",
        "No clear claim, or restates the prompt.",
      ],
    },
    {
      name: "Sourcing & Interest",
      ladderRungs: "Rungs 2, 3",
      descriptors: [
        "Identifies who made the source and what interest it serves, naming perspective without treating “biased” as a verdict.",
        "Identifies the source and names its point of view.",
        "Notices the source has a slant but does not say whose interest it serves.",
        "Ignores who made the source or where it came from.",
      ],
    },
    {
      name: "Emphasis & Omission",
      ladderRungs: "Rungs 4, 5",
      descriptors: [
        "Explains both what the source makes visible and what it hides or minimizes, and why the omission matters.",
        "Identifies something the source emphasizes and something it leaves out.",
        "Notes emphasis or omission, but not both, and does not explain the effect.",
        "Takes the source at face value; misses what it frames or omits.",
      ],
    },
    {
      name: "Consequence Analysis",
      ladderRungs: "Rungs 6, 7, 8",
      descriptors: [
        "Traces the full chain — who benefits, who is harmed, and what happens if people act on the claim.",
        "Names who benefits and who is harmed if the claim is believed.",
        "Identifies a beneficiary or a harm, but not the consequence of acting on it.",
        "Does not consider consequences beyond the source itself.",
      ],
    },
    {
      name: "Evidence Accountability",
      ladderRungs: "Rungs 9, 10",
      descriptors: [
        "Tests the claim against independent evidence and states what would change their mind.",
        "Compares the source with at least one other piece of evidence.",
        "Refers to other evidence vaguely or without weighing it.",
        "Reaches a judgment without checking it against other evidence.",
      ],
    },
  ],
};
