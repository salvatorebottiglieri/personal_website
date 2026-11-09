import React from "react";

interface FlowStep {
  label: string;
  sub: string;
}

interface FlowBranch {
  label: string;
  sub: string;
}

interface SystemFlowProps {
  steps: FlowStep[];
  branches?: FlowBranch[];
  accentIndex?: number;
  className?: string;
}

function StepCard({
  step,
  index,
  accent,
}: {
  step: FlowStep;
  index: number;
  accent: boolean;
}) {
  return (
    <div
      className={`flex-1 border p-3 ${
        accent
          ? "border-[var(--accent)] bg-[var(--accent-soft)]"
          : "border-[var(--border)] bg-[var(--surface)]"
      }`}
    >
      <div className="font-plex-mono text-[12px] tabular-nums text-[var(--muted)]">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div
        className={`mt-1 text-sm font-medium ${
          accent ? "text-[var(--accent)]" : "text-[var(--fg)]"
        }`}
      >
        {step.label}
      </div>
      <div className="mt-1 text-[12px] leading-snug text-[var(--muted)]">
        {step.sub}
      </div>
    </div>
  );
}

export function SystemFlow({
  steps,
  branches,
  accentIndex = 0,
  className = "",
}: SystemFlowProps) {
  return (
    <div className={className}>
      <ol className="hidden items-stretch gap-2 lg:flex">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            <li className="flex flex-1">
              <StepCard step={step} index={index} accent={index === accentIndex} />
            </li>
            {index < steps.length - 1 && (
              <li
                aria-hidden="true"
                className="flex items-center px-1 font-plex-mono text-[12px] text-[var(--border-strong)]"
              >
                →
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>

      <ol className="space-y-2 lg:hidden">
        {steps.map((step, index) => (
          <li key={step.label} className="flex gap-3">
            <span className="w-6 pt-3 font-plex-mono text-[12px] tabular-nums text-[var(--muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <StepCard step={step} index={index} accent={index === accentIndex} />
            </div>
          </li>
        ))}
      </ol>

      {branches && branches.length > 0 && (
        <ul className="mt-3 grid gap-2 border-t border-[var(--border)] pt-3 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <li
              key={branch.label}
              className="border border-[var(--border)] bg-[var(--bg)] p-2.5"
            >
              <div className="font-plex-mono text-[12px] text-[var(--muted)]">
                {branch.label}
              </div>
              <div className="mt-1 text-sm leading-snug">{branch.sub}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
