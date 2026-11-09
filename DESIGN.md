# DESIGN.md - Salvatore Bottiglieri, Software AI Engineer

## Context (from discovery)

- Artifact type: portfolio / brand site, with an AI/conversational sub-surface (Ask) and a Lab.
- Positioning: technical, editorial, quietly confident. Not corporate SaaS, not creative agency, not terminal cosplay.
- Audience: recruiters and hiring managers (primary), potential consulting clients (secondary), technical peers (tertiary). Primary action: start a conversation. Secondary: read the selected systems, download the CV.
- Adjectives: precise, candid, systems-minded, quietly confident, human.
- Visual word translations:
  - precise -> aligned register columns, tabular numbers, measured spacing, no decorative noise.
  - candid -> plain sentences, real constraints, "what I would change" in every case study.
  - systems-minded -> architecture schematics, decision logs, layer labels, lifecycle status.
  - quietly confident -> one accent, generous whitespace, no glow, no hype.
  - human -> warm graphite instead of pure black, readable body text, direct contact.
- Aesthetic essence: calm engineered clarity.
- Single-minded proposition: this person ships AI systems and can explain the decisions behind them.
- References: admire Stripe Docs for technical clarity, Linear for restrained product-as-hero density, Pentagram for typographic confidence. Avoid the cream-and-serif AI portfolio and the near-black-and-acid-green terminal portfolio.
- Mode: light primary, with a dark inset surface for the Lab. Density: balanced.
- Constraints: Next.js App Router, Tailwind, bilingual EN/IT with English at the root, no backend decision yet, placeholder project data until the real case studies exist.

## Aesthetic

- Direction: bespoke "System Register". A technical register of systems, not a magazine about the author.
- Defining trait: the project index is a register. Every system has a layer, a status, a metric, and a decision. The layout behaves like a well-made engineering document, not a landing-page template.
- Signature move: the selected-systems register. Each row is a compact system card with a schematic glyph, status, metric, and decision line. It opens a decision log, not a generic case-study hero.

## Typography

- Display: IBM Plex Serif, source Google Fonts, license OFL.
- Body: IBM Plex Sans, source Google Fonts, license OFL.
- Mono: IBM Plex Mono, source Google Fonts, license OFL. Used for data and table headers, never below 12px.
- Scale: ratio 1.25 Major Third, base 16px.

| Step | Size | Line-height | Use |
|---|---|---|---|
| display | clamp(45px, 6vw, 68px) | 1.05 | hero and case-study title |
| h1 | 39px | 1.15 | page title |
| h2 | 31px | 1.2 | section heading |
| h3 | 25px | 1.3 | subheading |
| lead | 20px | 1.55 | hero subhead, case-study summary |
| body | 16px | 1.6 | running text |
| small | 14px | 1.5 | metadata, captions |
| micro | 12px | 1.4 | table headers, footnotes, never below 12px |

- Weights: 400, 500, 600. No 300.
- Measure: 65-75ch for running text. Case-study body max 68ch.
- Tracking: display -0.02em maximum; headings -0.01em; body 0; micro 0.02em. No all-caps labels.

## Color

- Strategy: cool paper and graphite, with an oxide red accent drawn from annotation and measurement, not from the current warm-clay or acid-green AI palette. The accent is reserved for action and measured change. It is not used for small body text on paper without checking contrast.
- Distribution: 60 neutral, 30 graphite, 10 oxide.
- Palette (role -> OKLCH | hex):
  - bg: oklch(0.95 0.005 180) | #EEF1F0
  - surface: oklch(0.98 0.003 180) | #F7F8F7
  - fg: oklch(0.22 0.008 180) | #1B1F1E
  - muted: oklch(0.48 0.012 180) | #5F6865
  - border: oklch(0.84 0.008 180) | #C9D0CD
  - border-strong: oklch(0.60 0.010 180) | #7C8783
  - accent: oklch(0.45 0.12 30) | #A63D2F
  - accent-hover: oklch(0.39 0.11 30) | #8F3226
  - accent-fg: oklch(1 0 0) | #FFFFFF
  - success: oklch(0.45 0.08 150) | #2F6B4F
  - warning: oklch(0.43 0.09 75) | #7A5316
  - error: oklch(0.40 0.13 25) | #8C1D18
- Contrast measured: accent on bg 5.55:1; accent-fg on accent 6.31:1; muted on bg 5.06:1; fg on bg 14.65:1; warning on bg 6.01:1. Rounded small accent text is not used; the accent appears as large text, borders, or filled buttons.
- Dark inset for the Lab: bg #141817, surface #1C211F, fg #E8EBE9, muted #A7B0AC, border #2A302E, accent #D97766. Contrast: fg 14.91:1, accent 5.78:1.
- No purple/indigo, no gradient text, no glowing shadows, no cream by reflex.

## Spacing, radius, shadow

- Spacing base: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Rhythm: tight within a group (8-12), generous between sections (64-96). Section labels sit closer to their content than to the previous block.
- Radius: 2px for buttons and inputs; 0 for tables, panels, and section surfaces. No pill cards.
- Shadow approach: defined edges only. A 1px border or a background step expresses elevation. No diffuse shadows, no border plus shadow on the same element.

## Layout and composition

- Grid: 12 columns, max width 1280px, page margins 24px mobile / 40px tablet / 64px desktop, gutters 24px.
- Signature layout move: the register. A fixed meta rail (system, layer, status) on the left and measured data on the right. On mobile the register becomes a stacked list, not cards.
- Density: balanced. The register is denser than the hero; the case study is airy.
- Scanning: F pattern. Primary content on the left, metadata rail on the right.
- Responsive: mobile-first. Breakpoints 640, 1024, 1280. The case-study sticky rail becomes a top metadata block below 1024.
- No centered max-width column as the only idea. The hero is asymmetric; the register breaks the content width with a full-bleed rule; the case study is a document with a rail.

