import { motion, useReducedMotion } from "framer-motion";

/** Abstract cable-stayed bridge inspired by the Bandra-Worli Sea Link. SVG only. */
export const MumbaiWireBridge = ({
  className = "",
  tone = "gold",
  animate = true,
}: {
  className?: string;
  tone?: "gold" | "navy";
  animate?: boolean;
}) => {
  const reduce = useReducedMotion();
  const stroke = tone === "gold" ? "hsl(var(--accent))" : "hsl(var(--primary))";
  const cables = Array.from({ length: 16 }, (_, i) => i);

  return (
    <svg
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      {/* pylon */}
      <g stroke={stroke} strokeWidth="1" opacity="0.55">
        <path d="M900 20 L900 230" />
        <path d="M884 60 L916 60" />
        <path d="M888 100 L912 100" />
      </g>
      {/* cables fanning out both directions */}
      <g stroke={stroke} strokeWidth="0.6" opacity="0.42">
        {cables.map((i) => (
          <motion.path
            key={`l-${i}`}
            d={`M900 ${30 + i * 3} L${900 - (i + 1) * 52} 200`}
            initial={animate && !reduce ? { pathLength: 0, opacity: 0 } : false}
            whileInView={animate && !reduce ? { pathLength: 1, opacity: 0.42 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: i * 0.045, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        {cables.slice(0, 6).map((i) => (
          <motion.path
            key={`r-${i}`}
            d={`M900 ${30 + i * 3} L${900 + (i + 1) * 50} 200`}
            initial={animate && !reduce ? { pathLength: 0, opacity: 0 } : false}
            whileInView={animate && !reduce ? { pathLength: 1, opacity: 0.42 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </g>
      {/* deck */}
      <motion.path
        d="M0 200 L1200 200"
        stroke={stroke}
        strokeWidth="1.2"
        opacity="0.7"
        initial={animate && !reduce ? { pathLength: 0 } : false}
        whileInView={animate && !reduce ? { pathLength: 1 } : undefined}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* piers */}
      <g stroke={stroke} strokeWidth="0.6" opacity="0.3">
        {Array.from({ length: 13 }, (_, i) => (
          <path key={i} d={`M${60 + i * 68} 200 L${60 + i * 68} 240`} />
        ))}
      </g>
      {/* structural nodes */}
      <g fill={stroke} opacity="0.6">
        {[200, 420, 640, 900, 1080].map((x) => (
          <circle key={x} cx={x} cy={200} r="2.2" />
        ))}
      </g>
    </svg>
  );
};

/** Editorial coordinate stamp. */
export const MumbaiCoordinates = ({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) => (
  <div
    className={`font-mono text-[10px] leading-[1.6] uppercase tracking-[0.2em] ${
      light ? "text-primary-foreground/55" : "text-primary/50"
    } ${className}`}
  >
    <div className="text-accent">MUMBAI</div>
    <div>19.0760° N</div>
    <div>72.8777° E</div>
  </div>
);

/** Animated dots connected by fine wires. */
export const ResidencyNodes = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  const pts = [
    [12, 70],
    [70, 28],
    [128, 84],
    [190, 40],
    [244, 96],
  ];
  return (
    <svg viewBox="0 0 260 120" aria-hidden="true" className={className} fill="none">
      <g stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.4">
        {pts.slice(0, -1).map((p, i) => (
          <line key={i} x1={p[0]} y1={p[1]} x2={pts[i + 1][0]} y2={pts[i + 1][1]} />
        ))}
      </g>
      {pts.map((p, i) => (
        <motion.circle
          key={i}
          cx={p[0]}
          cy={p[1]}
          r="3"
          fill="hsl(var(--accent))"
          animate={reduce ? undefined : { opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.35 }}
        />
      ))}
    </svg>
  );
};

/** Abstract geometric skyline silhouette. */
export const MumbaiHorizon = ({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "navy";
}) => {
  const stroke = tone === "gold" ? "hsl(var(--accent))" : "hsl(var(--primary))";
  const towers = [
    [0, 70, 28, 40],
    [30, 46, 18, 64],
    [50, 58, 22, 52],
    [74, 22, 16, 88],
    [92, 52, 26, 58],
    [120, 34, 14, 76],
    [136, 64, 30, 46],
    [168, 40, 18, 70],
    [188, 60, 24, 50],
    [214, 28, 15, 82],
    [231, 66, 29, 44],
  ];
  return (
    <svg viewBox="0 0 260 110" preserveAspectRatio="none" aria-hidden="true" className={className}>
      <g stroke={stroke} strokeWidth="0.7" fill="none" opacity="0.5">
        {towers.map(([x, y, w, h], i) => (
          <g key={i}>
            <rect x={x} y={y} width={w} height={h} />
            <line x1={x} y1={y + h / 2} x2={x + w} y2={y + h / 2} opacity="0.5" />
          </g>
        ))}
        <line x1="0" y1="110" x2="260" y2="110" strokeWidth="1" />
      </g>
    </svg>
  );
};

/** Subtle animated coastline wave grid. */
export const OceanGrid = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true" className={className} fill="none">
      {[0, 1, 2, 3].map((i) => (
        <motion.path
          key={i}
          d={`M-100 ${40 + i * 20} C 50 ${20 + i * 20}, 150 ${60 + i * 20}, 300 ${40 + i * 20} S 550 ${
            20 + i * 20
          }, 700 ${40 + i * 20}`}
          stroke="hsl(var(--accent))"
          strokeWidth="0.6"
          opacity={0.22 - i * 0.03}
          animate={reduce ? undefined : { x: [0, 100, 0] }}
          transition={{ duration: 14 + i * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
};
