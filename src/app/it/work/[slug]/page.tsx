import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteCaseStudy } from "../../../_components/site/SiteCaseStudy";
import { SiteShell } from "../../../_components/site/SiteShell";
import { getSiteContent } from "../../../_data/siteContent";

const content = getSiteContent("it");

export function generateStaticParams() {
  return content.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = content.projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: `/it/work/${slug}`,
      languages: {
        en: `/work/${slug}`,
        it: `/it/work/${slug}`,
      },
    },
  };
}

export default async function ItalianWorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = content.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <SiteShell lang="it" content={content} caseSlug={slug}>
      <SiteCaseStudy lang="it" content={content} project={project} />
    </SiteShell>
  );
}
