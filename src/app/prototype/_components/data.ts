export type ArtworkKind = "nodes" | "bars" | "grid";

export interface Project {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  outcome: string;
  stack: string[];
  summary: string;
  context: string;
  problem: string;
  constraints: string[];
  approach: { title: string; body: string }[];
  built: string[];
  results: { label: string; value: string }[];
  reflection: string;
  artwork: ArtworkKind;
}

export const projects: Project[] = [
  {
    slug: "atlas",
    index: "01",
    title: "Atlas",
    tagline: "An AI support layer that knows the business.",
    year: "2025",
    role: "Lead AI Engineer",
    outcome: "−38% time to resolution",
    stack: ["Python", "FastAPI", "pgvector", "Gemini", "Next.js"],
    summary:
      "A grounded support assistant over 40k internal documents, with citations, permission-aware retrieval, and a human handoff path.",
    context:
      "A fintech operations team was answering the same 200 questions across chat, email, and tickets. The knowledge lived in Notion, Zendesk, and three shared drives, with no single source of truth.",
    problem:
      "Generic chatbots produced confident wrong answers. Support agents needed citations, document-level permissions, and a fast escape hatch to a human.",
    constraints: [
      "PII could not leave the VPC",
      "Every answer had to cite a source",
      "p95 latency under 2.5 seconds",
      "No new headcount for maintenance",
    ],
    approach: [
      {
        title: "Ground before generating",
        body: "Hybrid retrieval over chunked documents with metadata filters for team, product, and region. Every answer carries source IDs and a confidence signal.",
      },
      {
        title: "Evaluate the failure modes",
        body: "A 300-case eval set built with support leads: answerable, ambiguous, out-of-scope, and permission-denied. The eval ran in CI on every prompt change.",
      },
      {
        title: "Design the handoff",
        body: "The assistant opens a ticket with the full conversation and a suggested reply, so a human never starts from zero.",
      },
    ],
    built: [
      "Incremental ingestion pipeline with document-level ACLs",
      "Streaming chat API with citation rendering",
      "Eval harness wired into CI",
      "Admin console for knowledge gaps and stale documents",
    ],
    results: [
      { label: "Time to resolution", value: "−38%" },
      { label: "Answer coverage", value: "81%" },
      { label: "Grounded answers", value: "96%" },
      { label: "p95 latency", value: "2.1s" },
    ],
    reflection:
      "The model was the easy part. The product was permissions, citations, and the moment the assistant decides to stop talking.",
    artwork: "nodes",
  },
  {
    slug: "signal",
    index: "02",
    title: "Signal",
    tagline: "Real-time risk scoring for a logistics network.",
    year: "2024",
    role: "ML Engineer",
    outcome: "12ms p95",
    stack: ["Kafka", "PyTorch", "Kubernetes", "GCP", "BigQuery"],
    summary:
      "A low-latency scoring service for delivery risk, with feature freshness guarantees and shadow deployments.",
    context:
      "A logistics platform needed to flag delayed shipments before they became customer-facing failures. Batch scoring was six hours stale.",
    problem:
      "The business needed a decision at the moment an event arrived, without taking the network down to roll out a new model.",
    constraints: [
      "4M events per day",
      "p95 latency under 20ms",
      "No downtime during model rollout",
      "Feature definitions shared with analysts",
    ],
    approach: [
      {
        title: "Make features a contract",
        body: "Streaming and batch features came from the same definitions, so training and serving could not drift apart silently.",
      },
      {
        title: "Score close to the event",
        body: "A stateless inference service consumed Kafka topics, with the feature store as the only stateful dependency.",
      },
      {
        title: "Roll out in the dark",
        body: "New models ran in shadow mode next to production, with online metrics compared before any traffic moved.",
      },
    ],
    built: [
      "Streaming feature pipeline with freshness SLOs",
      "PyTorch inference service on Kubernetes",
      "Shadow deployment and automated rollback",
      "Model monitoring dashboard for drift and latency",
    ],
    results: [
      { label: "p95 latency", value: "12ms" },
      { label: "Events per day", value: "4M" },
      { label: "Stale features", value: "0" },
      { label: "Rollout downtime", value: "0 min" },
    ],
    reflection:
      "Latency is a product requirement, not a benchmark. The feature store was the real architecture.",
    artwork: "bars",
  },
  {
    slug: "canvas",
    index: "03",
    title: "Canvas",
    tagline: "Generative UI for internal product teams.",
    year: "2025",
    role: "Founding Engineer",
    outcome: "60% faster prototypes",
    stack: ["Next.js", "TypeScript", "LLM tool calling", "Zod", "Vercel"],
    summary:
      "A constrained generative UI system: the model composes approved components, not arbitrary code.",
    context:
      "Product teams were rebuilding the same dashboards for every customer demo. Designers wanted to explore layouts without waiting for an engineering sprint.",
    problem:
      "Free-form code generation was impressive in demos and unmaintainable in production. The system needed guardrails, not more model capability.",
    constraints: [
      "Only approved components",
      "Accessible by default",
      "No arbitrary HTML or scripts",
      "Editable by non-engineers",
    ],
    approach: [
      {
        title: "Constrain the output",
        body: "The model chose from a typed component schema validated with Zod. Invalid compositions were rejected before rendering.",
      },
      {
        title: "Treat layouts as data",
        body: "Pages were stored as component trees, so they could be edited, diffed, and versioned like any other product artifact.",
      },
      {
        title: "Design for the second edit",
        body: "The first generation was never the point. The interface made it easy to swap a section, change density, and keep the system coherent.",
      },
    ],
    built: [
      "Typed component registry with 24 approved blocks",
      "Streaming generation with schema validation",
      "Visual editor for non-engineers",
      "Regression suite for layout and accessibility",
    ],
    results: [
      { label: "Prototype time", value: "−60%" },
      { label: "Approved components", value: "24" },
      { label: "Unsafe output", value: "0" },
      { label: "Component reuse", value: "3.2×" },
    ],
    reflection:
      "The interesting constraint was not what the model could generate, but what the system would allow.",
    artwork: "grid",
  },
];

