"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AskPanel, type AskTheme } from "./AskPanel";
import { SystemDiagram } from "./SystemDiagram";
import {
  experience,
  lab,
  profile,
  projects,
  type Project,
} from "./data";

const themeStyle = {
  "--bg": "#EEF1F0",
  "--surface": "#F7F8F7",
  "--fg": "#1B1F1E",
  "--muted": "#5F6865",
  "--border": "#C9D0CD",
  "--border-strong": "#7C8783",
  "--accent": "#A63D2F",
  "--accent-hover": "#8F3226",
  "--accent-fg": "#FFFFFF",
  "--accent-soft": "#F3E6E3",
  "--success": "#2F6B4F",
  "--warning": "#7A5316",
  "--error": "#8C1D18",
  "--on-dark-muted": "#B9C0BD",
  "--on-dark-faint": "#8E9793",
  "--lab-bg": "#141817",
  "--lab-surface": "#1C211F",
  "--lab-fg": "#E8EBE9",
  "--lab-muted": "#A7B0AC",
  "--lab-border": "#2A302E",
  "--lab-accent": "#D97766",
} as React.CSSProperties;

const askTheme: AskTheme = {
  panel: "#F7F8F7",
  text: "#1B1F1E",
  muted: "#5F6865",
  line: "#C9D0CD",
  accent: "#A63D2F",
  accentText: "#FFFFFF",
};

const matrix = [
  {
    area: "AI applications",
    what: "LLM applications, retrieval, agents, evaluation.",
    artifacts: "RAG pipeline, eval harness, guardrails.",
    tools: "Python, FastAPI, pgvector, Gemini.",
  },
  {
    area: "ML systems",
    what: "Real-time inference, feature pipelines, model rollout.",
    artifacts: "Streaming service, feature store, monitoring.",
    tools: "Kafka, PyTorch, Kubernetes, GCP.",
  },
  {
    area: "Product engineering",
    what: "Interfaces, APIs, data models, deployment.",
    artifacts: "Next.js app, typed API, design system.",
    tools: "TypeScript, Next.js, Postgres, AWS.",
  },
];

function StatusMark({ status }: { status: string }) {
  const color = status === "In production" ? "var(--success)" : "var(--warning)";
  return (
    <span className="inline-flex items-center gap-2 text-[13px] text-[var(--muted)]">
      <span className="h-1.5 w-1.5" style={{ backgroundColor: color }} />
      {status}
    </span>
  );
}

function SectionHeader({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[var(--border-strong)] pb-3">
      <h2 className="font-plex-serif text-3xl leading-tight md:text-4xl">{title}</h2>
      {meta && (
        <p className="font-plex-mono text-[12px] text-[var(--muted)]">{meta}</p>
      )}
    </div>
  );
}

