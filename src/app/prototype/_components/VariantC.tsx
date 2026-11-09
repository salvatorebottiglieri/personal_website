"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AskPanel, type AskTheme } from "./AskPanel";
import {
  capabilities,
  experience,
  profile,
  projects,
  type Project,
} from "./data";

const themeStyle = {
  "--bg": "#0B0B0C",
  "--ink": "#F2F0E9",
  "--muted": "#8A8A85",
  "--line": "#262626",
  "--lime": "#C6FF4A",
  "--panel": "#111113",
} as React.CSSProperties;

const askTheme: AskTheme = {
  panel: "#0B0B0C",
  text: "#F2F0E9",
  muted: "#8A8A85",
  line: "#262626",
  accent: "#C6FF4A",
  accentText: "#0B0B0C",
};

function Header({ onAsk }: { onAsk: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] lg:px-8">
        <Link href="?variant=C&view=home" className="flex items-center gap-2">
          <span className="text-[var(--lime)]">●</span>
          <span>SB://portfolio</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="?variant=C&view=home#work" className="text-[color:var(--muted)] hover:text-[var(--lime)]">
            work
          </Link>
          <Link href="?variant=C&view=home#experience" className="text-[color:var(--muted)] hover:text-[var(--lime)]">
            experience
          </Link>
          <Link href="?variant=C&view=home#about" className="text-[color:var(--muted)] hover:text-[var(--lime)]">
            about
          </Link>
          <Link href="?variant=C&view=home#contact" className="text-[color:var(--muted)] hover:text-[var(--lime)]">
            contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onAsk}
            className="border border-[var(--lime)] px-3 py-1.5 text-[var(--lime)] transition-colors hover:bg-[var(--lime)] hover:text-[var(--bg)]"
          >
            [ask]
          </button>
          <span className="text-[color:var(--muted)]">EN/IT</span>
        </div>
      </div>
    </header>
  );
}

