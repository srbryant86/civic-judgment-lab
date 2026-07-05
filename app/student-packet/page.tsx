import type { Metadata } from "next";
import { reconstruction } from "@/content/reconstruction";
import { PageHero, Section, Callout } from "@/components/ui";
import { SourceCard, VocabList } from "@/components/content";
import ActionBar from "@/components/ActionBar";
import { packetToMarkdown } from "@/lib/markdown";

const p = reconstruction.studentPacket;
const rubric = reconstruction.rubric;

export const metadata: Metadata = {
  title: "Student Packet",
  description: "A print-friendly student packet: vocabulary, background reading, source worksheet, CER organizer, exit tickets, and DBQ prompt.",
};

export default function StudentPacketPage() {
  return (
    <>
      <PageHero
        eyebrow="History Judgment Lab · Student Packet"
        title="Reconstruction & the Meaning of Citizenship"
        lead="A print-ready packet formatted for a single class period. Use Print / Save as PDF for a clean handout."
      />

      <Section>
        <ActionBar text={packetToMarkdown(p, rubric)} downloadName="student-packet-reconstruction" />

        <div className="prose">
          <p className="lead">{p.intro}</p>
        </div>

        <h3 style={{ marginTop: "1.5rem" }}>Vocabulary</h3>
        <VocabList items={p.vocabulary} />

        <h3 className="print-break" style={{ marginTop: "2rem" }}>
          {p.backgroundReading.title}
        </h3>
        <div className="card card--pad-lg">
          <div className="card__body prose">
            {p.backgroundReading.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <h3 className="print-break" style={{ marginTop: "2rem" }}>
          Source analysis worksheet
        </h3>
        <SourceCard source={p.sourceWorksheet.source} label="Primary Source" />
        <ol className="stack" style={{ marginTop: "1rem" }}>
          {p.sourceWorksheet.questions.map((q, i) => (
            <li key={i} style={{ marginBottom: "0.6rem" }}>
              {q}
              <div
                aria-hidden
                style={{
                  borderBottom: "1px solid var(--line)",
                  height: "1.4rem",
                  marginTop: "0.35rem",
                }}
              />
            </li>
          ))}
        </ol>

        <h3 className="print-break" style={{ marginTop: "2rem" }}>
          Claim – Evidence – Reasoning organizer
        </h3>
        <Callout variant="info" title="Prompt">
          <p style={{ marginBottom: 0 }}>{p.cerOrganizer.prompt}</p>
        </Callout>
        <div className="card-grid" style={{ marginTop: "1rem" }}>
          <div className="card">
            <div className="card__eyebrow">Claim</div>
            <p className="card__body">{p.cerOrganizer.claimGuidance}</p>
          </div>
          <div className="card">
            <div className="card__eyebrow">Evidence</div>
            <p className="card__body">{p.cerOrganizer.evidenceGuidance}</p>
          </div>
          <div className="card">
            <div className="card__eyebrow">Reasoning</div>
            <p className="card__body">{p.cerOrganizer.reasoningGuidance}</p>
          </div>
        </div>

        <h3 style={{ marginTop: "2rem" }}>Exit tickets</h3>
        <ul>
          {p.exitTickets.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>

        <h3 className="print-break" style={{ marginTop: "2rem" }}>
          DBQ-style writing prompt
        </h3>
        <div className="card card--pad-lg">
          <p className="mb-0" style={{ fontFamily: "var(--font-serif)", fontSize: "1.08rem" }}>
            {p.dbqPrompt}
          </p>
        </div>
      </Section>
    </>
  );
}
