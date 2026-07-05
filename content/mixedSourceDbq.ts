import type { MixedSourceDbq } from "./types";

/* Static sample content — authored and adversarially fact-checked (1860 census figures verified). */

const data = {
  "title": "Mixed-Source DBQ: Did the Seceding States Act Mainly to Protect Slavery?",
  "drivingQuestion": "Did the states that seceded in 1860-1861 act mainly to protect slavery — and how do three different kinds of evidence (a text, a data table, and a visual) each answer that question?",
  "overview": "This is a Mixed-Source DBQ: one question, triangulated across three genuinely different KINDS of public-domain evidence. Students run the SAME civic-judgment move — not \"is it biased?\" but \"what does the framing DO?\" — three times over: on the wording of a seceding state's declaration (TEXT), on the categories of the 1860 federal census (DATA), and on the shading of the 1861 U.S. Coast Survey slave-population map (VISUAL). The design makes one disciplinary point unforgettable: reading what a source frames, counts, or omits is the same skill whether the source is a sentence, a column, or a color. Students apply the Bias Consequence Ladder across all three sources, test whether the three types corroborate one another (and whether they are truly independent), and write an evidence-accountable judgment. Consistent with the Causes-of-the-Civil-War unit, the slavery-centrality of secession is treated as settled scholarship that students VERIFY from primary evidence, not a slogan to assert. The product does not embed the image; the teacher provides or projects it and students analyze the description and reading cues supplied here.",
  "textSource": {
    "title": "A Declaration of the Immediate Causes which Induce and Justify the Secession of the State of Mississippi (January 1861)",
    "excerpt": "Our position is thoroughly identified with the institution of slavery — the greatest material interest of the world. Its labor supplies the product which constitutes by far the largest and most important portions of commerce of the earth. ... These products have become necessities of the world, and a blow at slavery is a blow at commerce and civilization.",
    "attribution": "A Declaration of the Immediate Causes which Induce and Justify the Secession of the State of Mississippi from the Federal Union, adopted by Mississippi's secession convention, January 1861. Public domain.",
    "contextNote": "Mississippi was the second state to secede. Its convention issued this document to justify the act to the world, and it names slavery in its very first substantive sentence, then lists grievances almost all tied to threats to slavery. 'Institution' is the period euphemism for slavery; 'material interest' means economic value. The sourcing move matters here: because the seceders were defending their OWN cause, they had every incentive to name the most respectable motive available — and the motive they named, plainly, was slavery. Later passages state racial claims as period 'science'; we quote the document to analyze what its authors asserted, not to endorse it."
  },
  "dataSource": {
    "title": "Enslaved Population in Six Seceding States, 1860",
    "caption": "For six states that seceded in 1860-1861: total population, enslaved population, and enslaved people as a share of the total — from the federal count taken months before secession. States are listed from the highest enslaved share to the lowest.",
    "columns": [
      "State",
      "Total population (1860)",
      "Enslaved population (1860)",
      "Enslaved as % of total population"
    ],
    "rows": [
      [
        "South Carolina",
        "703,708",
        "402,406",
        "57.2%"
      ],
      [
        "Mississippi",
        "791,305",
        "436,631",
        "55.2%"
      ],
      [
        "Louisiana",
        "708,002",
        "331,726",
        "46.9%"
      ],
      [
        "Alabama",
        "964,201",
        "435,080",
        "45.1%"
      ],
      [
        "Georgia",
        "1,057,286",
        "462,198",
        "43.7%"
      ],
      [
        "Virginia",
        "1,596,318",
        "490,865",
        "30.8%"
      ]
    ],
    "attribution": "Eighth U.S. Census, 1860 (Population of the United States in 1860, U.S. Census Office, 1864). Public domain. Percentages computed from the enslaved and total population columns.",
    "contextNote": "These counts were taken in 1860, months before secession. Two things the numbers do not say out loud. First, the census recorded enslaved people on a separate 'Slave Schedule' that listed them by age, sex, and color under an owner's name but usually WITHOUT their own names — counted as property, not as persons with identities. Second, these same counts carried political and economic weight: under the three-fifths clause they inflated the white South's representation in Congress and the Electoral College, and enslaved people were the single largest category of wealth in these states, valued above all the region's banks, railroads, and factories combined. The table shows the states with the most to lose from any threat to slavery.",
    "readingQuestions": [
      "What is counted here, and what is NOT? The table counts bodies and a percentage. What does the category 'enslaved population' leave out about the 436,631 human beings in the Mississippi row — their names, families, resistance, testimony?",
      "Who did the counting, and for what purposes? The federal government took this census, but the same numbers were used to apportion political power (the three-fifths clause) and to tax. How might the PURPOSE of a count shape which categories a government decides to create?",
      "What does the '% enslaved' column DO that the raw totals do not? Cover that column and read only total population — does the pattern still jump out? What does converting people into a percentage make visible, and what does it flatten?",
      "The rows are sorted from highest enslaved share to lowest. South Carolina, at the top, seceded first, and the order of secession roughly tracks this column. Is that ordering a neutral fact or a framing choice — and what argument does the sort itself quietly make?",
      "A category is a decision. The 1860 census used 'free' and 'slave,' and for race 'white,' 'black,' and 'mulatto.' Who benefits when a government's official form treats 'slave' as a routine column heading — and what does normalizing that category DO to how people think?"
    ]
  },
  "imageSource": {
    "title": "Map Showing the Distribution of the Slave Population of the Southern States (U.S. Coast Survey, 1861)",
    "description": "A genuine 1861 choropleth (statistical) map — one of the first American maps to shade geography by a social statistic. The U.S. Coast Survey took the county-level enslaved-population figures from the SAME 1860 census and shaded each county by the percentage of its people who were enslaved: the darker the county, the higher the enslaved share. A printed key at the bottom gives the gradations (from under 10 percent up to over 80 percent), and the margins carry statistical tables. A note records that the map was sold to raise money for sick and wounded soldiers of the U.S. (Union) Army. The result turns a column of numbers into a picture of where slavery was concentrated. President Lincoln is documented to have consulted this map during the war, and it appears in Francis Bicknell Carpenter's painting of the first reading of the Emancipation Proclamation.",
    "whatToLookFor": [
      "Shading = density: darker means a higher percentage of that county's population was enslaved. The legend is the map's 'category' — find it first and notice how it converts people into a shade of ink.",
      "Find the darkest counties and name the state. The heaviest shading clusters in the lower Mississippi River valley, the South Carolina and Georgia coastal lowcountry, and the Alabama–Mississippi 'Black Belt.'",
      "Trace the Mississippi River corridor: a dark ribbon of high-density counties follows the river — geography that the state-level table completely hides.",
      "Compare light to dark WITHIN a single state: the mountainous northwest of Virginia is pale while the tidewater is dark — a split that helps explain why West Virginia broke away from Virginia in 1863.",
      "Ask what the map CANNOT show: individual people, their names, the conditions of bondage, or acts of resistance. A choropleth counts and locates; it cannot testify."
    ],
    "attribution": "Map Showing the Distribution of the Slave Population of the Southern States of the United States, Compiled from the Census of 1860. U.S. Coast Survey (Superintendent A. D. Bache); drawn by E. Hergesheimer; engraved by Th. Leonhardt. Washington, September 1861. Public domain (U.S. federal government work).",
    "archiveHint": "Library of Congress, Geography and Map Division (digitized and freely downloadable; search the Library of Congress by the full title above). Copies are also held by the National Archives and other repositories.",
    "contextNote": "Crucial for corroboration: this map is NOT independent of the census table — it is drawn FROM the same 1860 count, so it is one source displayed two ways. Its power is not new data but new framing: it makes visible a geographic pattern (density along the river and the coast) that a state-by-state table cannot show, and it does so from a Union-government vantage in wartime, which is itself a perspective to name. Teachers provide or project the map; this product describes it rather than embedding it. The word 'slave' in the period title is the makers' own category, reproduced for accuracy, not an endorsement."
  },
  "ladderQuestions": [
    "Rung 1 — Name the claim in each source. TEXT: in one sentence, what does Mississippi's declaration assert secession was FOR? DATA: what claim does the census make just by placing an 'enslaved population' column beside 'total population' — what does it assert is worth counting? VISUAL: what does the Coast Survey map assert by shading some counties dark and others pale? A table and a map make claims too, even without a thesis sentence.",
    "Rungs 2-3 — Identify who made each and with what interest, WITHOUT using 'biased' as a verdict. TEXT: a secession convention justifying itself to the world. DATA: the federal Census Office, which recorded enslaved people as both persons and taxable property. VISUAL: the U.S. Coast Survey in 1861 — a Union agency in wartime — which sold the map to aid sick and wounded Union soldiers. Name each perspective honestly.",
    "Rung 4 — What does each push to the front (make visible)? TEXT: which words does Mississippi repeat and spotlight ('slavery,' 'institution,' 'commerce,' 'material interest')? DATA: what does the '% enslaved' column force you to see that a raw head-count would not? VISUAL: what does county-by-county shading reveal that a single state-level number hides — namely WHERE slavery was densest?",
    "Rung 5 — What does each hide, omit, or minimize? TEXT: whose voices are absent from a slaveholders' declaration? DATA: what do the census categories erase behind the number 402,406 — names, families, resistance, humanity? VISUAL: what can a choropleth NOT show — an individual enslaved person, the conditions of bondage, or their own testimony?",
    "Rungs 6-7 — Who benefits and who is harmed by each framing? For the declaration, the census category, and the map alike: whose power, property, or political advantage is protected by the way each one names, counts, or shades — and who is rendered as a statistic, a unit of labor, or a tone of ink rather than as a person?",
    "Rung 8 — What follows if people act on each? TEXT: what does a state DO after declaring slavery its 'greatest material interest'? DATA: how were these very counts USED — for three-fifths apportionment of political power and for taxation? VISUAL: Lincoln reportedly studied this map to see where slavery, and Confederate resource strength, was concentrated — what military or political action does a density map enable?",
    "Rung 9 — Do the three agree, and are they independent? The map is drawn FROM the 1860 census, so map and table share a source and cannot count as two independent confirmations. The declaration is independent of both. Where the darkest counties on the map and the highest percentages in the table line up with the states that seceded first and wrote the most slavery-centered declarations — what KIND of agreement is that, and how much weight does it carry?",
    "Rung 10 — Make a judgment accountable to evidence. Answer the driving question in one sentence, citing at least one source of EACH type (text, data, visual), and state the specific evidence that would change your mind. Remember the course principle: you do not have to be neutral, but you do have to be accountable to evidence."
  ],
  "corroborationTask": "Build a three-row corroboration chart — one row per source TYPE (text / data / visual). For each, record: (a) its answer to the driving question, (b) who made it and why, and (c) how independent it is from the other two. Then answer two questions in writing. FIRST: do the three types AGREE that protecting slavery was central to secession? They converge — Mississippi names slavery outright as its 'greatest material interest'; the census shows enslaved people were 30.8 to 57.2 percent of these states' populations and their single largest form of wealth; the map shows that density concentrated exactly where secession was fiercest and earliest. SECOND, the harder question: which agreement actually COUNTS as corroboration? Because the Coast Survey map was compiled FROM the 1860 census, the map and the table are not two independent witnesses — they are one source shown two ways, so their agreement is guaranteed rather than confirming. The declaration is the genuinely independent witness, and it is a hostile-to-comfort one: the seceders themselves, with every incentive to name a nobler cause, named slavery. State which source survives the toughest scrutiny and why — the self-incriminating text, corroborated BY (not merely echoed by) the quantitative record and its map.",
  "exitTicket": "In two or three sentences: the same judgment move — what does the framing make visible, what does it hide, and what does it DO? — worked on a statute's wording, a census table's categories, and a map's shading. Pick the ONE source type you found hardest to 'read' and explain what it framed, counted, or omitted that you would have missed if you had only read the text. End with your one-sentence answer to the driving question and the single piece of evidence that most supports it.",
  "teacherNote": "Keep the stance evidentiary, not political. The slavery-centrality of secession is settled scholarship, and this DBQ is built so students VERIFY it from three different kinds of evidence rather than accept it as a slogan — the seceders' own words, the federal government's own count, and a Union agency's own map. Anchor every claim to a document, a column, or a county. Two accuracy safeguards protect your credibility. (1) The map is derived from the 1860 census, so present map-and-table as one source seen two ways, not as two independent proofs; the genuinely independent corroboration comes from the declaration. Teaching this distinction is itself the higher-order skill. (2) Period categories are not neutral: the census counted human beings under the column 'slave' and used those counts for three-fifths apportionment and taxation, and the map converts people into shades of ink. Name that dehumanization explicitly — analyzing a category is not endorsing it. Handle the declaration's harsh language with the unit's posted norm: we study what people said and why; quoting a source is not endorsing it; we critique ideas, not classmates. Consider projecting the harshest passages rather than assigning them to be read aloud, and never ask a student to read dehumanizing language about their own group. Redirect present-day tangents back to the sources ('what in the evidence supports that?'). The payoff is a transferable method, not a verdict on any current controversy.",
  "rubricNote": "This DBQ loads the Traveling Judgment Rubric's 'Emphasis & Omission' dimension (Bias Consequence Ladder rungs 4-5) — the ability to read what a NON-TEXT source frames, counts, or omits. The point of the mixed-source design is that this dimension is scored identically whether the evidence is words, numbers, or an image: a Proficient student explains both what a source makes visible and what it hides; an Exemplary student does this for a TABLE (what the '% enslaved' column foregrounds and what the categories erase) and a MAP (what county shading reveals about geography and what a choropleth cannot show) as fluently as for a paragraph of prose. The DBQ also loads 'Sourcing & Interest' (rungs 2-3 — naming the Census Office's and the Coast Survey's vantage without treating 'biased' as a verdict) and 'Evidence Accountability' (rungs 9-10) — the latter specifically on whether the student recognizes that the map and census SHARE a source and therefore weights the independent declaration accordingly. As always, the rubric scores the accountability of the reasoning, never the student's stance: two students who disagree can both earn top marks."
};

export const mixedSourceDbq: MixedSourceDbq = data;
