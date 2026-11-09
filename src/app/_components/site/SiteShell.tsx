import React from "react";
import type { Lang, SiteContent } from "@/app/_data/siteTypes";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { siteTheme } from "./theme";

export function SiteShell({
  lang,
  content,
  caseSlug,
  children,
}: {
  lang: Lang;
  content: SiteContent;
  caseSlug?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      lang={lang}
      style={siteTheme}
      className="min-h-screen bg-[var(--bg)] font-plex-sans text-[var(--fg)]"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:px-4 focus:py-2"
      >
        {lang === "en" ? "Skip to content" : "Vai al contenuto"}
      </a>
      <SiteHeader lang={lang} content={content} caseSlug={caseSlug} />
      {children}
      <SiteFooter content={content} />
    </div>
  );
}
