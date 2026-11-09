"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AskPanel, type AskTheme } from "./AskPanel";
import {
  capabilities,
  experience,
  lab,
  profile,
  projects,
  type Project,
} from "./data";

const themeStyle = {
  "--paper": "#FFFFFF",
  "--ink": "#111111",
  "--muted": "#666666",
  "--line": "#E5E5E5",
  "--accent": "#1F3BFF",
  "--wash": "#F4F6FF",
} as React.CSSProperties;

const askTheme: AskTheme = {
  panel: "#FFFFFF",
  text: "#111111",
  muted: "#666666",
  line: "#E5E5E5",
  accent: "#1F3BFF",
  accentText: "#FFFFFF",
};

function Rail({ onAsk }: { onAsk: () => void }) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[220px] flex-col justify-between border-r border-[color:var(--line)] bg-[var(--paper)] px-6 py-6 lg:flex">
      <div>
        <Link href="?variant=B&view=home" className="block">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
            SB / 2026
          </div>
          <div className="mt-2 text-lg font-semibold leading-tight">{profile.name}</div>
          <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
            {profile.role}
          </div>
        </Link>

        <nav className="mt-12 space-y-3 font-mono text-[10px] uppercase tracking-[0.16em]">
          <Link href="?variant=B&view=home#index" className="block hover:text-[var(--accent)]">
            01 / Index
          </Link>
          <Link href="?variant=B&view=home#profile" className="block hover:text-[var(--accent)]">
            02 / Profile
          </Link>
          <Link href="?variant=B&view=home#experience" className="block hover:text-[var(--accent)]">
            03 / Experience
          </Link>
          <Link href="?variant=B&view=home#capabilities" className="block hover:text-[var(--accent)]">
            04 / Capabilities
          </Link>
          <Link href="?variant=B&view=home#contact" className="block hover:text-[var(--accent)]">
            05 / Contact
          </Link>
        </nav>

        <button
          type="button"
          onClick={onAsk}
          className="mt-10 flex w-full items-center justify-between border border-[color:var(--ink)] bg-[var(--ink)] px-3 py-2 text-left font-mono text-[9px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-[var(--accent)]"
        >
          Ask AI <span className="text-white/50">⌘K</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
          <span className="h-1.5 w-1.5 bg-[var(--accent)]" />
          Available for select work
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
          EN / IT
        </div>
        <div className="flex gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            GitHub ↗
          </a>
        </div>
      </div>
    </aside>
  );
}

function MobileHeader({ onAsk }: { onAsk: () => void }) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[color:var(--line)] bg-[var(--paper)]/90 px-5 py-3 backdrop-blur lg:hidden">
      <Link href="?variant=B&view=home" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent)]">
        SB / 2026
      </Link>
      <button
        type="button"
        onClick={onAsk}
        className="border border-[color:var(--ink)] bg-[var(--ink)] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white"
      >
        Ask AI
      </button>
    </header>
  );
}

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-[color:var(--ink)] pb-2">
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
        {index} / {title}
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
        {profile.location}
      </span>
    </div>
  );
}

function Index() {
  return (
    <section id="index" className="mt-14 scroll-mt-20">
      <SectionHeading index="01" title="Index" />
      <div className="mt-4 hidden grid-cols-[2.5rem_1.4fr_1fr_5rem_auto] gap-4 border-b border-[color:var(--line)] pb-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)] md:grid">
        <span>#</span>
        <span>Project</span>
        <span>Role</span>
        <span>Year</span>
        <span className="text-right">Outcome</span>
      </div>

      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`?variant=B&view=case&project=${project.slug}`}
          className="group grid gap-1 border-b border-[color:var(--line)] py-4 transition-colors hover:bg-[var(--wash)] md:grid-cols-[2.5rem_1.4fr_1fr_5rem_auto] md:items-baseline md:gap-4 md:px-2"
        >
          <span className="font-mono text-[9px] text-[color:var(--muted)] group-hover:text-[var(--accent)]">
            {project.index}
          </span>
          <div>
            <div className="text-lg font-semibold tracking-[-0.02em] group-hover:text-[var(--accent)]">
              {project.title}
            </div>
            <div className="text-xs text-[color:var(--muted)]">{project.tagline}</div>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
            {project.role}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
            {project.year}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--accent)] md:text-right">
            {project.outcome}
          </span>
        </Link>
      ))}
      <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
        Placeholder projects for design review
      </p>
    </section>
  );
}

