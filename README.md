# Civic Judgment Lab

**History Judgment Lab** — a source-based history and civic-reasoning teaching system.

> **Information is everywhere. Judgment has to be taught.**

Civic Judgment Lab is a polished MVP web app that doubles as a **secondary social studies teaching portfolio** and a **product demonstration**. It shows how a serious history teacher can use modern instructional design — primary-source analysis, differentiation, civic reasoning, and responsible AI literacy — to teach students not just to *find* information, but to *judge what information does* in public life.

The flagship content is the **History Judgment Lab: Reconstruction Starter Pack**, supported by a bonus module (**From Printing Press to AI: Information, Power, and Judgment**) and a civic-judgment framework (**From Bias Detection to Civic Judgment**).

---

## What it is

A component-based [Next.js](https://nextjs.org/) (App Router) application with **no login, no database, no billing, and no live AI service**. All content is static sample data authored for the demo. It is designed to be readable, mobile-friendly, print-friendly, and administrator-safe.

### Pages

| Page | Route | Purpose |
| --- | --- | --- |
| Landing | `/` | The thesis and value, understandable in ten seconds |
| Unit Library | `/library` | The catalog — browse every unit |
| Scope & Sequence | `/scope-and-sequence` | The spine map: strands × units, documents that travel, ladder calibration, traveling rubric |
| **Units** | | *Six source-based units, all on one schema, chronological order:* |
| — Medieval Europe & Authority | `/medieval-europe` | Grades 6–9 world-history entry: who controlled knowledge; translated & sparse sources |
| — Causes of the Civil War | `/civil-war-causes` | Secession declarations vs. the Lost Cause retelling |
| — Reconstruction (flagship) | `/reconstruction` | Did legal freedom change lived reality? |
| — The Civil Rights Movement | `/civil-rights` | The "Second Reconstruction"; the amendments return as contested law |
| — Cold War Media & Power | `/cold-war-media` | State-scale persuasion + the first quantitative sources |
| — American Government | `/american-government` | Civics capstone: majority vs. dissent; the ladder on civic claims |
| — Information Revolutions | `/information-revolutions` | A three-day module from the printing press to AI |
| From Bias Detection to Civic Judgment | `/civic-judgment` | The core framework + the *Bias Consequence Ladder* + a classroom activity |
| Judgment Lab (AI age) | `/judgment-lab` | Run the ladder on AI summaries, algorithmic feeds, and your own reasoning |
| Mixed-Source DBQ | `/mixed-source-dbq` | One question across a text, a data table, and a described map — verified 1860 census data |
| Ladder Poster | `/ladder-poster` | Free printable classroom poster of the 10-step ladder |
| Administrator one-pager | `/print/[slug]` | Print-ready provenance sheet per unit (six generated) |
| Teacher Dashboard | `/dashboard` | One class period, at a glance |
| Student Packet | `/student-packet` | A print-ready student handout |
| Differentiation | `/differentiation` | UDL/MTSS supports for every learner |
| Responsible AI & Civic Judgment | `/responsible-ai` | A clear, mature account of how AI is and isn't used |
| Product Overview | `/product` | A mock sales/product page |
| Before / After | `/before-after` | Rough teacher idea → finished lesson system |
| Educator Reflection | `/reflection` | Candidate reflection for a teaching portfolio |

### The spine

The units are not a loose collection. Five **thematic strands** (evidence, power, citizenship, persuasion, technology) and one **Bias Consequence Ladder** run across every unit, so the catalog reads as a single deepening skill. `content/strands.ts` and `content/units.ts` make that structure real; the **Scope & Sequence** page renders it as a map a department chair can review, and a **Traveling Judgment Rubric** (`content/judgmentRubric.ts`) scores the *accountability of reasoning* the same way in every unit so growth is a visible delta.

---

## The problem it solves

The internet democratized **access** to information. AI is now democratizing **execution** — drafting, summarizing, and formatting are available to anyone. What remains scarce is **judgment**: deciding whether a source is trustworthy, whether an argument holds, and whether a conclusion deserves belief.

Civic Judgment Lab treats social studies as where that judgment is built. It pushes past "is this biased?" to the harder civic question — **"what does the bias do?"** — teaching students to weigh emphasis, omission, benefit, harm, and consequence. Its working principle: *you do not have to be neutral, but you do have to be accountable to evidence.*

For teachers, it solves a practical problem too: it turns a sound teaching instinct into a coherent, differentiated, standards-aware unit that is ready to run tomorrow and defensible to an administrator.

---

## Run locally

Requires **Node.js 18.18+** (developed on Node 22).

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

To build and run the production output:

```bash
npm run build
npm start
```

---

## Deploy

This is a standard Next.js app and deploys to **[Vercel](https://vercel.com/)** with zero configuration:

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel (framework preset: **Next.js**).
3. Deploy. No environment variables are required.

Alternatively, from the project root with the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

Because there is no database, auth, or external API, the app also builds to a portable Node server via `next build` / `next start`.

---

## What it demonstrates professionally

For a returning secondary history teacher or an instructional-design candidate, this project is evidence of:

- **Modern instructional design** — backward-designed units with essential questions, objectives, sequenced lessons, and aligned assessment.
- **U.S. history expertise** — an accurate, primary-source-driven Reconstruction unit (the 13th–15th Amendments, the Freedmen's Bureau, Black Codes, sharecropping, federal enforcement, and the Lost Cause).
- **Civic reasoning & source evaluation** — the Bias Consequence Ladder and CER (claim–evidence–reasoning) writing throughout.
- **AI literacy** — a sober, administrator-safe stance on what AI can and cannot do in a classroom.
- **Differentiation** — UDL/MTSS supports for striving readers, advanced students, multilingual learners, IEP/504 plans, executive-function needs, and alternate response modes, written in respectful, asset-based language.
- **Clean front-end craft** — a component-based, accessible, responsive, print-friendly interface.

---

## How it could become a paid resource library

The demo is intentionally not for sale, but the architecture points at a straightforward product:

- **Packs as the unit of value.** Each unit (Reconstruction, Civil War Causes, Civil Rights Movement, Cold War Media and Power, Information Revolutions, and more) is a purchasable, printable pack.
- **Tiered licensing.** Single-teacher, building, and district licenses.
- **Downloadable + web preview.** The "Copy" and "Download" actions in this demo stand in for real packet exports (PDF/print). A production version would gate full downloads behind a license while keeping rich web previews.
- **Subscription library.** A seasonal cadence of new packs plus differentiation add-ons supports a recurring-revenue model for departments and homeschool co-ops.

None of this requires changing the core content model — the sample data files in `content/` are already the shape a catalog would use.

---

## Privacy & Responsible AI

- **No accounts, no database, no tracking, no student data.** Nothing is collected or stored.
- **No live AI at runtime.** The app ships static, human-reviewed content.
- **AI as an assistant, not an authority.** Where AI assists lesson drafting, outputs are checked against reliable sources before use; AI does not decide what is true.
- **Never enter private student data into public AI systems.** Keep anything covered by student-privacy law inside district-vetted tools.
- See the in-app **[Responsible AI & Civic Judgment](/responsible-ai)** page for the full statement, including how bias, social media, and AI interact — *AI does not remove the need for judgment; it raises the cost of not having it.*

> **A note on standards:** Alignment is shown as **sample thematic categories**, not standard codes. Verify exact standard numbers against the current **Alabama Course of Study** (and your state/district framework) before classroom use.

---

## Future roadmap

**Built:** six source-based units (Medieval Europe, Civil War Causes, Reconstruction, Civil Rights, Cold War Media, American Government) plus the Information Revolutions module; the five-strand spine; the Bias Consequence Ladder as a reusable, grade-calibrated instrument; the Scope & Sequence map; the Traveling Judgment Rubric; the Unit Library catalog; the AI-age Judgment Lab; the **Mixed-Source DBQ** (text + data + described image, with verified 1860 census figures); richer `Source` types (`text` / `data` / `image` / `map`) with a data-table renderer; a **Full / Modified / EL leveling toggle** on every unit; a printable **administrator one-pager** per unit (with source provenance); and a free, printable **Bias Consequence Ladder poster**.

**Requires infrastructure that is out of scope for this demo** (which is intentionally no-login / no-database / no-billing):
- **AI-Summary Audit as a *graded, longitudinal* task** — the activity ships in the Judgment Lab; persisting scores across a term for a growth profile needs a datastore.
- **Accounts, gated downloads, billing, and LMS (Google Classroom / Canvas) integration** — validate willingness-to-pay with one-off pack sales first.
- **Embedded (not just described) public-domain images** — needs assets sourced and licensed; the `image` source type and the described-source pattern are the hooks.
- **Standards-mapping** that lets a teacher attach *verified* local codes (teacher-authored, never asserted), and privacy-preserving classroom tools on district-approved infrastructure.

---

## Project structure

```
app/                 App Router pages (one folder per route)
components/           Reusable UI + content components
content/             Static sample data (typed) and site config
  types.ts           Shared content types
  reconstruction.ts  The flagship unit — six units share the ReconstructionUnit schema
  civilWarCauses.ts  medievalEurope.ts  civilRights.ts  coldWarMedia.ts  americanGovernment.ts
  informationRevolutions.ts
  judgmentLab.ts     AI-age Judgment Lab activities (AI-Summary Audit, Two Feeds, Run It On Yourself)
  civicJudgment.ts   Bias-to-judgment framework + the ladder
  portfolio.ts       Landing, product, reflection, responsible-AI, before/after copy
  differentiation.ts
  strands.ts         The five-strand thematic spine
  units.ts           Unit/pack registry (drives Scope & Sequence)
  judgmentRubric.ts  The traveling judgment rubric
  site.ts            Navigation + standing copy
components/UnitView.tsx           One component renders any unit on the shared schema
components/BiasConsequenceLadder.tsx  The reusable ladder + grade calibration
lib/markdown.ts      Client-side text builders for Copy/Download actions
app/globals.css      Design system (light, print-friendly)
```

---

*Built as a portfolio and product demonstration for secondary social studies. Review all generated materials for accuracy before classroom use.*
