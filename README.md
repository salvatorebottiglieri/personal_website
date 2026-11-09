# Portfolio — Salvatore Bottiglieri

Personal site of a Software AI Engineer working on agent infrastructure: runtimes,
orchestration, MCP servers, tool boundaries, and evaluation.

English at `/`, Italian at `/it`. Selected systems at `/work/[slug]` and
`/it/work/[slug]`.

## Stack

- Next.js 15 App Router, React 19, TypeScript
- TailwindCSS 3
- IBM Plex Serif, Sans, and Mono
- Static content, no database

## Design

Read these before any UI work:

- [`DESIGN-PRINCIPLES.md`](./DESIGN-PRINCIPLES.md) — the short anti-slop checklist.
- [`DESIGN.md`](./DESIGN.md) — tokens, typography, color, components, accessibility.

`AGENTS.md` points future sessions at both files.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production build:

```bash
npm run build
npm start
```

## Structure

```
src/app/
├── layout.tsx                 # fonts, metadata, root body
├── page.tsx                   # English home
├── it/page.tsx                # Italian home
├── work/[slug]/page.tsx       # English case study
├── it/work/[slug]/page.tsx    # Italian case study
├── _components/site/          # header, footer, shell, home, case study, flow
├── _data/
│   ├── content.en.ts          # English content
│   ├── content.it.ts          # Italian content
│   ├── siteContent.ts         # lookup
│   └── siteTypes.ts           # types
├── globals.css
├── sitemap.ts
├── robots.ts
└── prototype/                 # design-review prototype, not linked from the site
public/cv/salvatore-bottiglieri-cv.pdf
```

## Content

The three selected systems are:

1. **Security agents** — production agents for SAST, DAST, and SCA triage,
   Jira tickets, and proposed fixes; Jira and Confluence MCP servers.
2. **Cortex** — open-source agent runtime with persistent goals, an event bus,
   MQTT sensor agents, and an eval harness.
3. **agentic-dev-kit** — open-source guardrails for coding agents, with a
   pre-commit gate that computes facts instead of trusting prompts.

Sources: CV (November 2026), public GitHub repositories (`botti-agent`,
`agentic-dev-kit`, `memex`, `atlassian-cli`), and approved work notes. Client
details are anonymized. Evaluation runs are labelled in the case studies.

## AI assistant

The Ask drawer exists in `src/app/prototype` and is not mounted in production.
It will be wired after the LLM backend and deployment are chosen.

## Legacy

The old conversational portfolio code (`HeroChat`, `Chatbot`, `Bio`,
`GeneratedPage`, the FastAPI backend under `backend/`) is still in the repo but
is not imported by the current pages. The old Visitor Context documents
(`CONTEXT.md`, `SPEC.md`, `tickets.md`, `docs/adr/`) describe a feature that is
not part of the current site.

## Deployment

The static site is ready for Vercel. `sitemap.ts` and `robots.ts` assume
`https://salvatorebottiglieri.com`; update the domain before launch.