## Components and states

- Button hierarchy: primary filled accent, secondary outlined ink, tertiary underlined text. One primary per view.
- States: hover darkens the fill or the border; active moves 1px without changing layout; focus uses a 2px accent ring with 2px offset; disabled is 40% opacity and not clickable; loading shows a 14px spinner and keeps the label.
- Inputs: visible label above the field, 16px text on mobile, 1px border-strong, 2px radius, inline error below the field. No placeholder-as-label.
- Tables: text left, numbers right with font-variant-numeric: tabular-nums, 1px separators, no vertical rules, 12px header, 14-16px cells.
- Overlays: Ask is a right-side drawer on desktop and a full-screen sheet on mobile. Focus trap, Esc to close, focus returns to the trigger, labelled input, aria-modal.
- Empty / loading / error: the assistant has a "not connected" state with a direct email link; the register has a placeholder label for design review; the contact form falls back to mailto.
- Focus ring: box-shadow 0 0 0 2px var(--bg), 0 0 0 4px var(--accent). Never outline: none without a replacement.

## Motion

- Duration scale: instant 0ms, fast 120ms, normal 180ms, slow 240ms, sheet 280ms.
- Easing: --ease-out cubic-bezier(0.16, 1, 0.3, 1); --ease-in-out cubic-bezier(0.65, 0, 0.35, 1).
- What animates: transform and opacity only. Hover and focus feedback, drawer entrance, no decorative page-load sequences.
- Reduced motion: state changes are instant; the drawer fades without translation.
- Signature motion: none. The register is read, not performed.

## Iconography

- Set: Lucide, customized to 1.5px stroke. Grid 20px, stroke 1.5, round caps and joins. Only functional icons: external link, copy, check, close, chevron. No decorative icon tiles, no emojis.
- Status uses a 6px square plus a text label, never color alone.

## Imagery and illustration

- Mode: system schematics and real product artifacts. No stock photography, no AI-generated scenes, no abstract blobs.
- Rules: schematics use the same 1.5px stroke and the palette; nodes are labelled with real system parts; arrows show data flow, not decoration. Real screenshots replace schematics when available.
- Avoid: people pointing at laptops, gradient blobs, floating orbs, isometric tech illustrations, corporate Memphis, raw Midjourney imagery.
- Text-over-image contrast: not applicable; no text over imagery.

## Dark mode (if in scope)

- Light mode is primary. The Lab is a dark inset surface, not a theme. If a dark theme is added later, use the Lab tokens as the starting point: base #141817, fg #E8EBE9, border #2A302E, accent #D97766. Elevation by lightness, not shadow.

## Accessibility

- Contrast: AA verified for the roles above. Accent is not used for small body text on paper.
- Focus: visible 2px accent ring, 2px offset, on every interactive element.
- Keyboard: fully operable; drawer traps focus and returns it; skip link to main content.
- Targets: 44px preferred, never below 24px.
- Color independence: status has a text label; metrics have labels; no color-only meaning.
- Reduced motion: honored with instant state changes.
- Notes: no fake blinking caret, no decorative pulse.

## Tokens (source of truth)

```css
:root {
  --font-display: "IBM Plex Serif", Georgia, serif;
  --font-body: "IBM Plex Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  --bg: #EEF1F0;
  --surface: #F7F8F7;
  --fg: #1B1F1E;
  --muted: #5F6865;
  --border: #C9D0CD;
  --border-strong: #7C8783;
  --accent: #A63D2F;
  --accent-hover: #8F3226;
  --accent-fg: #FFFFFF;
  --success: #2F6B4F;
  --warning: #7A5316;
  --error: #8C1D18;
  --on-dark-muted: #B9C0BD;
  --on-dark-faint: #8E9793;

  --lab-bg: #141817;
  --lab-surface: #1C211F;
  --lab-fg: #E8EBE9;
  --lab-muted: #A7B0AC;
  --lab-border: #2A302E;
  --lab-accent: #D97766;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;

  --radius-control: 2px;
  --radius-panel: 0;

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast: 120ms;
  --dur-normal: 180ms;
  --dur-slow: 240ms;
}
```

- Adapter: Tailwind + CSS custom properties. Tailwind handles layout and spacing; tokens handle color, type, radius, and motion.

## Cards and surfaces

- Cards/surfaces: border XOR shadow. Use a 1px border on the surface, 0 radius, 24-32px padding. No nested cards. The register rows are not cards; they are table rows with a shared surface on hover.
- The Lab is the only dark surface. The Ask drawer is a surface with a 1px border, no shadow.

## Slop audit

- Date: 2026-11-09 | Result: pass for design and render.
- Notes: A and C matched the two current AI-design clusters (cream + serif + warm accent; near-black + acid green). D removes cream, Instrument Serif, JetBrains Mono, acid green, numbered eyebrows, ALL-CAPS labels, middle-dot metadata, arrows appended to links, 9px microcopy, fake caret, side-stripe borders, and three equal card grids. Render checks at 390px and 1440px: no horizontal overflow, no console errors, assistant input labelled and focused, focus trap holds, Esc closes and returns focus. Contrast measured for the defined roles: accent on bg 5.55:1, accent-fg on accent 6.31:1, muted on bg 5.06:1, warning on bg 6.01:1, on-dark-muted 8.99:1, on-dark-faint 5.55:1. Placeholder copy and metrics remain to be replaced with verified content.

## Changelog

- 2026-11-09: initial design system for the System Register direction, created after the anti-slop audit of variants A, B, and C.
