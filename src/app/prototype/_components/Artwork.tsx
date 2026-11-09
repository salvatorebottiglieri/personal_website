import type { ArtworkKind } from "./data";

interface ArtworkProps {
  kind: ArtworkKind;
  ink?: string;
  accent?: string;
  className?: string;
}

const nodes = [
  { x: 120, y: 250, label: "SOURCE" },
  { x: 280, y: 140, label: "INDEX" },
  { x: 280, y: 360, label: "FILTER" },
  { x: 450, y: 250, label: "RETRIEVE" },
  { x: 620, y: 140, label: "RANK" },
  { x: 620, y: 360, label: "ANSWER" },
];

const links: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
];

const bars = [34, 52, 44, 68, 58, 86, 72, 104, 92, 126, 112, 148, 132, 170];

export function Artwork({
  kind,
  ink = "#141414",
  accent = "#FF4D00",
  className = "",
}: ArtworkProps) {
  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      role="img"
      aria-label={`Abstract ${kind} system diagram`}
      style={{ color: ink }}
    >
      {/* Grid */}
      {Array.from({ length: 21 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 40}
          y1={0}
          x2={i * 40}
          y2={500}
          stroke={ink}
          strokeOpacity={0.08}
          strokeWidth={1}
        />
      ))}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1={0}
          y1={i * 40}
          x2={800}
          y2={i * 40}
          stroke={ink}
          strokeOpacity={0.08}
          strokeWidth={1}
        />
      ))}

      {kind === "nodes" && (
        <g>
          {links.map(([from, to], i) => {
            const a = nodes[from];
            const b = nodes[to];
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={ink}
                strokeOpacity={0.35}
                strokeWidth={1.5}
              />
            );
          })}
          {nodes.map((node, i) => (
            <g key={node.label}>
              <circle
                cx={node.x}
                cy={node.y}
                r={i === 3 ? 26 : 16}
                fill={i === 3 ? accent : ink}
                fillOpacity={i === 3 ? 0.16 : 0.04}
                stroke={i === 3 ? accent : ink}
                strokeOpacity={i === 3 ? 1 : 0.5}
                strokeWidth={1.5}
              />
              <circle cx={node.x} cy={node.y} r={3} fill={i === 3 ? accent : ink} />
              <text
                x={node.x}
                y={node.y + 42}
                textAnchor="middle"
                fill={ink}
                fillOpacity={0.6}
                fontFamily="monospace"
                fontSize={9}
                letterSpacing={1.4}
              >
                {node.label}
              </text>
            </g>
          ))}
          <text x={40} y={40} fill={ink} fillOpacity={0.45} fontFamily="monospace" fontSize={10} letterSpacing={1.6}>
            FIG. 01 — GROUNDED RETRIEVAL
          </text>
        </g>
      )}

      {kind === "bars" && (
        <g>
          {bars.map((h, i) => (
            <rect
              key={i}
              x={104 + i * 44}
              y={400 - h}
              width={22}
              height={h}
              fill={i % 4 === 3 ? accent : ink}
              fillOpacity={i % 4 === 3 ? 0.85 : 0.14}
              stroke={i % 4 === 3 ? accent : ink}
              strokeOpacity={i % 4 === 3 ? 1 : 0.25}
            />
          ))}
          <polyline
            points={bars.map((h, i) => `${115 + i * 44},${380 - h}`).join(" ")}
            fill="none"
            stroke={accent}
            strokeWidth={1.5}
            strokeDasharray="5 5"
            strokeOpacity={0.8}
          />
          <line x1={80} y1={400} x2={740} y2={400} stroke={ink} strokeOpacity={0.4} />
          <line x1={80} y1={80} x2={80} y2={400} stroke={ink} strokeOpacity={0.4} />
          <text x={40} y={40} fill={ink} fillOpacity={0.45} fontFamily="monospace" fontSize={10} letterSpacing={1.6}>
            FIG. 02 — EVENTS / SECOND
          </text>
          <text x={640} y={440} fill={ink} fillOpacity={0.45} fontFamily="monospace" fontSize={9} letterSpacing={1.4}>
            p95 12MS
          </text>
        </g>
      )}

      {kind === "grid" && (
        <g>
          {Array.from({ length: 12 }).map((_, i) => {
            const col = i % 4;
            const row = Math.floor(i / 4);
            const x = 104 + col * 152;
            const y = 96 + row * 104;
            const active = i === 5;
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width={128}
                  height={80}
                  fill={active ? accent : ink}
                  fillOpacity={active ? 0.14 : 0.03}
                  stroke={active ? accent : ink}
                  strokeOpacity={active ? 1 : 0.25}
                />
                <line
                  x1={x + 12}
                  y1={y + 18}
                  x2={x + 12}
                  y2={y + 18}
                  stroke={active ? accent : ink}
                  strokeOpacity={0.7}
                  strokeWidth={2}
                />
                <line
                  x1={x + 20}
                  y1={y + 18}
                  x2={x + 72}
                  y2={y + 18}
                  stroke={ink}
                  strokeOpacity={0.25}
                />
                <line
                  x1={x + 12}
                  y1={y + 34}
                  x2={x + 108}
                  y2={y + 34}
                  stroke={ink}
                  strokeOpacity={0.18}
                />
                <line
                  x1={x + 12}
                  y1={y + 44}
                  x2={x + 88}
                  y2={y + 44}
                  stroke={ink}
                  strokeOpacity={0.18}
                />
              </g>
            );
          })}
          <path
            d="M540 300 L574 300 L574 282 L600 282"
            fill="none"
            stroke={accent}
            strokeWidth={1.5}
          />
          <circle cx={600} cy={282} r={4} fill={accent} />
          <text x={40} y={40} fill={ink} fillOpacity={0.45} fontFamily="monospace" fontSize={10} letterSpacing={1.6}>
            FIG. 03 — COMPONENT COMPOSITION
          </text>
        </g>
      )}
    </svg>
  );
}
