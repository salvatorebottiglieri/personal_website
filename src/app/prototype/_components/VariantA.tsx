"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Artwork } from "./Artwork";
import { AskPanel, type AskTheme } from "./AskPanel";
import {
  capabilities,
  experience,
  profile,
  projects,
  type Project,
} from "./data";

const themeStyle = {
  "--paper": "#F4F1EA",
  "--ink": "#141414",
  "--muted": "#6B655B",
  "--line": "#D8D2C6",
  "--signal": "#FF4D00",
} as React.CSSProperties;

const askTheme: AskTheme = {
  panel: "#F4F1EA",
  text: "#141414",
  muted: "#6B655B",
  line: "#D8D2C6",
  accent: "#FF4D00",
  accentText: "#FFFFFF",
};

function SectionLabel({
  index,
  children,
  dark = false,
}: {
  index: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em]">
      <span className="text-[var(--signal)]">{index}</span>
      <span className={dark ? "text-white/40" : "text-[color:var(--muted)]"}>{children}</span>
    </div>
  );
}

function Header({ onAsk }: { onAsk: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3 lg:px-10">
        <Link href="?variant=A&view=home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center bg-[var(--ink)] font-mono text-[10px] tracking-widest text-[var(--paper)]">
            SB
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] sm:block">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[0.18em] md:flex">
          <Link href="?variant=A&view=home#work" className="hover:text-[var(--signal)]">
            Work
          </Link>
          <Link href="?variant=A&view=home#about" className="hover:text-[var(--signal)]">
            About
          </Link>
          <Link href="?variant=A&view=home#contact" className="hover:text-[var(--signal)]">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
          <span className="hidden text-[color:var(--muted)] lg:block">EN / IT</span>
          <button
            type="button"
            onClick={onAsk}
            className="flex items-center gap-2 border border-[color:var(--ink)] px-3 py-1.5 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          >
            <span className="h-1.5 w-1.5 bg-[var(--signal)]" />
            Ask AI
          </button>
          <span
            className="hidden border border-[color:var(--line)] px-3 py-1.5 text-[color:var(--muted)] sm:block"
            title="Prototype link"
          >
            CV ↗
          </span>
        </div>
      </div>
    </header>
  );
}

