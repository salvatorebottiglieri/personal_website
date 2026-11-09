# Handoff — 2026-11-09

## Where the work is

- Worktree: `../personal_website-prototype`
- Branch: `prototype-redesign`, committed and pushed. The current head is the
  latest commit on the branch; see `git log` in the worktree.
- Main repo: untouched, still on `master` with its pre-existing uncommitted work.
- Remote: `origin` now points to
  `https://github.com/salvatorebottiglieri/personal_website.git`.
- Pull request: https://github.com/salvatorebottiglieri/personal_website/pull/3

## Run

```bash
cd ../personal_website-prototype
npm install
npm run dev
```

Open:

- English: `http://localhost:3000/`
- Italiano: `http://localhost:3000/it`
- Case studies: `/work/security-agents`, `/work/cortex`, `/work/agentic-dev-kit`
- Italian case studies: `/it/work/...`
- CV: `/cv/salvatore-bottiglieri-cv.pdf`

## Done

- Approved the System Register direction and wrote `DESIGN.md`,
  `DESIGN-PRINCIPLES.md`, and `AGENTS.md`.
- Replaced placeholder projects with real content from the CV, public GitHub,
  and approved work notes.
- Built the production site with English at `/` and Italian at `/it`.
- Added static case studies, sitemap, robots, metadata, and language-aware links.
- Copied the real CV into `public/cv/`.
- Removed the design-review prototype and the old chat frontend.
- Kept the FastAPI backend and the old Visitor Context docs, unused.

## Verified

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`: 13 static pages
- Playwright checks at 390px and 1440px: no horizontal overflow, no console
  errors on `/`, `/it`, and all case studies.

## Open

- Review the Italian copy.
- Choose the final domain.
- Decide where to deploy. Vercel was deferred because there is no account.
  For production, set `NEXT_PUBLIC_SITE_URL`; previews use `VERCEL_URL`.
- Decide whether to mount the AI assistant and which backend/provider to use.
- Decide whether to remove the old FastAPI backend and Visitor Context docs.
- Review and merge PR #3 when the content is approved.

## Design sources

- `DESIGN.md` — full design system.
- `DESIGN-PRINCIPLES.md` — short anti-slop checklist.
- `docs/prototype-notes.md` — design history, content sources, audit.
