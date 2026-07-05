import type { ReconstructionUnit } from "./types";

/* Static sample content — authored and adversarially fact-checked.
   Review all materials for accuracy before classroom use. */

const data = {
  "title": "Reconstruction and the Meaning of Citizenship",
  "course": "U.S. History I",
  "gradeBand": "Grades 8-11 (main version calibrated to Grade 10; middle-school 6/8 support version included)",
  "mainVersion": "Grade 10",
  "middleAdaptation": "Middle-school 6/8 support version: The same driving question is reframed in plainer language (\"After slavery ended, did the rights and daily lives of freed people really change, or mostly stay the same?\"). Each day is streamlined to ONE short source instead of several, with the excerpt pre-chunked and the three or four hardest words glossed in the margin. Vocabulary is front-loaded on a picture-supported word wall. Every analysis task is scaffolded with sentence frames (\"The source says ___, which shows that freedom meant ___\") and a graphic organizer rather than open-ended writing. The Day 5 assessment is reduced from a full multi-paragraph DBQ to a single guided Claim-Evidence-Reasoning paragraph using two documents. Mini-lessons are shortened to a 5-minute teacher read-aloud plus a labeled timeline. Reading load is capped at roughly 120 words per source, and all primary-source excerpts are paired with the plain-language \"modifiedReading\" summary so students meet the ideas before the harder original text.",
  "drivingQuestion": "After the Civil War, did Reconstruction transform American citizenship, or did biased stories about race, power, and freedom help restore the old order?",
  "overview": "This five-day flagship unit asks students to weigh one of the central questions of American history: after the Civil War, did Reconstruction transform American citizenship, or did it leave the old power structure mostly intact? Rather than handing students a verdict, the unit trains them to reason like historians — sourcing, contextualizing, and corroborating genuine primary documents, then building and defending evidence-based claims. Across the week students move from the lived meaning of freedom in 1865 (Day 1), through the constitutional revolution of the Reconstruction Amendments and the Civil Rights Act of 1866 (Day 2), into the counter-currents of Black Codes, exploitative labor, and contested federal enforcement (Day 3), then to the violence, court decisions, and political retreat that rolled Reconstruction back (Day 4), and finally to a document-based writing seminar in which each student constructs an answer of their own (Day 5). The strongest responses resist a simple yes/no and instead distinguish transformation in law from continuity in economic and social power. The unit is designed to be historically rigorous, nonpartisan, and appropriate for administrator review: every source is public-domain and documented, framing is evidence-based rather than advocacy, and difficult content is handled with care. NOTE ON STANDARDS: The alignment categories in this unit are THEMATIC labels only. No numeric or lettered state codes are provided. Districts must verify exact alignment against the current Alabama Course of Study (or their own state framework) before classroom use.",
  "essentialQuestions": [
    "What does it mean to be a citizen, and who gets to decide?",
    "How did formerly enslaved people themselves define freedom after 1865?",
    "How did the 13th, 14th, and 15th Amendments change the relationship between individuals, the states, and the federal government?",
    "Why can rights guaranteed on paper still fail to protect people in practice?",
    "In evaluating a historical era, how do historians distinguish what changed from what stayed the same?",
    "Was Reconstruction a revolution in citizenship, an unfinished revolution, or a restoration of the old order — and what evidence supports each view?"
  ],
  "objectives": [
    "Students will analyze at least three primary sources to explain what freedom and citizenship meant to formerly enslaved people in 1865, citing specific textual evidence.",
    "Students will describe the specific rights established by the 13th, 14th, and 15th Amendments and the Civil Rights Act of 1866 and explain how each redefined citizenship, quoting exact constitutional language.",
    "Students will evaluate how Black Codes, sharecropping, and organized violence limited the rights that Reconstruction promised, using cause-and-effect reasoning.",
    "Students will corroborate multiple primary sources — identifying agreement and conflict — to assess whether federal enforcement succeeded or failed.",
    "Students will construct a claim-driven, document-based written argument that answers the driving question, cites at least three documents, addresses a counterargument, and analyzes continuity and change over time."
  ],
  "vocabulary": [
    {
      "term": "Reconstruction",
      "definition": "The period from 1865 to 1877 when the United States rebuilt the South and decided the rights and status of nearly four million people freed from slavery."
    },
    {
      "term": "Emancipation",
      "definition": "The act of freeing people from slavery."
    },
    {
      "term": "Freedpeople (freedmen)",
      "definition": "People who had been enslaved and were now legally free; 'freedpeople' includes women, men, and children."
    },
    {
      "term": "Citizenship",
      "definition": "Official membership in a nation that comes with legal rights, protections, and responsibilities."
    },
    {
      "term": "Suffrage",
      "definition": "The right to vote."
    },
    {
      "term": "Ratify",
      "definition": "To formally approve something, such as a constitutional amendment, so that it becomes law."
    },
    {
      "term": "Amendment",
      "definition": "An official change or addition to the Constitution."
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
      "term": "Birthright citizenship",
      "definition": "The rule, set by the 14th Amendment, that almost everyone born in the United States is automatically a citizen."
    },
    {
      "term": "Black Codes",
      "definition": "State laws passed in the South in 1865-1866 that restricted the freedom, labor, movement, and rights of freedpeople."
    },
    {
      "term": "Freedmen's Bureau",
      "definition": "A federal agency (1865-1872) created to help formerly enslaved people and poor refugees with food, schools, labor contracts, and legal disputes."
    },
    {
      "term": "Sharecropping",
      "definition": "A farming system in which laborers worked land owned by someone else in exchange for a share of the crop, a system that often trapped families in debt."
    },
    {
      "term": "Vagrancy",
      "definition": "The legal status of having no job or fixed home; Southern states used vagrancy laws to arrest and control freedpeople."
    },
    {
      "term": "Enfranchisement / Disfranchisement",
      "definition": "Enfranchisement means giving people the right to vote; disfranchisement means taking that right away."
    },
    {
      "term": "Radical Republicans",
      "definition": "Members of Congress who pushed for strong federal action to protect the rights of freedpeople during Reconstruction."
    },
    {
      "term": "Redemption (\"Redeemers\")",
      "definition": "The term white Southern Democrats used for their return to political power as Reconstruction ended."
    },
    {
      "term": "Compromise of 1877",
      "definition": "The political deal that settled the disputed 1876 presidential election and led to the withdrawal of the last federal troops from the South, effectively ending Reconstruction."
    },
    {
      "term": "Continuity and change",
      "definition": "A way of analyzing history by asking what stayed the same and what became different over time."
    }
  ],
  "historicalThinkingSkills": [
    "Sourcing: Students identify who created a document, when, and why, and consider how the author's identity, purpose, and audience shape its reliability and point of view.",
    "Contextualization: Students place each document within the specific circumstances of 1865-1877 (the end of the war, the fight over federal power, and the collapse of slavery).",
    "Corroboration: Students compare multiple sources to find where they agree and where they conflict, building a fuller and more trustworthy picture of the past.",
    "Claim and evidence: Students make defensible historical claims and support them with short, exact quotations and clear reasoning that links evidence to argument.",
    "Continuity and change over time: Students evaluate what Reconstruction genuinely changed about American citizenship and what remained the same, avoiding an all-or-nothing verdict."
  ],
  "alignmentCategories": [
    "Citizenship & Constitutional Change",
    "Slavery, Freedom & the Reconstruction Amendments",
    "Analyzing & Corroborating Primary Sources",
    "Continuity & Change Over Time",
    "Federal Power & States' Rights",
    "Civil Rights & the Rule of Law",
    "Historical Argumentation & Evidence-Based Writing"
  ],
  "teacherNotes": [
    "STANDARDS DISCLAIMER: The alignment categories in this unit are thematic labels only; they are NOT numeric or lettered standards. Do not treat them as codes. Verify exact alignment against the current Alabama Course of Study (or your state's framework) before classroom use, and paste in the specific standard numbers your district requires.",
    "PACING: The unit is built for five 45-55 minute periods. On block schedules, combine Days 1-2 and Days 3-4, then devote a full block to Day 5. If time is short, the sourceActivity is the non-negotiable core of each day; the mini-lesson can be trimmed to a 5-minute framing. Build in an extra half-period before Day 5 if students need more drafting time.",
    "SENSITIVITY WHEN TEACHING SLAVERY AND RECONSTRUCTION: This content includes human bondage, racial violence, and dehumanizing language in the historical record. Preview every source yourself first. Do NOT ask students to read racial slurs or violent passages aloud; where original documents contain slurs, this unit has already substituted bracketed terms or selected excerpts that avoid them, but always check. Center the agency, intelligence, and resistance of freedpeople rather than portraying them only as victims. Establish discussion norms (respect, evidence over opinion, no personal attacks) before Day 1. Give students a quiet, no-questions-asked way to step back if a source is upsetting, and let families know the unit is coming.",
    "NONPARTISAN FRAMING: Teach this as historical reasoning, not present-day advocacy. When students draw modern parallels, redirect them to the evidence in front of them ('What in the 1866 document supports that?'). The driving question is genuinely open; reward students for defending EITHER side well, and for the strongest answer of all — that Reconstruction transformed citizenship in law while much of the old economic and social power structure remained intact.",
    "COMMON MISCONCEPTIONS TO CORRECT: (1) 'Reconstruction was simply a failure.' It collapsed in enforcement, yet it wrote birthright citizenship, due process, and equal protection permanently into the Constitution. (2) 'Lincoln's Emancipation Proclamation ended slavery.' The Proclamation was a limited wartime measure; the 13th Amendment (ratified Dec. 1865) legally abolished slavery nationwide. (3) 'Formerly enslaved people passively received freedom.' They actively pursued family reunification, land, education, wages, and the vote. (4) 'The Reconstruction Amendments instantly guaranteed equality.' A large gap opened between law on paper and enforcement in practice. (5) 'Black Codes and Jim Crow are the same thing.' Black Codes were 1865-66 state laws struck at by federal action; Jim Crow segregation hardened later, after Reconstruction ended. (6) 'Sharecropping was just slavery again.' It was exploitative and debt-trapping but legally distinct — freedpeople could, in principle, sign contracts, move, and bargain, however constrained.",
    "DISCUSSION MANAGEMENT: Use a structured protocol every day so participation is equitable and evidence-based. Require students to point to a document before offering an opinion ('According to Doc __ ...'). Rotate speaking roles so the same voices do not dominate.",
    "ASSESSMENT NOTES: The Day 5 DBQ and analytic rubric are the summative assessment; the daily exit tickets are formative checkpoints. Consider allowing a revision cycle on the DBQ, since claim-writing improves most through feedback and rewriting.",
    "MATERIALS: Print the Student Packet double-sided; it is designed to be self-contained. All sources are public domain and safe to reproduce. Keep a projected copy of the 14th Amendment, Section 1, posted all week as an anchor text.",
    "SOURCE-DATING NOTE (Douglass): Frederick Douglass delivered 'What the Black Man Wants' at the annual meeting of the Massachusetts Anti-Slavery Society in Boston on January 26, 1865 (per the Frederick Douglass Papers). Some popular reprints mislabel it 'April 1865'; this unit uses the scholarly delivery date, which also fits the speech's wartime context."
  ],
  "days": [
    {
      "day": 1,
      "title": "What did freedom mean in 1865?",
      "objective": "Students will analyze primary sources to explain what freedom, dignity, and citizenship meant to formerly enslaved people in the immediate aftermath of the Civil War, citing specific evidence.",
      "bellRinger": "Write for three minutes: If you were suddenly told you were free after a lifetime of being legally owned by another person, what would be the first three things you would want — and why? (There are no wrong answers; we will compare your list to the real words of people who lived this in 1865.)",
      "miniLesson": "TEACHER OUTLINE (8-10 min). (1) Frame: In December 1865 the 13th Amendment abolished slavery, and nearly four million people became legally free. But 'free' did not define itself. (2) Pose the key tension on the board: LEGAL freedom vs. REAL freedom. (3) Explain that freedpeople told us, in their own words and actions, what freedom meant to them: reuniting families sold apart, legal marriage, education (freedpeople built thousands of schools), owning land, fair wages, freedom of movement, and the vote. Say: 'Freedom was not something handed down and finished — it was something freedpeople actively defined and fought to make real.' (4) Preview today's source: a letter written by a man named Jourdon Anderson, who had left slavery in Tennessee and was living free in Ohio when his former enslaver wrote asking him to come back and work. (5) Set the task: we are reading for evidence of what freedom meant to him.",
      "sourceActivity": {
        "title": "Letter from a Freedman to His Former Enslaver (1865)",
        "excerpt": "\"Here I draw my wages every Saturday night; but in Tennessee there was never any pay-day for the negroes any more than for the horses and cows. ... We have concluded to test your sincerity by asking you to send us the wages for the time we served you. ... I served you faithfully for thirty-two years, and Mandy twenty years. At twenty-five dollars a month for me, and two dollars a week for Mandy, our earnings would amount to eleven thousand six hundred and eighty dollars.\"",
        "attribution": "Letter of Jourdon Anderson to Colonel P. H. Anderson, Dayton, Ohio, August 7, 1865; published in the Cincinnati Commercial and reprinted in the New-York Daily Tribune, August 22, 1865.",
        "contextNote": "Jourdon Anderson had left slavery in Tennessee (departing during the war) and was living as a free, wage-earning man in Ohio when his former enslaver wrote asking him to return. This is his reply (widely believed to have been dictated to the Dayton abolitionist Valentine Winters). By calmly billing his former owner for decades of unpaid labor, Anderson links freedom to fair pay, dignity, and family safety. Spelling and punctuation are lightly modernized for readability; wording is otherwise faithful to the published letter.",
        "task": "Read the excerpt twice. Underline every place where Anderson mentions money, work, or family. Then answer on your organizer: According to this letter, name TWO things freedom meant to Jourdon Anderson, and quote a short phrase as evidence for each."
      },
      "discussionQuestion": "Based on this source, what was the difference between being legally free and being truly free in 1865? Use one exact phrase from the letter to support your answer.",
      "studentTask": "Complete a 'Meaning of Freedom' chart with four rows: Family, Work/Wages, Dignity/Respect, and Movement/Independence. For each row, write one thing freedpeople wanted and cite one detail from the source (or the mini-lesson) as evidence.",
      "exitTicket": "In one sentence, define what 'freedom' meant to freedpeople in 1865, and include one specific detail from today's source.",
      "differentiation": {
        "strugglingReaders": "Provide the excerpt pre-chunked into three labeled boxes (Wages, Family, Dignity) with the four hardest words glossed in the margin (wages, faithfully, sincerity, reckoning). Read the source aloud twice before students annotate.",
        "advanced": "Give students a Reconstruction-era employer's labor advertisement or contract clause and ask them to compare its view of 'free labor' with Anderson's; write a one-paragraph analysis of how each defines freedom and power.",
        "englishLearners": "Provide a bilingual key-term glossary and a sentence frame: 'Freedom meant ______ because the source says \"______.\"' Allow students to first discuss with a partner in their home language before writing.",
        "iepAnd504": "Reduce the source to three key sentences, provide a partially completed 'Meaning of Freedom' chart, and allow extended time. Honor all accommodations on the student's plan.",
        "executiveFunction": "Supply a step checklist with time boxes (Read 4 min, Underline 3 min, Chart 6 min, Share 3 min) and reveal one step at a time so only the current task is visible.",
        "alternateResponse": "Students may record a 60-second voice memo, sketch an annotated drawing of what freedom meant, or complete the sentence-frame chart instead of writing a paragraph."
      }
    },
    {
      "day": 2,
      "title": "Reconstruction Amendments and citizenship",
      "objective": "Students will describe the specific rights created by the 13th, 14th, and 15th Amendments and the Civil Rights Act of 1866, and explain how they redefined citizenship, quoting exact constitutional language.",
      "bellRinger": "The original Constitution never used the word 'slavery' but still protected it. In three minutes, list everything you already know (or can reasonably guess) about the 13th, 14th, or 15th Amendments. Guesses are welcome — we will check them against the actual text.",
      "miniLesson": "TEACHER OUTLINE (10-12 min). (1) 13th Amendment (1865): abolished slavery 'except as a punishment for crime.' Flag that exception clause — states later exploited it. (2) 14th Amendment (1868): birthright citizenship ('All persons born or naturalized in the United States ... are citizens'), plus due process and equal protection. Explain it overturned the Dred Scott decision (1857), which had said Black Americans could not be citizens. (3) 15th Amendment (1870): the right to vote 'shall not be denied ... on account of race, color, or previous condition of servitude' — but NOT sex, which split the women's suffrage movement. (4) Civil Rights Act of 1866: the FIRST law to define citizenship in statute; passed over President Andrew Johnson's veto; the 14th Amendment then locked its principle into the Constitution. (5) The big structural shift: these amendments say 'No State shall.' For the first time, the federal government could protect an individual's rights against their own state. Point to the enforcement clauses ('Congress shall have power to enforce this article'). Keep it factual and neutral: these are the tools; whether they worked is Days 3-4.",
      "sourceActivity": {
        "title": "The Fourteenth Amendment, Section 1 (1868)",
        "excerpt": "\"All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.\"",
        "attribution": "U.S. Constitution, Amendment XIV, Section 1, ratified July 9, 1868.",
        "contextNote": "This is the exact ratified text. It is arguably the most consequential sentence added to the Constitution after the Bill of Rights: it created birthright citizenship, guaranteed due process and equal protection, and — crucially — bound the STATES, not just the federal government.",
        "task": "Underline the FOUR guarantees in this section (citizenship, privileges or immunities, due process, equal protection). Rewrite each one in your own words. Then circle the two words that shift power away from the states, and be ready to explain why they matter."
      },
      "discussionQuestion": "Why might the two words 'No State' be one of the most important changes in the entire Constitution? What could the federal government now do that it could not do before?",
      "studentTask": "Create three 'Amendment Job Cards' (one each for the 13th, 14th, and 15th). On each card write: (a) what the amendment did in one sentence, (b) one exact quoted phrase from it, and (c) one limitation, loophole, or group it left out.",
      "exitTicket": "Which amendment do you think most changed the meaning of American citizenship, and why? Cite one exact phrase to support your choice.",
      "differentiation": {
        "strugglingReaders": "Provide the amendment text with each of the four guarantees color-coded and paired with a plain-language paraphrase; students match the legal phrase to the paraphrase before writing their own.",
        "advanced": "Ask students to research and summarize how the 14th Amendment overturned Dred Scott v. Sandford (1857) in two sentences, then argue which clause (due process or equal protection) has proven more powerful, citing the text.",
        "englishLearners": "Front-load the terms 'ratify,' 'abridge,' 'deprive,' and 'jurisdiction' with visuals and cognates; provide a fill-in job card with the quoted phrases already inserted so students focus on paraphrasing.",
        "iepAnd504": "Provide two job cards instead of three (13th and 14th), with sentence starters for each field; allow oral completion with a scribe if indicated on the plan.",
        "executiveFunction": "Give a single-page tracker with checkboxes for each amendment card and a model of a completed 13th-Amendment card so expectations are concrete.",
        "alternateResponse": "Students may create the job cards as a labeled digital slide, a spoken explanation recorded on video, or a comic-panel 'trading card' set rather than handwritten cards."
      }
    },
    {
      "day": 3,
      "title": "Black Codes, labor, and federal enforcement",
      "objective": "Students will evaluate how Black Codes and new labor systems restricted freedpeople's rights, and how the Freedmen's Bureau and the Civil Rights Act of 1866 attempted federal enforcement, using cause-and-effect reasoning.",
      "bellRinger": "A law can look 'equal' on paper but work unequally in practice. Give one example (from history or today) of a rule that treats people unequally without ever saying so directly. Then predict: how might Southern states have limited freedpeople's freedom in 1865 WITHOUT bringing back slavery by name?",
      "miniLesson": "TEACHER OUTLINE (10 min). (1) The problem for former enslavers: slavery was gone, but they still wanted to control Black labor. (2) The response: Southern legislatures in 1865-66 passed BLACK CODES — vagrancy laws (arrest anyone without proof of employment), harsh labor contracts, apprenticeship laws that bound Black children to former owners, and limits on owning property, testifying in court, or assembling. Purpose: control labor and movement. (3) Federal pushback: the FREEDMEN'S BUREAU (1865) supplied food, built schools, supervised labor contracts, and ran courts; the CIVIL RIGHTS ACT OF 1866 outlawed such discrimination; U.S. troops were present. (4) The compromise that emerged: SHARECROPPING — planters had land but no cash or wage-labor; freedpeople wanted autonomy and land; the result was families farming an owner's land for a share of the crop, often sliding into permanent debt. (5) Frame the tension for the whole unit: federal law (14th Amendment) versus state law (Black Codes) — who wins when they collide? That fight defines Days 3 and 4.",
      "sourceActivity": {
        "title": "The Mississippi Black Codes (1865)",
        "excerpt": "\"Every civil officer shall, and every person may, arrest and carry back to his or her legal employer any freedman, free negro, or mulatto who shall have quit the service of his or her employer before the expiration of his or her term of service without good cause; and said officer and person shall be entitled to receive for arresting and carrying back every deserting employee aforesaid the sum of five dollars.\"",
        "attribution": "Mississippi Black Codes, 'An Act to confer Civil Rights on Freedmen, and for other purposes,' Section 7, 1865 (Laws of the State of Mississippi, 1865).",
        "contextNote": "Mississippi was the first state to enact Black Codes (November 1865). A companion section required every freedperson to carry written proof of a year-long labor contract by the second Monday of January 1866; anyone without it could be declared a 'vagrant,' fined, and hired out. The provision quoted here paid citizens a bounty to capture and return workers who left an employer — a legal echo of the fugitive-slave system, now aimed at 'free' laborers. Wording is faithful to the statute; 'mulatto' is the historical legal term used in the original law.",
        "task": "On your organizer, answer: (1) What specific right or freedom is this law taking away? (2) Who benefits from it and who is harmed? (3) Which promise of the 13th or 14th Amendment does it seem to contradict, and how?"
      },
      "discussionQuestion": "Were the Black Codes a return to slavery, something new, or both at once? Defend your answer with evidence from the source.",
      "studentTask": "Build a two-column comparison chart titled 'Promise vs. Reality.' In the left column list three things the Reconstruction Amendments promised (from Day 2). In the right column, next to each, write what the Black Codes or the sharecropping system actually delivered, with a source detail.",
      "exitTicket": "Name one specific way the Black Codes contradicted the 13th or 14th Amendment, and explain the contradiction in one or two sentences.",
      "differentiation": {
        "strugglingReaders": "Provide the excerpt rewritten one notch simpler beneath the original, plus a two-question version of the task (what does it take away? who benefits?). Read aloud and think aloud through the first question together.",
        "advanced": "Add a second short source — a Freedmen's Bureau labor contract or the Civil Rights Act of 1866 excerpt — and ask students to corroborate: where do state law and federal law directly collide? Write a paragraph naming the winner in 1866 and predicting the winner by 1876.",
        "englishLearners": "Pre-teach 'arrest,' 'employer,' 'vagrant,' 'contract,' and 'bounty' with icons; provide the 'Promise vs. Reality' chart with the left column already filled so students focus on matching the reality.",
        "iepAnd504": "Provide a partially completed comparison chart with two of three rows started; allow a scribe or speech-to-text; extend time as specified in the plan.",
        "executiveFunction": "Break the task into a numbered sequence with a progress bar; provide a worked example of one completed 'Promise vs. Reality' row before students begin.",
        "alternateResponse": "Students may present their 'Promise vs. Reality' analysis as a labeled poster, a two-column verbal explanation to the teacher, or a short recorded 'news report' contrasting the law and the reality."
      }
    },
    {
      "day": 4,
      "title": "Resistance, rollback, and the end of Reconstruction",
      "objective": "Students will analyze how organized violence, Supreme Court decisions, and shifting Northern politics rolled back Reconstruction, and assess the consequences for Black citizenship.",
      "bellRinger": "Rights on paper mean little without enforcement. In three minutes, answer: what does a government actually NEED in order to protect someone's rights in the real world? List at least three things.",
      "miniLesson": "TEACHER OUTLINE (10 min). (1) The high point: with federal protection, Black men voted in large numbers and held office — Hiram Revels and Blanche Bruce reached the U.S. Senate, and more than 600 Black men served in Southern state legislatures. This was a genuine democratic transformation. (2) The backlash: the Ku Klux Klan and other paramilitary groups used terror — beatings, arson, and murder — to stop Black citizens and their white allies from voting and governing. (3) The federal fight-back: the Enforcement Acts and the Ku Klux Klan Act (1870-71) let President Grant prosecute and suppress the Klan, with real short-term success. (4) The retreat: the Panic of 1873 turned Northern attention to the economy; Northern voters grew tired of intervention; the Supreme Court narrowed the 14th Amendment (Slaughter-House Cases, 1873; United States v. Cruikshank, 1876), weakening federal enforcement. (5) The end: white Democrats 'redeemed' state governments; the disputed 1876 election was settled by the Compromise of 1877, and the last federal troops withdrew. The amendments remained in the Constitution — but the power to enforce them faded. Emphasize: this is rollback, not erasure. The legal transformation survived; the enforcement did not.",
      "sourceActivity": {
        "title": "Testimony Before the Ku Klux Klan Hearings (1872)",
        "excerpt": "\"On the 29th of October, 1869, they broke my door open, took me out of bed, took me to the woods, and whipped me three hours or more, and left me for dead. They said to me, 'Do you think you will ever vote another damned radical ticket?' I said, 'If there was an election to-morrow, I would vote the radical ticket.' They set in and whipped me a thousand licks more, with sticks and straps that had buckles on the ends of them.\"",
        "attribution": "Testimony of Abram Colby before the Joint Select Committee to Inquire into the Condition of Affairs in the Late Insurrectionary States (the 'Ku Klux Klan hearings'), Georgia volume, 1872.",
        "contextNote": "Abram Colby was a formerly enslaved man elected to the Georgia state legislature. He testified that the Klan attacked him specifically to stop him from voting and serving in office. In this era, the 'radical ticket' meant the Republican ballot, associated with Reconstruction. His testimony shows why rights guaranteed in the Constitution could still fail: without effective enforcement, terror silenced voters. Wording follows the published congressional transcript.",
        "task": "Source it first: WHO is speaking, WHEN, and to WHOM? Then answer: (1) What specific right were the attackers trying to take away? (2) What does this reveal about why the 14th and 15th Amendments could not protect citizens by the mid-1870s?"
      },
      "discussionQuestion": "If the 14th and 15th Amendments were still the law of the land, why couldn't they protect citizens like Abram Colby by the mid-1870s? What was missing?",
      "studentTask": "Construct a cause-and-effect flowchart that begins with 'Black men gain the right to vote (1870)' and ends with 'Reconstruction ends (1877).' Include at least FOUR linked events (for example: Black officeholding, Klan violence, the Enforcement/KKK Acts, the Panic of 1873, Supreme Court decisions, 'Redemption,' the Compromise of 1877). Draw arrows and label each link with how one event led to the next.",
      "exitTicket": "Name one force that undermined Reconstruction (violence, the courts, the economy, or Northern politics) and explain in two sentences how it worked.",
      "differentiation": {
        "strugglingReaders": "Provide the excerpt in shorter sentences with a margin summary ('They attacked him because he voted'), and give the flowchart with the first and last boxes filled and the middle events supplied on cut-out strips to sequence.",
        "advanced": "Assign a short investigation of Slaughter-House Cases (1873) or United States v. Cruikshank (1876): in one paragraph, explain how the Court narrowed the 14th Amendment and connect it to why enforcement collapsed.",
        "englishLearners": "Pre-teach 'terror,' 'enforcement,' 'withdraw,' 'ticket (ballot),' and 'redeem' with visuals; provide a flowchart template with event cards to arrange rather than open boxes to fill.",
        "iepAnd504": "Provide a four-box (not open-ended) flowchart with word-bank events to place; allow oral explanation of the causal links; extend time per the plan.",
        "executiveFunction": "Number the flowchart boxes and provide a checklist ('Place event, draw arrow, label the link'); model one completed link before students continue.",
        "alternateResponse": "Students may build the cause-and-effect chain as a physical timeline on the wall, a set of sequenced sticky notes, or a recorded verbal walk-through instead of a drawn flowchart."
      }
    },
    {
      "day": 5,
      "title": "Claim-writing seminar and DBQ-style assessment",
      "objective": "Students will construct and defend an evidence-based written argument answering the driving question, using and citing at least three documents and analyzing continuity and change over time.",
      "bellRinger": "Restate the unit's driving question in your OWN words. Then write your gut answer in a single sentence. Keep it — you will revise it after working with the documents, and we will compare your 'before' and 'after' answers.",
      "miniLesson": "TEACHER OUTLINE (10 min, then release to writing). (1) Model a strong claim. Weak: 'Reconstruction changed a lot.' Strong (qualified, arguable): 'Reconstruction transformed the LEGAL meaning of citizenship but left much of the old ECONOMIC and SOCIAL power structure intact.' Show that the best answers say BOTH/AND with a clear qualifier. (2) Review the writing frame: Claim, then Evidence (short exact quotations, cited as Doc A, Doc B), then Reasoning (explain HOW the evidence proves the claim), and a Counterargument sentence ('Although Doc __ suggests ___, the stronger evidence shows ___'). (3) Teach a one-sentence SOURCING move: name the author, date, and purpose of a key document and explain why that makes it persuasive. (4) Do a 2-minute think-aloud writing one model body sentence with a citation. (5) Point to the rubric so students self-check against it. (6) Release to the seminar and writing.",
      "sourceActivity": {
        "title": "DBQ Document Set: Transformation or Continuity?",
        "excerpt": "Students work from the five-document DBQ set (14th Amendment; Mississippi Black Codes; Frederick Douglass, 'What the Black Man Wants'; a sharecropping contract; and the Abram Colby KKK-hearings testimony). Example anchor — Frederick Douglass, 1865: \"I am for the immediate, unconditional, and universal enfranchisement of the black man, in every State in the Union. ... Slavery is not abolished until the black man has the ballot.\"",
        "attribution": "Frederick Douglass, 'What the Black Man Wants,' address to the annual meeting of the Massachusetts Anti-Slavery Society, Boston, January 26, 1865 (one of five documents in the DBQ set; full set provided in the DBQ section and Student Packet).",
        "contextNote": "On Day 5 students use the complete DBQ set. Each document is public domain and documented. The set is deliberately balanced: some sources point toward transformation (the 14th Amendment, Douglass) and some toward continuity of the old power structure (Black Codes, the sharecropping contract, Klan violence).",
        "task": "Annotate all five documents. Label each one as evidence for 'TRANSFORMED,' 'LEFT INTACT,' or 'BOTH,' and note one short quotable phrase from each. Then sort the documents into a T-chart before you begin writing."
      },
      "discussionQuestion": "SOCRATIC SEMINAR: After the Civil War, did Reconstruction transform American citizenship, or did it leave the old power structure mostly intact? Ground every contribution in a document ('According to Doc __ ...') and respond to at least one peer before offering a new point.",
      "studentTask": "Write the DBQ response (a full essay for the main version; three structured CER paragraphs for the support version). Requirements: a clear, arguable claim; evidence from at least three documents cited by letter; reasoning connecting each piece of evidence to the claim; one sentence addressing a counterargument; and at least one statement about what CHANGED versus what STAYED THE SAME. Self-check against the rubric before submitting.",
      "exitTicket": "Reflection: Which SINGLE document most shaped your final answer, and why? Did your 'after' answer change from your bell-ringer 'before' answer — and what evidence moved you?",
      "differentiation": {
        "strugglingReaders": "Provide the documents at reduced length with the key sentence in each pre-highlighted, plus a paragraph frame ('Reconstruction changed ___. Evidence for this is Doc __, which says \"___.\" This matters because ___. However, Doc __ shows ___.').",
        "advanced": "Require students to engage all five documents, incorporate a sourcing sentence for at least two, and add a brief historiography note: would you call Reconstruction a 'revolution,' an 'unfinished revolution,' or a 'restoration,' and why? Encourage an original qualified thesis.",
        "englishLearners": "Provide the balanced T-chart pre-sorted with one example placed, sentence frames for claim/evidence/reasoning, and permission to draft key sentences with a bilingual partner before writing independently.",
        "iepAnd504": "Offer the three-paragraph CER option, a graphic-organizer scaffold, a word bank of transition and citation phrases, extended time, and a scribe or speech-to-text as specified in the plan.",
        "executiveFunction": "Provide a writing checklist with a time plan (annotate 10 min, outline 5 min, draft 20 min, self-check 5 min) and a visible model of each essay part; break submission into checkpoints.",
        "alternateResponse": "Students may deliver the argument as a recorded structured oral response, a slide deck with cited evidence, or a formal seminar contribution scored on the same rubric criteria in place of a written essay."
      }
    }
  ],
  "quiz": [
    {
      "question": "Which amendment to the U.S. Constitution abolished slavery throughout the United States?",
      "choices": [
        "The 12th Amendment",
        "The 13th Amendment",
        "The 14th Amendment",
        "The 15th Amendment"
      ],
      "answer": "The 13th Amendment",
      "explanation": "Ratified in December 1865, the 13th Amendment ended slavery 'except as a punishment for crime.' The Emancipation Proclamation (1863) had been a limited wartime order; the amendment made abolition permanent and national."
    },
    {
      "question": "The 14th Amendment's rule that no state may 'deny to any person within its jurisdiction' the same treatment under the law is known as which guarantee?",
      "choices": [
        "Due process",
        "Equal protection",
        "Privileges and immunities",
        "Birthright citizenship"
      ],
      "answer": "Equal protection",
      "explanation": "The 'equal protection of the laws' clause requires states to apply their laws the same way to all people. (Due process, by contrast, is the guarantee of fair procedures before losing life, liberty, or property.)"
    },
    {
      "question": "What were the Black Codes?",
      "choices": [
        "Federal laws that protected freedpeople's rights",
        "Secret codes used by the Freedmen's Bureau",
        "State laws passed in 1865-66 that restricted the freedom and labor of freedpeople",
        "Rules written by freedpeople to govern their own communities"
      ],
      "answer": "State laws passed in 1865-66 that restricted the freedom and labor of freedpeople",
      "explanation": "Southern legislatures used vagrancy, labor-contract, and apprenticeship laws to control Black labor and movement after slavery ended. The federal Civil Rights Act of 1866 and the 14th Amendment were direct responses to them."
    },
    {
      "question": "True or False: The 15th Amendment guaranteed women the right to vote.",
      "choices": [
        "True",
        "False"
      ],
      "answer": "False",
      "explanation": "The 15th Amendment (1870) barred denying the vote 'on account of race, color, or previous condition of servitude' — but not sex. Women would not gain a national voting guarantee until the 19th Amendment in 1920, a split that divided reformers at the time."
    },
    {
      "question": "Name the federal agency created in 1865 to help formerly enslaved people with food, schools, labor contracts, and legal disputes.",
      "answer": "The Freedmen's Bureau (the Bureau of Refugees, Freedmen, and Abandoned Lands)",
      "explanation": "The Freedmen's Bureau (1865-1872) was the federal government's main instrument for aiding freedpeople and poor refugees; it was especially important in founding schools, though it was underfunded and short-lived."
    },
    {
      "question": "The Compromise of 1877 is significant because it led to which outcome?",
      "choices": [
        "The passage of the 13th Amendment",
        "The withdrawal of the last federal troops from the South and the effective end of Reconstruction",
        "The start of the Civil War",
        "The creation of the Freedmen's Bureau"
      ],
      "answer": "The withdrawal of the last federal troops from the South and the effective end of Reconstruction",
      "explanation": "The deal settled the disputed 1876 presidential election; in exchange, federal military enforcement in the South ended, removing the main protection for Black political rights."
    },
    {
      "question": "Give one specific way the sharecropping system limited the economic freedom of freedpeople.",
      "answer": "Sample answer: Sharecroppers worked another person's land for only a share of the crop, and store credit at high interest often left them in permanent debt, tying them to the land and the landowner year after year.",
      "explanation": "Sharecropping was legally different from slavery — workers could sign contracts and, in theory, move — but debt, low crop shares, and landowner control kept many families dependent, a strong example of economic continuity."
    },
    {
      "question": "Why does the phrase 'except as a punishment for crime whereof the party shall have been duly convicted' in the 13th Amendment matter to historians?",
      "choices": [
        "It freed only the enslaved people in Confederate states",
        "It created an exception that allowed forced labor of convicted people, which some states later exploited",
        "It gave women the right to vote",
        "It abolished the Freedmen's Bureau"
      ],
      "answer": "It created an exception that allowed forced labor of convicted people, which some states later exploited",
      "explanation": "The 'punishment for crime' clause left an opening. Combined with laws like vagrancy statutes that criminalized Black poverty, it enabled convict-labor systems that reproduced forced, unpaid work — a key piece of evidence for the 'left intact' side of the driving question."
    },
    {
      "question": "Read this quotation and identify the document: 'No State shall ... deny to any person within its jurisdiction the equal protection of the laws.'",
      "answer": "The 14th Amendment (Section 1)",
      "explanation": "This is the equal-protection clause of the 14th Amendment (1868). The words 'No State shall' are what made it revolutionary — for the first time the federal government could protect an individual's rights against their own state government."
    },
    {
      "question": "Short answer: In your own words, explain the difference between 'transformation in law' and 'continuity in power' in Reconstruction, and give one example of each.",
      "answer": "Sample answer: 'Transformation in law' means the Constitution was permanently changed to guarantee citizenship, due process, equal protection, and voting rights (example: the 14th Amendment). 'Continuity in power' means the same landowning class kept economic and social control (example: Black Codes and sharecropping kept many freedpeople dependent). The strongest answer to the driving question uses both.",
      "explanation": "This item checks the unit's core reasoning move: distinguishing legal change from the persistence of economic and social power, which is the heart of an evidence-based answer to the driving question."
    }
  ],
  "dbq": {
    "prompt": "After the Civil War, did Reconstruction transform American citizenship, or did it leave the old power structure mostly intact? Using at least THREE of the documents below and your knowledge of the period, write an evidence-based argument that answers this question. Your response must include a clear, arguable claim; specific evidence cited by document letter; reasoning that connects each piece of evidence to your claim; at least one sentence that addresses a counterargument; and an analysis of what CHANGED versus what STAYED THE SAME.",
    "guidance": "TEACHER GUIDANCE: The set is intentionally balanced — Documents A and C point toward transformation, while Documents B, D, and E point toward continuity of the old power structure. Reward students who reach a QUALIFIED 'both/and' thesis (for example, 'Reconstruction transformed citizenship in law but left much of the old economic and social power structure intact'), because it is best supported by the full document set. Require at least one SOURCING sentence (author, date, purpose) and at least one explicit CHANGE-and-CONTINUITY statement. Discourage present-day advocacy; keep students anchored to the documents. Accept EITHER overall position if it is defended with accurate evidence and reasoning. Score with the analytic rubric. A perfect essay is not required for a top score — a clear claim, three well-used documents, honest counterargument, and change/continuity analysis meet the exemplary bar.",
    "documents": [
      {
        "title": "Document A — The Fourteenth Amendment, Section 1 (1868)",
        "excerpt": "\"All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall ... deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.\"",
        "attribution": "U.S. Constitution, Amendment XIV, Section 1, ratified July 9, 1868.",
        "contextNote": "Exact ratified text. It created birthright citizenship and, for the first time, empowered the federal government to protect individual rights against the states. Points toward TRANSFORMATION."
      },
      {
        "title": "Document B — The Mississippi Black Codes (1865)",
        "excerpt": "\"Every civil officer shall, and every person may, arrest and carry back to his or her legal employer any freedman, free negro, or mulatto who shall have quit the service of his or her employer before the expiration of his or her term of service without good cause ...\"",
        "attribution": "Mississippi Black Codes, 'An Act to confer Civil Rights on Freedmen, and for other purposes,' Section 7, 1865.",
        "contextNote": "Enacted months after slavery ended, this provision paid a bounty to capture and return laborers who left an employer. 'Mulatto' is the original legal term. Points toward CONTINUITY of the old labor-control system."
      },
      {
        "title": "Document C — Frederick Douglass, 'What the Black Man Wants' (1865)",
        "excerpt": "\"I am for the immediate, unconditional, and universal enfranchisement of the black man, in every State in the Union. ... Slavery is not abolished until the black man has the ballot.\"",
        "attribution": "Frederick Douglass, address to the annual meeting of the Massachusetts Anti-Slavery Society, Boston, January 26, 1865.",
        "contextNote": "Douglass, who had escaped slavery, argues that legal freedom is incomplete without the vote. Points toward the CASE FOR transformation — and toward how much was still missing in 1865."
      },
      {
        "title": "Document D — A Sharecropping Contract (1882)",
        "excerpt": "\"To every one applying to rent land upon shares, the following conditions must be read, and agreed to. ... All must work under my direction. ... No cropper to work off the plantation when there is any work to be done on the land he has rented, or when his work is needed by me or other croppers.\"",
        "attribution": "Sharecropping agreement, Grimes Family Papers, 1882, Southern Historical Collection, University of North Carolina at Chapel Hill.",
        "contextNote": "This printed contract set the terms landowners offered croppers, many of them formerly enslaved. Though dated just after Reconstruction, it shows how the labor system that took shape during Reconstruction kept workers under the owner's daily control. Points toward CONTINUITY of economic power."
      },
      {
        "title": "Document E — Testimony Before the Ku Klux Klan Hearings (1872)",
        "excerpt": "\"They ... took me out of bed, took me to the woods, and whipped me three hours or more, and left me for dead. They said to me, 'Do you think you will ever vote another damned radical ticket?' I said, 'If there was an election to-morrow, I would vote the radical ticket.'\"",
        "attribution": "Testimony of Abram Colby before the Joint Select Committee to Inquire into the Condition of Affairs in the Late Insurrectionary States, Georgia, 1872.",
        "contextNote": "Colby, a formerly enslaved man elected to the Georgia legislature, describes being attacked to stop him from voting. Wording follows the published transcript. Points toward CONTINUITY of the old power structure through violence, despite the 15th Amendment."
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
          "States a clear, arguable, and QUALIFIED claim that directly answers the driving question and previews a both/and line of reasoning (e.g., distinguishes legal change from continuity of power).",
          "States a clear claim that answers the driving question and takes a defensible position.",
          "States a claim, but it is vague, one-sided without acknowledgment, or only loosely tied to the question.",
          "Restates the question or offers an opinion with no arguable claim."
        ]
      },
      {
        "name": "Use of Evidence",
        "descriptors": [
          "Integrates specific, accurate evidence from THREE or more documents, cited by letter, with short exact quotations chosen precisely to support the claim.",
          "Uses evidence from three documents, cited, with generally accurate and relevant quotations.",
          "Uses evidence from one or two documents, or evidence that is vague, partly inaccurate, or not clearly cited.",
          "Little or no document evidence; relies on unsupported assertion or summary."
        ]
      },
      {
        "name": "Sourcing & Corroboration",
        "descriptors": [
          "Analyzes at least one document's author, date, and purpose, AND corroborates across documents, noting where sources agree or conflict.",
          "Includes at least one sourcing observation and compares evidence from more than one document.",
          "Mentions a source or author but does little with it; minimal comparison across documents.",
          "Treats documents as free-floating facts with no attention to author, purpose, or corroboration."
        ]
      },
      {
        "name": "Historical Reasoning: Change & Continuity",
        "descriptors": [
          "Explicitly and insightfully weighs what CHANGED against what STAYED THE SAME and explains HOW each piece of evidence supports the claim; addresses a counterargument fairly.",
          "Addresses both change and continuity and explains how evidence supports the claim; acknowledges a counterargument.",
          "Touches on change or continuity but not both, or explains evidence only partially; counterargument missing or superficial.",
          "Asserts a position with no analysis of change/continuity and no reasoning linking evidence to claim."
        ]
      },
      {
        "name": "Organization & Conventions",
        "descriptors": [
          "Logically organized (claim, evidence, reasoning, counterargument, conclusion) with clear transitions and controlled, largely error-free writing.",
          "Clear structure and mostly correct conventions; errors do not impede meaning.",
          "Some organizational structure; conventions errors occasionally interfere with meaning.",
          "Disorganized; frequent errors that make the argument hard to follow."
        ]
      }
    ]
  },
  "modifiedReading": "PLAIN-LANGUAGE READING SUPPORT VERSION: Reconstruction and Citizenship\n\nWhen the Civil War ended in 1865, slavery ended too. Almost four million people who had been enslaved were now free. But being free raised a big question: What did freedom really mean? For many freedpeople, it meant finding family members who had been sold away, going to school, getting married by law, owning land, earning fair pay, and voting.\n\nCongress passed three important changes to the Constitution, called amendments. The 13th Amendment (1865) ended slavery. The 14th Amendment (1868) said that almost everyone born in the United States is a citizen, and that states must treat people fairly and equally. The 15th Amendment (1870) said states could not stop men from voting because of their race. These amendments changed the law in a huge way. For the first time, the national government could step in to protect a person's rights against their own state.\n\nBut laws on paper are not the same as real life. Many Southern states passed new rules called Black Codes in 1865 and 1866. These laws made it hard for Black people to move around, change jobs, or refuse unfair work. A new farming system called sharecropping let freedpeople work land they did not own, in exchange for part of the crop. Many families ended up in debt they could never pay off. The Freedmen's Bureau, a government agency, tried to help by building schools and settling disputes, but it did not have enough money or time.\n\nFor a while, Black men voted and were even elected to office. But some white groups, like the Ku Klux Klan, used violence and fear to stop them. Over time, the government in the North grew tired of sending soldiers to protect these rights. Courts limited the new amendments. In 1877, the last federal troops left the South, and Reconstruction ended.\n\nSo did Reconstruction change American citizenship, or leave the old power structure in place? The best answer is: both. The Constitution was changed forever, and those changes would be used again in the future to fight for equal rights. But at the time, most of the old power — over land, jobs, and daily life — stayed in the same hands. Your job as a historian is to look at the evidence and decide how much really changed.",
  "advancedExtension": "ADVANCED EXTENSION (for students ready to go deeper): Historians, the Courts, and the 'Second Reconstruction.'\n\nChoose ONE of the following investigations and produce a two-page evidence-based response with citations.\n\n1. HISTORIOGRAPHY — How historians changed their minds. For much of the early 20th century, the 'Dunning School' of historians portrayed Reconstruction as a corrupt failure imposed on the South. Later historians, most influentially W.E.B. Du Bois in 'Black Reconstruction in America' (1935) and Eric Foner in the late 20th century, reinterpreted it as an unfinished democratic revolution. Research these interpretations and write a short essay: How and why did the historical judgment of Reconstruction change? What does that tell you about how history is written and revised? Use your unit documents as evidence about which interpretation the sources support.\n\n2. THE COURTS — How the 14th Amendment was narrowed. Investigate the Slaughter-House Cases (1873), United States v. Cruikshank (1876), and the Civil Rights Cases (1883). Explain in precise terms how the Supreme Court limited the reach of the 14th Amendment's protections, and argue whether the amendment's later failures were caused more by these court decisions, by political retreat, or by violence. Cite the constitutional text.\n\n3. CONTINUITY OVER A CENTURY — The 'Second Reconstruction.' Many scholars call the Civil Rights Movement of the 1950s-60s a 'Second Reconstruction' because it revived the promises of the 14th and 15th Amendments. Compare one Reconstruction-era document from this unit with one document from the 1950s-60s (for example, Brown v. Board of Education, 1954, or the Voting Rights Act, 1965). Argue: was the Civil Rights Movement finishing the work of Reconstruction, or doing something new? Analyze continuity and change across ninety years.\n\n4. ORIGINAL THESIS CHALLENGE — Craft and defend an original label for Reconstruction: 'revolution,' 'unfinished revolution,' 'restoration,' or a term of your own. Build a five-document argument, incorporate at least two sourcing analyses, and anticipate the strongest objection to your view.\n\nExtension deliverables should include a works-cited list, at least one direct quotation from a primary source, and one from a secondary (historian's) source.",
  "subPlan": "SUBSTITUTE PLAN — 'What Did Freedom Mean, and What Did the 14th Amendment Change?' (One class period, ~50 minutes. No history background required. Everything needed is in the Student Packet.)\n\nBEFORE CLASS: Take attendance from the roster on the desk. Write the focus question on the board: 'After slavery ended, did the law really change life for freed people?' Have Student Packets ready.\n\nMINUTE-BY-MINUTE:\n1) BELL RINGER (5 min): Students write silently for three minutes: 'If you were freed after a lifetime of being enslaved, what are the first three things you would want, and why?' No wrong answers.\n2) SHARE OUT (5 min): Call on 4-5 students to read one item. Do not debate; just collect. Common answers: family, safety, money/work, school, the vote. Say: 'Real people in 1865 wanted these same things.'\n3) SOURCE #1 (12 min): In the Student Packet 'Source Worksheet,' read the 1865 Freedmen's Bureau law aloud (or a willing volunteer reads — never force anyone). Students answer the worksheet questions in pairs. ANSWER KEY: (a) the U.S. Congress / the War Department created it in 1865, to aid freedpeople and refugees; (b) help such as food, schools, and land (up to forty acres of abandoned land); (c) poor war refugees and formerly enslaved people.\n4) SOURCE #2 — 14TH AMENDMENT (12 min): Students find the 14th Amendment, Section 1 (also posted on the wall). Read it aloud. Task: underline the four promises — citizenship, privileges/immunities, due process (fair procedures), equal protection (equal treatment). Circle 'No State' and explain in one sentence why it matters (answer: for the first time the national government could protect people's rights against their own state).\n5) DISCUSSION (6 min): 'Is a law by itself enough to change how people are actually treated? Why or why not?' Take 3-4 reasoned responses.\n6) EXIT TICKET (5 min): 'Name ONE right the 14th Amendment gave, and ONE reason a right on paper might still not protect someone in real life.' Collect and leave in a labeled stack.\n\nMANAGEMENT NOTES: This topic includes slavery and unfair treatment; keep the tone respectful. Allow a quiet break if a student is upset. Do not ask students to read racial terms aloud. If time remains, students reread the packet background or start the vocabulary. Leave the teacher a note on participation and any questions raised.",
  "dashboard": {
    "focusDay": "Day 2 — Reconstruction Amendments and Citizenship",
    "todaysObjective": "Students will describe the specific rights created by the 13th, 14th, and 15th Amendments and the Civil Rights Act of 1866 and explain how they redefined American citizenship, quoting exact constitutional language.",
    "essentialQuestion": "How did the 13th, 14th, and 15th Amendments change the relationship between individuals, the states, and the federal government?",
    "sourceOfTheDay": {
      "title": "The Fourteenth Amendment, Section 1 (1868)",
      "excerpt": "\"All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.\"",
      "attribution": "U.S. Constitution, Amendment XIV, Section 1, ratified July 9, 1868.",
      "contextNote": "Exact ratified text. This single sentence created birthright citizenship, guaranteed due process and equal protection, and bound the STATES for the first time — overturning the Dred Scott decision of 1857.",
      "task": "Underline the four guarantees (citizenship, privileges or immunities, due process, equal protection) and rewrite each in your own words. Then circle the two words — 'No State' — that shift power from the states to the federal government, and explain why that shift matters."
    },
    "keyVocabulary": [
      {
        "term": "Ratify",
        "definition": "To formally approve an amendment so it becomes part of the Constitution."
      },
      {
        "term": "Birthright citizenship",
        "definition": "The 14th Amendment rule that almost everyone born in the United States is automatically a citizen."
      },
      {
        "term": "Due process",
        "definition": "The government must follow fair rules and procedures before taking a person's life, liberty, or property."
      },
      {
        "term": "Equal protection",
        "definition": "The government must apply the law the same way to all people."
      },
      {
        "term": "Enforcement clause",
        "definition": "The part of each Reconstruction amendment giving Congress the power to pass laws to make the amendment real."
      }
    ],
    "misconceptions": [
      "That the 14th Amendment instantly delivered equal treatment in daily life — in reality, a wide gap opened between the law and its enforcement (the focus of Days 3-4).",
      "That the amendment applied only to formerly enslaved people — its text says 'all persons' and 'any person,' making it far broader.",
      "That due process and equal protection mean the same thing — due process is about FAIR PROCEDURES; equal protection is about EQUAL TREATMENT.",
      "That the 15th Amendment gave everyone the vote — it barred denial by race, but not by sex, and it left open later loopholes like poll taxes and literacy tests."
    ],
    "discussionProtocol": "RATIFY-REBUT-REFINE (Think-Pair-Share into a structured mini-seminar). Step 1 THINK (2 min): each student writes a one-sentence answer to 'Why are the words \"No State\" revolutionary?' Step 2 PAIR (3 min): partners exchange answers; one must RATIFY (add support with a phrase from the text) and one must REBUT (raise a doubt or limitation). Step 3 REFINE (5 min): call on 4-5 pairs; each contribution must quote the amendment. Enforce the rule 'point to the text before you give an opinion.' Rotate speakers so new voices are heard.",
    "differentiationSupports": [
      "Struggling readers: color-coded amendment text with a matching plain-language paraphrase for each clause.",
      "Advanced: research task connecting the 14th Amendment to its overturning of Dred Scott v. Sandford (1857).",
      "English learners: pre-taught terms (ratify, abridge, deprive, jurisdiction) with visuals and cognates, plus a fill-in 'job card.'",
      "IEP/504: two amendment job cards instead of three, sentence starters, oral-response option, extended time per plan.",
      "Executive function: single-page tracker with checkboxes and a completed model card.",
      "Alternate response: build the amendment 'trading cards' as a digital slide, comic panel, or short recorded explanation."
    ],
    "exitTicket": "Which amendment do you think most changed the meaning of American citizenship, and why? Cite one exact phrase from today's source.",
    "tomorrowsBridge": "Tomorrow (Day 3) we test these promises against reality. If the 14th Amendment says 'No State shall ... deny ... equal protection,' what happened when Southern states passed the Black Codes to control freedpeople anyway? We move from law on paper to power on the ground — and ask who wins when state law and federal law collide."
  },
  "studentPacket": {
    "intro": "Welcome, historian. This packet is your evidence file for the unit 'Reconstruction and the Meaning of Citizenship.' Our driving question is: After the Civil War, did Reconstruction transform American citizenship, or did it leave the old power structure mostly intact? Your job is not to memorize an answer — it is to weigh real evidence and build one of your own. Every source in this packet is genuine and public domain. As you read, keep asking three questions: Who created this and why? What does it show changed? What does it show stayed the same? By Day 5 you will use these documents to write and defend your own claim. Take notes right on these pages.",
    "vocabulary": [
      {
        "term": "Reconstruction",
        "definition": "The years 1865-1877, when the nation rebuilt the South and decided the rights of nearly four million freed people."
      },
      {
        "term": "Freedpeople",
        "definition": "People who had been enslaved and were now legally free — women, men, and children."
      },
      {
        "term": "Citizenship",
        "definition": "Official membership in a nation, with legal rights and protections."
      },
      {
        "term": "Ratify",
        "definition": "To formally approve an amendment so it becomes law."
      },
      {
        "term": "Due process",
        "definition": "Fair rules the government must follow before taking away your life, liberty, or property."
      },
      {
        "term": "Equal protection",
        "definition": "The government must apply the law the same way to everyone."
      },
      {
        "term": "Black Codes",
        "definition": "State laws (1865-66) that restricted freedpeople's work, movement, and rights."
      },
      {
        "term": "Freedmen's Bureau",
        "definition": "A federal agency (1865-72) that helped freedpeople with food, schools, contracts, and legal disputes."
      },
      {
        "term": "Sharecropping",
        "definition": "Farming another person's land for a share of the crop — a system that often trapped families in debt."
      },
      {
        "term": "Suffrage",
        "definition": "The right to vote."
      },
      {
        "term": "Continuity and change",
        "definition": "Asking what stayed the same and what became different over time."
      }
    ],
    "backgroundReading": {
      "title": "Freedom, Law, and Power After the Civil War",
      "paragraphs": [
        "When the Civil War ended in 1865, so did slavery. Almost four million people who had been treated as property were suddenly free. But freedom did not explain itself. Freedpeople had to decide — and fight for — what freedom would actually mean. In their own words and actions, they made it clear: freedom meant reuniting families that slavery had torn apart, learning to read, marrying legally, earning fair wages, owning land, moving freely, and voting.",
        "To turn freedom into citizenship, Congress changed the Constitution three times. The 13th Amendment (1865) abolished slavery. The 14th Amendment (1868) declared that nearly everyone born in the United States is a citizen and that no state may deny anyone due process or equal protection of the laws. The 15th Amendment (1870) said states could not deny men the vote because of race. Congress also passed the Civil Rights Act of 1866. Together these were a constitutional revolution: for the first time, the federal government could protect an individual's rights against their own state.",
        "But a promise in the Constitution is not the same as protection in daily life. Across the South, state legislatures passed Black Codes in 1865 and 1866 to control Black labor and movement — punishing people for being 'vagrants,' forcing year-long labor contracts, and even paying bounties to return workers who quit. A new farming system, sharecropping, let freedpeople work land they did not own in exchange for part of the crop; debt often kept them tied to that land for years. The Freedmen's Bureau built schools and settled disputes, but it was underfunded and short-lived.",
        "For a time, the new rights were real. Black men voted in large numbers, and hundreds were elected to office, including two United States senators. But groups like the Ku Klux Klan used violence and terror to drive Black citizens away from the ballot box. The federal government fought back at first, then grew weary. The Supreme Court narrowed the amendments, and in 1877 the last federal troops left the South. Reconstruction was over.",
        "So which is the better answer to our driving question — transformation, or the old power left intact? Strong historians see both. The Constitution was changed permanently, and those words would fuel future struggles for equal rights. Yet at the time, most of the real power over land, work, and daily life stayed in the same hands. Your task is to read the evidence and decide how much truly changed."
      ]
    },
    "sourceWorksheet": {
      "source": {
        "title": "The Freedmen's Bureau Act (1865) — 'Forty Acres'",
        "excerpt": "\"That there is hereby established in the War Department ... a bureau of refugees, freedmen, and abandoned lands ... The commissioner ... shall have authority to set apart, for the use of loyal refugees and freedmen, such tracts of land within the insurrectionary states as shall have been abandoned ... and to every male citizen, whether refugee or freedman, ... there shall be assigned not more than forty acres of such land.\"",
        "attribution": "An Act to establish a Bureau for the Relief of Freedmen and Refugees, March 3, 1865 (13 Stat. 507).",
        "contextNote": "This law created the Freedmen's Bureau and promised land — the origin of the famous phrase 'forty acres.' Most freedpeople never actually received land, because President Andrew Johnson ordered confiscated and abandoned land returned to former owners. The gap between what this law promised and what happened is powerful evidence for the driving question. Wording is faithful to the statute."
      },
      "questions": [
        "SOURCING: Who created this document, and when? What was its purpose?",
        "COMPREHENSION: List two things the Freedmen's Bureau was supposed to do for freedpeople.",
        "VOCABULARY: In your own words, what does 'refugees and freedmen' mean?",
        "EVIDENCE: What did this law promise about land? Quote the exact phrase.",
        "REASONING: Most freedpeople never actually received this land. Does that fact support the 'transformed citizenship' side of our driving question, the 'left the old power intact' side, or both? Explain in two or three sentences."
      ]
    },
    "cerOrganizer": {
      "prompt": "After the Civil War, did Reconstruction transform American citizenship, or did it leave the old power structure mostly intact? Write and defend your answer using the unit documents.",
      "claimGuidance": "Your CLAIM is your answer in one clear sentence. The strongest claims are 'both/and' with a qualifier — for example: 'Reconstruction transformed the legal meaning of citizenship but left much of the old economic and social power structure intact.' Take a position you can actually defend with evidence. Avoid vague claims like 'a lot changed.'",
      "evidenceGuidance": "Choose at least THREE documents. From each, quote a short, exact phrase and label it (Doc A, Doc B ...). Deliberately pick evidence on BOTH sides — something that shows transformation (like the 14th Amendment) and something that shows continuity (like the Black Codes, a sharecropping contract, or Klan violence). Honest arguments use both.",
      "reasoningGuidance": "For each piece of evidence, explain HOW it proves your claim — do not just drop a quote and move on. Connect the document's author, date, and purpose to the driving question. Then address at least one piece of evidence that seems to argue AGAINST you ('Although Doc __ suggests ___, the stronger evidence shows ___'). Finish by naming one thing that CHANGED and one thing that STAYED THE SAME."
    },
    "exitTickets": [
      "Day 1: In one sentence, define what 'freedom' meant to freedpeople in 1865, using one detail from today's source.",
      "Day 2: Which amendment do you think most changed the meaning of citizenship, and why? Cite one exact phrase.",
      "Day 3: Name one specific way the Black Codes contradicted the 13th or 14th Amendment, and explain the contradiction.",
      "Day 4: Name one force that undermined Reconstruction (violence, the courts, the economy, or Northern politics) and explain how it worked.",
      "Day 5: Which single document most shaped your final answer, and why? Did your answer change from your first-day gut response — and what evidence moved you?"
    ],
    "dbqPrompt": "After the Civil War, did Reconstruction transform American citizenship, or did it leave the old power structure mostly intact? Using at least THREE documents from the unit set (the 14th Amendment; the Mississippi Black Codes; Frederick Douglass's 'What the Black Man Wants'; a sharecropping contract; and the Ku Klux Klan hearings testimony) plus your own knowledge, write an evidence-based argument. Include a clear, arguable claim; evidence cited by document letter; reasoning connecting evidence to your claim; at least one sentence answering a counterargument; and an analysis of what changed versus what stayed the same. Defend either position honestly — the strongest answers show BOTH transformation in law and continuity of power."
  }
};

export const reconstruction: ReconstructionUnit = data;
