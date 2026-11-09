import Link from "next/link";
import type { Lang, SiteContent } from "@/app/_data/siteTypes";

export function SiteHeader({
  lang,
  content,
  caseSlug,
}: {
  lang: Lang;
  content: SiteContent;
  caseSlug?: string;
}) {
  const base = lang === "en" ? "" : "/it";
  const home = base || "/";
  const ui = content.ui;
  const enHref = caseSlug ? `/work/${caseSlug}` : "/";
  const itHref = caseSlug ? `/it/work/${caseSlug}` : "/it";

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-5 py-4 lg:px-10">
        <Link href={home} className="flex items-baseline gap-3">
          <span className="font-plex-serif text-xl leading-none tracking-[-0.01em]">
            {content.profile.name}
          </span>
          <span className="hidden font-plex-mono text-[12px] text-[var(--muted)] sm:inline">
            {ui.header.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href={`${home}#systems`} className="hover:text-[var(--accent)]">
            {ui.nav.systems}
          </Link>
          <Link href={`${home}#experience`} className="hover:text-[var(--accent)]">
            {ui.nav.experience}
          </Link>
          <Link href={`${home}#lab`} className="hover:text-[var(--accent)]">
            {ui.nav.lab}
          </Link>
          <Link href={`${home}#contact`} className="hover:text-[var(--accent)]">
            {ui.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3 text-sm">
          <div className="flex items-center gap-2 text-[var(--muted)]">
            <Link
              href={enHref}
              className={lang === "en" ? "font-medium text-[var(--fg)]" : "hover:text-[var(--fg)]"}
            >
              EN
            </Link>
            <span>/</span>
            <Link
              href={itHref}
              className={lang === "it" ? "font-medium text-[var(--fg)]" : "hover:text-[var(--fg)]"}
            >
              IT
            </Link>
          </div>
          <a
            href={`mailto:${content.profile.email}`}
            className="hidden border border-[var(--fg)] px-3 py-2 font-medium text-[var(--fg)] transition-colors hover:bg-[var(--fg)] hover:text-[var(--bg)] sm:inline-block"
          >
            {ui.header.start}
          </a>
          <a
            href={`mailto:${content.profile.email}`}
            className="underline decoration-[var(--border-strong)] underline-offset-4 sm:hidden"
          >
            {ui.header.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
