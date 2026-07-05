import type { ReconstructionUnit } from "./types";

/* Static sample content — authored and adversarially fact-checked.
   Review all materials for accuracy before classroom use. */

const data = {
  "title": "American Government: Rights, Responsibilities, and Civic Judgment",
  "course": "Civics / Government",
  "gradeBand": "Grades 11-12 (main version calibrated to Grade 12; middle-school support version included)",
  "mainVersion": "Grade 12",
  "middleAdaptation": "Middle-school support version: The driving question is reframed in plainer language (\"When two sides disagree about a law or a right, how can you decide who is actually right instead of just picking the side you already like?\"). Each day is streamlined to ONE short source instead of a paired majority/dissent set, with the excerpt pre-chunked and the three or four hardest words glossed in the margin. Founding vocabulary (faction, ratify, dissent, due process) is front-loaded on a picture-supported word wall. The majority-vs-dissent move is scaffolded as a simple two-column \"Judge A said / Judge B said\" chart before students name the interest each protects. Every analysis task uses sentence frames (\"This source wants people to believe ___. If people act on it, ___ benefits and ___ is harmed.\") and a graphic organizer rather than open writing. The Bias Consequence Ladder is reduced from ten rungs to a five-rung version (claim, speaker, who benefits, who is harmed, what would change my mind), and it is still run on the fictional Millbrook debate and on the student's own gut reaction. The Day 5 assessment is reduced from a full DBQ essay to a single guided Claim-Evidence-Reasoning paragraph using two documents. Reading load is capped at roughly 120 words per source, and every primary-source excerpt is paired with the plain-language \"modifiedReading\" summary so students meet the idea before the harder original text.",
  "drivingQuestion": "How should a citizen judge competing claims about rights, law, and policy without simply believing what they already prefer?",
  "overview": "This five-day capstone turns the historical judgment students built in earlier units into present-day CIVIC judgment. It reuses the flagship's disciplinary method exactly - sourcing, contextualization, corroboration, and claim-evidence-reasoning, all organized around the recurring civic-judgment move: not just \"is it biased?\" but \"what does the bias DO - who benefits, who is harmed, and what happens when people act on it?\" Two commitments run through every day. First, the course's core principle: you do not have to be neutral, but you do have to be accountable to evidence. Second, the discipline against false balance: some claims survive corroboration and a fair reading of the other side, and some collapse, and students are expected to say which and why, grounded in the sources. The unit adds one distinct disciplinary move built for citizenship: reading a court's MAJORITY opinion against its DISSENT, so students learn that a decision is a contest of reasons, not a scoreboard. Across the week students move from where rights come from (Day 1: the Constitution and Bill of Rights, with Federalist No. 10 and No. 51 answered by an Anti-Federalist, on faction and checks), to how courts decide (Day 2: Marbury's judicial review, then the Tinker majority read against Justice Black's dissent), to rights genuinely in tension (Day 3: Barnette's clash of individual conscience and national unity, with the Fourteenth Amendment as living law), to judging civic information (Day 4: running the Bias Consequence Ladder on a FICTIONAL, de-identified local policy debate - and then on the student's own first reaction), and finally to a document-based writing seminar (Day 5). Every primary source is genuine and public domain, quoted in short accurate excerpts with correct attribution and a context note; the only fictional material is Day 4's local ordinance, which is invented on purpose so students practice the method without importing real party loyalties. NOTE ON STANDARDS: The alignment categories in this unit are THEMATIC labels only. No numeric or lettered state codes are provided. Districts must verify exact alignment against their own state civics/government framework before classroom use.",
  "essentialQuestions": [
    "How should a citizen judge competing claims about rights, law, and policy without simply believing what they already prefer? (the unit's driving question)",
    "PORTABLE: How do we judge between competing accounts of the same event, issue, or decision - and what makes one account more trustworthy than another?",
    "PORTABLE: What does a biased narrative actually DO - who does it benefit, who does it harm, and what happens when people organize their votes, laws, and loyalties around it?",
    "Where do rights come from, and what makes a claim about a right legitimate rather than merely preferred?",
    "When a court divides, what can a citizen learn by reading the majority opinion against the dissent?",
    "When legitimate rights or interests genuinely conflict, how should they be weighed - and who pays the cost of each resolution?",
    "How can I hold my OWN reasoning accountable to evidence, even when the evidence cuts against what I want to believe?"
  ],
  "objectives": [
    "Students will source and contextualize at least three founding-era documents (the Constitution's Preamble and Bill of Rights, Federalist No. 10 and No. 51, and an Anti-Federalist essay) to explain competing claims about where rights come from and how a large republic controls faction, quoting exact language.",
    "Students will compare a Supreme Court majority opinion and its dissent, identifying each side's legal rule, its strongest supporting quotation, and the right or interest it protects, and will articulate the strongest version of the side they personally disagree with.",
    "Students will analyze a structural case in which legitimate rights or interests conflict, explain how the Fourteenth Amendment brings the Bill of Rights to bear on the states, and evaluate who is protected and who is burdened by each possible resolution.",
    "Students will apply the ten-rung Bias Consequence Ladder to a fictional local policy debate framed by proponents and opponents - specifying who benefits, who is harmed, and what happens when people act on each claim - and then apply the ladder to their own initial reaction.",
    "Students will construct and defend a document-based written argument answering the driving question that cites at least three documents, engages a genuine disagreement between sources, addresses a counterargument, and states what evidence would change their mind."
  ],
  "vocabulary": [
    {
      "term": "Constitution",
      "definition": "The document, ratified in 1788, that sets up the U.S. government, divides its powers, and limits what it can do."
    },
    {
      "term": "Bill of Rights",
      "definition": "The first ten amendments (1791), which list rights the government may not take away, such as speech, religion, and a fair trial."
    },
    {
      "term": "Ratify",
      "definition": "To formally approve something, such as the Constitution or an amendment, so that it becomes law."
    },
    {
      "term": "Faction",
      "definition": "In Madison's words, a group of citizens - a majority or minority - united by a passion or interest that runs against the rights of others or the good of the whole community."
    },
    {
      "term": "Republic",
      "definition": "A government in which the people rule indirectly, through elected representatives, rather than voting on every decision themselves."
    },
    {
      "term": "Separation of powers",
      "definition": "Splitting government into branches (legislative, executive, judicial) so that no single part holds all the power."
    },
    {
      "term": "Checks and balances",
      "definition": "The system that lets each branch limit the others, so that, as Madison put it, ambition can 'counteract ambition.'"
    },
    {
      "term": "Federalism",
      "definition": "The division of power between the national government and the state governments."
    },
    {
      "term": "Judicial review",
      "definition": "The power of courts to decide whether a law or action violates the Constitution and to strike it down if it does - established in Marbury v. Madison (1803)."
    },
    {
      "term": "Majority opinion",
      "definition": "The official opinion of the court that announces the decision and the binding legal reasoning behind it."
    },
    {
      "term": "Dissent (dissenting opinion)",
      "definition": "A written opinion by one or more judges who disagree with the majority; it is not law, but its reasoning can shape future decisions."
    },
    {
      "term": "Precedent",
      "definition": "An earlier court decision that guides how similar cases are decided later."
    },
    {
      "term": "Due process",
      "definition": "The requirement that the government follow fair rules and procedures before taking away a person's life, liberty, or property."
    },
    {
      "term": "Equal protection",
      "definition": "The principle that the government must apply the law in the same way to all people."
    },
    {
      "term": "Incorporation",
      "definition": "The legal process, using the Fourteenth Amendment, by which most Bill of Rights protections came to limit STATE governments, not just the federal government."
    },
    {
      "term": "Ordinance",
      "definition": "A law passed by a local government, such as a town or city council."
    },
    {
      "term": "Sourcing",
      "definition": "Asking who made a source, when, and why, and how that shapes what it says and how far to trust it."
    },
    {
      "term": "Corroboration",
      "definition": "Checking a claim against other independent evidence to see whether it holds up, agrees, or conflicts."
    },
    {
      "term": "Civic judgment",
      "definition": "Deciding not just whether a claim is biased, but what the bias DOES - who it protects, who it harms, and what happens when people act on it."
    },
    {
      "term": "Bias Consequence Ladder",
      "definition": "The unit's ten-step routine for moving from spotting a slant to judging its real-world consequences and reaching a conclusion accountable to evidence."
    },
    {
      "term": "Motivated reasoning",
      "definition": "Reasoning backward from the answer you already want, so you accept weak evidence that flatters you and reject strong evidence that does not."
    }
  ],
  "historicalThinkingSkills": [
    "Sourcing: Students identify who created a document, when, and why - a framer persuading voters, a justice writing for the Court, a dissenter, or a local advocacy group - and consider how purpose and audience shape its claims and reliability.",
    "Contextualization: Students place each source in its moment (the ratification debate of 1787-88; Marbury in 1803; a wartime flag-salute case in 1943; a Vietnam-era student-speech case in 1969) so they judge the argument against the problem it was actually answering.",
    "Corroboration: Students test a claim against independent evidence and against the strongest opposing source, refusing both blind acceptance and the false balance of treating every claim as equally supported.",
    "Reading a majority opinion against a dissent (the unit's added move): Students treat a court decision as a contest of reasons, naming each side's rule, its best quotation, and the interest it protects, and can state the strongest version of the view they reject.",
    "Claim-Evidence-Reasoning: Students make a defensible claim, support it with short exact quotations, and explain how each piece of evidence proves the claim, while addressing a counterargument.",
    "Consequence analysis / civic judgment (the Bias Consequence Ladder): Students trace what a claim DOES - who benefits, who is harmed, and what happens when a voter, council, or court acts on it - and then run that same scrutiny on their own initial reaction, holding their reasoning accountable to evidence over preference."
  ],
  "alignmentCategories": [
    "Foundations of American Constitutional Government",
    "Civil Liberties and the Bill of Rights",
    "The Judiciary and Constitutional Interpretation",
    "Federalism, Separation of Powers, and Checks and Balances",
    "Rights in Tension and Competing Claims",
    "Media and Information Literacy for Citizens",
    "Evidence-Based Civic Argumentation",
    "Responsible and Informed Citizenship"
  ],
  "teacherNotes": [
    "STANDARDS DISCLAIMER: The alignment categories in this unit are thematic labels only; they are NOT numeric or lettered standards, and no state codes (Alabama or otherwise) are invented or implied. Verify exact alignment against your district's current civics/government framework before classroom use, and paste in the specific standard numbers your district requires.",
    "PACING: The unit is built for five 45-55 minute periods. On block schedules, combine Days 1-2 and Days 3-4, then devote a full block to Day 5. If time is short, the sourceActivity is the non-negotiable core of each day; the mini-lesson can be trimmed to a five-minute framing. Post the Bias Consequence Ladder and the Fourteenth Amendment, Section 1, on the wall all week as anchor texts.",
    "NONPARTISAN SAFETY (READ FIRST): This is a civics capstone, not a current-events debate. The ONLY contemporary application (Day 4) is a fully FICTIONAL, de-identified town ordinance. Do not swap in real politicians, parties, ballot measures, or active disputes; that is exactly what the fictional scenario exists to prevent. Every genuine source is public domain and historical (founding documents and Supreme Court opinions), which keeps the analysis on structure, reasoning, and consequences rather than present-day team loyalty.",
    "MODEL THE CORE PRINCIPLE: Teach explicitly that citizens are allowed to hold values - citizenship is not fake neutrality - but they must keep those values accountable to evidence, context, the strongest counterargument, and real-world consequences. Justice Frankfurter's dissent in Barnette ('I am not justified in writing my private notions of policy into the Constitution') is a gift for this; use it to show that disciplined restraint applies to citizens too.",
    "DO NOT FLATTEN TO 'BOTH SIDES ARE EQUAL': A dissent is a serious rival argument, and the Day 4 flyers each contain something legitimate - but 'everything is biased, so nothing can be judged' is a failure of reasoning, not neutrality. Require students to say which claim better survives corroboration and a fair reading of the other side, and WHY, using the sources. Reward a defensible either-side answer that is honestly argued; do not reward mush.",
    "COMMON MISCONCEPTIONS TO CORRECT: (1) 'Biased means false or worthless.' Almost every source has a perspective; the useful question is what the bias does. (2) 'A dissent means the case was decided wrongly.' A dissent is the losing argument's reasoning; it is not law, though it can become law later. (3) 'Judicial review is written in the Constitution.' It is not stated in the text; the Court claimed it in Marbury v. Madison (1803). (4) 'Rights are absolute.' Courts constantly weigh rights against other legitimate interests (order, safety, the rights of others). (5) 'The Bill of Rights always limited the states.' As originally ratified it limited only the federal government; most protections reached the states later through the Fourteenth Amendment (incorporation). (6) 'Being objective means having no opinions.' Objectivity means accountability to evidence, not the absence of values.",
    "DISCUSSION MANAGEMENT: Use a structured protocol daily so participation is equitable and evidence-based. Require students to point to text before offering an opinion ('According to Doc __ ...' or 'The dissent says ...'). At least once per seminar, require each speaker to state what evidence would change their mind - the habit at the heart of the unit.",
    "ASSESSMENT NOTES: The Day 5 DBQ and the analytic rubric are the summative assessment; the daily exit tickets are formative checkpoints. The rubric scores how ACCOUNTABLE the reasoning is - evidence, corroboration, fair reading of the opposing view, and consequence analysis - not the stance a student takes. Two students who disagree can both earn top marks. Consider allowing one revision cycle on the DBQ.",
    "SOURCE ACCURACY NOTE: All genuine excerpts are quoted faithfully from public-domain texts (U.S. Constitution and amendments; The Federalist; the Anti-Federalist 'Brutus' essays; and U.S. Supreme Court opinions, which are public domain). Where early spelling or punctuation was lightly modernized for readability (notably the Brutus excerpt), the context note says so. Nothing is fabricated; the Millbrook ordinance and its flyers are clearly labeled fictional wherever they appear."
  ],
  "days": [
    {
      "day": 1,
      "title": "Where rights come from",
      "objective": "Students will source and contextualize the Constitution's Preamble and Bill of Rights alongside Federalist No. 10, Federalist No. 51, and an Anti-Federalist counterargument to explain competing founding-era claims about where rights come from and how a large republic controls faction, citing exact language.",
      "bellRinger": "Write for three minutes: Name one right you are certain you have. Where does it come from - who or what guarantees it - and what SHOULD happen if a majority of people voted tomorrow to take it away? (No wrong answers; we will test your instinct against what the founders actually argued.)",
      "miniLesson": "TEACHER OUTLINE (10-12 min). (1) The Preamble names the PURPOSES of government - 'establish Justice ... secure the Blessings of Liberty.' (2) The Bill of Rights (1791) protects rights by placing them BEYOND ordinary majority votes: 'Congress shall make no law ...' A right, in this design, is a limit on the majority, not a gift from it. (3) The founders disagreed about the danger. In Federalist No. 10, Madison defines FACTION and argues, against intuition, that a LARGE republic is SAFER because it multiplies interests so no single faction can dominate. (4) In Federalist No. 51, he adds the internal machinery: because men are 'not angels,' the design must set 'ambition ... to counteract ambition' through separation of powers and checks. (5) The Anti-Federalists disagreed hard: 'Brutus' warned that a republic this large and diverse could not hold enough common interest to stay free, and would concentrate power. (6) Name the disciplinary move for the week: these are COMPETING CLAIMS by people with purposes. We source them and ask not merely 'who is biased?' but 'what does each design DO - whom does it protect, and whom might it fail?' Set the task.",
      "sourceActivity": {
        "title": "Faction and the Size of a Republic: Publius vs. Brutus (1787)",
        "excerpt": "PUBLIUS (Federalist No. 10): \"By a faction, I understand a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens, or to the permanent and aggregate interests of the community.\" ... \"Liberty is to faction what air is to fire, an aliment without which it instantly expires. But it could not be less folly to abolish liberty ... because it nourishes faction, than it would be to wish the annihilation of air ... because it imparts to fire its destructive agency.\"  BRUTUS (Anti-Federalist No. 1): \"In a republic, the manners, sentiments, and interests of the people should be similar. If this be not the case, there will be a constant clashing of opinions; and the representatives of one part will be continually striving against those of the other.\"",
        "attribution": "James Madison ('Publius'), Federalist No. 10, 1787; and 'Brutus' (Anti-Federalist essay traditionally attributed to Robert Yates, though authorship is debated), Brutus No. 1, New York Journal, October 18, 1787. Both public domain.",
        "contextNote": "Publius wrote to persuade New Yorkers to RATIFY the Constitution; Brutus wrote to persuade them to REJECT it. Looking at the same enormous, diverse republic, they reach opposite conclusions: Madison says size and diversity fragment faction and protect liberty; Brutus says a republic that large cannot share enough common interest to stay free. Spelling and punctuation in the Brutus excerpt are lightly modernized for readability; wording is otherwise faithful. Nothing here is paraphrased or invented.",
        "task": "Source each writer first: who is speaking, and what did each WANT readers to do about the Constitution? Then, on your organizer: (1) Put 'faction' in your own words. (2) Madison and Brutus study the same large republic and reach OPPOSITE conclusions. Quote one phrase from each, and explain what each claim is designed to PROTECT - and whom it might fail."
      },
      "discussionQuestion": "Madison says a large republic tames faction; Brutus says it destroys the shared interest a free republic needs. These are competing claims, not just 'bias.' Which claim better survives when you ask what it would actually DO if a country were built on it - and what evidence supports your answer?",
      "studentTask": "Complete a 'Where Rights Come From' organizer with three sources: the Preamble (the PURPOSE of government), the First Amendment (a LIMIT on government), and Federalist No. 51 ('ambition ... counteract ambition'). For each, write (a) what it says in your own words and (b) how it protects a right or controls power. Finish with one sentence answering: does a right come from the majority's permission, or from a limit placed on the majority? Defend it with one quoted phrase.",
      "exitTicket": "In one sentence, explain WHERE the Bill of Rights locates the protection of a right, and cite the exact opening words of the First Amendment.",
      "differentiation": {
        "strugglingReaders": "Provide the two excerpts pre-chunked into labeled boxes ('Publius: faction' / 'Publius: liberty and fire' / 'Brutus: sameness') with the four hardest words glossed in the margin (faction, aliment, aggregate, sentiments). Read each excerpt aloud twice before students annotate, and offer a two-question version of the task (What is a faction? Who disagrees, and why?).",
        "advanced": "Add Federalist No. 51's 'auxiliary precautions' passage and ask students to argue which safeguard against faction is stronger - Madison's large diverse republic (No. 10) or the internal checks (No. 51) - and where Brutus would attack each. One tight paragraph, quoting all three.",
        "englishLearners": "Provide a bilingual key-term glossary (faction, republic, liberty, interest) with cognates, and a sentence frame: 'Madison believes ___ because ___; Brutus disagrees because ___.' Allow partner discussion in a home language before writing.",
        "iepAnd504": "Reduce each source to its single core sentence, provide a partially completed 'Where Rights Come From' organizer, and allow extended time and a scribe or speech-to-text as specified on the plan.",
        "executiveFunction": "Supply a step checklist with time boxes (Read 5 min, Annotate 4 min, Organizer 6 min, Share 3 min) and reveal one step at a time so only the current task is visible.",
        "alternateResponse": "Students may record a 60-second voice memo comparing the two writers, build a two-column labeled poster, or complete the sentence-frame organizer instead of writing the paragraph."
      }
    },
    {
      "day": 2,
      "title": "How courts decide: reading a majority against a dissent",
      "objective": "Students will explain judicial review through Marbury v. Madison and then compare the majority opinion and the dissent in Tinker v. Des Moines, identifying each side's legal rule, its strongest quotation, and the interest it protects, quoting both.",
      "bellRinger": "When judges disagree, the losing side often publishes a 'dissent.' In three minutes: why would a court bother to print the reasoning of the side that LOST? What could a dissent possibly be for?",
      "miniLesson": "TEACHER OUTLINE (10-12 min). (1) Courts do not take polls; they give REASONS tied to text and precedent. (2) Marbury v. Madison (1803): Chief Justice Marshall - 'It is emphatically the province and duty of the judicial department to say what the law is,' and 'a law repugnant to the constitution is void.' This is JUDICIAL REVIEW - and note it is NOT spelled out in the Constitution's text; the Court claimed the power. (3) A decision has a MAJORITY opinion (the binding rule plus reasoning) and often a DISSENT (why the majority is wrong). A dissent is not sore losing; it is a rival legal argument that can become tomorrow's law. (4) Today's case: Tinker v. Des Moines (1969). Students wore black armbands to protest a war; the school suspended them. Majority (Fortas): students do not 'shed their constitutional rights ... at the schoolhouse gate,' and 'undifferentiated fear' is not enough to censor. Dissent (Black): schools need order; no one may speak 'where he pleases and when he pleases.' (5) The move: read the majority AGAINST the dissent. Name each side's RULE, its best QUOTE, and the INTEREST it protects - then ask the civic-judgment question: what does each rule DO if every school adopts it? Who benefits, who is burdened?",
      "sourceActivity": {
        "title": "Tinker v. Des Moines (1969): Majority and Dissent",
        "excerpt": "MAJORITY (Justice Abe Fortas): \"It can hardly be argued that either students or teachers shed their constitutional rights to freedom of speech or expression at the schoolhouse gate. ... In our system, undifferentiated fear or apprehension of disturbance is not enough to overcome the right to freedom of expression.\"  DISSENT (Justice Hugo Black): \"It is a myth to say that any person has a constitutional right to say what he pleases, where he pleases, and when he pleases.\" ... \"One does not need to be a prophet or the son of a prophet to know that ... some students ... will be ready, able, and willing to defy their teachers on practically all orders.\"",
        "attribution": "Tinker v. Des Moines Independent Community School District, 393 U.S. 503 (1969); majority opinion by Justice Abe Fortas, dissenting opinion by Justice Hugo Black. Public domain (U.S. Supreme Court).",
        "contextNote": "In 1965 several Des Moines students wore black armbands to protest the Vietnam War; the school suspended them. The Court ruled 7-2 for the students. Fortas's majority set the rule that student speech is protected unless it would 'materially and substantially' disrupt school; Black's dissent warned the ruling would erode a school's authority to keep order. Both opinions are part of the SAME official decision, quoting the same event and disagreeing about which interest should win.",
        "task": "Build a two-column 'Majority vs. Dissent' chart. For EACH side, write: (1) the rule it announces, (2) one exact quoted phrase, and (3) the right or interest it protects (student expression vs. school order). Then answer: if every school in the country followed each rule, who benefits and who is burdened?"
      },
      "discussionQuestion": "Justice Black lost, yet his dissent is still quoted today. Reading the majority AGAINST the dissent, which opinion better survives the civic-judgment test - not 'which do you prefer,' but which one can honestly defend its consequences? Cite both.",
      "studentTask": "Write a 'steelman' paragraph: state the STRONGEST version of the side you personally disagree with, using one exact quotation, and explain the legitimate interest it protects. You are graded on how fairly you present the OTHER side, not on your own opinion.",
      "exitTicket": "In one sentence, explain the difference between a majority opinion and a dissent, and give one reason a dissent still matters even though it is not the law.",
      "differentiation": {
        "strugglingReaders": "Provide each opinion as one short sentence with a margin paraphrase ('Students keep free speech at school' / 'Schools still need order'), and give the chart with the 'interest protected' column pre-labeled so students match the quote to the interest.",
        "advanced": "Add the Marbury excerpt and ask students to connect the dots: how does the power 'to say what the law is' make BOTH the majority and the dissent possible? Then predict one future situation where Black's dissent, not Fortas's majority, would be the better guide, and defend it.",
        "englishLearners": "Pre-teach 'shed,' 'disturbance,' 'dissent,' and 'defy' with visuals and cognates; provide the two-column chart with sentence frames ('The majority protects ___. The dissent worries that ___.').",
        "iepAnd504": "Provide a two-row (not open-ended) chart with a word bank of interests to place, allow oral completion with a scribe, and extend time per the plan.",
        "executiveFunction": "Number the chart cells and provide a checklist ('Find the rule, copy the quote, name the interest'); model one completed row before students continue.",
        "alternateResponse": "Students may present the majority-vs-dissent comparison as a labeled poster, a recorded 'two judges' dialogue, or a slide with the two quotes and their protected interests instead of a written chart."
      }
    },
    {
      "day": 3,
      "title": "Rights in tension",
      "objective": "Students will analyze a structural case in which legitimate rights and interests genuinely conflict - West Virginia State Board of Education v. Barnette - explain how the Fourteenth Amendment brings the Bill of Rights to bear on the states, and evaluate who is protected and who is burdened by each resolution, quoting majority and dissent.",
      "bellRinger": "Sometimes two GOOD things collide: individual conscience vs. national unity; one person's freedom vs. the community's order. In three minutes, describe a time two things you value pulled in opposite directions. How did you decide - and what did you give up?",
      "miniLesson": "TEACHER OUTLINE (10 min). (1) Recall: the Bill of Rights originally limited only the FEDERAL government. The Fourteenth Amendment (1868) - 'No State shall ... deprive any person of life, liberty, or property, without due process of law' - is how most Bill of Rights protections came to bind the STATES too. This is INCORPORATION; it is why a state school can be held to the First Amendment. (Gideon v. Wainwright, 1963, did the same for the right to a lawyer.) Call the Fourteenth Amendment 'living law.' (2) Barnette (1943): during World War II, West Virginia required students to salute the flag; children of Jehovah's Witness families refused on religious grounds. The tension is real on BOTH sides: the state's legitimate interest in national unity in wartime vs. individual conscience. (3) Majority (Jackson): no official 'can prescribe what shall be orthodox ... or force citizens to confess by word or act their faith therein'; 'Compulsory unification of opinion achieves only the unanimity of the graveyard.' (4) Dissent (Frankfurter): a judge must not write 'my private notions of policy into the Constitution' - defer to elected lawmakers. (5) Barnette OVERRULED a case decided just three years earlier (Gobitis, 1940): the Court changed its mind, showing that law, like good history, is revisable when the reasoning and evidence shift. (6) The move: name both legitimate interests, then run the civic-judgment question on EACH resolution.",
      "sourceActivity": {
        "title": "Barnette (1943) and the Fourteenth Amendment as Living Law",
        "excerpt": "FOURTEENTH AMENDMENT: \"No State shall ... deprive any person of life, liberty, or property, without due process of law ...\"  MAJORITY (Justice Robert H. Jackson): \"If there is any fixed star in our constitutional constellation, it is that no official, high or petty, can prescribe what shall be orthodox in politics, nationalism, religion, or other matters of opinion, or force citizens to confess by word or act their faith therein.\"  DISSENT (Justice Felix Frankfurter): \"As a member of this Court I am not justified in writing my private notions of policy into the Constitution, no matter how deeply I may cherish them ...\"",
        "attribution": "U.S. Constitution, Amendment XIV, Section 1 (ratified July 9, 1868); and West Virginia State Board of Education v. Barnette, 319 U.S. 624 (1943), majority opinion by Justice Robert H. Jackson, dissenting opinion by Justice Felix Frankfurter. All public domain.",
        "contextNote": "In 1943, amid World War II, the Court struck down a mandatory flag salute, protecting students who declined on religious grounds. Jackson's majority guards individual conscience against compelled speech; Frankfurter - himself a Jewish immigrant from Vienna who wrote in the same dissent that he belonged to 'the most vilified and persecuted minority in history' - nonetheless argued that judges should defer to the people's elected representatives even about laws the judge personally dislikes. The Fourteenth Amendment is precisely what let a FEDERAL right limit a STATE school board, and Barnette overruled Minersville v. Gobitis (1940) - the Court reversing itself in three years. Quotations are faithful to the opinions.",
        "task": "Map the tension. Name the LEGITIMATE interest on each side (individual conscience vs. the state's interest in unity and order). Quote Jackson and Frankfurter. Then run the civic-judgment question on BOTH resolutions: under Jackson's rule, who is protected and who is burdened? Under Frankfurter's restraint, who is protected and who is burdened?"
      },
      "discussionQuestion": "Frankfurter warned that a judge must not write his 'private notions of policy' into the Constitution - even ones he cherishes. How is that the same discipline this course asks of YOU as a citizen? When is deferring to the rules the responsible move, and when is it a way to dodge responsibility? Ground your answer in the text.",
      "studentTask": "Write a short 'rights-in-tension' brief: (1) name both legitimate interests; (2) state which one you think should win and quote your evidence; (3) name the strongest COST of your own position - who pays for it - and explain why you still hold it. This is accountability, not neutrality.",
      "exitTicket": "In one or two sentences, explain how the Fourteenth Amendment let a federal right (free speech and conscience) limit a STATE government, and why that makes it 'living law.'",
      "differentiation": {
        "strugglingReaders": "Provide the two opinions as short sentences with margin summaries ('Government can't force what you believe' / 'Judges should let voters decide'), plus a two-column 'Who is protected? / Who is burdened?' organizer with one cell filled as a model.",
        "advanced": "Assign a short investigation of incorporation using Gideon v. Wainwright (1963): explain in one paragraph how the Fourteenth Amendment carried the Sixth Amendment right to counsel to the states, and argue whether Jackson or Frankfurter offers the better rule for a democracy, quoting both.",
        "englishLearners": "Pre-teach 'orthodox,' 'conscience,' 'compel,' 'defer,' and 'incorporation' with icons and cognates; provide a sentence frame ('The state wanted ___. The family wanted ___. The Court decided ___ because ___.').",
        "iepAnd504": "Provide a partially completed tension map with the two interests already named, a word bank for 'protected/burdened,' extended time, and a scribe or speech-to-text as specified on the plan.",
        "executiveFunction": "Break the brief into three numbered checkpoints (name interests, pick a side with a quote, name your position's cost) with a progress bar and a worked example of the first checkpoint.",
        "alternateResponse": "Students may deliver the rights-in-tension brief as a recorded structured oral response, a labeled diagram of the two colliding interests, or a slide with quotes and costs instead of a written brief."
      }
    },
    {
      "day": 4,
      "title": "Judging civic information: the Bias Consequence Ladder on a fictional local debate",
      "objective": "Students will apply the ten-rung Bias Consequence Ladder to a fictional local policy debate framed by proponents and opponents - specifying who benefits, who is harmed, and what happens when people act on each claim - and then apply the ladder to their own initial reaction.",
      "bellRinger": "Read the two projected headlines about the SAME fictional proposal. Before ANY analysis, notice your gut: which side do you already lean toward, and why? Write it down. Today you will hold your own first reaction accountable to evidence, exactly the way you would hold a source accountable.",
      "miniLesson": "TEACHER OUTLINE (10 min, then release). (1) Restate the recurring move: not just 'is it biased?' but 'what does the bias DO - who benefits, who is harmed, what happens when people act on it?' (2) Everything today is FICTIONAL and LOCAL on purpose - no real politicians or parties - so we practice the METHOD without importing team loyalties. (3) Introduce the Bias Consequence Ladder (ten rungs, posted): (1) identify the claim; (2) identify the source/speaker and interest; (3) name the bias/perspective; (4) what it emphasizes; (5) what it hides or minimizes; (6) who benefits; (7) who is harmed or excluded; (8) what happens if people act on it; (9) compare with independent evidence; (10) make a judgment accountable to evidence. (4) The scenario: the fictional town of Millbrook is debating Ordinance 24-7, which would close Rowan Park (a free public park) from 10 p.m. to 5 a.m. Two flyers: proponents (quiet and safety) vs. opponents (access and assembly). (5) Model rungs 1-3 aloud on the proponents' flyer. (6) Guardrail against false balance: a claim can be SINCERE and still do harm, and one side can be BETTER supported - we do not flatten to 'both equal.' We say which survives corroboration and why. (7) Finally, run the ladder on YOUR bell-ringer reaction.",
      "sourceActivity": {
        "title": "FICTIONAL Local Debate: Millbrook's Rowan Park Evening Hours Ordinance (24-7)",
        "excerpt": "PROPONENTS - 'Millbrook Neighbors for Quiet Streets' (flyer): \"Every night, noise, litter, and vandalism from Rowan Park rob nearby families of sleep and safety. Closing the park from 10 p.m. to 5 a.m. is common sense. Good neighbors have nothing to lose - only troublemakers stay out that late. Protect our homes. Vote YES on 24-7.\"  OPPONENTS - 'Millbrook Community Access Coalition' (flyer): \"Rowan Park is the only free gathering place many of us have. Night-shift workers, teens without yards, and neighbors without air conditioning use it after 10 p.m. A blanket closure treats every late-night visitor as a criminal and quietly bans peaceful assembly. Fix the litter - don't lock the gates. Vote NO on 24-7.\"",
        "attribution": "FICTIONAL teaching scenario created for the Civic Judgment Lab. 'Millbrook,' 'Rowan Park,' 'Ordinance 24-7,' and both groups are invented and de-identified. This is not a real town, ordinance, publication, or dispute, and it takes no side in any actual political debate.",
        "contextNote": "The scenario is deliberately structural and nonpartisan: the conflict is between one legitimate public interest (quiet, safety, property) and other legitimate interests (free access, peaceable assembly, and people who depend on public space). Both flyers use persuasion moves worth naming - the proponents' 'only troublemakers stay out that late' insinuation, and the opponents' 'only free space' and 'treats everyone as a criminal' framing. Neither side is simply the villain. The task is to run the ladder on each flyer, and then on the student's own gut reaction.",
        "task": "Run the Bias Consequence Ladder on BOTH flyers. For each, complete rungs 1-8 on your organizer: name the claim, the speaker and their interest, what it emphasizes, what it hides, WHO BENEFITS, WHO IS HARMED, and what happens if the town acts on it. Then complete rungs 9-10 across the two: what independent evidence would you need to decide (actual noise/crime reports, who really uses the park at night, whether a narrower fix exists), and what is your accountable judgment? Finally, run rungs 6-8 on your OWN bell-ringer reaction: who benefits if your gut is right, and what evidence would change your mind?"
      },
      "discussionQuestion": "Both flyers are biased - and that alone settles nothing. Using the ladder, which claim does more WORK in the world: 'only troublemakers stay out that late,' or 'treats every late-night visitor as a criminal'? Who does each phrase protect, whom does it target, and what evidence would you demand before believing either one?",
      "studentTask": "Write an evidence-request memo to the fictional Millbrook town council: list the THREE pieces of evidence you would need before voting, explain what each would prove, and propose ONE narrower policy that might protect BOTH interests (for example, targeted quiet hours, better lighting, or added cleanup instead of a full closure). You may not take a final side until you have named the evidence.",
      "exitTicket": "Name one claim from today whose BIAS does real work: say who benefits, who is harmed, and what would happen if the town acted on it WITHOUT checking the evidence.",
      "differentiation": {
        "strugglingReaders": "Provide a five-rung version of the ladder (claim, speaker, who benefits, who is harmed, what would change my mind) with each rung as a labeled box, and read both flyers aloud twice before students annotate.",
        "advanced": "Have students write BOTH a proponent and an opponent rebuttal that each stay accountable to evidence (no invented facts), then judge which side's honest case is stronger and specify the single study that would most change the outcome.",
        "englishLearners": "Pre-teach 'ordinance,' 'vandalism,' 'assembly,' 'blanket closure,' and 'insinuation' with visuals; provide the ladder with sentence frames ('This flyer wants people to feel ___. If the town acts on it, ___ benefits and ___ is harmed.').",
        "iepAnd504": "Provide the reduced five-rung ladder with two rungs pre-completed as a model, a word bank, extended time, and a scribe or speech-to-text as specified on the plan.",
        "executiveFunction": "Number the ladder rungs and reveal them one at a time; supply a time plan (Read flyers 5 min, Ladder on Flyer 1 8 min, Ladder on Flyer 2 8 min, Memo 10 min) and a checkbox for each rung.",
        "alternateResponse": "Students may deliver the evidence-request memo as a recorded 'public comment' to the council, a labeled poster of the ladder applied to one flyer, or a short slide deck instead of a written memo."
      }
    },
    {
      "day": 5,
      "title": "Claim-writing seminar and DBQ-style assessment",
      "objective": "Students will construct and defend an evidence-based written argument answering the driving question, citing at least three documents, engaging a genuine disagreement between sources, addressing a counterargument, and stating what evidence would change their mind.",
      "bellRinger": "Restate the unit's driving question in your OWN words. Then write your gut answer in a single sentence. Keep it - you will revise it after working with the documents, and we will compare your 'before' and 'after' answers.",
      "miniLesson": "TEACHER OUTLINE (10 min, then release to writing). (1) Model a strong claim. Weak: 'Citizens should think for themselves.' Strong (arguable, disciplined): 'A citizen should judge a claim about rights not by whether it flatters what they already believe, but by whether it survives sourcing, corroboration, and a fair reading of the opposing view - the way a court weighs a majority against a dissent.' (2) Review the writing frame: Claim, then Evidence (short exact quotes, cited Doc A/Doc B), then Reasoning (explain HOW the evidence proves the claim), then a Counterargument sentence ('Although Doc __ suggests ___, the stronger evidence shows ___'), and finish with an ACCOUNTABILITY sentence ('I would change my mind if ___'). (3) Teach a one-sentence SOURCING move: name a key document's author, date, and purpose and why that makes it persuasive. (4) Require engaging one GENUINE disagreement - Federalist No. 10 vs. Brutus, or the Tinker majority vs. its dissent. (5) Point to the analytic rubric; then release to the seminar and writing.",
      "sourceActivity": {
        "title": "DBQ Document Set: How Should a Citizen Judge Competing Claims?",
        "excerpt": "Students work from the five-document DBQ set (Federalist No. 10; Brutus No. 1; Federalist No. 51; the Tinker majority; and the Tinker dissent). Example anchor - James Madison, Federalist No. 51 (1788): \"If men were angels, no government would be necessary. ... Ambition must be made to counteract ambition.\"",
        "attribution": "James Madison ('Publius'), Federalist No. 51, 1788 (one of five documents in the Day 5 DBQ set; the full set appears in the DBQ section and the Student Packet). Public domain.",
        "contextNote": "The set is built to force judgment among competing claims: Federalist No. 10 and No. 51 defend the large republic and its internal checks; Brutus No. 1 warns that concentrated, distant power endangers liberty; and the Tinker majority and dissent model a live legal disagreement about a right. The documents are not all equally supported on every point - part of the task is to say which claims survive corroboration and a fair reading of the other side, and why.",
        "task": "Annotate all five documents. For each, note the author's purpose and one quotable phrase, and label it 'a claim about how to CONTROL power,' 'a WARNING about power,' or 'a RIGHTS decision.' Identify the ONE pair that most directly disagrees, and plan to engage that disagreement head-on in your essay."
      },
      "discussionQuestion": "SOCRATIC SEMINAR on the driving question: How should a citizen judge competing claims about rights, law, and policy without simply believing what they already prefer? Ground every contribution in a document ('According to Doc __ ...'), respond to at least one peer before adding a new point, and - at least once - state what evidence would change your mind.",
      "studentTask": "Write the DBQ response (a full essay for the main version; three structured CER paragraphs for the support version). Requirements: a clear, arguable claim; evidence from at least THREE documents cited by letter; reasoning connecting each piece of evidence to the claim; explicit engagement with one genuine disagreement between sources; one sentence addressing a counterargument; and one accountability sentence naming what evidence would change your mind. Self-check against the rubric before submitting.",
      "exitTicket": "Reflection: Which SINGLE document most shaped your final answer, and why? Did your 'after' answer change from your bell-ringer 'before' answer - and what evidence moved you? Name one thing that could still change your mind.",
      "differentiation": {
        "strugglingReaders": "Provide the documents at reduced length with the key sentence in each pre-highlighted, plus a paragraph frame ('A citizen should judge a claim by ___. Doc __ shows this because it says \"___.\" However, Doc __ suggests ___. The stronger evidence is ___ because ___.').",
        "advanced": "Require engaging all five documents, a sourcing sentence for at least two, and a short reflection on the method itself: is 'reading the majority against the dissent' a good model for how an ordinary citizen should handle any contested claim? Argue yes or no with evidence.",
        "englishLearners": "Provide a pre-sorted label chart (control power / warning / rights decision) with one example placed, claim-evidence-reasoning frames, and permission to draft key sentences with a bilingual partner before writing independently.",
        "iepAnd504": "Offer the three-paragraph CER option, a graphic-organizer scaffold, a word bank of transition and citation phrases, extended time, and a scribe or speech-to-text as specified on the plan.",
        "executiveFunction": "Provide a writing checklist with a time plan (annotate 10 min, outline 5 min, draft 20 min, self-check 5 min) and a visible model of each essay part; break submission into checkpoints.",
        "alternateResponse": "Students may deliver the argument as a recorded structured oral response, a slide deck with cited evidence, or a scored seminar contribution in place of a written essay, judged on the same rubric criteria."
      }
    }
  ],
  "quiz": [
    {
      "question": "Which case first established judicial review - the power of courts to strike down a law that violates the Constitution?",
      "choices": [
        "Tinker v. Des Moines (1969)",
        "Marbury v. Madison (1803)",
        "Gideon v. Wainwright (1963)",
        "West Virginia v. Barnette (1943)"
      ],
      "answer": "Marbury v. Madison (1803)",
      "explanation": "In Marbury, Chief Justice Marshall wrote that it is 'emphatically the province and duty of the judicial department to say what the law is' and that 'a law repugnant to the constitution is void.' Judicial review is not stated in the Constitution's text; the Court claimed the power here."
    },
    {
      "question": "Read the quotation and identify the source: 'By a faction, I understand a number of citizens ... united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens, or to the permanent and aggregate interests of the community.'",
      "choices": [
        "Brutus No. 1",
        "The Bill of Rights",
        "Federalist No. 10",
        "Marbury v. Madison"
      ],
      "answer": "Federalist No. 10",
      "explanation": "This is Madison's definition of a faction in Federalist No. 10 (1787). He argues that a large, diverse republic is actually SAFER because it multiplies interests so no single faction can easily dominate."
    },
    {
      "question": "The phrase 'ambition must be made to counteract ambition' best describes which constitutional design principle?",
      "choices": [
        "Birthright citizenship",
        "Checks and balances / separation of powers",
        "Judicial review",
        "Incorporation"
      ],
      "answer": "Checks and balances / separation of powers",
      "explanation": "In Federalist No. 51, Madison argues that because people are not angels, the government must be structured so each branch can limit the others - setting ambition against ambition rather than trusting rulers to restrain themselves."
    },
    {
      "question": "What was the central worry of the Anti-Federalist 'Brutus' in Brutus No. 1?",
      "choices": [
        "That the Constitution abolished slavery too quickly",
        "That a republic as large and diverse as the United States could not stay free and would concentrate too much power",
        "That the states would become too powerful",
        "That courts would be too weak to protect rights"
      ],
      "answer": "That a republic as large and diverse as the United States could not stay free and would concentrate too much power",
      "explanation": "Brutus argued that a free republic needs people with similar interests, and that a republic this large would produce constant clashing and distant, hard-to-control power. It is the direct counter to Federalist No. 10 - a genuine competing claim, not simply 'bias.'"
    },
    {
      "question": "True or False: As originally ratified, the Bill of Rights limited the STATE governments as well as the federal government.",
      "choices": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "The Bill of Rights (1791) originally limited only the FEDERAL government. Most of its protections came to bind the states later through the Fourteenth Amendment - a process called incorporation (for example, Gideon v. Wainwright applied the right to counsel to the states in 1963)."
    },
    {
      "question": "What is a dissenting opinion?",
      "choices": [
        "The binding rule the whole court agrees on",
        "The written reasoning of the judge(s) who disagree with the majority; it is not law, but it can influence future decisions",
        "A summary written by the lawyers, not the judges",
        "A law passed by Congress to overrule the court"
      ],
      "answer": "The written reasoning of the judge(s) who disagree with the majority; it is not law, but it can influence future decisions",
      "explanation": "A dissent is a rival legal argument, not sore losing. It does not bind anyone, but a well-reasoned dissent (like Justice Black's in Tinker) is studied for years and can shape how later courts decide."
    },
    {
      "question": "In Tinker v. Des Moines (1969), what did the majority hold?",
      "choices": [
        "Schools may punish any student speech for any reason",
        "Students do not shed their constitutional rights at the schoolhouse gate, and schools may restrict speech only if it would substantially disrupt school",
        "Students have no free-speech rights at school",
        "Only teachers, not students, have free-speech rights"
      ],
      "answer": "Students do not shed their constitutional rights at the schoolhouse gate, and schools may restrict speech only if it would substantially disrupt school",
      "explanation": "Justice Fortas wrote that 'undifferentiated fear or apprehension of disturbance is not enough to overcome the right to freedom of expression.' Justice Black's dissent warned this would weaken school authority - a live disagreement worth reading from both sides."
    },
    {
      "question": "Short answer: This unit teaches a recurring civic-judgment move. It is not enough to ask 'Is this source biased?' What must a citizen ALSO ask?",
      "answer": "A citizen must ask what the bias DOES: who benefits if people believe it, who is harmed, and what happens when a voter, a council, or a court acts on it.",
      "explanation": "Detecting a slant is only a doorway. Civic judgment weighs consequences - who is protected, who is targeted, and what follows in the real world - and then reaches a conclusion accountable to evidence rather than to preference."
    },
    {
      "question": "Short answer (application): In the fictional Millbrook debate, one flyer claims 'only troublemakers stay out that late.' Name who this phrasing benefits, who it could harm, and one piece of evidence you would demand before believing it.",
      "answer": "Sample answer: It benefits residents who want the park closed by casting the closure as costless. It could harm night-shift workers, teens, and neighbors without cool homes who use the park for legitimate reasons, by lumping them in with 'troublemakers.' Before believing it, I would demand actual data on who uses the park after 10 p.m. and on how much noise, litter, or crime is genuinely tied to the park versus other causes.",
      "explanation": "This checks the Day 4 skill: naming who a biased phrase protects, who it targets, and what corroborating evidence is needed - refusing to accept or reject the claim on gut feeling alone."
    },
    {
      "question": "Short answer: Explain the difference between judging a claim because it is 'accountable to evidence' and judging it because you already 'prefer' it. Why does the unit insist a citizen can hold values and still be accountable?",
      "answer": "Sample answer: Judging by preference means accepting whatever flatters what you already believe (motivated reasoning). Judging by accountability means your conclusion must answer to sourcing, corroboration, the strongest counterargument, and real consequences - and you must be able to say what would change your mind. A citizen can still hold values; being accountable does not require fake neutrality, only that values be tested against evidence rather than shielded from it.",
      "explanation": "This is the core principle of the course: you do not have to be neutral, but you do have to be accountable to evidence. It is also the standard the rubric scores - the accountability of the reasoning, not the stance."
    }
  ],
  "dbq": {
    "prompt": "The framers and the courts built a system meant to force competing claims to answer to structure, to evidence, and to each other. Using at least THREE of the documents below and your knowledge of American government, write an evidence-based argument that answers the unit's driving question: How should a citizen judge competing claims about rights, law, and policy without simply believing what they already prefer? Your response must include a clear, arguable claim; specific evidence cited by document letter; reasoning that connects each piece of evidence to your claim; explicit engagement with at least ONE genuine disagreement between the documents (for example, Doc A vs. Doc B, or Doc D vs. Doc E); at least one sentence addressing a counterargument; and one sentence naming what evidence would change your mind.",
    "guidance": "TEACHER GUIDANCE: The set pairs rival claims on purpose - Documents A and C defend the large republic and its internal checks, Document B warns against distant concentrated power, and Documents D and E are the majority and dissent in the SAME case. Reward students who treat judgment as a contest of reasons: who source their documents (author, date, purpose), who read the majority against the dissent fairly, and who state what would change their mind. Accept EITHER overall position as long as it is defended with accurate evidence and honest reasoning. Do NOT reward the false-balance dodge that 'everything is biased, so no one can judge'; require students to say which claims better survive corroboration and a fair reading of the other side, and why. Score with the analytic rubric. A perfect essay is not required for a top score - a clear claim, three well-used documents, genuine engagement with a disagreement, an honest counterargument, and an accountability sentence meet the exemplary bar.",
    "documents": [
      {
        "title": "Document A - Federalist No. 10 (1787)",
        "excerpt": "\"By a faction, I understand a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens, or to the permanent and aggregate interests of the community.\"",
        "attribution": "James Madison ('Publius'), Federalist No. 10, 1787.",
        "contextNote": "Written to persuade New York to ratify the Constitution. Madison argues that a large, diverse republic controls faction better than a small one, because so many interests check one another. A claim about how to CONTROL power."
      },
      {
        "title": "Document B - Brutus No. 1 (1787)",
        "excerpt": "\"In a republic, the manners, sentiments, and interests of the people should be similar. If this be not the case, there will be a constant clashing of opinions; and the representatives of one part will be continually striving against those of the other.\"",
        "attribution": "'Brutus' (Anti-Federalist essay traditionally attributed to Robert Yates, though authorship is debated), Brutus No. 1, New York Journal, October 18, 1787.",
        "contextNote": "Written to OPPOSE ratification. Brutus argues that a republic as large and diverse as the United States lacks the shared interest a free republic needs, and that distant power will slip beyond the people's control. Spelling and punctuation lightly modernized. A WARNING about power - and the direct rival to Document A."
      },
      {
        "title": "Document C - Federalist No. 51 (1788)",
        "excerpt": "\"If men were angels, no government would be necessary. ... Ambition must be made to counteract ambition. The interest of the man must be connected with the constitutional rights of the place.\"",
        "attribution": "James Madison ('Publius'), Federalist No. 51, 1788.",
        "contextNote": "Madison's argument for separation of powers and checks and balances: because people are not angels, the structure itself - not the good character of rulers - must keep power in check. A claim about how to CONTROL power."
      },
      {
        "title": "Document D - Tinker v. Des Moines, Majority (1969)",
        "excerpt": "\"It can hardly be argued that either students or teachers shed their constitutional rights to freedom of speech or expression at the schoolhouse gate. ... In our system, undifferentiated fear or apprehension of disturbance is not enough to overcome the right to freedom of expression.\"",
        "attribution": "Tinker v. Des Moines Independent Community School District, 393 U.S. 503 (1969), majority opinion by Justice Abe Fortas.",
        "contextNote": "The binding rule of the case: student speech is protected unless it would substantially disrupt school. A RIGHTS decision - to be read against its own dissent, Document E."
      },
      {
        "title": "Document E - Tinker v. Des Moines, Dissent (1969)",
        "excerpt": "\"It is a myth to say that any person has a constitutional right to say what he pleases, where he pleases, and when he pleases. ... One does not need to be a prophet or the son of a prophet to know that ... some students ... will be ready, able, and willing to defy their teachers on practically all orders.\"",
        "attribution": "Tinker v. Des Moines Independent Community School District, 393 U.S. 503 (1969), dissenting opinion by Justice Hugo Black.",
        "contextNote": "The rival reasoning within the same case: schools need order, and a right to expression is not a right to speak anywhere at any time. Not law - but a serious argument that citizens must weigh honestly against the majority."
      }
    ]
  },
  "rubric": {
    "levels": [
      "4 - Exemplary",
      "3 - Proficient",
      "2 - Developing",
      "1 - Beginning"
    ],
    "criteria": [
      {
        "name": "Claim / Thesis",
        "descriptors": [
          "States a precise, arguable claim that directly answers the driving question, treats the claim as revisable in light of evidence, and previews a disciplined standard for judging competing claims.",
          "States a clear claim that answers the driving question and takes a defensible position.",
          "States a claim, but it is vague, merely restates a value, or only loosely answers the question.",
          "Restates the prompt or offers an opinion with no arguable claim."
        ]
      },
      {
        "name": "Use of Evidence",
        "descriptors": [
          "Integrates specific, accurate evidence from THREE or more documents, cited by letter, with short exact quotations chosen precisely to support the claim.",
          "Uses cited evidence from three documents with generally accurate, relevant quotations.",
          "Uses evidence from only one or two documents, or evidence that is vague, partly inaccurate, or not clearly cited.",
          "Little or no document evidence; relies on unsupported assertion or summary."
        ]
      },
      {
        "name": "Sourcing & Corroboration",
        "descriptors": [
          "Analyzes at least one document's author, date, and purpose AND corroborates across documents, noting where sources agree, conflict, and which claim better survives scrutiny.",
          "Includes at least one sourcing observation and compares evidence from more than one document.",
          "Mentions a source or author but does little with it; minimal comparison across documents.",
          "Treats documents as free-floating facts, with no attention to author, purpose, or corroboration."
        ]
      },
      {
        "name": "Reading Law: Majority vs. Dissent",
        "descriptors": [
          "Engages a genuine disagreement (e.g., the Tinker majority vs. dissent, or Federalist vs. Brutus) fairly, naming each side's rule and best point, and states the strongest version of the view it rejects.",
          "Engages a disagreement between sources and represents both sides accurately.",
          "Names a disagreement but represents one side weakly or as a straw man.",
          "Ignores the opposing reasoning, or treats a dissent as proof the case was simply wrong."
        ]
      },
      {
        "name": "Civic Judgment: Consequence & Accountability",
        "descriptors": [
          "Traces what a claim DOES - who benefits, who is harmed, what happens if people act on it - AND states plainly what evidence would change the writer's mind, keeping values accountable to evidence.",
          "Names who benefits and who is harmed if a claim is believed, and addresses a counterargument.",
          "Identifies a beneficiary or a harm but not the consequence of acting on it; counterargument thin or missing.",
          "Reaches a conclusion by preference alone, with no consequence analysis and no accountability to evidence."
        ]
      },
      {
        "name": "Organization & Conventions",
        "descriptors": [
          "Logically organized (claim, evidence, reasoning, counterargument, accountability) with clear transitions and controlled, largely error-free writing.",
          "Clear structure and mostly correct conventions; errors do not impede meaning.",
          "Some structure; conventions errors occasionally interfere with meaning.",
          "Disorganized; frequent errors that make the argument hard to follow."
        ]
      }
    ]
  },
  "modifiedReading": "PLAIN-LANGUAGE READING SUPPORT VERSION: Rights, Law, and Civic Judgment\n\nWhere do your rights come from? Many people assume rights come from the government giving them to you. The founders built something different. The Bill of Rights (1791) - the first ten additions to the Constitution - is a list of things the government is NOT allowed to do. The First Amendment begins, \"Congress shall make no law ...\" A right, in this design, is a limit placed on the majority. Even if most people voted to take away your speech or religion, the Constitution says they may not.\n\nThe founders argued about how to keep a government safe. In Federalist No. 10, James Madison worried about \"factions\" - groups that push their own interest against everyone else's rights. His surprising answer: a big, diverse country is actually safer, because so many groups check one another. In Federalist No. 51 he added that since people are not angels, we should split the government into branches so each one can limit the others. Not everyone agreed. An Anti-Federalist writer called \"Brutus\" warned that a country this large could not stay free and would gather too much distant power. These are competing claims - and part of your job is to judge them, not just notice that each writer had a point of view.\n\nCourts also judge competing claims, and they do it out loud. When the Supreme Court decides a case, the winning side writes the \"majority opinion\" (the rule everyone must follow). Judges who disagree can write a \"dissent.\" A dissent is not the law, but it is a serious argument, and sometimes it becomes the law years later. Reading the majority against the dissent is a powerful habit: you see the strongest case on BOTH sides before you decide.\n\nTwo real cases show rights in tension. In Tinker v. Des Moines (1969), students wore armbands to protest a war. The majority said students \"do not shed their constitutional rights ... at the schoolhouse gate.\" Justice Black disagreed, warning that schools still need order. In West Virginia v. Barnette (1943), the Court said the government cannot force students to salute the flag, because no official can \"prescribe what shall be orthodox\" in matters of belief. One dissenting justice, Frankfurter, said judges should not write their \"private notions\" into the Constitution - a reminder that even powerful people must stay accountable to the rules. The Fourteenth Amendment (1868) is what lets these federal rights limit state and local governments too; that is why people call it \"living law.\"\n\nSo how should a citizen judge a claim about rights, law, or policy? The unit's answer is a habit, not a slogan. Do not stop at \"this is biased.\" Ask what the bias DOES: who benefits if people believe it, who is harmed, and what happens if a voter or a town council acts on it. Check the claim against real evidence. Read the other side at its strongest. And be honest about what would change your mind. You are allowed to have values. You are not allowed to hide them from the evidence. That is the difference between simply believing what you already prefer and judging like a citizen.",
  "advancedExtension": "ADVANCED EXTENSION (for students ready to go deeper): Reasons, Not Scoreboards.\n\nChoose ONE investigation and produce a two-page evidence-based response with citations, including at least one primary-source quotation and one from a scholar or a full court opinion.\n\n1. WRITE THE OTHER OPINION. Pick Tinker or Barnette, read the FULL majority and dissent, and write the opinion the Court did NOT adopt as if you were the losing justice - using only reasoning that side actually made, no invented facts. Then judge: after steelmanning the loser, do you still think the Court decided correctly, and what evidence holds your view in place?\n\n2. THE POWER THE TEXT DOES NOT NAME. Marbury established judicial review, yet the Constitution never uses the phrase. Using Federalist No. 78 and one modern critique, argue whether an unelected court 'saying what the law is' strengthens or threatens self-government, and connect it to the driving question.\n\n3. INCORPORATION - HOW A FEDERAL RIGHT REACHES YOUR TOWN. Trace how the Fourteenth Amendment carried Bill of Rights protections to the states, using Gideon v. Wainwright (1963) and one other case, and argue which incorporation mattered most and why 'living law' is a mechanism, not a slogan.\n\n4. FEDERALIST 10 MEETS THE FEED. Madison assumed many competing interests would check one another. Argue whether social-media algorithms strengthen his design (more voices, more checks) or undermine it (sorting people into hostile factions), quoting Federalist No. 10 and reasoning about who benefits and who is harmed.\n\n5. RUN THE LADDER ON A HISTORIAN. Take one secondary claim about the founding or a landmark case and run the full ten-rung Bias Consequence Ladder on it - sourcing it, naming what it emphasizes and hides, asking who benefits and who is harmed, corroborating against a primary source, and reaching a judgment - to show the discipline works on expert claims, not just advocacy.\n\nDeliverables must include a works-cited list and one accountability sentence stating what evidence would change your conclusion.",
  "subPlan": "SUBSTITUTE PLAN - \"Two Judges, One Case: Reading a Majority Against a Dissent\" (One class period, ~50 minutes. No law or government background required. Everything needed is in the Student Packet.)\n\nBEFORE CLASS: Take attendance from the roster on the desk. Write the focus question on the board: \"When judges disagree about a case, how do we decide who has the better argument?\" Have Student Packets ready. Post or project the two short Tinker quotations (in the packet's Source Worksheet section).\n\nMINUTE-BY-MINUTE:\n1) BELL RINGER (5 min): Students write silently for three minutes: \"Why would a court bother to print the reasoning of the side that LOST the case?\" No wrong answers.\n2) SHARE OUT (5 min): Call on 4-5 students to read one idea. Do not debate; just collect. Common answers: to disagree on the record, to persuade future courts, to warn about consequences. Say: \"That printed disagreement is called a dissent.\"\n3) BACKGROUND READ (7 min): A willing volunteer reads the short packet background aloud (never force anyone). Key point to restate: a court decision has a MAJORITY opinion (the rule everyone follows) and sometimes a DISSENT (the reasoning of judges who disagree; not law, but it can matter later).\n4) THE CASE (12 min): In pairs, students read the two Tinker quotations in the packet - the majority (students \"do not shed their constitutional rights ... at the schoolhouse gate\") and the dissent (no one may speak \"where he pleases and when he pleases\"). They fill the two-column chart: What rule does each side announce? What interest does each protect (student speech vs. school order)? ANSWER KEY: Majority - students keep free-speech rights at school unless the speech would seriously disrupt; protects student expression. Dissent - schools need authority to keep order; protects school order and teachers' control.\n5) DISCUSSION (8 min): \"If every school in the country followed the majority rule, who benefits and who is burdened? What about the dissent's rule?\" Take 4-5 reasoned responses. Push students to point to a quotation before giving an opinion.\n6) EXIT TICKET (5 min): \"In one sentence, explain the difference between a majority opinion and a dissent, and give one reason a dissent still matters even though it is not the law.\" Collect in a labeled stack.\n7) IF TIME REMAINS: Students reread the packet background or start the vocabulary list.\n\nMANAGEMENT NOTES: This lesson is entirely historical and nonpartisan - keep discussion on the two judges' reasoning, not on present-day politics. There is no need to reach a \"winner\"; the goal is that students can fairly state BOTH sides. Leave the teacher a note on participation and any strong questions raised.",
  "dashboard": {
    "focusDay": "Day 4 - Judging Civic Information with the Bias Consequence Ladder",
    "todaysObjective": "Students will apply the ten-rung Bias Consequence Ladder to a fictional local policy debate framed by proponents and opponents - specifying who benefits, who is harmed, and what happens when people act on each claim - and then apply the ladder to their own initial reaction.",
    "essentialQuestion": "What does a biased claim actually DO - who does it benefit, who does it harm, and what happens when people act on it before checking the evidence?",
    "sourceOfTheDay": {
      "title": "FICTIONAL Local Debate: Millbrook's Rowan Park Evening Hours Ordinance (24-7)",
      "excerpt": "PROPONENTS - 'Millbrook Neighbors for Quiet Streets': \"Every night, noise, litter, and vandalism from Rowan Park rob nearby families of sleep and safety. Closing the park from 10 p.m. to 5 a.m. is common sense. Good neighbors have nothing to lose - only troublemakers stay out that late. Protect our homes. Vote YES on 24-7.\"  OPPONENTS - 'Millbrook Community Access Coalition': \"Rowan Park is the only free gathering place many of us have. Night-shift workers, teens without yards, and neighbors without air conditioning use it after 10 p.m. A blanket closure treats every late-night visitor as a criminal and quietly bans peaceful assembly. Fix the litter - don't lock the gates. Vote NO on 24-7.\"",
      "attribution": "FICTIONAL teaching scenario created for the Civic Judgment Lab. 'Millbrook,' 'Rowan Park,' 'Ordinance 24-7,' and both groups are invented and de-identified. This is not a real town, ordinance, publication, or dispute, and it takes no side in any actual political debate.",
      "contextNote": "Deliberately structural and nonpartisan: a real public interest (quiet, safety, property) collides with other real interests (free access, peaceable assembly, people who depend on public space). Both flyers use persuasion moves worth naming - the 'only troublemakers stay out that late' insinuation and the 'only free space' / 'treats everyone as a criminal' framing. Neither side is simply the villain; both must be run through the ladder, and so must the student's own gut reaction.",
      "task": "Run the Bias Consequence Ladder on BOTH flyers (rungs 1-8: claim, speaker and interest, emphasis, omission, who benefits, who is harmed, what happens if acted on). Then, across the two, complete rungs 9-10: what independent evidence would you need, and what is your accountable judgment? Finally, run rungs 6-8 on your OWN first reaction from the bell ringer."
    },
    "keyVocabulary": [
      {
        "term": "Bias Consequence Ladder",
        "definition": "The ten-step routine for moving from spotting a slant to judging what it does in the real world and reaching a conclusion accountable to evidence."
      },
      {
        "term": "Civic judgment",
        "definition": "Deciding not just whether a claim is biased, but what the bias does - who it protects, who it harms, and what happens when people act on it."
      },
      {
        "term": "Ordinance",
        "definition": "A law passed by a local government, such as a town or city council."
      },
      {
        "term": "Corroboration",
        "definition": "Checking a claim against other independent evidence to see whether it holds up."
      },
      {
        "term": "Motivated reasoning",
        "definition": "Reasoning backward from the answer you already want, accepting weak evidence that flatters you and rejecting strong evidence that does not."
      },
      {
        "term": "Peaceable assembly",
        "definition": "The First Amendment right of people to gather together peacefully, including in public spaces."
      }
    ],
    "misconceptions": [
      "That 'this flyer is biased' is a finished analysis - in reality it is only the first rung; the work is asking what the bias does and who it affects.",
      "That because both flyers are biased, both must be equally right - false balance. One side's claims may survive corroboration better than the other's, and students must say which and why.",
      "That a sincere claim cannot be harmful - sincerity and harm are separate questions; a heartfelt claim can still target a group or drive a bad policy.",
      "That staying 'neutral' means refusing to reach any judgment - the goal is a judgment accountable to evidence, not paralysis or 'both sides' mush.",
      "That analyzing your OWN reaction is optional - running the ladder on your own gut is the point; a citizen who only audits opponents is doing motivated reasoning."
    ],
    "discussionProtocol": "LADDER-CHECK-COMMIT (structured think-pair-share into a mini-seminar). Step 1 LADDER (3 min): each student silently completes rungs 6-8 (who benefits, who is harmed, what happens if acted on) for ONE assigned flyer. Step 2 CHECK (4 min): partners trade flyers - one must corroborate (name evidence that would test the claim) and one must challenge (name what the flyer hides). Step 3 COMMIT (6 min): call on 4-5 pairs; each contribution must quote a phrase from a flyer AND name one piece of evidence they would demand. Enforce the rule: point to the text before you give an opinion. Require at least one student to run a rung on their OWN reaction.",
    "differentiationSupports": [
      "Struggling readers: a reduced five-rung ladder (claim, speaker, who benefits, who is harmed, what would change my mind) in labeled boxes, with both flyers read aloud twice.",
      "Advanced: write evidence-accountable rebuttals for BOTH sides (no invented facts), then judge which honest case is stronger and name the one study that would settle it.",
      "English learners: pre-taught terms (ordinance, vandalism, assembly, blanket closure) with visuals, plus ladder sentence frames.",
      "IEP/504: reduced ladder with two rungs pre-completed as a model, a word bank, extended time, and scribe or speech-to-text per plan.",
      "Executive function: rungs numbered and revealed one at a time, with a posted time plan and a checkbox per rung.",
      "Alternate response: deliver the evidence-request memo as a recorded 'public comment,' a labeled poster, or a short slide deck."
    ],
    "exitTicket": "Name one claim from today whose BIAS does real work: say who benefits, who is harmed, and what would happen if the town acted on it without checking the evidence.",
    "tomorrowsBridge": "Tomorrow (Day 5) we put the whole method to work in writing. You have judged founding-era arguments, a majority against a dissent, and a fictional local debate. Now you will use real documents to answer the driving question - How should a citizen judge competing claims about rights, law, and policy? - with a claim, cited evidence, a fair reading of the other side, and one honest sentence about what would change your mind."
  },
  "studentPacket": {
    "intro": "Welcome, citizen. This packet is your evidence file for the capstone unit 'American Government: Rights, Responsibilities, and Civic Judgment.' Our driving question is: How should a citizen judge competing claims about rights, law, and policy without simply believing what they already prefer? Your job is not to memorize the 'right' answer - it is to build a habit of judgment you can use for the rest of your life. Every genuine source in this packet is real and public domain, quoted exactly and attributed. One case (the Millbrook park ordinance on Day 4) is clearly labeled FICTIONAL - it is invented on purpose so we can practice the method without arguing about real politics. As you read, keep asking three questions: Who made this and why? What does the claim DO - who benefits and who is harmed? And what evidence would change my mind? Take notes right on these pages.",
    "vocabulary": [
      {
        "term": "Bill of Rights",
        "definition": "The first ten amendments (1791), listing rights the government may not take away."
      },
      {
        "term": "Faction",
        "definition": "A group united by a passion or interest that runs against the rights of others or the good of the whole community (Madison's word)."
      },
      {
        "term": "Judicial review",
        "definition": "The power of courts to strike down a law that violates the Constitution (Marbury v. Madison, 1803)."
      },
      {
        "term": "Majority opinion",
        "definition": "The court's official decision and the binding reasoning behind it."
      },
      {
        "term": "Dissent",
        "definition": "A written opinion by judges who disagree with the majority; not law, but it can shape future decisions."
      },
      {
        "term": "Due process",
        "definition": "The government must follow fair rules before taking your life, liberty, or property."
      },
      {
        "term": "Equal protection",
        "definition": "The government must apply the law the same way to all people."
      },
      {
        "term": "Incorporation",
        "definition": "How the Fourteenth Amendment made most Bill of Rights protections limit STATE governments too."
      },
      {
        "term": "Civic judgment",
        "definition": "Asking not just whether a claim is biased, but what the bias does - who it protects, who it harms, and what happens when people act on it."
      },
      {
        "term": "Corroboration",
        "definition": "Checking a claim against other independent evidence to see whether it holds up."
      },
      {
        "term": "Bias Consequence Ladder",
        "definition": "The ten-step routine for moving from 'this is biased' to a judgment that is accountable to evidence."
      }
    ],
    "backgroundReading": {
      "title": "Where Rights Come From, and How a Citizen Judges",
      "paragraphs": [
        "Where do your rights come from? The founders did not treat rights as a gift the government hands out and can take back. In the Bill of Rights (1791), the First Amendment begins, 'Congress shall make no law ...' A right, in this design, is a LIMIT placed on the government and on the majority. That is why a right can protect you even when most people disagree with you.",
        "The founders argued fiercely about how to keep power safe. In Federalist No. 10, James Madison worried about 'factions' - groups that push their own interest against everyone else's rights - and argued, surprisingly, that a large and diverse republic controls faction better than a small one. In Federalist No. 51 he added that because people are not angels, the government must be split so that 'ambition' can 'counteract ambition.' An Anti-Federalist writer called Brutus disagreed: a republic this large, he warned, could not stay free and would gather distant, hard-to-control power. These are competing claims by people with purposes - exactly the kind of thing a citizen must learn to weigh.",
        "Courts weigh competing claims out loud. When the Supreme Court decides a case, the winning side writes the 'majority opinion,' the rule everyone must follow. Judges who disagree may write a 'dissent.' A dissent is not law, but it is a serious argument, and history shows dissents sometimes become the law later. One of the most useful habits in this unit is reading the majority AGAINST the dissent, so you see the strongest case on both sides before you decide.",
        "Rights often collide with other legitimate interests. In Tinker v. Des Moines (1969), the Court protected students who wore armbands to protest a war - but Justice Black's dissent insisted schools still need order. In West Virginia v. Barnette (1943), the Court ruled the government cannot force students to salute the flag, because no official may 'prescribe what shall be orthodox' in belief - while Justice Frankfurter's dissent warned judges not to write their 'private notions' into the Constitution. The Fourteenth Amendment (1868) is the reason these federal rights bind state and local governments too, which is why people call it 'living law.'",
        "So how should a citizen judge a claim about rights, law, or policy? The unit's answer is a discipline, not a slogan. Do not stop at 'this is biased.' Ask what the bias DOES: who benefits if people believe it, who is harmed, and what happens if a voter or a town council acts on it. Corroborate the claim against real evidence. Read the strongest version of the other side. And say honestly what would change your mind. You are allowed to hold values - citizenship is not fake neutrality - but you must keep those values accountable to evidence. That is the whole difference between simply believing what you already prefer and judging like a citizen."
      ]
    },
    "sourceWorksheet": {
      "source": {
        "title": "The Fourteenth Amendment, Section 1 (1868) - 'Living Law'",
        "excerpt": "\"All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.\"",
        "attribution": "U.S. Constitution, Amendment XIV, Section 1, ratified July 9, 1868. Public domain.",
        "contextNote": "This is the exact ratified text. It created birthright citizenship, guaranteed due process and equal protection, and - crucially - bound the STATES, not just the federal government. Through a process called incorporation, it is what lets Bill of Rights protections (like free speech in Tinker or the right to a lawyer in Gideon v. Wainwright) limit state and local governments. That is why it is called 'living law': written in 1868, it still decides cases today."
      },
      "questions": [
        "SOURCING: Who created this text, and when? What problem was it written to fix?",
        "COMPREHENSION: Underline the four guarantees (citizenship, privileges or immunities, due process, equal protection). Rewrite each in your own words.",
        "KEY WORDS: Circle the two words 'No State.' In one sentence, explain why they shift power away from state governments.",
        "CONNECTION: Tinker was about a STATE-run school, but it used a right from the First Amendment. How did the Fourteenth Amendment make that possible?",
        "REASONING: Why do people call this amendment 'living law'? Use one example from the unit (Tinker, Barnette, or Gideon) to support your answer."
      ]
    },
    "cerOrganizer": {
      "prompt": "How should a citizen judge competing claims about rights, law, and policy without simply believing what they already prefer? Write and defend your answer using the unit documents.",
      "claimGuidance": "Your CLAIM is your answer in one clear, arguable sentence - a STANDARD for judging, not just a feeling. Strong example: 'A citizen should judge a claim by whether it survives sourcing, corroboration, and a fair reading of the opposing view - not by whether it flatters what they already believe.' Avoid vague claims like 'people should think for themselves.' Treat your claim as revisable if the evidence pushes back.",
      "evidenceGuidance": "Choose at least THREE documents. From each, quote a short, exact phrase and label it (Doc A, Doc B ...). Deliberately pick documents that DISAGREE - for example Federalist No. 10 (Doc A) against Brutus No. 1 (Doc B), or the Tinker majority (Doc D) against its dissent (Doc E). Judging competing claims means actually engaging the competition, not just stacking up sources on one side.",
      "reasoningGuidance": "For each piece of evidence, explain HOW it proves your claim - do not just drop a quote. Source at least one document (name its author, date, and purpose). Then read one disagreement fairly: state the strongest version of the side you reject before you answer it ('Although Doc __ argues ___, the stronger evidence shows ___'). Finish with an ACCOUNTABILITY sentence: name exactly what evidence would change your mind. That sentence is not weakness - it is the mark of a citizen judging honestly rather than believing what they prefer."
    },
    "exitTickets": [
      "Day 1: In one sentence, explain where the Bill of Rights locates the protection of a right, and cite the exact opening words of the First Amendment.",
      "Day 2: In one sentence, explain the difference between a majority opinion and a dissent, and give one reason a dissent still matters even though it is not the law.",
      "Day 3: In one or two sentences, explain how the Fourteenth Amendment let a federal right limit a STATE government, and why that makes it 'living law.'",
      "Day 4: Name one claim whose BIAS does real work - say who benefits, who is harmed, and what would happen if people acted on it without checking the evidence.",
      "Day 5: Which single document most shaped your final answer, and why? Did your answer change from your first-day response - and what would still change your mind?"
    ],
    "dbqPrompt": "How should a citizen judge competing claims about rights, law, and policy without simply believing what they already prefer? Using at least THREE documents from the unit set (Federalist No. 10; Brutus No. 1; Federalist No. 51; the Tinker majority; and the Tinker dissent) plus your own knowledge, write an evidence-based argument. Include a clear, arguable claim; evidence cited by document letter; reasoning connecting each piece of evidence to your claim; explicit engagement with at least one genuine disagreement between the documents; one sentence addressing a counterargument; and one sentence naming what evidence would change your mind. You may reach either conclusion - the strongest answers are the ones held most accountable to evidence."
  }
};

export const americanGovernment: ReconstructionUnit = data;
