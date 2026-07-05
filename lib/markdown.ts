/* Plain-text / markdown builders used by the Copy & Download demo actions.
   Everything runs client-side; these just serialize static content. */

import type {
  ReconstructionUnit,
  InformationRevolutions,
  StudentPacket,
  TeacherDashboard,
  Rubric,
} from "@/content/types";

function rule(title: string) {
  return `\n\n## ${title}\n`;
}

function sourceBlock(s: { title: string; excerpt: string; attribution: string; contextNote?: string; task?: string }) {
  let out = `**Source: ${s.title}**\n> ${s.excerpt}\n— ${s.attribution}`;
  if (s.contextNote) out += `\n_Context: ${s.contextNote}_`;
  if (s.task) out += `\nAnalyze: ${s.task}`;
  return out;
}

export function reconstructionToMarkdown(u: ReconstructionUnit): string {
  const lines: string[] = [];
  lines.push(`# ${u.title}`);
  lines.push(`_${u.course} · Grade band ${u.gradeBand} · Main version ${u.mainVersion}_`);
  lines.push(`\n**Driving question:** ${u.drivingQuestion}`);
  lines.push(rule("Unit overview").trim());
  lines.push(u.overview);
  lines.push(rule("Essential questions").trim());
  u.essentialQuestions.forEach((q) => lines.push(`- ${q}`));
  lines.push(rule("Learning objectives").trim());
  u.objectives.forEach((o) => lines.push(`- ${o}`));
  lines.push(rule("Sample alignment categories").trim());
  u.alignmentCategories.forEach((a) => lines.push(`- ${a}`));
  lines.push(
    "\n_Note: alignment shown as sample thematic categories, not standard codes. Verify exact codes against the current Alabama Course of Study before classroom use._"
  );
  lines.push(rule("Five-day sequence").trim());
  u.days.forEach((d) => {
    lines.push(`\n### Day ${d.day}: ${d.title}`);
    lines.push(`**Objective:** ${d.objective}`);
    lines.push(`**Bell ringer:** ${d.bellRinger}`);
    lines.push(`**Mini-lesson:** ${d.miniLesson}`);
    lines.push(sourceBlock(d.sourceActivity));
    lines.push(`**Discussion:** ${d.discussionQuestion}`);
    lines.push(`**Student task:** ${d.studentTask}`);
    lines.push(`**Exit ticket:** ${d.exitTicket}`);
  });
  lines.push(rule("DBQ-style prompt").trim());
  lines.push(u.dbq.prompt);
  lines.push(`\n${u.dbq.guidance}`);
  u.dbq.documents.forEach((doc) => lines.push(`\n${sourceBlock(doc)}`));
  return lines.join("\n");
}

export function packetToMarkdown(p: StudentPacket, rubric?: Rubric): string {
  const lines: string[] = [];
  lines.push(`# Student Packet — Reconstruction and the Meaning of Citizenship`);
  lines.push(`\n${p.intro}`);
  lines.push(rule("Vocabulary").trim());
  p.vocabulary.forEach((v) => lines.push(`- **${v.term}** — ${v.definition}`));
  lines.push(rule(p.backgroundReading.title).trim());
  p.backgroundReading.paragraphs.forEach((para) => lines.push(`\n${para}`));
  lines.push(rule("Source analysis worksheet").trim());
  lines.push(sourceBlock(p.sourceWorksheet.source));
  p.sourceWorksheet.questions.forEach((q, i) => lines.push(`${i + 1}. ${q}`));
  lines.push(rule("Claim–Evidence–Reasoning organizer").trim());
  lines.push(`**Prompt:** ${p.cerOrganizer.prompt}`);
  lines.push(`- **Claim:** ${p.cerOrganizer.claimGuidance}`);
  lines.push(`- **Evidence:** ${p.cerOrganizer.evidenceGuidance}`);
  lines.push(`- **Reasoning:** ${p.cerOrganizer.reasoningGuidance}`);
  lines.push(rule("Exit tickets").trim());
  p.exitTickets.forEach((e) => lines.push(`- ${e}`));
  lines.push(rule("DBQ-style writing prompt").trim());
  lines.push(p.dbqPrompt);
  if (rubric) {
    lines.push(rule("Scoring rubric").trim());
    lines.push(`Levels: ${rubric.levels.join(" · ")}`);
    rubric.criteria.forEach((c) => lines.push(`- **${c.name}**`));
  }
  return lines.join("\n");
}

export function dashboardToMarkdown(d: TeacherDashboard): string {
  const lines: string[] = [];
  lines.push(`# Teacher Dashboard — ${d.focusDay}`);
  lines.push(`\n**Today's objective:** ${d.todaysObjective}`);
  lines.push(`**Essential question:** ${d.essentialQuestion}`);
  lines.push(`\n${sourceBlock(d.sourceOfTheDay)}`);
  lines.push(rule("Key vocabulary").trim());
  d.keyVocabulary.forEach((v) => lines.push(`- **${v.term}** — ${v.definition}`));
  lines.push(rule("Misconceptions to watch").trim());
  d.misconceptions.forEach((m) => lines.push(`- ${m}`));
  lines.push(rule("Discussion protocol").trim());
  lines.push(d.discussionProtocol);
  lines.push(rule("Differentiation supports").trim());
  d.differentiationSupports.forEach((s) => lines.push(`- ${s}`));
  lines.push(rule("Exit ticket").trim());
  lines.push(d.exitTicket);
  lines.push(rule("Tomorrow's bridge").trim());
  lines.push(d.tomorrowsBridge);
  return lines.join("\n");
}

export function infoRevToMarkdown(m: InformationRevolutions): string {
  const lines: string[] = [];
  lines.push(`# ${m.title}`);
  lines.push(`\n**Driving question:** ${m.drivingQuestion}`);
  lines.push(`\n**Core idea:** ${m.coreIdea}`);
  lines.push(rule("Overview").trim());
  lines.push(m.overview);
  m.days.forEach((d) => {
    lines.push(`\n### Day ${d.day}: ${d.title}`);
    lines.push(`**Reading — ${d.studentReading.title}**`);
    d.studentReading.paragraphs.forEach((para) => lines.push(`\n${para}`));
    lines.push(`\n**Discussion prompts:**`);
    d.discussionPrompts.forEach((p) => lines.push(`- ${p}`));
    lines.push(`\n**Media analysis — ${d.mediaAnalysis.title}:** ${d.mediaAnalysis.instructions}`);
    lines.push(`\n**CER task:** ${d.cerTask.prompt}`);
    lines.push(`\n**Reflection:** ${d.reflection}`);
  });
  return lines.join("\n");
}
