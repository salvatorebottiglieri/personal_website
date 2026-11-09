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
  "What did he build with LLMs?",
  "Is he available for consulting?",
  "What's his stack?",
  "Show me Atlas",
];

function answerFor(query: string): { text: string; project?: string } {
  const q = query.toLowerCase();

  if (/\b(atlas|rag|retrieval)\b/.test(q)) {
    return {
      text: "Atlas is the clearest LLM example: a retrieval-augmented support assistant over 40k documents, with ACL-aware retrieval, citations, and a 300-case eval set. The result was −38% time to resolution.",
      project: "atlas",
    };
  }

  if (/\b(canvas|generative)\b/.test(q)) {
    return {
      text: "Canvas is a constrained generative UI system. The model composes approved components validated with Zod — no arbitrary HTML. Product teams cut prototype time by roughly 60%.",
      project: "canvas",
    };
  }

  if (/\b(signal|latency|real-time|ml)\b/.test(q)) {
    return {
      text: "Signal is a real-time risk scoring service: 4M events per day at a 12ms p95, with shared feature definitions and shadow deployments. It is the production-ML side of the portfolio.",
      project: "signal",
    };
  }

  if (/\b(llm|llms|language model|ai)\b/.test(q)) {
    return {
      text: "Two projects show the LLM work: Atlas is a grounded support assistant with citations and evals; Canvas is a constrained generative UI system. Atlas is the deeper case study.",
      project: "atlas",
    };
  }

  if (/\b(consult|consulting|available|availability|hire)\b/.test(q)) {
    return {
      text: "Yes — Salvatore is open to senior AI engineering roles and selected consulting engagements. The fastest path is hello@salvatorebottiglieri.com.",
    };
  }

  if (/\b(stack|tech|tools)\b/.test(q)) {
    return {
      text: "Python/FastAPI, TypeScript/Next.js, Postgres/pgvector, Kafka, PyTorch, GCP and AWS. The default is the smallest stack that can be evaluated and operated.",
    };
  }

  return {
    text: "I can answer questions about Salvatore's projects, stack, and availability. Try “What did he build with LLMs?” or “Is he available for consulting?”",
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
      text: "Ask me about Salvatore's projects, stack, or availability. This is a design prototype, so the answers are canned. No LLM is connected.",
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
