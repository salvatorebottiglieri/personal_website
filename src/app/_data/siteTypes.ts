export type Lang = "en" | "it";
export type StatusKey = "production" | "open-source" | "prototype";

export interface FlowStep {
  label: string;
  sub: string;
}

export interface FlowBranch {
  label: string;
  sub: string;
}

export interface ProjectResult {
  label: string;
  value: string;
  note?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectContent {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  statusKey: StatusKey;
  status: string;
  layer: string;
  outcome: string;
  decision: string;
  stack: string[];
  summary: string;
  context: string;
  problem: string;
  constraints: string[];
  approach: { title: string; body: string }[];
  built: string[];
  results: ProjectResult[];
  consequence: string;
  change: string;
  reflection: string;
  flow: {
    steps: FlowStep[];
    branches?: FlowBranch[];
    accentIndex?: number;
  };
  heroMetrics: { value: string; label: string }[];
  links?: ProjectLink[];
}

export interface ProfileContent {
  name: string;
  role: string;
  location: string;
  remote: string;
  email: string;
  linkedin: string;
  github: string;
  cv: string;
  headline: string;
  intro: string;
  availability: string;
  about: string[];
  principles: { title: string; body: string }[];
  facts: [string, string][];
  education: {
    degree: string;
    school: string;
    year: string;
    focus: string;
  };
}

export interface UIStrings {
  nav: {
    systems: string;
    experience: string;
    lab: string;
    contact: string;
  };
  header: {
    role: string;
    start: string;
    contact: string;
  };
  hero: {
    selectedSystem: string;
    seeSystems: string;
    downloadCv: string;
    readLog: string;
  };
  register: {
    title: string;
    meta: string;
    system: string;
    layer: string;
    status: string;
    metric: string;
    year: string;
    readLog: string;
    note: string;
  };
  what: {
    title: string;
    meta: string;
    intro: string;
    area: string;
    build: string;
    tools: string;
  };
  experience: {
    title: string;
    meta: string;
    education: string;
  };
  publications: {
    title: string;
    meta: string;
  };
  about: {
    title: string;
    meta: string;
  };
  lab: {
    title: string;
    meta: string;
    console: string;
    contact: string;
    note: string;
  };
  contact: {
    label: string;
    title: string;
    body: string;
    email: string;
    cv: string;
  };
  footer: {
    rights: string;
    note: string;
    language: string;
  };
  caseStudy: {
    decisionLog: string;
    selectedSystems: string;
    role: string;
    year: string;
    layer: string;
    outcome: string;
    figure: string;
    contents: string;
    stack: string;
    links: string;
    talk: string;
    context: string;
    constraint: string;
    decision: string;
    evidence: string;
    consequence: string;
    change: string;
    reflection: string;
    nextSystem: string;
    readLog: string;
    evidenceNote: string;
    decisionN: string;
  };
}

export interface SiteContent {
  lang: Lang;
  profile: ProfileContent;
  projects: ProjectContent[];
  experience: { period: string; role: string; company: string; description: string }[];
  matrix: { area: string; what: string; artifacts: string; tools: string }[];
  lab: { title: string; label: string; description: string }[];
  publications: { title: string; venue: string; year: string }[];
  ui: UIStrings;
}