function MiniStack() {
  const steps = ["Sources", "Retrieval", "Model", "Answer"];
  return (
    <div className="relative pl-5">
      <span className="absolute bottom-2 left-[2px] top-2 w-px bg-[var(--border)]" />
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={step} className="relative flex items-center gap-3">
            <span
              className="absolute -left-5 h-1.5 w-1.5"
              style={{
                backgroundColor:
                  index === 1 ? "var(--accent)" : "var(--border-strong)",
              }}
            />
            <span
              className={`flex-1 border px-2.5 py-1.5 font-plex-mono text-[12px] ${
                index === 1
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--muted)]"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Header({ onAsk }: { onAsk: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-5 py-4 lg:px-10">
        <Link href="?variant=D&view=home" className="flex items-baseline gap-3">
          <span className="font-plex-serif text-xl leading-none tracking-[-0.01em]">
            {profile.name}
          </span>
          <span className="hidden font-plex-mono text-[12px] text-[var(--muted)] sm:inline">
            Software AI Engineer
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="?variant=D&view=home#systems" className="hover:text-[var(--accent)]">
            Systems
          </Link>
          <Link href="?variant=D&view=home#experience" className="hover:text-[var(--accent)]">
            Experience
          </Link>
          <Link href="?variant=D&view=home#lab" className="hover:text-[var(--accent)]">
            Lab
          </Link>
          <Link href="?variant=D&view=home#contact" className="hover:text-[var(--accent)]">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <span className="hidden text-[var(--muted)] sm:inline">EN / IT</span>
          <button
            type="button"
            onClick={onAsk}
            className="underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
          >
            Ask
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="hidden border border-[var(--fg)] px-3 py-2 font-medium text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)] sm:inline-block"
          >
            Start a conversation
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="underline decoration-[var(--border-strong)] underline-offset-4 sm:hidden"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ onAsk }: { onAsk: () => void }) {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <p className="font-plex-mono text-[12px] text-[var(--muted)]">
            Software AI Engineer. Italy / Remote.
          </p>
          <h1 className="mt-5 max-w-3xl font-plex-serif text-[clamp(2.9rem,6vw,4.3rem)] leading-[1.02] tracking-[-0.02em]">
            AI systems, shipped.
          </h1>
          <p className="mt-6 max-w-xl text-[1.25rem] leading-[1.55] text-[var(--muted)]">
            I design and engineer AI-native products: LLM applications, retrieval
            systems, and the infrastructure that keeps them reliable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="?variant=D&view=home#systems"
              className="border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[var(--accent-fg)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              See selected systems
            </Link>
            <span
              className="border border-[var(--border-strong)] px-4 py-2.5 text-sm font-medium"
              title="Prototype link"
            >
              Download CV
            </span>
            <button
              type="button"
              onClick={onAsk}
              className="text-sm underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
            >
              Ask about the work
            </button>
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Open to senior AI engineering roles and selected consulting. I work with
            teams that need to move from prototype to production without losing the
            plot.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-plex-mono text-[12px] text-[var(--muted)]">
                  Selected system
                </p>
                <p className="mt-1 font-plex-serif text-2xl">Atlas</p>
              </div>
              <StatusMark status="In production" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              A grounded support assistant over 40k internal documents, with citations
              and a human handoff.
            </p>
            <div className="mt-5 border-t border-[var(--border)] pt-4">
              <MiniStack />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-4">
              {[
                ["−38%", "time to resolution"],
                ["96%", "grounded answers"],
                ["2.1s", "p95 latency"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-plex-mono text-lg tabular-nums">{value}</div>
                  <div className="mt-1 text-[12px] leading-snug text-[var(--muted)]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="?variant=D&view=case&project=atlas"
              className="mt-5 inline-block text-sm font-medium underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
            >
              Read the decision log
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Register() {
  return (
    <section id="systems" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title="Selected systems" meta="3 systems, 2024–2025" />

        <div className="mt-8 border-t border-[var(--border-strong)]">
          <div className="hidden grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1fr)_5rem] gap-4 border-b border-[var(--border)] py-2 font-plex-mono text-[12px] text-[var(--muted)] md:grid">
            <span>System</span>
            <span>Layer</span>
            <span>Status</span>
            <span>Metric</span>
            <span className="text-right">Year</span>
          </div>

          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`?variant=D&view=case&project=${project.slug}`}
              className="group grid gap-3 border-b border-[var(--border)] py-5 transition-colors hover:bg-[var(--surface)] md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1fr)_5rem] md:items-baseline md:gap-4 md:px-2"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-plex-serif text-2xl transition-colors group-hover:text-[var(--accent)]">
                    {project.title}
                  </span>
                  <span className="font-plex-mono text-[12px] text-[var(--muted)] md:hidden">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                  {project.decision}
                </p>
              </div>

              <span className="text-sm text-[var(--muted)]">
                <span className="md:hidden">Layer: </span>
                {project.layer}
              </span>

              <span className="text-sm text-[var(--muted)]">
                <span className="md:hidden">Status: </span>
                <StatusMark status={project.status} />
              </span>

              <span className="font-plex-mono text-sm tabular-nums text-[var(--accent)]">
                <span className="font-plex-sans text-[var(--muted)] md:hidden">
                  Metric:{" "}
                </span>
                {project.outcome}
              </span>

              <span className="hidden text-right text-sm text-[var(--muted)] group-hover:text-[var(--accent)] md:block">
                Read log
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-3 text-[12px] text-[var(--muted)]">
          Placeholder projects for design review. The real register will use verified
          metrics only.
        </p>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title="What I do" meta="From interface to infrastructure" />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <p className="max-w-md font-plex-serif text-3xl leading-[1.2]">
            I build the parts that make AI useful in production.
          </p>

          <div className="border-t border-[var(--border-strong)]">
            <div className="hidden grid-cols-[1fr_1.3fr_1.1fr] gap-4 border-b border-[var(--border)] py-2 font-plex-mono text-[12px] text-[var(--muted)] md:grid">
              <span>Area</span>
              <span>What I build</span>
              <span>Typical tools</span>
            </div>
            {matrix.map((row) => (
              <div
                key={row.area}
                className="grid gap-2 border-b border-[var(--border)] py-4 md:grid-cols-[1fr_1.3fr_1.1fr] md:gap-4"
              >
                <h3 className="font-medium">{row.area}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {row.what}
                </p>
                <div>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {row.tools}
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-[var(--muted)]">
                    {row.artifacts}
                  </p>
                </div>
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
    <section id="experience" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title="Experience" meta="CV available on request" />
        <div className="mt-8 border-t border-[var(--border-strong)]">
          {experience.map((item) => (
            <div
              key={item.period}
              className="grid gap-2 border-b border-[var(--border)] py-4 md:grid-cols-[9rem_1fr_1.3fr] md:gap-6"
            >
              <span className="font-plex-mono text-[12px] text-[var(--muted)]">
                {item.period}
              </span>
              <div>
                <div className="font-medium">{item.role}</div>
                <div className="text-sm text-[var(--muted)]">{item.company}</div>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-[var(--border)]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div>
          <SectionHeader title="About" meta={profile.location} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            {profile.about[0]}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            {profile.about[1]}
          </p>
        </div>

        <div>
          <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <dl className="divide-y divide-[var(--border)] text-sm">
              {[
                ["Based", profile.location],
                ["Focus", "AI applications, ML systems, product engineering"],
                ["Availability", "Senior roles and selected consulting"],
                ["Languages", "English, Italian"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
                  <dt className="text-[var(--muted)]">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-6 space-y-4">
            {profile.principles.map((principle) => (
              <li key={principle.title} className="border-t border-[var(--border)] pt-3">
                <h3 className="font-medium">{principle.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                  {principle.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Lab({ onAsk }: { onAsk: () => void }) {
  return (
    <section id="lab" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title="Lab" meta="Prototypes and internal tools" />

        <div className="mt-8 bg-[var(--lab-bg)] p-6 text-[var(--lab-fg)] md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--lab-border)] pb-4">
            <p className="font-plex-mono text-[12px] text-[var(--lab-muted)]">
              Operator console
            </p>
            <button
              type="button"
              onClick={onAsk}
              className="border border-[var(--lab-accent)] px-3 py-1.5 text-sm text-[var(--lab-accent)] transition-colors hover:bg-[var(--lab-accent)] hover:text-[var(--lab-bg)]"
            >
              Ask the operator
            </button>
          </div>

          <div className="mt-6">
            {lab.map((item) => (
              <div
                key={item.title}
                className="grid gap-2 border-b border-[var(--lab-border)] py-4 last:border-b-0 md:grid-cols-[10rem_1fr] md:gap-6"
              >
                <span className="font-plex-mono text-[12px] text-[var(--lab-accent)]">
                  {item.label}
                </span>
                <div>
                  <h3 className="font-plex-serif text-2xl">{item.title}</h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[var(--lab-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[12px] leading-relaxed text-[var(--lab-muted)]">
            The assistant answers from a curated knowledge base. It is a prototype, not
            a general-purpose chatbot.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[var(--fg)] text-[var(--bg)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-24">
        <p className="font-plex-mono text-[12px] text-[var(--on-dark-faint)]">
          Contact
        </p>
        <h2 className="mt-4 max-w-2xl font-plex-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.1]">
          Have a system that needs to ship?
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--on-dark-muted)]">
          Tell me what you are building, what is stuck, and what done looks like. I will
          reply with a concrete next step.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="border border-[var(--bg)] bg-[var(--bg)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] transition-colors hover:bg-[var(--on-dark-muted)]"
          >
            Email me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline decoration-[var(--on-dark-faint)] underline-offset-4 hover:decoration-[var(--bg)]"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline decoration-[var(--on-dark-faint)] underline-offset-4 hover:decoration-[var(--bg)]"
          >
            GitHub
          </a>
          <span className="text-sm text-[var(--on-dark-faint)]">CV on request</span>
        </div>
        <p className="mt-8 font-plex-mono text-[12px] text-[var(--on-dark-faint)]">
          {profile.email}
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-6 lg:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 text-[12px] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <span>© 2026 {profile.name}</span>
        <span>Prototype. Placeholder copy and metrics.</span>
        <span>English / Italiano</span>
      </div>
    </footer>
  );
}

function CaseSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-plex-serif text-2xl leading-tight">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function CaseStudy({ project, onAsk }: { project: Project; onAsk: () => void }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const diagramKind = project.slug as "atlas" | "signal" | "canvas";

  return (
    <main>
      <div className="mx-auto max-w-[1280px] px-5 pt-10 lg:px-10">
        <Link
          href="?variant=D&view=home#systems"
          className="text-sm text-[var(--muted)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
        >
          Selected systems
        </Link>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-plex-mono text-[12px] text-[var(--muted)]">
              Decision log
            </p>
            <h1 className="mt-2 font-plex-serif text-[clamp(3rem,7vw,5rem)] leading-[0.95] tracking-[-0.02em]">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-[var(--muted)]">
              {project.tagline}
            </p>
          </div>
          <StatusMark status={project.status} />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[var(--border)] py-3 md:grid-cols-4">
          {[
            ["Role", project.role],
            ["Year", project.year],
            ["Layer", project.layer],
            ["Outcome", project.outcome],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="font-plex-mono text-[12px] text-[var(--muted)]">
                {label}
              </div>
              <div className="mt-1 text-sm">{value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[var(--border)] bg-[var(--surface)] p-4 md:p-6">
          <div className="lg:hidden">
            <ol className="space-y-2">
              {project.systemPath.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="w-5 font-plex-mono text-[12px] tabular-nums text-[var(--muted)]">
                    {index + 1}
                  </span>
                  <span className="flex-1 border border-[var(--border)] px-2.5 py-1.5 text-sm">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="hidden lg:block">
            <SystemDiagram kind={diagramKind} className="h-auto w-full" />
          </div>
          <p className="mt-3 font-plex-mono text-[12px] text-[var(--muted)]">
            Figure 1. {project.title} system path. Placeholder schematic for design
            review.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 lg:grid-cols-[220px_1fr] lg:px-10 lg:py-24">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-plex-mono text-[12px] text-[var(--muted)]">
            Decision log
          </p>
          <nav className="mt-3 space-y-2 text-sm">
            {[
              ["context", "Context"],
              ["constraint", "Constraint"],
              ["decision", "Decision"],
              ["evidence", "Evidence"],
              ["consequence", "Consequence"],
              ["change", "What I would change"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="block text-[var(--muted)] underline decoration-transparent underline-offset-4 hover:text-[var(--accent)] hover:decoration-[var(--border-strong)]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-8 border-t border-[var(--border)] pt-4">
            <p className="font-plex-mono text-[12px] text-[var(--muted)]">Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--border)] px-2 py-1 text-[12px] text-[var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={onAsk}
            className="mt-6 text-sm underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
          >
            Ask about this system
          </button>
        </aside>

        <article className="max-w-[68ch] space-y-12">
          <p className="font-plex-serif text-2xl leading-[1.35]">{project.summary}</p>

          <CaseSection id="context" title="Context">
            <p className="text-base leading-relaxed text-[var(--muted)]">
              {project.context}
            </p>
          </CaseSection>

          <CaseSection id="constraint" title="Constraint">
            <p className="text-base leading-relaxed text-[var(--muted)]">
              {project.problem}
            </p>
            <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
              {project.constraints.map((constraint) => (
                <li
                  key={constraint}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-[var(--accent)]" />
                  {constraint}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection id="decision" title="Decision">
            <div className="space-y-5">
              {project.approach.map((step, index) => (
                <div
                  key={step.title}
                  className="border-t border-[var(--border)] pt-4"
                >
                  <div className="font-plex-mono text-[12px] text-[var(--muted)]">
                    Decision {index + 1}
                  </div>
                  <h3 className="mt-1 font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="evidence" title="Evidence">
            <ul className="space-y-2">
              {project.built.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[var(--border-strong)]">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] py-2.5"
                >
                  <span className="text-sm text-[var(--muted)]">{result.label}</span>
                  <span className="font-plex-mono text-lg tabular-nums text-[var(--accent)]">
                    {result.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[12px] text-[var(--muted)]">
              Placeholder metrics for design review.
            </p>
          </CaseSection>

          <CaseSection id="consequence" title="Consequence">
            <p className="text-base leading-relaxed text-[var(--muted)]">
              {project.consequence}
            </p>
          </CaseSection>

          <CaseSection id="change" title="What I would change">
            <p className="font-plex-serif text-xl leading-[1.4] text-[var(--fg)]">
              {project.reflection}
            </p>
          </CaseSection>
        </article>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1280px] px-5 py-12 lg:px-10">
          <p className="font-plex-mono text-[12px] text-[var(--muted)]">
            Next system
          </p>
          <Link
            href={`?variant=D&view=case&project=${next.slug}`}
            className="group mt-2 flex flex-wrap items-baseline justify-between gap-4"
          >
            <h2 className="font-plex-serif text-4xl transition-colors group-hover:text-[var(--accent)] md:text-5xl">
              {next.title}
            </h2>
            <span className="text-sm text-[var(--muted)] group-hover:text-[var(--accent)]">
              Read the decision log
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

interface VariantDProps {
  view: "home" | "case";
  project: Project;
}

export default function VariantD({ view, project }: VariantDProps) {
  const [askOpen, setAskOpen] = useState(false);

  return (
    <div
      style={themeStyle}
      className="min-h-screen bg-[var(--bg)] pb-24 font-plex-sans text-[var(--fg)] selection:bg-[var(--accent)] selection:text-[var(--accent-fg)]"
    >
      <Header onAsk={() => setAskOpen(true)} />

      {view === "home" ? (
        <>
          <Hero onAsk={() => setAskOpen(true)} />
          <Register />
          <WhatIDo />
          <Experience />
          <About />
          <Lab onAsk={() => setAskOpen(true)} />
          <Contact />
          <Footer />
        </>
      ) : (
        <CaseStudy project={project} onAsk={() => setAskOpen(true)} />
      )}

      <AskPanel
        open={askOpen}
        onClose={() => setAskOpen(false)}
        mode="drawer"
        theme={askTheme}
        projectHref={(slug) => `?variant=D&view=case&project=${slug}`}
      />
    </div>
  );
}