function Profile() {
  return (
    <section id="profile" className="mt-14 scroll-mt-20">
      <SectionHeading index="02" title="Profile" />
      <div className="mt-5 grid gap-8 md:grid-cols-2">
        <div>
          <p className="max-w-md text-xl leading-snug tracking-[-0.01em]">
            I design and engineer AI-native products: LLM applications, retrieval systems,
            and the backend that keeps them reliable.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--muted)]">
            {profile.about[0]}
          </p>
        </div>
        <div className="border-t border-[color:var(--line)]">
          {[
            ["Based", profile.location],
            ["Focus", "AI applications · ML systems · Product engineering"],
            ["Availability", "Senior roles · Selected consulting"],
            ["Languages", "English · Italian"],
            ["Tools", "Python · TypeScript · Postgres · PyTorch · GCP · AWS"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[7rem_1fr] gap-4 border-b border-[color:var(--line)] py-2.5 font-mono text-[9px] uppercase tracking-[0.12em]"
            >
              <span className="text-[color:var(--muted)]">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mt-14 scroll-mt-20">
      <SectionHeading index="03" title="Experience" />
      <div className="mt-4">
        {experience.map((item) => (
          <div
            key={item.period}
            className="grid gap-2 border-b border-[color:var(--line)] py-4 md:grid-cols-[8rem_1fr_8rem] md:gap-6"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
              {item.period}
            </span>
            <div>
              <div className="font-semibold tracking-[-0.01em]">
                {item.role} <span className="font-normal text-[color:var(--muted)]">/ {item.company}</span>
              </div>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
                {item.description}
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)] md:text-right">
              Full-time
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="mt-14 scroll-mt-20">
      <SectionHeading index="04" title="Capabilities" />
      <div className="mt-5 grid gap-8 md:grid-cols-3">
        {capabilities.map((capability, index) => (
          <div key={capability.title}>
            <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--accent)]">
              0{index + 1}
            </div>
            <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em]">{capability.title}</h3>
            <ul className="mt-3 space-y-1.5 border-t border-[color:var(--line)] pt-3">
              {capability.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[color:var(--muted)]">
                  <span className="text-[var(--accent)]">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Lab() {
  return (
    <section className="mt-14">
      <SectionHeading index="05" title="Lab" />
      <div className="mt-4">
        {lab.map((item) => (
          <div
            key={item.title}
            className="grid gap-2 border-b border-[color:var(--line)] py-4 md:grid-cols-[8rem_1fr_auto] md:gap-6"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--accent)]">
              {item.label}
            </span>
            <div>
              <div className="font-semibold tracking-[-0.01em]">{item.title}</div>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
                {item.description}
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
              In progress
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-16 scroll-mt-20 bg-[var(--accent)] px-5 py-12 text-white md:px-10">
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/60">
        06 / Contact
      </div>
      <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
        Let&apos;s talk.
      </h2>
      <div className="mt-8 flex flex-col gap-4 border-t border-white/25 pt-5 md:flex-row md:items-end md:justify-between">
        <a
          href={`mailto:${profile.email}`}
          className="break-all text-2xl font-medium underline decoration-white/30 underline-offset-4 hover:decoration-white md:text-4xl"
        >
          {profile.email}
        </a>
        <div className="flex gap-5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/70">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn ↗
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub ↗
          </a>
          <span className="text-white/40">CV ↗</span>
        </div>
      </div>
    </section>
  );
}

function CaseSection({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-baseline gap-3 border-b border-[color:var(--line)] pb-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--accent)]">
          {index}
        </span>
        <h2 className="text-xl font-semibold tracking-[-0.02em]">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function CaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="px-5 py-10 lg:px-12 lg:py-14">
      <div className="mx-auto max-w-[1100px]">
        <Link
          href="?variant=B&view=home#index"
          className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)] hover:text-[var(--accent)]"
        >
          ← Index
        </Link>

        <div className="mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
          Case {project.index} / {project.year}
        </div>
        <h1 className="mt-2 text-[clamp(4rem,10vw,8rem)] font-semibold leading-[0.85] tracking-[-0.06em]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-[color:var(--muted)] md:text-2xl">
          {project.tagline}
        </p>

        <div className="mt-10 grid grid-cols-2 border-t border-[color:var(--ink)] md:grid-cols-4">
          {[
            ["Role", project.role],
            ["Year", project.year],
            ["Stack", project.stack.slice(0, 3).join(" · ")],
            ["Outcome", project.outcome],
          ].map(([label, value], index) => (
            <div
              key={label}
              className={`border-b border-[color:var(--line)] py-3 pr-4 ${index > 0 ? "md:border-l md:pl-4" : ""}`}
            >
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {label}
              </div>
              <div
                className={`mt-1 text-sm font-medium ${label === "Outcome" ? "text-[var(--accent)]" : ""}`}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_250px]">
          <article className="space-y-10">
            <p className="max-w-3xl text-2xl leading-snug tracking-[-0.02em]">{project.summary}</p>

            <CaseSection id="context" index="01" title="Context">
              <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
                {project.context}
              </p>
            </CaseSection>

            <CaseSection id="problem" index="02" title="Problem">
              <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
                {project.problem}
              </p>
              <div className="mt-5 grid gap-2 border-t border-[color:var(--line)] pt-4 sm:grid-cols-2">
                {project.constraints.map((constraint) => (
                  <div key={constraint} className="flex gap-2 text-sm text-[color:var(--muted)]">
                    <span className="text-[var(--accent)]">—</span>
                    {constraint}
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="approach" index="03" title="Approach">
              <div className="space-y-5">
                {project.approach.map((step, index) => (
                  <div key={step.title} className="grid gap-3 border-t border-[color:var(--line)] pt-3 md:grid-cols-[2.5rem_1fr]">
                    <span className="font-mono text-[9px] text-[var(--accent)]">0{index + 1}</span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="architecture" index="04" title="Architecture">
              <div className="flex flex-wrap items-center gap-2 border border-[color:var(--line)] p-3 font-mono text-[9px] uppercase tracking-[0.12em]">
                {["Interface", "API", "Retrieval", "Model", "Eval"].map((node, index) => (
                  <React.Fragment key={node}>
                    {index > 0 && <span className="text-[var(--accent)]">→</span>}
                    <span className="border border-[color:var(--line)] px-3 py-2">{node}</span>
                  </React.Fragment>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="built" index="05" title="What I built">
              <ul className="space-y-2">
                {project.built.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[color:var(--muted)]">
                    <span className="text-[var(--accent)]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection id="results" index="06" title="Results">
              <div className="border-t border-[color:var(--line)]">
                {project.results.map((result) => (
                  <div
                    key={result.label}
                    className="flex items-baseline justify-between gap-4 border-b border-[color:var(--line)] py-2.5"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
                      {result.label}
                    </span>
                    <span className="font-mono text-lg font-medium text-[var(--accent)]">{result.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
                Placeholder metrics for design review
              </p>
            </CaseSection>

            <CaseSection id="reflection" index="07" title="Reflection">
              <blockquote className="border-l-2 border-[var(--accent)] pl-5 text-xl leading-snug">
                “{project.reflection}”
              </blockquote>
            </CaseSection>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="border-t border-[color:var(--ink)] pt-3">
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                Contents
              </div>
              <nav className="mt-3 space-y-1.5 font-mono text-[9px] uppercase tracking-[0.12em]">
                {[
                  ["context", "01 Context"],
                  ["problem", "02 Problem"],
                  ["approach", "03 Approach"],
                  ["architecture", "04 Architecture"],
                  ["built", "05 What I built"],
                  ["results", "06 Results"],
                  ["reflection", "07 Reflection"],
                ].map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="block text-[color:var(--muted)] hover:text-[var(--accent)]">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="mt-6 border-t border-[color:var(--line)] pt-3">
              <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                Stack
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.stack.map((item) => (
                  <span key={item} className="border border-[color:var(--line)] px-1.5 py-1 font-mono text-[8px] uppercase tracking-[0.1em]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-[color:var(--ink)] pt-4">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
              Next
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
              {next.index}
            </span>
          </div>
          <Link href={`?variant=B&view=case&project=${next.slug}`} className="group mt-1 flex items-end justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] group-hover:text-[var(--accent)] md:text-6xl">
              {next.title}
            </h2>
            <span className="pb-1 font-mono text-lg group-hover:text-[var(--accent)]">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

interface VariantBProps {
  view: "home" | "case";
  project: Project;
}

export default function VariantB({ view, project }: VariantBProps) {
  const [askOpen, setAskOpen] = useState(false);

  return (
    <div style={themeStyle} className="min-h-screen bg-[var(--paper)] pb-24 text-[var(--ink)]">
      <Rail onAsk={() => setAskOpen(true)} />
      <MobileHeader onAsk={() => setAskOpen(true)} />

      <div className="lg:ml-[220px]">
        {view === "home" ? (
          <>
            <div className="px-5 py-10 lg:px-12 lg:py-14">
              <div className="mx-auto max-w-[1100px]">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[color:var(--line)] pb-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
                  <span>Portfolio 2026</span>
                  <span>Software AI Engineer</span>
                  <span>{profile.location}</span>
                </div>

                <h1 className="mt-10 max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                  AI products, <span className="text-[var(--accent)]">engineered</span> end to end.
                </h1>

                <div className="mt-8 grid gap-8 border-t border-[color:var(--ink)] pt-6 md:grid-cols-[1fr_320px]">
                  <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
                    {profile.intro}
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={() => setAskOpen(true)}
                      className="flex w-full items-center justify-between border border-[color:var(--ink)] bg-[var(--ink)] px-4 py-3 text-left font-mono text-[9px] uppercase tracking-[0.14em] text-white transition-colors hover:bg-[var(--accent)]"
                    >
                      Ask anything about my work <span className="text-white/50">⌘K</span>
                    </button>
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[color:var(--muted)]">
                      Try “What did he ship with LLMs?” or “Is he available?”
                    </p>
                  </div>
                </div>

                <Index />
                <Profile />
                <Experience />
                <Capabilities />
                <Lab />
              </div>
            </div>
            <Contact />
            <footer className="px-5 py-6 lg:px-12">
              <div className="mx-auto flex max-w-[1100px] flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)] md:flex-row md:justify-between">
                <span>© 2026 {profile.name}</span>
                <span>Prototype · placeholder copy</span>
                <span>EN / IT</span>
              </div>
            </footer>
          </>
        ) : (
          <CaseStudy project={project} />
        )}
      </div>

      <AskPanel
        open={askOpen}
        onClose={() => setAskOpen(false)}
        mode="palette"
        theme={askTheme}
        projectHref={(slug) => `?variant=B&view=case&project=${slug}`}
      />
    </div>
  );
}
