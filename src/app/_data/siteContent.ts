import { en } from "./content.en";
import { it } from "./content.it";
import type { Lang, SiteContent } from "./siteTypes";

export const siteContent: Record<Lang, SiteContent> = { en, it };

export function getSiteContent(lang: Lang): SiteContent {
  return siteContent[lang];
}

export type { Lang, SiteContent };