function Hero({ onAsk }: { onAsk: () => void }) {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--lime)]">
            01 / whoami
          </div>
          <h1 className="mt-5 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.03em]">
            Build the interface.
            <br />
            Then build the <em className="text-[var(--lime)]">system.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[color:var(--muted)]">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em]">
            <Link
              href="?variant=C&view=home#work"
              className="border border-[var(--lime)] bg-[var(--lime)] px-4 py-2.5 text-[var(--bg)] transition-colors hover:bg-transparent hover:text-[var(--lime)]"
            >
              [ view work ]
            </Link>
            <span className="border border-[color:var(--line)] px-4 py-2.5 text-[color:var(--muted)]">
              [ download cv ]
            </span>
            <button
              type="button"
              onClick={onAsk}
              className="px-1 py-2.5 text-[var(--lime)] underline underline-offset-4"
            >
              $ ask --ai
            </button>
          </div>
        </div>

        <div className="border border-[color:var(--line)] bg-[var(--panel)]">
          <div className="flex items-center gap-2 border-b border-[color:var(--line)] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--lime)]" />
            salvatore@portfolio:~
          </div>
          <div className="space-y-4 p-5 font-mono text-[11px] leading-relaxed">
            <div>
              <span className="text-[var(--lime)]">$</span> whoami
            </div>
            <div className="text-[color:var(--muted)]">salvatore.bottiglieri</div>
            <div>
              <span className="text-[var(--lime)]">$</span> role
            </div>
            <div className="text-[color:var(--muted)]">software ai engineer</div>
            <div>
              <span className="text-[var(--lime)]">$</span> focus
            </div>
            <div className="text-[color:var(--muted)]">
              llm apps · retrieval · evals · production ml
            </div>
            <div>
              <span className="text-[var(--lime)]">$</span> status
            </div>
            <div className="text-[var(--lime)]">● open to select work</div>
            <div>
              <span className="text-[var(--lime)]">$</span> ls projects/
            </div>
            <div className="text-[color:var(--muted)]">atlas signal canvas</div>
            <div className="flex items-center gap-1">
              <span className="text-[var(--lime)]">$</span>
              <span className="inline-block h-3 w-2 animate-pulse bg-[var(--lime)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8">
        <div className="flex items-end justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span className="text-[var(--lime)]">02 / selected work</span>
          <span className="text-[color:var(--muted)]">2024 — 2025</span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`?variant=C&view=case&project=${project.slug}`}
              className="group flex flex-col border border-[color:var(--line)] bg-[var(--panel)] transition-colors hover:border-[var(--lime)]"
            >
              <div className="flex items-center justify-between border-b border-[color:var(--line)] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
                <span>~/projects/{project.slug}</span>
                <span className="text-[var(--lime)]">●</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                  {project.role} · {project.year}
                </div>
                <h3 className="mt-2 font-serif text-4xl transition-colors group-hover:text-[var(--lime)]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                  {project.tagline}
                </p>
                <div className="mt-auto pt-6">
                  <div className="font-mono text-[11px] text-[var(--lime)]">
                    {project.outcome}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="border border-[color:var(--line)] px-1.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-[color:var(--muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--lime)]">
                    open case →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
          Placeholder projects for design review
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--lime)]">
          03 / git log
        </div>
        <div className="mt-6 space-y-6">
          {experience.map((item) => (
            <div
              key={item.period}
              className="grid gap-2 font-mono text-[11px] md:grid-cols-[10rem_1fr]"
            >
              <div className="text-[var(--lime)]">{item.period}</div>
              <div>
                <div>
                  {item.role}{" "}
                  <span className="text-[color:var(--muted)]">/ {item.company}</span>
                </div>
                <div className="mt-1 leading-relaxed text-[color:var(--muted)]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-[color:var(--line)]">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-14 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--lime)]">
            04 / readme.md
          </div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">About</h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[color:var(--muted)]">
            The short version: I like small teams, clear constraints, and software that
            survives the demo.
          </p>
          <div className="mt-8 max-w-sm border border-[color:var(--line)] bg-[var(--panel)] p-4 font-mono text-[10px] leading-relaxed text-[color:var(--muted)]">
            <div className="text-[var(--lime)]">$ cat about.md | head -4</div>
            <div className="mt-2">location: italy / remote</div>
            <div>focus: llm apps · retrieval · evals</div>
            <div>status: open to select work</div>
            <div>contact: hello@salvatorebottiglieri.com</div>
          </div>
        </div>

        <div className="border border-[color:var(--line)] bg-[var(--panel)] p-5 font-mono text-[11px] leading-relaxed">
          <div className="text-[var(--lime)]"># About</div>
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-[color:var(--muted)]">
              {paragraph}
            </p>
          ))}
          <div className="mt-5 text-[var(--lime)]">## Principles</div>
          <ul className="mt-2 space-y-2">
            {profile.principles.map((principle) => (
              <li key={principle.title} className="text-[color:var(--muted)]">
                - <span className="text-[var(--ink)]">{principle.title}</span>:{" "}
                {principle.body}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 py-14 lg:px-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--lime)]">
          05 / stack
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title} className="border-t border-[color:var(--line)] pt-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--lime)]">
                {capability.title}
              </div>
              <ul className="mt-2 space-y-1 font-mono text-[10px] text-[color:var(--muted)]">
                {capability.items.map((item) => (
                  <li key={item}>→ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--lime)]">
          06 / contact
        </div>
        <div className="mt-6 border border-[color:var(--line)] bg-[var(--panel)] p-6">
          <div className="font-mono text-[11px] text-[color:var(--muted)]">
            $ contact --email
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 block break-all font-serif text-3xl text-[var(--ink)] transition-colors hover:text-[var(--lime)] md:text-5xl"
          >
            {profile.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-4 border-t border-[color:var(--line)] pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--lime)]"
            >
              linkedin ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--lime)]"
            >
              github ↗
            </a>
            <span className="text-[color:var(--muted)]/50">cv ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)] md:flex-row md:justify-between">
        <span>© 2026 {profile.name}</span>
        <span>prototype · placeholder copy</span>
        <span>EN / IT</span>
      </div>
    </footer>
  );
}

