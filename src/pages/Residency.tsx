import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MumbaiWireBridge,
  MumbaiCoordinates,
  MumbaiHorizon,
  OceanGrid,
  ResidencyNodes,
} from "@/components/residency/MumbaiVisuals";
import heroAsset from "@/assets/a36-residency-hero.png.asset.json";
import squareAsset from "@/assets/a36-residency-square.png.asset.json";
import applyAsset from "@/assets/a36-residency-apply.png.asset.json";

const LUMA_URL = "https://luma.com/g3oz48ck";
const LUMA_EMBED = "https://luma.com/embed/event/evt-Xw3tOfbza5zUUKd/simple";
const PARTNER_MAIL = "mailto:partnerships@a36labs.com?subject=A36%20Residency%20Partnership";

/* ---------------- shared motion helpers ---------------- */

const useMouseParallax = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (window.matchMedia("(pointer: coarse), (max-width: 767px)").matches) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth - 0.5);
      y.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, x, y]);


  return { mx: sx, my: sy };
};

const Rise = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 900, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

/* ---------------- 01 · HERO ---------------- */

const Hero = () => {
  const { mx, my } = useMouseParallax();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  const px = useTransform(mx, [-0.5, 0.5], [14, -14]);
  const py = useTransform(my, [-0.5, 0.5], [10, -10]);
  const nx = useTransform(mx, [-0.5, 0.5], [-22, 22]);
  const ny = useTransform(my, [-0.5, 0.5], [-14, 14]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-primary text-primary-foreground md:min-h-[92vh]"
    >
      {/* image plane */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-y-0 right-0 z-[2] w-full will-change-transform md:w-[62%]"
      >
        <img
          src={heroAsset.url}
          alt="A36 Global Residency Mumbai 2026 key visual"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>

      {/* navy gradient veil extending from the image into the copy area */}
      <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(180deg,hsl(var(--primary)/0.92)_0%,hsl(var(--primary)/0.82)_45%,hsl(var(--primary)/0.94)_100%)] md:bg-[linear-gradient(90deg,hsl(var(--primary))_0%,hsl(var(--primary))_30%,hsl(var(--primary)/0.85)_44%,hsl(var(--primary)/0.35)_58%,transparent_78%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32 bg-[linear-gradient(180deg,transparent,hsl(var(--primary)))] md:h-40" />

      {/* bridge cables behind composition (desktop only) */}
      <motion.div
        style={{ x: nx, y: ny }}
        className="pointer-events-none absolute inset-x-0 bottom-[8%] z-[3] hidden h-[220px] opacity-40 will-change-transform md:block"
      >
        <MumbaiWireBridge className="h-full w-full" />
      </motion.div>

      <OceanGrid className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] hidden h-28 opacity-45 md:block" />

      {/* grid marks */}
      <div className="pointer-events-none absolute inset-0 z-[3] opacity-[0.05] bg-[linear-gradient(hsl(var(--accent)/0.35)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--accent)/0.35)_1px,transparent_1px)] bg-[size:96px_96px] md:opacity-[0.10] md:bg-[size:72px_72px]" />

      <motion.div
        style={{ x: px, y: py }}
        className="container relative z-[5] mx-auto w-full max-w-6xl px-5 py-16 will-change-transform max-[389px]:px-4 md:px-16 md:py-20"
      >
        <Rise>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent md:text-[11px]">
            A36 GLOBAL RESIDENCY · MUMBAI 2026
          </p>
        </Rise>

        <h1 className="mt-4 max-w-[13ch] font-black tracking-tighter leading-[0.98] text-[clamp(2.5rem,11vw,5.5rem)] md:mt-5">
          {["16 Days.", "One Room.", "Real Progress."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <Rise delay={0.35}>
          <p className="mt-4 font-bold uppercase tracking-[0.16em] text-[clamp(0.7rem,3.2vw,0.875rem)] text-accent md:mt-5">
            15 days inside the residency. Day 16 to show what changed.
          </p>
          <p className="mt-3 max-w-[62ch] text-[clamp(0.9rem,3.8vw,1.05rem)] leading-relaxed text-primary-foreground/75 md:mt-4">
            Selected builders live and work in the same room in Mumbai and ship while they are there.
          </p>
        </Rise>

        <Rise delay={0.45}>
          <div className="relative z-10 mt-7 flex flex-col flex-wrap gap-3 sm:flex-row md:mt-8">
            <a href="#apply" className="btn-gold inline-flex min-h-[44px] items-center justify-center">
              APPLY FOR RESIDENCY <span className="a36-arrow ml-2">→</span>
            </a>
            <a
              href={PARTNER_MAIL}
              className="btn-ghost-light inline-flex min-h-[44px] items-center justify-center"
            >
              PARTNER WITH A36 <span className="a36-arrow ml-2">→</span>
            </a>
          </div>
        </Rise>

        <Rise delay={0.55}>
          <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-primary-foreground/15 pt-5 md:mt-10 md:flex md:flex-wrap md:gap-x-10 md:gap-y-5 md:pt-6">
            {[
              ["DATES", "18 OCT — 2 NOV 2026"],
              ["LOCATION", "MUMBAI, INDIA"],
              ["COHORT", "36 SELECTED RESIDENTS"],
            ].map(([k, v]) => (
              <div key={k} className="min-w-0">
                <dt className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary-foreground/45">
                  {k}
                </dt>
                <dd className="mt-1 font-bold text-xs md:text-sm uppercase tracking-[0.08em]">{v}</dd>
              </div>
            ))}
          </dl>
        </Rise>
      </motion.div>

      {/* floating UI chips */}
      <motion.div
        style={{ x: nx, y: ny }}
        className="pointer-events-none absolute right-10 top-28 z-[4] hidden text-right lg:block"
      >
        <div className="a36-drift border border-accent/35 bg-primary/60 backdrop-blur-sm px-4 py-3">
          <p className="font-mono text-[10px] tracking-[0.2em] text-accent">COHORT 001</p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/60">
            18.10.26 — 02.11.26
          </p>
        </div>
        <MumbaiCoordinates light className="mt-4 text-right" />
      </motion.div>

      <MumbaiHorizon
        className="pointer-events-none absolute bottom-0 left-0 z-[3] hidden h-24 w-1/2 opacity-20 md:block"
        tone="gold"
      />
    </section>
  );

};

/* ---------------- 02 · RESIDENCY OS ---------------- */

const NODES = [
  { n: "01", k: "ARRIVE", d: "Meet the room. Set your goals." },
  { n: "02", k: "BUILD", d: "Deep work and optional mentor access." },
  { n: "03", k: "REVIEW", d: "Show progress and identify blockers." },
  { n: "04", k: "BUILD AGAIN", d: "Ship the next version." },
  { n: "05", k: "REFINE", d: "Product, GTM and technical clinics." },
  { n: "06", k: "PREPARE", d: "Final reviews and demo preparation." },
  { n: "07", k: "DEMO", d: "Show what changed." },
];


const ResidencyOS = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const width = useTransform(progress, [0, 1], ["0%", "100%"]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const unsub = progress.on("change", (v) =>
      setActive(Math.min(NODES.length - 1, Math.floor(v * NODES.length))),
    );
    return () => unsub();
  }, [progress]);

  return (
    <section className="relative isolate overflow-hidden bg-background py-16 md:py-28">
      <div className="pointer-events-none absolute inset-0 z-[1] hidden opacity-[0.05] bg-[linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] bg-[size:56px_56px] md:block" />

      <div className="container relative z-[5] mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
        <Rise>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
            THE RESIDENCY OS
          </p>
          <h2 className="mt-3 font-black tracking-tighter leading-[1.05] text-primary text-[clamp(1.75rem,7vw,3.75rem)] md:mt-4">
            Build first.<br />Everything else supports that.
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15px] md:text-base text-muted leading-relaxed">
            The days are built around long stretches of uninterrupted work, with the right people
            around when you need them.
          </p>
        </Rise>

        {/* stat strip */}
        <Rise delay={0.1}>
          <div className="mt-8 grid grid-cols-3 border-y border-border md:mt-10">
            {[
              { v: <CountUp to={16} />, l: "DAYS" },
              { v: <CountUp to={36} />, l: "RESIDENTS" },
              { v: <CountUp to={1} />, l: "DEMO DAY" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`min-w-0 px-2 py-4 md:py-5 ${i > 0 ? "border-l border-border" : ""}`}
              >
                <p className="font-black text-[28px] md:text-[40px] text-accent leading-none">{s.v}</p>
                <p className="mt-1 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-muted">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </Rise>

        {/* scroll-linked bridge timeline */}
        <div ref={ref} className="relative mt-10 md:mt-20">
          {/* desktop horizontal */}
          <div className="hidden md:block">
            <div className="relative h-[2px] bg-border">
              <motion.div style={{ width }} className="absolute inset-y-0 left-0 bg-accent" />
            </div>
            <div className="relative grid grid-cols-7 -mt-[7px]">
              {NODES.map((node, i) => {
                const on = i <= active;
                return (
                  <div key={node.n} className="flex min-w-0 flex-col items-start pr-3">
                    <span
                      className={`h-3 w-3 border-2 transition-colors duration-300 ${
                        on ? "bg-accent border-accent" : "bg-background border-border"
                      }`}
                    />
                    {/* vertical cable */}
                    <span
                      className={`w-px transition-all duration-500 ${
                        on ? "h-6 bg-accent/60" : "h-4 bg-border"
                      }`}
                    />
                    <p
                      className={`font-mono text-[11px] tracking-[0.2em] transition-colors ${
                        on ? "text-accent" : "text-primary/45"
                      }`}
                    >
                      {node.n}
                    </p>
                    <p
                      className={`mt-1 font-black text-[15px] lg:text-[17px] uppercase tracking-tight transition-colors ${
                        on ? "text-primary" : "text-primary/55"
                      }`}
                    >
                      {node.k}
                    </p>
                    <p
                      className={`mt-2 text-[13px] lg:text-sm leading-snug text-muted transition-opacity duration-500 ${
                        on ? "opacity-100" : "opacity-60"
                      }`}
                    >
                      {node.d}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* mobile vertical — one continuous line */}
          <div className="relative pl-7 md:hidden">
            <div className="pointer-events-none absolute left-[5px] top-2 bottom-2 w-px bg-border" />
            <motion.div
              style={{ scaleY: progress }}
              className="pointer-events-none absolute left-[5px] top-2 bottom-2 w-px origin-top bg-accent"
            />
            <ul>
              {NODES.map((node, i) => (
                <li key={node.n} className="relative min-w-0 pb-7 last:pb-0">
                  <span
                    className={`absolute -left-7 top-1.5 h-[11px] w-[11px] border-2 transition-colors ${
                      i <= active ? "bg-accent border-accent" : "bg-background border-border"
                    }`}
                  />
                  <p className="font-mono text-[10px] tracking-[0.2em] text-accent">{node.n}</p>
                  <p className="mt-1 font-black text-[17px] uppercase leading-tight text-primary">
                    {node.k}
                  </p>
                  <p className="mt-1 max-w-[46ch] text-[14px] leading-snug text-muted">{node.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Rise delay={0.1}>
          <p className="mt-10 max-w-[64ch] border-l-2 border-accent pl-4 text-sm text-primary/80 md:mt-12">
            Mentor sessions, clinics and workshops happen around the work, not instead of it.
          </p>
          <a
            href="#apply"
            className="btn-dark relative z-10 mt-6 inline-flex min-h-[44px] items-center justify-center md:mt-8"
          >
            APPLY FOR RESIDENCY <span className="a36-arrow ml-2">→</span>
          </a>
        </Rise>
      </div>
    </section>
  );
};


/* ---------------- 03 · INSIDE THE ROOM ---------------- */

const KEYWORDS = [
  { k: "BUILD", d: "Focused time to move your product forward." },
  { k: "LEARN", d: "Optional mentor sessions and technical workshops." },
  { k: "CONNECT", d: "Live alongside ambitious people from different markets." },
  { k: "SHIP", d: "Leave with meaningful progress." },
];

const TAGS = [
  "AI",
  "WEB3",
  "OPEN SOURCE",
  "PRODUCT",
  "INFRASTRUCTURE",
  "CONSUMER",
  "EXPERIMENTAL TECH",
];

const FIT = {
  yes: ["Actively building", "Capable of shipping", "Want focused time", "Contribute to the room"],
  no: ["Only want accommodation", "Only want networking", "Not planning to build", "Want to spectate"],
};

const TiltCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 18 });
  const sry = useSpring(ry, { stiffness: 120, damping: 18 });
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    if (window.matchMedia("(pointer: coarse), (max-width: 767px)").matches) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
  };

  return (
    <div className="w-full min-w-0 md:[perspective:1200px]">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
        className="relative will-change-transform"
      >
        <div className="relative border border-accent/40 bg-primary/5 p-2">
          <img
            src={squareAsset.url}
            alt="A36 Residency Mumbai residence visual"
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
          {/* technical corners */}
          {[
            "top-0 left-0 border-t-2 border-l-2",
            "top-0 right-0 border-t-2 border-r-2",
            "bottom-0 left-0 border-b-2 border-l-2",
            "bottom-0 right-0 border-b-2 border-r-2",
          ].map((c) => (
            <span key={c} className={`pointer-events-none absolute h-5 w-5 border-accent ${c}`} />
          ))}
        </div>
        <div
          style={{ transform: "translateZ(40px)" }}
          className="a36-drift pointer-events-none absolute -bottom-4 left-2 border border-accent bg-background px-3 py-2 shadow-[0_20px_40px_-20px_hsl(var(--primary)/0.5)] md:-left-4 md:-bottom-5 md:px-4"
        >
          <p className="font-mono text-[10px] tracking-[0.2em] text-accent">COHORT 001 · MUMBAI</p>
        </div>
      </motion.div>
    </div>
  );
};

const InsideTheRoom = () => {
  const [openWord, setOpenWord] = useState<string | null>("BUILD");
  const [fit, setFit] = useState<"yes" | "no">("yes");

  return (
    <section className="relative isolate overflow-hidden bg-secondary py-16 md:py-28">
      <MumbaiHorizon className="pointer-events-none absolute right-0 top-10 z-[1] hidden h-28 w-2/3 opacity-20 md:block" />

      <div className="container relative z-[5] mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
        <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Rise className="min-w-0">
            <TiltCard />
          </Rise>

          <div className="min-w-0">
            <Rise>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                INSIDE THE ROOM
              </p>
              <h2 className="mt-3 font-black tracking-tighter leading-[1.06] text-primary text-[clamp(1.75rem,7vw,3.375rem)] md:mt-4">
                One roof.<br />Different minds.<br />Same momentum.
              </h2>
            </Rise>

            <Rise delay={0.1}>
              <ul className="mt-7 border-t border-border md:mt-9">
                {KEYWORDS.map((w) => {
                  const on = openWord === w.k;
                  return (
                    <li key={w.k} className="border-b border-border">
                      <button
                        type="button"
                        onClick={() => setOpenWord(on ? null : w.k)}
                        className="group flex min-h-[52px] w-full items-center justify-between gap-4 py-3 text-left md:py-4"
                      >
                        <span
                          className={`font-black text-[20px] uppercase tracking-tight transition-colors md:text-[26px] ${
                            on ? "text-accent" : "text-primary"
                          }`}
                        >
                          {w.k}
                        </span>
                        <span className="a36-arrow text-accent">→</span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          on ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="max-w-[58ch] overflow-hidden text-sm text-muted">{w.d}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Rise>

            <Rise delay={0.15}>
              <div className="mt-6 flex flex-wrap gap-2 md:mt-8">
                {TAGS.map((t) => (
                  <span
                    key={t}
                    className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary/70 transition-colors hover:border-accent hover:text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Rise>
          </div>
        </div>

        {/* fit toggle */}
        <Rise delay={0.1}>
          <div className="mt-12 border border-border bg-background p-5 md:mt-16 md:p-8">
            <div className="grid w-full grid-cols-2 border border-border max-[389px]:grid-cols-1 sm:inline-grid sm:w-auto">
              {(["yes", "no"] as const).map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setFit(k)}
                  className={`min-h-[46px] px-4 font-bold text-[11px] uppercase tracking-[0.14em] transition-colors max-[389px]:border-b max-[389px]:border-border max-[389px]:last:border-b-0 sm:px-5 ${
                    fit === k ? "bg-primary text-primary-foreground" : "bg-transparent text-primary/60"
                  }`}
                >
                  {k === "yes" ? "YOU SHOULD APPLY" : "PROBABLY NOT"}
                </button>
              ))}
            </div>
            <motion.ul
              key={fit}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28 }}
              className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2"
            >
              {FIT[fit].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-primary/80">
                  <span className={fit === "yes" ? "text-accent" : "text-muted"}>
                    {fit === "yes" ? "→" : "×"}
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </Rise>

        {/* global notice */}
        <Rise delay={0.1}>
          <div className="mt-6 border-l-2 border-accent bg-accent/10 px-4 py-4 md:px-5 md:py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              GLOBAL APPLICATIONS WELCOME
            </p>
            <p className="mt-2 max-w-[66ch] text-sm leading-relaxed text-primary/80">
              International residents must be independently visa-ready and eligible to enter India.
              A36 Labs does not provide visa sponsorship or visa processing support.
            </p>
          </div>
        </Rise>
      </div>
    </section>
  );
};


/* ---------------- 04 · DAY 16 + ALUMNI ---------------- */

const DemoDay = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bigY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-primary text-primary-foreground py-16 md:py-32"
    >
      <motion.p
        style={{ y: bigY }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[18%] z-[1] select-none text-center font-black leading-none text-[22vw] text-primary-foreground/[0.035] md:top-1/4 md:text-[38vw] md:text-primary-foreground/[0.05]"
      >
        16
      </motion.p>
      <MumbaiWireBridge className="pointer-events-none absolute inset-x-0 top-6 z-[1] hidden h-40 opacity-40 md:block" />
      <OceanGrid className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 opacity-30 md:opacity-50" />

      <div className="container relative z-[5] mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
        <Rise>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">DAY 16</p>
          <h2 className="mt-3 font-black tracking-tighter leading-[1.05] text-[clamp(2rem,9vw,4.5rem)] md:mt-4">
            Show what changed.
          </h2>
          <p className="mt-4 max-w-[64ch] text-[15px] md:text-base text-primary-foreground/70 leading-relaxed">
            Selected residents present what they built to an invited room of founders, investors,
            mentors and residency partners.
          </p>
        </Rise>

        <Rise delay={0.1}>
          <ul className="mt-8 grid grid-cols-1 gap-px border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
            {[
              "Products shipped",
              "Technical integrations",
              "Experiments",
              "Early traction",
              "Open-source work",
              "What comes next",
            ].map((item, i) => (
              <li
                key={item}
                className="group min-w-0 bg-primary px-5 py-5 transition-colors hover:bg-primary-foreground/[0.04] md:py-6"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1.5 font-bold text-sm uppercase tracking-tight">{item}</p>
              </li>
            ))}
          </ul>
        </Rise>

        {/* alumni flow */}
        <Rise delay={0.1}>
          <div className="mt-16 grid items-center gap-8 border-t border-primary-foreground/15 pt-10 md:mt-20 md:pt-14 lg:grid-cols-2 lg:gap-16">
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                A36 RESIDENCY ALUMNI
              </p>
              <h3 className="mt-3 font-black tracking-tighter leading-[1.08] text-[clamp(1.6rem,6.5vw,2.75rem)] md:mt-4">
                The residency ends.<br />The network doesn&apos;t.
              </h3>
              <p className="mt-4 max-w-[62ch] text-[15px] text-primary-foreground/70 leading-relaxed">
                Residents stay in the A36 Residency Alumni Network for introductions, ecosystem
                opportunities and work across future cohorts.
              </p>
            </div>

            <div className="relative min-w-0">
              <ResidencyNodes className="pointer-events-none h-20 w-full opacity-90 md:h-24" />
              <ol className="mt-2 space-y-3">
                {["DAY 16", "COHORT 001", "A36 RESIDENCY ALUMNI", "001 → 002 → 003 → …"].map(
                  (step, i) => (
                    <motion.li
                      key={step}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, delay: i * 0.1 }}
                      className="flex items-center gap-3 border-l-2 border-accent/50 pl-4 font-mono text-[11px] tracking-[0.2em] text-primary-foreground/80"
                    >
                      {step}
                    </motion.li>
                  ),
                )}
              </ol>
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
};


/* ---------------- 05 · PARTNERS ---------------- */

const Partners = () => (
  <section className="relative isolate overflow-hidden bg-background py-16 md:py-24">
    <div className="container relative z-[5] mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
      <Rise>
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">PARTNERS</p>
        <h2 className="mt-3 font-black tracking-tighter leading-[1.05] text-primary text-[clamp(1.75rem,7vw,3.25rem)] md:mt-4">
          Help build the room.
        </h2>
        <p className="mt-4 max-w-[64ch] text-[15px] md:text-base text-muted leading-relaxed">
          Partners bring technology, mentors, developer resources and real challenges to the builders
          in the room.
        </p>
      </Rise>

      <Rise delay={0.1}>
        <ul className="mt-8 grid grid-cols-2 gap-3 max-[359px]:grid-cols-1 md:mt-10 md:grid-cols-3 md:gap-4">
          {["TECHNOLOGY", "ECOSYSTEM", "INSTITUTIONAL", "MEDIA", "COMMUNITY", "RESIDENCY"].map(
            (cat) => (
              <li
                key={cat}
                className="group relative flex min-h-[76px] min-w-0 items-center justify-center border border-border bg-background px-4 py-5 text-center transition-[background-color,box-shadow,transform] duration-200 ease-out md:min-h-[92px] md:hover:-translate-y-[2px] md:hover:bg-secondary md:hover:shadow-[0_10px_24px_-14px_hsl(var(--primary)/0.45),inset_0_0_0_1px_hsl(var(--accent)/0.55)]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60 transition-colors group-hover:text-accent md:text-[11px]">
                  {cat}
                </span>
              </li>
            ),
          )}
        </ul>
      </Rise>

      <Rise delay={0.15}>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            PARTNERS — ANNOUNCING SOON
          </p>
          <div className="hidden h-px flex-1 bg-border sm:block" />
          <a
            href={PARTNER_MAIL}
            className="btn-dark relative z-10 inline-flex min-h-[44px] items-center justify-center"
          >
            PARTNER WITH A36 <span className="a36-arrow ml-2">→</span>
          </a>
        </div>
        <a
          href={PARTNER_MAIL}
          className="relative z-10 mt-4 inline-block font-mono text-[11px] tracking-[0.12em] text-primary/70 underline underline-offset-4 hover:text-accent"
        >
          partnerships@a36labs.com
        </a>
      </Rise>
    </div>
  </section>
);


/* ---------------- 06 · APPLICATION ---------------- */

const FAQS = [
  {
    q: "What is A36 Residency?",
    a: "A 16-day global builder residency in Mumbai where selected founders, developers and product builders live and work in the same room for 15 build days, closing with a Day 16 Demo Day.",
  },
  { q: "When is it?", a: "18 October — 2 November 2026, in Mumbai, India." },
  {
    q: "How are residents selected?",
    a: "Every application is reviewed manually. Selection is based on what you have built, what you can build and what you want to accomplish during the residency.",
  },
  {
    q: "Do I need an existing startup?",
    a: "No. You need to be actively building something real — a product, protocol, tool or open-source project — and be able to ship during the residency.",
  },
  {
    q: "Is accommodation included?",
    a: "Residency logistics, including accommodation and workspace details, are confirmed with selected residents. Nothing is guaranteed before selection.",
  },
  {
    q: "Do you provide visa support?",
    a: "No. International applicants must be independently visa-ready and eligible to enter India. A36 Labs does not provide visa sponsorship or processing.",
  },
];

const Application = () => (
  <section
    id="apply"
    className="relative isolate overflow-hidden bg-primary text-primary-foreground"
  >
    {/* transition visual */}
    <div className="relative z-[2] h-[150px] sm:h-[200px] md:h-[300px]">
      <img
        src={applyAsset.url}
        alt="A36 Residency Mumbai skyline banner"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--primary)/0.55),hsl(var(--primary)))]" />
      <MumbaiWireBridge className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 opacity-50 md:block" />
    </div>

    <div className="container relative z-[5] mx-auto -mt-8 w-full max-w-4xl px-5 pb-20 max-[389px]:px-4 md:px-16 md:pb-24">
      <Rise>
        <MumbaiCoordinates light className="hidden md:block" />
        <h2 className="font-black tracking-tighter leading-[1.05] text-[clamp(1.75rem,7.5vw,3.5rem)] md:mt-5">
          Think you should be in the room?
        </h2>
        <p className="mt-4 max-w-[62ch] text-[15px] md:text-base text-primary-foreground/70 leading-relaxed">
          Every application is reviewed manually. We look at what you have built and what you want to
          get done in Mumbai.
        </p>
      </Rise>

      <Rise delay={0.1}>
        <div className="mt-8 w-full min-w-0 max-w-full border border-accent/30 bg-primary-foreground/[0.04] p-2 md:mt-10 md:max-w-[720px]">
          <iframe
            src={LUMA_EMBED}
            title="A36 Global Residency Mumbai registration"
            loading="lazy"
            allow="fullscreen; payment"
            className="relative z-10 block h-[450px] w-full border-0"
          />
        </div>
        <a
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-4 inline-flex min-h-[44px] items-center font-bold text-[11px] uppercase tracking-[0.16em] text-accent"
        >
          OPEN FULL LUMA REGISTRATION <span className="a36-arrow ml-2">→</span>
        </a>
      </Rise>

      <Rise delay={0.1}>
        <div className="mt-12 border-t border-primary-foreground/15 pt-8 md:mt-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">QUESTIONS?</p>
          <Accordion type="single" collapsible className="mt-4 w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="border-b border-primary-foreground/20"
              >
                <AccordionTrigger className="min-h-[48px] items-start gap-4 py-4 text-left font-bold text-sm hover:no-underline [&>svg]:mt-1 [&>svg]:shrink-0">
                  <span className="min-w-0 flex-1">{f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="max-w-[68ch] pb-5 text-sm leading-relaxed text-primary-foreground/70">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Rise>
    </div>
  </section>
);


/* ---------------- sticky mobile CTA ---------------- */

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const apply = document.getElementById("apply");
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      const applyVisible = apply
        ? apply.getBoundingClientRect().top < window.innerHeight * 0.9
        : false;
      setShow(pastHero && !applyVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-accent/40 bg-primary/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between gap-3 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/80">
        A36 RESIDENCY · MUMBAI
      </p>
      <a
        href="#apply"
        className="btn-gold min-h-[44px] inline-flex items-center justify-center px-5 py-2 text-[11px]"
      >
        APPLY
      </a>
    </div>
  );
};

/* ---------------- page ---------------- */

const Residency = () => (
  <PageWrapper>
    <Hero />
    <ResidencyOS />
    <InsideTheRoom />
    <DemoDay />
    <Partners />
    <Application />
    <StickyCTA />
  </PageWrapper>
);

export default Residency;
