import type { ReconstructionUnit } from "./types";

/* Static sample content — authored and adversarially fact-checked.
   Review all materials for accuracy before classroom use. */

const data = {
  "title": "The Civil Rights Movement: Enforcing the Second Reconstruction",
  "course": "U.S. History II",
  "gradeBand": "Grades 10-11 (main version calibrated for Grade 11)",
  "mainVersion": "Grade 11 version. This is the full-rigor build: students work directly with verbatim excerpts from federal primary sources (constitutional amendments, Supreme Court opinions, an executive order, two landmark statutes, a congressional declaration, and a federal commission report), and they are held to a written Claim-Evidence-Reasoning / DBQ standard that requires sourcing, contextualization, and corroboration across at least three documents. The disciplinary spine is identical to the flagship Reconstruction unit: every source is examined not only for point of view but for what its framing DOES — who benefits, who is harmed, and what happens when people act on it. Grade 11 students sustain that analysis in writing, weigh which accounts survive corroboration and which collapse, and name the mechanism (not just the sentiment) by which rights were finally enforced.",
  "middleAdaptation": "Middle-school support version (Grades 7-8). Keep the same driving question and the same five-day arc, but reduce cognitive load without lowering intellectual honesty. (1) Front-load vocabulary each day with a 5-minute picture-and-definition warm-up before any source appears. (2) Use ONE anchor source per day instead of paired documents, and shorten each excerpt to one or two sentences in large type. (3) Replace the written CER essay with a scaffolded graphic organizer using sentence frames (\"On paper the law said ___, but in practice ___, which shows ___\"). (4) Convert Day 5's five-document DBQ into a two-document \"paper vs. practice\" comparison with a single-paragraph response. (5) Teach the civic-judgment move in kid-accessible form: \"Who does this help? Who does this hurt? What happens if people believe it?\" (6) Keep the Second Reconstruction frame but state it plainly: \"The rights were already written in the 1860s. This is the story of making them real.\" (7) Pre-teach period language explicitly and briefly, and give students a respectful way to refer to it (\"the words people used then\") so no student is put on the spot to read a slur aloud — teachers read framing language, never students.",
  "drivingQuestion": "Why did rights guaranteed in the 1860s still have to be fought for a century later, and what finally forced enforcement?",
  "overview": "This five-day unit reframes the Civil Rights Movement as the \"Second Reconstruction\": the 14th and 15th Amendments — written into the Constitution in 1868 and 1870 — return in the twentieth century as contested, under-enforced law. Students trace the gap between rights on paper and rights in practice, and they investigate what finally compelled the federal government to enforce guarantees that were already a century old. The unit uses only genuine, public-domain federal sources (constitutional text, Supreme Court opinions, an executive order, two statutes, a congressional declaration, and a federal commission report) so that students argue from evidence they can verify. Copyrighted material (Dr. King's writings and speeches, AP and Life photographs, broadcast footage) is deliberately NOT reproduced; where such sources are historically essential, they are described in teacher notes so the classroom stays administrator-safe and legally clean. Designing the argument around durable public-domain evidence is itself part of the rigor. The disciplinary method mirrors the flagship Reconstruction unit — sourcing, contextualization, corroboration, and Claim-Evidence-Reasoning — anchored by the recurring civic-judgment move: not just \"is this biased?\" but \"what does the bias DO — who benefits, who is harmed, and what happens when people act on it?\" Students learn that when accounts conflict, they are not automatically equal: some claims survive corroboration against the evidence and others collapse, and the historian's job is to say which and why.",
  "essentialQuestions": [
    "Why did rights guaranteed in the 1860s still have to be fought for a century later, and what finally forced enforcement? (unit driving question)",
    "What is the difference between a right that is declared and a right that is enforced — and why does that difference matter?",
    "How can a law say one thing while daily life says another, and who has the power to close that gap?",
    "PORTABLE: When we have competing accounts of the same events, how do we judge which ones survive scrutiny and which ones collapse under the evidence?",
    "PORTABLE: When a source is biased, what does the bias actually DO — who benefits from it, who is harmed by it, and what happens when people act on it?",
    "PORTABLE: How does the naming and framing of people and policies (the words chosen to describe them) shape what comes to seem normal, legal, or acceptable?",
    "PORTABLE: Why do rights require ongoing enforcement rather than a single declaration, and what makes enforcement actually work?"
  ],
  "objectives": [
    "Students will analyze the text of the 14th and 15th Amendments and cite the specific language guaranteeing equal protection and the right to vote, then explain how Plessy v. Ferguson and Jim Crow laws opened a gap between that language and lived reality.",
    "Students will compare Justice Harlan's Plessy dissent (1896) with the Brown v. Board of Education opinion (1954) and explain, using textual evidence, how the Court's reasoning shifted and what evidence drove the change.",
    "Students will evaluate the powers and limits of the executive, judicial, and legislative branches in enforcing civil rights, using at least two federal documents (Executive Order 9981 and the Southern Manifesto).",
    "Students will identify the specific enforcement mechanisms written into the Civil Rights Act of 1964 and the Voting Rights Act of 1965 and explain why those mechanisms succeeded where prior court rulings had stalled.",
    "Students will construct a written CER/DBQ argument that answers the driving question using at least three primary sources, applying sourcing, contextualization, and corroboration.",
    "Students will apply the civic-judgment move by explaining what a given source's framing does — identifying who benefits, who is harmed, and what happens when people act on it — and by judging which conflicting accounts survive corroboration."
  ],
  "vocabulary": [
    {
      "term": "Second Reconstruction",
      "definition": "A name historians give to the mid-1900s civil rights era, because it renewed the unfinished work of the first Reconstruction (1865-1877) by trying to finally enforce the 14th and 15th Amendments."
    },
    {
      "term": "Equal protection",
      "definition": "The 14th Amendment promise that no state may deny any person 'the equal protection of the laws' — everyone is supposed to be treated equally under the law."
    },
    {
      "term": "Jim Crow",
      "definition": "The system of state and local laws and customs, mostly in the South, that forced racial segregation and stripped Black Americans of rights from the 1870s to the 1960s."
    },
    {
      "term": "Separate but equal",
      "definition": "The legal doctrine from Plessy v. Ferguson (1896) claiming that segregated facilities were constitutional as long as they were 'equal' — a claim rarely honored in reality."
    },
    {
      "term": "Segregation (de jure and de facto)",
      "definition": "Keeping racial groups apart. De jure segregation is required by law; de facto segregation happens in practice even without a law requiring it."
    },
    {
      "term": "Dissent",
      "definition": "A written opinion by a judge who disagrees with the court's majority. A dissent does not decide the case, but it can influence future courts."
    },
    {
      "term": "Disenfranchisement",
      "definition": "Taking away or blocking a person's right to vote, often through tools like poll taxes, literacy tests, and intimidation."
    },
    {
      "term": "Literacy test / poll tax",
      "definition": "Devices used to keep Black citizens from voting — an unfair 'reading' test given selectively, or a fee required to vote — designed to disenfranchise without naming race directly."
    },
    {
      "term": "Massive resistance",
      "definition": "The organized effort by many Southern officials to defy or delay school desegregation after Brown v. Board, including the Southern Manifesto and school closures."
    },
    {
      "term": "Enforcement mechanism",
      "definition": "The specific tool that makes a right real — for example, federal lawsuits, cutting off federal funding, or sending federal officials to register voters."
    },
    {
      "term": "Executive order",
      "definition": "A directive from the President that has the force of law over parts of the federal government the President controls, such as the armed forces."
    },
    {
      "term": "Due process",
      "definition": "The 14th Amendment guarantee that the government must follow fair legal procedures before taking a person's life, liberty, or property."
    },
    {
      "term": "Public accommodation",
      "definition": "A business or place open to the public — such as a hotel, restaurant, or theater. The Civil Rights Act of 1964 banned segregation in these places."
    },
    {
      "term": "Precedent",
      "definition": "An earlier court decision that guides later cases. Brown v. Board overturned the precedent set by Plessy v. Ferguson in the field of public education."
    },
    {
      "term": "Sourcing",
      "definition": "Asking who created a source, when, and why, before deciding how much to trust it."
    },
    {
      "term": "Corroboration",
      "definition": "Checking a claim against other evidence to see whether it holds up. Accounts that corroborate each other are stronger; claims that contradict solid evidence collapse."
    }
  ],
  "historicalThinkingSkills": [
    "Sourcing (who wrote this, when, and why, and how that shapes the content)",
    "Contextualization (placing each document in its 1868-1968 moment, and within the Second Reconstruction frame)",
    "Corroboration (testing claims across multiple documents to see which survive and which collapse)",
    "Claim-Evidence-Reasoning argumentation",
    "Continuity and change over time (why 1860s guarantees remained contested for a century)",
    "Causation (distinguishing what declared a right from what actually enforced it)",
    "Civic judgment / analyzing competing accounts (identifying what a source's framing does — who benefits, who is harmed, what follows when people act on it)"
  ],
  "alignmentCategories": [
    "Constitutional Rights and Their Enforcement",
    "Continuity and Change Across the Reconstruction Eras",
    "Federalism and the Powers and Limits of the Three Branches",
    "Primary Source Analysis and Historical Argumentation",
    "Civil Rights, Citizenship, and Equal Protection",
    "Civic Reasoning and Source/Media Literacy",
    "Movements for Justice in United States History"
  ],
  "teacherNotes": [
    "PACING: Five class periods of roughly 45-55 minutes. Days 1-4 each follow the same rhythm (bell ringer, mini-lesson, source activity, discussion, student task, exit ticket) so routines carry the cognitive load and students can focus on the sources. Day 5 is a workshop-and-assessment day; if you have block scheduling, combine the seminar and DBQ writing into one long block. If you are short a day, Day 3 can be compressed and its Southern Manifesto source folded into Day 2.",
    "SECOND RECONSTRUCTION FRAME: Return to it out loud every day. The through-line is that the 14th (1868) and 15th (1870) Amendments already guaranteed these rights; the mid-century movement was a fight to ENFORCE existing law, not to invent new rights. This reframing is what makes the unit cohere and what makes the driving question answerable.",
    "SENSITIVITY AND PERIOD LANGUAGE: This unit handles segregation and racial violence factually and with care. Some sources use period terms — Plessy's majority says 'colored race'; the Kerner Report (1968) uses 'Negro,' which was standard, non-pejorative usage at the time. Pre-frame this BEFORE distributing any source: explain that these were the terms of the era, that we quote them to understand the record accurately, and that we do not adopt them. TEACHERS read any framing or dehumanizing language aloud; never require a student to read a slur or dehumanizing term aloud. Build in a norm that the classroom studies this history soberly, not performatively.",
    "COPYRIGHT / RIGHTS CONSTRAINT (design feature, not a gap): Do NOT reproduce Dr. King's 'Letter from Birmingham Jail' or his speeches, and do NOT embed AP or Life photographs or broadcast footage — these are under copyright. Where they are historically essential (the March on Washington, the Birmingham campaign, the Selma marches, the Little Rock Nine photographs), DESCRIBE them in your own words and cite that they exist, rather than quoting or displaying them. Point students to public-domain federal alternatives (statutes, opinions, orders, reports). Modeling this restraint teaches students that a rigorous argument can be built entirely on verifiable, freely usable evidence.",
    "COMMON MISCONCEPTION 1: That the 14th and 15th Amendments were created in the 1960s. They date to 1868 and 1870. The 1960s fight was about enforcement — that is the whole point of the 'Second Reconstruction' label.",
    "COMMON MISCONCEPTION 2: That Brown v. Board immediately desegregated schools. It did not. 'Massive resistance,' the Southern Manifesto, and enforcement under 'all deliberate speed' meant years of delay and, in places, federal troops (Little Rock, 1957). A ruling is not self-enforcing.",
    "COMMON MISCONCEPTION 3: That 'separate but equal' facilities were actually equal. They were not; the 'equal' half was almost never honored, and Brown recognized that separation itself, even with equal buildings, produced inequality.",
    "COMMON MISCONCEPTION 4: That the movement was the work of a few famous leaders alone. It was a mass movement of organizers, students, churches, lawyers, and ordinary citizens. A narrative that centers only celebrated leaders is itself a framing worth interrogating with the civic-judgment move.",
    "DO NOT FLATTEN TO 'BOTH SIDES': The Plessy majority made a factual claim — that enforced separation carried no message of inferiority unless Black citizens 'chose' to see it that way. That claim collapses under corroboration: the material record of unequal facilities and the Brown Court's finding that segregation 'generates a feeling of inferiority... unlikely ever to be undone' both contradict it. Teach students to say plainly that these accounts are not equally supported, and to ground that judgment in the sources — not to treat every disagreement as a tie.",
    "CIVIC-JUDGMENT MOVE (use daily): After sourcing each document, ask the three-part question — Who benefits from this framing? Who is harmed by it? What happens when people act on it? Example: reframing school desegregation as an 'abuse of judicial power' (Southern Manifesto) benefited officials resisting Brown, harmed Black children denied enrollment, and, when acted upon, produced closed schools and mob violence that required federal intervention.",
    "FACT-CHECK NOTE (Southern Manifesto count): The Declaration of Constitutional Principles was signed by 101 members of Congress — 19 senators and 82 representatives. If you see the figure '96' in older classroom materials, correct it; 101 is the number documented in the Congressional Record and standard scholarship.",
    "ASSESSMENT NOTE: The Day 5 DBQ and the analytic rubric are the summative measure. Use the daily exit tickets as formative checks; students who cannot yet distinguish 'a right declared' from 'a right enforced' by end of Day 3 need a reteach before the DBQ."
  ],
  "days": [
    {
      "day": 1,
      "title": "Rights on Paper, Denied in Practice",
      "objective": "Students will cite specific language in the 14th and 15th Amendments guaranteeing equal protection and the right to vote, and explain how Plessy v. Ferguson (1896) and Jim Crow laws opened a gap between that written guarantee and everyday life.",
      "bellRinger": "Read the equal protection clause of the 14th Amendment (projected). In your own words: what does it promise, and to whom? Write one sentence.",
      "miniLesson": "Concise teacher outline: (1) Set the frame — during the first Reconstruction (1865-1877), the nation wrote the 13th, 14th, and 15th Amendments to guarantee freedom, equal protection, and voting. (2) Explain the collapse — after 1877, 'redemption' governments, violence, and new laws stripped those guarantees away. (3) Introduce Jim Crow — segregation and disenfranchisement became the daily rule across the South. (4) Show Plessy (1896) as the constitutional cover: the Supreme Court blessed 'separate but equal,' giving Jim Crow a legal shield for 58 years. (5) State the unit thesis: the mid-1900s movement is a 'Second Reconstruction' — a fight to enforce rights already on paper. (6) Pre-frame period language before handing out sources.",
      "sourceActivity": {
        "title": "The Guarantee vs. the Loophole: The 14th and 15th Amendments and the Plessy Majority",
        "excerpt": "14th Amendment, Section 1 (1868): 'No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.' | 15th Amendment, Section 1 (1870): 'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.' | Plessy v. Ferguson majority, Justice Henry Billings Brown (1896): 'We consider the underlying fallacy of the plaintiff's argument to consist in the assumption that the enforced separation of the two races stamps the colored race with a badge of inferiority. If this be so, it is not by reason of anything found in the act, but solely because the colored race chooses to put that construction upon it.'",
        "attribution": "U.S. Constitution, Amendments XIV (ratified 1868) and XV (ratified 1870); Plessy v. Ferguson, 163 U.S. 537 (1896), majority opinion. All verbatim; all public domain (U.S. government works).",
        "contextNote": "The amendments are the 'rights on paper.' The Plessy majority is the loophole: the Court did not deny the equal protection clause existed — it reinterpreted segregation as harmless. Note the period term 'colored race'; teacher frames this as era language before students read.",
        "task": "In a two-column chart labeled 'Rights on Paper' and 'Rights in Practice,' quote the exact words that promise equality and voting (left) and quote the exact words the Court used to permit segregation (right). Then apply the civic-judgment move in two sentences: What does the majority's 'they choose to see it that way' framing DO — who does it benefit, and who does it harm?"
      },
      "discussionQuestion": "If the 14th Amendment guaranteed 'equal protection' in 1868, how could the Supreme Court uphold segregation in 1896? What work is the phrase 'separate but equal' doing — and for whose benefit?",
      "studentTask": "Complete the two-column 'Rights on Paper / Rights in Practice' chart with at least three paired examples (e.g., 'right to vote' vs. poll taxes and literacy tests), using the amendment text and your background reading. End with a one-sentence claim that begins: 'A right can exist in law but not in life when...'",
      "exitTicket": "In one sentence, explain how a right can be written into the Constitution and still be denied in daily life. Use the word 'enforcement.'",
      "differentiation": {
        "strugglingReaders": "Provide the amendment excerpts with the key clause bolded and a plain-language gloss printed directly beneath each (clearly labeled 'plain-language summary, not a quotation'). Pre-highlight where each quote begins and ends so students locate evidence without decoding the whole passage.",
        "advanced": "Add the question: The Plessy majority claims segregation is neutral. What single piece of real-world evidence would most powerfully test that claim? Have students predict what such evidence would show and how they would verify it.",
        "englishLearners": "Supply a bilingual glossary card for equal protection, abridge, segregation, inferiority, and enforcement. Offer sentence frames for the chart ('On paper: ___ / In practice: ___') and allow first-language annotation before writing in English.",
        "iepAnd504": "Provide the chart pre-formatted with the first row completed as a model. Reduce the required paired examples from three to two. Allow extended time and permit typed or scribed responses per the student's plan.",
        "executiveFunction": "Break the task into a numbered checklist (1-read, 2-underline promise, 3-underline loophole, 4-fill chart, 5-write claim) with a check-off box for each step. Provide a visible timer for each chunk.",
        "alternateResponse": "Instead of the written chart, students may build a two-column card sort (pre-printed quote strips sorted under 'Paper' vs. 'Practice') and explain their sorting aloud to the teacher or into an audio recording."
      }
    },
    {
      "day": 2,
      "title": "The Legal Turn: Harlan's Dissent Meets Brown",
      "objective": "Students will compare Justice Harlan's 1896 Plessy dissent with the 1954 Brown v. Board opinion and explain, using textual evidence, how the Court's reasoning changed and what let the Brown Court reject Plessy's central factual claim.",
      "bellRinger": "Justice Harlan wrote in 1896, 'Our Constitution is color-blind.' He was the only justice who dissented. Predict: what do you think he warned would happen because of the majority's decision?",
      "miniLesson": "Concise teacher outline: (1) Recall that in 1896 Harlan lost — a dissent has no legal force. (2) Read Harlan's vision: a 'color-blind' Constitution and his prediction that Plessy would prove as harmful as Dred Scott. (3) Trace the 58-year gap and the deliberate legal campaign (the NAACP Legal Defense and Educational Fund) that built cases to challenge 'separate but equal.' (4) Read Brown's core holding: separate is 'inherently unequal,' and segregation harms children 'in a way unlikely ever to be undone.' (5) Emphasize the disciplinary point — sourcing tells us a dissent is a minority view with no power in its moment, yet corroboration by later evidence let the Court in 1954 reject the majority's 1896 factual claim. (6) Note the unanimous (9-0) decision and why unanimity mattered for legitimacy.",
      "sourceActivity": {
        "title": "From Lone Dissent to Unanimous Ruling: Harlan (1896) and Brown (1954)",
        "excerpt": "Harlan, dissenting in Plessy (1896): 'But in view of the Constitution, in the eye of the law, there is in this country no superior, dominant, ruling class of citizens. There is no caste here. Our Constitution is color-blind, and neither knows nor tolerates classes among citizens.' He added: 'In my opinion, the judgment this day rendered will, in time, prove to be quite as pernicious as the decision made by this tribunal in the Dred Scott case.' | Brown v. Board of Education, Chief Justice Earl Warren (1954): 'To separate them from others of similar age and qualifications solely because of their race generates a feeling of inferiority as to their status in the community that may affect their hearts and minds in a way unlikely ever to be undone... We conclude that in the field of public education the doctrine of \"separate but equal\" has no place. Separate educational facilities are inherently unequal.'",
        "attribution": "Plessy v. Ferguson, 163 U.S. 537 (1896), Harlan, J., dissenting; Brown v. Board of Education, 347 U.S. 483 (1954), unanimous opinion. Both verbatim; both public domain (U.S. government works).",
        "contextNote": "Harlan's dissent had zero legal force in 1896 — it lost. Fifty-eight years later, the Brown Court reached the conclusion his dissent pointed toward. This is a case study in how a minority view can be vindicated later when the evidence corroborates it.",
        "task": "Place the two excerpts side by side. Underline the exact words in each where the author rejects the idea that segregation is neutral or harmless. Then answer in writing: Yesterday the Plessy MAJORITY claimed separation stamped no 'badge of inferiority.' What evidence or reasoning let the Brown Court reject that claim in 1954? Which account survives corroboration, and how do you know?"
      },
      "discussionQuestion": "A dissent loses the case. So why might a dissent still matter to history? And when the Plessy majority and the Brown Court make opposite factual claims about whether segregation harms children, are those two claims equally valid — or does one survive the evidence better? Defend your answer with the text.",
      "studentTask": "Write a short CER paragraph answering: 'To what extent did Brown v. Board reverse Plessy v. Ferguson?' Claim (did it fully reverse Plessy, or only in public education?), Evidence (quote both opinions), Reasoning (explain what changed — the Constitution itself, or its interpretation — and why that distinction matters).",
      "exitTicket": "In one sentence: What actually changed between 1896 and 1954 — the words of the Constitution, or the way the Court interpreted them? Explain how you know.",
      "differentiation": {
        "strugglingReaders": "Provide both excerpts on a single half-page with matching color-coding (blue = 'segregation is harmless' claims to reject, green = 'segregation harms' claims). Offer a two-sentence plain-language summary of each opinion, clearly labeled as a summary, not a quotation.",
        "advanced": "Add: Harlan's phrase 'color-blind Constitution' has been quoted by people on opposite sides of later debates. Why might the same nine words be used to argue for very different policies? Write a short paragraph on what that teaches us about quoting a source out of context.",
        "englishLearners": "Pre-teach caste, pernicious, inherently, and inferiority with cognates and images. Provide the CER paragraph as a fill-in frame ('Brown reversed Plessy ___ because the Court said ___, which shows ___'). Allow oral rehearsal with a partner before writing.",
        "iepAnd504": "Reduce the CER to three sentences (one claim, one quoted evidence, one reasoning). Provide a graphic organizer with labeled boxes. Honor extended time, scribing, and text-to-speech per the student's plan.",
        "executiveFunction": "Chunk the CER into three timed segments with a checkpoint after each box. Provide a model paragraph on a different case as a template to imitate, then remove it before independent writing.",
        "alternateResponse": "Students may present the comparison as a labeled two-column visual (Harlan vs. Brown) with quoted phrases and short captions, then explain their reasoning in a 60-second audio recording instead of the written CER."
      }
    },
    {
      "day": 3,
      "title": "Federal Power and Its Limits",
      "objective": "Students will evaluate the powers and limits of the executive and judicial branches in enforcing civil rights, using Executive Order 9981 and the Southern Manifesto, and explain why a Supreme Court ruling did not automatically produce enforcement.",
      "bellRinger": "Executive Order 9981 (1948) declares 'equality of treatment and opportunity for all persons in the armed services.' Which branch of government issued this, and what part of American life does that branch directly control?",
      "miniLesson": "Concise teacher outline: (1) Contrast two 1940s-50s federal actions. (2) EO 9981 (1948): President Truman declared a policy of desegregating the armed forces by order — the military is a federal institution the President directly commands, so an order could take effect without waiting on the states (full desegregation was carried out over the next several years). (3) Brown (1954): the Court could declare school segregation unconstitutional, but schools are run by states and localities, so the ruling required compliance the Court could not compel by itself. (4) Introduce 'massive resistance' and read the Southern Manifesto (1956), in which 101 members of Congress (19 senators and 82 representatives) pledged to resist Brown 'by any lawful means.' (5) Describe (do not display — the photographs are copyrighted) the Little Rock crisis of 1957, when Governor Orval Faubus used the Arkansas National Guard to block nine Black students and President Eisenhower federalized that Guard and sent the 101st Airborne to enforce the court order. (6) Land the concept: a right declared is not a right enforced; enforcement requires power that reaches the place where the right is being denied.",
      "sourceActivity": {
        "title": "What Each Branch Can and Cannot Do: Executive Order 9981 (1948) and the Southern Manifesto (1956)",
        "excerpt": "Executive Order 9981, President Harry S. Truman (July 26, 1948): 'It is hereby declared to be the policy of the President that there shall be equality of treatment and opportunity for all persons in the armed services without regard to race, color, religion or national origin. This policy shall be put into effect as rapidly as possible...' | The Southern Manifesto (Declaration of Constitutional Principles), 1956: 'We regard the decision of the Supreme Court in the school cases as a clear abuse of judicial power... We commend the motives of those States which have declared the intention to resist forced integration by any lawful means... We pledge ourselves to use all lawful means to bring about a reversal of this decision which is contrary to the Constitution and to prevent the use of force in its implementation.'",
        "attribution": "Executive Order 9981, 13 Fed. Reg. 4313 (1948); 'Declaration of Constitutional Principles' (the Southern Manifesto), Congressional Record, 84th Cong., 2d Sess. (March 12, 1956). Both verbatim; both public domain (U.S. government works).",
        "contextNote": "EO 9981 shows executive power working WHERE the President has direct control (the military). The Southern Manifesto shows why Brown stalled: 101 members of Congress reframed a civil-rights ruling as an 'abuse of judicial power,' giving official cover to resistance. Same era, two very different levers of federal power.",
        "task": "Make a three-branch chart (Executive / Judicial / Legislative). For the executive and judicial branches, use the two documents to note ONE thing each branch could enforce on its own and ONE thing it could not. Then apply the civic-judgment move to the Southern Manifesto: reframing Brown as an 'abuse of judicial power' benefited whom, harmed whom, and — when officials acted on it — led to what?"
      },
      "discussionQuestion": "Why could a president begin desegregating the entire army by signing an order in 1948, while the Supreme Court could NOT desegregate the schools by issuing a ruling in 1954? What does that difference reveal about where enforcement power actually lives?",
      "studentTask": "Write a short explanation (4-6 sentences) titled 'Why a Ruling Is Not Enough' answering: what can a court do, what can it not do by itself, and what did it take to actually enforce Brown in a place like Little Rock? Reference both documents and the described (not displayed) 1957 crisis.",
      "exitTicket": "Name one thing a Supreme Court ruling CANNOT do by itself. Then name who or what has to act to close that gap.",
      "differentiation": {
        "strugglingReaders": "Provide a pre-drawn three-branch chart with icons and one example already filled in. Shorten the Southern Manifesto excerpt to the single 'abuse of judicial power' sentence plus the 'pledge... by all lawful means' sentence, with a plain-language gloss.",
        "advanced": "Add: The Southern Manifesto insists on resisting 'by any lawful means.' Analyze how framing resistance as 'lawful' and 'constitutional' was strategic. What did that framing let its signers claim about themselves, and how should a historian evaluate that claim against the outcome?",
        "englishLearners": "Pre-teach executive order, judicial, resist, integration, and reversal with visuals. Provide a labeled diagram of the three branches to annotate rather than draw from scratch. Offer sentence frames for the 'Why a Ruling Is Not Enough' task.",
        "iepAnd504": "Provide the three-branch chart partially completed and reduce the writing task to three sentences. Allow the described Little Rock event to be delivered as a short teacher read-aloud with guided notes. Honor extended time and scribing.",
        "executiveFunction": "Give a step list with checkboxes and color-code the two documents to the two branches so students are not switching between sources unaided. Use a visible timer per chunk.",
        "alternateResponse": "Students may create a labeled flow diagram (Ruling issued -> ignored by state -> federal enforcement sent) with brief captions and explain it orally, in place of the written paragraph."
      }
    },
    {
      "day": 4,
      "title": "What Finally Forced Enforcement",
      "objective": "Students will identify the specific enforcement mechanisms written into the Civil Rights Act of 1964 and the Voting Rights Act of 1965 and explain why those tools succeeded where prior court rulings had stalled, while evaluating the Kerner Commission's warning about what remained unfinished.",
      "bellRinger": "Read Title II of the Civil Rights Act of 1964 (projected). List every kind of place it says must serve people 'without discrimination or segregation.' Why might naming specific places matter more than a general promise of equality?",
      "miniLesson": "Concise teacher outline: (1) Recall the problem from Days 1-3: rights were declared but stalled. (2) Explain why statutes did what litigation could not — a law can build ENFORCEMENT TOOLS: federal lawsuits, the power to cut off federal funding (Civil Rights Act, Title VI), and federal examiners/registrars plus suspension of literacy tests (Voting Rights Act, Sections 4 and 6). (3) Read Title II (public accommodations) and Title VII (employment) of the 1964 Act, and Section 2 of the 1965 Act. (4) Show the measurable result — Black voter registration in the Deep South rose sharply after 1965 (share the specific data you have on hand as corroboration). (5) Read the Kerner Report (1968): even after these laws, the nation was 'moving toward two societies... separate and unequal.' (6) Acknowledge the movement's grassroots pressure that made these laws possible; describe (do not quote — copyrighted) the March on Washington and the Selma-to-Montgomery marches, and note their role in the teacher discussion. (7) Land the causal claim: enforcement mechanisms — not merely declarations — closed the gap, and even then the work was unfinished.",
      "sourceActivity": {
        "title": "Laws With Teeth: The Civil Rights Act of 1964, the Voting Rights Act of 1965, and the Kerner Warning",
        "excerpt": "Civil Rights Act of 1964, Title II: 'All persons shall be entitled to the full and equal enjoyment of the goods, services, facilities, privileges, advantages, and accommodations of any place of public accommodation... without discrimination or segregation on the ground of race, color, religion, or national origin.' | Voting Rights Act of 1965, Section 2: 'No voting qualification or prerequisite to voting, or standard, practice, or procedure shall be imposed or applied by any State or political subdivision to deny or abridge the right of any citizen of the United States to vote on account of race or color.' | Kerner Commission (1968): 'This is our basic conclusion: Our nation is moving toward two societies, one black, one white — separate and unequal.'",
        "attribution": "Civil Rights Act of 1964, Pub. L. 88-352, Title II; Voting Rights Act of 1965, Pub. L. 89-110, Section 2 (original 1965 text); Report of the National Advisory Commission on Civil Disorders (the Kerner Report), 1968. All verbatim; all public domain (U.S. government works).",
        "contextNote": "The 1964 and 1965 Acts differ from a court ruling because they carry enforcement machinery — funding cutoffs, federal lawsuits, and federal voter registrars. The Kerner Report, a federal commission, warns that even landmark laws had not undone deep, structural inequality. Note 'Negro' as standard 1968 usage; teacher frames before reading.",
        "task": "For each of the two statutes, quote the enforcement or coverage language and, using your notes, name ONE concrete tool the law created that a court ruling alone did not have. Then read the Kerner conclusion and answer: if the laws worked, why would a federal commission warn in 1968 that the country was splitting into 'two societies... separate and unequal'? What does that tell you about the difference between passing a law and finishing the job?"
      },
      "discussionQuestion": "Rights had been 'guaranteed' since the 1860s. Why did the laws of 1964 and 1965 finally force change when a century of amendments and even a Supreme Court ruling had not? And what did the Kerner Report say those laws had NOT yet fixed — does that make the laws a failure, or something else?",
      "studentTask": "Create a comparison titled 'Ruling vs. Statute: Where Are the Teeth?' In two columns, list what a court ruling can do and what these statutes added (funding cutoffs, federal lawsuits, federal registrars, suspension of literacy tests). Conclude with a one-sentence claim answering the second half of the driving question: what finally forced enforcement?",
      "exitTicket": "In one sentence, explain the difference between DECLARING a right and ENFORCING one, and give one specific enforcement tool from today's sources.",
      "differentiation": {
        "strugglingReaders": "Provide the three excerpts on one page with the enforcement/coverage words bolded. Offer a word bank of enforcement tools (funding cutoff, federal lawsuit, federal registrar, ban on literacy tests) for students to match to the correct law.",
        "advanced": "Add: The Kerner Report blamed structural conditions, not individuals. Read the fuller conclusion (provided) and evaluate its causal argument: what evidence would strengthen it, and what would a fair skeptic ask? Write a short historiographic response.",
        "englishLearners": "Pre-teach accommodation, prerequisite, abridge, registrar, and structural with visuals and cognates. Provide the comparison chart with column headers translated and one example completed. Allow partner discussion before writing.",
        "iepAnd504": "Provide the 'Ruling vs. Statute' chart pre-labeled with the first row done. Reduce required entries to two per column. Offer the Kerner sentence as a teacher read-aloud with a guided note. Honor extended time, text-to-speech, and scribing.",
        "executiveFunction": "Number the task steps and provide a matching key so students connect each quote to its enforcement tool without holding multiple items in memory. Use a checklist and a visible timer.",
        "alternateResponse": "Students may build a labeled 'toolbox' graphic — each enforcement tool drawn as a labeled item — and record a short spoken explanation of why statutes had teeth that rulings lacked, in place of the written comparison."
      }
    },
    {
      "day": 5,
      "title": "Claim-Writing Seminar and DBQ Assessment",
      "objective": "Students will construct an evidence-based written argument that answers the driving question, using at least three of the unit's primary sources with explicit sourcing, contextualization, and corroboration, and applying the civic-judgment move to at least one document.",
      "bellRinger": "Restate the driving question in your own words in one sentence. Then, from memory, name the three sources you think are strongest for answering it and why.",
      "miniLesson": "Concise teacher outline: (1) Review the CER structure and the DBQ expectations. (2) Model sourcing on one document aloud (who, when, why) and model one corroboration move (which two documents support each other, and which claim collapses). (3) Re-teach the civic-judgment move as an analytic tool for the essay: naming what a source's framing does strengthens reasoning. (4) Set the standard: at least three documents, at least one sourcing note, at least one corroboration move, and a clear line from 'rights on paper (1860s)' to 'what forced enforcement (1964-65).' (5) Run a brief structured seminar on the driving question to surface arguments, then release students to write.",
      "sourceActivity": {
        "title": "Document-Based Seminar: Building the Argument From the Record",
        "excerpt": "Students work from the five-document DBQ set assembled for this unit (15th Amendment; Plessy majority; Brown; the Southern Manifesto; the Voting Rights Act of 1965). Seminar opener for close reading: 15th Amendment, Section 1 (1870): 'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.'",
        "attribution": "See the DBQ document set (all verbatim, all public-domain U.S. government works): U.S. Const. amend. XV (1870); Plessy v. Ferguson, 163 U.S. 537 (1896); Brown v. Board of Education, 347 U.S. 483 (1954); the Southern Manifesto, Cong. Rec. (1956); Voting Rights Act of 1965, Pub. L. 89-110.",
        "contextNote": "The seminar rehearses the argument before students write it. The 15th Amendment is the opener because it makes the century-long gap vivid: the right to vote was guaranteed in 1870, yet federal registrars were still needed in 1965 to make it real.",
        "task": "In a 20-minute structured seminar, each student must (a) cite one document, (b) source it (who/when/why), and (c) make one corroboration or collapse claim ('Document X supports Document Y' OR 'Document Z's claim collapses because...'). Then write the DBQ essay independently."
      },
      "discussionQuestion": "Seminar spine question: Across all five documents, what best explains why 1860s guarantees took a century to enforce — and which single document is the strongest evidence for what finally forced enforcement? Be ready to defend your choice and to say which competing account you are rejecting and why.",
      "studentTask": "Write the DBQ essay responding to the driving question. Requirements: a defensible claim; evidence from at least three documents; at least one explicit sourcing note and one corroboration move; application of the civic-judgment move to at least one source (who benefits/who is harmed/what happens when acted upon); and a conclusion that distinguishes rights declared from rights enforced.",
      "exitTicket": "Reflection (2-3 sentences): Which document changed your thinking the most, and what is one claim you encountered this week that does NOT survive the evidence — and how do you know?",
      "differentiation": {
        "strugglingReaders": "Provide the DBQ documents in the abridged one-sentence-per-source format with key phrases bolded, plus a paragraph-by-paragraph essay skeleton with topic-sentence starters.",
        "advanced": "Require integration of all five documents and the addition of one piece of outside corroboration (e.g., post-1965 voter registration data) with a citation. Ask students to anticipate and rebut the strongest counterargument to their claim.",
        "englishLearners": "Provide a DBQ writing frame with transitions ('The document shows...', 'This is confirmed by...', 'However, this claim collapses because...') and a bilingual glossary. Allow an oral outline check with the teacher before drafting.",
        "iepAnd504": "Offer a structured graphic organizer that maps each body paragraph to one document, reduce the document minimum from three to two, and allow the essay to be typed, scribed, or dictated per the student's plan with extended time.",
        "executiveFunction": "Provide a paragraph checklist and a per-paragraph time budget. Break the essay into stages (outline, draft body 1, draft body 2, intro/conclusion) with a check-in after each. Permit a printed evidence bank so students are not searching while drafting.",
        "alternateResponse": "Students may deliver the argument as a recorded 3-4 minute oral DBQ or a narrated slide sequence that meets the same requirements (three documents, sourcing, corroboration, civic-judgment move), scored on the same rubric."
      }
    }
  ],
  "quiz": [
    {
      "question": "The 14th and 15th Amendments, which guaranteed equal protection and the right to vote regardless of race, were ratified during which period?",
      "choices": [
        "At the nation's founding in the 1780s-1790s",
        "During Reconstruction, in 1868 and 1870",
        "During the Civil Rights Movement of the 1950s-1960s",
        "Immediately after World War II"
      ],
      "answer": "During Reconstruction, in 1868 and 1870",
      "explanation": "The 14th (1868) and 15th (1870) Amendments were products of the first Reconstruction. This is precisely why historians call the mid-1900s movement the 'Second Reconstruction': the rights were already law; the fight was to enforce them."
    },
    {
      "question": "In Plessy v. Ferguson (1896), how did the majority justify upholding segregation?",
      "choices": [
        "It ruled that the 14th Amendment did not apply to the states",
        "It claimed segregation stamped Black citizens with a 'badge of inferiority' only if they chose to see it that way",
        "It held that the 15th Amendment specifically permitted segregation",
        "It found that Congress had already banned integration"
      ],
      "answer": "It claimed segregation stamped Black citizens with a 'badge of inferiority' only if they chose to see it that way",
      "explanation": "The majority reframed segregation as harmless and shifted responsibility onto its victims. Applying the civic-judgment move: this framing benefited segregationist governments, harmed Black citizens, and, once acted upon, shielded Jim Crow for 58 years."
    },
    {
      "question": "Justice Harlan's opinion in Plessy v. Ferguson is best described as which of the following?",
      "choices": [
        "The controlling law of the land in 1896",
        "A dissent — a minority opinion with no legal force that later influenced the Court's thinking",
        "A ruling that immediately ended segregation",
        "An act of Congress"
      ],
      "answer": "A dissent — a minority opinion with no legal force that later influenced the Court's thinking",
      "explanation": "Harlan was the lone dissenter. A dissent does not decide a case, so his 'color-blind Constitution' had no power in 1896 — but its reasoning pointed toward Brown v. Board 58 years later. This shows how a minority view can be vindicated when the evidence later corroborates it."
    },
    {
      "question": "Short answer: What exact phrase did the Supreme Court use in Brown v. Board of Education (1954) to reject 'separate but equal' in public schools?",
      "answer": "'Separate educational facilities are inherently unequal.'",
      "explanation": "The unanimous Court held that segregation in public education is unconstitutional, concluding that separation itself produces inequality. This directly rejected the Plessy majority's factual claim that separation was harmless."
    },
    {
      "question": "Executive Order 9981 (1948) set federal policy to desegregate which of the following?",
      "choices": [
        "Public schools",
        "The armed services",
        "Interstate buses",
        "Voting booths"
      ],
      "answer": "The armed services",
      "explanation": "President Truman used executive power over an institution he directly commanded — the military. That is why an order could set policy there without waiting on state compliance, unlike the Brown ruling, which depended on state and local school officials."
    },
    {
      "question": "Short answer: Why did the Supreme Court's Brown decision NOT immediately desegregate Southern schools?",
      "answer": "A court ruling is not self-enforcing; it requires other branches and state and local officials to comply. Many Southern officials practiced 'massive resistance' (for example, the Southern Manifesto) and delayed under 'all deliberate speed,' so federal enforcement (as at Little Rock in 1957) was often required.",
      "explanation": "This is the unit's core distinction: a right declared is not a right enforced. Enforcement requires power that reaches the place where the right is being denied."
    },
    {
      "question": "Which enforcement tool did the Voting Rights Act of 1965 add that a Supreme Court ruling by itself did not have?",
      "choices": [
        "A new constitutional amendment",
        "Federal examiners/registrars and the suspension of literacy tests in covered areas",
        "A Supreme Court dissent",
        "A formal presidential apology"
      ],
      "answer": "Federal examiners/registrars and the suspension of literacy tests in covered areas",
      "explanation": "Statutes can build enforcement machinery. The Voting Rights Act sent federal officials to register voters and suspended discriminatory tests, giving the long-guaranteed right to vote practical 'teeth' that court rulings had lacked."
    },
    {
      "question": "Short answer: What did the Kerner Commission (1968) conclude about the direction of American society, even after the major civil rights laws had passed?",
      "answer": "'Our nation is moving toward two societies, one black, one white — separate and unequal.'",
      "explanation": "The federal commission warned that landmark laws had not erased deep, structural inequality. This shows that enforcing rights was ongoing and unfinished, not a single completed event."
    }
  ],
  "dbq": {
    "prompt": "Using the five documents below and your knowledge of United States history, construct an evidence-based argument that answers the driving question: Why did rights guaranteed in the 1860s still have to be fought for a century later, and what finally forced enforcement? Your essay must (1) make a defensible claim, (2) use evidence from at least three documents, (3) include at least one sourcing note (who created a document, when, and why) and at least one corroboration move (which documents support each other, or which claim collapses under the evidence), and (4) apply the civic-judgment move to at least one document by explaining what its framing does — who benefits, who is harmed, and what happens when people act on it.",
    "guidance": "Model the disciplinary method used all week. Do not summarize the documents in order; organize around a claim. Distinguish a right DECLARED from a right ENFORCED. Remember that competing accounts are not automatically equal: the Plessy majority's claim that segregation was harmless collapses when corroborated against Brown and the material record, and you should say so plainly and explain why. Where an iconic but copyrighted source (a King speech, a famous news photograph) would help, refer to it in your own words rather than quoting it; your argument should stand on the verifiable public-domain record. A strong essay names the enforcement mechanism (federal lawsuits, funding cutoffs, federal registrars, suspension of literacy tests) rather than merely asserting that attitudes changed.",
    "documents": [
      {
        "title": "Document A — The Right on Paper: The 15th Amendment (1870)",
        "excerpt": "'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.'",
        "attribution": "U.S. Constitution, Amendment XV, Section 1 (ratified 1870). Verbatim; public domain.",
        "contextNote": "This is the guarantee at the heart of the driving question: the right to vote regardless of race was constitutional law in 1870 — ninety-five years before federal registrars were finally sent to enforce it."
      },
      {
        "title": "Document B — The Loophole: The Plessy Majority (1896)",
        "excerpt": "'We consider the underlying fallacy of the plaintiff's argument to consist in the assumption that the enforced separation of the two races stamps the colored race with a badge of inferiority. If this be so, it is not by reason of anything found in the act, but solely because the colored race chooses to put that construction upon it.'",
        "attribution": "Plessy v. Ferguson, 163 U.S. 537 (1896), majority opinion (Justice Henry Billings Brown). Verbatim; public domain. Note: 'colored race' is period language, framed by the teacher before reading.",
        "contextNote": "The Court did not deny that equal protection existed; it reinterpreted segregation as harmless and blamed its victims for feeling harmed. This framing gave Jim Crow a constitutional shield."
      },
      {
        "title": "Document C — The Reinterpretation: Brown v. Board (1954)",
        "excerpt": "'To separate them from others of similar age and qualifications solely because of their race generates a feeling of inferiority... We conclude that in the field of public education the doctrine of \"separate but equal\" has no place. Separate educational facilities are inherently unequal.'",
        "attribution": "Brown v. Board of Education, 347 U.S. 483 (1954), unanimous opinion (Chief Justice Earl Warren). Verbatim; public domain.",
        "contextNote": "A unanimous Court rejected the exact factual claim the Plessy majority had made. But this is a ruling, not a self-enforcing act — which sets up the resistance in Document D."
      },
      {
        "title": "Document D — The Resistance: The Southern Manifesto (1956)",
        "excerpt": "'We regard the decision of the Supreme Court in the school cases as a clear abuse of judicial power... We pledge ourselves to use all lawful means to bring about a reversal of this decision which is contrary to the Constitution and to prevent the use of force in its implementation.'",
        "attribution": "'Declaration of Constitutional Principles' (the Southern Manifesto), signed by 101 members of Congress (19 senators and 82 representatives), Congressional Record (March 12, 1956). Verbatim; public domain.",
        "contextNote": "This explains why Brown stalled. Reframing a civil-rights ruling as an 'abuse of judicial power' gave official cover to 'massive resistance' — a prime target for the civic-judgment move."
      },
      {
        "title": "Document E — The Enforcement: The Voting Rights Act (1965)",
        "excerpt": "'No voting qualification or prerequisite to voting, or standard, practice, or procedure shall be imposed or applied by any State or political subdivision to deny or abridge the right of any citizen of the United States to vote on account of race or color.'",
        "attribution": "Voting Rights Act of 1965, Pub. L. 89-110, Section 2 (original 1965 text). Verbatim; public domain. (Accompanying sections authorized federal examiners and suspended literacy tests in covered areas.)",
        "contextNote": "Compare this directly with Document A. The 1965 Act restates the 1870 promise — but this time the statute carries enforcement machinery (federal registrars, suspended literacy tests) that finally made the right real."
      }
    ]
  },
  "rubric": {
    "levels": [
      "Advanced (4)",
      "Proficient (3)",
      "Developing (2)",
      "Beginning (1)"
    ],
    "criteria": [
      {
        "name": "Claim / Thesis",
        "descriptors": [
          "Presents a precise, defensible claim that directly answers both halves of the driving question (why the century-long gap AND what forced enforcement) and previews a line of reasoning.",
          "Presents a clear claim that answers the driving question, addressing both the gap and enforcement, though the reasoning is only partly previewed.",
          "States a claim that addresses part of the question (usually one half) or is somewhat vague or descriptive rather than argumentative.",
          "States no clear claim, or restates the prompt/summarizes documents without taking a position."
        ]
      },
      {
        "name": "Use of Evidence (Primary Sources)",
        "descriptors": [
          "Integrates specific, accurately quoted or paraphrased evidence from at least three documents, each tied directly to the claim; evidence is well chosen for its argumentative weight.",
          "Uses accurate evidence from at least three documents that generally supports the claim, though one piece may be loosely connected.",
          "Uses evidence from two documents, or includes evidence that is inaccurate, out of context, or thinly connected to the claim.",
          "Uses little or no document evidence, or misquotes/misattributes sources."
        ]
      },
      {
        "name": "Sourcing & Corroboration",
        "descriptors": [
          "Includes at least one explicit sourcing note (who/when/why) and at least one corroboration move, AND correctly identifies a claim that collapses under the evidence, explaining why with reference to specific documents.",
          "Includes a sourcing note and a corroboration move that are accurate and relevant to the argument.",
          "Attempts sourcing or corroboration but does so vaguely, or names sources without explaining how source or context affects reliability.",
          "Does not source or corroborate; treats all documents as interchangeable or all conflicting accounts as equally valid."
        ]
      },
      {
        "name": "Reasoning & Civic Judgment",
        "descriptors": [
          "Applies the civic-judgment move rigorously to at least one source — naming who benefits, who is harmed, and what follows when people act on the framing — and uses that analysis to strengthen the overall argument.",
          "Applies the civic-judgment move to a source, identifying who benefits and who is harmed, with reasoning connected to the claim.",
          "Notes that a source is biased or has a point of view but does not analyze what the bias DOES (its beneficiaries, its harms, or its consequences).",
          "Offers little reasoning, or reasoning that is inaccurate or disconnected from the evidence."
        ]
      },
      {
        "name": "Historical Accuracy & Context",
        "descriptors": [
          "Situates the argument firmly in the Second Reconstruction frame with accurate dates, actors, and mechanisms; distinguishes a right declared from a right enforced and names specific enforcement tools.",
          "Demonstrates accurate historical context and correctly distinguishes declaring a right from enforcing one, with minor omissions.",
          "Shows partial or uneven historical accuracy; blurs the declared-versus-enforced distinction or misplaces some dates/actors.",
          "Contains significant factual errors or shows little grasp of the period or the enforcement question."
        ]
      },
      {
        "name": "Organization & Conventions",
        "descriptors": [
          "Argument is tightly organized around the claim with smooth transitions and control of language; period terminology is handled accurately and respectfully.",
          "Argument is clearly organized and readable, with generally effective transitions and few errors.",
          "Organization is loose or list-like; errors occasionally interfere with meaning.",
          "Lacks organization; frequent errors obscure meaning."
        ]
      }
    ]
  },
  "modifiedReading": "MODIFIED READING-SUPPORT VERSION (plain language; shorter sentences; key words defined in line). NOTE TO STUDENTS: The short quotations below are the REAL words from the historical documents. The explanations around them are plain-language summaries written to help you — they are NOT quotations.\n\nTITLE: Rights on Paper, Then the Fight to Make Them Real\n\n1) THE PROMISE (1860s). After the Civil War, the country added two rules to the Constitution. The 14th Amendment (1868) said no state may 'deny to any person... the equal protection of the laws.' Equal protection means the law must treat people equally. The 15th Amendment (1870) said the right to vote cannot be denied 'on account of race, color, or previous condition of servitude.' So by 1870, the rights were already written down.\n\n2) THE PROBLEM (Jim Crow and Plessy). But the words on paper were not obeyed. Southern states passed 'Jim Crow' laws that forced segregation (keeping races apart) and blocked Black citizens from voting. In 1896, in Plessy v. Ferguson, the Supreme Court said segregation was legal if things were 'separate but equal.' The Court claimed segregation did not make Black people feel inferior unless they 'chose' to see it that way. CIVIC-JUDGMENT CHECK: Who did that idea help? (segregationist governments) Who did it hurt? (Black citizens) What happened when people believed it? (segregation was allowed to continue for 58 years).\n\n3) THE ONE JUDGE WHO DISAGREED. One justice, John Marshall Harlan, disagreed. He wrote, 'Our Constitution is color-blind.' A written disagreement by a losing judge is called a dissent. A dissent does not win the case. But people remembered his words later.\n\n4) THE TURN (Brown, 1954). Almost 60 years later, in Brown v. Board of Education, all nine justices agreed that segregated schools were wrong. They wrote, 'Separate educational facilities are inherently unequal.' Inherently means 'by its very nature.' So separate is unequal by itself. This decision rejected the Plessy idea.\n\n5) WHY A RULING WAS NOT ENOUGH. A court can SAY something is wrong. But a court cannot run the schools. Schools are run by states and towns. Many Southern leaders refused to obey Brown. In 1956, 101 members of Congress signed the 'Southern Manifesto,' calling the ruling an 'abuse of judicial power' and pledging to resist. So the ruling stalled. In 1957, the President had to send federal soldiers to Little Rock, Arkansas, so nine Black students could enter a school. (There are famous photographs of this. They are under copyright, so we describe them instead of showing them.)\n\n6) COMPARE: A DIFFERENT KIND OF POWER (1948). Nine years before Brown, President Truman signed Executive Order 9981. It set the policy of desegregating the armed services. Why could an order work here? Because the President directly controls the military. He did not have to wait for states to agree.\n\n7) WHAT FINALLY WORKED (1964-1965). Congress passed two laws with real power to enforce rights. The Civil Rights Act of 1964 banned segregation in public places like hotels and restaurants. The Voting Rights Act of 1965 sent federal officials to register voters and banned unfair 'literacy tests.' These laws had 'teeth' — real tools to force change. Notice: the 1965 law repeats the promise from the 1870 amendment. The difference is that now the government could enforce it.\n\n8) STILL UNFINISHED (1968). A government report called the Kerner Report warned that even after these laws, the country was 'moving toward two societies, one black, one white — separate and unequal.' (The word 'Negro' appears in the original report. It was the normal word in 1968. We quote the record accurately but do not use that word ourselves.) So the fight to make rights real did not end in one day.\n\nBIG IDEA TO REMEMBER: A right can be written in the Constitution and still be denied in real life. Rights become real only when there is a way to ENFORCE them.",
  "advancedExtension": "ADVANCED EXTENSION (for students ready for deeper, independent work; all sources remain public-domain federal documents). Choose ONE:\n\n(1) THE TRAVELING PHRASE. Justice Harlan wrote in 1896 that 'Our Constitution is color-blind.' In the decades since, people on opposite sides of policy debates have quoted those same words to support very different conclusions. Read the full paragraph of Harlan's dissent surrounding the phrase, then write a 1-2 page analysis: What did 'color-blind' mean in Harlan's 1896 context — a rejection of a legal caste system? How does quoting the phrase without its context change its meaning? Use this as a case study in the sourcing skill: a quotation's meaning depends on who is speaking, when, and why. Conclude with a rule of thumb for responsibly quoting a source.\n\n(2) THE ENFORCEMENT GAP OVER TIME. Build an evidence timeline that tracks the DISTANCE between a right being declared and a right being enforced: 15th Amendment (1870) declares the vote; poll taxes and literacy tests block it; the 24th Amendment (1964) bans the poll tax in federal elections; the Voting Rights Act (1965) suspends literacy tests and sends federal registrars. Using public voter-registration data, write a data-grounded paragraph on what actually moved the numbers. Then pose (do not answer definitively) the historian's question: does declaring a right ever fully 'finish' the work, or does enforcement require ongoing attention?\n\n(3) READING A FEDERAL COMMISSION'S ARGUMENT. Read the fuller conclusions of the Kerner Report (1968). The commission made a CAUSAL argument — it blamed structural conditions and institutions rather than individuals. Evaluate that argument as a historian: What kinds of evidence would strengthen it? What would a fair skeptic ask? Write a short historiographic response that models intellectual honesty — taking the argument seriously without either dismissing it or accepting it uncritically. Explicitly apply the 'do not flatten to both sides' principle: where does the evidence let you say one account is better supported than another, and where must you withhold judgment?\n\nEach option is assessed on the same analytic rubric, with added weight on independent sourcing and on the quality of the corroboration/collapse judgment.",
  "subPlan": "SUBSTITUTE PLAN (self-contained; no content expertise required; runs in one 45-55 minute period). PURPOSE FOR THE SUB: Students read three short REAL historical documents and answer questions in writing. There is no lecture to deliver and no discussion to facilitate. Please keep the room calm and focused; this is a serious history topic (racial segregation and civil rights), and students have been prepared for it.\n\nBEFORE YOU START (read this to the class, verbatim): 'Today you are working with the real words of historical documents about civil rights. Some older documents use words that we do not use today, such as \"colored\" or \"Negro.\" Those were the words of that time period. We read them to understand the record accurately, and we do not use them ourselves. Work quietly and respectfully. If you have a question, raise your hand.'\n\nMATERIALS (in the sub folder): a one-page handout with the three excerpts below and the questions. Extra copies are provided.\n\nTHE THREE EXCERPTS (already on the handout):\n- 15th Amendment, Section 1 (1870): 'The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.'\n- Brown v. Board of Education (1954): 'Separate educational facilities are inherently unequal.'\n- Voting Rights Act of 1965, Section 2: 'No voting qualification or prerequisite to voting... shall be imposed or applied by any State or political subdivision to deny or abridge the right of any citizen of the United States to vote on account of race or color.'\n\nSTUDENT DIRECTIONS (on the handout): Answer in complete sentences. (1) The 15th Amendment (1870) already guaranteed the right to vote. Write one sentence explaining why a NEW law in 1965 was still needed to protect that same right. (2) Brown v. Board said separate schools are 'inherently unequal.' In your own words, what does that mean? (3) Compare the 1870 amendment and the 1965 law. They promise nearly the same thing. What is the difference between a government DECLARING a right and ENFORCING it? (4) One-sentence exit reflection: What is one thing you learned today?\n\nTIMING: 5 min introduction/settling; 10 min silent reading; 25 min written responses; 10 min collect and quiet reading or wrap-up.\n\nFOR THE SUB / ANSWER GUIDANCE (so you can tell if students are on track — not a grading key): (1) Strong answers say the 1870 right was written but not enforced; states blocked voting with literacy tests and poll taxes, so the 1965 law was needed to actually enforce it. (2) Separation itself creates inequality, even if buildings are equal. (3) A declaration is a promise on paper; enforcement is the power and tools to make it real. COLLECT ALL HANDOUTS and leave them for the teacher. Thank you.",
  "dashboard": {
    "focusDay": "Day 2 — The Legal Turn: Harlan's Dissent Meets Brown",
    "todaysObjective": "Students will compare Justice Harlan's 1896 Plessy dissent with the 1954 Brown v. Board opinion and explain, using textual evidence, how the Court's reasoning changed and what let the Brown Court reject Plessy's central factual claim.",
    "essentialQuestion": "When two courts make opposite factual claims about the same thing — whether segregation harms children — are those claims equally valid, or does one survive the evidence better? And why can a dissent that loses in its own moment still matter to history?",
    "sourceOfTheDay": {
      "title": "Brown v. Board of Education (1954): The Unanimous Reversal",
      "excerpt": "'To separate them from others of similar age and qualifications solely because of their race generates a feeling of inferiority as to their status in the community that may affect their hearts and minds in a way unlikely ever to be undone... We conclude that in the field of public education the doctrine of \"separate but equal\" has no place. Separate educational facilities are inherently unequal.'",
      "attribution": "Brown v. Board of Education, 347 U.S. 483 (1954), unanimous opinion (Chief Justice Earl Warren). Verbatim; public domain (U.S. government work).",
      "contextNote": "Pair this on the board with yesterday's Plessy majority ('badge of inferiority... solely because the colored race chooses to put that construction upon it') and with Harlan's 1896 dissent ('Our Constitution is color-blind'). The Brown Court reached, unanimously, the conclusion Harlan's lone dissent had pointed toward 58 years earlier. The Constitution's words did not change; its interpretation did — and the change was driven by evidence that segregation does, in fact, harm.",
      "task": "Underline the exact words where the Brown Court says segregation is harmful. Then answer in writing: The Plessy majority claimed the harm was imagined ('they choose to see it that way'). What let the Brown Court reject that claim? Which account survives corroboration, and how do you know?"
    },
    "keyVocabulary": [
      {
        "term": "Dissent",
        "definition": "A written opinion by a judge who disagrees with the court's majority. It does not decide the case but can influence later courts — as Harlan's did."
      },
      {
        "term": "Precedent",
        "definition": "An earlier decision that guides later cases. Brown overturned the Plessy precedent in the field of public education."
      },
      {
        "term": "Inherently unequal",
        "definition": "Unequal by its very nature. Brown said separate schools are unequal in themselves, even if the buildings are identical."
      },
      {
        "term": "Corroboration",
        "definition": "Checking a claim against other evidence. Brown's finding, plus the record of unequal facilities, corroborate each other and contradict Plessy's claim that separation was harmless."
      }
    ],
    "misconceptions": [
      "That Brown immediately desegregated schools — it did not; enforcement took years and, in places, federal troops (this is tomorrow's focus).",
      "That the Constitution changed between 1896 and 1954 — the text did not change; the Court's interpretation of it did.",
      "That because Plessy and Brown disagree, both are equally valid 'opinions' — Plessy's factual claim that segregation carried no message of inferiority collapses under the evidence Brown cites; the two are not symmetric.",
      "That a dissent is worthless because it 'loses' — Harlan's dissent had no legal force in 1896 but shaped how later courts and the public thought."
    ],
    "discussionProtocol": "Paired-evidence 'text rendering,' then whole-class synthesis (about 15 minutes). Step 1: In pairs, each student reads aloud ONE underlined phrase from Harlan and ONE from Brown and says in a sentence what it claims. Step 2: Pairs decide together which Plessy claim Brown most directly rejects and find the matching words. Step 3: Whole class — cold-call two or three pairs to answer the spine question: 'Are the Plessy majority's and the Brown Court's claims about harm equally valid, or does one survive the evidence? Defend with the text.' Norm to enforce: no one may say 'both sides have a point' without naming which specific claim survives corroboration and which collapses, and why.",
    "differentiationSupports": [
      "Struggling readers: color-coded single-page handout (claims to reject vs. claims of harm) with plain-language summaries labeled as summaries.",
      "Advanced: analyze how Harlan's 'color-blind' phrase has later been quoted by opposing sides, and what that teaches about context.",
      "English learners: pre-taught vocabulary with cognates and images; CER sentence frames; oral rehearsal before writing.",
      "IEP/504: three-sentence CER option, labeled graphic organizer, extended time, scribing or text-to-speech per plan.",
      "ADHD/executive function: three timed chunks with checkpoints; a model paragraph to imitate, then removed.",
      "Alternate response: two-column visual comparison plus a 60-second audio explanation in place of the written CER."
    ],
    "exitTicket": "In one sentence: What actually changed between 1896 and 1954 — the words of the Constitution, or the way the Court interpreted them? Explain how you know.",
    "tomorrowsBridge": "Brown declared school segregation unconstitutional — but a ruling is not self-enforcing. Tomorrow (Day 3) we test the limits of that ruling: why could a president set policy to desegregate the army by order in 1948 (Executive Order 9981), while the Court could not desegregate schools by ruling in 1954? We will read the Southern Manifesto and see what 'massive resistance' did to Brown on the ground."
  },
  "studentPacket": {
    "intro": "STUDENT PACKET — The Civil Rights Movement: Enforcing the Second Reconstruction. Driving question: Why did rights guaranteed in the 1860s still have to be fought for a century later, and what finally forced enforcement? This week you are a historian working from the real record. Every document in this packet is a genuine, public-domain federal source — a constitutional amendment, a Supreme Court opinion, an executive order, a law passed by Congress, or a government report. You can verify all of them. For each source you will do three things: SOURCE it (who made it, when, and why), CORROBORATE it (does other evidence back it up, or does it collapse?), and apply the CIVIC-JUDGMENT MOVE (not just 'is this biased?' but 'what does the bias DO — who benefits, who is harmed, and what happens when people act on it?'). A note on language: some documents use words like 'colored' or 'Negro.' Those were the terms of that time. We quote the record accurately to understand it; we do not use those words ourselves, and no student will be asked to read them aloud.",
    "vocabulary": [
      {
        "term": "Second Reconstruction",
        "definition": "The name for the mid-1900s civil rights era, because it renewed the unfinished work of the first Reconstruction (1865-1877) by trying to finally enforce the 14th and 15th Amendments."
      },
      {
        "term": "Equal protection",
        "definition": "The 14th Amendment promise (1868) that no state may deny anyone 'the equal protection of the laws.'"
      },
      {
        "term": "Separate but equal",
        "definition": "The doctrine from Plessy v. Ferguson (1896) that segregation was legal if facilities were 'equal' — a claim rarely honored in reality."
      },
      {
        "term": "Dissent",
        "definition": "A written opinion by a judge who disagrees with the majority. It does not decide the case but can influence future courts."
      },
      {
        "term": "Massive resistance",
        "definition": "The organized effort by many Southern officials to defy or delay school desegregation after Brown v. Board."
      },
      {
        "term": "Enforcement mechanism",
        "definition": "The specific tool that makes a right real — such as federal lawsuits, cutting off federal funding, or sending federal officials to register voters."
      },
      {
        "term": "Disenfranchisement",
        "definition": "Taking away or blocking the right to vote, often through poll taxes, literacy tests, and intimidation."
      },
      {
        "term": "Corroboration",
        "definition": "Checking a claim against other evidence. Strong claims are corroborated; claims that contradict solid evidence collapse."
      }
    ],
    "backgroundReading": {
      "title": "The Gap Between Rights on Paper and Rights in Practice",
      "paragraphs": [
        "After the Civil War, the United States rewrote its own rules. The 14th Amendment (1868) guaranteed 'equal protection of the laws' to every person, and the 15th Amendment (1870) said the right to vote could not be denied 'on account of race, color, or previous condition of servitude.' On paper, by 1870, the promise of equal citizenship was already the law of the land.",
        "But paper is not practice. After Reconstruction ended in 1877, Southern states built a system called Jim Crow: laws that forced segregation and stripped Black Americans of the vote through poll taxes, literacy tests, and violence. In 1896, in Plessy v. Ferguson, the Supreme Court gave this system constitutional cover. It ruled that 'separate but equal' facilities were legal, and it claimed that segregation did not brand Black citizens as inferior unless they 'chose' to see it that way. One justice, John Marshall Harlan, dissented alone, writing that 'Our Constitution is color-blind.' His dissent lost — but it was not forgotten.",
        "For nearly sixty years, 'separate but equal' stood. Then, in 1954, a unanimous Supreme Court decided Brown v. Board of Education. It held that 'separate educational facilities are inherently unequal,' rejecting the very claim the Plessy majority had made. This is why historians call the era that followed the 'Second Reconstruction': the rights were already written in the 1860s; now the country was fighting to enforce them.",
        "But a court ruling is not self-enforcing. Schools are run by states and towns, not by the Supreme Court. Many Southern officials refused to comply. In 1956, 101 members of Congress signed the Southern Manifesto, calling Brown an 'abuse of judicial power' and pledging to resist. In 1957, the President had to send federal soldiers to Little Rock, Arkansas, so that nine Black students could enter a high school. A ruling had declared a right; force was required to enforce it.",
        "What finally closed the gap were laws with real enforcement power. The Civil Rights Act of 1964 banned segregation in public places and gave the federal government tools to sue and to cut off funding. The Voting Rights Act of 1965 sent federal officials to register voters and suspended the literacy tests that had blocked Black citizens for generations. Notice that the 1965 law restates the 1870 promise almost word for word — the difference is that this time the government could enforce it. Even so, the work was unfinished: in 1968 the federal Kerner Commission warned that the nation was still 'moving toward two societies... separate and unequal.' A right, this unit argues, is never finished the moment it is declared. It has to be enforced."
      ]
    },
    "sourceWorksheet": {
      "source": {
        "title": "Justice Harlan's Dissent in Plessy v. Ferguson (1896)",
        "excerpt": "'But in view of the Constitution, in the eye of the law, there is in this country no superior, dominant, ruling class of citizens. There is no caste here. Our Constitution is color-blind, and neither knows nor tolerates classes among citizens... In my opinion, the judgment this day rendered will, in time, prove to be quite as pernicious as the decision made by this tribunal in the Dred Scott case.'",
        "attribution": "Plessy v. Ferguson, 163 U.S. 537 (1896), Harlan, J., dissenting. Verbatim; public domain (U.S. government work).",
        "contextNote": "This was a DISSENT — Harlan was the only justice who disagreed, so his words had no legal power in 1896. He compared the majority's decision to Dred Scott, one of the most discredited rulings in the Court's history. Nearly sixty years later, the Court in Brown moved toward his position."
      },
      "questions": [
        "SOURCE IT: Who wrote this, in what year, and in what role? Was this the ruling of the Court or the opinion of one judge who lost? How does knowing it is a dissent change how much power it had in 1896?",
        "CLOSE READING: In your own words, what does Harlan mean by a 'color-blind' Constitution with 'no caste'? Quote the exact words that carry that idea.",
        "PREDICTION AND CORROBORATION: Harlan predicted the decision would prove 'pernicious' (harmful), like Dred Scott. Using what you know about the next 58 years of Jim Crow, was his prediction corroborated by later events? Give one specific example.",
        "CIVIC-JUDGMENT MOVE: The Plessy majority claimed segregation was harmless. Harlan claimed it created a 'caste.' These are opposite claims. Which one survives the evidence better, and how do you know? (Do not answer 'both have a point' without saying which specific claim collapses and why.)",
        "CONNECT: A dissent loses its own case. Explain in two sentences why Harlan's dissent still matters to the history of the Second Reconstruction."
      ]
    },
    "cerOrganizer": {
      "prompt": "Using at least three documents from this unit, answer the driving question: Why did rights guaranteed in the 1860s still have to be fought for a century later, and what finally forced enforcement?",
      "claimGuidance": "Write ONE sentence that answers BOTH halves of the question: (a) why the 1860s guarantees went unenforced for so long, and (b) what finally forced enforcement. A claim takes a position — it is not a summary. Sentence starter you may adapt: 'Rights guaranteed in the 1860s went unenforced for a century because ___, and enforcement finally came only when ___.'",
      "evidenceGuidance": "Choose evidence from at least THREE documents (for example: the 15th Amendment, the Plessy majority, Brown, the Southern Manifesto, the Voting Rights Act). Quote or closely paraphrase the exact words that support your claim. Label each piece with its document. Pick evidence for its argumentative weight, not just because it is easy to copy.",
      "reasoningGuidance": "Explain HOW your evidence proves your claim. You must include at least one SOURCING note (who made a document, when, and why) and one CORROBORATION move (which documents back each other up, OR which claim collapses under the evidence and why). Apply the CIVIC-JUDGMENT MOVE to at least one source: who benefits from its framing, who is harmed, and what happens when people act on it. End by distinguishing a right DECLARED from a right ENFORCED."
    },
    "exitTickets": [
      "Day 1: In one sentence, explain how a right can be written into the Constitution and still be denied in daily life. Use the word 'enforcement.'",
      "Day 2: What actually changed between 1896 and 1954 — the words of the Constitution, or the way the Court interpreted them? Explain how you know.",
      "Day 3: Name one thing a Supreme Court ruling CANNOT do by itself, and name who or what has to act to close that gap.",
      "Day 4: Explain the difference between DECLARING a right and ENFORCING one, and give one specific enforcement tool from the 1964 or 1965 law.",
      "Day 5: Which document changed your thinking the most, and what is one claim from this week that does NOT survive the evidence — and how do you know?"
    ],
    "dbqPrompt": "DBQ: Using the five unit documents (the 15th Amendment, the Plessy majority opinion, the Brown v. Board opinion, the Southern Manifesto, and the Voting Rights Act of 1965) and your knowledge of history, construct an argument that answers: Why did rights guaranteed in the 1860s still have to be fought for a century later, and what finally forced enforcement? Your essay must (1) make a defensible claim, (2) use evidence from at least three documents, (3) include at least one sourcing note and one corroboration move, and (4) apply the civic-judgment move to at least one source (who benefits, who is harmed, what happens when people act on it). Remember: when accounts conflict, they are not automatically equal — say which survives the evidence and which collapses, and why."
  }
};

export const civilRights: ReconstructionUnit = data;
