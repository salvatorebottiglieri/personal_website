# Design principles

Distilled from the anti-slop audit of 2026-11-09. Read this before any UI or
frontend work in this repo. `DESIGN.md` is the full source of truth for tokens,
components, and accessibility. If code and `DESIGN.md` disagree, fix the code or
update `DESIGN.md` deliberately.

The external skills used to produce this file were:
`anthropics/skills@frontend-design`, `samber/cc-skills@frontend-design-deslop`,
`pbakaus/impeccable@impeccable`, `vercel-labs/agent-skills@web-design-guidelines`,
`emilkowalski/skills@emil-design-eng`, `jakubkrehel/skills@better-typography`.
They do not need to be installed again for this repo.

## The one test

Is this the most probable output, or a committed choice grounded in the subject?

## Concept

The portfolio is a **System Register**: a register of systems shipped, not a
magazine about the author. The work is the hero. Every project has a layer, a
status, a metric, and a decision. Case studies are decision logs, not generic
hero-plus-sections pages.

## Non-negotiable anti-slop rules

1. **No cream + serif + warm accent.** `#F4F1EA` with a high-contrast serif and
   a terracotta accent is the current AI portfolio default. Use cool paper,
   graphite, and oxide red instead.
2. **No near-black + acid green + terminal cosplay.** A fake blinking caret,
   monospace everything, and a lime accent are a recognizable cluster. The
   terminal belongs in the Lab and in the Ask panel only, where it does a job.
3. **No all-caps eyebrows, numbered section markers, middle-dot metadata, or
   arrows appended to links.** Number only when the content is truly sequential.
4. **No 9px microcopy.** 12px is the floor. Body text is 16px. UI text is 14px
   or larger.
5. **No three equal cards as the only layout device.** Prefer a register table,
   an asymmetric split, or a matrix.
6. **No decorative grid lines, gradient blobs, glow, glassmorphism, gradient
   text, or side-stripe borders.** A diagram must explain a system.
7. **No full-sentence hero at display size.** Keep the headline short. Let the
   subhead do the explaining.
8. **No fake metrics or unverified claims.** Placeholder data is labelled as
   placeholder. Real metrics replace it before launch.

## Typography

- Display: IBM Plex Serif.
- Body: IBM Plex Sans.
- Data and table headers: IBM Plex Mono, never below 12px.
- Scale: 1.25 Major Third, base 16px. Display `clamp(45px, 6vw, 68px)`, h1 39px,
  h2 31px, h3 25px, lead 20px, body 16px, small 14px, micro 12px.
- Weights 400, 500, 600. No 300.
- Measure 65 to 75 characters. Body line-height 1.6.
- Tracking: display -0.02em maximum, body 0, micro 0.02em.
- Do not use Inter, Instrument Serif, JetBrains Mono, Space Grotesk, or Geist as
  the primary face.

## Color

- Strategy: 60 neutral, 30 graphite, 10 oxide. The accent marks action and
  measured change, not decoration.
- Core tokens: bg `#EEF1F0`, surface `#F7F8F7`, fg `#1B1F1E`, muted `#5F6865`,
  border `#C9D0CD`, border-strong `#7C8783`, accent `#A63D2F`, accent-hover
  `#8F3226`, accent-fg `#FFFFFF`.
- Lab inset: bg `#141817`, surface `#1C211F`, fg `#E8EBE9`, muted `#A7B0AC`,
  border `#2A302E`, accent `#D97766`.
- Verified contrast: accent on bg 5.55:1, accent-fg on accent 6.31:1, muted on
  bg 5.06:1, on-dark-muted 8.99:1, on-dark-faint 5.55:1.
- Never use accent for small body text without checking contrast. Never encode
  meaning by color alone; pair it with a label.

## Layout

- 12 columns, max width 1280px, margins 24/40/64px, gutters 24px.
- Tight within groups (8 to 12px), generous between sections (64 to 96px).
- Signature move: the selected-systems register. Each row has a system name, a
  layer, a status, a metric, and a one-line decision.
- Case study: decision log with Context, Constraint, Decision, Evidence,
  Consequence, and What I would change.
- Hero: short headline plus a live system card. No stats triptych.
- Mobile: the register stacks with labels; the system diagram becomes a numbered
  list of steps. No horizontal overflow.

## Components

- One primary CTA per view. Primary filled accent, secondary outlined ink,
  tertiary underlined text.
- Buttons and inputs: 2px radius. Panels and tables: 0 radius. Defined edges
  only, no shadows. No border plus shadow on the same element.
- Focus ring: `box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px var(--accent)`. Never
  `outline: none` without a replacement.
- Inputs: visible label above the field, 16px text on mobile, inline error.
- Tables: text left, numbers right with `tabular-nums`, 1px separators.
- Overlays: focus trap, Esc to close, focus returns to the trigger, labelled
  input, `aria-modal`.
- Status: a small square plus a text label, not a pulsing dot.

## Motion

- 120ms fast, 180ms normal, 240ms slow, 280ms sheet.
- Ease-out `cubic-bezier(0.16, 1, 0.3, 1)`.
- Animate transform and opacity only. No page-load sequences, no
  animate-everything, no fake carets.
- Respect `prefers-reduced-motion`: instant state changes.

## Copy

- Plain and specific. Say what the system does, what was constrained, what
  changed.
- No "build the future", "supercharge", "world-class", "enterprise-grade".
- No aphoristic "Not a feature. A platform." cadence.
- No em-dash overuse. Use commas and periods.
- Placeholder metrics are labelled as placeholder.

## Before shipping

- [ ] No cream/serif/warm-accent or near-black/acid-green cluster.
- [ ] No all-caps labels, numbered eyebrows, middle dots, appended arrows.
- [ ] No text below 12px.
- [ ] One primary CTA per view.
- [ ] Visible focus on every interactive element.
- [ ] Assistant input labelled, focus trapped, Esc closes.
- [ ] Contrast checked for every text role.
- [ ] No horizontal overflow at 320, 390, 768, 1024, 1440.
- [ ] No console errors.
- [ ] No fake metrics without a placeholder label.
- [ ] The signature move is present and identifiable.
