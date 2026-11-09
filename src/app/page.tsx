import type { Metadata } from "next";
import { SiteHome } from "./_components/site/SiteHome";
import { SiteShell } from "./_components/site/SiteShell";
import { getSiteContent } from "./_data/siteContent";

const content = getSiteContent("en");

export const metadata: Metadata = {
  description: content.profile.intro,
  alternates: {
    canonical: "/",
    languages: { en: "/", it: "/it" },
  },
};

export default function HomePage() {
  return (
    <SiteShell lang="en" content={content}>
      <SiteHome lang="en" content={content} />
    </SiteShell>
  );
}
