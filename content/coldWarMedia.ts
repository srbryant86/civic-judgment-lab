import type { ReconstructionUnit } from "./types";

/* Static sample content — authored and adversarially fact-checked.
   Review all materials for accuracy before classroom use. */

const data = {
  "title": "Cold War Media and Power: Persuasion, Propaganda, and Proof",
  "course": "U.S. History II",
  "gradeBand": "Grades 10-12 (main version calibrated to Grade 11)",
  "mainVersion": "Grade 11 (U.S. History II). This five-day unit assumes students have already practiced sourcing, contextualization, corroboration, and claim-evidence-reasoning (CER) in the flagship Reconstruction unit and now apply the same disciplinary method to mass persuasion at the scale of the state. The recurring civic-judgment move is preserved and made explicit: students do not stop at \"is this source biased?\" They ask what the bias DOES — who benefits, who is harmed, and what happens when people act on it. The Grade 11 version uses full-length excerpts, expects a five-paragraph DBQ essay integrating at least three sourced documents plus one act of corroboration, and introduces students' first structured quantitative-source analysis (the \"missile gap\"). The unit deliberately treats propaganda as a general mechanism used by states on BOTH sides of the Cold War, remains nonpartisan about present-day politics, and refuses to flatten analysis into \"both sides are always equal\" — some accounts survive corroboration and others collapse, and students are taught to say which and why from the sources.",
  "middleAdaptation": "Middle-school support version (Grades 7-8). Keep the same five-day arc and the same core move (\"what does the persuasion DO?\"), but reduce cognitive and reading load. (1) Shorten every excerpt to one or two sentences and pre-teach vocabulary with the student-friendly definitions before reading. (2) Replace the DBQ essay with a scaffolded one-paragraph CER using a fill-in frame (\"My claim is ___. One source that supports this is ___, which says ___. This persuasion helps ___ and can harm ___.\"). (3) For Day 3, simplify the quantitative lesson to three plain questions — Who counted? What did they count? What did they leave out? — using a single, clearly labeled comparison of \"how many missiles people GUESSED\" versus \"how many there really were.\" (4) For Day 4, handle nuclear-fear content gently: show only a short clip or still of \"Duck and Cover,\" frame it historically (\"this is how kids your age were taught long ago\"), and always offer the alternate response. (5) Emphasize the concrete idea of \"reach\" — one message, millions of people — over abstract theory. Same nonpartisan framing and the same refusal to flatten to \"both sides equal\": at this level, state it plainly — \"Some scary claims turned out to be false when people checked the facts.\"",
  "drivingQuestion": "How did rival superpowers use media to shape what millions of people believed, and how do you judge a source built to persuade?",
  "overview": "This unit turns the historian's toolkit — sourcing, contextualization, corroboration, and claim-evidence-reasoning — onto the machinery of mass persuasion during the Cold War. Students investigate how the United States and the Soviet Union each used media at the scale of the state (posters, radio, film, television, official reports, and statistics) to shape what millions of people believed. The through-line is a single civic-judgment move students carry from the flagship Reconstruction unit: the question is never only \"Is this source biased?\" but \"What does the bias DO — who benefits, who is harmed, and what happens when people act on it?\" Day 1 establishes persuasion at scale, tracing the leap in \"reach\" from World War I posters to Cold War broadcasting. Day 2 draws the working distinction between information and propaganda using the Truman Doctrine and NSC-68, and government information programs such as Voice of America and Radio Free Europe, alongside a described Soviet parallel (TASS, Pravda, Radio Moscow). Day 3 is the unit's centerpiece and students' first formal quantitative-source lesson: the \"missile gap,\" where they learn to read what is counted, by whom, and what the categories do — and watch a frightening number collapse under corroboration. Day 4 examines fear as a persuasive tool through the Red Scare, HUAC, and civil-defense media like \"Duck and Cover.\" Day 5 is a claim-writing seminar and DBQ-style assessment. Throughout, the unit is administrator-safe and nonpartisan: it studies propaganda as a mechanism states use generally, never maps Cold War sides onto today's political parties, and models evidence-based reasoning that distinguishes accounts that survive corroboration from those that do not. It bridges settled history to the contemporary media mechanism and connects forward to the Information Revolutions module.",
  "essentialQuestions": [
    "How did rival superpowers use media to shape what millions of people believed, and how do you judge a source built to persuade? (unit driving question)",
    "PORTABLE: When two accounts disagree, how do we decide which one survives the evidence — and why do some accounts collapse under corroboration while others hold?",
    "PORTABLE: What does a biased narrative actually DO — who does it benefit, who does it harm, and what happens when people act on it?",
    "What is the difference between informing people and persuading them, and can a single message do both at once?",
    "How does the technology that carries a message (poster, radio, film, television, data table) change the message's power and reach?",
    "How can numbers persuade, and how do we read a statistic critically — asking who counted, what was counted, and what the categories include or leave out?"
  ],
  "objectives": [
    "Students will source a persuasive primary document by identifying its author, intended audience, purpose, and historical moment, and explain in writing how the purpose shapes the content (assessed on the analytic rubric at proficient or higher).",
    "Students will distinguish information from propaganda using at least two stated criteria and apply those criteria to a Cold War source, defending the classification with evidence.",
    "Students will read a quantitative source by identifying what is counted, who counted it, and what the categories include or exclude, and will judge whether a numerical claim survives corroboration.",
    "Students will analyze fear-based messaging and explain what the persuasion DOES — naming who benefits, who is harmed, and the consequences when people act on it.",
    "Students will corroborate across at least two sources and state, with evidence, which account survives scrutiny and which collapses, avoiding a false 'both sides are equal' conclusion.",
    "Students will write an evidence-based argument (CER) answering the driving question, integrating at least three sourced documents and one explicit act of corroboration, at proficient or higher on the rubric."
  ],
  "vocabulary": [
    {
      "term": "Propaganda",
      "definition": "Messaging designed mainly to persuade an audience toward a belief or action. It often uses true facts, but selects and frames them to move you, not just to inform you."
    },
    {
      "term": "Information",
      "definition": "Content whose main job is to help you understand or decide accurately. In the real world, information and persuasion often overlap — part of your job is to tell how much of each a source is doing."
    },
    {
      "term": "Mass media",
      "definition": "Tools that let one sender reach a very large audience at once — posters, radio, film, newspapers, television, and today, feeds and apps."
    },
    {
      "term": "Reach",
      "definition": "How many people a message can touch. New technology raised reach from a crowd in a square to millions of homes at the same moment."
    },
    {
      "term": "Framing",
      "definition": "The choice of words, images, and comparisons that shapes how you feel about a fact before you even think about it (for example, 'freedom fighters' versus 'rebels')."
    },
    {
      "term": "Sourcing",
      "definition": "Asking who made a source, when, for whom, and why, before deciding how much to trust it."
    },
    {
      "term": "Contextualization",
      "definition": "Placing a source in its time and situation so its choices make sense (what was happening, what people feared)."
    },
    {
      "term": "Corroboration",
      "definition": "Checking a claim against other independent sources to see whether it holds up or falls apart."
    },
    {
      "term": "Claim-Evidence-Reasoning (CER)",
      "definition": "A way to argue: state a claim, back it with specific evidence, then explain the reasoning that connects the evidence to the claim."
    },
    {
      "term": "Quantitative source",
      "definition": "A source made mostly of numbers — a count, a poll, a table, or a statistic. It still has an author and a purpose and can be read critically like any other source."
    },
    {
      "term": "Category (in data)",
      "definition": "The definition of what gets counted. Changing the category (for example, 'projected' missiles versus 'operational' missiles) can change the answer completely."
    },
    {
      "term": "Containment",
      "definition": "The U.S. Cold War strategy of stopping the spread of Soviet influence rather than directly attacking the Soviet Union."
    },
    {
      "term": "Truman Doctrine",
      "definition": "President Truman's 1947 pledge that the United States would support 'free peoples' resisting takeover — an early, framing-heavy statement of containment."
    },
    {
      "term": "NSC-68",
      "definition": "A secret 1950 U.S. government report that framed the Cold War as a total contest between a free society and a controlled one and called for a large military buildup."
    },
    {
      "term": "Red Scare",
      "definition": "A period of intense fear of communist influence inside the United States, when accusations sometimes outran evidence."
    },
    {
      "term": "HUAC (House Un-American Activities Committee)",
      "definition": "A congressional committee that investigated suspected communist ties; its public hearings could damage reputations and careers, sometimes with little proof."
    },
    {
      "term": "Blacklist",
      "definition": "An unofficial list of people denied work because of suspected political beliefs or associations, often without a fair hearing."
    },
    {
      "term": "Civil defense",
      "definition": "Government programs meant to prepare civilians for attack — including the atomic-age films and pamphlets that mixed real safety advice with fear."
    },
    {
      "term": "Missile gap",
      "definition": "A widely believed 1950s-60s claim that the Soviets had far more long-range missiles than the U.S. Corroboration later showed the gap was not real in the direction people feared."
    },
    {
      "term": "Voice of America / Radio Free Europe",
      "definition": "U.S. government-backed international broadcasters that carried news and messaging across the Iron Curtain. Voice of America was openly a U.S. government station; Radio Free Europe was, in this era, secretly funded by the CIA and publicly presented as citizen-supported — a hidden framing not revealed until the late 1960s-1971."
    },
    {
      "term": "Censorship",
      "definition": "The suppression or control of information a government or authority does not want an audience to see or hear."
    }
  ],
  "historicalThinkingSkills": [
    "Sourcing — evaluating author, audience, purpose, and reliability of persuasive material",
    "Contextualization — situating messages in the fears and events of the early Cold War",
    "Corroboration — testing claims across independent sources, including deciding which accounts survive and which collapse",
    "Claim-Evidence-Reasoning — constructing and defending an evidence-based historical argument",
    "Analyzing quantitative and statistical evidence — reading what is counted, by whom, and what the categories do",
    "Analyzing point of view and purpose — distinguishing informing from persuading",
    "Continuity and change over time — tracing 'reach' across information revolutions from print to broadcast to today",
    "Causation — explaining how media messaging shaped policy, elections, and public behavior"
  ],
  "alignmentCategories": [
    "Media Literacy and Source Analysis",
    "Propaganda, Persuasion, and Public Opinion",
    "Cold War and U.S. Foreign Policy",
    "Government, Civic Institutions, and Public Communication",
    "Quantitative and Data Literacy",
    "Rights, Dissent, and Civil Liberties",
    "Historical Argumentation and Academic Writing",
    "Continuity and Change: Information Revolutions"
  ],
  "teacherNotes": [
    "PACING: Five 50-minute periods; on block schedule combine Days 1+2 and Days 4+5 and keep Day 3 standalone. Minimum viable path if time is short: Days 2, 3, and 5.",
    "NONPARTISAN GUARDRAIL: Teach propaganda as a general state mechanism used on BOTH Cold War sides; never map American or Soviet sides onto present-day U.S. parties. Redirect any partisan turn to 'what does this technique DO?'",
    "HANDLE REAL HARM WITH CARE: The blacklist ended real careers, sometimes on little evidence. Focus on the mechanism of accusation and fear, not on relitigating any individual's guilt; do not re-stigmatize.",
    "NUCLEAR ANXIETY: Frame 'Duck and Cover' historically, keep clips short, and offer the alternate response without requiring students to explain why.",
    "REFUSE FALSE EQUIVALENCE: Both sides persuaded, but hold the distinction — the missile gap collapsed under corroboration, and independent cross-checking differs from a state news monopoly. Say which accounts survive and why, from the sources.",
    "ACCURACY NUANCE ON U.S. BROADCASTERS: Voice of America was an openly acknowledged U.S. government station, but Radio Free Europe (and Radio Liberty) were, in this period, covertly funded by the CIA and publicly presented as citizen-supported through the 'Crusade for Freedom' — a fact not exposed until 1967 and confirmed in 1971. If it fits your class, use this as a live media-literacy point: even the 'information' side sometimes concealed who was really speaking.",
    "SOURCE INTEGRITY: All excerpts are public-domain U.S. government works or documented period material; the Day 3 table is an explicitly labeled classroom reconstruction of a documented pattern (agency divergence + tiny actual deployment), never presented as an exact archival dataset. Describe Soviet propaganda as a parallel system; do not fabricate Soviet quotations. In the Kitchen Debate, Nixon's words are quoted in English while Khrushchev's are paraphrased, since his remarks reached Americans through interpreters.",
    "KEY MISCONCEPTIONS TO PRE-EMPT: propaganda equals lies (it often uses true facts); the missile gap was real (it was not, in the feared direction); only one side used propaganda; numbers are neutral (categories are choices); 'Duck and Cover' was pure lies (it both informed and manipulated).",
    "BRIDGE FORWARD: End by connecting the same civic-judgment move to the Information Revolutions module — algorithmic feeds apply the identical persuasion mechanics at far greater reach and speed."
  ],
  "days": [
    {
      "day": 1,
      "title": "Persuasion at Scale: From Posters to Broadcasts",
      "objective": "Students will explain how new media technologies let states reach millions at once, and will source a World War I persuasion poster to identify what it wants the audience to DO.",
      "bellRinger": "Projected or printed: the 1917 'I Want YOU for U.S. Army' poster (James Montgomery Flagg). Quick-write (3 minutes): 'What does this image want you to do, and name one technique it uses to make you do it.' No wrong answers yet — just notice the move.",
      "miniLesson": "Frame 'reach' as the unit's first big idea. Trace the leap: a speaker in a square reaches hundreds; a printed poster reaches thousands; radio and film reach millions in their homes at the same moment. Introduce the U.S. Committee on Public Information (the Creel Committee) in World War I as an early modern state persuasion machine that coordinated posters, films, pamphlets, and thousands of 'Four-Minute Men' speakers. Define propaganda (persuasion at scale, often using true facts, selected and framed) and preview the recurring move: not just 'is it biased?' but 'what does the bias DO?' Set up the Cold War as the moment reach expands again with television.",
      "sourceActivity": {
        "title": "World War I Recruitment and Enlistment Posters (U.S. Committee on Public Information era)",
        "excerpt": "Poster 1 (James Montgomery Flagg, 1917): 'I Want YOU for U.S. Army — Nearest Recruiting Station.' Poster 2 (H. R. Hopps, c. 1917-1918): 'Destroy this Mad Brute — Enlist.' [Slogans quoted; imagery described by the teacher: Poster 1 shows Uncle Sam pointing directly at the viewer; Poster 2 depicts the enemy as a monstrous ape to dehumanize him.]",
        "attribution": "U.S. World War I mobilization posters, 1917-1918. The Flagg 'I Want YOU' image was published for the war-recruiting effort; the Hopps 'Destroy this Mad Brute' enlistment poster dates to c. 1917-1918. Both are public domain. (Note: these were produced within the broader wartime mobilization; not every individual poster was printed directly by the Committee on Public Information.)",
        "contextNote": "The Committee on Public Information (1917-1919), led by George Creel, coordinated a national persuasion effort during World War I. These posters are precursors to Cold War mass media: same goal (move millions to act), earlier technology. The 'Mad Brute' poster is a deliberate example of dehumanizing framing — teach it as evidence of a technique, with care.",
        "task": "In pairs, complete a sourcing chart for one poster: Who made it? For whom? Why, at that moment? What EXACTLY does it want the viewer to do? Then answer the civic-judgment question in one sentence: 'This persuasion benefits ___ and could harm ___.'"
      },
      "discussionQuestion": "When a government can speak to millions at once, who gains power — and who might be harmed when that power is used? Point to something specific in a poster.",
      "studentTask": "Complete the sourcing chart and write a two-sentence CER mini-response: Claim (what the poster wants the viewer to do) + Evidence (a specific word or image) + Reasoning (why that choice works on an audience).",
      "exitTicket": "In your own words, define 'propaganda,' then name ONE thing it DOES (not just what it is).",
      "differentiation": {
        "strugglingReaders": "Provide the slogans in large print with the sourcing chart pre-labeled and one sentence-starter per box ('This poster was made by ___ to ___'). Read all text aloud before independent work.",
        "advanced": "Add a continuity-and-change prompt: compare the reach of a 1917 poster to a 1950s TV broadcast to a present-day feed. Which technique survives across all three, and what changes is only the scale? Write three sentences.",
        "englishLearners": "Pre-teach five words (recruit, enlist, brute, persuade, technique) with visuals and cognates where possible. Allow the sourcing chart to be completed in short phrases; sentence frames provided for the CER response.",
        "iepAnd504": "Reduce to one poster and a three-box chart (Who / For whom / What it wants). Provide the chart digitally with checkboxes for common techniques. Extended time as needed per plan.",
        "executiveFunction": "Give a visible three-step checklist (1. label the poster, 2. fill the chart, 3. write two sentences) with a small progress tracker. Set a soft timer displayed on the board.",
        "alternateResponse": "Students may record a 60-second audio explanation of what the poster wants and what it does, or sketch and label the technique, instead of writing the CER response."
      }
    },
    {
      "day": 2,
      "title": "Information vs. Propaganda: Framing the Cold War",
      "objective": "Students will distinguish information from propaganda using stated criteria and will identify the us/them framing in the Truman Doctrine and NSC-68, explaining what that framing DOES.",
      "bellRinger": "Two headlines about the same imaginary event — one plain ('Nation increases defense budget'), one loaded ('Nation races to survive enemy threat'). Quick-write: 'Which one persuades more, and what specific word does the work?'",
      "miniLesson": "Draw the working distinction: information aims to help you understand accurately; propaganda aims mainly to move you. Stress that they overlap — propaganda often uses true facts. Give students two portable test questions: (1) 'What does this source want me to DO or believe?' and (2) 'What did it leave out?' Introduce the Truman Doctrine (1947) 'two ways of life' framing — note it explicitly names 'a controlled press and radio' as a mark of the other side, which is gold for a media unit. Introduce NSC-68 (1950) and its total, civilization-scale framing. Then present government information programs on both sides: Voice of America and Radio Free Europe (U.S.), and the described Soviet parallel — TASS, Pravda ('Truth'), Izvestia ('News'), Radio Moscow, and the Agitprop apparatus. Note the media-literacy twist that Voice of America was openly a government station while Radio Free Europe was secretly CIA-funded in this era. Do NOT fabricate Soviet quotations; describe the system. End on the discipline: both sides persuaded, but that does not make every claim equally true — test with corroboration.",
      "sourceActivity": {
        "title": "The Truman Doctrine (1947) and NSC-68 (1950)",
        "excerpt": "Truman Doctrine, address to Congress, March 12, 1947: 'At the present moment in world history nearly every nation must choose between alternative ways of life... One way of life is based upon the will of the majority... The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio, fixed elections, and the suppression of personal freedoms.' — NSC-68, April 1950: 'The issues that face us are momentous, involving the fulfillment or destruction not only of this Republic but of civilization itself.' [NSC-68 further framed the contest as one between a free society and a controlled, unfree one — paraphrase of the report's framing, not a direct quotation.]",
        "attribution": "Harry S. Truman, Address before a Joint Session of Congress, March 12, 1947 (public domain, U.S. government). NSC-68, 'United States Objectives and Programs for National Security,' National Security Council, presented April 1950 (declassified 1975; public domain, U.S. government).",
        "contextNote": "The Truman Doctrine was public and meant to persuade Congress and the nation to fund aid to Greece and Turkey. NSC-68 was SECRET until declassified in 1975 — an internal document meant to persuade the government itself to build up. Different audiences, same technique: a stark us/them binary. Note the Truman passage names 'a controlled press and radio' as a feature of the other side, making media control itself part of the argument.",
        "task": "For each document, underline the words that build an 'us vs. them' binary. Then answer: Who is placed INSIDE 'free peoples,' who is placed outside, and what does that framing make the audience want to DO?"
      },
      "discussionQuestion": "The Truman Doctrine contains true facts and a persuasive frame at the same time. Is it information, propaganda, or both — and what test did you use to decide?",
      "studentTask": "Complete a two-column framing analysis (Truman vs. NSC-68): audience, the binary each draws, one word doing persuasive work, and 'what the framing DOES.' Add one corroboration note: does another source you have seen support or complicate this framing?",
      "exitTicket": "Write one sentence naming the difference between information and propaganda, then give ONE test question you can ask any source to tell them apart.",
      "differentiation": {
        "strugglingReaders": "Provide a shortened Truman excerpt (the 'two ways of life' sentences only) with the binary words pre-boxed as a model, then have students find the rest. Audio version available.",
        "advanced": "Add a source-purpose puzzle: NSC-68 was secret, yet still persuasive. Whom was it persuading, and why does a government need to persuade itself? Write a short paragraph on internal propaganda.",
        "englishLearners": "Pre-teach 'binary,' 'framing,' 'subjugation,' 'oppression,' and 'controlled press' with simple definitions and a bilingual glossary. Provide the two-column chart with sentence frames.",
        "iepAnd504": "Provide a single-document version (Truman only) with a three-question guide. Chunk the reading into two parts with a check-in between. Extended time per plan.",
        "executiveFunction": "Number the steps on the chart and provide a 'you are here' marker. Break the discussion into a 2-minute pair talk before any whole-class share so no one has to hold the whole task in mind.",
        "alternateResponse": "Students may complete the framing analysis as a labeled diagram (two circles: 'us' and 'them') with arrows to the words that build each side, instead of prose."
      }
    },
    {
      "day": 3,
      "title": "Reading the Numbers: The Missile Gap and Quantitative Sources",
      "objective": "Students will read a quantitative source by identifying what is counted, who counted it, and what the categories include or exclude, and will judge whether the 'missile gap' claim survived corroboration.",
      "bellRinger": "On the board: 'A number is an argument.' Show a bare statistic ('Threat up 300%!') with no source. Quick-write: 'What THREE things do you need to know before you trust this number?'",
      "miniLesson": "This is the unit's quantitative anchor. Teach the four questions of quantitative sourcing: (1) Who counted? (2) What exactly did they count — what is the category? (3) What was left out? (4) What does the number make you want to DO? Apply them to the 'missile gap.' Explain that in the late 1950s, fear spread that the Soviets had far more long-range missiles (ICBMs) than the U.S. Different U.S. agencies produced very different estimates — the Air Force projected far more Soviet missiles than the CIA, Army, or Navy. The category matters: a 'projected' missile is one an agency EXPECTS to exist; an 'operational' missile is one actually deployed and ready. As U-2 flights and then Corona reconnaissance satellites returned imagery (Corona's first successful mission was in 1960), U.S. estimates were sharply revised downward, and by 1961 it was clear the Soviets had very few operational ICBMs — the terrifying gap did not exist in the direction people feared. This is the clearest case in the unit of a number that did NOT survive corroboration. Connect to power: while people believed the gap, it shaped budgets, elections, and fear.",
      "sourceActivity": {
        "title": "The 'Missile Gap': Estimates vs. Reality (quantitative source)",
        "excerpt": "Projected Soviet long-range missiles (ICBMs), selected U.S. estimates for the early 1960s — CLASSROOM RECONSTRUCTION of a documented pattern:  •  U.S. Air Force projection (late 1950s): many hundreds of Soviet ICBMs expected.  •  Other agencies (CIA, Army, Navy): far fewer — a fraction of the Air Force figure.  •  Actual OPERATIONAL Soviet ICBMs revealed by reconnaissance, by 1961: only a handful (commonly cited as about four).  Category note: 'projected' = missiles an agency EXPECTED to exist; 'operational' = missiles actually deployed and ready. These are different categories. In 1961, U.S. Secretary of Defense Robert McNamara acknowledged that studies showed no 'missile gap' in the Soviets' favor.",
        "attribution": "Reconstructed from declassified U.S. National Intelligence Estimates and later historical assessments of the 'missile gap,' c. 1957-1961. Numbers are simplified for instruction; the DOCUMENTED facts are the wide divergence among agency estimates and the very small actual Soviet deployment. Public-domain U.S. government context.",
        "contextNote": "This table is deliberately labeled a teaching reconstruction — do not treat the simplified numbers as an exact archival figure. What IS documented and reliable: agencies disagreed sharply, the Air Force estimate ran far higher than others, and reconnaissance revealed the Soviets had far fewer operational ICBMs than feared. It is the strongest case in the unit of a claim collapsing under corroboration.",
        "task": "Apply the four questions to the table in writing. Then answer the corroboration question: What NEW evidence (reconnaissance) changed the picture, and what does that tell you about trusting a scary number before it is checked?"
      },
      "discussionQuestion": "The missile gap did not survive corroboration. While people still believed it, who benefited from the number — and who or what was harmed by acting on a claim that turned out to be wrong?",
      "studentTask": "Complete the quantitative-sourcing worksheet: identify who counted, the category counted, what was left out, and what the number pushed people to do. Write a one-paragraph CER: Did the missile-gap claim survive corroboration? Claim + evidence from the table + reasoning.",
      "exitTicket": "Apply the four questions to a brand-new number I give you ('Poll: 80% support the plan'). Write the two questions you would ask FIRST before believing it.",
      "differentiation": {
        "strugglingReaders": "Provide the table as three plain bars labeled 'GUESSED (high),' 'GUESSED (low),' and 'REALLY THERE,' with the four questions rewritten in everyday language and one sentence-starter each. Read aloud.",
        "advanced": "Extension: research the difference between 'projected' and 'operational' counts and propose one honest way and one misleading way the SAME data could be reported. Connect to how a poll's wording can change its result.",
        "englishLearners": "Pre-teach 'projected,' 'operational,' 'estimate,' 'reconnaissance,' and 'gap' with icons. Provide the four questions in a bilingual frame and allow phrase-level answers.",
        "iepAnd504": "Reduce to two questions (Who counted? What was left out?) applied to a two-row version of the table. Provide a partially completed model for the first row. Extended time per plan.",
        "executiveFunction": "Turn the four questions into a numbered checklist with checkboxes. Do question 1 together as a class model, then release questions 2-4 for independent work with a visible timer.",
        "alternateResponse": "Students may explain the four questions aloud in a 90-second recording using the table, or annotate a printed table with sticky notes, instead of the written worksheet."
      }
    },
    {
      "day": 4,
      "title": "Fear as a Tool: The Red Scare, HUAC, and Duck and Cover",
      "objective": "Students will analyze fear as a persuasive mechanism and explain what fear-based messaging DOES — who is protected, who is harmed — using HUAC records and civil-defense media.",
      "bellRinger": "Quick-write (private, not collected): 'Think of a time fear made you act fast without checking the facts. What did fear make easy to skip?' Share only if comfortable.",
      "miniLesson": "Define the Red Scare and the mechanism of accusation. Introduce HUAC and its recurring loyalty question, and the blacklist — careers destroyed, sometimes with little or no evidence (a live example of accounts that collapse under scrutiny; handle with care and specificity). Then introduce civil-defense media: 'Duck and Cover' (produced 1951, released 1952) and pamphlets like 'Survival Under Atomic Attack' (1950). Hold the nuance firmly: these mixed genuinely protective advice (get down, shield from flash and flying glass) with fear-normalizing messaging and a promise of survivability the government could not guarantee. Teach the key idea: a message can inform AND manipulate at once. Anchor everything to the civic-judgment move — for each source ask who benefits, who is harmed, and what happens when people act on it.",
      "sourceActivity": {
        "title": "HUAC Loyalty Question and Civil-Defense Media",
        "excerpt": "HUAC hearings (recurring question to witnesses, 1947 and after): 'Are you now or have you ever been a member of the Communist Party of the United States?' — 'Duck and Cover' (produced 1951): 'Bert the Turtle was very alert. When danger threatened him, he never got hurt. He knew just what to do... He ducked, and covered.' [jingle lightly condensed] — 'Survival Under Atomic Attack' (1950): 'You can live through an atom bomb raid and you won't have to have a Geiger counter, protective clothing, or special training in order to do it.'",
        "attribution": "House Un-American Activities Committee public hearing records, U.S. Congress, 1947 and after (public domain). 'Duck and Cover,' Archer Productions for the Federal Civil Defense Administration, produced 1951 and released in 1952 (public domain). 'Survival Under Atomic Attack,' U.S. civil-defense booklet issued by the National Security Resources Board, 1950 (public domain, U.S. government).",
        "contextNote": "The HUAC question sounds simple but functioned as a trap: any answer could harm the witness, and refusal could mean contempt charges or the blacklist. 'Duck and Cover' targeted schoolchildren; its cheerful jingle is part of the persuasion. Treat the blacklist with care — the point is the MECHANISM of fear and accusation, not relitigating any individual's guilt.",
        "task": "For EACH of the three sources, answer the civic-judgment triad in one line: Who benefits? Who is harmed? What happens when people act on it? Then choose the source you find most double-edged (informs AND manipulates) and explain in two sentences."
      },
      "discussionQuestion": "'Duck and Cover' taught a real, if limited, safety action AND normalized constant fear in children. Can a single message do both at once? Use it to argue whether 'is it biased?' is even the right first question.",
      "studentTask": "Complete the 'What does the fear DO?' analysis grid across all three sources. Then write a CER paragraph: Is fear-based messaging always illegitimate, or can it be legitimate? Claim + evidence from at least two sources + reasoning that distinguishes protection from control.",
      "exitTicket": "Name one LEGITIMATE use and one HARMFUL use of fear in public messaging, each tied to a source from today.",
      "differentiation": {
        "strugglingReaders": "Provide a three-row grid with the triad questions pre-written and one sentence-starter per cell. Offer the 'Duck and Cover' line with the informing part and the fear part color-coded as a model.",
        "advanced": "Extension: research one documented consequence of the blacklist and evaluate the evidence behind a specific accusation — did the account survive scrutiny? Write a short sourcing note distinguishing evidence from insinuation.",
        "englishLearners": "Pre-teach 'loyalty,' 'accusation,' 'blacklist,' 'shelter,' 'survive,' and 'normalize' with visuals. Provide the triad as a labeled three-box frame and allow phrase answers.",
        "iepAnd504": "Reduce to two sources (the HUAC question and 'Duck and Cover') and the triad only. Preview the nuclear content privately and confirm the alternate option before the lesson. Extended time per plan.",
        "executiveFunction": "Provide the grid as a checklist with one source at a time revealed, so students finish and check off each before the next. Visible timer per source.",
        "alternateResponse": "Students who prefer not to engage the nuclear-fear material may analyze the HUAC question alone, or respond via a recorded explanation or an annotated image, without disclosing a reason."
      }
    },
    {
      "day": 5,
      "title": "Claim-Writing Seminar and DBQ Assessment",
      "objective": "Students will write an evidence-based argument answering the driving question, integrating at least three sourced documents and one explicit act of corroboration, and naming what each source's persuasive design DOES.",
      "bellRinger": "Turn the driving question into your one-sentence working claim: 'Rival superpowers used media to ___, and to judge a source built to persuade you should ___.'",
      "miniLesson": "Brief, then release to writing. Review CER and model integrating a source with sourcing built in ('Because NSC-68 was written to persuade the government itself, its civilization-scale framing... which DOES...'). Model one act of corroboration (does a second source support or undercut the first?) and one honest acknowledgment that an account collapses (the missile gap). Restate the standard: reject 'both sides are always equal' — say which claims survive the evidence and why. Run a 10-minute seminar: students share working claims and test each against a counter-source, then write.",
      "sourceActivity": {
        "title": "DBQ Document Set (assessment)",
        "excerpt": "Students receive the five-document DBQ set (Truman Doctrine; NSC-68; 'Duck and Cover'; the missile-gap estimate table; and the 1959 Kitchen Debate). See the unit DBQ section for full documents, attributions, and context notes.",
        "attribution": "Compiled public-domain U.S. government works and documented period material; see individual document attributions in the DBQ section.",
        "contextNote": "This is the summative task. Students have seen four of the five documents across Days 1-4; the Kitchen Debate is the one fresh source, testing transfer of the sourcing and civic-judgment moves to an unfamiliar text.",
        "task": "Write a DBQ essay answering the driving question. Make a defensible claim, use specific evidence from at least THREE documents, source each, corroborate across at least two, and explain what each source's persuasive design DOES. Name at least one account that does NOT survive corroboration and say why."
      },
      "discussionQuestion": "Seminar: Share your working claim. Which single document in the set would most CHANGE your mind if you took it seriously — and why does steelmanning the other view make your own argument stronger?",
      "studentTask": "Draft and complete the DBQ essay using the CER organizer, meeting the requirements: claim, three sourced documents, one corroboration, and the civic-judgment analysis (what the bias does).",
      "exitTicket": "In one sentence: which source in the set would most change your mind, and what would it take for you to accept it (the steelman test)?",
      "differentiation": {
        "strugglingReaders": "Provide the documents at shortened length with key lines highlighted and a paragraph-by-paragraph outline frame. Permit a structured four-paragraph response instead of five.",
        "advanced": "Require integration of all five documents and a historiographical sentence: how might a historian in 1960 versus 2010 weigh these sources differently? Optional connection to a present-day media mechanism.",
        "englishLearners": "Provide a bilingual glossary of the DBQ command words (claim, evidence, corroborate, source, framing) and paragraph frames. Allow extended time and a bilingual dictionary.",
        "iepAnd504": "Provide the CER graphic organizer pre-populated with document titles and one sentence-starter per body paragraph. Reduce minimum to two documents with strong analysis. Extended time and, if in plan, a scribe.",
        "executiveFunction": "Provide a visible checklist (claim written / doc 1 sourced / doc 2 sourced / corroboration named / what-the-bias-does stated / conclusion) and time-box each paragraph on the board.",
        "alternateResponse": "Students may deliver the argument as a recorded 3-4 minute spoken essay or a slide-with-narration, meeting the same evidence and sourcing requirements, per plan."
      }
    }
  ],
  "quiz": [
    {
      "question": "Which statement best defines 'propaganda' as used in this unit?",
      "answer": "Messaging designed mainly to persuade an audience toward a belief or action, often by selecting and framing information that may include true facts.",
      "choices": [
        "Any statement that contains a lie",
        "Messaging designed mainly to persuade an audience, often by selecting and framing true facts",
        "Information published only by a government",
        "A message that no one believes"
      ],
      "explanation": "The unit's central correction to a common misconception: propaganda is not defined by falsehood. It frequently uses true facts, selected and framed to move you. That is why sourcing and corroboration matter more than a simple lie-detector reflex."
    },
    {
      "question": "The Truman Doctrine (1947) framed the world as a choice between two 'ways of life.' Which detail from the speech is most useful for a MEDIA unit specifically?",
      "answer": "Its description of the opposing way of life as relying on 'a controlled press and radio,' which makes control of media itself part of the argument.",
      "choices": [
        "Its request for economic aid to Greece and Turkey",
        "Its description of the other way of life relying on 'a controlled press and radio'",
        "Its date, March 12, 1947",
        "Its length"
      ],
      "explanation": "The Truman Doctrine explicitly names 'a controlled press and radio' as a marker of the opposing system. That makes media control itself a persuasive point in the speech — ideal for analyzing how framing works in a unit about media and power."
    },
    {
      "question": "Give ONE reason the 'missile gap' claim did NOT survive corroboration.",
      "answer": "Different U.S. agencies produced sharply different estimates (the Air Force projected far more Soviet missiles than others), and reconnaissance by 1961 revealed the Soviets actually had very few operational ICBMs — so the feared gap did not exist in that direction.",
      "explanation": "This is the unit's clearest example of an account collapsing under corroboration. New independent evidence (U-2 and Corona satellite reconnaissance) contradicted the frightening projections, and Secretary McNamara acknowledged there was no missile gap in the Soviets' favor."
    },
    {
      "question": "In quantitative sourcing, asking 'what does the category DO?' means:",
      "answer": "Examining how the definition of what is counted (for example, 'projected' versus 'operational' missiles) includes or excludes cases and can change the conclusion.",
      "choices": [
        "Checking whether the math was added correctly",
        "Examining how the definition of what is counted includes or excludes cases and shapes the conclusion",
        "Counting how many sources agree",
        "Deciding whether numbers are more trustworthy than words"
      ],
      "explanation": "Categories are choices, not neutral facts. Whether a count uses 'projected' or 'operational,' and who is included or left out, can flip the answer. Reading the category is the core skill of Day 3."
    },
    {
      "question": "'Duck and Cover' (1951/1952) is best understood as:",
      "answer": "Both a limited, genuinely protective safety instruction AND fear-normalizing messaging — a message that informs and manipulates at the same time.",
      "choices": [
        "Pure lies with no real safety value",
        "A neutral scientific document",
        "Both a limited real safety instruction and fear-normalizing messaging at once",
        "Soviet propaganda"
      ],
      "explanation": "The disciplined answer holds two truths: the film taught a limited, real protective action while also normalizing constant fear and implying a survivability the government could not guarantee. A single message can inform and manipulate simultaneously."
    },
    {
      "question": "The unit's recurring civic-judgment move asks not just 'Is this source biased?' but 'What does the bias DO?' Name the three sub-questions.",
      "answer": "Who benefits? Who is harmed? What happens when people act on it?",
      "explanation": "Naming bias is only the start. The disciplinary payoff is tracing consequences: identifying beneficiaries, those harmed, and the results when an audience acts on the persuasion. This is the move students carry from the flagship Reconstruction unit."
    },
    {
      "question": "The unit warns against flattening analysis into 'both sides are always equal.' What is the disciplined alternative?",
      "answer": "Acknowledge that both superpowers used persuasion, but test claims with corroboration and state which accounts survive the evidence and which collapse, and why — grounded in the sources.",
      "choices": [
        "Decide the U.S. was always right",
        "Decide the USSR was always right",
        "Acknowledge both sides persuaded, but use corroboration to say which specific claims survive and which collapse",
        "Avoid judging any source"
      ],
      "explanation": "Recognizing that both states used propaganda does NOT make every claim equally true. The discipline is corroboration: the missile gap collapsed under evidence; other accounts held. Saying which and why, from the sources, is the point."
    }
  ],
  "dbq": {
    "prompt": "Using the documents below and your knowledge of the era, answer the unit driving question: How did rival superpowers use media to shape what millions of people believed, and how do you judge a source built to persuade? Make a defensible claim, support it with specific evidence from at least THREE documents, source each document (who made it, for whom, and why), corroborate across at least two documents, and explain what each source's persuasive design DOES (who benefits, who is harmed, what happens when people act on it). Identify at least one account that does NOT survive corroboration and explain why.",
    "guidance": "A proficient response does five things: (1) states a claim that actually answers both halves of the question; (2) uses specific evidence from at least three documents, not vague summary; (3) sources each document rather than treating it as neutral fact; (4) corroborates — shows two documents supporting or complicating each other — and names at least one claim that collapses under scrutiny (the missile gap is the strongest example); (5) performs the civic-judgment move, explaining what the persuasion DOES. Avoid the trap of concluding 'both sides were equally biased, so nothing is knowable.' Both superpowers persuaded — Voice of America and Radio Free Europe on the U.S. side (with the wrinkle that Radio Free Europe was covertly CIA-funded in this era), and the Soviet TASS/Pravda/Radio Moscow apparatus on the other — but persuasion is not the same as being false, and some claims survive corroboration while others do not. Reward students who hold that distinction. Note for the teacher: Documents A-D were studied across Days 1-4; Document E (Kitchen Debate) is the transfer source.",
    "documents": [
      {
        "title": "Document A — The Truman Doctrine",
        "excerpt": "'At the present moment in world history nearly every nation must choose between alternative ways of life... One way of life is based upon the will of the majority... The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio, fixed elections, and the suppression of personal freedoms.'",
        "attribution": "Harry S. Truman, Address before a Joint Session of Congress, March 12, 1947. Public domain (U.S. government).",
        "contextNote": "A PUBLIC speech meant to persuade Congress and the nation to fund aid to Greece and Turkey. Note that it names 'a controlled press and radio' as a mark of the opposing system — media control is part of the argument."
      },
      {
        "title": "Document B — NSC-68",
        "excerpt": "'The issues that face us are momentous, involving the fulfillment or destruction not only of this Republic but of civilization itself.' [The report further framed the struggle as one between a free society and a controlled, unfree one — paraphrase of its framing, not a direct quotation.]",
        "attribution": "NSC-68, 'United States Objectives and Programs for National Security,' National Security Council, presented April 1950. Declassified 1975; public domain (U.S. government).",
        "contextNote": "A SECRET internal report — its audience was the U.S. government itself, which it sought to persuade toward a large military buildup. Compare its private audience with Document A's public one; the same total us/them framing appears in both."
      },
      {
        "title": "Document C — 'Duck and Cover'",
        "excerpt": "'Bert the Turtle was very alert. When danger threatened him, he never got hurt. He knew just what to do... He ducked, and covered.' [jingle lightly condensed]",
        "attribution": "'Duck and Cover,' Archer Productions for the Federal Civil Defense Administration, produced 1951 and released 1952. Public domain.",
        "contextNote": "Civil-defense media aimed at schoolchildren. It mixed a limited, real protective action with a cheerful tone that normalized living under constant nuclear fear — a message that informs and manipulates at once."
      },
      {
        "title": "Document D — The 'Missile Gap': Estimates vs. Reality (quantitative source)",
        "excerpt": "Projected Soviet ICBMs, early 1960s (CLASSROOM RECONSTRUCTION of a documented pattern): U.S. Air Force projection — many hundreds expected; other agencies (CIA, Army, Navy) — far fewer; actual OPERATIONAL Soviet ICBMs revealed by reconnaissance, by 1961 — only a handful (commonly cited as about four). In 1961, Secretary of Defense Robert McNamara acknowledged studies showed no 'missile gap' in the Soviets' favor.",
        "attribution": "Reconstructed from declassified U.S. National Intelligence Estimates and later historical assessments, c. 1957-1961. Numbers simplified for instruction; the documented facts are the agency divergence and the small actual deployment. Public-domain U.S. government context.",
        "contextNote": "The strongest case of a claim that did NOT survive corroboration. 'Projected' and 'operational' are different categories; new reconnaissance evidence contradicted the fearful projections."
      },
      {
        "title": "Document E — The 'Kitchen Debate'",
        "excerpt": "Vice President Richard Nixon to Soviet Premier Nikita Khrushchev, at a model American kitchen: 'Would it not be better to compete in the relative merits of washing machines than in the strength of rockets?' Khrushchev, speaking through an interpreter, boasted of Soviet rocket strength and dismissed the display of consumer goods. [Nixon's words quoted in English; Khrushchev's reply paraphrased, as it reached Americans through translation.]",
        "attribution": "The 'Kitchen Debate,' American National Exhibition, Moscow, July 24, 1959. Widely documented exchange; Nixon's English remarks are directly quoted, Khrushchev's are paraphrased from interpreted accounts. Public-domain U.S. government context.",
        "contextNote": "A televised, staged encounter in which consumer goods themselves became a persuasive medium — each leader used the setting to argue that his system delivered a better life. A useful transfer source: persuasion through spectacle and abundance, not just words."
      }
    ]
  },
  "rubric": {
    "levels": [
      "4 — Advanced (Historian's Judgment)",
      "3 — Proficient",
      "2 — Developing",
      "1 — Beginning"
    ],
    "criteria": [
      {
        "name": "Claim",
        "descriptors": [
          "States a precise, defensible claim that answers BOTH halves of the driving question (how media shaped belief AND how to judge a persuasive source), and previews a line of reasoning.",
          "States a clear, defensible claim that answers the driving question.",
          "States a claim, but it is vague, one-sided, or answers only half the question.",
          "No clear claim, or the claim restates the prompt without taking a position."
        ]
      },
      {
        "name": "Evidence",
        "descriptors": [
          "Integrates specific, well-chosen evidence from four or more documents; quotations and data are accurate and purposefully selected.",
          "Uses specific evidence from at least three documents accurately.",
          "Uses evidence from one or two documents, or evidence is vague or partly inaccurate.",
          "Little or no document evidence; relies on general opinion."
        ]
      },
      {
        "name": "Sourcing and Contextualization",
        "descriptors": [
          "Sources every document used (author, audience, purpose, moment) and shows how purpose shaped content, including the public-vs-secret contrast.",
          "Sources most documents and connects purpose to content.",
          "Names authors or dates but rarely explains how purpose shapes content.",
          "Treats documents as neutral facts with no sourcing."
        ]
      },
      {
        "name": "Corroboration and Civic Judgment (what the bias DOES)",
        "descriptors": [
          "Corroborates across multiple documents, explicitly identifies at least one account that collapses under evidence (e.g., the missile gap) and one that holds, and fully performs the civic-judgment move (who benefits, who is harmed, consequences of acting).",
          "Corroborates across at least two documents and explains what at least one source's bias DOES.",
          "Attempts corroboration or the 'what it does' move, but partially or without evidence; may slip into 'both sides are equal.'",
          "No corroboration; stops at 'this is biased' or flattens everything to equal bias."
        ]
      },
      {
        "name": "Reasoning and Organization (CER)",
        "descriptors": [
          "Reasoning is logical, sustained, and explicitly links each piece of evidence to the claim; structure guides the reader; acknowledges and answers a counter-source.",
          "Reasoning connects evidence to the claim; organization is clear and logical.",
          "Reasoning is present but thin or repetitive; organization is loose.",
          "Little reasoning; evidence is listed without explanation; disorganized."
        ]
      },
      {
        "name": "Quantitative Source Reading",
        "descriptors": [
          "Reads the quantitative source expertly — names who counted, the category counted, what is excluded, and what the number pushes people to do — and uses it to judge whether the claim survived corroboration.",
          "Reads the quantitative source using most of the four questions and draws a supported conclusion.",
          "Engages the number only partly; misses category or exclusion issues.",
          "Treats numbers as neutral facts or ignores the quantitative document."
        ]
      }
    ]
  },
  "modifiedReading": "MODIFIED READING-SUPPORT VERSION (lower reading load, same ideas). BIG IDEA: In the Cold War, the United States and the Soviet Union both used media — posters, radio, film, TV, and even numbers — to change what millions of people believed. Your job is not just to ask, 'Is this biased?' Ask, 'What does the bias DO? Who does it help? Who does it hurt? What happens when people believe it?' KEY WORDS (simple): Propaganda = a message built to persuade you, often using true facts chosen to move you. Reach = how many people a message can touch at once. Framing = the words and pictures that tell you how to feel before you think. Corroboration = checking a claim against other sources to see if it holds up. WHAT HAPPENED, IN SHORT: (1) Governments learned they could reach millions with one message — first with war posters, then with radio and TV. (2) Leaders used strong 'us vs. them' words. President Truman said the world had to choose between two 'ways of life,' and he said the other side used 'a controlled press and radio.' (3) People got scared about a 'missile gap' — they believed the Soviets had far more big missiles than the U.S. When spy planes and satellites finally checked, the Soviets had very few. The scary number was WRONG. This is the big lesson: some claims fall apart when you check them. (4) Fear was used as a tool. The film 'Duck and Cover' taught kids a small real safety step AND kept them afraid all the time. A message can do both. YOUR TASK: Pick one source. Answer three short questions in one sentence each: Who made it and why? What does it want you to do? Who is helped and who is hurt if people believe it? SENTENCE STARTERS: 'This source was made by ___ to ___.' 'It wants people to ___.' 'It helps ___ but can hurt ___.' REMEMBER: Both sides used persuasion. That does NOT mean every claim is equally true. Always check — sometimes the scary claim is real, and sometimes, like the missile gap, it is not.",
  "advancedExtension": "ADVANCED EXTENSION (for students ready for more challenge). Choose ONE of the following, each of which deepens the disciplinary method and bridges to the Information Revolutions module. (1) CONTINUITY-AND-CHANGE ESSAY: Trace 'reach' across three information revolutions — the World War I poster campaign, Cold War broadcasting, and today's algorithmic feeds. Argue what persuasive technique stays CONSTANT across all three and what only changes in SCALE and SPEED. Use one primary source from each era; source each. (2) QUANTITATIVE DEEP DIVE: Research how 'projected' versus 'operational' counts, and differing agency incentives, produced the missile-gap divergence. Then design two honest reports and one misleading report from the SAME underlying data, and write a paragraph on how a poll's question wording can do the same thing. Connect explicitly to Day 3's four questions. (3) PARALLEL-SYSTEMS ANALYSIS (nonpartisan, mechanism-focused): Compare American consumer-abundance persuasion (the Kitchen Debate; advertising) with the Soviet socialist-realism aesthetic and the TASS/Pravda apparatus as PARALLEL persuasion systems — same goal (win belief), different tools and different constraints. Then apply corroboration: name one specific claim from each system that would survive independent checking and one that would not, and defend your calls from evidence. Explicitly avoid the 'both sides are identical' trap — explain what is genuinely symmetrical (both persuaded) and what is not (independent press and cross-checking versus state monopoly). A sharper version of this move: note that even the U.S. side sometimes hid who was speaking (Radio Free Europe was covertly CIA-funded while presented as citizen-supported), and ask whether that concealment is closer to, or still different from, a state news monopoly — defend your answer from evidence. (4) HISTORIOGRAPHY NOTE: Write 400 words on how a historian in 1960 and a historian in 2010 would weigh the missile-gap sources differently, given what each could know, and what that teaches about corroboration over time. ALL OPTIONS require: a defensible claim, at least three sourced documents, one act of corroboration, and the civic-judgment move (what the persuasion DOES).",
  "subPlan": "SUBSTITUTE PLAN (self-contained, no content expertise or prep required). TIMING: one 50-minute period. MATERIALS: this page plus the single source below (project it or read it aloud). NO grading needed — collect written work for the teacher. (1) OPENER (5 min): Write on the board, 'A message built to persuade is called PROPAGANDA. It often uses TRUE facts, chosen to move you.' Ask students to copy it and write one example of a persuasive message they saw this week. (2) READ TOGETHER (10 min): Read this source aloud twice. SOURCE — Truman Doctrine, March 12, 1947 (public domain): 'At the present moment in world history nearly every nation must choose between alternative ways of life... One way of life is based upon the will of the majority... The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio, fixed elections, and the suppression of personal freedoms.' CONTEXT to read aloud: 'President Truman gave this speech to persuade Congress to send aid overseas. Notice he says the other side uses a controlled press and radio — he made control of the media part of his argument.' (3) INDEPENDENT WORK (20 min): Students answer these four questions in complete sentences. a) Who made this source, and why? b) What does it want the audience to believe or do? c) Underline the words that split the world into 'us' and 'them.' What do those words make you feel? d) THE BIG QUESTION: If people believe this message, who benefits and who might be harmed? (4) SHARE (10 min): Volunteers read one answer to question (d). Sub prompts: 'Who did you say benefits? Who might be harmed?' (5) EXIT SLIP (5 min): One sentence — 'One way to tell whether a source is trying to inform me or persuade me is to ask ___.' Collect all work in one stack for the teacher. CLASSROOM NOTE: This lesson is nonpartisan and about how persuasion works in general; if a student tries to connect it to today's political parties, redirect to 'What does this 1947 technique DO?' rather than any current politics.",
  "dashboard": {
    "focusDay": "Day 3 — Reading the Numbers: The Missile Gap and Quantitative Sources",
    "todaysObjective": "Students will read a quantitative source by identifying what is counted, who counted it, and what the categories include or exclude, and will judge whether the 'missile gap' claim survived corroboration.",
    "essentialQuestion": "How can numbers persuade, and how do we read a statistic critically — asking who counted, what was counted, and what the categories include or leave out?",
    "sourceOfTheDay": {
      "title": "The 'Missile Gap': Estimates vs. Reality (quantitative source)",
      "excerpt": "Projected Soviet long-range missiles (ICBMs), early 1960s — CLASSROOM RECONSTRUCTION of a documented pattern:  •  U.S. Air Force projection: many hundreds expected.  •  Other agencies (CIA, Army, Navy): far fewer.  •  Actual OPERATIONAL Soviet ICBMs revealed by reconnaissance, by 1961: only a handful (commonly cited as about four).  Category note: 'projected' = expected to exist; 'operational' = actually deployed and ready. In 1961, Secretary of Defense Robert McNamara acknowledged studies showed no 'missile gap' in the Soviets' favor.",
      "attribution": "Reconstructed from declassified U.S. National Intelligence Estimates and later historical assessments, c. 1957-1961. Numbers simplified for instruction; the documented facts are the agency divergence and the small actual deployment. Public-domain U.S. government context.",
      "contextNote": "Deliberately labeled a teaching reconstruction — do not present the simplified numbers as an exact archival figure. What is documented and reliable: agencies disagreed sharply, the Air Force estimate ran far higher, and reconnaissance revealed very few operational Soviet ICBMs. It is the unit's clearest case of a claim collapsing under corroboration.",
      "task": "Apply the four questions of quantitative sourcing in writing (Who counted? What category? What is left out? What does it make people want to DO?), then answer: what new evidence changed the picture, and what does that teach about trusting a scary number before it is checked?"
    },
    "keyVocabulary": [
      {
        "term": "Quantitative source",
        "definition": "A source made mostly of numbers — a count, poll, or table. It still has an author and a purpose and can be read critically."
      },
      {
        "term": "Category (in data)",
        "definition": "The definition of what gets counted. Changing it — 'projected' vs. 'operational' — can change the answer."
      },
      {
        "term": "Projected vs. operational",
        "definition": "'Projected' = missiles an agency EXPECTED to exist; 'operational' = missiles actually deployed and ready. Different categories, different numbers."
      },
      {
        "term": "Corroboration",
        "definition": "Checking a claim against other independent evidence to see whether it holds up or collapses."
      },
      {
        "term": "Missile gap",
        "definition": "The widely believed 1950s-60s claim that the Soviets had far more long-range missiles than the U.S. Corroboration showed it was not true in that direction."
      }
    ],
    "misconceptions": [
      "'The missile gap was real.' It was not, in the direction people feared — reconnaissance revealed very few operational Soviet ICBMs, and McNamara acknowledged there was no gap in the Soviets' favor.",
      "'Numbers are neutral facts.' Categories are choices; who counts and what is counted shape the conclusion.",
      "'A more precise-sounding number is a more true number.' Precision is not accuracy — a confident projection can still be wrong until it is corroborated.",
      "'Only words can be propaganda.' A statistic can persuade as powerfully as any slogan, and needs the same sourcing."
    ],
    "discussionProtocol": "'Numbers on Trial' (about 15 min): (1) THINK-PAIR (3 min) — each student answers the four questions about the table with a partner. (2) FOUR-QUESTIONS GALLERY (7 min) — four labeled wall stations (Who counted? / What category? / What is left out? / What does it push people to do?); pairs post one sticky note at each. (3) WHOLE-CLASS VERDICT (5 min) — the class reaches a verdict: did the missile-gap claim survive corroboration? Teacher records the evidence that decided it (reconnaissance) and names who benefited while the claim was believed. Redirect any present-day partisan turns back to the mechanism.",
    "differentiationSupports": [
      "Struggling readers: table shown as three plain bars (GUESSED high / GUESSED low / REALLY THERE) with the four questions in everyday language and one sentence-starter each; read aloud.",
      "English learners: pre-teach 'projected,' 'operational,' 'estimate,' 'reconnaissance,' 'gap' with icons and a bilingual frame; phrase-level answers accepted.",
      "IEP/504: reduce to two questions (Who counted? What is left out?) on a two-row table with the first row modeled; extended time per plan.",
      "ADHD/executive function: four questions as a numbered checklist with checkboxes; question 1 modeled together, then 2-4 released with a visible timer.",
      "Advanced: design one honest and one misleading report from the same data and connect to how poll wording changes results.",
      "Alternate response: explain the four questions in a 90-second recording or annotate a printed table with sticky notes instead of the worksheet."
    ],
    "exitTicket": "Apply the four questions to a new number ('Poll: 80% support the plan'). Write the two questions you would ask FIRST before believing it.",
    "tomorrowsBridge": "Tomorrow (Day 4, 'Fear as a Tool') we move from numbers that persuade to EMOTIONS that persuade. Today the missile gap showed how a scary number drove behavior before anyone checked it; tomorrow we examine how the Red Scare, HUAC, and 'Duck and Cover' used fear directly — and we keep asking the same civic-judgment question: what does the persuasion DO, who benefits, and who is harmed?"
  },
  "studentPacket": {
    "intro": "STUDENT PACKET — Cold War Media and Power: Persuasion, Propaganda, and Proof. DRIVING QUESTION: How did rival superpowers use media to shape what millions of people believed, and how do you judge a source built to persuade? THE ONE MOVE TO REMEMBER: Don't stop at 'Is this biased?' Ask, 'What does the bias DO?' — Who benefits? Who is harmed? What happens when people act on it? This packet carries the same historian's toolkit you used in the Reconstruction unit — sourcing, contextualization, corroboration, and claim-evidence-reasoning — and adds a new skill: reading NUMBERS as sources. Fair warning built into the discipline: both superpowers used persuasion, but that does NOT mean every claim is equally true. Your job is to test claims and say which ones survive the evidence and which ones collapse — and why.",
    "vocabulary": [
      {
        "term": "Propaganda",
        "definition": "A message built mainly to persuade you toward a belief or action, often using true facts chosen and framed to move you."
      },
      {
        "term": "Information",
        "definition": "Content whose main job is to help you understand accurately. Real sources often mix information and persuasion — you decide how much of each."
      },
      {
        "term": "Reach",
        "definition": "How many people a message can touch at once. New technology raised reach from a crowd to millions of homes."
      },
      {
        "term": "Framing",
        "definition": "The words and images that tell you how to feel before you think (for example, 'freedom fighters' vs. 'rebels')."
      },
      {
        "term": "Sourcing",
        "definition": "Asking who made a source, when, for whom, and why, before deciding how much to trust it."
      },
      {
        "term": "Corroboration",
        "definition": "Checking a claim against other independent sources to see whether it holds up or falls apart."
      },
      {
        "term": "Quantitative source",
        "definition": "A source made mostly of numbers. It still has an author and a purpose and can be read critically."
      },
      {
        "term": "Category (in data)",
        "definition": "The definition of what gets counted. Changing it ('projected' vs. 'operational') can change the answer."
      },
      {
        "term": "Missile gap",
        "definition": "The 1950s-60s claim that the Soviets had far more long-range missiles than the U.S. Corroboration showed it was not true in that direction."
      },
      {
        "term": "Claim-Evidence-Reasoning (CER)",
        "definition": "State a claim, back it with specific evidence, then explain the reasoning that connects them."
      }
    ],
    "backgroundReading": {
      "title": "How Superpowers Used Media to Shape Belief",
      "paragraphs": [
        "In the twentieth century, governments learned they could reach millions of people at once. First came posters and pamphlets; then radio put a voice in every home; then film and television added moving pictures. Historians call this growing power 'reach.' During World War I, the U.S. Committee on Public Information coordinated posters, films, and thousands of local speakers to rally the nation. That machinery was a preview of the Cold War, when reach grew larger still.",
        "After 1945, the United States and the Soviet Union became rival superpowers, and each used media to persuade its own people and the world. In 1947, President Truman told Congress the world faced a choice between two 'ways of life,' and he described the opposing side as one that relied on 'a controlled press and radio.' In a secret 1950 report called NSC-68, U.S. officials framed the struggle as a total contest 'involving the fulfillment or destruction... of civilization itself.' Both statements used true facts AND strong framing — that combination is what makes something propaganda, not simply whether it is true or false.",
        "Both sides ran information programs. The United States broadcast news and messaging across the Iron Curtain through Voice of America and Radio Free Europe. Voice of America was openly a U.S. government station; Radio Free Europe, in these years, was secretly funded by the CIA and publicly presented as citizen-supported — a hidden fact not exposed until the late 1960s. The Soviet Union ran its own vast apparatus — the news agency TASS, the newspapers Pravda ('Truth') and Izvestia ('News'), and Radio Moscow. Recognizing that both sides persuaded does not mean the two systems were identical, or that every claim was equally reliable. A system with an independent press that can cross-check its own government behaves differently from a state that controls all the news.",
        "The clearest test came with numbers. In the late 1950s, Americans feared a 'missile gap' — the belief that the Soviets had far more long-range missiles than the U.S. Different government agencies produced very different estimates: the Air Force projected far more Soviet missiles than the CIA, Army, or Navy did. When U-2 flights and then reconnaissance satellites returned photographs, U.S. estimates were revised sharply downward, and by 1961 it was clear the Soviets actually had very few operational missiles. The frightening gap did not exist in the direction people feared. This is why corroboration matters: some claims survive checking, and some collapse.",
        "Fear was also a tool. During the Red Scare, the House Un-American Activities Committee (HUAC) questioned people's loyalty, and an unofficial 'blacklist' cost real people their careers, sometimes with little evidence. Civil-defense media like the 1951 film 'Duck and Cover' taught schoolchildren a small, real safety step while also keeping them constantly afraid. A single message can inform and manipulate at the same time. Across all of this, keep asking the unit's core question: what does the persuasion DO — who benefits, who is harmed, and what happens when people act on it?"
      ]
    },
    "sourceWorksheet": {
      "source": {
        "title": "The Truman Doctrine (1947)",
        "excerpt": "'At the present moment in world history nearly every nation must choose between alternative ways of life... One way of life is based upon the will of the majority... The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio, fixed elections, and the suppression of personal freedoms.'",
        "attribution": "Harry S. Truman, Address before a Joint Session of Congress, March 12, 1947. Public domain (U.S. government).",
        "contextNote": "A public speech meant to persuade Congress to fund aid to Greece and Turkey. Notice that Truman names 'a controlled press and radio' as a feature of the opposing system — he makes control of the media part of his argument."
      },
      "questions": [
        "SOURCING: Who gave this speech, to whom, and for what purpose at that moment?",
        "FRAMING: Underline the words that split the world into 'us' and 'them.' Which single word or phrase does the most persuasive work, and why?",
        "MEDIA CONNECTION: Truman lists 'a controlled press and radio' as a mark of the other side. Why would a leader make media freedom part of a foreign-policy argument?",
        "INFORMATION OR PROPAGANDA: This speech contains true facts and strong framing at the same time. Is it information, propaganda, or both? Name the test you used to decide.",
        "CIVIC JUDGMENT (the big one): If millions believe this message, who benefits, who might be harmed, and what happens when people act on it?",
        "CORROBORATION: Name one other source from this unit that supports or complicates Truman's framing, and explain how."
      ]
    },
    "cerOrganizer": {
      "prompt": "Answer the driving question in a full CER argument: How did rival superpowers use media to shape what millions believed, and how do you judge a source built to persuade? Use at least THREE documents, source each, corroborate across at least two, and explain what each source's persuasive design DOES.",
      "claimGuidance": "Write ONE sentence that answers BOTH halves of the question — how media shaped belief AND how you judge a persuasive source. Make it a position someone could disagree with, not a summary. Frame: 'Rival superpowers used media to ___; to judge a source built to persuade, you must ___.'",
      "evidenceGuidance": "For each of at least three documents, quote or cite a SPECIFIC detail (a phrase, an image, or a number) — not a vague summary. As you introduce each, source it in the same breath: who made it, for whom, and why. Include at least one quantitative detail (the missile-gap data counts).",
      "reasoningGuidance": "For each piece of evidence, explain HOW it supports your claim, then perform the civic-judgment move: who benefits, who is harmed, what happens when people act on it. Corroborate: show two documents supporting or complicating each other. Name at least one account that does NOT survive corroboration (the missile gap is the strongest example) and explain why. Do not conclude 'both sides are equally biased, so nothing is knowable' — say which claims survive the evidence and why."
    },
    "exitTickets": [
      "Day 1: In your own words, define 'propaganda,' then name ONE thing it DOES (not just what it is).",
      "Day 2: Write one sentence naming the difference between information and propaganda, then give ONE test question you can ask any source to tell them apart.",
      "Day 3: Apply the four questions to a new number ('Poll: 80% support the plan') — write the two questions you would ask FIRST before believing it.",
      "Day 4: Name one LEGITIMATE use and one HARMFUL use of fear in public messaging, each tied to a source you studied.",
      "Day 5: In one sentence, which source in the set would most change your mind, and what would it take for you to accept it (the steelman test)?"
    ],
    "dbqPrompt": "Using the unit documents (the Truman Doctrine; NSC-68; 'Duck and Cover'; the missile-gap estimate table; and the 1959 Kitchen Debate) and your knowledge of the era, answer the driving question: How did rival superpowers use media to shape what millions of people believed, and how do you judge a source built to persuade? Make a defensible claim, use specific evidence from at least THREE documents, source each, corroborate across at least two, and explain what each source's persuasive design DOES (who benefits, who is harmed, what happens when people act on it). Identify at least one account that does NOT survive corroboration and explain why. Remember: both superpowers used persuasion, but that does not make every claim equally true — your job is to say which survive the evidence and why."
  }
};

export const coldWarMedia: ReconstructionUnit = data;
