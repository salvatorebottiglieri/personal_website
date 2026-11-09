import type { SiteContent } from "./siteTypes";

export const en: SiteContent = {
  lang: "en",
  profile: {
    name: "Salvatore Bottiglieri",
    role: "Software AI Engineer, agent infrastructure",
    location: "Naples, Italy",
    remote: "Three years fully remote",
    email: "sasibottiglieri0@gmail.com",
    linkedin: "https://www.linkedin.com/in/salvatore-bottiglieri",
    github: "https://github.com/salvatorebottiglieri",
    cv: "/cv/salvatore-bottiglieri-cv.pdf",
    headline: "Agent infrastructure, shipped.",
    intro:
      "I build the systems agents run in: runtimes, orchestration, tool boundaries, and evaluation. Two years shipping agents in production, five years in backend and distributed systems.",
    availability:
      "Open to senior agent infrastructure and AI engineering roles. Three years fully remote.",
    about: [
      "I'm Salvatore, a software engineer in Naples. I build the systems agents run in: runtimes, orchestration, tool boundaries, and evaluation.",
      "I care about the parts that survive the demo: persistent state, typed tools, human approval, and evaluations that can fail.",
    ],
    principles: [
      {
        title: "Put the guarantees in the tools",
        body: "Boundaries, permissions, and side effects belong in code, not in a prompt.",
      },
      {
        title: "Evaluate the failure",
        body: "A demo shows what works. An eval shows what breaks.",
      },
      {
        title: "Design the handoff",
        body: "The best agent knows when to stop and give the decision back to a human.",
      },
    ],
    facts: [
      ["Based", "Naples, Italy"],
      ["Focus", "Agent infrastructure, production agents, evaluation"],
      ["Availability", "Senior roles, selected consulting"],
      ["Remote", "Three years fully remote"],
      ["Languages", "English, Italian"],
    ],
    education: {
      degree: "M.Sc. Computer Science",
      school: "Università degli Studi di Napoli Federico II",
      year: "2023",
      focus:
        "Computational complexity, advanced neural architectures, distributed database systems.",
    },
  },
  projects: [
    {
      slug: "security-agents",
      index: "01",
      title: "Security agents",
      tagline: "From scan reports to reviewed fixes.",
      year: "2026",
      role: "Software AI Engineer, Infocube",
      statusKey: "production",
      status: "In production",
      layer: "Orchestration and MCP",
      outcome: "3 agents, 2 MCP servers",
      decision: "Keep the agents thin and the MCP servers authoritative.",
      stack: [
        "Python",
        "MCP",
        "LangGraph",
        "AWS Bedrock AgentCore",
        "ECS",
        "Jira",
        "Confluence",
      ],
      summary:
        "Three agents that automate a security workflow for a global enterprise video platform: triage SAST, DAST, and SCA findings, turn reports into Jira tickets, and propose code fixes from those tickets.",
      context:
        "The security team received SAST, DAST, and SCA reports for a global enterprise video platform. Triage, ticket creation, and the first draft of a fix were manual, repetitive, and spread across Jira, Confluence, and a document review process.",
      problem:
        "The hard part was not generating text. It was keeping the workflow correct: permissions, idempotency, auditability, and a human decision before anything reached a repository.",
      constraints: [
        "No automatic merge: a person approves every ticket and every pull request.",
        "Domain logic lives in the MCP servers, not in the agent prompts.",
        "The same agents run across clouds and deployment paths.",
        "Every action must be traceable to a finding.",
      ],
      approach: [
        {
          title: "Thin agents, authoritative tools",
          body: "The Jira and Confluence MCP servers own the domain logic and the side effects. Each agent is a thin client that plans, calls typed tools, and reports evidence.",
        },
        {
          title: "One workflow, three agents",
          body: "Agent 1 triages findings against a reviewed knowledge base. Agent 2 turns OSS findings into idempotent Jira tickets. Agent 3 proposes a code fix from a ticket in a sandboxed repository.",
        },
        {
          title: "Human approval as a first-class state",
          body: "Nothing is merged automatically. The workflow stops at the reviewer with a ticket, a proposed fix, and the evidence needed to accept or reject it.",
        },
        {
          title: "Evaluate the failure modes",
          body: "A 13-case OSS matrix covered duplicate tickets, partial groups, conflicting Jira IDs, unmapped projects, and empty security risks. The matrix found a failure that blocked an entire project; the fix defaulted severity and shipped with a regression case.",
        },
      ],
      built: [
        "Three agents in production on AWS Bedrock AgentCore and ECS.",
        "Jira and Confluence MCP servers with domain logic in the server.",
        "A cloud-agnostic agent library with one deployment path.",
        "A reviewed knowledge base for false-positive triage.",
        "A concurrency rewrite of the core processing engine that halved end-to-end processing time.",
      ],
      results: [
        { label: "Agents in production", value: "3" },
        { label: "MCP servers", value: "2" },
        {
          label: "Triage evaluation",
          value: "12 TP / 2 FP / 9 Unsure",
          note: "Dry-run on a 23-finding DAST report.",
        },
        {
          label: "OSS test matrix",
          value: "13 cases",
          note: "8 tickets, idempotency, conflicts, schema preflight.",
        },
        {
          label: "Processing time",
          value: "−50%",
          note: "Concurrency rewrite of the core processing engine.",
        },
      ],
      consequence:
        "The security team reviews exceptions and proposed fixes instead of doing the first pass by hand. Tickets and pull requests arrive with the evidence behind them, and the workflow can be audited.",
      change:
        "The next step is to measure the orchestrator loop, not just the tool calls. Agent 3's v3 design is still a proposal, and the eval coverage for the M3 flow is thin.",
      reflection:
        "The model was the least interesting part. The system was permissions, idempotency, typed tool boundaries, and the moment the workflow hands the decision back to a person.",
      flow: {
        steps: [
          { label: "Findings", sub: "SAST, DAST, SCA reports" },
          { label: "Triage", sub: "Reviewed knowledge base" },
          { label: "Jira", sub: "Idempotent tickets" },
          { label: "Fix PR", sub: "Sandboxed repository" },
          { label: "Human review", sub: "Approval gate" },
        ],
        branches: [
          { label: "Jira MCP", sub: "Domain logic in the server" },
          { label: "Confluence MCP", sub: "Reviewed triage history" },
          { label: "AgentCore", sub: "Runtime and deployment" },
          { label: "ECS", sub: "Cloud-agnostic execution" },
        ],
        accentIndex: 1,
      },
      heroMetrics: [
        { value: "3", label: "agents in production" },
        { value: "2", label: "MCP servers" },
        { value: "1", label: "human approval gate" },
      ],
    },
    {
      slug: "cortex",
      index: "02",
      title: "Cortex",
      tagline: "A runtime for agents that act, not just answer.",
      year: "2026",
      role: "Creator, open source",
      statusKey: "open-source",
      status: "Open source",
      layer: "Agent runtime",
      outcome: "20 ADRs, persistent goals",
      decision: "Make goals persistent and resumable, not prompt-bound.",
      stack: ["Python", "AsyncIO", "Pydantic", "PostgreSQL", "FastAPI", "MQTT", "Docker"],
      summary:
        "A from-scratch agent harness with an explicit plan, act, verify loop, an event bus, persistent goals, a tool registry, and distributed sensor agents.",
      context:
        "Most agent projects are prompt chains with a loop around them. Cortex is the machine underneath: a runtime where the loop, the event bus, memory, tools, and sensors are separate modules with contracts.",
      problem:
        "An agent that only answers is easy to demo and hard to operate. The runtime needs bounded iterations, typed model output, resumable goals, and a way to evaluate the trajectory, not just the final answer.",
      constraints: [
        "Bounded iterations: chat ≤ 20, goals ≤ 100.",
        "Deny-by-default tools; shell and file_write are opt-in.",
        "Typed decisions; malformed model output fails loudly.",
        "The loop must be testable without a live LLM.",
      ],
      approach: [
        {
          title: "Type the model output",
          body: "The reasoner returns a typed Decision: RESPOND, EXECUTE_TOOLS, or ASK_QUESTION. Invalid output fails at the boundary instead of corrupting the loop.",
        },
        {
          title: "Persist the goal, not the chat",
          body: "Goals are stored and resumed after a restart. The runtime can enter the loop from a background goal, not only from a user turn.",
        },
        {
          title: "Decouple with an event bus",
          body: "Modules communicate through an asyncio event bus with salience filtering. Minions stream real-world events over MQTT into the same loop.",
        },
        {
          title: "Evaluate the trajectory",
          body: "A pytest-native harness grades the annotated goal state, runs a trajectory judge only on failures, and compares against a versioned baseline in CI.",
        },
      ],
      built: [
        "Explicit Think, Act, Observe, Respond loop with injected components.",
        "Persistent, resumable goals and two operating modes.",
        "Event bus with salience filtering and MQTT sensor minions.",
        "Custom eval harness: 30 loop tasks, 13 refusal tasks, pass^k, CI gate.",
        "20 architecture decision records; CI enforces mypy and a coverage gate.",
      ],
      results: [
        { label: "Architecture decisions", value: "20" },
        { label: "Loop tasks", value: "30" },
        { label: "Refusal tasks", value: "13" },
        { label: "Operating modes", value: "2" },
      ],
      consequence:
        "Cortex is a testbed for non-standard tool-calling patterns and a runtime that can be inspected, extended, and evaluated. The ADRs make the trade-offs reviewable.",
      change:
        "The MQTT minion path is not wired end to end, and the host-access allow-list is a phase-0 mitigation, not a security boundary. Both need a real threat model.",
      reflection:
        "The interesting part is not the model call. It is the state machine around it: what is persisted, what is bounded, what is typed, and what a human can inspect when it fails.",
      flow: {
        steps: [
          { label: "Goal", sub: "User turn or background goal" },
          { label: "Context", sub: "History, facts, tools" },
          { label: "Think", sub: "Typed decision" },
          { label: "Act", sub: "Sequential or parallel tools" },
          { label: "Observe", sub: "Results and errors" },
          { label: "Respond", sub: "Final answer or loop" },
        ],
        branches: [
          { label: "Event bus", sub: "Salience-filtered modules" },
          { label: "Memory", sub: "Trusted facts and learning" },
          { label: "Tool registry", sub: "Deny-by-default access" },
          { label: "Eval harness", sub: "30 loop, 13 refusal tasks" },
        ],
        accentIndex: 2,
      },
      heroMetrics: [
        { value: "20", label: "architecture decisions" },
        { value: "30", label: "loop eval tasks" },
        { value: "13", label: "refusal eval tasks" },
      ],
      links: [
        { label: "GitHub", href: "https://github.com/salvatorebottiglieri/botti-agent" },
      ],
    },
    {
      slug: "agentic-dev-kit",
      index: "03",
      title: "agentic-dev-kit",
      tagline: "Guardrails that compute facts, not prompts.",
      year: "2026",
      role: "Creator, open source (MIT)",
      statusKey: "open-source",
      status: "Open source",
      layer: "Evaluation and guardrails",
      outcome: "5/5 vs 0/5 skipped tests",
      decision: "Compute the fact instead of asking the agent to report it.",
      stack: ["Python", "Git hooks", "pytest", "GitHub Actions", "MIT"],
      summary:
        "An agent-agnostic workflow for building software with a coding agent, with a pre-commit gate that computes the facts the agent would otherwise claim.",
      context:
        "Coding agents follow textual rules inconsistently. A prompt that says 'run the tests' is a request, not a guarantee. The kit started as a phase-by-phase workflow and ended with a gate that computes the facts.",
      problem:
        "Round 1 of a pre-registered A/B eval showed that prompt-level rules changed the agent's form, not its defect rate. The workflow needed a mechanism that could fail.",
      constraints: [
        "Agent-agnostic: plain process, no vendor-specific adapter.",
        "Minimal hooks: a pre-commit gate and a pre-push design gate.",
        "No false alarms; block only when the gate cannot run.",
        "MIT, generated from a canonical private source.",
      ],
      approach: [
        {
          title: "Move the rule into a tool",
          body: "Skipped tests and stale deploy pins are computed from the test report and the deploy files, then staged into a tracked gate report.",
        },
        {
          title: "Make the gate agent-neutral",
          body: "The gate is a standard git hook. It runs the same way for any coding agent and at the end of a session.",
        },
        {
          title: "Measure the rule against the tool",
          body: "A pre-registered A/B replay compared the textual rule with the gate. The gate caught skipped tests in 5/5 runs vs 0/5 for the rule, and stale pins in 5/5 vs 2/5.",
        },
        {
          title: "Keep the workflow readable",
          body: "WORKFLOW.md is plain process. The skills are portable SKILL.md files. The audit gate checks the invariants against the tracker.",
        },
      ],
      built: [
        "Pre-commit gate for skipped tests and stale deploy pins.",
        "Gate report staged in the repository; final mode for CI.",
        "Phase-by-phase workflow and session-end audit.",
        "Portable skills and an install script.",
        "MIT release v0.2.0.",
      ],
      results: [
        { label: "Skipped tests", value: "5/5 vs 0/5" },
        { label: "Stale pins", value: "5/5 vs 2/5" },
        { label: "Bypasses", value: "0" },
        { label: "False alarms", value: "0" },
      ],
      consequence:
        "The reviewer sees a computed fact instead of an agent claim. The gate is small, auditable, and runs outside the agent.",
      change:
        "The audit gate is GitHub-only, and the custom skills are still first versions. A tracker-agnostic audit and more eval coverage are the next real work.",
      reflection:
        "A prompt is an opinion. A gate is a fact. The useful work was moving the guarantee from the agent's text into a tool that can fail.",
      flow: {
        steps: [
          { label: "Rules", sub: "What the workflow asks for" },
          { label: "A/B replay", sub: "Rule against tool" },
          { label: "Pre-commit gate", sub: "Compute the facts" },
          { label: "Review", sub: "Facts in the diff" },
        ],
        branches: [
          { label: "Git hook", sub: "Agent-neutral" },
          { label: "Gate report", sub: "Tracked in the repo" },
          { label: "CI final mode", sub: "Re-run outside git" },
          { label: "Audit gate", sub: "Invariants against tracker" },
        ],
        accentIndex: 2,
      },
      heroMetrics: [
        { value: "5/5", label: "skipped tests caught" },
        { value: "5/5", label: "stale pins caught" },
        { value: "0", label: "bypasses and false alarms" },
      ],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/salvatorebottiglieri/agentic-dev-kit",
        },
      ],
    },
  ],
  experience: [
    {
      period: "2024 — Now",
      role: "Software AI Engineer",
      company: "Infocube, Naples",
      description:
        "Three agents in production, Jira and Confluence MCP servers, a cloud-agnostic agent library, and a multi-agent generative UI system. Deployed on AWS Bedrock AgentCore and ECS.",
    },
    {
      period: "2021 — 2024",
      role: "Software Engineer, Core Infrastructure",
      company: "AIRED, Remote",
      description:
        "Hybrid search with sparse and dense retrieval, a multi-branch CI/CD pipeline that cut time-to-production from 4 hours to 15 minutes, and a medical diagnostics classifier with AUC 0.98.",
    },
  ],
  matrix: [
    {
      area: "Agent infrastructure",
      what: "Runtimes, orchestration, MCP servers, tool boundaries.",
      artifacts: "Agent runtime, MCP servers, one deployment path.",
      tools: "Python, FastAPI, AWS Bedrock AgentCore, ECS.",
    },
    {
      area: "Production agents",
      what: "Triage, ticket automation, code-fix agents, human approval.",
      artifacts: "Three agents, Jira and Confluence integrations, eval suites.",
      tools: "LangGraph, MCP, Jira, Confluence.",
    },
    {
      area: "Evaluation and guardrails",
      what: "A/B evals, pre-commit gates, CI, observability.",
      artifacts: "Pre-registered A/B, gate report, audit.",
      tools: "pytest, GitHub Actions, git hooks.",
    },
    {
      area: "Backend and distributed systems",
      what: "Async engines, hybrid search, APIs, data.",
      artifacts: "Hybrid retrieval, async processing, CI/CD.",
      tools: "Python, Java, TypeScript, PostgreSQL, Qdrant, Docker.",
    },
  ],
  lab: [
    {
      title: "Stateless MCP server",
      label: "MCP / reliability",
      description:
        "A page-builder MCP server with no session state. One session per tool call, typed failure classification, a 45-second read timeout, and a rollout gate.",
    },
    {
      title: "Memex",
      label: "Knowledge / agents",
      description:
        "A personal knowledge engine: SQLite and markdown, Telegram ingestion, adversarial validation, trust states, and an agent-navigable ontology.",
    },
    {
      title: "Atlassian CLI",
      label: "Tooling",
      description: "Minimal Python CLIs for Jira REST v3 and Tempo Timesheets v4.",
    },
    {
      title: "Generative UI",
      label: "LangGraph / UI",
      description:
        "A multi-agent system that turns natural-language constraints into approved UI components for internal prototyping.",
    },
  ],
  publications: [
    {
      title:
        "Machine Learning as a Support for the Diagnosis of Type 2 Diabetes",
      venue: "MDPI",
      year: "2023",
    },
    {
      title:
        "Generative AI and Emotional Health: Innovations with Haystack",
      venue: "ICTS4eHealth",
      year: "2024",
    },
  ],
  ui: {
    nav: { systems: "Systems", experience: "Experience", lab: "Lab", contact: "Contact" },
    header: { role: "Software AI Engineer", start: "Start a conversation", contact: "Contact" },
    hero: {
      selectedSystem: "Selected system",
      seeSystems: "See selected systems",
      downloadCv: "Download CV",
      readLog: "Read the decision log",
    },
    register: {
      title: "Selected systems",
      meta: "3 systems, 2026",
      system: "System",
      layer: "Layer",
      status: "Status",
      metric: "Metric",
      year: "Year",
      readLog: "Read log",
      note: "Metrics come from production or public evaluations. Evaluation runs are labelled in the decision log.",
    },
    what: {
      title: "What I do",
      meta: "From runtime to evaluation",
      intro: "I build the systems that make agents useful in production.",
      area: "Area",
      build: "What I build",
      tools: "Typical tools",
    },
    experience: { title: "Experience", meta: "CV available", education: "Education" },
    publications: { title: "Publications", meta: "Peer-reviewed" },
    about: { title: "About", meta: "Naples, Italy. Three years fully remote." },
    lab: {
      title: "Lab",
      meta: "Prototypes and internal tools",
      console: "Lab console",
      contact: "Talk to me",
      note: "These are internal tools and prototypes. Client details are anonymized; the systems are described at a level that is safe to share.",
    },
    contact: {
      label: "Contact",
      title: "Have an agent that needs to ship?",
      body: "Tell me what is stuck: the runtime, the tools, the evaluation, or the handoff. I will reply with a concrete next step.",
      email: "Email me",
      cv: "CV",
    },
    footer: {
      rights: "© 2026 Salvatore Bottiglieri",
      note: "Content from CV, public repositories, and approved work notes.",
      language: "English / Italiano",
    },
    caseStudy: {
      decisionLog: "Decision log",
      selectedSystems: "Selected systems",
      role: "Role",
      year: "Year",
      layer: "Layer",
      outcome: "Outcome",
      figure: "Figure 1. {title} system path. Simplified for clarity.",
      contents: "Contents",
      stack: "Stack",
      links: "Links",
      talk: "Talk about this system",
      context: "Context",
      constraint: "Constraint",
      decision: "Decision",
      evidence: "Evidence",
      consequence: "Consequence",
      change: "What I would change",
      reflection: "Reflection",
      nextSystem: "Next system",
      readLog: "Read the decision log",
      evidenceNote: "Evaluation runs are labelled in the note.",
      decisionN: "Decision",
    },
  },
};
