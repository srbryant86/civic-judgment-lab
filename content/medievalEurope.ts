import type { ReconstructionUnit } from "./types";

/* Static sample content — authored and adversarially fact-checked.
   Review all materials for accuracy before classroom use. */

const data = {
  "title": "Medieval Europe and Authority: Who Controlled Knowledge?",
  "course": "World History",
  "gradeBand": "Grades 6-9 (main version written for Grade 8; middle-school support version included)",
  "mainVersion": "Grade 8 main version. A full five-day sequence that introduces the History Judgment Lab disciplinary method (sourcing, contextualization, corroboration, claim-evidence-reasoning, and the recurring civic-judgment move) at an introductory tier suitable for world history. Excerpts are short (2-5 lines), each attributed and paired with a plain-language context note, and the sources are genuine and public-domain (the single Domesday manorial entry is presented transparently as a representative example in the survey's own standard formula, flagged as such, with a pointer to the free Open Domesday for verbatim local entries). Students build a source-analysis toolkit across Days 1-4 (monastic literacy and Church authority; Magna Carta and charters; the Domesday Book as data; survivorship bias and translation) and apply it in a Day 5 document-based question and claim-writing seminar. Designed for 45-55 minute periods.",
  "middleAdaptation": "Middle-school support version (Grades 6-7). Same driving question, sources, and five-day arc, but with heavier scaffolding: each primary-source excerpt is trimmed to 1-3 lines and paired with a teacher-provided plain-language paraphrase; vocabulary is pre-taught with picture supports; discussion uses structured Think-Pair-Share with sentence frames; the Day 5 DBQ requires two documents instead of three and accepts a guided CER paragraph (claim + two quoted evidence chips + reasoning) in place of a multi-paragraph essay. The civic-judgment move is taught with a simple three-question frame: Who is helped? Who is hurt? What happens when people believe it? All per-day differentiation supports apply, and the alternate-response options (audio, labeled drawing, sorting cards, oral defense) fully substitute for written products at this level.",
  "drivingQuestion": "Who controlled knowledge and authority when few people could read, and how do we judge sources that survived by chance?",
  "overview": "In this five-day World History unit, students investigate how knowledge and authority were controlled in medieval Europe, when fewer than one in ten people could read. Using genuine public-domain primary sources -- a monk's history, Magna Carta, a royal charter, a papal decree, and a Domesday Book manorial entry rendered in the survey's own formula -- students practice the same disciplinary method used across History Judgment Lab: sourcing, contextualization, corroboration, and claim-evidence-reasoning. The unit adds a source-diversity focus designed for younger grades: translated and pre-modern sources (translation is itself an interpretive act), administrative and data sources (the Domesday Book), and survivorship bias (what did NOT survive, and whose voices are therefore missing). Throughout, students rehearse the recurring civic-judgment move -- not just \\\"is this biased?\\\" but \\\"what does the bias DO: who benefits, who is harmed, and what happens when people act on it?\\\" The unit closes with a document-based question and a claim-writing seminar. It is historically accurate, nonpartisan about present-day politics, and administrator-safe. It teaches evidence-based reasoning and explicitly resists the \\\"both sides are always equal\\\" trap: some accounts survive corroboration and others collapse, and students learn to say which and why, grounded in the sources.",
  "essentialQuestions": [
    "Who controlled knowledge and authority in medieval Europe, and how did controlling reading, writing, and record-keeping create power?",
    "How does a document survive for a thousand years, and how does 'survival by chance' shape the story historians are able to tell?",
    "When an official record counts some people and ignores others, who benefits and who is harmed?",
    "(Portable) How do we judge competing accounts of the past when they disagree -- and how do we decide which account holds up under corroboration and which collapses?",
    "(Portable) What does a biased or selective narrative actually DO: who benefits from it, who is harmed by it, and what happens when people act on it?",
    "(Portable) Whose voices are missing from the surviving record, and how does that absence shape what we believe about the past?",
    "(Portable) How does the way evidence is created, translated, and preserved shape the conclusions we can honestly draw?"
  ],
  "objectives": [
    "Students will source at least three medieval documents by identifying author, date, purpose, and audience, and explain how each factor shapes the document's reliability.",
    "Students will contextualize Magna Carta and the Domesday Book by describing the specific conditions under which each was created and why.",
    "Students will corroborate a narrative source (the Anglo-Saxon Chronicle) against a data source (the Domesday Book) by stating precisely where they agree, where they differ, and why.",
    "Students will construct a claim-evidence-reasoning argument answering the driving question, using short quoted evidence from at least two documents.",
    "Students will explain survivorship bias with a specific example and identify at least one group whose voice is missing from the surviving record and why.",
    "Students will analyze translation as an interpretive act by comparing two renderings of the same passage and explaining how a word choice changes meaning.",
    "Students will evaluate what a biased or selective record DOES -- naming who benefits and who is harmed -- grounded in a specific source rather than in generalities."
  ],
  "vocabulary": [
    {
      "term": "monastery",
      "definition": "A community where monks (or nuns) lived, prayed, and worked. In medieval Europe monasteries were among the very few places where people could read and write."
    },
    {
      "term": "scriptorium",
      "definition": "The room in a monastery where monks copied books and documents by hand, letter by letter, long before printing existed."
    },
    {
      "term": "scribe",
      "definition": "A person trained to write by hand. In medieval Europe, most scribes were churchmen."
    },
    {
      "term": "literacy",
      "definition": "The ability to read and write. In medieval Europe only a small share of people were literate, and most of them were clergy."
    },
    {
      "term": "charter",
      "definition": "An official written document from a ruler that grants rights, land, or privileges to a person, a town, or a group."
    },
    {
      "term": "Magna Carta",
      "definition": "A famous charter from 1215 in which the King of England agreed to limits on his power and to certain protections for 'free men.'"
    },
    {
      "term": "free man vs. villein (serf)",
      "definition": "A 'free man' had legal rights and could go to the king's courts. A villein (serf) was an unfree peasant bound to a lord's land who owed labor. Villeins were the majority of country people and were NOT counted as 'free men.'"
    },
    {
      "term": "Domesday Book",
      "definition": "A huge survey ordered by William the Conqueror in 1086 that recorded land, resources, and people across England so the king could tax them."
    },
    {
      "term": "administrative (data) source",
      "definition": "An official record made by a government to track land, people, money, or property -- like a survey, tax roll, or census."
    },
    {
      "term": "primary source",
      "definition": "Evidence created at the time by someone who witnessed or took part in the events."
    },
    {
      "term": "sourcing",
      "definition": "Asking who made a source, when, why, and for whom, BEFORE deciding how much to trust it."
    },
    {
      "term": "contextualization",
      "definition": "Placing a source in its own time and place to understand what it meant to the people who made it."
    },
    {
      "term": "corroboration",
      "definition": "Checking whether different sources agree -- and asking why they might disagree."
    },
    {
      "term": "translation",
      "definition": "Putting words from one language into another. Every translation involves choices that can shape meaning, so a translation is itself an interpretation."
    },
    {
      "term": "survivorship bias",
      "definition": "The mistake of studying only what survived and forgetting that much -- and many voices -- did NOT survive. What lasts is often what was durable or protected, not what was most important."
    },
    {
      "term": "papal decree / canon law",
      "definition": "Official rules and rulings issued by the pope or the Church, claiming authority over what counted as true and right."
    },
    {
      "term": "authority",
      "definition": "The recognized right to make decisions, give orders, or declare what counts as true."
    },
    {
      "term": "gatekeeper",
      "definition": "A person or group that controls who can reach something -- here, access to reading, writing, and official knowledge."
    },
    {
      "term": "claim-evidence-reasoning (CER)",
      "definition": "A way to build an argument: state a claim, back it with quoted evidence, and explain the reasoning that connects them."
    },
    {
      "term": "civic-judgment move",
      "definition": "Going beyond 'is it biased?' to ask what the bias DOES: who benefits, who is harmed, and what happens when people act on it."
    }
  ],
  "historicalThinkingSkills": [
    "Sourcing (author, date, purpose, audience)",
    "Contextualization (situating a source in its time and place)",
    "Corroboration (comparing sources, including a data source against a narrative source)",
    "Claim-Evidence-Reasoning argumentation",
    "Analyzing point of view, audience, and authority",
    "Reading administrative and data sources as historical evidence",
    "Recognizing survivorship bias and silences in the record",
    "Understanding translation as an interpretive act",
    "Civic judgment: analyzing what a bias DOES (who benefits, who is harmed, what follows when people act on it)"
  ],
  "alignmentCategories": [
    "Historical Thinking and Source Analysis",
    "Evidence-Based Argumentation (Claim-Evidence-Reasoning)",
    "Power, Authority, and Governance",
    "Continuity and Change Over Time",
    "Religion and Institutions in World History",
    "Literacy, Communication, and the Control of Information",
    "Economic Systems and the State (Taxation and Administration)",
    "Civic Reasoning and Source/Media Literacy",
    "Disciplinary Literacy: Reading and Writing for Historical Analysis",
    "Diverse Perspectives and Silenced Voices in the Historical Record"
  ],
  "teacherNotes": [
    "PACING: Each day fits a 45-55 minute period. Days 1-4 each build one tool (sourcing; who-is-protected analysis; reading data; survivorship and translation); Day 5 is the assessment. If you have only four days, merge the corroboration warm-up of Day 3 into Day 5 and assign the Day 4 reading as homework. If you have block periods, add the advanced-extension task to Days 2 and 4.",
    "PACING FOR YOUNGER GRADES: For 6th-7th grade, spend the first 10 minutes of every day pre-teaching that day's two or three vocabulary words with the picture-supported glossary before touching the source. Trim excerpts to the bolded lines only.",
    "SENSITIVITY -- RELIGION: Teach the medieval Church as a historical institution of power, literacy, and record-keeping. Keep the framing descriptive and nonpartisan; do not endorse or criticize any faith. The pope and Church are studied as historical actors who controlled knowledge, not as a comment on any modern belief.",
    "SENSITIVITY -- UNFREE LABOR: Serfdom and enslaved people (Latin servi) appear in the Domesday Book, and unfree status is central to Magna Carta. Treat these people with dignity, connect them to the 'whose voices are missing' theme, and avoid sensationalizing. The point is that the record reduced human beings to economic categories -- a fact worth naming plainly and respectfully. In the class's own voice, prefer 'enslaved people'; the word 'slaves' appears only inside the historical translation.",
    "NONPARTISAN: Keep present-day politics out of the room. The civic-judgment move is a reasoning skill (who benefits, who is harmed), not a prompt for current-events debate.",
    "MISCONCEPTION: 'Nobody could read in the Middle Ages.' Correct to: literacy was rare and concentrated among clergy and some elites and merchants, but it was not zero. The point is who controlled it, not that it did not exist.",
    "MISCONCEPTION: 'Magna Carta gave rights to everyone.' Correct directly using the text: it protected 'free men' (liber homo) and left out villeins/serfs, who were the rural majority. Clause 20 mentions villeins only to protect their farm equipment (wainage) so they could keep working and paying.",
    "MISCONCEPTION: 'The Domesday Book counted everyone.' Correct to: it recorded taxable resources and heads of household (mostly men) as economic units. Women and children rarely appear as individuals. It is a tax record, not a census of people's lives.",
    "MISCONCEPTION: 'If a source survived, it must have been the most important.' This is survivorship bias. Survival often reflects durable materials (parchment kept dry in monasteries) and who had the power to preserve records -- not importance.",
    "MISCONCEPTION: 'A translation is neutral.' Every translation makes choices; compare 'Christ slept, and his saints' with 'Christ and his saints were asleep' to make this concrete.",
    "AVOID FALSE BALANCE: Do not let students conclude that 'all sources are biased, so none can be trusted' or that 'both sides are always equal.' Model the opposite: some claims (e.g., that clergy dominated literacy) are corroborated by multiple independent sources and hold up; others rest on a single unverifiable voice and must be held loosely. Insist that students say WHICH and WHY.",
    "SOURCE INTEGRITY: Excerpts are drawn from genuine public-domain sources with attributions given -- Bede in A. M. Sellar's 1907 translation; Magna Carta (1215) and the Dictatus Papae in older public-domain translations (Dictatus Papae after E. F. Henderson, 1892); the Anglo-Saxon Chronicle after J. Ingram (1823); and William I's writ to London from the Old English. Bracketed words are clarifications added for students, not part of the original; modernized spelling and translation choices are flagged in the context notes. IMPORTANT: The Domesday excerpt is presented transparently as a REPRESENTATIVE entry in the survey's standard formula, not a verbatim single manor -- for a genuine verbatim entry for your own local manor (free, open-access), use Open Domesday (opendomesday.org), and feel free to substitute it. Never let students treat a paraphrase as a quotation."
  ],
  "days": [
    {
      "day": 1,
      "title": "Who Could Read, and Who Decided What Counted as Knowledge",
      "objective": "Students will explain who could read and write in medieval Europe and how monasteries and the Church acted as gatekeepers of knowledge, and will practice sourcing by identifying who made a source, when, and why.",
      "bellRinger": "Imagine that in your whole town, only 1 person in 20 can read or write. Who would keep the town's official records? Who would get to decide what those records say -- and what gets left out? Write 2-3 sentences.",
      "miniLesson": "1) Set the scene: in most of medieval Europe, well over 90% of people could not read; parchment was expensive; every book was copied by hand in a monastery scriptorium. 2) The readers/writers/record-keepers were mostly monks and clergy, and the language of learning and the Church was Latin (though the Anglo-Saxon Chronicle, seen later, was in Old English). 3) The Church as gatekeeper: it trained scribes, held the libraries, and claimed authority over what counted as true (preview the Dictatus Papae, in which a pope claims supreme authority -- used again in the Day 5 DBQ). 4) Introduce SOURCING with four questions: Who made it? When? Why? For whom? 5) Model sourcing on Bede, a monk who tells us his own method -- a medieval writer doing history's disciplinary work himself.",
      "sourceActivity": {
        "title": "A Monk Explains How He Knows (Bede's Preface)",
        "excerpt": "\"...as the true rule of history requires, [I] have laboured sincerely to commit to writing such things as I could gather from common report, for the instruction of posterity. ... [And] I humbly entreat the reader, that, if he shall find in this that we have written anything not delivered according to the truth, he will not impute the same to me.\"",
        "attribution": "Bede, The Ecclesiastical History of the English People, Preface (letter to King Ceolwulf), c. 731 CE. Public-domain English translation (A. M. Sellar, 1907). Bracketed words added for readability; ellipses mark omissions.",
        "contextNote": "Bede was a monk at the monastery of Jarrow (Wearmouth-Jarrow) in northern England -- one of the few places where people could read and write. He wrote in Latin. Notice that he tells us HOW he gathered his information ('from common report') and even warns that he might be wrong. He is a medieval writer doing 'sourcing' on himself.",
        "task": "Complete a sourcing analysis. (a) Who wrote this, and what was his job? (b) When and in what language did he write? (c) Why does he warn that there might be errors, and where does he say his information came from? (d) What does it tell us that one of the few people who could write was a monk? Underline the phrase where Bede checks the source of his own information."
      },
      "discussionQuestion": "If almost all the writers in medieval Europe were churchmen, what kinds of stories and facts were MORE likely to be written down -- and what kinds were MORE likely to be left out? Give an example of each.",
      "studentTask": "Fill out a four-question Sourcing Card (Who / When / Why / For whom) for Bede's preface. Then write one sentence predicting whose point of view is likely to be MISSING from records kept mostly by monks, and why.",
      "exitTicket": "In one sentence: name one group whose knowledge or story was LESS likely to be written down in medieval Europe, and explain why.",
      "differentiation": {
        "strugglingReaders": "Provide the excerpt beside a three-sentence plain-language paraphrase; pre-highlight the key phrase ('such things as I could gather from common report'); give a word bank (monk, scriptorium, sourcing) with student-friendly definitions.",
        "advanced": "Add the Dictatus Papae (1075) excerpt from the DBQ and ask students to compare HOW authority is claimed: Bede earns trust through careful method, while the pope claims authority from his office alone. Which claim to authority is easier to check, and why?",
        "englishLearners": "Provide a bilingual glossary for monk, monastery, scribe, Church, and truth; give sentence frames ('The author is ___. He wrote it because ___. A missing voice might be ___.'); allow students to take notes first in their home language.",
        "iepAnd504": "Provide the Sourcing Card partially completed with the 'When' and 'Where' filled in; chunk the task into two steps; allow extended time and a read-aloud of the excerpt.",
        "executiveFunction": "Give a three-step checklist with checkboxes (1. Read + underline; 2. Fill the card; 3. Write one prediction sentence); provide a model completed card and a simple time plan (5 / 7 / 3 minutes).",
        "alternateResponse": "Students may record a 30-second audio answer, draw and label a scriptorium with a one-line caption, or point to answers on a choice board instead of writing full sentences."
      }
    },
    {
      "day": 2,
      "title": "Power in Writing: Magna Carta and Charters",
      "objective": "Students will analyze Magna Carta and medieval charters to determine who is protected and who is left out, and will practice the civic-judgment move by naming who benefits and who is harmed.",
      "bellRinger": "A rule says: 'No FREE person shall be jailed without a fair trial.' Who is protected by the word 'free' -- and who might NOT be protected at all? Write your best guess and one reason.",
      "miniLesson": "1) In 1215 rebel barons forced King John to seal (agree to) Magna Carta, a charter that put limits on the king. 2) Read clause 39 (no free man seized/imprisoned except by lawful judgment of his peers or the law of the land) and clause 40 (justice will not be sold, denied, or delayed). 3) The load-bearing word is 'free man' (Latin liber homo): villeins/serfs -- the rural majority -- were NOT free men. Clause 20 mentions villeins only to protect their 'wainage' (their carts and farm tools) so they could keep working and paying. 4) Charters in general grant rights to specific named groups (preview William I's 1067 writ to the burgesses of London). 5) Run the civic-judgment move on the phrase 'free man': who benefits, who is harmed, what happens in a real court when a villein is arrested.",
      "sourceActivity": {
        "title": "Magna Carta: Who Counts as a 'Free Man'? (Clauses 39 and 40)",
        "excerpt": "\"(39) No free man shall be taken, or imprisoned, or disseised [stripped of his lands], or outlawed, or exiled, or in any way destroyed... nor will we go upon him, nor send upon him, but by the lawful judgment of his peers, or by the law of the land. (40) To none will we sell, to none will we deny or delay, right or justice.\"",
        "attribution": "Magna Carta, 1215, clauses 39 and 40. Translated from Latin; public-domain English translation. ('Free man' = Latin liber homo, a legal class that excluded unfree peasants; bracketed words are clarifications.)",
        "contextNote": "England's barons forced King John to agree to Magna Carta, which is famous for limiting the king's power. But its protections were written for 'free men.' Most country people were villeins (serfs) who were not legally 'free,' so clauses 39-40 did not fully cover them. A separate clause (20) mentions villeins only to protect their farm equipment. (In 1215 these were numbered clauses 39 and 40; a later 1225 reissue merged them.)",
        "task": "Make a two-column list: who clause 39 protects, and who it leaves out. Then run the civic-judgment move: (a) Who benefits from limiting the protection to 'free men'? (b) Who is harmed? (c) What could actually happen in a court when a villein -- not a 'free man' -- is arrested?"
      },
      "discussionQuestion": "Magna Carta is often celebrated as the birthplace of liberty. Is that the whole truth? Use the document's exact words to argue what it DID and did NOT do -- and for whom.",
      "studentTask": "Build a 'Protected vs. Left Out' chart, then write a three-sentence CER: Claim (who Magna Carta really protected) + Evidence (a short quoted phrase) + Reasoning (why that one word, 'free,' matters).",
      "exitTicket": "Finish the sentence with evidence: 'Magna Carta protected ___, but left out ___, which mattered because ___.'",
      "differentiation": {
        "strugglingReaders": "Provide a plain-language paraphrase of clauses 39-40 beside the original; pre-define 'disseised,' 'peers,' and 'free man'; give a pre-labeled two-column chart to sort into.",
        "advanced": "Add clause 20 (villeins and 'wainage') and William I's 1067 London charter. Ask: is Magna Carta better described as a 'barons' contract' than a 'birth of liberty'? Defend the answer with exact wording from at least two documents.",
        "englishLearners": "Provide a glossary (free man, villein, justice, protect, leave out) with cognates where possible; give a CER sentence frame ('Magna Carta protected ___ because the text says \\\"___.\\\"'); allow a home-language draft before the English version.",
        "iepAnd504": "Provide the CER frame with the claim stem already written; reduce the requirement to one quoted phrase; allow extended time and a read-aloud.",
        "executiveFunction": "Give a checklist (1. Highlight 'free man'; 2. Sort names into the chart; 3. Write the CER) with a worked example and a short timer for each step.",
        "alternateResponse": "Provide role cards (baron, villein, merchant, bishop, king) for students to physically sort into 'Protected' and 'Left Out,' then explain their sort aloud, by short audio, or with a labeled drawing."
      }
    },
    {
      "day": 3,
      "title": "Counting a Kingdom: The Domesday Book as a Data Source",
      "objective": "Students will read the Domesday Book as an administrative/data source, explain what was recorded and why, and evaluate what a tax record does and does not reveal about people's lives.",
      "bellRinger": "If the government made a list of everything your household owns in order to set your taxes, what would go ON the list -- and what parts of your family's real life would NOT appear anywhere on it? Write two of each.",
      "miniLesson": "1) In 1085-86 William the Conqueror ordered a survey of England to learn exactly who held what land and what it was worth -- the results are the Domesday Book. 2) Read a manorial entry in its standard formula: who holds the manor; hides (tax units); ploughs; people counted by category (villans, bordars, enslaved people/servi); meadow; and the value in pounds. 3) KEY POINT: the record counts heads of household and taxable resources, mostly men, as economic units. Women and children rarely appear as individuals -- it is a tax record, not a diary of daily life. 4) Why 'Domesday'? People compared it to the Last Judgment: like doomsday, there was no appeal from what it recorded (the name is explained in the 12th-century Dialogus de Scaccario). 5) Data sources are powerful evidence AND selective -- the categories chosen decide who becomes visible and who nearly disappears. Civic-judgment: who benefits from this record, and who is reduced to a number?",
      "sourceActivity": {
        "title": "Counting a Manor: A Domesday Book Entry (Standard Formula)",
        "excerpt": "\"[The lord] holds this manor of the king. There are 5 hides. [There is] land for 6 ploughs. In demesne [the lord's own land] are 2 ploughs, and 3 slaves; and 12 villans [villeins] with 5 bordars [cottagers] have 4 ploughs. There is meadow, 8 acres. It was worth 4 pounds; now 6 pounds.\"",
        "attribution": "Representative manorial entry in the Domesday Book's standard formula, 1086, rendered in the wording of the standard public-domain translations. The figures illustrate the survey's typical form; for a verbatim entry for any specific manor (free, open-access), see Open Domesday (opendomesday.org). Bracketed words are clarifications added for students.",
        "contextNote": "The Domesday Book recorded land and resources so the king could tax them. A 'hide' was a unit of land used for tax; 'demesne' was the land the lord kept for himself. This entry follows Domesday's exact formula: people are listed only by legal/economic category -- villans (villeins), bordars (cottagers), and enslaved people (Latin servi, traditionally translated 'slaves') -- and usually only the head of each household is counted. So most women and children, and the details of anyone's actual life, do not appear. (This is a representative entry in the survey's standard form; teachers can pull the verbatim entry for their own local manor free at opendomesday.org.)",
        "task": "Turn the entry into a data table (category -> number). Then answer: (a) What did this record most want to know? (b) Name two things about these people's real lives that the record does NOT tell you. (c) Whose life is most invisible in this entry, and why?"
      },
      "discussionQuestion": "A tax record makes some people visible and others nearly invisible. Using this entry, decide who is counted, who is almost erased, and what that DOES to the history we are able to write about ordinary medieval people.",
      "studentTask": "Corroboration warm-up. Read this narrative description of the same survey: the Anglo-Saxon Chronicle (1085) says the king had it done so thoroughly that 'there was not a single hide, not one virgate of land... not even one ox, nor one cow, nor one pig which escaped notice in his survey.' Find where the NARRATIVE (Chronicle) and the DATA (a Domesday entry) agree about what the survey recorded. Then write one CER sentence explaining why William wanted this data.",
      "exitTicket": "In one sentence: name one thing the Domesday Book is EXCELLENT evidence for, and one thing it is WEAK evidence for, and why.",
      "differentiation": {
        "strugglingReaders": "Provide the entry pre-parsed into a labeled table with the categories already listed; define hide, villan, bordar, and 'enslaved person (servi)' with small icons; give sentence starters for the 'not told' answers.",
        "advanced": "Provide a second Domesday-format entry and have students compare the two, calculate people-per-plough, and argue what the single number 'worth 6 pounds' reveals about the king's priorities versus the reality of people's lives. (Extension: pull a real verbatim entry from opendomesday.org and compare.)",
        "englishLearners": "Provide a visual glossary (plough, meadow, mill, household, tax); give frames ('The record counts ___. It does not tell us ___.'); support number words and units.",
        "iepAnd504": "Provide the data table half-built; highlight only the people-categories to reduce load; allow a calculator, extended time, and a read-aloud.",
        "executiveFunction": "Give a step card (1. Who holds it? 2. List each category; 3. Write the numbers; 4. Write one 'missing' sentence) in checkbox form with a short timer.",
        "alternateResponse": "Let students build the table with physical counters/manipulatives, record a 30-second explanation of who is counted vs. invisible, or point to answers on a 'counted / erased' choice board."
      }
    },
    {
      "day": 4,
      "title": "What Survived, and What Didn't: Survivorship Bias, Translation, and Missing Voices",
      "objective": "Students will explain survivorship bias and translation-as-interpretation, and will identify whose voices are missing from the surviving record and why.",
      "bellRinger": "Two friends keep diaries. One writes on a phone that later breaks; the other writes in a notebook kept in a dry drawer. In fifty years, whose story survives? Is the survivor's story the most IMPORTANT one -- or just the best PRESERVED? Explain in 2 sentences.",
      "miniLesson": "1) Survivorship bias: historians mostly study what survived, and what survived was often what was durable and protected -- parchment kept dry in monasteries -- so church and elite records dominate. 2) That means many voices (most peasants, most women, the unfree, religious minorities) left little or no writing; their ABSENCE is not proof they did not matter. 3) Translation as interpretation: medieval sources reach us translated (Latin or Old English into modern English), and word choices change tone and meaning -- compare 'Christ slept, and his saints' with 'Christ and his saints were asleep.' 4) Read the Peterborough Chronicle's 1137 entry: a monk describes terrible suffering in a civil war -- but the suffering people themselves left no written account; we hear them only through the monk, and only because his parchment lasted. 5) Civic-judgment: when only one kind of voice survives, whose version becomes 'the truth,' and who is harmed by being left out of the record?",
      "sourceActivity": {
        "title": "A Monk Describes Suffering He Survived to Write Down",
        "excerpt": "\"They said openly that Christ slept, and his saints. Such things, and more than we can tell, we suffered nineteen winters for our sins.\"",
        "attribution": "Anglo-Saxon Chronicle (Peterborough manuscript), entry for the year 1137, on the wars of King Stephen's reign. Public-domain English translation (based on J. Ingram, 1823); spelling modernized.",
        "contextNote": "A monk at Peterborough wrote this about the suffering of ordinary people during a long civil war. But notice: the people who suffered most did not write it -- a literate monk did. Their experience reaches us only through his words, and only because his parchment survived. It is translated from Old English, so the exact words you read are also a translator's choices.",
        "task": "Translation check: two translators render the famous line as 'Christ slept, and his saints' and as 'Christ and his saints were asleep.' Do they feel the same? Explain how the translator's choice shapes the meaning. Then name one group whose OWN words about this war did not survive, and explain why they didn't."
      },
      "discussionQuestion": "If almost everything that survived was written by monks and elites, how should that change how confident we are about 'what medieval people believed'? Does 'no surviving evidence' mean 'it didn't happen' or 'it wasn't important'? Defend your answer with an example.",
      "studentTask": "Build a Survivorship Map with two columns -- 'Voices that survived' and 'Voices likely lost' -- and place at least three groups in each. Then write a CER paragraph: Claim about whose voices dominate the record + Evidence from this week's sources + Reasoning about what that absence does to the history we can write.",
      "exitTicket": "Finish the sentence: 'A source that survived by chance can mislead a historian because ___.'",
      "differentiation": {
        "strugglingReaders": "Provide a plain paraphrase of the 1137 line; teach survivorship bias with the phone-vs-notebook analogy printed on the page; give a pre-drawn two-column survivor map.",
        "advanced": "Give both full translations of the passage and ask for a paragraph on how diction shapes tone; then have students propose which specific peasant or women's voices are missing and design a research question to look for indirect traces of them.",
        "englishLearners": "Provide cognates and a glossary (survive, translate, voice, missing, record); give frames ('This source survived because ___. This voice is missing because ___.'); allow a home-language reflection first.",
        "iepAnd504": "Provide the Survivorship Map partly filled with two examples; limit the requirement to two groups; allow a read-aloud and extended time.",
        "executiveFunction": "Give a checklist (1. Read; 2. Compare the two translations; 3. Fill the map; 4. Write the CER) with a model paragraph and stepwise timing.",
        "alternateResponse": "Let students sort group cards into 'survived / lost,' record an audio reflection, or submit an annotated sketch (e.g., a monastery library vs. an empty peasant cottage) with captions."
      }
    },
    {
      "day": 5,
      "title": "Claim-Writing Seminar and DBQ Assessment",
      "objective": "Students will synthesize the week's sources into a claim-evidence-reasoning argument that answers the driving question, using sourcing, corroboration, and the civic-judgment move.",
      "bellRinger": "Restate the driving question in your own words. Then write a first-draft, one-sentence answer -- this is your working claim. You will revise it by the end of class.",
      "miniLesson": "1) Review the toolkit on one slide: sourcing, contextualization, corroboration, CER, and 'what does the bias DO.' 2) Model building a claim from one document, quoting a short phrase and sourcing it. 3) Teach corroboration explicitly: place the narrative source (Anglo-Saxon Chronicle) next to the data source (Domesday Book) -- where they agree, confidence rises; where a lone source cannot be checked, hold it loosely. 4) Anti-false-balance note: some claims survive corroboration (e.g., that clergy dominated literacy -- several sources agree) while others rest on a single unverified voice; students must say WHICH and WHY, not declare every source equal. 5) Run the seminar protocol, then release students to the DBQ.",
      "sourceActivity": {
        "title": "Corroboration Anchor: Why the King Counted (Anglo-Saxon Chronicle, 1085)",
        "excerpt": "\"He sent his men all over England into every shire to find out how many hundreds of hides of land there were in each shire... So very thoroughly did he have the inquiry carried out that there was not a single hide, not one virgate of land -- it is shameful to record it, but it did not seem shameful for him to do -- not even one ox, nor one cow, nor one pig which escaped notice in his survey.\"",
        "attribution": "Anglo-Saxon Chronicle, entry for 1085, describing the survey that produced the Domesday Book. Public-domain English translation.",
        "contextNote": "This narrative source describes the survey whose recorded output you modeled on Day 3. The chronicler even criticizes how intrusive it was ('it is shameful to record it'). You can now corroborate a narrative source against the kind of data the survey produced -- and notice where the narrative adds an OPINION the data cannot confirm.",
        "task": "Corroborate: the Chronicle (narrative) and a Domesday entry (data) describe what the same royal survey recorded. Quote one line from EACH that agree about what was counted. Then mark the place where the Chronicle adds an opinion ('it is shameful') that the data alone cannot prove. Use this corroboration to sharpen your DBQ claim."
      },
      "discussionQuestion": "Which of this week's claims survives corroboration BEST, and which rests on a single voice you cannot fully check? Rank them and defend your ranking with evidence -- do NOT treat every source as equally reliable.",
      "studentTask": "Write the DBQ (see the DBQ prompt). Requirements: a clear claim; short quoted evidence from at least two (Grade 8) documents, each sourced; one explicit corroboration move; and one civic-judgment sentence naming who benefited and who was harmed.",
      "exitTicket": "Turn in your final thesis sentence plus the two document IDs (letters) you will use as your strongest evidence, and one word describing which source you trust MOST after corroboration.",
      "differentiation": {
        "strugglingReaders": "Provide a CER paragraph frame with sentence starters and a bank of pre-quoted evidence chips labeled by document; require two documents rather than three.",
        "advanced": "Require three documents, a full corroboration paragraph, and a counterargument the student refutes with evidence; add one historiography sentence on how survival bias limits the whole argument.",
        "englishLearners": "Provide a bilingual thesis frame, color-coded CER organizer, and a word bank of academic verbs (argues, records, reveals, omits, benefits, harms); allow planning in the home language before the English draft.",
        "iepAnd504": "Provide a completed graphic-organizer outline, allow an oral defense in place of the full essay, give extended time, and supply a student-friendly checklist version of the rubric.",
        "executiveFunction": "Break the essay into timed stages with checkboxes (thesis -> evidence 1 -> evidence 2 -> corroboration -> civic-judgment -> conclusion) and provide a one-page planner.",
        "alternateResponse": "Accept a recorded oral essay, a short narrated slide deck, or a fully completed structured organizer as the assessment, graded on the same rubric."
      }
    }
  ],
  "quiz": [
    {
      "question": "In medieval Europe, which group was MOST likely to be able to read and write?",
      "choices": [
        "Farmers and peasants",
        "Monks and other clergy",
        "Soldiers",
        "Only foreign merchants"
      ],
      "answer": "Monks and other clergy",
      "explanation": "Reading and writing were concentrated in the Church. Monks copied books in monastery scriptoria and kept most official records, which means the surviving written record heavily reflects a clerical point of view."
    },
    {
      "question": "Magna Carta's clause 39 protected 'free men.' Which group did that wording leave out?",
      "choices": [
        "Barons",
        "Bishops",
        "Villeins (serfs)",
        "The king"
      ],
      "answer": "Villeins (serfs)",
      "explanation": "Villeins were unfree peasants and were not counted as 'free men,' so clause 39's protections did not fully apply to the rural majority. This is why the exact word 'free' matters so much."
    },
    {
      "question": "The Domesday Book (1086) was created mainly to:",
      "choices": [
        "Record the daily lives of peasants",
        "List land and resources so the king could tax them",
        "Tell adventure stories about knights",
        "Translate the Bible into English"
      ],
      "answer": "List land and resources so the king could tax them",
      "explanation": "It is an administrative/data source. It counted taxable resources and heads of household, not the details of ordinary people's lives, which is why it makes some people visible and nearly erases others."
    },
    {
      "question": "In history, 'survivorship bias' means:",
      "choices": [
        "Only physically strong people survive wars",
        "We study what survived and forget what was lost",
        "Sources are always preserved on purpose",
        "People who survive always tell the truth"
      ],
      "answer": "We study what survived and forget what was lost",
      "explanation": "What lasts is often what was durable or protected (like parchment in a dry monastery), not what was most important. Forgetting the lost material distorts our picture of the past."
    },
    {
      "question": "Why do historians say that translation is 'an interpretive act'?",
      "choices": [
        "Translators copy word-for-word with no choices",
        "Every translation involves choices that can shape meaning",
        "Translation removes all bias from a source",
        "Only modern texts ever get translated"
      ],
      "answer": "Every translation involves choices that can shape meaning",
      "explanation": "Rendering 'Christ slept, and his saints' versus 'Christ and his saints were asleep' shows how a translator's word choice can change tone and meaning, so the translation is itself an interpretation."
    },
    {
      "question": "A monk's chronicle is the ONLY surviving account of a village famine. Give one reason to use it as evidence AND one reason to be cautious.",
      "answer": "Use it because it is a firsthand or near-contemporary record that preserves details we would otherwise lose. Be cautious because it is a single, uncorroborated source written from a clerical point of view, and the villagers' own words did not survive to check it against.",
      "explanation": "This tests balanced reasoning: the source has real value but cannot be fully corroborated, so a historian trusts it partially and says exactly why -- not 'all sources are equal' and not 'reject it entirely.'"
    },
    {
      "question": "The 'civic-judgment move' asks you to go beyond 'Is this source biased?' to ask what instead?",
      "answer": "What does the bias DO -- who benefits from it, who is harmed by it, and what happens when people act on it.",
      "explanation": "Naming bias is only the start. The civic-judgment move analyzes consequences: for example, defining Magna Carta's protections as being only for 'free men' benefited landholders and harmed villeins when courts applied it."
    },
    {
      "question": "A historian finds that a narrative source and a data source describe the same royal survey and agree on the key facts. This is an example of:",
      "choices": [
        "Sourcing",
        "Corroboration",
        "Survivorship bias",
        "Translation"
      ],
      "answer": "Corroboration",
      "explanation": "Corroboration is checking whether independent sources agree. When the Anglo-Saxon Chronicle's description matches the kind of data the Domesday Book records, our confidence in that claim rises."
    }
  ],
  "dbq": {
    "prompt": "Who controlled knowledge and authority when few people could read, and how should we judge sources that survived by chance? Using at least three of the documents below (two for the middle-school version), write an evidence-based argument that answers the question. You must (1) source at least two documents, (2) corroborate one claim across two documents, and (3) include the civic-judgment move: name who benefited from controlling knowledge, who was harmed, and what happened when people acted on it. Do not conclude that 'all sources are equally reliable' -- state which claims hold up under corroboration and which rest on a single voice, and why.",
    "guidance": "Structure: (1) Claim -- one sentence that directly answers the question and takes a position. (2) Evidence and analysis -- at least three body points, each with a SHORT quoted phrase labeled by document (Doc A-E), sourced (who made it, when, why). (3) A corroboration paragraph -- name two documents that agree and explain why that raises your confidence; then name a claim that rests on only one voice and explain why you hold it loosely. (4) A civic-judgment sentence -- who benefited from controlling reading/writing/records, who was harmed, and what followed when people acted on it. (5) Conclusion. Reminder: bracketed words in the documents are clarifications, not part of the original; a paraphrase is never a quotation. Avoid false balance: some accounts survive corroboration and some collapse -- say which and why.",
    "documents": [
      {
        "title": "Document A -- A Monk Explains His Method (Bede, c. 731)",
        "excerpt": "\"...as the true rule of history requires, [I] have laboured sincerely to commit to writing such things as I could gather from common report... [And] I humbly entreat the reader, that, if he shall find in this that we have written anything not delivered according to the truth, he will not impute the same to me.\"",
        "attribution": "Bede, The Ecclesiastical History of the English People, Preface, c. 731 CE. Public-domain English translation (A. M. Sellar, 1907). Bracketed words added for readability.",
        "contextNote": "Bede was a monk -- one of the few literate people of his time. He describes how he gathered information and admits he could be wrong. Useful for sourcing: it shows both who did the writing and how carefully (or not) it was done."
      },
      {
        "title": "Document B -- The Pope Claims Supreme Authority (Dictatus Papae, 1075)",
        "excerpt": "\"That the Roman church was founded by God alone. That the Roman pontiff alone can with right be called universal... That it may be permitted to him to depose emperors... That he himself may be judged by no one.\"",
        "attribution": "Dictatus Papae ('Dictates of the Pope'), attributed to Pope Gregory VII, 1075. Public-domain English translation (E. F. Henderson, Select Historical Documents of the Middle Ages, 1892).",
        "contextNote": "A list of statements claiming the pope's supreme authority -- even over emperors -- and that no one may judge him. Shows the Church claiming to decide what counts as legitimate authority. Consider who benefits from such a claim."
      },
      {
        "title": "Document C -- Magna Carta on 'Free Men' (1215)",
        "excerpt": "\"(39) No free man shall be taken, or imprisoned, or disseised [stripped of his lands]... but by the lawful judgment of his peers, or by the law of the land. (40) To none will we sell, to none will we deny or delay, right or justice.\"",
        "attribution": "Magna Carta, 1215, clauses 39 and 40. Public-domain English translation from the Latin. ('Free man' = liber homo, a legal class that excluded unfree peasants.)",
        "contextNote": "Famous for limiting the king, but its protections are for 'free men.' Villeins (serfs), the rural majority, were not 'free men.' Good for the civic-judgment move: who benefits, who is left out."
      },
      {
        "title": "Document D -- Counting a Manor (Domesday Book, 1086)",
        "excerpt": "\"[The lord] holds this manor of the king. There are 5 hides. [There is] land for 6 ploughs... 3 slaves; and 12 villans [villeins] with 5 bordars [cottagers]... It was worth 4 pounds; now 6 pounds.\"",
        "attribution": "Representative manorial entry in the Domesday Book's standard formula, 1086 (standard public-domain translation wording; figures illustrate the survey's typical form). For verbatim local entries see Open Domesday, opendomesday.org. Bracketed words are clarifications.",
        "contextNote": "A data source built to record taxable land and resources. People are reduced to economic categories; only heads of household are counted, so women, children, and the texture of daily life are largely invisible. This entry models Domesday's exact formula rather than quoting one named manor."
      },
      {
        "title": "Document E -- A Monk Records Others' Suffering (Anglo-Saxon Chronicle, 1137)",
        "excerpt": "\"They said openly that Christ slept, and his saints. Such things, and more than we can tell, we suffered nineteen winters for our sins.\"",
        "attribution": "Anglo-Saxon Chronicle (Peterborough manuscript), entry for 1137, on King Stephen's wars. Public-domain English translation (based on J. Ingram, 1823); spelling modernized.",
        "contextNote": "A literate monk records the suffering of ordinary people who left no writing of their own. Their experience survives only through him, and only because his parchment lasted -- a clear case of whose voices survive and whose are lost."
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
          "States a precise, defensible claim that directly answers the driving question and previews the line of reasoning.",
          "States a clear claim that answers the question, with a general sense of the reasoning to come.",
          "States a claim, but it is vague, partial, or mostly restates the question.",
          "No clear claim, or the claim does not address the question."
        ]
      },
      {
        "name": "Use of Evidence",
        "descriptors": [
          "Integrates accurate short quotations from three or more documents, each clearly relevant and correctly labeled.",
          "Uses accurate quoted evidence from at least two documents that supports the claim.",
          "Uses limited, loosely connected, or partly inaccurate evidence; may paraphrase where a quotation is needed.",
          "Little or no textual evidence, or evidence is inaccurate or invented."
        ]
      },
      {
        "name": "Sourcing & Contextualization",
        "descriptors": [
          "Sources documents by author, date, purpose, and audience and uses context to weigh reliability with insight.",
          "Sources at least two documents and places them accurately in their medieval context.",
          "Attempts sourcing or context but it is thin, generic, or occasionally inaccurate.",
          "No sourcing or context; treats documents as free-floating facts."
        ]
      },
      {
        "name": "Corroboration & Reasoning",
        "descriptors": [
          "Explicitly corroborates a claim across two documents AND identifies a single-source claim to hold loosely, explaining why; reasoning is tight and avoids false balance.",
          "Makes a clear corroboration move and explains why agreement raises confidence.",
          "Mentions that sources agree or differ but does not explain what that does to reliability.",
          "No corroboration; either trusts every source equally or dismisses all sources as 'just biased.'"
        ]
      },
      {
        "name": "Civic-Judgment Move (What the Bias Does)",
        "descriptors": [
          "Names who benefited and who was harmed AND explains what happened when people acted on the bias, grounded in a specific source.",
          "Names who benefited and who was harmed, tied to a source.",
          "Notes that a source is biased but does not analyze who benefits or is harmed.",
          "No analysis of consequences; bias is named only in the abstract or not at all."
        ]
      },
      {
        "name": "Historical Accuracy & Academic Language",
        "descriptors": [
          "Historically accurate throughout; uses discipline vocabulary (sourcing, corroboration, survivorship bias, villein) precisely; clear and well organized.",
          "Mostly accurate with appropriate vocabulary and clear organization.",
          "Some inaccuracies or vague vocabulary; organization is uneven.",
          "Frequent inaccuracies; little discipline vocabulary; hard to follow."
        ]
      }
    ]
  },
  "modifiedReading": "READING-SUPPORT VERSION (for striving readers and IEP/504 reading goals). This version keeps every idea and every real source but lowers the reading load. PLAIN-LANGUAGE CORE READING: \"Long ago in medieval Europe, almost no one could read. Books were rare because every book was copied by hand, mostly by monks in special rooms called scriptoria. Because monks and priests did most of the reading and writing, they also kept most of the records. That gave the Church a lot of power: it could help decide what was written down and what counted as true. Kings kept records too. In 1215, English barons forced King John to agree to Magna Carta and put his seal on it. It promised fair treatment -- but only to 'free men.' Most farm workers were villeins (serfs) who were not 'free,' so the promise did not really protect them. In 1086, King William counted the whole kingdom in the Domesday Book so he could tax it. It listed land, animals, and people -- but it counted people mostly as workers and taxpayers, not as full human beings, so we learn little about their real lives, especially women and children. Finally, we only have the sources that survived. Parchment kept safe in monasteries lasted; the words of poor people usually did not. So the record we have leans toward monks, kings, and the wealthy. When we read these sources, we ask: Who made this? Why? Who is helped by it, and who is left out?\" SUPPORTS: (1) Each primary-source excerpt is provided at 1-2 lines with a one-sentence paraphrase directly beneath it. (2) Pre-taught words with picture icons: monk, scriptorium, charter, tax, survive, missing. (3) A three-question thinking frame used every day: \"Who made it? Who is helped? Who is left out?\" (4) Graphic organizers replace open writing: two-column charts and a data table students fill in rather than compose from scratch. (5) All exit tickets offered as sentence-completion. (6) Text-to-speech and read-aloud allowed for every source. This version reaches the SAME objectives; only the reading and writing demand is reduced, never the thinking.",
  "advancedExtension": "ADVANCED EXTENSION (for students ready for more challenge). Choose ONE. (1) TRANSLATION LAB: Find two published public-domain translations of the same medieval passage (for example, the Anglo-Saxon Chronicle's 1137 entry, or Magna Carta clause 39). Line them up, mark three word choices that differ, and write a one-page analysis of how each choice nudges the reader toward a different feeling or interpretation. Conclude with a rule for how a careful historian should cite a translated source. (2) THE SILENCE PROJECT: Pick one group nearly absent from this week's record (for example, peasant women, enslaved people recorded in Domesday, or Jewish communities in medieval England). Research what INDIRECT evidence historians actually use to recover their experience (tax rolls, court records, archaeology, others writing about them). Write a short historiographical note: what can and cannot be known, and why the silence is itself evidence. (3) WHY THIS SURVIVED: Investigate the physical survival of one document (Domesday Book, Magna Carta, or Bede). Who preserved it, where, and why? Argue how the reasons for its survival shape which parts of history feel 'well documented.' (4) CORROBORATION DEEP DIVE: Using a real verbatim Domesday entry from the open-access Open Domesday (opendomesday.org), build a formal corroboration chart comparing the Anglo-Saxon Chronicle (1085) narrative with the Domesday data, then write a paragraph ranking claims by how strongly they are corroborated, explicitly refuting the idea that 'all sources are equally reliable.' Each option is assessed on the same analytic rubric, with special weight on Sourcing & Contextualization and Corroboration & Reasoning.",
  "subPlan": "SUBSTITUTE PLAN (self-contained; no history background required). This one-period plan can be run by any substitute using only the Student Packet and this script. OBJECTIVE FOR THE DAY: Students practice sourcing and the civic-judgment move on one short real document. TIMING: (1) 0-5 min -- Take attendance. Write on the board: \"In the Middle Ages, fewer than 1 in 10 people could read. Who do you think got to write the official records?\" Students write two sentences. (2) 5-10 min -- Ask three volunteers to share. No right answer; just get ideas out. (3) 10-25 min -- Hand out the Student Packet. Students read the Background Reading (it is short and plain-language) and complete the Source Worksheet on William the Conqueror's 1067 charter to London. All directions are on the sheet; answers come straight from the text. (4) 25-40 min -- Students answer the four civic-judgment questions on the worksheet: Who is named? Who is left out? Who benefits? Who is harmed? Then they write one CER sentence using the frame provided in the packet. (5) 40-50 min -- Students complete any one Exit Ticket from the packet and hand it in. IF STUDENTS FINISH EARLY: They may read the other source excerpts in the packet and list one thing each source does NOT tell us. CLASSROOM MANAGEMENT: This is individual/quiet work with brief share-outs; no group movement or technology is required. COLLECT: The Source Worksheet and Exit Ticket, left for the teacher. NOTHING to grade for the substitute -- the teacher will review the work. No prior knowledge of medieval history is needed; every answer is on the page.",
  "dashboard": {
    "focusDay": "Day 3 -- Counting a Kingdom: The Domesday Book as a Data Source",
    "todaysObjective": "Students will read the Domesday Book as an administrative/data source, explain what was recorded and why, and evaluate what a tax record does and does not reveal about people's lives.",
    "essentialQuestion": "When an official record counts some people and ignores others, who benefits and who is harmed -- and what does that do to the history we can write about ordinary people?",
    "sourceOfTheDay": {
      "title": "Counting a Manor: A Representative Domesday Book Entry (1086)",
      "excerpt": "\"[The lord] holds this manor of the king. There are 5 hides. [There is] land for 6 ploughs. In demesne [the lord's own land] are 2 ploughs, and 3 slaves; and 12 villans [villeins] with 5 bordars [cottagers] have 4 ploughs. There is meadow, 8 acres. It was worth 4 pounds; now 6 pounds.\"",
      "attribution": "Representative manorial entry in the Domesday Book's standard formula, 1086, rendered in the wording of the standard public-domain translations. Figures illustrate the survey's typical form; for a verbatim entry for a specific manor, see the open-access Open Domesday (opendomesday.org). Bracketed words are clarifications added for students.",
      "contextNote": "The Domesday Book recorded land and resources so the king could tax them. A 'hide' was a tax unit of land, and 'demesne' was the land the lord kept for himself. People are listed only by economic category -- villans (villeins), bordars (cottagers), and enslaved people (Latin servi, traditionally translated 'slaves') -- and usually just the head of household is counted, so most women, children, and the details of daily life never appear. (This models Domesday's exact formula rather than quoting one named manor.)",
      "task": "Convert the entry into a data table (category -> number). Then answer: What did this record most want to know? Name two things about these people's lives it does NOT tell you. Whose life is most invisible, and why?"
    },
    "keyVocabulary": [
      {
        "term": "administrative (data) source",
        "definition": "An official government record that tracks land, people, money, or property -- like a survey or tax roll."
      },
      {
        "term": "hide",
        "definition": "A unit of land used in the Domesday Book to figure out taxes."
      },
      {
        "term": "villein / bordar / enslaved person (servi)",
        "definition": "Categories of unfree or low-status country people -- villeins and cottagers, and enslaved people (Latin servi). The Domesday Book counts them as workers and taxpayers, not as full individuals."
      },
      {
        "term": "demesne",
        "definition": "The part of a manor kept for the lord's own use rather than farmed by tenants."
      },
      {
        "term": "survivorship bias (preview)",
        "definition": "Studying only what survived and forgetting what was lost -- tomorrow's focus, previewed by asking whose lives this record leaves out."
      }
    ],
    "misconceptions": [
      "'The Domesday Book counted everyone.' No -- it counted taxable resources and heads of household (mostly men). Women and children rarely appear as individuals.",
      "'It tells us how people lived.' No -- it is a tax record, not a diary. It reveals ownership and value, not daily life, feelings, or beliefs.",
      "'Numbers are neutral and unbiased.' The categories a government chooses (whom to count, and as what) are themselves a choice about who becomes visible and who nearly disappears.",
      "'Being counted meant being protected.' Being counted here meant being taxable; it did not give people rights or a voice."
    ],
    "discussionProtocol": "Think-Pair-Share into a whole-class chart. (1) THINK (3 min): each student converts the entry into the data table alone. (2) PAIR (4 min): partners compare tables and agree on two things the record does NOT tell us. (3) SHARE (8 min): teacher builds a class two-column chart on the board -- 'Who is counted' vs. 'Who is nearly erased' -- taking one item per pair. Close by asking the civic-judgment question aloud: who benefited from this record, and who was reduced to a number?",
    "differentiationSupports": [
      "Striving readers: pre-parsed, pre-labeled data table and icon glossary (plough, meadow, household).",
      "Advanced: add a second entry to compare and compute people-per-plough; argue what 'worth 6 pounds' reveals about royal priorities. Extension: pull a real verbatim entry from opendomesday.org.",
      "English learners: visual glossary plus frames ('The record counts ___. It does not tell us ___.').",
      "IEP/504: half-built table, highlighted people-categories, calculator, read-aloud, extended time.",
      "Executive function: numbered step card with checkboxes and a short timer per step.",
      "Alternate response: build the table with counters, or give a 30-second spoken explanation of counted vs. invisible."
    ],
    "exitTicket": "In one sentence: name one thing the Domesday Book is EXCELLENT evidence for, and one thing it is WEAK evidence for, and explain why.",
    "tomorrowsBridge": "Today we saw a record that makes some people visible and others nearly invisible. Tomorrow (Day 4) we ask the bigger question: of everything written in the Middle Ages, only some survived -- and survival favored durable, protected records like this one. We will study survivorship bias and translation, and ask whose voices were lost for good, so students carry today's 'who is erased?' question into 'whose evidence never survived at all?'"
  },
  "studentPacket": {
    "intro": "Welcome to History Judgment Lab: Medieval Europe and Authority. This week you become a history detective. Our big question is: Who controlled knowledge and authority when few people could read, and how do we judge sources that survived by chance? You will read short pieces of REAL documents that are over 800 years old -- a monk's history, Magna Carta, a king's charter, the Domesday Book, and a papal decree. For each one you will practice four detective moves: SOURCING (who made it, when, and why), CONTEXT (what was happening then), CORROBORATION (do other sources agree?), and the CIVIC-JUDGMENT MOVE (who is helped by this source, who is hurt, and what happens when people believe it?). By Friday you will write your own argument answering the big question. Keep this packet all week.",
    "vocabulary": [
      {
        "term": "sourcing",
        "definition": "Asking who made a source, when, why, and for whom -- before you trust it."
      },
      {
        "term": "contextualization",
        "definition": "Placing a source in its own time and place to understand what it meant then."
      },
      {
        "term": "corroboration",
        "definition": "Checking whether different sources agree, and asking why they might disagree."
      },
      {
        "term": "civic-judgment move",
        "definition": "Going past 'Is it biased?' to ask what the bias DOES: who benefits, who is harmed, what happens when people act on it."
      },
      {
        "term": "scriptorium",
        "definition": "The monastery room where monks copied books and documents by hand."
      },
      {
        "term": "charter",
        "definition": "An official written document from a ruler granting rights, land, or privileges."
      },
      {
        "term": "free man vs. villein",
        "definition": "A free man had legal rights and could use the king's courts; a villein (serf) was an unfree peasant bound to a lord's land. Villeins were the country majority."
      },
      {
        "term": "Domesday Book",
        "definition": "The 1086 survey that recorded land, resources, and people so the king could tax them."
      },
      {
        "term": "survivorship bias",
        "definition": "The mistake of studying only what survived and forgetting what -- and who -- was lost."
      },
      {
        "term": "translation",
        "definition": "Turning words from one language into another; every translation involves choices that shape meaning."
      }
    ],
    "backgroundReading": {
      "title": "Who Held the Pen? Knowledge and Power in Medieval Europe",
      "paragraphs": [
        "In medieval Europe, most people could not read or write. There were no printing presses, so every book had to be copied by hand. This slow, expensive work was done mostly by monks in a special room called a scriptorium. Because monks and other clergy did most of the reading and writing, they also kept most of the records -- and that gave the Church great power over what was written down and what counted as knowledge.",
        "Kings needed records too. In 1086, William the Conqueror ordered a survey of all England called the Domesday Book. It listed who owned each piece of land, how many animals and workers were there, and what it was all worth, so the king could tax it. But the survey counted people mainly as workers and taxpayers. It rarely names women or children, and it tells us almost nothing about what anyone's life actually felt like.",
        "Writing was also used to make promises. In 1215, English barons forced King John to seal Magna Carta. It promised that no 'free man' would be jailed or have his land taken except by lawful judgment. That sounds fair -- but most country people were villeins (serfs) who were not 'free men,' so the promise did not really protect them. Notice how much rested on a single word: 'free.'",
        "Here is the tricky part for a historian. We only have the sources that SURVIVED. Parchment kept safe and dry in a monastery could last for centuries. The words of poor people, if they were ever written at all, usually did not survive. So the record that reaches us leans heavily toward monks, kings, and the wealthy. Studying only what lasted, and forgetting what was lost, is called survivorship bias.",
        "That is why we read carefully. For every source we ask: Who made it? Why? Who benefits from it, and who is left out? We also remember that these old sources come to us in translation, and every translator makes choices. Some claims can be checked against other sources and hold up; others rest on a single voice and must be treated with more caution. Your job this week is to tell which is which -- and to say why."
      ]
    },
    "sourceWorksheet": {
      "source": {
        "title": "A New King's Promise to a City (William the Conqueror's Charter to London, 1067)",
        "excerpt": "\"William the king greets William the bishop and Geoffrey the portreeve and all the burgesses within London, French and English, in friendly fashion. And I make known to you that I will that ye be all law-worthy as ye were in King Edward's day. And I will that every child be his father's heir after his father's day. And I will not suffer that any man do you wrong. God keep you.\"",
        "attribution": "Writ (charter) of King William I to the citizens of London, 1067. Public-domain English translation from the Old English; spelling modernized.",
        "contextNote": "William had just conquered England in 1066. This very short charter promises the people of London that they keep their old legal rights and can pass property to their children. A 'portreeve' was a town official (here, Geoffrey); 'burgesses' were townsmen with legal rights; 'law-worthy' meant having full legal standing."
      },
      "questions": [
        "SOURCING: Who sent this document, and to whom? What had just happened in England in 1066-67 that made a new king want to make promises?",
        "PURPOSE: Why would a brand-new king, who just conquered the country, bother to promise London these specific things?",
        "READ CLOSELY: List every group the charter actually names. Now name at least two groups of people IN or NEAR London who are not named or promised anything here.",
        "CIVIC-JUDGMENT MOVE: Who benefits from this charter? Who is left out? What might happen to people who are not protected by it?",
        "CORROBORATION: How could you check whether William actually kept these promises? Name one other kind of source you would look for.",
        "TRANSLATION NOTE: This was translated from Old English, and the spelling was modernized. Why should you remember that the exact words you read are partly a translator's choices?"
      ]
    },
    "cerOrganizer": {
      "prompt": "Answer the driving question: Who controlled knowledge and authority when few people could read, and how do we judge sources that survived by chance? Use at least two documents.",
      "claimGuidance": "Write ONE clear sentence that directly answers the question and takes a position -- do not just repeat the question. Sentence stem you may use: 'In medieval Europe, ___ controlled knowledge and authority because ___, so we should judge surviving sources by ___.'",
      "evidenceGuidance": "Pick at least two documents. Copy a SHORT exact phrase from each and label it (Doc A-E). Before you trust each one, source it: who made it, when, and why. Remember -- a paraphrase is not a quotation, so use quotation marks only around the real words.",
      "reasoningGuidance": "Explain how each quote supports your claim. Include ONE corroboration move (two sources that agree, and why that makes you more confident) and ONE civic-judgment sentence (who benefited, who was harmed, and what happened when people acted on it). Do NOT write that 'both sides are equal' -- say which claim holds up under checking and which rests on a single voice, and why."
    },
    "exitTickets": [
      "Day 1: In one sentence, name one group whose knowledge or story was LESS likely to be written down in medieval Europe, and explain why.",
      "Day 2: Finish with evidence -- 'Magna Carta protected ___, but left out ___, which mattered because ___.'",
      "Day 3: In one sentence, name one thing the Domesday Book is EXCELLENT evidence for and one thing it is WEAK evidence for, and why.",
      "Day 4: Finish the sentence -- 'A source that survived by chance can mislead a historian because ___.'",
      "Day 5: Turn in your thesis sentence plus the two document letters you will use as your strongest evidence, and one word for which source you trust most after corroboration."
    ],
    "dbqPrompt": "Who controlled knowledge and authority when few people could read, and how should we judge sources that survived by chance? Using at least two documents from this packet, write an evidence-based answer. You must: (1) quote a short phrase from each document you use and source it (who made it, when, why); (2) make one corroboration move (name two documents that agree and say why that raises your confidence); and (3) include the civic-judgment move (name who benefited from controlling knowledge, who was harmed, and what happened when people acted on it). Do not say 'all sources are equally reliable' -- explain which claims hold up when you check them against other sources, and which rest on a single voice."
  }
};

export const medievalEurope: ReconstructionUnit = data;
