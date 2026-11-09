interface SystemDiagramProps {
  kind: "atlas" | "signal" | "canvas";
  ink?: string;
  accent?: string;
  surface?: string;
  className?: string;
}

interface NodeBoxProps {
  x: number;
  y: number;
  w?: number;
  h?: number;
  label: string;
  sub?: string;
  ink: string;
  accent: string;
  surface: string;
  accentNode?: boolean;
}

function NodeBox({
  x,
  y,
  w = 130,
  h = 56,
  label,
  sub,
  ink,
  accent,
  surface,
  accentNode = false,
}: NodeBoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={accentNode ? accent : surface}
        fillOpacity={accentNode ? 0.08 : 1}
        stroke={accentNode ? accent : ink}
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 7 : y + h / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={ink}
        fontFamily="var(--font-plex-mono), monospace"
        fontSize={11}
        fontWeight={500}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={ink}
          fillOpacity={0.6}
          fontFamily="var(--font-plex-mono), monospace"
          fontSize={9}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function HArrow({
  x1,
  x2,
  y,
  ink,
  label,
  dashed = false,
}: {
  x1: number;
  x2: number;
  y: number;
  ink: string;
  label?: string;
  dashed?: boolean;
}) {
  return (
    <g>
      <line
        x1={x1}
        y1={y}
        x2={x2 - 5}
        y2={y}
        stroke={ink}
        strokeOpacity={0.65}
        strokeWidth={1.5}
        strokeDasharray={dashed ? "4 4" : undefined}
      />
      <path
        d={`M ${x2 - 8} ${y - 4} L ${x2} ${y} L ${x2 - 8} ${y + 4}`}
        fill="none"
        stroke={ink}
        strokeOpacity={0.65}
        strokeWidth={1.5}
      />
      {label && (
        <text
          x={(x1 + x2) / 2}
          y={y - 8}
          textAnchor="middle"
          fill={ink}
          fillOpacity={0.55}
          fontFamily="var(--font-plex-mono), monospace"
          fontSize={9}
        >
          {label}
        </text>
      )}
    </g>
  );
}

function VArrow({
  x,
  y1,
  y2,
  ink,
  label,
  dashed = false,
}: {
  x: number;
  y1: number;
  y2: number;
  ink: string;
  label?: string;
  dashed?: boolean;
}) {
  return (
    <g>
      <line
        x1={x}
        y1={y1}
        x2={x}
        y2={y2 - 5}
        stroke={ink}
        strokeOpacity={0.65}
        strokeWidth={1.5}
        strokeDasharray={dashed ? "4 4" : undefined}
      />
      <path
        d={`M ${x - 4} ${y2 - 8} L ${x} ${y2} L ${x + 4} ${y2 - 8}`}
        fill="none"
        stroke={ink}
        strokeOpacity={0.65}
        strokeWidth={1.5}
      />
      {label && (
        <text
          x={x + 8}
          y={(y1 + y2) / 2}
          fill={ink}
          fillOpacity={0.55}
          fontFamily="var(--font-plex-mono), monospace"
          fontSize={9}
        >
          {label}
        </text>
      )}
    </g>
  );
}

export function SystemDiagram({
  kind,
  ink = "#1B1F1E",
  accent = "#A63D2F",
  surface = "#F7F8F7",
  className = "",
}: SystemDiagramProps) {
  const common = { ink, accent, surface };

  return (
    <svg
      viewBox="0 0 840 300"
      className={className}
      role="img"
      aria-label={
        kind === "atlas"
          ? "Atlas system diagram: sources, ingestion, index, retrieval, answer, evaluation, and human handoff"
          : kind === "signal"
            ? "Signal system diagram: events, features, model, decision, feature store, and monitoring"
            : "Canvas system diagram: prompt, schema, components, page, validation, and component registry"
      }
    >
      {kind === "atlas" && (
        <>
          <NodeBox x={20} y={40} label="Sources" sub="40k documents" {...common} />
          <HArrow x1={150} x2={185} y={68} ink={ink} label="sync" />
          <NodeBox x={185} y={40} label="Ingest" sub="ACLs" {...common} />
          <HArrow x1={315} x2={350} y={68} ink={ink} label="chunks" />
          <NodeBox x={350} y={40} label="Index" sub="pgvector" {...common} />
          <HArrow x1={480} x2={515} y={68} ink={ink} label="top-k" />
          <NodeBox x={515} y={40} label="Retrieve" sub="hybrid" accentNode {...common} />
          <HArrow x1={645} x2={680} y={68} ink={ink} label="context" />
          <NodeBox x={680} y={40} label="Answer" sub="cited" {...common} />

          <VArrow x={615} y1={96} y2={170} ink={ink} label="score" />
          <NodeBox x={550} y={170} label="Eval" sub="300 cases" accentNode {...common} />
          <HArrow x1={550} x2={515} y={198} ink={ink} dashed />
          <text
            x={610}
            y={250}
            textAnchor="middle"
            fill={ink}
            fillOpacity={0.55}
            fontFamily="var(--font-plex-mono), monospace"
            fontSize={9}
          >
            regression gate
          </text>

          <VArrow x={745} y1={96} y2={170} ink={ink} label="handoff" />
          <NodeBox x={680} y={170} label="Human" sub="ticket + reply" {...common} />
        </>
      )}

      {kind === "signal" && (
        <>
          <NodeBox x={20} y={40} w={170} label="Events" sub="Kafka, 4M/day" {...common} />
          <HArrow x1={190} x2={230} y={68} ink={ink} label="stream" />
          <NodeBox x={230} y={40} w={170} label="Features" sub="shared definitions" {...common} />
          <HArrow x1={400} x2={440} y={68} ink={ink} label="vector" />
          <NodeBox x={440} y={40} w={170} label="Model" sub="PyTorch" accentNode {...common} />
          <HArrow x1={610} x2={650} y={68} ink={ink} label="score" />
          <NodeBox x={650} y={40} w={170} label="Decision" sub="12ms p95" {...common} />

          <VArrow x={315} y1={96} y2={170} ink={ink} label="write" />
          <NodeBox x={230} y={170} w={170} label="Feature store" sub="freshness SLO" {...common} />
          <HArrow x1={400} x2={440} y={198} ink={ink} dashed />
          <text
            x={420}
            y={248}
            textAnchor="middle"
            fill={ink}
            fillOpacity={0.55}
            fontFamily="var(--font-plex-mono), monospace"
            fontSize={9}
          >
            no train/serve drift
          </text>

          <VArrow x={525} y1={96} y2={170} ink={ink} label="observe" />
          <NodeBox x={440} y={170} w={170} label="Monitor" sub="drift + latency" {...common} />
        </>
      )}

      {kind === "canvas" && (
        <>
          <NodeBox x={20} y={40} w={170} label="Prompt" sub="natural language" {...common} />
          <HArrow x1={190} x2={230} y={68} ink={ink} label="intent" />
          <NodeBox x={230} y={40} w={170} label="Schema" sub="typed components" accentNode {...common} />
          <HArrow x1={400} x2={440} y={68} ink={ink} label="compose" />
          <NodeBox x={440} y={40} w={170} label="Components" sub="24 approved" {...common} />
          <HArrow x1={610} x2={650} y={68} ink={ink} label="render" />
          <NodeBox x={650} y={40} w={170} label="Page" sub="editable tree" {...common} />

          <VArrow x={315} y1={96} y2={170} ink={ink} label="validate" />
          <NodeBox x={230} y={170} w={170} label="Validation" sub="Zod + a11y" {...common} />
          <HArrow x1={400} x2={440} y={198} ink={ink} dashed />
          <text
            x={420}
            y={248}
            textAnchor="middle"
            fill={ink}
            fillOpacity={0.55}
            fontFamily="var(--font-plex-mono), monospace"
            fontSize={9}
          >
            reject invalid output
          </text>

          <VArrow x={525} y1={96} y2={170} ink={ink} label="read" />
          <NodeBox x={440} y={170} w={170} label="Registry" sub="versioned blocks" {...common} />
        </>
      )}
    </svg>
  );
}
