"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export type AskMode = "drawer" | "palette" | "terminal";

export interface AskTheme {
  panel: string;
  text: string;
  muted: string;
  line: string;
  accent: string;
  accentText: string;
}

interface AskPanelProps {
  open: boolean;
  onClose: () => void;
  mode: AskMode;
  theme: AskTheme;
  projectHref: (slug: string) => string;
}

interface Message {
  role: "user" | "assistant";
  text: string;
  project?: string;
}

const suggestions = [
  "What agents has he shipped?",
  "What is Cortex?",
  "What is agentic-dev-kit?",
  "Is he available for senior roles?",
];

function answerFor(query: string): { text: string; project?: string } {
  const q = query.toLowerCase();

  if (/\b(security|agents|triage|mcp|jira|production)\b/.test(q)) {
    return {
      text: "Salvatore shipped three security agents at Infocube: triage of SAST, DAST, and SCA findings, OSS findings into idempotent Jira tickets, and proposed code fixes. The Jira and Confluence MCP servers own the domain logic; a human approves every ticket and pull request.",
      project: "security-agents",
    };
  }

  if (/\b(cortex|runtime|persistent|mqtt|goals)\b/.test(q)) {
    return {
      text: "Cortex is his open-source agent runtime: a typed plan, act, verify loop, persistent resumable goals, an event bus with salience filtering, MQTT sensor agents, and a custom eval harness with 30 loop tasks and 13 refusal tasks. It has 20 architecture decision records.",
      project: "cortex",
    };
  }

  if (/\b(agentic-dev-kit|guardrail|gate|eval|skipped)\b/.test(q)) {
    return {
      text: "agentic-dev-kit is an MIT workflow for coding agents. Its pre-commit gate computes skipped tests and stale deploy pins instead of trusting the agent's report. In a pre-registered A/B replay it caught skipped tests 5/5 vs 0/5 and stale pins 5/5 vs 2/5, with 0 bypasses and 0 false alarms.",
      project: "agentic-dev-kit",
    };
  }

  if (/\b(consult|consulting|available|availability|hire|role|roles)\b/.test(q)) {
    return {
      text: "Yes. Salvatore is open to senior agent infrastructure and AI engineering roles, and selected consulting. Three years fully remote. The fastest path is sasibottiglieri0@gmail.com.",
    };
  }

  if (/\b(stack|tech|tools|language)\b/.test(q)) {
    return {
      text: "Python, Java, TypeScript, SQL, C. MCP, LangGraph, LangChain, tool calling, agent evaluation. AWS Bedrock AgentCore, ECS, Lambda; Azure, GCP, Docker, Kubernetes. PostgreSQL, Qdrant, SQLite.",
    };
  }

  return {
    text: "I can answer questions about the security agents, Cortex, agentic-dev-kit, the stack, or availability.",
  };
}

