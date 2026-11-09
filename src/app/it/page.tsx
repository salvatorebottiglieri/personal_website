import type { Metadata } from "next";
import { SiteHome } from "../_components/site/SiteHome";
import { SiteShell } from "../_components/site/SiteShell";
import { getSiteContent } from "../_data/siteContent";

const content = getSiteContent("it");

export const metadata: Metadata = {
  title: { absolute: "Salvatore Bottiglieri, infrastruttura per agenti" },
  description: content.profile.intro,
  alternates: {
    canonical: "/it",
    languages: { en: "/", it: "/it" },
  },
};

export default function ItalianHomePage() {
  return (
    <SiteShell lang="it" content={content}>
      <SiteHome lang="it" content={content} />
    </SiteShell>
  );
}
