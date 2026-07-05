import type { ReconstructionUnit } from "./types";

/* Static sample content — authored and adversarially fact-checked.
   Review all materials for accuracy before classroom use. */

const data = {
  "title": "Causes of the Civil War: What the War Was About — and How the Story Changed",
  "course": "U.S. History I",
  "gradeBand": "8-11 (main version Grade 10; middle-school 6/8 support version included)",
  "mainVersion": "Grade 10 (U.S. History I). A five-day inquiry built on unmodified short primary-source excerpts. Students first trace why the fight over slavery centered on the western territories (Missouri Compromise to Kansas-Nebraska to Dred Scott), then read what the seceding states, the Confederate vice president, and the Confederate Constitution said in 1860-1861 in their own words, and finally corroborate those contemporaneous sources against a later \"Lost Cause\" retelling that reframed the war as about \"states' rights\" rather than slavery. The unit is the chronological prequel to the flagship Reconstruction unit and deliberately reuses the same disciplinary method: sourcing, contextualization, corroboration, and the recurring civic-judgment move — not just \"is it biased?\" but \"what does the bias DO?\" Assessment is a document-based question (DBQ) plus a claim-writing seminar. Reading load is roughly one to two short excerpts per class period.",
  "middleAdaptation": "Grades 6-8 support version. Same driving question and the same real sources, but each excerpt is trimmed to two to four sentences and paired with a word bank and sentence starters. Vocabulary is pre-taught with visuals and cognates before reading. Open Socratic seminar is replaced by structured Think-Pair-Share and a \"corroboration chart\" students fill in together. The DBQ becomes a scaffolded single paragraph: one claim + two documents + one sentence of reasoning, using a four-square organizer. Dehumanizing language in period sources is framed ahead of time with a posted class norm and, where appropriate, summarized in a boxed \"historian's note\" rather than read aloud verbatim. Pacing typically extends to six or seven class periods. All differentiation supports listed for each day apply; the middle-school teacher simply leads more of the modeling.",
  "drivingQuestion": "What did Americans in 1860-1861 say the Civil War was about, and why did later generations remember it so differently?",
  "overview": "This unit teaches sourcing and corroboration in their purest form. Students investigate a genuine historical puzzle: the people who led secession in 1860-1861 said, in official public documents, that they were acting to protect slavery — and yet within a generation a powerful retelling (the \"Lost Cause\") had reframed the war as chiefly about \"states' rights,\" downplaying or denying slavery's centrality. The unit does not ask students to take the teacher's word for the cause of secession. It hands them the seceding states' own Declarations of Immediate Causes, Vice President Alexander Stephens's \"Cornerstone Speech,\" and the Confederate Constitution, and asks them to determine what those authors themselves claimed. Then it hands them a later source — a 1920 United Daughters of the Confederacy textbook-screening pamphlet — and asks students to corroborate the two eras against each other and explain the discrepancy. Along the way students learn the antebellum context (why the western territories were the flashpoint), practice historical thinking skills that travel directly into the Reconstruction unit, and build toward a document-based argument. The intellectual payoff is a transferable civic skill: reading a persuasive narrative, checking it against contemporaneous evidence, and asking what the framing accomplishes — what the bias DOES to public memory, monuments, textbooks, and belief. The unit is designed to be rigorous, historically accurate, nonpartisan, and administrator-safe: it treats the slavery-centrality of secession as settled scholarship that students verify with primary evidence, not as a slogan to be asserted.",
  "essentialQuestions": [
    "What did Americans in 1860-1861 say the Civil War was about — and does the evidence they left match what later generations claimed?",
    "How do historians figure out what a conflict was really about when the participants and their descendants disagree? (portable to Reconstruction)",
    "What does a biased narrative DO — how does a retelling change what people believe, teach, and build monuments to? (portable to Reconstruction)",
    "Why did the political fight over slavery come to center on the western territories rather than on the states where slavery already existed?",
    "How and why did the public memory of the war's causes change in the decades after 1865?",
    "When two sources about the same event disagree, what questions help us decide which to trust?"
  ],
  "objectives": [
    "Explain how disputes over the expansion of slavery into the western territories (Missouri Compromise, Kansas-Nebraska Act, Dred Scott v. Sandford) escalated sectional conflict, citing at least two primary sources.",
    "Analyze the Declarations of the Immediate Causes of Secession (South Carolina, Mississippi, Georgia, Texas) and identify, with direct textual evidence, the causes the seceding states themselves named.",
    "Compare the Confederate Constitution and the Cornerstone Speech with the U.S. Constitution to describe how the Confederacy defined itself with respect to slavery.",
    "Corroborate 1861 secession sources against a later Lost Cause source and evaluate how and why the reinterpretation changed the public memory of the war — analyzing what the biased narrative accomplished.",
    "Construct a written, document-based argument (claim, evidence, reasoning) that answers the driving question using at least three primary sources with accurate attribution.",
    "Apply a repeatable set of sourcing questions (who wrote it, when, to whom, and why) to distinguish contemporaneous evidence from later reinterpretation."
  ],
  "vocabulary": [
    {
      "term": "secession",
      "definition": "When a state formally declares it is leaving the United States. Eleven Southern states seceded in 1860-1861 to form the Confederacy."
    },
    {
      "term": "sourcing",
      "definition": "Asking who created a source, when, for whom, and why — before deciding how much to trust what it says."
    },
    {
      "term": "corroboration",
      "definition": "Checking a claim in one source against other sources to see whether they agree. Agreement across independent sources builds confidence; disagreement is a clue to investigate."
    },
    {
      "term": "contextualization",
      "definition": "Placing a source in its time and place so you understand what it meant to the people who made it."
    },
    {
      "term": "historiography",
      "definition": "The study of how the telling of history changes over time and why. It asks not only 'what happened?' but 'how have people explained it differently, and who benefited?'"
    },
    {
      "term": "historical memory",
      "definition": "How later generations remember, commemorate, and teach an event — which can differ from what the evidence from the time shows."
    },
    {
      "term": "Lost Cause",
      "definition": "A set of ideas that spread after 1865 reframing the Confederacy's war as a noble defense of 'states' rights' and downplaying or denying that protecting slavery was central."
    },
    {
      "term": "states' rights",
      "definition": "The idea that individual states hold powers the federal government cannot override. A real constitutional principle — but students test which specific 'right' secessionists said they were defending."
    },
    {
      "term": "popular sovereignty",
      "definition": "The idea that settlers in a territory should vote to decide whether slavery would be allowed there. Central to the Kansas-Nebraska Act."
    },
    {
      "term": "Missouri Compromise (1820)",
      "definition": "A deal that banned slavery in most of the northern part of the Louisiana Purchase territory and admitted Missouri as a slave state and Maine as a free state."
    },
    {
      "term": "Kansas-Nebraska Act (1854)",
      "definition": "A law that repealed the Missouri Compromise line and let territories decide about slavery by popular sovereignty, triggering violence in 'Bleeding Kansas.'"
    },
    {
      "term": "Dred Scott v. Sandford (1857)",
      "definition": "A Supreme Court decision ruling that Black Americans could not be citizens and that Congress had no power to ban slavery in the territories."
    },
    {
      "term": "Fugitive Slave Act",
      "definition": "A federal law requiring the return of enslaved people who escaped to free states, and penalizing those who helped them. Northern resistance to it became a major Southern grievance."
    },
    {
      "term": "Confederacy",
      "definition": "The Confederate States of America, the government formed by the seceding states in 1861."
    },
    {
      "term": "abolition / abolitionist",
      "definition": "The movement to end slavery, and a person who worked to end it (for example, Frederick Douglass)."
    },
    {
      "term": "declaration of causes",
      "definition": "An official document in which four seceding states explained why they were leaving the Union. These name the protection of slavery directly."
    },
    {
      "term": "claim, evidence, reasoning (CER)",
      "definition": "A structure for argument: state a claim, support it with evidence from sources, and explain the reasoning that links the evidence to the claim."
    },
    {
      "term": "primary vs. secondary source",
      "definition": "A primary source was made at the time by a participant or witness; a secondary source is a later account that interprets primary sources."
    }
  ],
  "historicalThinkingSkills": [
    "Sourcing — evaluating who created a source, when, for whom, and why, before trusting its claims",
    "Contextualization — situating each source in the politics of the 1850s-1861 and the postwar decades",
    "Corroboration — cross-checking the 1861 secession sources against one another and against the later Lost Cause retelling",
    "Claim and evidence reasoning — building document-based arguments with accurate citation",
    "Continuity and change over time — tracing how the fight over slavery's expansion escalated and how its remembered meaning shifted after 1865",
    "Historical memory and historiography — analyzing how and why interpretations of the war's causes changed, and what those changes accomplished"
  ],
  "alignmentCategories": [
    "Sourcing and Evidence-Based Reasoning",
    "Slavery, Freedom, and the Sectional Crisis",
    "Constitutional Principles and Federalism",
    "Causation and Contingency in History",
    "Historical Memory and Historiography",
    "Civic Reasoning and Source/Media Literacy",
    "Continuity and Change: Antebellum America to Secession",
    "Primary Source Analysis and Corroboration",
    "Argumentative Writing from Documents (DBQ)"
  ],
  "teacherNotes": [
    "Pacing: five 45-55 minute periods as written. Blocks can combine Days 1-2 and Days 4-5. The middle-school support version typically needs six to seven periods because vocabulary pre-teaching and modeling are expanded. Build in a five-minute norming conversation before the first source that contains period racial language.",
    "Sensitivity when teaching slavery and secession: several genuine sources use dehumanizing language and racist claims. Do not sanitize the evidence, but frame it. Post a norm such as: 'We are studying what people said and why; quoting a source is not endorsing it, and we critique ideas, not classmates.' Consider projecting harsh passages rather than assigning them to be read aloud by an individual student, and never ask a student to read dehumanizing language about their own group aloud. Offer the alternate-response and boxed 'historian's note' options provided in the differentiation for every day.",
    "The 'states' rights' misconception — handle it with the states' own words, not with a counter-slogan. Students often arrive believing the war was 'about states' rights, not slavery.' Rather than contradict them, hand them South Carolina's declaration, which attacks Northern states for exercising THEIR states' rights (personal-liberty laws that resisted the Fugitive Slave Act) and demands stronger FEDERAL enforcement of slavery. The productive framing for students to reach on their own: the right at issue was specifically the right to hold and expand slavery, and secessionists were happy to override Northern states' rights when those cut against slavery. This lets the evidence do the work.",
    "Historical accuracy details to protect your credibility: only four states issued separate formal Declarations of Immediate Causes (South Carolina, Mississippi, Georgia, Texas); other states seceded by ordinance without a separate declaration. The 'Cornerstone Speech' was delivered extemporaneously and survives as a newspaper transcription (reported in the Savannah Republican and widely reprinted, including in Henry Cleveland's 1866 volume on Stephens); Stephens later complained he was imperfectly reported but never disowned its central claim — a fact that itself becomes Day 4 evidence of the reframing.",
    "Nonpartisan stance: present the slavery-centrality of secession as settled scholarship that students verify, not as a political position you are advocating. Stay in the role of evidence-guide. Anchor every claim to a document and a page. This keeps the unit administrator-safe and models the civic skill you want: conclusions follow from evidence.",
    "Protecting students: some students may have Confederate ancestors or strong regional identity. Keep the analysis on documents and ideas, not on identities or present-day loyalties. The question is never 'were your ancestors bad?' but 'what does this 1861 document say, and does the 1920 retelling match it?'",
    "Necessary nuance to prevent oversimplification: Lincoln's First Inaugural explicitly disclaimed any purpose to abolish slavery where it already existed. The 1860-1861 crisis ignited over the EXPANSION of slavery into the territories and the refusal to accept a lawful election — not over immediate abolition, which came later as a Union war aim. Teaching this nuance both increases accuracy and inoculates against the strawman that 'the North invaded to free the slaves,' while still showing slavery at the center of the dispute.",
    "Connection to the Reconstruction unit: this unit installs the exact tools students will reuse — sourcing, corroboration, and 'what does the bias DO?' The Lost Cause narrative students meet on Day 4 is the same interpretive force that shaped how Reconstruction was later remembered, so name the through-line explicitly and tell students they will meet these moves again.",
    "Manage current-events tangents by redirecting to the documents ('what in the source supports that?'). The unit's payoff is a method, not a verdict on any present controversy."
  ],
  "days": [
    {
      "day": 1,
      "title": "The Long Fuse: Slavery's Expansion and Why the Territories Were the Fight",
      "objective": "Students will explain how conflicts over slavery in the western territories escalated from the Missouri Compromise through the Kansas-Nebraska Act to Dred Scott, and will identify from a primary source why the territories, not the existing slave states, became the flashpoint.",
      "bellRinger": "On a U.S. map showing the 1854 territories, answer in writing: 'Slavery already existed in fifteen states. So why would adding new WESTERN territories start a national crisis?' Jot two guesses. You will revisit them at the end of class.",
      "miniLesson": "Concise teacher outline (10-12 min): (1) The balance-of-power logic — each new state adds two senators, so whether the West was slave or free would tip control of the federal government; that is why expansion, not existing slavery, was the fight. (2) Three escalations on a timeline: Missouri Compromise (1820) draws a line and keeps a fragile balance; Kansas-Nebraska Act (1854) erases that line, substituting 'popular sovereignty' and igniting 'Bleeding Kansas' — read the Act's own words that the old restriction 'is hereby declared inoperative and void.' (3) Dred Scott v. Sandford (1857): the Supreme Court rules Congress cannot ban slavery in ANY territory, meaning the free-soil position may be unconstitutional. (4) Frame the discipline: today we practice contextualization — placing a source in its moment — so tomorrow's secession documents make sense.",
      "sourceActivity": {
        "title": "Dred Scott v. Sandford (1857) — majority opinion of Chief Justice Roger B. Taney",
        "excerpt": "They had for more than a century before been regarded as beings of an inferior order, and altogether unfit to associate with the white race, either in social or political relations; and so far inferior, that they had no rights which the white man was bound to respect.",
        "attribution": "Chief Justice Roger B. Taney, majority opinion, Dred Scott v. Sandford, U.S. Supreme Court, 1857. Public domain.",
        "contextNote": "In the same decision the Court also ruled that Congress had no power to prohibit slavery in the federal territories, striking down the kind of restriction the Missouri Compromise had used. Taney's words state a racial hierarchy plainly; we quote them to analyze the Court's reasoning, not to endorse it.",
        "task": "Underline the phrase that tells you how the Court ranked Black Americans' rights. Then, in one sentence, explain how a ruling that Congress cannot ban slavery in the territories would raise the stakes of every future election about the West."
      },
      "discussionQuestion": "If the Supreme Court had just said Congress could not keep slavery out of the territories, why might Northerners and Southerners each feel the ordinary political process was no longer enough to protect their side?",
      "studentTask": "Complete a three-box escalation timeline (Missouri Compromise, Kansas-Nebraska Act, Dred Scott). For each, write (a) what it did in one sentence and (b) whether it calmed or inflamed the conflict over the territories, with a reason. Finish by revising your bell-ringer guesses.",
      "exitTicket": "In one or two sentences: Why were the western territories — rather than the existing slave states — the center of the fight by 1857? Name one of the three events as evidence.",
      "differentiation": {
        "strugglingReaders": "Provide the Taney excerpt with the three hardest phrases glossed in the margin ('beings of an inferior order' = treated as less than human; 'associate' = mix with; 'bound to respect' = required to honor). Offer a two-column 'it says / it means' chart.",
        "advanced": "Add the Kansas-Nebraska Act's popular-sovereignty clause and ask: does 'let the people decide' sound democratic? For whom was it democratic, and for whom was it not? Write a three-sentence response.",
        "englishLearners": "Pre-teach territory, compromise, inferior, and prohibit with visuals and Spanish/Portuguese cognates (territorio, compromiso, inferior, prohibir). Provide sentence frames: 'The territories mattered because ___. Dred Scott raised the stakes because ___.'",
        "iepAnd504": "Provide the timeline partially completed with one box already modeled. Allow extended time and a printed copy with enlarged font. Chunk the reading into one sentence at a time with a check-in after each.",
        "executiveFunction": "Give a visible checklist (bell ringer, read, underline, timeline, exit ticket) with checkboxes and a per-step time estimate. Provide a printed timeline template so no time is lost to formatting.",
        "alternateResponse": "Students may record the exit-ticket answer as a 20-second voice memo, or draw the escalation as a rising-tension line graph with three labeled points instead of writing sentences."
      }
    },
    {
      "day": 2,
      "title": "1860 and Secession: What the Declarations Actually Said",
      "objective": "Students will analyze the seceding states' own Declarations of Immediate Causes and identify, with direct textual evidence, the causes those states named — and will test the 'states' rights' explanation against the states' own words.",
      "bellRinger": "Quick-write: 'If a group formally announces WHY it is quitting, whose explanation of their reasons should we trust most — theirs at the time, or someone's summary a hundred years later?' Give one reason.",
      "miniLesson": "Concise teacher outline (8-10 min): (1) The 1860 election — Lincoln wins with zero electoral votes from the Deep South; within weeks South Carolina secedes, followed by others. (2) Four states published formal Declarations of Immediate Causes (South Carolina, Mississippi, Georgia, Texas). Today we read the states in their own words rather than a textbook summary. (3) Teach the sourcing move: these are official public documents meant to justify a momentous act to the world — so they tell us what leaders themselves claimed was at stake. (4) Preview a puzzle for Day 4: keep in mind exactly what words these documents use, because a later retelling will describe the same event very differently.",
      "sourceActivity": {
        "title": "A Declaration of the Immediate Causes which Induce and Justify the Secession of the State of Mississippi (1861)",
        "excerpt": "Our position is thoroughly identified with the institution of slavery — the greatest material interest of the world. Its labor supplies the product which constitutes by far the largest and most important portions of commerce of the earth. ... a blow at slavery is a blow at commerce and civilization.",
        "attribution": "Mississippi Declaration of the Immediate Causes, adopted January 1861. Public domain.",
        "contextNote": "Mississippi's convention adopted this to justify secession. The word 'institution' is the period euphemism for slavery. The document goes on to list grievances, nearly all tied to threats to slavery.",
        "task": "Highlight every place the document names slavery or its economic value. Then complete the sentence with a quotation: 'According to Mississippi's own declaration, secession was justified because ______.'"
      },
      "discussionQuestion": "South Carolina's declaration condemns Northern states for passing personal-liberty laws that weakened the federal Fugitive Slave Act, and demands stronger federal enforcement. If the South's core principle were simply 'states should decide for themselves,' how do we explain their anger at Northern states doing exactly that?",
      "studentTask": "Jigsaw the four declarations. In small groups, each student skims one (Mississippi, South Carolina, Georgia, or Texas) and records one sentence that names a cause. Groups then build a shared corroboration chart: 'What cause did each state name?' and 'Do the four agree or disagree?' Write one sentence stating the pattern.",
      "exitTicket": "In one sentence, using the word 'slavery' or a direct quotation: What did the seceding states themselves say secession was about? Then name the historical thinking skill you just used (sourcing or corroboration) and why.",
      "differentiation": {
        "strugglingReaders": "Provide a two-to-three sentence version of each of the four declarations with the key clause bolded, so the jigsaw reading is short and the evidence is findable.",
        "advanced": "Assign the Georgia declaration, which frames the dispute in economic and party-political terms, and ask: does Georgia's economic framing contradict or reinforce the claim that slavery was central? Defend your answer with a quotation.",
        "englishLearners": "Provide the excerpt with a word bank (institution = slavery here; commerce = trade; secession = leaving) and a sentence frame: 'Mississippi said secession was about ___ because the document says \"___.\"' Pair with a fluent partner for the jigsaw.",
        "iepAnd504": "Reduce the jigsaw to two declarations instead of four. Provide the corroboration chart pre-labeled. Allow verbal reporting of the group's pattern statement instead of writing it independently.",
        "executiveFunction": "Assign explicit group roles (reader, highlighter, chart-recorder, reporter) with a timer for each phase so the jigsaw does not stall. Provide the chart on paper, pre-drawn.",
        "alternateResponse": "A student may contribute by placing sticky notes with one quotation each onto a shared class chart, or by dictating the group's pattern sentence to a scribe or device."
      }
    },
    {
      "day": 3,
      "title": "The Confederacy in Its Own Words: Cornerstone Speech and the Two Constitutions",
      "objective": "Students will compare the Cornerstone Speech and the Confederate Constitution with the U.S. Constitution and describe, with textual evidence, how the new Confederate government defined itself with respect to slavery.",
      "bellRinger": "Predict: 'The U.S. Constitution avoids the words \"slave\" and \"slavery,\" using phrases like \"person held to service.\" Do you expect the Confederate Constitution to be more, less, or equally direct about slavery? Why?'",
      "miniLesson": "Concise teacher outline (8-10 min): (1) Weeks after the declarations, Confederate leaders described their new nation's founding idea and wrote its constitution. (2) Vice President Alexander Stephens's Cornerstone Speech (Savannah, March 1861) states the government's founding principle explicitly — note it survives as a newspaper transcription and Stephens spoke without a manuscript (flag this; it matters on Day 4). (3) The Confederate Constitution closely copies the U.S. Constitution but makes pointed changes: it names 'negro slaves' directly, forbids any law 'impairing the right of property in negro slaves,' and requires that slavery be 'recognized and protected' in any territory the Confederacy might acquire. (4) Method today: close comparison of two documents — reading what was kept, what was changed, and what those changes reveal about priorities.",
      "sourceActivity": {
        "title": "Alexander H. Stephens, 'Cornerstone Speech,' Savannah, Georgia, March 21, 1861",
        "excerpt": "Our new government is founded upon exactly the opposite idea; its foundations are laid, its corner-stone rests, upon the great truth that the negro is not equal to the white man; that slavery — subordination to the superior race — is his natural and normal condition.",
        "attribution": "Alexander H. Stephens, Vice President of the Confederacy, as transcribed by the Savannah Republican, March 1861. Public domain.",
        "contextNote": "Stephens spoke extemporaneously; the surviving text is a newspaper transcription (reported in the Savannah Republican and widely reprinted). He later objected that he was imperfectly reported, but never disowned the speech's central claim. Remember this for Day 4 — the same man will later describe the war very differently. The language is offensive; we analyze it as evidence of what leaders publicly asserted.",
        "task": "Circle the exact word Stephens uses for the government's 'corner-stone.' In one sentence, state what Stephens said the Confederacy was founded upon — quoting no more than five words."
      },
      "discussionQuestion": "The Confederate Constitution copied most of the U.S. Constitution word-for-word but deliberately changed the parts about slavery — naming it directly and protecting it in future territories. What do the specific edits a writer chooses to make tell you about what mattered most to them?",
      "studentTask": "Complete a side-by-side comparison chart. Left column: U.S. Constitution (never uses the word 'slave,' says 'person held to service or labour'). Right column: Confederate Constitution clauses that name and protect 'negro slaves' and require protection of slavery in the territories. Bottom row: write one sentence answering 'What do the changes reveal about the Confederacy's priorities?'",
      "exitTicket": "Corroboration check in one or two sentences: Do the Cornerstone Speech and the Confederate Constitution AGREE with what the secession declarations said yesterday, or contradict them? Cite one detail.",
      "differentiation": {
        "strugglingReaders": "Provide the two constitutional clauses pre-excerpted and simplified side by side, with the contrasting words ('person held to service' vs. 'negro slaves') color-coded so the comparison is visual, not dependent on locating text.",
        "advanced": "Add the Confederate territorial clause and ask students to connect it back to Day 1: how does the Confederacy's demand to protect slavery in future territories echo the very fight over expansion that started the crisis? One paragraph.",
        "englishLearners": "Pre-teach cornerstone (the first, most important stone of a building — provide an image), subordination, and impair. Provide a frame: 'The U.S. Constitution says ___, but the Confederate Constitution says ___. This shows ___.'",
        "iepAnd504": "Provide the comparison chart with the U.S. column already filled in, so the student focuses on locating and placing only the Confederate clauses. Allow extended time and reduce to two clause-pairs.",
        "executiveFunction": "Provide a two-column graphic organizer with sentence stems in each cell. Use a visible timer for the compare step. Break the exit ticket into two guided halves ('Do they agree? / What is your evidence?').",
        "alternateResponse": "Students may complete the comparison as a labeled two-column poster or a short screen-recording narrating the differences, instead of written sentences."
      }
    },
    {
      "day": 4,
      "title": "How the Story Changed: The Lost Cause and What the Bias DID",
      "objective": "Students will corroborate the 1861 secession sources against a later Lost Cause source, explain the discrepancy using sourcing, and evaluate what the reinterpretation accomplished — the pure 'what does the bias DO?' case.",
      "bellRinger": "Quick-write: 'Imagine a group loses a war and then gets to write the schoolbooks about why the war happened. What might they be tempted to leave out or change — and why would it matter?'",
      "miniLesson": "Concise teacher outline (10-12 min): (1) After 1865, a movement often called the 'Lost Cause' reframed the Confederacy's war as a noble defense of 'states' rights' and downplayed or denied that protecting slavery was central. (2) The mechanism was concrete: veterans' groups and the United Daughters of the Confederacy promoted monuments, textbooks, and reunion narratives; a 1920 pamphlet by UDC Historian General Mildred Rutherford actually instructed schools and libraries which books to REJECT. (3) A striking corroboration case: Alexander Stephens, who in 1861 called slavery the Confederacy's 'cornerstone,' after the war (in his 1868-1870 'A Constitutional View of the Late War Between the States') recast the conflict as a constitutional dispute over federal versus national power rather than slavery — the same author, two very different framings. (4) Today's discipline is the unit's core civic move: corroborate across time, then ask not merely 'is this biased?' but 'what did this bias DO?' — to monuments, to what generations of students were taught, to public memory itself.",
      "sourceActivity": {
        "title": "Mildred Lewis Rutherford, 'A Measuring Rod to Test Text Books' (1920), instructions to schools and libraries",
        "excerpt": "Reject a book that says the South fought to hold her slaves. ... Reject a book that calls the Confederate soldier a traitor or rebel, and the war a rebellion.",
        "attribution": "Mildred Lewis Rutherford, Historian General, United Daughters of the Confederacy, 'A Measuring Rod to Test Text Books and Reference Books in Schools, Colleges and Libraries,' 1920. Public domain.",
        "contextNote": "This pamphlet was distributed to help schools and libraries screen textbooks. It tells us not what happened in 1861 but how the war was being re-narrated by 1920 — and it shows the reframing was organized and deliberate, aimed directly at what children would be taught.",
        "task": "Set this 1920 instruction next to the 1861 Mississippi declaration and Cornerstone Speech from Days 2-3. In two sentences: (a) Does the 1920 source's claim that the South did NOT fight to hold slaves match the 1861 evidence? (b) What was this pamphlet trying to DO?"
      },
      "discussionQuestion": "The 1861 sources and the 1920 source describe the SAME war's cause in opposite ways. Using sourcing (who made each, when, and why), which should carry more weight for determining what secession was about — and separately, what did the later narrative accomplish in the world (in classrooms, on courthouse lawns, in public memory)?",
      "studentTask": "Complete a 'Then vs. Later' corroboration chart with three columns: the 1861 claim (quote the declarations/Cornerstone), the 1920 claim (quote Rutherford), and 'What the bias did.' In the third column, list at least two concrete effects (for example: shaped textbooks students read for decades; justified monuments; softened the public's understanding of slavery's role).",
      "exitTicket": "Answer the unit's recurring question in two or three sentences: This is not just 'was the Lost Cause biased?' — it is 'what did the bias DO?' Give your answer with one specific effect and one piece of 1861 evidence the retelling had to override.",
      "differentiation": {
        "strugglingReaders": "Provide a two-column 'THEN (1861) / LATER (1920)' handout with the 1861 quotations already placed on the left, so students only add the 1920 claim and the 'what it did' column. Provide the effects as a checklist to select from and justify.",
        "advanced": "Add the Stephens 1861-versus-1868 reversal and ask students to write a short paragraph on why the SAME author's later account is weaker evidence for the war's cause than his 1861 speech — and what motive could explain the change.",
        "englishLearners": "Pre-teach reject, rebel, and narrative (the story someone tells). Provide sentence frames: 'In 1861 the South said the war was about ___. In 1920 the pamphlet said it was NOT about ___. This bias DID ___.'",
        "iepAnd504": "Provide the corroboration chart mostly completed, with the student adding only the 'what the bias did' column from a provided menu. Allow oral explanation of the exit ticket. Preview the offensive-language norm privately beforehand.",
        "executiveFunction": "Give the lesson as three numbered stations (Read 1861 / Read 1920 / Compare and answer) with a timer and a one-line goal per station. Provide the chart pre-formatted so no time is spent on layout.",
        "alternateResponse": "Students may present the 'THEN vs. LATER' contrast as a two-panel visual (left = 1861 words, right = 1920 words, arrow labeled 'what changed and what it did'), or record a 30-second spoken corroboration instead of writing."
      }
    },
    {
      "day": 5,
      "title": "Claim-Writing Seminar and DBQ-Style Assessment",
      "objective": "Students will construct a document-based argument answering the driving question, using at least three primary sources with accurate attribution, sound reasoning, and explicit corroboration across the 1861 and later sources.",
      "bellRinger": "On a note card, draft a one-sentence claim answering: 'What did Americans in 1860-1861 say the war was about, and why did later generations remember it differently?' You will revise this after the seminar.",
      "miniLesson": "Concise teacher outline (8 min): (1) Model a strong claim versus a weak one. Weak: 'The Civil War was complicated.' Strong: 'The 1861 sources overwhelmingly named the protection and expansion of slavery, while the later Lost Cause retelling reframed the war as \"states' rights\" — a change we can trace with sourcing.' (2) Model embedding one document as evidence with attribution and one sentence of reasoning that links it to the claim. (3) Add the necessary nuance: Lincoln's First Inaugural shows the immediate 1861 fight was over slavery's EXPANSION and secession, not immediate abolition — a mature argument accounts for this rather than ignoring it. (4) Hand off to the seminar, then the DBQ.",
      "sourceActivity": {
        "title": "Frederick Douglass, 'What to the Slave Is the Fourth of July?' (Rochester, New York, July 5, 1852)",
        "excerpt": "What, to the American slave, is your Fourth of July? I answer: a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham.",
        "attribution": "Frederick Douglass, address to the Rochester Ladies' Anti-Slavery Society, July 5, 1852. Public domain.",
        "contextNote": "Delivered nine years before secession, this abolitionist address voices the perspective of the enslaved on American liberty. It is included to test the later Lost Cause claim that slavery was mild or benign — and to widen the seminar beyond the secessionists' own framing.",
        "task": "In the seminar, use this source to answer: whose account of slavery does the Lost Cause narrative leave out, and how does including Douglass change what 'what the war was about' looks like?"
      },
      "discussionQuestion": "Seminar question: Given everything from Days 1-4, what is the most defensible answer to the driving question — and what is the single strongest piece of evidence someone who disagreed with you might raise, and how would you respond to it?",
      "studentTask": "Participate in a 15-minute Socratic seminar building toward the claim, then independently write a DBQ response using at least three of the unit's documents. The response must include a clear claim, evidence with attribution from both an 1861 source and the later Lost Cause source, corroboration across them, and one sentence acknowledging Lincoln's First-Inaugural nuance.",
      "exitTicket": "Revise your bell-ringer claim into a final one-sentence thesis, and name the two documents you will lean on most and why.",
      "differentiation": {
        "strugglingReaders": "Provide a claim template with blanks ('In 1861, sources such as ___ said the war was about ___. Later, ___ retold it as ___. The 1861 evidence is stronger because ___.') and a document menu with the key quotation pre-pulled for each.",
        "advanced": "Require engagement with the Lincoln nuance and the Stephens reversal, and ask for a counterargument paragraph: state the strongest 'states' rights' case honestly, then refute it using the states' own words. Optionally begin the historiography extension.",
        "englishLearners": "Allow the seminar contribution in a prepared sentence written in advance; provide bilingual glossary cards for claim, evidence, reasoning, corroboration. Permit the DBQ to be drafted with sentence frames and a partner-checked outline first.",
        "iepAnd504": "Reduce the document minimum to two clearly contrasting sources (one 1861, one Lost Cause). Provide the CER organizer partly completed and extended time; allow the seminar 'participation' to be met via a written response or one prepared comment.",
        "executiveFunction": "Provide a DBQ checklist (claim written, three docs chosen, attribution added, corroboration sentence, nuance sentence, reread) with checkboxes and time budget. Offer a quiet-start option and a visible seminar speaking order so turn-taking is predictable.",
        "alternateResponse": "Students may deliver the argument as a recorded three-minute oral 'closing statement' with citations, or as an annotated document set with spoken reasoning, instead of the written DBQ, meeting the same rubric criteria."
      }
    }
  ],
  "quiz": [
    {
      "question": "The Kansas-Nebraska Act of 1854 sharply increased sectional tension mainly because it —",
      "choices": [
        "Immediately abolished slavery in the western territories",
        "Repealed the Missouri Compromise line and let territories decide about slavery by popular sovereignty",
        "Admitted California as a free state",
        "Required Northern states to enforce the Fugitive Slave Act"
      ],
      "answer": "Repealed the Missouri Compromise line and let territories decide about slavery by popular sovereignty",
      "explanation": "The Act declared the earlier Missouri Compromise restriction 'inoperative and void' and substituted popular sovereignty, reopening to slavery land that had been closed to it. This triggered 'Bleeding Kansas' and showed why control of the territories was the flashpoint."
    },
    {
      "question": "In Dred Scott v. Sandford (1857), the Supreme Court ruled that —",
      "choices": [
        "Enslaved people who reached free soil were automatically freed",
        "Black Americans could be citizens with full rights",
        "Black Americans were not citizens and Congress could not ban slavery in the territories",
        "Popular sovereignty was unconstitutional"
      ],
      "answer": "Black Americans were not citizens and Congress could not ban slavery in the territories",
      "explanation": "Chief Justice Taney's opinion denied Black citizenship and struck down federal power to prohibit slavery in the territories, undermining the free-soil position and raising the stakes of the 1860 election."
    },
    {
      "question": "The Declarations of the Immediate Causes issued by South Carolina, Mississippi, Georgia, and Texas most directly named which cause of secession?",
      "choices": [
        "Tariffs and taxes alone",
        "The protection of slavery",
        "Disputes over railroad routes",
        "Immigration policy"
      ],
      "answer": "The protection of slavery",
      "explanation": "All four declarations center on slavery: Mississippi calls its position 'thoroughly identified with the institution of slavery,' and South Carolina attacks Northern resistance to the Fugitive Slave Act. Students corroborate this across the four documents rather than taking it on assertion."
    },
    {
      "question": "Short answer: In the 'Cornerstone Speech,' what did Alexander Stephens say the Confederacy's founding 'cornerstone' rested upon?",
      "answer": "That the 'negro is not equal to the white man' and that slavery was his 'natural and normal condition' — that is, slavery and a claim of white supremacy.",
      "explanation": "Stephens stated the government's foundational idea explicitly. Because he later recast the war as being about constitutional principle rather than slavery, his 1861 speech becomes key evidence in the Day 4 corroboration lesson."
    },
    {
      "question": "How did the Confederate Constitution (1861) differ from the U.S. Constitution regarding slavery?",
      "choices": [
        "It never mentioned slavery, like the U.S. Constitution",
        "It named 'negro slaves' directly and explicitly protected slave property, including in future territories",
        "It abolished slavery after twenty years",
        "It left slavery entirely to the individual states with no mention"
      ],
      "answer": "It named 'negro slaves' directly and explicitly protected slave property, including in future territories",
      "explanation": "The U.S. Constitution avoided the word 'slave,' using phrases like 'person held to service or labour.' The Confederate Constitution deliberately named and protected slavery, and required its protection in any territory the Confederacy might acquire — the edits reveal the framers' priorities."
    },
    {
      "question": "Short answer: The 'Lost Cause' reinterpretation argued the war was about ______ rather than ______. Explain why corroboration with 1861 sources tests that claim.",
      "answer": "About 'states' rights' rather than slavery. Corroborating the Lost Cause claim against the 1861 declarations, the Cornerstone Speech, and the Confederate Constitution shows those contemporaneous sources named slavery directly, so the later 'states' rights' framing does not match the primary evidence from the time.",
      "explanation": "This is the unit's core corroboration move. It also surfaces the nuance that secessionists opposed Northern states' rights (personal-liberty laws) and demanded federal enforcement of slavery — so the 'right' at issue was specifically the right to hold and expand slavery."
    },
    {
      "question": "A student finds a 1920 pamphlet telling schools to reject any textbook that 'says the South fought to hold her slaves.' Using sourcing and corroboration, the best historical conclusion is that —",
      "choices": [
        "The pamphlet proves slavery was not a cause, because it is a written source",
        "The pamphlet is contemporaneous 1861 evidence and should outweigh the declarations",
        "The pamphlet shows a later, organized effort to reshape memory that contradicts the 1861 primary evidence naming slavery",
        "The pamphlet and the 1861 declarations agree with each other"
      ],
      "answer": "The pamphlet shows a later, organized effort to reshape memory that contradicts the 1861 primary evidence naming slavery",
      "explanation": "Sourcing (made in 1920, to screen schoolbooks) tells us it is evidence of memory-making, not of 1861 motives. Corroboration shows it conflicts with the seceding states' own words — a clear case of what a biased narrative was designed to DO."
    },
    {
      "question": "Short answer: In his First Inaugural (1861) Lincoln said he had 'no purpose, directly or indirectly, to interfere with the institution of slavery in the States where it exists.' What does this reveal about what the 1860-1861 dispute was actually over?",
      "answer": "It shows the immediate crisis was over the EXPANSION of slavery into the western territories and the refusal to accept Lincoln's lawful election — not over immediately abolishing slavery where it already existed, which became a Union war aim later.",
      "explanation": "Teaching this nuance keeps the account accurate: slavery was central to the conflict, but the 1861 trigger was expansion and secession, not abolition. It also refutes the strawman that 'the North invaded to free the slaves.'"
    }
  ],
  "dbq": {
    "prompt": "Using the documents below and your knowledge of the period, answer the driving question: What did Americans in 1860-1861 say the Civil War was about, and why did later generations remember it so differently? Develop a clear claim, support it with evidence from at least three documents (with attribution), corroborate the 1861 sources against the later source, and account for the nuance in Lincoln's position.",
    "guidance": "A strong response does four things. (1) Makes a defensible claim that answers BOTH halves of the question — what 1861 sources said AND why the later memory differs. (2) Cites at least three documents accurately, including at least one 1861 source (A, B, or C) and the later source (E). (3) Corroborates: explicitly notes whether the sources agree, and uses sourcing (who made each, when, and why) to weigh them. (4) Handles nuance: uses Document D to show the 1861 fight was over slavery's expansion and secession, not immediate abolition, without abandoning the claim that slavery was central. Top responses also name what the later narrative DID — its effect on textbooks, monuments, or public memory. Avoid slogans; let the documents carry the argument.",
    "documents": [
      {
        "title": "Document A — Declaration of the Immediate Causes of Secession, South Carolina (December 24, 1860)",
        "excerpt": "The States of Maine, New Hampshire, Vermont, Massachusetts, Connecticut, Rhode Island, New York, Pennsylvania, Illinois, Indiana, Michigan, Wisconsin and Iowa, have enacted laws which either nullify the Acts of Congress or render useless any attempt to execute them. ... A geographical line has been drawn across the Union, and all the States north of that line have united in the election of a man to the high office of President of the United States whose opinions and purposes are hostile to slavery.",
        "attribution": "South Carolina Declaration of the Immediate Causes, December 1860. Public domain.",
        "contextNote": "The 'Acts of Congress' South Carolina complains are being nullified include the federal Fugitive Slave Act. Note the paradox for the 'states' rights' thesis: South Carolina is condemning Northern states for exercising their own states' rights and demanding stronger federal enforcement of slavery."
      },
      {
        "title": "Document B — Alexander H. Stephens, 'Cornerstone Speech' (March 21, 1861)",
        "excerpt": "Our new government is founded upon exactly the opposite idea; its foundations are laid, its corner-stone rests, upon the great truth that the negro is not equal to the white man; that slavery — subordination to the superior race — is his natural and normal condition.",
        "attribution": "Alexander H. Stephens, Vice President of the Confederacy, as transcribed by the Savannah Republican, 1861. Public domain.",
        "contextNote": "Stephens spoke without a manuscript; the text is a newspaper transcription. After the war he recast the conflict as a constitutional dispute rather than one about slavery — making his own two accounts a corroboration case."
      },
      {
        "title": "Document C — Constitution of the Confederate States (adopted March 11, 1861)",
        "excerpt": "No bill of attainder, ex post facto law, or law denying or impairing the right of property in negro slaves shall be passed. ... In all such territory the institution of negro slavery ... shall be recognized and protected by Congress and by the Territorial government.",
        "attribution": "Confederate Constitution, Article I, Section 9 and Article IV, Section 3, 1861. Public domain.",
        "contextNote": "The Confederate Constitution copies much of the U.S. Constitution but, unlike it, names 'negro slaves' directly and guarantees slavery's protection in future territories. The U.S. Constitution never used the word 'slave,' preferring 'person held to service or labour.'"
      },
      {
        "title": "Document D — Abraham Lincoln, First Inaugural Address (March 4, 1861)",
        "excerpt": "I have no purpose, directly or indirectly, to interfere with the institution of slavery in the States where it exists. I believe I have no lawful right to do so, and I have no inclination to do so. ... In your hands, my dissatisfied fellow-countrymen, and not in mine, is the momentous issue of civil war.",
        "attribution": "Abraham Lincoln, First Inaugural Address, March 4, 1861. Public domain.",
        "contextNote": "Lincoln disclaimed any intent to abolish slavery where it already existed. This document supplies the necessary nuance: the immediate 1861 conflict turned on slavery's expansion into the territories and on secession itself, not on immediate abolition."
      },
      {
        "title": "Document E — Mildred Lewis Rutherford, 'A Measuring Rod to Test Text Books' (1920)",
        "excerpt": "Reject a book that says the South fought to hold her slaves. ... Reject a book that calls the Confederate soldier a traitor or rebel, and the war a rebellion.",
        "attribution": "Mildred Lewis Rutherford, Historian General, United Daughters of the Confederacy, 1920. Public domain.",
        "contextNote": "Distributed to help schools and libraries screen textbooks, this later source documents the organized effort to re-narrate the war's causes. It is evidence of historical memory-making, not of 1861 motives — and it directly contradicts Documents A, B, and C."
      }
    ]
  },
  "rubric": {
    "levels": [
      "4 — Exemplary",
      "3 — Proficient",
      "2 — Developing",
      "1 — Beginning"
    ],
    "criteria": [
      {
        "name": "Claim / Thesis",
        "descriptors": [
          "States a precise, defensible claim that answers BOTH halves of the driving question (what 1861 sources said and why later memory differs) and previews the reasoning.",
          "States a clear claim that answers the driving question, addressing both halves though one may be lighter.",
          "States a claim, but it is vague, one-sided (only 1861 or only memory), or restates the prompt.",
          "No clear claim, or a claim unsupported by and disconnected from the documents."
        ]
      },
      {
        "name": "Use of Evidence (Primary Sources)",
        "descriptors": [
          "Integrates at least three documents with accurate attribution, quoting precisely and choosing the most telling evidence, including both an 1861 source and the later source.",
          "Uses at least three documents with generally accurate attribution and relevant quotation.",
          "Uses one or two documents, or cites loosely without attribution or with minor inaccuracy.",
          "Little or no textual evidence; assertions stand without document support."
        ]
      },
      {
        "name": "Sourcing and Corroboration",
        "descriptors": [
          "Explicitly weighs sources by who made them, when, and why, and corroborates the 1861 sources against the later source to explain the discrepancy.",
          "Compares sources across time and notes agreement or conflict, with some attention to who made each and why.",
          "Mentions more than one source but does not corroborate them or consider their origins.",
          "Treats all sources as equal facts; no sourcing or corroboration."
        ]
      },
      {
        "name": "Contextualization",
        "descriptors": [
          "Situates the sources in the antebellum expansion crisis and the postwar memory struggle, and explains how context shaped what each source claimed.",
          "Provides accurate context (territories, 1860 election, or postwar Lost Cause) that supports the argument.",
          "Offers thin or partially inaccurate context, or context not connected to the argument.",
          "No context, or context that misplaces the sources in time."
        ]
      },
      {
        "name": "Historical Memory / Historiographical Reasoning",
        "descriptors": [
          "Analyzes how AND why the interpretation changed after 1865 and articulates what the biased narrative DID (textbooks, monuments, public memory), grounded in evidence.",
          "Explains that the interpretation changed and identifies at least one effect of the later narrative.",
          "Notes that the story changed but does not explain why or what it accomplished.",
          "Does not address the change in memory over time."
        ]
      },
      {
        "name": "Nuance and Counterargument",
        "descriptors": [
          "Honestly states the strongest 'states' rights' or Lincoln-nuance objection and answers it with the states' own words, strengthening rather than dodging the claim.",
          "Acknowledges the Lincoln nuance or a counterpoint and responds to it adequately.",
          "Mentions a complication but does not engage it, or oversimplifies ('slavery only' or 'states' rights only').",
          "Ignores nuance and counterargument entirely."
        ]
      },
      {
        "name": "Writing, Organization, and Conventions",
        "descriptors": [
          "Tightly organized, with each paragraph advancing the argument; fluent, precise prose with accurate citation formatting.",
          "Clear organization and mostly correct conventions; argument is easy to follow.",
          "Some organizational lapses or errors that occasionally obscure meaning.",
          "Disorganized or error-filled to the point that the argument is hard to follow."
        ]
      }
    ]
  },
  "modifiedReading": "Reading-support version (shorter sentences, pre-taught vocabulary in bold). Before the Civil War, the United States kept arguing about one thing: whether slavery could spread into the new western lands. Slavery already existed in the South. The fight was about the FUTURE — the territories. Each new state got two senators. So if the West became free, the South feared it would lose power in the national government. That is why the territories mattered so much. In 1820 the Missouri Compromise drew a line: slavery was banned north of it. In 1854 the Kansas-Nebraska Act erased that line and said settlers could VOTE on slavery. Fighting broke out in Kansas. In 1857 the Supreme Court's Dred Scott decision said Congress could not ban slavery in ANY territory. In 1860 Abraham Lincoln was elected president. He was against slavery spreading. Southern states began to SECEDE, meaning they left the United States. They formed the Confederacy. Four states — South Carolina, Mississippi, Georgia, and Texas — wrote official papers called Declarations of Causes. In those papers, the states said, in their own words, that they were leaving mainly to protect SLAVERY. The Confederate vice president, Alexander Stephens, gave a speech calling slavery the 'cornerstone' of the new government. The Confederate Constitution named and protected slavery, which the U.S. Constitution never did directly. Here is the puzzle. Many years later, a story called the LOST CAUSE said the war was really about 'states' rights,' not slavery. In 1920 a pamphlet even told schools to reject any book that said the South fought to keep slaves. But that later story does not match the words people wrote in 1861. Historians solve this puzzle with two tools: SOURCING (who wrote it, when, and why) and CORROBORATION (checking sources against each other). The 1861 sources agree with one another and name slavery. The later story changed the memory. Your job is to read the real documents and decide for yourself — and to ask not only 'is this story biased?' but 'what did the bias DO?'",
  "advancedExtension": "Historiography extension: How and why interpretations of the war changed. This challenge asks strong students to become historians of history itself. Research question: Between roughly 1865 and today, how did the mainstream explanation of the Civil War's causes shift, and what forces drove each shift? Investigate three phases. (1) The Lost Cause and the reconciliationist era (roughly 1880s-1930s): how organizations such as the United Daughters of the Confederacy and United Confederate Veterans used monuments, textbook-screening pamphlets (Rutherford's 'Measuring Rod'), and reunion narratives to reframe the war as about 'states' rights,' and how the professional 'Dunning School' of historians lent academic cover. (2) The revisionist and neo-abolitionist correction (mid-to-late twentieth century): how historians returned to the primary record — the declarations, the Cornerstone Speech, the Confederate Constitution — and re-centered slavery. David Blight's 'Race and Reunion' analyzes how reconciliation between white North and South was purchased partly by marginalizing Black memory of emancipation; Eric Foner's scholarship reconnected the war and Reconstruction to the struggle over slavery and citizenship. (3) The public-memory reckoning of the twenty-first century (monument debates, textbook revisions). Deliverable: a four-to-six paragraph historiographical essay that (a) traces the change, (b) explains WHY each interpretation arose (who benefited, what audience it served, what evidence it emphasized or suppressed), and (c) applies the unit's central question — what did each retelling DO? Students must cite at least two primary sources from the unit AND correctly distinguish a secondary interpretation from a primary source. Bridge to the flagship unit: the same Lost Cause and Dunning-era forces reshaped how Reconstruction was remembered; students should end by predicting one way this interpretive struggle will reappear in the Reconstruction unit.",
  "subPlan": "Substitute plan (no content expertise required; fully self-contained for one 45-55 minute period). Materials: the printed Student Packet (or copies of Documents A, B, C, and E from the DBQ), the source-analysis worksheet, and blank paper. Opening (5 min): The substitute reads aloud, or has students read silently, this framing: 'Today you are a historian solving a puzzle. In 1860-1861, the states that left the Union wrote official documents explaining why. Decades later, a different story became popular. Your job is to compare them.' Post the class norm: 'We study what people said and why. Some old documents use offensive language; quoting a source is not agreeing with it, and we critique ideas, not classmates.' Work (30-35 min): Students read the short excerpts and complete the source-analysis worksheet independently, answering for each document: Who wrote it? When? Why? What does it say the war/secession was about? Then they answer two comparison questions in writing: (1) Do the 1861 documents (A, B, C) agree with each other about the cause? Quote one. (2) Does the 1920 document (E) match the 1861 documents, or contradict them? What was the 1920 document trying to do? Students who finish early write a one-paragraph answer to the driving question using two documents. Close (5 min): Students write an exit ticket: 'One thing the 1861 sources said the war was about, and one reason later generations may have remembered it differently.' Collection: The substitute collects all worksheets and exit tickets for the teacher. No technology, logins, videos, or grading judgment are required; an answer key note for the substitute: the 1861 documents name slavery directly and agree with one another; the 1920 pamphlet contradicts them and was meant to shape what schools taught.",
  "dashboard": {
    "focusDay": "Day 4 — How the Story Changed: The Lost Cause and What the Bias DID",
    "todaysObjective": "Students will corroborate the 1861 secession sources against a later Lost Cause source, explain the discrepancy using sourcing, and evaluate what the reinterpretation accomplished — the unit's pure 'what does the bias DO?' case.",
    "essentialQuestion": "The 1861 sources and a 1920 source describe the same war's cause in opposite ways. Which should carry more weight for determining what secession was about — and separately, what did the later narrative DO to textbooks, monuments, and public memory?",
    "sourceOfTheDay": {
      "title": "Mildred Lewis Rutherford, 'A Measuring Rod to Test Text Books' (1920)",
      "excerpt": "Reject a book that says the South fought to hold her slaves. ... Reject a book that calls the Confederate soldier a traitor or rebel, and the war a rebellion.",
      "attribution": "Mildred Lewis Rutherford, Historian General, United Daughters of the Confederacy, 1920. Public domain.",
      "contextNote": "A pamphlet distributed to help schools and libraries screen textbooks. It documents an organized effort to re-narrate the war's causes; it is evidence of memory-making, not of 1861 motives.",
      "task": "Set this 1920 instruction beside the 1861 Mississippi declaration and Cornerstone Speech. In two sentences, state (a) whether the 1920 claim matches the 1861 evidence and (b) what this pamphlet was trying to DO."
    },
    "keyVocabulary": [
      {
        "term": "corroboration",
        "definition": "Checking a claim in one source against other sources to see whether they agree; disagreement is a clue to investigate."
      },
      {
        "term": "historical memory",
        "definition": "How later generations remember and teach an event, which can differ from what the evidence from the time shows."
      },
      {
        "term": "Lost Cause",
        "definition": "A post-1865 set of ideas reframing the Confederacy's war as a noble defense of 'states' rights' while downplaying or denying slavery's centrality."
      },
      {
        "term": "sourcing",
        "definition": "Asking who made a source, when, for whom, and why, before deciding how much to trust it."
      },
      {
        "term": "historiography",
        "definition": "The study of how the telling of history changes over time and why — and who benefits."
      }
    ],
    "misconceptions": [
      "'The war was about states' rights, not slavery.' Counter it with the states' own words: South Carolina condemned Northern states for exercising their states' rights (resisting the Fugitive Slave Act) and demanded stronger FEDERAL enforcement of slavery — so the specific 'right' at issue was the right to hold and expand slavery.",
      "'A later, calmer account is more reliable than heated documents from the time.' Sourcing shows the opposite here: the 1920 pamphlet was created to shape what children were taught, while the 1861 declarations were the participants explaining themselves in the moment.",
      "'Studying or quoting these racist sources means endorsing them.' Reading evidence critically is not agreement; the class norm separates analyzing an idea from approving it.",
      "'The North fought to abolish slavery from the start.' Lincoln's First Inaugural disclaimed that; the 1861 trigger was slavery's expansion and secession — keep this nuance so the argument stays accurate."
    ],
    "discussionProtocol": "Then-vs-Later corroboration protocol (about 15 minutes). (1) Silent reread: students place the 1861 excerpts and the 1920 excerpt side by side (2 min). (2) Sourcing round-robin: each student states one sourcing fact about one document — who, when, or why — with no evaluation yet (3 min). (3) Pair corroboration: partners decide whether the 1920 claim matches the 1861 evidence and mark exactly where they conflict (4 min). (4) Whole-class 'What did the bias DO?': the teacher charts concrete effects students name (textbooks, monuments, public belief), requiring each effect to be tied to evidence (5 min). (5) One-sentence synthesis written individually (1 min).",
    "differentiationSupports": [
      "Struggling readers: 'THEN (1861) / LATER (1920)' handout with the 1861 quotations pre-placed; students add only the 1920 claim and pick 'what it did' effects from a checklist.",
      "Advanced: add the Stephens 1861-versus-1868 reversal and explain in a paragraph why the same author's later account is weaker evidence for the cause — and what motive explains the change.",
      "English learners: pre-teach reject, rebel, narrative; provide the frame 'In 1861 the South said the war was about ___. In 1920 the pamphlet said it was NOT about ___. This bias DID ___.'",
      "IEP/504: corroboration chart mostly completed; oral explanation permitted; preview the offensive-language norm privately beforehand; extended time.",
      "Executive function: run as three timed, numbered stations (Read 1861 / Read 1920 / Compare) with a one-line goal each and a pre-formatted chart.",
      "Alternate response: present the contrast as a two-panel visual (1861 words vs. 1920 words with a labeled 'what changed and what it did' arrow) or a 30-second recorded corroboration."
    ],
    "exitTicket": "Answer the recurring question in two or three sentences: this is not just 'was the Lost Cause biased?' but 'what did the bias DO?' Give one specific effect and one piece of 1861 evidence the retelling had to override.",
    "tomorrowsBridge": "Tomorrow (Day 5) students turn today's corroboration into a written argument. In the claim-writing seminar they will add Frederick Douglass's voice and Lincoln's First-Inaugural nuance, then write the DBQ answering the driving question — using at least three documents, corroborating 1861 sources against the Lost Cause source, and naming what the bias did. Tell students the exact sourcing-and-corroboration method they used today returns in the Reconstruction unit, where the same Lost Cause forces reshaped how Reconstruction itself was remembered."
  },
  "studentPacket": {
    "intro": "Welcome, historian. Your job in this unit is not to memorize an answer about why the Civil War happened — it is to figure it out from the evidence, the way historians do. You will read short, real documents from 1860-1861, when eleven Southern states left the United States, and you will read a later document from 1920. Here is the puzzle you will solve: the people who led secession said, in official public papers, what they were fighting for. But decades later, a popular story called the 'Lost Cause' described the war very differently. Your two main tools are SOURCING (asking who made a source, when, for whom, and why) and CORROBORATION (checking sources against each other). By the end you will answer the driving question in writing: What did Americans in 1860-1861 say the war was about, and why did later generations remember it so differently? And you will practice the question that matters for the rest of your life as a citizen — not just 'is this biased?' but 'what does the bias DO?'",
    "vocabulary": [
      {
        "term": "secession",
        "definition": "When a state formally declares it is leaving the United States."
      },
      {
        "term": "sourcing",
        "definition": "Asking who made a source, when, for whom, and why, before trusting it."
      },
      {
        "term": "corroboration",
        "definition": "Checking a claim in one source against other sources to see if they agree."
      },
      {
        "term": "popular sovereignty",
        "definition": "Letting settlers in a territory vote on whether slavery would be allowed there."
      },
      {
        "term": "Lost Cause",
        "definition": "A story that spread after 1865 saying the war was about 'states' rights,' downplaying slavery."
      },
      {
        "term": "states' rights",
        "definition": "The idea that states hold powers the federal government cannot override. You will test which right was actually at issue."
      },
      {
        "term": "historical memory",
        "definition": "How later generations remember and teach an event — which can differ from the evidence from the time."
      },
      {
        "term": "claim, evidence, reasoning",
        "definition": "State a claim, back it with evidence from sources, and explain how the evidence supports the claim."
      }
    ],
    "backgroundReading": {
      "title": "Why the Territories, and Why the Story Split in Two",
      "paragraphs": [
        "For decades before 1861, Americans argued about slavery — but the sharpest fights were about the WEST. Slavery already existed in the Southern states. The question that would not go away was whether it could spread into the new western territories. This mattered because every new state sent two senators to Congress. If the West became free, Southern leaders feared the South would be outvoted in the national government. So the future of the territories became the future of the country.",
        "Three events turned up the heat. The Missouri Compromise of 1820 drew a line and banned slavery north of it. The Kansas-Nebraska Act of 1854 erased that line and let settlers vote on slavery, and violence broke out in 'Bleeding Kansas.' Then in 1857 the Supreme Court's Dred Scott decision ruled that Congress could not ban slavery in any territory at all. Each step made compromise harder.",
        "When Abraham Lincoln — who opposed slavery's spread — won the 1860 election, Southern states began to secede. Four of them (South Carolina, Mississippi, Georgia, and Texas) wrote official Declarations of Causes. In their own words, they named the protection of slavery as central. The Confederate vice president, Alexander Stephens, called slavery the 'cornerstone' of the new government, and the Confederate Constitution named and protected slavery in ways the U.S. Constitution never did.",
        "But there is a twist you will investigate. After the war, a story called the Lost Cause reframed the conflict as being about 'states' rights,' not slavery. By 1920, a pamphlet even told schools to reject any textbook saying the South fought to keep slaves. That later story does not match what people wrote in 1861. Interestingly, secessionists had been angry that NORTHERN states used their states' rights to resist the Fugitive Slave Act — so 'states' rights' alone cannot explain the split.",
        "Your task is to read the real documents, corroborate them across time, and decide for yourself. Then go one step further, the way a careful citizen must: ask what the later story DID — to the textbooks students read, to the monuments cities built, and to what Americans believed about their own past."
      ]
    },
    "sourceWorksheet": {
      "source": {
        "title": "A Declaration of the Immediate Causes which Induce and Justify the Secession of the State of Mississippi (1861)",
        "excerpt": "Our position is thoroughly identified with the institution of slavery — the greatest material interest of the world. Its labor supplies the product which constitutes by far the largest and most important portions of commerce of the earth. ... a blow at slavery is a blow at commerce and civilization.",
        "attribution": "Mississippi Declaration of the Immediate Causes, adopted January 1861. Public domain.",
        "contextNote": "Mississippi's secession convention adopted this document to justify leaving the Union. In this era, 'institution' is a euphemism for slavery."
      },
      "questions": [
        "SOURCING: Who created this document, when, and for what purpose? Why does that make it useful evidence about what secession was about?",
        "TEXT: List every place the excerpt names slavery or its economic value. Quote at least one exact phrase.",
        "MEANING: In your own words, what does Mississippi say its 'position' depends on?",
        "CORROBORATION (preview): If South Carolina, Georgia, and Texas name the same cause, what does that agreement tell you about how much to trust this explanation?",
        "JUDGMENT: A later story will say the war was NOT about slavery. Based only on this document, does that later claim look accurate? Explain in one sentence."
      ]
    },
    "cerOrganizer": {
      "prompt": "Using at least three of the unit's documents, answer the driving question: What did Americans in 1860-1861 say the war was about, and why did later generations remember it so differently?",
      "claimGuidance": "Write one clear sentence that answers BOTH halves of the question. Weak: 'The war was complicated.' Strong: 'The 1861 sources named the protection and expansion of slavery, but the later Lost Cause retelling reframed the war as being about states' rights — a change we can trace by sourcing the documents.' Make sure your claim takes a position, not just a summary.",
      "evidenceGuidance": "Choose your two or three strongest quotations and attribute each (who said it, and when). Include at least one 1861 source (a declaration, the Cornerstone Speech, or the Confederate Constitution) AND the later 1920 source. Quote precisely — copy the words exactly and put them in quotation marks.",
      "reasoningGuidance": "Explain how your evidence proves your claim. Then CORROBORATE: state whether your 1861 sources agree with one another, and whether the 1920 source matches or contradicts them. Use sourcing to say which should weigh more and why. Add one sentence handling the nuance from Lincoln's First Inaugural (the 1861 fight was over slavery's EXPANSION and secession, not immediate abolition). Finish by naming what the later narrative DID — its effect on textbooks, monuments, or public memory."
    },
    "exitTickets": [
      "Day 1: In one or two sentences, why were the western territories — not the existing slave states — the center of the fight by 1857? Name one event as evidence.",
      "Day 2: In one sentence, using a direct quotation, what did the seceding states themselves say secession was about? Name the skill you used (sourcing or corroboration).",
      "Day 3: Do the Cornerstone Speech and the Confederate Constitution agree with the secession declarations, or contradict them? Cite one detail.",
      "Day 4: This is not just 'was the Lost Cause biased?' — it is 'what did the bias DO?' Give one specific effect and one piece of 1861 evidence the retelling had to override.",
      "Day 5: Write your final one-sentence thesis answering the driving question, and name the two documents you will lean on most and why."
    ],
    "dbqPrompt": "Using the unit documents and your knowledge of the period, answer in a full response: What did Americans in 1860-1861 say the Civil War was about, and why did later generations remember it so differently? Make a clear claim, cite at least three documents with attribution (including one 1861 source and the later Lost Cause source), corroborate the sources across time using sourcing, account for the nuance in Lincoln's First Inaugural, and explain what the later narrative accomplished — what the bias DID."
  }
};

export const civilWarCauses: ReconstructionUnit = data;
