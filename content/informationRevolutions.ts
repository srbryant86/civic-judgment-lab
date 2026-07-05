import type { InformationRevolutions } from "./types";

/* Static sample content — authored and adversarially fact-checked.
   Review all materials for accuracy before classroom use. */

const data = {
  "title": "From Printing Press to AI: Information, Power, and Judgment",
  "drivingQuestion": "When new technologies change who can produce, distribute, or act on information, do they strengthen democracy, destabilize society, or both?",
  "coreIdea": "The internet gave ordinary people ACCESS to information; social media gave ordinary people BROADCAST power; AI agents and coding tools begin to give ordinary people CONSTRUCTION and EXECUTION power. Each leap expanded human capability — but more power without judgment can make people confidently wrong at scale, and, in the age of AI, can act on that error faster than a person can check it.",
  "overview": "This three-day interdisciplinary module traces a single question across roughly six centuries: what happens to a society when a new technology changes who gets to produce, distribute, or act on information? Day 1 examines the printing press, the Reformation, rising literacy, religious conflict, and scientific exchange. Day 2 follows the nineteenth- and twentieth-century revolution in speed and mass audience — telegraph, railroads, newspapers, radio, and television. Day 3 turns to the internet, social media, and AI. A recurring pattern organizes the unit: the internet gave ordinary people access, social media gave them broadcast power, and AI tools are beginning to give them construction and execution power. Each stage widened human capability and each also revealed that power without judgment can spread error — and, increasingly, act on it — at scale. The module is designed to build historical reasoning, media literacy, and the habit of civil disagreement. It is deliberately nonpartisan and administrator-safe: it studies how technologies reshape information and power, and it treats AI soberly, as neither miracle nor menace but as a tool that amplifies whatever judgment it is given.",
  "timeline": [
    {
      "era": "Before c. 1450 — The Scribal Age",
      "technology": "Hand-copied manuscripts",
      "whatChanged": "Texts were reproduced one at a time by trained scribes, so books were scarce and costly. The ability to own and interpret important writings, including scripture, stayed with a small religious and aristocratic elite.",
      "tension": "Knowledge was carefully preserved but tightly controlled: accuracy depended on a few hands, and access was a privilege rather than a right."
    },
    {
      "era": "c. 1450-1600 — The Print Revolution",
      "technology": "Gutenberg's movable-type printing press",
      "whatChanged": "Identical copies of a text could be produced quickly and cheaply and reach distant readers at nearly the same time. Producing and distributing ideas no longer required an institution's permission.",
      "tension": "The same press spread scholarship, vernacular Bibles, and scientific exchange alongside rumor, forgery, and the ideas that fueled religious conflict — all while weakening the authorities who had decided what counted as truth."
    },
    {
      "era": "1600s-1830s — The Public Sphere",
      "technology": "Newspapers, pamphlets, and the penny press",
      "whatChanged": "Regular, timely, and increasingly affordable periodicals created a broad reading public and a new force called 'public opinion,' shaped by print and coffeehouse debate.",
      "tension": "A shared public conversation could hold power to account, but a partisan and profit-driven press could also inflame the public it informed."
    },
    {
      "era": "1840s-1860s — The Wire",
      "technology": "The electric telegraph",
      "whatChanged": "For the first time, information moved faster than any person, horse, or ship, separating communication from transportation. Wire-service cooperatives helped spread a terse, neutral reporting style.",
      "tension": "Instant news created military, financial, and political advantage for whoever controlled the wires, concentrating power even as it standardized 'the facts.'"
    },
    {
      "era": "1860s-1900 — National Networks",
      "technology": "Railroads and mass-circulation newspapers",
      "whatChanged": "Reliable national distribution, and eventually standardized time, created national markets and national audiences reachable by advertising-funded papers selling millions of copies.",
      "tension": "Reaching millions meant the power to move millions; the sensational 'yellow journalism' of the 1890s showed how spectacle and emotion could drive public feeling."
    },
    {
      "era": "1920s-1940s — The Broadcast Voice",
      "technology": "Radio",
      "whatChanged": "A single human voice could reach millions of homes at the same instant, live, creating a simultaneous mass experience that print never could.",
      "tension": "The same reach that let leaders inform and reassure also enabled propaganda on an unprecedented scale in several nations, democratic and authoritarian alike."
    },
    {
      "era": "1950s-1990s — The Living-Room Screen",
      "technology": "Television",
      "whatChanged": "Broadcasting added moving images and emotion, producing shared national moments and making appearance and image central to public life.",
      "tension": "A handful of networks shaped what an entire country saw and felt, concentrating agenda-setting power in very few hands."
    },
    {
      "era": "1990s-2000s — Access",
      "technology": "The internet and World Wide Web",
      "whatChanged": "Ordinary people could find and publish information cheaply and directly, weakening traditional gatekeepers. The hard problem shifted from finding information to judging it.",
      "tension": "Abundant information empowered learners and researchers but placed the burden of verifying quality and truth onto every individual."
    },
    {
      "era": "Late 2000s-2010s — Broadcast",
      "technology": "Social media and smartphones",
      "whatChanged": "Distribution became universal: anyone could publish to potentially millions instantly and for free, while algorithms decided what spread.",
      "tension": "Systems that reward attention tend to amplify the surprising and emotional over the accurate, hardening division even as they give voice to and mobilize communities."
    },
    {
      "era": "2020s — Execution",
      "technology": "Generative AI and autonomous agents",
      "whatChanged": "Tools can now generate text, images, and working code, and newer 'agents' can begin to carry out multi-step tasks. Ordinary people gain the power not just to find and share information but to construct and act on it.",
      "tension": "The same leverage that democratizes creation can act on error faster than a person can check it — producing confident mistakes at scale and raising new questions of provenance and accountability."
    }
  ],
  "days": [
    {
      "day": 1,
      "title": "The Press That Multiplied Ideas: Print, Reformation, and Science",
      "teacherNotes": [
        "Objectives: Students will explain how movable-type printing changed who could produce and distribute ideas, and analyze how that same shift spread knowledge while destabilizing existing authority.",
        "Suggested timing (approx. 50 min): 10 min hook and timeline placement, 12 min student reading, 13 min media analysis, 10 min discussion, 5 min exit reflection. The CER paragraph can be completed in class or assigned.",
        "Prep: Source two public-domain images — a page from a hand-copied medieval manuscript and a Reformation-era printed broadsheet or pamphlet (ideally one pairing a short vernacular text with a woodcut). Library and museum digital collections offer many freely usable examples.",
        "Accuracy notes: Gutenberg's press dates to roughly the 1440s-1450s (the 42-line Bible is usually dated around 1455). An estimated several million volumes were printed across Europe by 1500. Literacy rose slowly over centuries, not overnight — emphasize that a technology's largest effects can arrive long after its invention.",
        "Sensitivity guidance: Religion is central to this lesson. Frame the Reformation as a historical religious and political movement, not as a theological claim to endorse or reject. Keep discussion on the technology and its social effects, and make explicit that the class is studying history, not evaluating anyone's faith.",
        "Differentiation: Provide a labeled vocabulary list (movable type, incunabula, vernacular, Reformation, Republic of Letters). Offer sentence stems and a CER organizer for developing writers.",
        "Standards alignment: Supports historical-thinking skills of causation, continuity and change over time, and sourcing, consistent with the C3 Framework and common state social studies standards. These are sample thematic alignment categories offered for teacher reference only, not official standard codes; map them to your own state or district standards before use."
      ],
      "studentReading": {
        "title": "The Press That Multiplied Ideas",
        "paragraphs": [
          "For most of human history, producing a book meant copying it by hand. In medieval Europe, trained scribes — often working in monasteries — could spend months on a single volume. Books were rare and expensive, and because so few people owned them or could read fluently, the power to interpret important texts, including scripture, rested with a small elite.",
          "Around 1450, a craftsman in Mainz named Johannes Gutenberg combined movable metal type, oil-based ink, and a screw press into a system that could reproduce a page hundreds of times. At first the change looked merely quantitative, but it was transformative: work that once took months now took days. By 1500, presses across Europe had printed several million volumes, and for the first time identical copies of a text could reach readers in distant cities at roughly the same moment.",
          "The consequences reached far beyond books. In 1517 a German monk, Martin Luther, circulated criticisms of church practices. Printers copied and spread his pamphlets faster than authorities could respond, and translations of the Bible into everyday languages let ordinary readers encounter scripture directly. What began as a religious dispute grew into the Reformation, a movement that reshaped European politics and eventually contributed to decades of religious conflict.",
          "Print also accelerated science. Scholars could now share identical diagrams, tables, and observations, check one another's work, and build on it across borders — a network sometimes called the 'Republic of Letters.' Reproducible figures made it possible to publish anatomy, astronomy, and mathematics with a precision that hand-copying could never guarantee.",
          "But the same technology that spread Luther's ideas and Copernicus's astronomy also spread rumor, forged documents, and manuals used to justify witch hunts. The press did not decide what was true; it multiplied whatever it was handed. That is the central tension of today's lesson: a tool that widened access to knowledge also weakened the authorities who had decided what counted as knowledge — strengthening open inquiry and social instability at the same time."
        ]
      },
      "discussionPrompts": [
        "Before the printing press, who controlled which texts most people could read, and why does that control matter for who holds power in a society?",
        "The press spread both careful scholarship and inflammatory rumor. Was that a flaw in the technology, or an unavoidable feature of any tool that widens access?",
        "Rising literacy took centuries. Why might a technology's biggest social effects arrive long after it is invented?",
        "Some rulers tried to license or censor presses. When, if ever, is it legitimate for authorities to control who is allowed to publish?",
        "How is 'translating the Bible into everyday language' similar to letting ordinary people search the internet today? How is it different?"
      ],
      "mediaAnalysis": {
        "title": "Manuscript vs. Printed Page: Who Is This For?",
        "focus": "Production, cost, audience, and persuasion in early print.",
        "instructions": "Your teacher will show two images: (1) a page from a hand-copied medieval manuscript and (2) a printed Reformation-era broadsheet or pamphlet, typically combining a short block of everyday-language text with a woodcut illustration. Observe each closely for a few minutes before answering. Do not judge them as 'old' or 'primitive.' Instead, treat each as a designed object built for a specific audience, and ask what its design tells you about who made it, for whom, and why.",
        "questions": [
          "Roughly how long would each object take to produce, and how many copies of each could realistically exist?",
          "Who could afford and read each one? What specific clues in the design point to the intended audience?",
          "The broadsheet pairs a picture with only a few words. Why would that choice matter in a society where many people could not read fluently?",
          "Which object is better at changing many minds quickly — and what does it give up in order to do so?",
          "Name one thing you cannot determine about either source just by looking at it, and explain how a historian could check it."
        ]
      },
      "cerTask": {
        "prompt": "Did the printing press strengthen society, destabilize it, or both? Write a claim-evidence-reasoning paragraph that answers the question using at least two specific examples drawn from the reading and the media activity.",
        "guidance": "Begin with a defensible Claim; 'both' is acceptable, but be specific about how. Support it with Evidence — concrete facts such as the rapid spread of Reformation pamphlets, vernacular Bibles, the scientific 'Republic of Letters,' or the printing of rumor and witch-hunt manuals. Your Reasoning should explain how each piece of evidence connects to your claim, and should name at least one example that cuts against your position before explaining why your claim still holds. Focus on what the technology changed about who could produce and spread ideas — not on whether the Reformation itself was good or bad."
      },
      "reflection": "Think of one thing you 'know' but have never personally verified. Who or what do you trust to have checked it for you — and how is that similar to a reader in 1520 trusting a freshly printed pamphlet?"
    },
    {
      "day": 2,
      "title": "Faster Than a Horse: Telegraph, Railroads, and the Age of Mass Persuasion",
      "teacherNotes": [
        "Objectives: Students will explain how the telegraph, railroads, mass newspapers, radio, and television collapsed distance and created mass audiences, and will evaluate how that shift concentrated the power to persuade.",
        "Suggested timing (approx. 50 min): 8 min timeline bridge from Day 1, 12 min reading, 13 min media analysis, 12 min discussion, 5 min reflection.",
        "Prep: Choose two public-domain primary sources — for example, a 1890s mass-circulation newspaper front page and a short transcript or audio clip of a 1930s-1940s radio address. Preview any audio for length and content before class.",
        "Accuracy notes: Morse's Washington-to-Baltimore telegraph line opened in 1844; the Associated Press dates to the 1840s; U.S. standard railroad time zones began in 1883; the Spanish-American War began in 1898. Historians actively debate how much 'yellow journalism' actually drove that war — present it as inflaming opinion, not single-handedly causing events.",
        "Media-myth caution: Two dramatic stories often taught about this era — that the 1938 'War of the Worlds' radio broadcast caused nationwide panic, and that television alone decided the 1960 Kennedy-Nixon debate — have both been challenged by later scholarship. Present them as contested accounts, and use them to teach why vivid media stories spread even when the evidence is thin.",
        "Sensitivity guidance: When discussing propaganda, treat it as a cross-national phenomenon that appeared in both democracies and dictatorships. Keep examples historical and avoid tying them to any present-day party, leader, or outlet.",
        "Differentiation: Provide a persuasion-techniques checklist (headline size, emotional word choice, dramatic imagery, tone of voice) and a partially completed CER organizer.",
        "Standards alignment: Reinforces sourcing, corroboration, and the evaluation of causation and point of view, consistent with the C3 Framework and common state social studies standards. These are sample thematic alignment categories offered for teacher reference only, not official standard codes; map them to your own state or district standards before use."
      ],
      "studentReading": {
        "title": "Faster Than a Horse: Collapsing Distance",
        "paragraphs": [
          "For centuries, information could travel no faster than a person, a horse, or a ship. A message from New York to New Orleans took weeks. The link between communication and physical transport was so old that it was almost invisible — until, in the 1840s, it broke.",
          "In 1844 Samuel Morse sent a telegraph message down a wire from Washington to Baltimore. Suddenly information could move at the speed of electricity while people and goods still moved at the speed of horses and steam. To share the high cost of the wires, newspapers banded together in cooperatives such as the Associated Press, and the terse, 'just the facts' wire style helped shape a new ideal of neutral reporting — partly a business necessity, since a single dispatch sold to many papers could not afford to take sides.",
          "Railroads reinforced the shift. They carried newspapers, mail, and goods across a continent on dependable schedules — so dependable that in 1883 the railroads imposed standard time zones to keep their timetables straight. National distribution created national markets and national audiences. Cheap, advertising-funded 'penny' papers had reached ordinary readers since the 1830s; now the biggest papers reached millions.",
          "With mass audiences came mass persuasion. In the 1890s, rival New York papers competed with enormous headlines, dramatic drawings, and sensational stories — a style critics called 'yellow journalism.' When the United States went to war with Spain in 1898, some of that coverage inflamed public feeling, though historians still debate how much the press actually shaped events. The larger lesson was clear: the power to reach millions was also the power to move millions.",
          "Radio and then television deepened the change. Beginning in the 1920s, radio put a single human voice into millions of homes at the same instant; by the 1950s, television added moving images and emotion. Leaders used the new reach to inform and reassure — and in several countries, governments used it to spread propaganda. The same broadcast that could calm a frightened nation could, in other hands, help manufacture support for a regime.",
          "That is the central tension of today's lesson. Collapsing distance knit strangers into national communities that could share news, markets, and even a single live moment — but it also concentrated the power to persuade in a few hands and made propaganda possible on a scale no printer could have imagined."
        ]
      },
      "discussionPrompts": [
        "The telegraph separated communication from transportation for the first time. What kinds of power — military, financial, political — does raw speed alone create?",
        "Wire services helped popularize 'neutral, just-the-facts' reporting partly for commercial reasons. Can a business motive still produce a genuine public good? Why or why not?",
        "Yellow journalism sold papers with emotion and spectacle. How is that similar to what earns attention online today?",
        "Radio let one voice reach millions at once. Why might that capability be especially useful to both democratic leaders and authoritarian ones?",
        "Who benefits, and who loses, when a country shares one broadcast 'national conversation' instead of many local ones?"
      ],
      "mediaAnalysis": {
        "title": "Persuasion at Scale: Reading a Mass-Media Message",
        "focus": "Identifying persuasion techniques in the age of mass audiences.",
        "instructions": "Your teacher will provide two primary sources from this era — for example, a front page from a 1890s mass-circulation newspaper and a short transcript or audio clip of a 1930s-1940s radio address. Analyze how each source tries to reach and move a large audience. As you work, deliberately separate what the source reports (claims you could check) from how it is presented (word choice, images, size, tone, sound).",
        "questions": [
          "What is the main message of each source, and what audience is it built for?",
          "List two specific techniques each source uses to capture attention or persuade (for example, headline size, emotional words, a dramatic image, or a reassuring tone).",
          "Which parts of each source could a reader or listener verify, and which parts are designed mainly to make them feel something?",
          "How does the medium itself — a printed page versus a live human voice — change the way the message lands?",
          "One famous claim about this era (that a 1938 radio drama caused nationwide panic, or that television alone decided a 1960 debate) was later questioned by historians. Why are dramatic media stories like these so easy to believe and repeat, even when the evidence is thin?"
        ]
      },
      "cerTask": {
        "prompt": "Did the mass-media revolution of the 1800s and 1900s do more to strengthen democracy or to endanger it? Write a claim-evidence-reasoning response using at least two specific examples from the reading and the media activity.",
        "guidance": "Take a clear position — strengthen, endanger, or a carefully defined 'both.' Use concrete Evidence such as the telegraph and wire-service objectivity, national markets and shared broadcasts, yellow journalism, or the use of radio and television for both reassurance and propaganda. In your Reasoning, explain the causal link between the technology and the effect, and weigh at least one example that cuts the other way. Treat propaganda as a general phenomenon that appeared in several kinds of governments, and avoid singling out any present-day party, leader, or outlet."
      },
      "reflection": "When you learn about a major event today, how many 'steps' separate what actually happened from what finally reaches you? List them, and mark the step where you think error is most likely to enter."
    },
    {
      "day": 3,
      "title": "Access, Broadcast, and Execution: The Internet, Social Media, and AI",
      "teacherNotes": [
        "Objectives: Students will explain the access-broadcast-execution pattern and evaluate how AI's ability to generate content and take action, combined with the risk of confident error, bears on the driving question.",
        "Suggested timing (approx. 50 min): 8 min recap of Days 1-2, 12 min reading, 15 min fact-checking activity, 10 min discussion, 5 min reflection. The CER task works well as the summative assessment for the whole module.",
        "Prep: Prepare one short AI-generated passage on a neutral factual topic that contains at least one fabricated element — a made-up statistic, a misattributed quotation, or a citation to a source that does not exist — along with an answer key noting which claims are false and how to verify them. If students generate text live, set clear guidelines, supervise, and follow your school's technology-use policy. Have reliable reference sources available for verification.",
        "Sober-framing notes: Treat AI as a powerful tool, not a miracle or a menace. 'Confidently wrong' output (sometimes called hallucination) is a real, documented limitation of today's systems. Echo-chamber and filter-bubble effects are real but their strength is genuinely debated in research — model that uncertainty rather than overstating it. Avoid confident predictions about specific future AI capabilities.",
        "Sensitivity guidance: Keep the fact-checking passage on a neutral topic. Do not build misinformation examples around real, named living individuals, and keep discussion away from current partisan disputes.",
        "Differentiation: Provide a three-column verification chart (claim / source checked / verdict) and sentence stems for the CER. Pair stronger and developing readers for the verification task.",
        "Standards alignment: Emphasizes media and information literacy, sourcing, and the evaluation of evidence and credibility, consistent with the C3 Framework and common state social studies standards; connects the full arc of the module for the summative CER. These are sample thematic alignment categories offered for teacher reference only, not official standard codes; map them to your own state or district standards before use."
      ],
      "studentReading": {
        "title": "Access, Broadcast, and Now Execution",
        "paragraphs": [
          "The pattern from the first two days — a technology changes who can produce, distribute, or act on information — did not stop with television. Over the last three decades it has accelerated, and it has moved through three distinct stages.",
          "First came access. The internet and the World Wide Web, opened to the public in the 1990s, put the world's libraries, records, and strangers' opinions within reach of nearly anyone with a connection. A student could now find in seconds what once required a trip to a library or an expert. The gatekeepers who had decided what got published grew weaker, and the hard problem shifted from finding information to judging it.",
          "Then came broadcast. In the late 2000s, social media and smartphones gave ordinary people not just the ability to read but the ability to publish to potentially millions, instantly and for free. This was genuinely new: for the first time in history, distribution — long the privilege of publishers and networks — belonged to everyone. But the systems that decide what spreads tend to reward whatever holds attention, which is often what is surprising, outrageous, or emotionally charged rather than what is accurate. People increasingly sorted into like-minded groups; researchers debate how strong these 'echo chambers' really are, but few doubt that online life can harden division.",
          "Now a third stage is emerging: execution. Artificial intelligence tools can generate essays, images, and working computer code, and newer 'agents' can begin to carry out multi-step tasks on a person's behalf. If the internet gave people access and social media gave them a megaphone, these tools begin to give ordinary people the power to construct and act — to build and do things that used to require years of specialized training.",
          "This is powerful and genuinely useful, but it carries a specific risk worth naming plainly. AI systems can be confidently wrong: they can produce fluent, professional-sounding answers — including invented facts and citations to sources that do not exist — that look completely trustworthy. In the access and broadcast stages, a mistake mostly spread bad information. In the execution stage, a tool can act on a mistake — send the message, ship the flawed code, make the change — faster than a person can check it. More power without more judgment does not cancel out; it multiplies whatever judgment is already there.",
          "None of this means the technology is magic or a catastrophe. Like the press, the telegraph, and the broadcast tower before it, AI is a tool that amplifies whatever it is given. The enduring human job — the one this whole unit is about — is judgment: knowing how to ask, how to check, when to trust, and when to slow down. That skill does not become less important as tools grow more powerful. It becomes the whole game."
        ]
      },
      "discussionPrompts": [
        "The reading describes three stages: access, broadcast, and execution. Which stage do you think has changed everyday life the most, and why?",
        "Systems that decide what spreads online tend to reward attention. How is that similar to, and different from, yellow journalism in the 1890s?",
        "Researchers disagree about how strong 'echo chambers' really are. Why should we be careful about any claim that is easy to believe because it matches what we already think — including that one?",
        "What is the difference between a tool that spreads a mistake and a tool that acts on a mistake? Give an example of each.",
        "If AI makes it easy to produce professional-looking work, which human skills become more valuable, not less?"
      ],
      "mediaAnalysis": {
        "title": "Fact-Checking a Confident Machine",
        "focus": "Verification, provenance, and judgment in the execution age.",
        "instructions": "Your teacher will give you a short AI-generated passage on a factual topic (or, with permission, generate one in class). At least one part of it will be plausible but wrong — a made-up statistic, a misattributed quotation, or a citation to a source that does not exist. Working in pairs, treat the passage the way a careful editor would. Do not assume it is correct just because it reads smoothly. Try to verify each factual claim against a reliable, independent source, and label every claim as verified, unverified, or false.",
        "questions": [
          "Which specific claims could you confirm with an independent source, and which could you not?",
          "Did the false claim look any less trustworthy than the true ones? What made it convincing?",
          "Where did the passage say its information came from — and could you actually find that source?",
          "Imagine an AI agent had acted on this passage automatically — sent it, published it, or used it in code. What would have gone wrong, and at what point should a human have checked?",
          "Write one rule for yourself about when it is, and is not, safe to trust an AI-generated answer without checking it."
        ]
      },
      "cerTask": {
        "prompt": "'More power without judgment can make people confidently wrong at scale.' Using the three-stage pattern of access, broadcast, and execution, write a claim-evidence-reasoning response evaluating whether today's information tools strengthen democracy, destabilize society, or both.",
        "guidance": "State a specific Claim rather than a vague 'both.' Draw Evidence from all three days where you can — for example, the printing press widening access, mass media concentrating persuasion, and AI adding execution power — plus what you found in the fact-checking activity. Your Reasoning should connect each example to the driving question and should honestly weigh a counterexample, such as the many ways these tools also inform, connect, and empower people. Keep the focus on how the technology changes who can produce, distribute, or act on information, not on any particular political side."
      },
      "reflection": "Where in your own life do you already use a tool that can act, not just inform? Describe one habit you could adopt so that your judgment keeps pace with the power the tool gives you."
    }
  ],
  "discussionNorms": [
    "Criticize ideas, not people. Take on the strongest version of a classmate's argument, not a caricature of it.",
    "Come with evidence. Back a claim with something others could check — a reading, a source, an observation — not just how strongly you feel it.",
    "Assume good faith. Treat classmates as reasoning honestly, even when you disagree sharply.",
    "Separate the person from the position. You can reject an argument and still respect the person making it.",
    "Listen to understand before you respond. Be able to restate another view fairly before you argue against it.",
    "Stay open to changing your mind. Updating a view in light of better evidence is a sign of strength, not a defeat.",
    "Distinguish facts from values. Notice when a disagreement is about what is true versus what we should do about it.",
    "Make room for everyone. Invite quieter voices in, and do not let the loudest or fastest speakers dominate.",
    "Disagree about ideas, not identities. Keep debate away from anyone's personal characteristics or group membership.",
    "It is okay to say 'I'm not sure.' Honest questions and uncertainty are part of good thinking, not weaknesses to hide."
  ]
};

export const informationRevolutions: InformationRevolutions = data;
