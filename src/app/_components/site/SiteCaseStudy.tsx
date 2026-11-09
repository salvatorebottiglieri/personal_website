import Link from "next/link";
import type { ReactNode } from "react";
import type {
  Lang,
  ProjectContent,
  SiteContent,
  StatusKey,
} from "@/app/_data/siteTypes";
import { SystemFlow } from "./SystemFlow";

function statusColor(statusKey: StatusKey) {
  if (statusKey === "production") return "var(--success)";
  if (statusKey === "open-source") return "var(--accent)";
  return "var(--warning)";
}

function StatusMark({ project }: { project: ProjectContent }) {
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

function CaseSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-plex-serif text-2xl leading-tight">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export function SiteCaseStudy({
  lang,
  content,
  project,
}: {
  lang: Lang;
  content: SiteContent;
  project: ProjectContent;
}) {
  const base = lang === "en" ? "" : "/it";
  const home = base || "/";
  const ui = content.ui.caseStudy;
  const currentIndex = content.projects.findIndex((item) => item.slug === project.slug);
  const next = content.projects[(currentIndex + 1) % content.projects.length];

  const sections = [
    ["context", ui.context],
    ["constraint", ui.constraint],
    ["decision", ui.decision],
    ["evidence", ui.evidence],
    ["consequence", ui.consequence],
    ["change", ui.change],
    ["reflection", ui.reflection],
  ];

  return (
    <main id="main">
      <div className="mx-auto max-w-[1280px] px-5 pt-10 lg:px-10">
        <Link
          href={`${home}#systems`}
          className="text-sm text-[var(--muted)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
        >
          {ui.selectedSystems}
        </Link>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-plex-mono text-[12px] text-[var(--muted)]">
              {ui.decisionLog}
            </p>
            <h1 className="mt-2 font-plex-serif text-[clamp(3rem,7vw,5rem)] leading-[0.95] tracking-[-0.02em]">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-relaxed text-[var(--muted)]">
              {project.tagline}
            </p>
          </div>
          <StatusMark project={project} />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[var(--border)] py-3 md:grid-cols-4">
          {[
            [ui.role, project.role],
            [ui.year, project.year],
            [ui.layer, project.layer],
            [ui.outcome, project.outcome],
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
          <SystemFlow
            steps={project.flow.steps}
            branches={project.flow.branches}
            accentIndex={project.flow.accentIndex}
          />
          <p className="mt-3 font-plex-mono text-[12px] text-[var(--muted)]">
            {ui.figure.replace("{title}", project.title)}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 lg:grid-cols-[220px_1fr] lg:px-10 lg:py-24">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-plex-mono text-[12px] text-[var(--muted)]">
            {ui.contents}
          </p>
          <nav className="mt-3 space-y-2 text-sm">
            {sections.map(([id, label]) => (
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
            <p className="font-plex-mono text-[12px] text-[var(--muted)]">
              {ui.stack}
            </p>
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

          {project.links && project.links.length > 0 && (
            <div className="mt-6 border-t border-[var(--border)] pt-4">
              <p className="font-plex-mono text-[12px] text-[var(--muted)]">
                {ui.links}
              </p>
              <div className="mt-2 space-y-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          <Link
            href={`${home}#contact`}
            className="mt-6 inline-block text-sm underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--accent)]"
          >
            {ui.talk}
          </Link>
        </aside>

        <article className="max-w-[68ch] space-y-12">
          <p className="font-plex-serif text-2xl leading-[1.35]">{project.summary}</p>

          <CaseSection id="context" title={ui.context}>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              {project.context}
            </p>
          </CaseSection>

          <CaseSection id="constraint" title={ui.constraint}>
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

          <CaseSection id="decision" title={ui.decision}>
            <div className="space-y-5">
              {project.approach.map((step, index) => (
                <div key={step.title} className="border-t border-[var(--border)] pt-4">
                  <div className="font-plex-mono text-[12px] text-[var(--muted)]">
                    {ui.decisionN} {index + 1}
                  </div>
                  <h3 className="mt-1 font-medium">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection id="evidence" title={ui.evidence}>
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
                  <div className="text-right">
                    <div className="font-plex-mono text-lg tabular-nums text-[var(--accent)]">
                      {result.value}
                    </div>
                    {result.note && (
                      <div className="mt-0.5 text-[12px] leading-snug text-[var(--muted)]">
                        {result.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[12px] text-[var(--muted)]">
              {ui.evidenceNote}
            </p>
          </CaseSection>

          <CaseSection id="consequence" title={ui.consequence}>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              {project.consequence}
            </p>
          </CaseSection>

          <CaseSection id="change" title={ui.change}>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              {project.change}
            </p>
          </CaseSection>

          <CaseSection id="reflection" title={ui.reflection}>
            <p className="font-plex-serif text-xl leading-[1.4] text-[var(--fg)]">
              {project.reflection}
            </p>
          </CaseSection>
        </article>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1280px] px-5 py-12 lg:px-10">
          <p className="font-plex-mono text-[12px] text-[var(--muted)]">
            {ui.nextSystem}
          </p>
          <Link
            href={`${base}/work/${next.slug}`}
            className="group mt-2 flex flex-wrap items-baseline justify-between gap-4"
          >
            <h2 className="font-plex-serif text-4xl transition-colors group-hover:text-[var(--accent)] md:text-5xl">
              {next.title}
            </h2>
            <span className="text-sm text-[var(--muted)] group-hover:text-[var(--accent)]">
              {ui.readLog}
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
