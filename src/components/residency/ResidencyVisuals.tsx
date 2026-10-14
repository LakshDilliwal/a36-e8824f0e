import { motion, useReducedMotion } from "framer-motion";

/** Abstract A36 line field used only on the Residency page. */
export const ResidencyLineField = ({ className = "" }: { className?: string }) => {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1200 420"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <g stroke="hsl(var(--accent))" strokeWidth="0.7" opacity="0.28">
        {[90, 260, 430, 600, 770, 940, 1110].map((x, index) => (
          <motion.path
            key={x}
            d={`M${x} 0 L${Math.max(0, x - 260)} 420`}
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            whileInView={reduce ? undefined : { pathLength: 1, opacity: 0.28 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        {[100, 210, 320].map((y) => (
          <path key={y} d={`M0 ${y} H1200`} opacity="0.55" />
        ))}
      </g>
      <g fill="hsl(var(--accent))" opacity="0.65">
        {[
          [90, 100],
          [430, 210],
          [770, 320],
          [940, 100],
          [1110, 210],
        ].map(([x, y], index) => (
          <motion.rect
            key={`${x}-${y}`}
            x={x - 2}
            y={y - 2}
            width="4"
            height="4"
            animate={reduce ? undefined : { opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: index * 0.45 }}
          />
        ))}
      </g>
    </svg>
  );
};

export const ResidencyStatus = ({ className = "" }: { className?: string }) => (
  <div className={`font-mono text-[10px] uppercase leading-[1.7] tracking-[0.2em] ${className}`}>
    <div className="text-accent">DATES COMING SOON</div>
    <div>LOCATION COMING SOON</div>
  </div>
);