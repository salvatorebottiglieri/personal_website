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

TBD — needs a `DESIGN.md` and a v3 prototype.
