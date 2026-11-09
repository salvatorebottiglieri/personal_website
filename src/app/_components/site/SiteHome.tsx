import Link from "next/link";
import type { Lang, SiteContent, StatusKey } from "@/app/_data/siteTypes";

function statusColor(statusKey: StatusKey) {
  if (statusKey === "production") return "var(--success)";
  if (statusKey === "open-source") return "var(--accent)";
  return "var(--warning)";
}

function StatusMark({ project }: { project: { status: string; statusKey: StatusKey } }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] text-[var(--muted)]">
      <span
        className="h-1.5 w-1.5"
        style={{ backgroundColor: statusColor(project.statusKey) }}
      />
      {project.status}
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

function MiniStack({ steps }: { steps: string[] }) {
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

function Hero({
  content,
  lang,
}: {
  content: SiteContent;
  lang: Lang;
}) {
  const base = lang === "en" ? "" : "/it";
  const home = base || "/";
  const selected = content.projects[0];
  const ui = content.ui;

  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <p className="font-plex-mono text-[12px] text-[var(--muted)]">
            {content.profile.role}. {content.profile.location}.
          </p>
          <h1 className="mt-5 max-w-3xl font-plex-serif text-[clamp(2.9rem,6vw,4.3rem)] leading-[1.02] tracking-[-0.02em]">
            {content.profile.headline}
          </h1>
          <p className="mt-6 max-w-xl text-[1.25rem] leading-[1.55] text-[var(--muted)]">
            {content.profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`${home}#systems`}
              className="border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-[var(--accent-fg)] transition-colors hover:bg-[var(--accent-hover)]"
            >
              {ui.hero.seeSystems}
            </Link>
            <a
              href={content.profile.cv}
              download
              className="border border-[var(--border-strong)] px-4 py-2.5 text-sm font-medium transition-colors hover:border-[var(--fg)]"
            >
              {ui.hero.downloadCv}
            </a>
          </div>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            {content.profile.availability}
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-plex-mono text-[12px] text-[var(--muted)]">
                  {ui.hero.selectedSystem}
                </p>
                <p className="mt-1 font-plex-serif text-2xl">{selected.title}</p>
              </div>
              <StatusMark project={selected} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {selected.summary}
            </p>
            <div className="mt-5 border-t border-[var(--border)] pt-4">
              <MiniStack
                steps={selected.flow.steps.map((step) => step.label).slice(0, 4)}
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 border-t border-[var(--border)] pt-4">
              {selected.heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className="font-plex-mono text-lg tabular-nums">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-[12px] leading-snug text-[var(--muted)]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={`${base}/work/${selected.slug}`}
              className="mt-5 inline-block text-sm font-medium underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
            >
              {ui.hero.readLog}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Register({ content, lang }: { content: SiteContent; lang: Lang }) {
  const base = lang === "en" ? "" : "/it";
  const ui = content.ui;

  return (
    <section id="systems" className="border-b border-[var(--border)] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title={ui.register.title} meta={ui.register.meta} />

        <div className="mt-8 border-t border-[var(--border-strong)]">
          <div className="hidden grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1fr)_5rem] gap-4 border-b border-[var(--border)] py-2 font-plex-mono text-[12px] text-[var(--muted)] md:grid">
            <span>{ui.register.system}</span>
            <span>{ui.register.layer}</span>
            <span>{ui.register.status}</span>
            <span>{ui.register.metric}</span>
            <span className="text-right">{ui.register.year}</span>
          </div>

          {content.projects.map((project) => (
            <Link
              key={project.slug}
              href={`${base}/work/${project.slug}`}
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
                <span className="md:hidden">{ui.register.layer}: </span>
                {project.layer}
              </span>

              <span className="text-sm text-[var(--muted)]">
                <span className="md:hidden">{ui.register.status}: </span>
                <StatusMark project={project} />
              </span>

              <span className="font-plex-mono text-sm tabular-nums text-[var(--accent)]">
                <span className="font-plex-sans text-[var(--muted)] md:hidden">
                  {ui.register.metric}:{" "}
                </span>
                {project.outcome}
              </span>

              <span className="hidden text-right text-sm text-[var(--muted)] group-hover:text-[var(--accent)] md:block">
                {ui.register.readLog}
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-3 text-[12px] text-[var(--muted)]">{ui.register.note}</p>
      </div>
    </section>
  );
}

function WhatIDo({ content }: { content: SiteContent }) {
  const ui = content.ui;
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title={ui.what.title} meta={ui.what.meta} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <p className="max-w-md font-plex-serif text-3xl leading-[1.2]">
            {ui.what.intro}
          </p>

          <div className="border-t border-[var(--border-strong)]">
            <div className="hidden grid-cols-[1fr_1.3fr_1.1fr] gap-4 border-b border-[var(--border)] py-2 font-plex-mono text-[12px] text-[var(--muted)] md:grid">
              <span>{ui.what.area}</span>
              <span>{ui.what.build}</span>
              <span>{ui.what.tools}</span>
            </div>
            {content.matrix.map((row) => (
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

function Experience({ content }: { content: SiteContent }) {
  const ui = content.ui;
  return (
    <section id="experience" className="border-b border-[var(--border)] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title={ui.experience.title} meta={ui.experience.meta} />
        <div className="mt-8 border-t border-[var(--border-strong)]">
          {content.experience.map((item) => (
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

        <div className="mt-6 border-t border-[var(--border)] pt-4">
          <p className="font-plex-mono text-[12px] text-[var(--muted)]">
            {ui.experience.education}
          </p>
          <p className="mt-1 text-sm">
            {content.profile.education.degree}, {content.profile.education.school},{" "}
            {content.profile.education.year}.
          </p>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            {content.profile.education.focus}
          </p>
        </div>
      </div>
    </section>
  );
}

function Publications({ content }: { content: SiteContent }) {
  const ui = content.ui;
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title={ui.publications.title} meta={ui.publications.meta} />
        <div className="mt-8 border-t border-[var(--border-strong)]">
          {content.publications.map((publication) => (
            <div
              key={publication.title}
              className="grid gap-2 border-b border-[var(--border)] py-4 md:grid-cols-[8rem_1fr] md:gap-6"
            >
              <span className="font-plex-mono text-[12px] text-[var(--muted)]">
                {publication.year}
              </span>
              <div>
                <p className="font-medium">{publication.title}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {publication.venue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ content }: { content: SiteContent }) {
  const ui = content.ui;
  return (
    <section id="about" className="border-b border-[var(--border)] scroll-mt-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 lg:grid-cols-[1.2fr_1fr] lg:px-10">
        <div>
          <SectionHeader title={ui.about.title} meta={ui.about.meta} />
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            {content.profile.about[0]}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            {content.profile.about[1]}
          </p>
        </div>

        <div>
          <div className="border border-[var(--border)] bg-[var(--surface)] p-5">
            <dl className="divide-y divide-[var(--border)] text-sm">
              {content.profile.facts.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5">
                  <dt className="text-[var(--muted)]">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-6 space-y-4">
            {content.profile.principles.map((principle) => (
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

function Lab({ content, lang }: { content: SiteContent; lang: Lang }) {
  const base = lang === "en" ? "" : "/it";
  const home = base || "/";
  const ui = content.ui;

  return (
    <section id="lab" className="border-b border-[var(--border)] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10">
        <SectionHeader title={ui.lab.title} meta={ui.lab.meta} />

        <div className="mt-8 bg-[var(--lab-bg)] p-6 text-[var(--lab-fg)] md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--lab-border)] pb-4">
            <p className="font-plex-mono text-[12px] text-[var(--lab-muted)]">
              {ui.lab.console}
            </p>
            <Link
              href={`${home}#contact`}
              className="border border-[var(--lab-accent)] px-3 py-1.5 text-sm text-[var(--lab-accent)] transition-colors hover:bg-[var(--lab-accent)] hover:text-[var(--lab-bg)]"
            >
              {ui.lab.contact}
            </Link>
          </div>

          <div className="mt-6">
            {content.lab.map((item) => (
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
            {ui.lab.note}
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact({ content }: { content: SiteContent }) {
  const ui = content.ui;
  return (
    <section id="contact" className="bg-[var(--fg)] text-[var(--bg)] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-24">
        <p className="font-plex-mono text-[12px] text-[var(--on-dark-faint)]">
          {ui.contact.label}
        </p>
        <h2 className="mt-4 max-w-2xl font-plex-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.1]">
          {ui.contact.title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--on-dark-muted)]">
          {ui.contact.body}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${content.profile.email}`}
            className="border border-[var(--bg)] bg-[var(--bg)] px-4 py-2.5 text-sm font-medium text-[var(--fg)] transition-colors hover:bg-[var(--on-dark-muted)]"
          >
            {ui.contact.email}
          </a>
          <a
            href={content.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline decoration-[var(--on-dark-faint)] underline-offset-4 hover:decoration-[var(--bg)]"
          >
            LinkedIn
          </a>
          <a
            href={content.profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline decoration-[var(--on-dark-faint)] underline-offset-4 hover:decoration-[var(--bg)]"
          >
            GitHub
          </a>
          <a
            href={content.profile.cv}
            download
            className="text-sm text-[var(--on-dark-faint)] underline decoration-[var(--on-dark-faint)] underline-offset-4 hover:decoration-[var(--bg)]"
          >
            {ui.contact.cv}
          </a>
        </div>
        <p className="mt-8 font-plex-mono text-[12px] text-[var(--on-dark-faint)]">
          {content.profile.email}
        </p>
      </div>
    </section>
  );
}

export function SiteHome({ lang, content }: { lang: Lang; content: SiteContent }) {
  return (
    <main id="main">
      <Hero content={content} lang={lang} />
      <Register content={content} lang={lang} />
      <WhatIDo content={content} />
      <Experience content={content} />
      <Publications content={content} />
      <About content={content} />
      <Lab content={content} lang={lang} />
      <Contact content={content} />
    </main>
  );
}