function FileSection({
  id,
  file,
  children,
}: {
  id: string;
  file: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border border-[color:var(--line)] bg-[var(--panel)]">
      <div className="border-b border-[color:var(--line)] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
        {"// "}
        {file}
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

function CaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const files = [
    ["context", "context.md"],
    ["problem", "problem.md"],
    ["approach", "approach.md"],
    ["built", "built.md"],
    ["results", "results.json"],
    ["reflection", "reflection.md"],
  ];

  return (
    <main className="px-5 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1400px]">
        <Link
          href="?variant=C&view=home#work"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)] hover:text-[var(--lime)]"
        >
          ← ~/projects
        </Link>

        <div className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--lime)]">
          ~/projects/{project.slug}
        </div>
        <h1 className="mt-2 font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.85] tracking-[-0.03em]">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-xl text-[color:var(--muted)] md:text-2xl">
          {project.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 border-y border-[color:var(--line)] py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
          <span>{project.role}</span>
          <span className="text-[var(--lime)]">/</span>
          <span>{project.year}</span>
          <span className="text-[var(--lime)]">/</span>
          <span className="text-[var(--lime)]">{project.outcome}</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border border-[color:var(--line)] bg-[var(--panel)] p-3 font-mono text-[10px]">
              <div className="text-[var(--lime)]">~/projects/{project.slug}</div>
              <div className="mt-3 space-y-1">
                {files.map(([id, file]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block text-[color:var(--muted)] hover:text-[var(--lime)]"
                  >
                    {file}
                  </a>
                ))}
                <div className="pt-2 text-[color:var(--muted)]/50">stack.txt</div>
              </div>
            </div>
            <div className="mt-4 border border-[color:var(--line)] p-3">
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                Stack
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-[color:var(--line)] px-1.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-[color:var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <article className="max-w-3xl space-y-6">
            <p className="border-l-2 border-[var(--lime)] pl-4 font-serif text-2xl leading-snug md:text-3xl">
              {project.summary}
            </p>

            <FileSection id="context" file="context.md">
              <h2 className="font-serif text-3xl">Context</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                {project.context}
              </p>
            </FileSection>

            <FileSection id="problem" file="problem.md">
              <h2 className="font-serif text-3xl">Problem</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">
                {project.problem}
              </p>
              <div className="mt-4 space-y-1.5 border-t border-[color:var(--line)] pt-3 font-mono text-[10px] text-[color:var(--muted)]">
                {project.constraints.map((constraint) => (
                  <div key={constraint}>
                    <span className="text-[var(--lime)]">!</span> {constraint}
                  </div>
                ))}
              </div>
            </FileSection>

            <FileSection id="approach" file="approach.md">
              <h2 className="font-serif text-3xl">Approach</h2>
              <div className="mt-4 space-y-4">
                {project.approach.map((step, index) => (
                  <div key={step.title} className="border-t border-[color:var(--line)] pt-3">
                    <div className="font-mono text-[9px] text-[var(--lime)]">
                      0{index + 1}
                    </div>
                    <h3 className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </FileSection>

            <FileSection id="built" file="built.md">
              <h2 className="font-serif text-3xl">What I built</h2>
              <ul className="mt-3 space-y-2 font-mono text-[11px] text-[color:var(--muted)]">
                {project.built.map((item) => (
                  <li key={item}>
                    <span className="text-[var(--lime)]">✓</span> {item}
                  </li>
                ))}
              </ul>
            </FileSection>

            <FileSection id="results" file="results.json">
              <h2 className="font-serif text-3xl">Results</h2>
              <div className="mt-4 border border-[color:var(--line)] bg-[var(--bg)] p-4 font-mono text-[11px] leading-relaxed">
                <div className="text-[color:var(--muted)]">{"{"}</div>
                {project.results.map((result, index) => (
                  <div key={result.label} className="pl-4">
                    <span className="text-[var(--lime)]">
                      &quot;{result.label}&quot;
                    </span>
                    <span className="text-[color:var(--muted)]">: </span>
                    <span className="text-[var(--ink)]">&quot;{result.value}&quot;</span>
                    {index < project.results.length - 1 && (
                      <span className="text-[color:var(--muted)]">,</span>
                    )}
                  </div>
                ))}
                <div className="text-[color:var(--muted)]">{"}"}</div>
              </div>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
                Placeholder metrics for design review
              </p>
            </FileSection>

            <FileSection id="reflection" file="reflection.md">
              <h2 className="font-serif text-3xl">Reflection</h2>
              <blockquote className="mt-3 border-l-2 border-[var(--lime)] pl-4 font-serif text-xl leading-snug md:text-2xl">
                “{project.reflection}”
              </blockquote>
            </FileSection>
          </article>
        </div>

        <div className="mt-14 border-t border-[color:var(--line)] pt-4">
          <div className="flex items-baseline justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
            <span>next</span>
            <span>{next.index}</span>
          </div>
          <Link
            href={`?variant=C&view=case&project=${next.slug}`}
            className="group mt-2 flex items-end justify-between gap-4"
          >
            <h2 className="font-serif text-4xl transition-colors group-hover:text-[var(--lime)] md:text-6xl">
              {next.title}
            </h2>
            <span className="pb-1 font-mono text-lg text-[var(--lime)]">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

interface VariantCProps {
  view: "home" | "case";
  project: Project;
}

export default function VariantC({ view, project }: VariantCProps) {
  const [askOpen, setAskOpen] = useState(false);

  return (
    <div
      style={themeStyle}
      className="min-h-screen bg-[var(--bg)] pb-24 text-[var(--ink)] selection:bg-[var(--lime)] selection:text-[var(--bg)]"
    >
      <Header onAsk={() => setAskOpen(true)} />

      {view === "home" ? (
        <>
          <Hero onAsk={() => setAskOpen(true)} />
          <Work />
          <Experience />
          <About />
          <Stack />
          <Contact />
          <Footer />
        </>
      ) : (
        <CaseStudy project={project} />
      )}

      <AskPanel
        open={askOpen}
        onClose={() => setAskOpen(false)}
        mode="terminal"
        theme={askTheme}
        projectHref={(slug) => `?variant=C&view=case&project=${slug}`}
      />
    </div>
  );
}
