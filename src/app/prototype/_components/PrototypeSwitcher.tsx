"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const variants = ["A", "B", "C"] as const;
type Variant = (typeof variants)[number];

const names: Record<Variant, string> = {
  A: "Paper & Signal",
  B: "Index / Swiss",
  C: "Terminal Editorial",
};

interface PrototypeSwitcherProps {
  variant: Variant;
  view: "home" | "case";
  project: string;
}

function isEditable(element: Element | null) {
  return (
    element instanceof HTMLElement &&
    (element.tagName === "INPUT" ||
      element.tagName === "TEXTAREA" ||
      element.isContentEditable)
  );
}

export function PrototypeSwitcher({ variant, view, project }: PrototypeSwitcherProps) {
  const router = useRouter();

  const update = (next: {
    variant?: Variant;
    view?: "home" | "case";
    project?: string;
  }) => {
    const params = new URLSearchParams();
    params.set("variant", next.variant ?? variant);
    params.set("view", next.view ?? view);
    params.set("project", next.project ?? project);
    router.replace(`/prototype?${params.toString()}`, { scroll: false });
    if (next.view && next.view !== view) {
      window.scrollTo(0, 0);
    }
  };

  const cycle = (direction: -1 | 1) => {
    const index = variants.indexOf(variant);
    const next = variants[(index + direction + variants.length) % variants.length];
    update({ variant: next });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (isEditable(document.activeElement)) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const index = variants.indexOf(variant);
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      const next = variants[(index + direction + variants.length) % variants.length];
      const params = new URLSearchParams();
      params.set("variant", next);
      params.set("view", view);
      params.set("project", project);
      router.replace(`/prototype?${params.toString()}`, { scroll: false });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [variant, view, project, router]);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[100] flex max-w-[calc(100vw-1rem)] -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-[#111] px-2 py-1.5 text-white shadow-2xl">
      <span className="rounded-full bg-[#FFE600] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black">
        Prototype
      </span>

      <button
        type="button"
        onClick={() => cycle(-1)}
        aria-label="Previous variant"
        className="grid h-7 w-7 place-items-center rounded-full text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        ←
      </button>

      <span className="min-w-[6.5rem] text-center font-mono text-[10px] uppercase tracking-[0.12em]">
        {variant}
        <span className="hidden sm:inline"> — {names[variant]}</span>
      </span>

      <button
        type="button"
        onClick={() => cycle(1)}
        aria-label="Next variant"
        className="grid h-7 w-7 place-items-center rounded-full text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        →
      </button>

      <span className="mx-1 h-4 w-px bg-white/20" />

      <button
        type="button"
        onClick={() => update({ view: "home" })}
        className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
          view === "home" ? "bg-white text-black" : "text-white/60 hover:text-white"
        }`}
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => update({ view: "case" })}
        className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
          view === "case" ? "bg-white text-black" : "text-white/60 hover:text-white"
        }`}
      >
        Case study
      </button>

      <span className="hidden pr-1 font-mono text-[9px] uppercase tracking-[0.1em] text-white/30 lg:inline">
        Placeholder copy · dev only
      </span>
    </div>
  );
}