export const experience = [
  {
    period: "2024 — Now",
    role: "Software AI Engineer",
    company: "Independent / Consulting",
    description:
      "AI product engineering for fintech, logistics, and SaaS teams. Retrieval systems, evaluation, and production LLM interfaces.",
  },
  {
    period: "2021 — 2024",
    role: "ML Engineer",
    company: "Fintech scale-up",
    description:
      "Production ML for support automation and risk. Streaming inference, feature pipelines, and model rollout.",
  },
  {
    period: "2019 — 2021",
    role: "Backend Engineer",
    company: "Software house",
    description:
      "APIs, data pipelines, and the unglamorous glue that makes products work.",
  },
];

export const capabilities = [
  {
    title: "AI Applications",
    items: [
      "LLM applications",
      "Retrieval-augmented generation",
      "Agents and tool calling",
      "Structured output",
      "Evaluation and guardrails",
    ],
  },
  {
    title: "ML Systems",
    items: [
      "Real-time inference",
      "Feature pipelines",
      "Model rollout and monitoring",
      "MLOps and observability",
      "Cost and latency budgets",
    ],
  },
  {
    title: "Product Engineering",
    items: [
      "Next.js and React",
      "TypeScript",
      "Python and FastAPI",
      "Postgres and pgvector",
      "Cloud and deployment",
    ],
  },
];

export const profile = {
  name: "Salvatore Bottiglieri",
  role: "Software AI Engineer",
  location: "Italy · Remote",
  availability: "Open to senior AI engineering roles and selected consulting.",
  email: "hello@salvatorebottiglieri.com",
  linkedin: "https://www.linkedin.com/in/salvatorebottiglieri",
  github: "https://github.com/salvatorebottiglieri",
  positioning: "I build AI products that ship.",
  intro:
    "I design and engineer AI-native products: LLM applications, retrieval systems, and the backend that keeps them reliable. I care about the boring parts that make AI useful — permissions, evaluation, latency, cost, and the handoff to a human.",
  about: [
    "I'm Salvatore, a software engineer who works at the intersection of product and AI. I like small teams, clear constraints, and software that survives the demo.",
    "I've shipped retrieval systems, real-time scoring services, and generative interfaces. My default is to start with the smallest system that can be evaluated, then earn the right to make it bigger.",
  ],
  principles: [
    {
      title: "Ground the model",
      body: "Retrieval, citations, and explicit uncertainty before clever prompting.",
    },
    {
      title: "Evaluate the failure",
      body: "A demo shows what works. An eval shows what breaks.",
    },
    {
      title: "Design the handoff",
      body: "The best AI product knows when to give the problem back to a human.",
    },
  ],
};

export const lab = [
  {
    title: "Generative portfolio",
    description:
      "The experiment behind this site: a constrained UI generator that composes pages from a typed component schema.",
    label: "LLM / UI",
  },
  {
    title: "EvalKit",
    description:
      "A small harness for testing retrieval quality, answer groundedness, and prompt regressions before they reach users.",
    label: "LLM / EVALS",
  },
];
