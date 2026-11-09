import type { SiteContent } from "@/app/_data/siteTypes";

export function SiteFooter({ content }: { content: SiteContent }) {
  const ui = content.ui;
  return (
    <footer className="px-5 py-6 lg:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 text-[12px] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <span>{ui.footer.rights}</span>
        <span>{ui.footer.note}</span>
        <span>{ui.footer.language}</span>
      </div>
    </footer>
  );
}