function Hero({ onAsk }: { onAsk: () => void }) {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 lg:grid-cols-12 lg:px-10 lg:py-20">
        <div className="lg:col-span-8">
          <SectionLabel index="01">Introduction</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.03em]">
            I build AI products that <em className="text-[var(--signal)]">ship.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)] md:text-xl">
            {profile.intro}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="?variant=A&view=home#work"
              className="bg-[var(--ink)] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--paper)] transition-colors hover:bg-[var(--signal)]"
            >
              See selected work
            </Link>
            <span
              className="border-b border-[color:var(--ink)] pb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]"
              title="Prototype link"
            >
              Download CV ↗
            </span>
            <button
              type="button"
              onClick={onAsk}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--signal)] underline underline-offset-4"
            >
              Or ask my AI
            </button>
          </div>
          <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            {profile.availability}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="border border-[color:var(--ink)] bg-[var(--ink)] p-5 text-[var(--paper)]">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
              <span>System map</span>
              <span>Fig. 01</span>
            </div>
            <div className="mt-8 space-y-4">
              {["Interface", "Orchestration", "Retrieval", "Evaluation", "Infrastructure"].map(
                (label, index) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="font-mono text-[9px] text-[var(--signal)]">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/20" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                      {label}
                    </span>
                  </div>
                ),
              )}
            </div>
            <p className="mt-8 border-t border-white/15 pt-4 text-xs leading-relaxed text-white/60">
              The product is the whole path: the interface people touch, the model that
              reasons, and the system that keeps it honest.
            </p>
          </div>
          <div className="mt-4 border border-[color:var(--line)] p-4">
            <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
              <span>Currently</span>
              <span className="text-[var(--signal)]">●</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              Independent AI engineer, working with product teams that need to move from
              prototype to production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityBand() {
  const items = ["LLM applications", "RAG", "Agents", "Evaluation", "MLOps", "Product engineering"];
  return (
    <div className="border-b border-[color:var(--line)] bg-[var(--ink)] px-5 py-3 text-[var(--paper)] lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.18em]">
        {items.map((item, index) => (
          <React.Fragment key={item}>
            {index > 0 && <span className="text-[var(--signal)]">·</span>}
            <span>{item}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function WorkIndex() {
  return (
    <section id="work" className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10 lg:py-20">
        <div className="flex items-end justify-between gap-6">
          <SectionLabel index="02">Selected work</SectionLabel>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
            2024 — 2025
          </span>
        </div>

        <div className="mt-8 border-t border-[color:var(--line)]">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`?variant=A&view=case&project=${project.slug}`}
              className="group grid gap-4 border-b border-[color:var(--line)] px-0 py-6 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] md:-mx-4 md:grid-cols-[3rem_1fr_auto] md:items-start md:px-4"
            >
              <span className="font-mono text-[10px] text-[color:var(--muted)] group-hover:text-[var(--signal)]">
                {project.index}
              </span>
              <div>
                <h3 className="font-serif text-3xl leading-none md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-[color:var(--muted)] group-hover:text-white/60">
                  {project.tagline}
                </p>
              </div>
              <div className="flex items-start justify-between gap-6 font-mono text-[9px] uppercase tracking-[0.16em] md:block md:text-right">
                <div className="text-[color:var(--muted)] group-hover:text-white/50">
                  {project.role} · {project.year}
                </div>
                <div className="mt-1 text-[var(--signal)]">{project.outcome}</div>
                <div className="mt-2 text-[var(--ink)] group-hover:text-[var(--paper)]">↗</div>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
          Placeholder projects for design review
        </p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="about" className="border-b border-[color:var(--line)]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-3">
          <SectionLabel index="03">Approach</SectionLabel>
          <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
            A few things I believe
          </p>
        </div>

        <div className="lg:col-span-9">
          <p className="max-w-4xl font-serif text-3xl leading-tight md:text-5xl">
            <span className="float-left mr-3 mt-1 text-7xl leading-[0.7] text-[var(--signal)]">
              I
            </span>
            care about the boring parts that make AI useful: permissions, evaluation,
            latency, cost, and the handoff to a human.
          </p>

          <div className="mt-12 grid gap-8 border-t border-[color:var(--line)] pt-8 md:grid-cols-2">
            {profile.about.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-[color:var(--muted)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {profile.principles.map((principle) => (
              <div key={principle.title} className="border-t border-[color:var(--ink)] pt-4">
                <h4 className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  {principle.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <SectionLabel index="04">Experience</SectionLabel>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
            CV available on request
          </span>
        </div>

        <div className="mt-8 border-t border-[color:var(--line)]">
          {experience.map((item) => (
            <div
              key={item.period}
              className="grid gap-2 border-b border-[color:var(--line)] py-5 md:grid-cols-[10rem_1fr_auto] md:items-baseline"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                {item.period}
              </span>
              <div>
                <span className="font-medium">{item.role}</span>
                <span className="text-[color:var(--muted)]"> — {item.company}</span>
                <p className="mt-1 max-w-2xl text-sm text-[color:var(--muted)]">
                  {item.description}
                </p>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
        <SectionLabel index="05">Capabilities</SectionLabel>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {capabilities.map((capability) => (
            <div key={capability.title}>
              <h3 className="border-t border-[color:var(--ink)] pt-4 font-serif text-2xl">
                {capability.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {capability.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-[color:var(--muted)]"
                  >
                    <span className="text-[var(--signal)]">→</span>
                    {item}
                  </li>
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
    <section id="contact" className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <SectionLabel index="06" dark>
            Contact
          </SectionLabel>
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
            {profile.location}
          </span>
        </div>

        <h2 className="mt-8 max-w-4xl font-serif text-5xl leading-[0.95] md:text-7xl">
          Let&apos;s build something that <em className="text-[var(--signal)]">ships.</em>
        </h2>

        <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block break-all font-serif text-2xl underline decoration-white/20 underline-offset-4 hover:text-[var(--signal)] md:text-4xl"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-wrap items-start gap-6 md:justify-end">
            {[
              { label: "LinkedIn", href: profile.linkedin },
              { label: "GitHub", href: profile.github },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60 underline underline-offset-4 hover:text-[var(--signal)]"
              >
                {link.label} ↗
              </a>
            ))}
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
              CV ↗
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--ink)] px-5 pb-8 text-[var(--paper)] lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-white/10 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 md:flex-row md:items-center md:justify-between">
        <span>© 2026 {profile.name}</span>
        <span>Designed &amp; built by Salvatore</span>
        <span>EN / IT</span>
      </div>
    </footer>
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
    <section id={id}>
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--signal)]">
        {index} — {title}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function CaseStudy({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <div className="mx-auto max-w-[1440px] px-5 pt-8 lg:px-10">
        <Link
          href="?variant=A&view=home#work"
          className="font-mono text-[10px] uppercase tracking-[0.16em] text-[color:var(--muted)] hover:text-[var(--signal)]"
        >
          ← Selected work
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--signal)]">
              Case study {project.index}
            </div>
            <h1 className="mt-4 font-serif text-[clamp(4rem,10vw,8rem)] leading-[0.85] tracking-[-0.03em]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-[color:var(--muted)] md:text-2xl">
              {project.tagline}
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="border-t border-[color:var(--ink)] pt-3 font-mono text-[9px] uppercase tracking-[0.14em]">
              {[
                { label: "Role", value: project.role },
                { label: "Year", value: project.year },
                { label: "Outcome", value: project.outcome, accent: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between gap-4 border-b border-[color:var(--line)] py-2"
                >
                  <span className="text-[color:var(--muted)]">{row.label}</span>
                  <span className={row.accent ? "text-[var(--signal)]" : ""}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-[color:var(--line)] bg-white/30 p-4">
          <Artwork
            kind={project.artwork}
            className="h-auto w-full"
            ink="#141414"
            accent="#FF4D00"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 lg:grid-cols-[220px_1fr] lg:px-10 lg:py-24">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
            Contents
          </div>
          <nav className="mt-4 space-y-2 font-mono text-[10px] uppercase tracking-[0.14em]">
            {["Context", "Problem", "Approach", "What I built", "Results", "Reflection"].map(
              (item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-[color:var(--muted)] hover:text-[var(--signal)]"
                >
                  0{index + 1} — {item}
                </a>
              ),
            )}
          </nav>
          <div className="mt-8 border-t border-[color:var(--line)] pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
            <div>Stack</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-[color:var(--line)] px-2 py-1 text-[9px] text-[color:var(--ink)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <article className="max-w-3xl space-y-14">
          <section>
            <p className="font-serif text-2xl leading-snug md:text-3xl">
              {project.summary}
            </p>
          </section>

          <CaseSection id="context" index="01" title="Context">
            <h2 className="font-serif text-3xl md:text-4xl">The starting point</h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
              {project.context}
            </p>
          </CaseSection>

          <CaseSection id="problem" index="02" title="Problem">
            <h2 className="font-serif text-3xl md:text-4xl">What was actually broken</h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
              {project.problem}
            </p>
            <div className="mt-6 grid gap-3 border-t border-[color:var(--line)] pt-5 sm:grid-cols-2">
              {project.constraints.map((constraint) => (
                <div key={constraint} className="flex gap-2 text-sm text-[color:var(--muted)]">
                  <span className="text-[var(--signal)]">—</span>
                  {constraint}
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="approach" index="03" title="Approach">
            <h2 className="font-serif text-3xl md:text-4xl">How I approached it</h2>
            <div className="mt-6 space-y-6">
              {project.approach.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-3 border-t border-[color:var(--line)] pt-4 md:grid-cols-[3rem_1fr]"
                >
                  <span className="font-mono text-[10px] text-[var(--signal)]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[color:var(--muted)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="what-i-built" index="04" title="What I built">
            <h2 className="font-serif text-3xl md:text-4xl">The actual work</h2>
            <ul className="mt-4 space-y-3">
              {project.built.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[color:var(--muted)]">
                  <span className="text-[var(--signal)]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection id="results" index="05" title="Results">
            <h2 className="font-serif text-3xl md:text-4xl">What changed</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="border-t border-[color:var(--ink)] pt-3"
                >
                  <div className="font-serif text-4xl leading-none md:text-5xl">
                    {result.value}
                  </div>
                  <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
              Placeholder metrics for design review
            </p>
          </CaseSection>

          <CaseSection id="reflection" index="06" title="Reflection">
            <blockquote className="border-l-2 border-[var(--signal)] pl-6 font-serif text-2xl leading-snug md:text-4xl">
              “{project.reflection}”
            </blockquote>
          </CaseSection>
        </article>
      </div>

      <div className="border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Next case study
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              {next.index}
            </span>
          </div>
          <Link
            href={`?variant=A&view=case&project=${next.slug}`}
            className="group mt-4 flex items-end justify-between gap-6 border-t border-[color:var(--ink)] pt-6"
          >
            <h2 className="font-serif text-5xl group-hover:text-[var(--signal)] md:text-7xl">
              {next.title}
            </h2>
            <span className="pb-2 font-mono text-xl group-hover:text-[var(--signal)]">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

interface VariantAProps {
  view: "home" | "case";
  project: Project;
}

export default function VariantA({ view, project }: VariantAProps) {
  const [askOpen, setAskOpen] = useState(false);

  return (
    <div
      style={themeStyle}
      className="min-h-screen bg-[var(--paper)] pb-24 text-[var(--ink)] selection:bg-[var(--signal)] selection:text-white"
    >
      <Header onAsk={() => setAskOpen(true)} />

      {view === "home" ? (
        <>
          <Hero onAsk={() => setAskOpen(true)} />
          <CapabilityBand />
          <WorkIndex />
          <Approach />
          <Experience />
          <Capabilities />
          <Contact />
          <Footer />
        </>
      ) : (
        <CaseStudy project={project} />
      )}

      <AskPanel
        open={askOpen}
        onClose={() => setAskOpen(false)}
        mode="drawer"
        theme={askTheme}
        projectHref={(slug) => `?variant=A&view=case&project=${slug}`}
      />
    </div>
  );
}
