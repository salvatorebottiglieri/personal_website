# Prototype — Portfolio redesign

## Question

Which editorial-technical direction should the portfolio use for the homepage and
the case study template?

## Run

```bash
npm run dev
```

Then open:

- `http://localhost:3000/prototype?variant=A&view=home`
- `http://localhost:3000/prototype?variant=B&view=home`
- `http://localhost:3000/prototype?variant=C&view=home`

Switch variants with `←` / `→` or the floating bar. The bar also switches between
the homepage and the case study.

## Variants

- **A — Paper & Signal.** Warm paper, Instrument Serif display, orange signal
  accent, magazine grid, project index rows, editorial case study.
- **B — Index / Swiss.** White, grotesk display, blue accent, fixed left rail,
  dense project table, document-style case study.
- **C — Terminal Editorial.** Near-black, lime accent, split hero, terminal
  profile card, project panels, file-tree case study.

## Status

- Copy and projects are placeholder content for design review only.
- The AI panel is a canned prototype; no LLM is connected.
- The floating prototype bar is hidden in production builds.

## Verdict

TBD — to be filled after review. Note which variant wins and which parts should
be stolen from the others.

---

## Audit — AI slop (2026-11-09)

Skills used, installed project-scoped in `/tmp/opencode/design-skills` (not global):

- `anthropics/skills@frontend-design`
- `samber/cc-skills@frontend-design-deslop`
- `pbakaus/impeccable@impeccable`
- `vercel-labs/agent-skills@web-design-guidelines`
- `emilkowalski/skills@emil-design-eng`
- `jakubkrehel/skills@better-typography`

### Verdict

Both A and C match the two current AI-design clusters named by `anthropics/skills`:

1. **A — Paper & Signal**: warm cream `#F4F1EA`, high-contrast serif display, warm
   accent, broadsheet rules, `01 / 02` markers, ALL-CAPS eyebrows, mono labels,
   middle-dot metadata, arrows appended to links.
2. **C — Terminal Editorial**: near-black `#0B0B0C`, acid-green `#C6FF4A`, terminal
   chrome, mono labels, fake blinking caret, `01 / 02` markers, middle-dot
   metadata, arrows appended to links.

The `frontend-design-deslop` checklist additionally flags:

- full-sentence display headlines and the italic-word-in-headline move;
- numbered section markers that are not actually sequential;
- 9–10px microcopy, below the 11px legibility floor;
- three equal cards/columns as the only grid device;
- side-stripe accent border on the A blockquote;
- fake blinking caret in C;
- small orange `#FF4D00` text on `#F4F1EA` (about 3.3:1, fails AA for small text);
- `outline-none` on the assistant input with no replacement, no visible label,
  and no focus trap;
- interactive elements without explicit focus-visible styles.

### What survives

- **A**: editorial grid, project index rows, case-study reading rhythm, contact block.
- **C**: Ask AI panel, Lab/file-tree case study, operator-console interaction.
- **B**: project table density, metadata grid, left-rail scannability.

### Proposed direction — "System Register"

The portfolio as a register of systems, not a magazine about the author.

- Real artifacts: architecture diagrams, eval results, latency/throughput,
  decision logs, screenshots.
- Visual language from instrumentation and technical publishing, not cream+serif
  or terminal+lime.
- Type: IBM Plex Sans + IBM Plex Serif + IBM Plex Mono (or another deliberate
  technical trio).
- Signature move: the project index is a system register; each row opens a
  decision log, not a generic case-study hero.
- AI assistant: a functional operator console, not a decorative terminal.
- Copy: plain and specific; no aphoristic "Build the interface. Then build the
  system." cadence.

### Status

Superseded by Variant D.

---

## Variant D — System Register (v3)

Built from `DESIGN.md`, after the anti-slop audit.

- Home: short hero, selected-system card, register table, capability matrix,
  experience table, about with fact card, dark Lab inset, contact block.
- Case study: decision log with context, constraint, decision, evidence,
  consequence, and "what I would change".
- Type: IBM Plex Serif, Sans, and Mono. Color: cool paper, graphite, oxide red.
- The AI panel is a functional drawer with a labelled input, focus trap, and
  Esc-to-close. It is not a decorative terminal.
- Render checks: no horizontal overflow at 390px and 1440px, no console errors,
  focus trap verified.

Open:

- `http://localhost:3000/prototype?variant=D&view=home`
- `http://localhost:3000/prototype?variant=D&view=case&project=security-agents`

Status: D approved on 2026-11-09. `DESIGN.md` and `DESIGN-PRINCIPLES.md` are the
source of truth. A, B, and C remain for reference only. The external skills were
distilled into `DESIGN-PRINCIPLES.md`; they do not need to be installed again for
this repo.

---

## Content pass — real sources (2026-11-09)

Sources:

- CV: `/mnt/c/Users/s.bottiglieri/Downloads/CV.pdf`, copied to
  `public/cv/salvatore-bottiglieri-cv.pdf`.
- Public GitHub: `botti-agent` (Cortex), `agentic-dev-kit`, `memex`,
  `atlassian-cli`.
- Work notes: `Desktop/DEMO-AGENTS-2026-10-07`,
  `Desktop/agent3-orchestrators-design`, `Downloads/SPEC-DSF-14816-stateless-mcp-v2.md`.
- Client details are anonymized: "a global enterprise video platform", no internal
  URLs, ticket keys, CVE IDs, or customer names.

Three systems:

1. **Security agents** — three production agents, Jira and Confluence MCP servers,
   AWS Bedrock AgentCore and ECS. The triage numbers are a labelled dry-run, not
   production.
2. **Cortex** — open-source agent runtime, 20 ADRs, 30 loop eval tasks and 13
   refusal tasks.
3. **agentic-dev-kit** — MIT guardrails, pre-commit gate, 5/5 vs 0/5 on skipped
   tests and 5/5 vs 2/5 on stale pins.

Still to verify:

- The CV says 18 ADRs for Cortex; the public repository has 20. The site uses 20.
- The CV reports a later 10-run evaluation (10/10 vs 2/10 defects, +14–26% cost);
  the public changelog reports the 5/5 and 5/5 numbers. The site uses the public
  numbers. Decide whether to add the later evaluation.
- The CV email is `sasibottiglieri0@gmail.com`. A custom-domain email may be
  preferable before launch.

---

## Production v1 (2026-11-09)

- English at `/`, Italian at `/it`.
- Case studies at `/work/[slug]` and `/it/work/[slug]`, statically generated.
- Content lives in `src/app/_data/content.en.ts` and `content.it.ts`.
- CV is served from `public/cv/salvatore-bottiglieri-cv.pdf`.
- `sitemap.ts` and `robots.ts` assume the domain `https://salvatorebottiglieri.com`.
- The Ask drawer is not mounted in production until the LLM backend is configured.
  The prototype route still contains it.
- The old chat components under `src/app/_components` are unused but still present.
  The old Visitor Context docs (`CONTEXT.md`, `SPEC.md`, `tickets.md`, `docs/adr`) are
  now obsolete.