export function AskPanel({
  open,
  onClose,
  mode,
  theme,
  projectHref,
}: AskPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Ask me about the security agents, Cortex, agentic-dev-kit, the stack, or availability. This is a design prototype, so the answers are canned. No LLM is connected.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const input = panel?.querySelector<HTMLInputElement>("#ask-input");
    const focusable = panel?.querySelector<HTMLElement>(
      "button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])",
    );
    (input ?? focusable)?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const nodes = Array.from(
        panel.querySelectorAll<HTMLElement>(
          "button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex='-1'])",
        ),
      );
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  if (!open) return null;

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);
    const answer = answerFor(text);
    timer.current = setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", ...answer }]);
      setTyping(false);
    }, 420);
  };

  const shell =
    mode === "drawer"
      ? "absolute right-0 top-0 flex h-full w-full max-w-[520px] flex-col border-l shadow-2xl"
      : mode === "palette"
        ? "absolute left-1/2 top-[10vh] flex max-h-[70vh] w-[calc(100%-2rem)] max-w-[760px] -translate-x-1/2 flex-col border shadow-2xl"
        : "absolute bottom-0 left-0 right-0 flex h-[52vh] max-h-[620px] flex-col border-t shadow-2xl";

  const isTerminal = mode === "terminal";

  return (
    <div className="fixed inset-0 z-[200]" role="dialog" aria-modal="true" aria-label="Ask AI about Salvatore">
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/45 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Close assistant"
      />

      <div
        ref={panelRef}
        className={`${shell} ${isTerminal ? "font-mono" : ""}`}
        style={{
          backgroundColor: theme.panel,
          color: theme.text,
          borderColor: theme.line,
        }}
      >
        <header
          className="flex items-start justify-between gap-4 border-b px-5 py-4"
          style={{ borderColor: theme.line }}
        >
          <div>
            <div
              className={`text-[12px] font-medium ${isTerminal ? "" : "font-mono"}`}
              style={{ color: theme.accent }}
            >
              {mode === "drawer" ? "Ask my AI" : mode === "palette" ? "Command palette" : "$ ask --about salvatore"}
            </div>
            <div className={`mt-1 ${mode === "palette" ? "text-lg font-semibold" : "text-2xl"}`}>
              {mode === "drawer"
                ? "A prototype assistant for my work."
                : mode === "palette"
                  ? "Ask anything about Salvatore."
                  : "Prototype shell · no LLM connected"}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 border px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
            style={{ borderColor: theme.line, color: theme.muted }}
          >
            Esc
          </button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite">
          {isTerminal && (
            <div
              className="space-y-1 border-b pb-4 text-[10px] leading-relaxed"
              style={{ borderColor: theme.line, color: theme.muted }}
            >
              <div>
                <span style={{ color: theme.accent }}>$</span> init assistant
              </div>
              <div>knowledge base: 3 case studies / 6 projects</div>
              <div>mode: grounded prototype</div>
              <div>llm: not connected</div>
            </div>
          )}

          {messages.map((message, index) => {
            const isUser = message.role === "user";
            return (
              <div key={index} className={isUser ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[92%] px-4 py-3 text-sm leading-relaxed ${
                    isTerminal ? "" : "border"
                  }`}
                  style={{
                    borderColor: theme.line,
                    backgroundColor: isUser ? theme.accent : "transparent",
                    color: isUser ? theme.accentText : theme.text,
                  }}
                >
                  {isTerminal && (
                    <span style={{ color: theme.accent }}>{isUser ? ">" : "#"} </span>
                  )}
                  {message.text}
                  {message.project && (
                    <div className="mt-3">
                      <Link
                        href={projectHref(message.project)}
                        onClick={onClose}
                        className="inline-flex items-center gap-2 border px-3 py-1.5 text-[11px] font-medium transition-opacity hover:opacity-70"
                        style={{ borderColor: theme.accent, color: theme.accent }}
                      >
                        Open case study
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {typing && (
            <div className="flex justify-start">
              <div className="px-4 py-3 text-sm" style={{ color: theme.muted }}>
                {isTerminal ? "# thinking..." : "Thinking…"}
              </div>
            </div>
          )}
        </div>

        <div className="border-t px-5 py-4" style={{ borderColor: theme.line }}>
          <div className="mb-3 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => send(suggestion)}
                disabled={typing}
                className="border px-2.5 py-1 text-[10px] transition-opacity hover:opacity-70 disabled:opacity-40"
                style={{ borderColor: theme.line, color: theme.muted }}
              >
                {suggestion}
              </button>
            ))}
          </div>

          <label
            htmlFor="ask-input"
            className={`mb-2 block text-[11px] ${isTerminal ? "" : "font-medium"}`}
            style={{ color: theme.muted }}
          >
            {isTerminal ? "Command" : "Your question"}
          </label>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border px-3 py-2"
            style={{ borderColor: theme.line }}
          >
            <span className="text-xs" style={{ color: theme.accent }}>
              {isTerminal ? "$" : "↳"}
            </span>
            <input
              id="ask-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={isTerminal ? "type a command..." : "Ask about projects, stack, availability..."}
              className="min-w-0 flex-1 bg-transparent text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 placeholder:opacity-40"
              style={{ color: theme.text, outlineColor: theme.accent }}
              autoFocus={mode !== "terminal"}
            />
            <button
              type="submit"
              disabled={!input.trim() || typing}
              className="border px-2.5 py-1 text-[11px] font-medium transition-opacity hover:opacity-70 disabled:opacity-40"
              style={{ borderColor: theme.accent, color: theme.accent }}
            >
              Send
            </button>
          </form>

          <p className="mt-3 text-[11px] leading-relaxed" style={{ color: theme.muted }}>
            Prototype answer. Not connected to an LLM. Esc to close.
          </p>
        </div>
      </div>
    </div>
  );
}
