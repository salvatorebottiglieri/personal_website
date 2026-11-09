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
