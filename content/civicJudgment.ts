import type { CivicJudgment } from "./types";

/* Static sample content for "From Bias Detection to Civic Judgment."
   Authored and adversarially fact-checked; review before classroom use. */

export const civicJudgment: CivicJudgment = {
  corePrinciple:
    "You do not have to be neutral, but you do have to be accountable to evidence.",
  principleExplanation:
    "Being objective does not mean pretending you have no values, no history, and no point of view. No honest person is a blank slate, and a lesson that demands students fake neutrality only teaches them to hide their reasoning instead of defending it. What objectivity actually requires is accountability: your beliefs have to answer to evidence, to context, to the strongest version of the counterargument, and to the real-world consequences of acting on them. A defensible position is one you can trace back to sources, test against facts that might prove you wrong, and revise when the evidence demands it. That is why the core principle of this course is at once simple and demanding: you do not have to be neutral, but you do have to be accountable to evidence.",
  dangerLine:
    "Bias becomes dangerous when people stop caring whether it is true, fair, or destructive.",
  recurringQuestion: "Not just: is it biased? Ask: what does the bias do?",
  intro:
    "Most media-literacy lessons stop at a single question: is this source biased? That question matters, but it is only a doorway. In the real world, most people already know their favorite sources lean a certain way, and they choose them anyway, because bias can offer something powerful: identity, belonging, certainty, loyalty, and protection from evidence that would be uncomfortable to face. Detecting a slant, by itself, changes very little.\n\nThis page introduces a shift at the heart of History Judgment Lab: from bias detection to civic judgment. Civic judgment does not ask you to become a person with no opinions. It asks you to become accountable for what your opinions do. Instead of stopping at \"this is biased,\" you learn to ask what the bias makes visible, what it hides, whom it protects, whom it harms, and what happens when people organize their laws, their votes, and their loyalties around it. That is the difference between spotting a slant and judging its consequences.",
  inquiryQuestions: [
    "What does this source make visible?",
    "What does it hide?",
    "Whom does it protect?",
    "Whom does it harm?",
    "What emotions does it activate?",
    "What identity or loyalty does it appeal to?",
    "What evidence does it ignore?",
    "What happens when people act on this version of reality?",
  ],
  fromDetectionToJudgment: {
    intro:
      "Bias detection and civic judgment are not the same skill. Detection tells you a source has a slant. Judgment tells you what that slant is doing in the world, and whether you should let it shape your conclusions. The six ideas below move you from the first skill to the second.",
    points: [
      {
        title: "Detection Is Only the First Step",
        text: "Noticing that a source is biased is where analysis begins, not where it ends. Almost every source carries a perspective, so 'this is biased' rarely settles anything on its own. The harder and more useful work is to ask what the bias is doing to the reader, to the evidence, and to the people the source describes.",
      },
      {
        title: "People Often Prefer Their Bias",
        text: "Many people know their sources are one-sided and choose them precisely for that reason. A biased source can confirm an identity, signal loyalty to a group, deliver certainty, and shield a person from facts that would be painful to accept. Because bias meets real emotional and social needs, simply pointing it out almost never changes anyone's mind.",
      },
      {
        title: "Judge Consequences, Not Only Accuracy",
        text: "Civic judgment asks a second question after accuracy: what happens if people believe and act on this? A claim can be technically slippery yet still drive real decisions about laws, votes, and who belongs. Weighing those consequences, not just fact-checking individual sentences, is what makes judgment civic.",
      },
      {
        title: "Values Are Allowed; Unaccountability Is Not",
        text: "You are permitted to have commitments, loyalties, and moral convictions; citizenship is not neutrality. What you are not permitted to do is protect those commitments from evidence. A responsible thinker holds values and still tests them against facts, context, and counterarguments, and changes course when the evidence requires it.",
      },
      {
        title: "In History, Bias Becomes Law",
        text: "Biased narratives are not just private opinions; in history they have repeatedly hardened into statutes, court rulings, ballots, and violence. Stories about who counted as fully human and who belonged shaped slavery, citizenship, voting rights, and the reach of federal protection. When you study the past, you are watching bias turn into policy and policy turn into people's lives.",
      },
      {
        title: "Amplified and Weaponized Faster",
        text: "In the age of social media and AI, a biased frame can reach millions in hours and be converted into action almost immediately, through a vote, a purchase, a harassment campaign, or a mob. The distance between a persuasive falsehood and a real-world consequence has never been shorter. That speed makes disciplined judgment more necessary, not less.",
      },
    ],
  },
  ladder: [
    {
      step: 1,
      title: "Identify the claim.",
      prompt:
        "State plainly what the source is actually asserting. Strip away the tone, the music, and the images, and write the core claim in one sentence: what does this source want you to believe is true?",
    },
    {
      step: 2,
      title: "Identify the source or speaker.",
      prompt:
        "Ask who is talking and why. Who created this, what is their position or interest, and what do they stand to gain or lose depending on what you conclude?",
    },
    {
      step: 3,
      title: "Identify the bias or perspective.",
      prompt:
        "Name the point of view honestly, without treating 'biased' as an insult. What worldview, loyalty, or interest shapes how this source sees the issue?",
    },
    {
      step: 4,
      title: "Ask what the bias emphasizes.",
      prompt:
        "Notice what the source pushes to the front. Which facts, images, or feelings does it repeat and spotlight so that you cannot miss them?",
    },
    {
      step: 5,
      title: "Ask what the bias hides or minimizes.",
      prompt:
        "Look for the missing pieces. What evidence, voices, or context does this source leave out, downplay, or wave away, and would including them change the story?",
    },
    {
      step: 6,
      title: "Ask who benefits from this version of the story.",
      prompt:
        "Follow the advantage. If people accepted this account, whose power, comfort, profit, or status would be protected or increased?",
    },
    {
      step: 7,
      title: "Ask who is harmed or excluded.",
      prompt:
        "Look for who pays the price. Who is left out of this version, treated as less than fully human, or made easier to ignore, blame, or hurt?",
    },
    {
      step: 8,
      title: "Ask what happens if people believe and act on it.",
      prompt:
        "Trace the consequences into the real world. If a community, a jury, a voter, or a government acted on this claim, what would actually happen, and to whom?",
    },
    {
      step: 9,
      title: "Compare with other evidence.",
      prompt:
        "Test the claim against additional sources. Where does it agree with strong, independent evidence, where does it conflict, and which account better survives scrutiny?",
    },
    {
      step: 10,
      title: "Make a judgment that is accountable to evidence.",
      prompt:
        "Reach a defensible conclusion and be ready to show your work. State what you believe, the evidence behind it, and what could change your mind, remembering that you do not have to be neutral, but you do have to be accountable to evidence.",
    },
  ],
  activity: {
    title: "What Did the Bias Do?",
    overview:
      "In this activity you will compare three sources that speak to the same historical struggle over freedom and citizenship after the Civil War. Each source carries a bias. Your job is not simply to label the bias but to determine what each one did: what it made people feel, what it made easier to justify, whom it protected, and whom it harmed. Read all three sources, answer the nine questions for each, and be ready to defend a judgment about which account is best supported by evidence and what its acceptance or rejection meant for real people's rights.",
    sources: [
      {
        label: "Source 1: A Reconstruction-Era Claim for Equal Citizenship (1868)",
        description:
          "A claim from the Reconstruction era asserting that formerly enslaved people were full citizens entitled to equal protection under the law. Delegates in the Colored Conventions movement and leaders such as Frederick Douglass pressed for exactly this guarantee, and it was ultimately written into the Constitution itself.",
        example:
          "The Fourteenth Amendment, ratified in 1868, states in Section 1: \"All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside,\" and forbids any state to \"deny to any person within its jurisdiction the equal protection of the laws.\" The claim in plain terms: Black Americans are citizens, and no state may strip them of equal standing before the law.",
      },
      {
        label: "Source 2: A Black Code / Anti-Reconstruction Argument (1865-1866)",
        description:
          "A Southern legal response to emancipation designed to control the labor and movement of newly freed people while stopping just short of formal slavery. These 'Black Codes,' passed by white-controlled state legislatures immediately after the war, were defended as necessary to preserve order and secure a stable workforce.",
        example:
          "Mississippi's Black Code of 1865 included a Vagrant Law that fined or jailed Black people judged to be without lawful employment, and an apprenticeship law that allowed courts to bind Black children to white 'masters,' with a former enslaver given legal preference. Those who could not pay the fines could be hired out to satisfy them. The underlying argument: freed people required special legal controls that were never applied to white citizens.",
      },
      {
        label: "Source 3: A Lost Cause Interpretation of Reconstruction (later decades)",
        description:
          "A later, romanticized retelling that reframed the Confederacy's cause as noble, portrayed slavery as benign, and cast Reconstruction as a corrupt era of misrule from which the South had to be 'redeemed.' It was spread through monuments, veterans' groups, organizations such as the United Daughters of the Confederacy, and school textbooks, and given academic cover by the Dunning School of historians.",
        example:
          "In this telling, the Civil War was fought over abstract 'states' rights' rather than slavery, enslaved people were depicted as loyal and content, and Reconstruction governments were portrayed as ignorant and corrupt, which supposedly justified their overthrow by 'Redeemers.' Modern historical scholarship rejects these claims: the secession-era declarations of the seceding states themselves named the protection of slavery as central, and the Reconstruction governments in fact expanded public schooling and civil rights before being dismantled through fraud, intimidation, and violence.",
      },
    ],
    questions: [
      "What is the claim?",
      "What bias or worldview is present?",
      "What does the source want the audience to feel?",
      "What does it make easier to justify?",
      "What does it hide?",
      "Who benefits if people believe it?",
      "Who is harmed if people act on it?",
      "What evidence challenges it?",
      "What civic consequence follows?",
    ],
    exitTicket:
      "Why is it not enough to say a source is biased? Explain what we also need to ask.",
    constructedResponse:
      "Choose one Reconstruction-era claim or policy. Explain how bias shaped the way people defended it, and evaluate the consequences for citizenship and rights.",
    teacherNote:
      "Avoid telling students that good citizens have no bias; that framing is both false and counterproductive, and students quickly sense the contradiction. Instead, teach that responsible citizens do three things: they examine their own assumptions honestly, they test claims against evidence rather than shielding the conclusions they prefer, and they weigh the consequences their beliefs would have for other people. With the Reconstruction sources, keep the analysis anchored in evidence and power. The Black Codes and Lost Cause narratives were not merely neutral 'opinions'; they did concrete work. They justified racial hierarchy, protected political and economic power, undermined Black citizenship, normalized voter suppression, excused violence, weakened federal enforcement, and helped build the conditions for Jim Crow. Be fair and evidence-focused without pretending every claim is equally supported; some accounts survive scrutiny and others collapse under it, and students should be able to say which and why. This is history and evidence, not present-day party politics, so keep the discussion on sources, power, and consequences.",
  },
  aiAndBias: {
    intro:
      "Everything on this page becomes more urgent, not less, once you add artificial intelligence and social media to the picture. These tools do not think for you, but they do respond to you, and they are very good at giving people more of what they already want. Civic judgment is the discipline that keeps that responsiveness from quietly hardening your assumptions into certainty.",
    points: [
      {
        title: "AI Can Amplify Your Assumptions",
        text: "A generative AI model tends to follow the framing you give it. If you ask a leading question or feed it a one-sided premise, it can produce a fluent, confident-sounding answer that simply dresses up what you already believed. Unless you deliberately challenge your own starting point, the tool can amplify your bias while making it look like research.",
      },
      {
        title: "Social Media Rewards Confirmation",
        text: "Recommendation systems are built to maximize attention, and identity-confirming content reliably captures it. That means the posts most likely to reach you are often the ones that flatter your group and anger you at rivals, not the ones that would test your thinking. Careful judgment operates at a structural disadvantage against content engineered to feel good.",
      },
      {
        title: "The Real Danger Is Motivated Reasoning at Scale",
        text: "The deepest problem is not only that false information exists; it is that these systems make it easy for millions of people to reason backward from what they want to be true. Motivated reasoning has always existed, but AI and social platforms industrialize it, producing polished justifications for almost any conclusion on demand. Misinformation is one symptom; the larger disease is judgment outsourced to whatever confirms us.",
      },
      {
        title: "The Skills That Still Protect You",
        text: "The defense is the same discipline you practice with historical sources: ask better questions, compare claims against independent evidence, and stay alert to the moment a tool or feed is simply reinforcing what you already wanted to believe. Treat a confident answer as a starting point to verify, not a conclusion to adopt. AI does not remove the need for judgment. It raises the cost of not having it.",
      },
    ],
    keyLine: "AI does not remove the need for judgment. It raises the cost of not having it.",
  },
  reflectionAddition:
    "I teach social studies because young people are inheriting a world where information is abundant, persuasion is constant, and a machine can now turn a poorly examined assumption into a polished, authoritative-sounding paragraph in seconds. In that world, teaching students only to find information is not enough; anyone can find information, and so can a chatbot. My goal is to teach students to judge what information does in public life, to ask not merely whether a claim is biased but what that bias protects, whom it harms, and what follows when people vote, legislate, and organize their loyalties around it. I want them to leave my classroom able to hold their own convictions and still remain accountable to evidence, because that combination, far more than a neutrality they will never actually possess, is what a self-governing society asks of its citizens.",
};
