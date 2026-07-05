/* Shared content types for Civic Judgment Lab.
   These mirror the schemas used to author the static sample content. */

export type VocabItem = { term: string; definition: string };

export type SourceType = "text" | "image" | "data" | "map";

export type DataTable = {
  caption?: string;
  columns: string[];
  rows: string[][];
};

export type Source = {
  title: string;
  excerpt: string;
  attribution: string;
  contextNote?: string;
  /** Optional richer source types (Mixed-Source DBQ). Defaults to text. */
  sourceType?: SourceType;
  dataTable?: DataTable;
  imageDescription?: string;
  archiveUrl?: string;
  alt?: string;
};

export type MixedSourceDbq = {
  title: string;
  drivingQuestion: string;
  overview: string;
  textSource: { title: string; excerpt: string; attribution: string; contextNote: string };
  dataSource: {
    title: string;
    caption: string;
    columns: string[];
    rows: string[][];
    attribution: string;
    contextNote: string;
    readingQuestions: string[];
  };
  imageSource: {
    title: string;
    description: string;
    whatToLookFor: string[];
    attribution: string;
    archiveHint: string;
    contextNote: string;
  };
  ladderQuestions: string[];
  corroborationTask: string;
  exitTicket: string;
  teacherNote: string;
  rubricNote: string;
};

export type SourceWithTask = Source & { task: string };

export type Differentiation = {
  strugglingReaders?: string;
  advanced?: string;
  englishLearners?: string;
  iepAnd504?: string;
  executiveFunction?: string;
  alternateResponse?: string;
};

export type LessonDay = {
  day: number;
  title: string;
  objective: string;
  bellRinger: string;
  miniLesson: string;
  sourceActivity: SourceWithTask;
  discussionQuestion: string;
  studentTask: string;
  exitTicket: string;
  differentiation: Differentiation;
};

export type QuizItem = {
  question: string;
  choices?: string[];
  answer: string;
  explanation: string;
};

export type Dbq = {
  prompt: string;
  guidance: string;
  documents: Source[];
};

export type Rubric = {
  levels: string[];
  criteria: { name: string; descriptors: string[] }[];
};

export type TeacherDashboard = {
  focusDay: string;
  todaysObjective: string;
  essentialQuestion: string;
  sourceOfTheDay: SourceWithTask;
  keyVocabulary: VocabItem[];
  misconceptions: string[];
  discussionProtocol: string;
  differentiationSupports: string[];
  exitTicket: string;
  tomorrowsBridge: string;
};

export type StudentPacket = {
  intro: string;
  vocabulary: VocabItem[];
  backgroundReading: { title: string; paragraphs: string[] };
  sourceWorksheet: { source: Source; questions: string[] };
  cerOrganizer: {
    prompt: string;
    claimGuidance: string;
    evidenceGuidance: string;
    reasoningGuidance: string;
  };
  exitTickets: string[];
  dbqPrompt: string;
};

export type ReconstructionUnit = {
  title: string;
  course: string;
  gradeBand: string;
  mainVersion: string;
  middleAdaptation: string;
  drivingQuestion: string;
  overview: string;
  essentialQuestions: string[];
  objectives: string[];
  vocabulary: VocabItem[];
  historicalThinkingSkills: string[];
  alignmentCategories: string[];
  teacherNotes: string[];
  days: LessonDay[];
  quiz: QuizItem[];
  dbq: Dbq;
  rubric: Rubric;
  modifiedReading: string;
  advancedExtension: string;
  subPlan: string;
  dashboard: TeacherDashboard;
  studentPacket: StudentPacket;
};

export type InfoRevDay = {
  day: number;
  title: string;
  teacherNotes: string[];
  studentReading: { title: string; paragraphs: string[] };
  discussionPrompts: string[];
  mediaAnalysis: { title: string; instructions: string; focus?: string; questions: string[] };
  cerTask: { prompt: string; guidance: string };
  reflection: string;
};

export type InformationRevolutions = {
  title: string;
  drivingQuestion: string;
  coreIdea: string;
  overview: string;
  timeline: { era: string; technology: string; whatChanged: string; tension: string }[];
  days: InfoRevDay[];
  discussionNorms: string[];
};

export type Portfolio = {
  landing: {
    mainCopy: string;
    thesisSteps: { label: string; text: string }[];
    whyItMatters: string;
    audience: string[];
    features: { title: string; text: string }[];
  };
  responsibleAI: {
    intro: string;
    points: { title: string; text: string }[];
    teacherDataNote: string;
    closing: string;
  };
  reflection: { title: string; paragraphs: string[] };
  product: {
    name: string;
    tagline: string;
    includes: string[];
    forWho: string[];
    useTomorrow: string[];
    sampleLesson: string;
    futurePacks: string[];
    pricingNote: string;
  };
  beforeAfter: {
    roughIdea: string;
    teachingBrief: string;
    lessonSequence: string[];
    sourceActivity: string;
    differentiatedSupports: string[];
    assessment: string;
    packetNote: string;
    closingValue: string;
  };
};

export type DifferentiationSupport = {
  audience: string;
  principle: string;
  strategies: string[];
  classroomExample: string;
};

export type DifferentiationContent = {
  intro: string;
  languageNote: string;
  supports: DifferentiationSupport[];
};

export type LadderStep = { step: number; title: string; prompt: string };

export type JudgmentLab = {
  intro: string;
  aiSummaryAudit: {
    title: string;
    overview: string;
    setup: string;
    steps: string[];
    sourceUsed?: string;
    exampleSummaryNote?: string;
    questions: string[];
    exitTicket: string;
    teacherNote: string;
  };
  twoFeedsLab: {
    title: string;
    overview: string;
    scenario: string;
    setup: string;
    questions: string[];
    exitTicket: string;
    teacherNote: string;
  };
  runItOnYourself: {
    title: string;
    overview: string;
    steps: string[];
    guardrail: string;
    teacherNote: string;
  };
};

export type CivicJudgment = {
  corePrinciple: string;
  principleExplanation: string;
  dangerLine: string;
  recurringQuestion: string;
  intro: string;
  inquiryQuestions: string[];
  fromDetectionToJudgment: {
    intro: string;
    points: { title: string; text: string }[];
  };
  ladder: LadderStep[];
  activity: {
    title: string;
    overview: string;
    sources: { label: string; description: string; example?: string }[];
    questions: string[];
    exitTicket: string;
    constructedResponse: string;
    teacherNote: string;
  };
  aiAndBias: {
    intro: string;
    points: { title: string; text: string }[];
    keyLine: string;
  };
  reflectionAddition: string;
};
