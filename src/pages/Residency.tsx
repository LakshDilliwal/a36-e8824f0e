import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/a36-labs-community-image-3.jpg";
import roomImage from "@/assets/a36-labs-community-image-7.jpg";

const LUMA_URL = "https://luma.com/g3oz48ck";
const LUMA_EMBED = "https://luma.com/embed/event/evt-Xw3tOfbza5zUUKd/simple";
const PARTNER_FORM_URL = "https://forms.gle/ashs3kUvVVey5k4K9";

/* ---------------------------------- data ---------------------------------- */

const meta = [
  "18 OCT — 2 NOV 2026",
  "MUMBAI, INDIA",
  "36 SELECTED RESIDENTS",
];

const thesis = [
  { k: "BUILD", v: "Focused time to work on something that matters." },
  {
    k: "ACCESS",
    v: "Relevant founders, engineers, mentors, operators and partners around you.",
  },
  {
    k: "SHIP",
    v: "Leave with meaningful progress, not another folder of conference notes.",
  },
];

const phases = [
  {
    n: "01",
    tag: "ARRIVE",
    title: "Arrival + Founder Diagnosis",
    body: "Onboarding, introductions, product walkthroughs and individual goals for the residency.",
  },
  {
    n: "02",
    tag: "BUILD",
    title: "Build Cycle I",
    body: "Focused building with optional technical clinics and mentor office hours.",
  },
  {
    n: "03",
    tag: "REVIEW",
    title: "Midpoint Review",
    body: "Show what changed, identify blockers and connect each builder with relevant people or resources.",
  },
  {
    n: "04",
    tag: "BUILD AGAIN",
    title: "Build Cycle II",
    body: "Continue shipping with optional partner tracks, technical resources and targeted workshops.",
  },
  {
    n: "05",
    tag: "REFINE",
    title: "Product, GTM & Founder Clinics",
    body: "Product review, distribution, security, fundraising, storytelling and scaling sessions.",
  },
  {
    n: "06",
    tag: "PREPARE",
    title: "Demo Preparation",
    body: "Final product reviews, storytelling and demos.",
  },
  {
    n: "07",
    tag: "DEMO",
    title: "A36 Demo Day · 2 November",
    body: "Selected residents present what they built to invited founders, investors, mentors, ecosystem leaders and partners.",
  },
];

const rhythm = [
  ["08:00", "Breakfast / slow start"],
  ["09:00", "Deep work"],
  ["11:00", "Optional mentor office hours"],
  ["13:00", "Lunch"],
  ["14:00", "Build"],
  ["17:00", "Optional workshop / product clinic"],
  ["19:00", "Dinner"],
  ["20:00", "Founder conversations / build / reset"],
];

const keywords = [
  "AI",
  "WEB3",
  "AI × WEB3",
  "OPEN SOURCE",
  "DEVELOPER TOOLS",
  "PAYMENTS",
  "CONSUMER",
  "INFRASTRUCTURE",
  "AUTOMATION",
  "PRIVACY",
  "SECURITY",
  "ONCHAIN",
  "EXPERIMENTAL TECH",
];

const mentorFormats = [
  "1:1 office hours",
  "Technical clinics",
  "Product reviews",
  "Small workshops",
  "Founder firesides",
  "Investor conversations",
  "Dinner conversations",
];

const tracks = [
  { t: "AI INFRASTRUCTURE", d: "Compute, models, tooling and agent infrastructure." },
  { t: "DEVELOPER TOOLS", d: "SDKs, testing, deployment and builder workflow." },
  { t: "PAYMENTS", d: "Rails, settlement, stablecoins and money movement." },
  { t: "OPEN INNOVATION", d: "Open briefs, bounties and experimental challenges." },
];

const applyYes = [
  "You are actively building.",
  "You have shipped before or can start quickly.",
  "You are a technical founder, developer, product builder, researcher, designer who builds or exceptional student.",
  "You want focused time around ambitious people.",
  "You are comfortable giving and receiving feedback.",
  "You want to leave Mumbai with meaningful progress.",
];

const applyNo = [
  "You are applying only for accommodation.",
  "You mainly want networking.",
  "You expect a conference schedule.",
  "You are not planning to build.",
  "You want spectatorship instead of participation.",
];

const benefits = [
  "A36 Residency house",
  "Shared workspace",
  "Residency programming",
  "Mentor and expert access",
  "Partner workshops and technical resources",
  "Founder community",
  "A36 Demo Day",
  "A36 Residency Alumni Network",
];

const demoItems = [
  "Product shipped",
  "New features",
  "Technical integrations",
  "Experiments",
  "Open-source work",
  "Early traction",
  "Customer insights",
  "Next milestones",
];

const alumniPerks = [
  "Founder introductions",
  "Investor connections",
  "Ecosystem opportunities",
  "Partner programs",
  "Alumni gatherings",
  "Future A36 programs",
  "Cross-cohort collaboration",
  "Opportunities to mentor future residents",
];

const partnerCategories = [
  "Residency Partners",
  "Technology Partners",
  "Ecosystem Partners",
  "Institutional Partners",
  "Media Partners",
  "Community Partners",
];

const faqs = [
  ["What is A36 Residency?", "A curated 16-day builder residency in Mumbai."],
  ["When is it?", "18 October – 2 November 2026."],
  ["How many people will be selected?", "The residency is capped at 36 selected residents."],
  ["Is this a hackathon?", "No. It is a focused residential building program."],
  [
    "Do I need an existing startup?",
    "No. Applicants should, however, be capable of building and shipping meaningful work.",
  ],
  [
    "Is it only for AI or Web3?",
    "No. The residency is open to builders across AI, Web3 and adjacent frontier technologies.",
  ],
  [
    "Is accommodation included?",
    "Final accommodation, meal and resident-support details will be communicated to selected applicants based on the final residency partner structure.",
  ],
  [
    "Do you provide visas?",
    "No. International applicants must independently arrange and hold the appropriate visa/documentation required to enter India.",
  ],
  [
    "How are residents selected?",
    "Every application is reviewed manually based on previous work, ability to execute and what the applicant wants to accomplish during the residency.",
  ],
];

/* -------------------------------- utilities ------------------------------- */

const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

/* Decorative hero technical layer */
const HeroTech = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* grid */}
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          "linear-gradient(to right, hsl(var(--primary)/0.07) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)/0.07) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(80% 70% at 60% 30%, #000 20%, transparent 90%)",
        WebkitMaskImage: "radial-gradient(80% 70% at 60% 30%, #000 20%, transparent 90%)",
      }}
    />
    {/* orbits */}
    <svg
      className="absolute -right-24 -top-24 h-[620px] w-[620px] a36-orbit-slow"
      viewBox="0 0 600 600"
      fill="none"
    >
      <circle cx="300" cy="300" r="290" stroke="hsl(var(--accent)/0.30)" strokeWidth="1" />
      <circle
        cx="300"
        cy="300"
        r="210"
        stroke="hsl(var(--accent)/0.22)"
        strokeWidth="1"
        strokeDasharray="4 8"
      />
      <circle cx="300" cy="300" r="130" stroke="hsl(var(--primary)/0.15)" strokeWidth="1" />
      <circle cx="590" cy="300" r="4" fill="hsl(var(--accent))" />
      <circle cx="300" cy="90" r="3" fill="hsl(var(--accent)/0.7)" />
    </svg>
    <svg
      className="absolute -left-32 bottom-[-160px] h-[460px] w-[460px] a36-orbit-rev"
      viewBox="0 0 400 400"
      fill="none"
    >
      <circle
        cx="200"
        cy="200"
        r="190"
        stroke="hsl(var(--accent)/0.20)"
        strokeWidth="1"
        strokeDasharray="2 10"
      />
      <circle cx="200" cy="10" r="3" fill="hsl(var(--accent)/0.6)" />
    </svg>
  </div>
);

/* ---------------------------------- page ---------------------------------- */

const Residency = () => {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 60]);

  const { scrollYProgress: tlProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const tlScale = useSpring(tlProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <PageWrapper>
      {/* ============================ 1. HERO ============================ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-background pt-16 pb-20 md:pt-24 md:pb-28"
      >
        <HeroTech />
        <div className="container relative max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow-dark mb-6">A36 GLOBAL RESIDENCY · MUMBAI 2026</p>
              </Reveal>
              <h1 className="font-black text-[42px] sm:text-[58px] lg:text-[80px] leading-[0.95] tracking-heading text-primary">
                <Reveal y={22}>
                  <span className="block">16 Days.</span>
                </Reveal>
                <Reveal y={22} delay={0.08}>
                  <span className="block">
                    One Room Full of{" "}
                    <span className="relative inline-block">
                      People Who Ship.
                      <span
                        aria-hidden
                        className="absolute left-0 -bottom-1 h-[3px] w-full bg-accent/70"
                      />
                    </span>
                  </span>
                </Reveal>
              </h1>
              <Reveal delay={0.16}>
                <p className="mt-8 max-w-[560px] text-base md:text-lg text-primary/70">
                  A36 Global Residency brings together a selected group of builders in Mumbai to
                  live, build, learn and ship alongside each other.
                </p>
                <p className="mt-3 max-w-[560px] text-sm font-bold uppercase tracking-[0.08em] text-primary/60">
                  15 days of focused building. Day 16 ends with A36 Demo Day.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-y border-border py-5">
                  {meta.map((m) => (
                    <dd
                      key={m}
                      className="text-[11px] font-black uppercase tracking-[0.18em] text-primary/70"
                    >
                      {m}
                    </dd>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={0.28}>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a href="#apply" className="btn-primary group inline-block text-center">
                    APPLY FOR RESIDENCY <span className="a36-arrow">→</span>
                  </a>
                  <a
                    href={PARTNER_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost group inline-block text-center"
                  >
                    PARTNER WITH A36 <span className="a36-arrow">→</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* image */}
            <div className="lg:col-span-5">
              <motion.div style={{ y: imgY }} className="relative">
                <div className="absolute -inset-3 border border-accent/40" aria-hidden />
                <div className="a36-img-zoom relative border border-border bg-warm-cream">
                  <img
                    src={heroImage}
                    alt="Builders working together at an A36 Labs residency environment"
                    loading="eager"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                    <span>COHORT 001</span>
                    <span className="text-accent">MUMBAI / 2026</span>
                  </div>
                </div>
                <span
                  aria-hidden
                  className="absolute -left-6 top-1/3 hidden h-px w-16 bg-accent/60 lg:block"
                />
                <span className="mt-4 block text-[10px] font-black uppercase tracking-[0.24em] text-primary/40">
                  19.0760° N / 72.8777° E · A36 RESIDENCY
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== 2. THESIS =========================== */}
      <section className="bg-warm-cream py-20 md:py-28">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow-dark mb-5">WHY A RESIDENCY?</p>
            <h2 className="font-black text-[34px] md:text-[60px] leading-[1.02] tracking-heading text-primary max-w-[900px]">
              The room is part of the product.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[980px]">
              <p className="text-base text-primary/70">
                Great builders do not always need another conference, accelerator or packed
                schedule.
              </p>
              <p className="text-base text-primary/70">
                Sometimes they need uninterrupted time, the right people nearby and enough space to
                make meaningful progress. A36 Residency is designed around that idea.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-16 divide-y divide-border border-y border-border">
            {thesis.map((t) => (
              <StaggerItem key={t.k}>
                <div className="group grid grid-cols-1 md:grid-cols-12 items-baseline gap-3 py-8 transition-colors duration-200 hover:bg-background/60">
                  <h3 className="md:col-span-4 font-black text-[34px] md:text-[52px] leading-none tracking-heading text-primary group-hover:text-accent transition-colors duration-200">
                    {t.k}
                  </h3>
                  <p className="md:col-span-7 md:col-start-6 text-base text-primary/70">{t.v}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ========================= 3. RESIDENCY OS ======================== */}
      <section className="bg-background py-20 md:py-28 overflow-hidden">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow-dark mb-5">THE RESIDENCY OS</p>
            <h2 className="font-black text-[34px] md:text-[56px] leading-[1.02] tracking-heading text-primary max-w-[820px]">
              15 days to build.
              <br />1 day to show what changed.
            </h2>
          </Reveal>

          <div ref={timelineRef} className="relative mt-14">
            {/* progress rail */}
            <div
              aria-hidden
              className="absolute left-[11px] top-0 h-full w-px bg-border md:left-0 md:top-[11px] md:h-px md:w-full"
            >
              <motion.div
                style={
                  reduce
                    ? undefined
                    : { scaleY: tlScale, scaleX: tlScale, transformOrigin: "top left" }
                }
                className="h-full w-full bg-accent md:origin-left"
              />
            </div>

            <ol className="grid grid-cols-1 gap-8 pl-9 md:grid-cols-7 md:gap-4 md:pl-0 md:pt-10">
              {phases.map((p, i) => (
                <li key={p.n} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-9 top-1.5 h-2.5 w-2.5 bg-accent md:-top-[43px] md:left-0"
                  />
                  <Reveal delay={i * 0.05}>
                    <p className="text-[11px] font-black tracking-[0.2em] text-accent">{p.n}</p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
                      {p.tag}
                    </p>
                    <h3 className="mt-3 font-black text-base leading-tight text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{p.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ======================== 4. DAILY RHYTHM ======================== */}
      <section className="bg-warm-cream py-20 md:py-28">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <p className="eyebrow-dark mb-5">THE DAILY RHYTHM</p>
                  <h2 className="font-black text-[32px] md:text-[48px] leading-[1.04] tracking-heading text-primary">
                    Build first. Everything else supports that.
                  </h2>
                  <p className="mt-6 text-base text-primary/70 max-w-[420px]">
                    There is no mandatory conference schedule.
                  </p>
                  <p className="mt-3 text-base text-primary/70 max-w-[420px]">
                    Most workshops, mentor sessions and clinics are optional. The residency exists
                    to create focus, not destroy it.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Stagger className="border-t border-border" stagger={0.05}>
                {rhythm.map(([time, label]) => (
                  <StaggerItem key={time}>
                    <div className="group flex items-baseline gap-6 border-b border-border py-5 transition-colors duration-200 hover:bg-background/70">
                      <span className="w-[68px] shrink-0 font-black text-sm tracking-[0.06em] text-accent">
                        {time}
                      </span>
                      <span className="text-base text-primary/80 group-hover:text-primary transition-colors duration-200">
                        {label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== 5. WHAT PEOPLE BUILD ===================== */}
      <section className="bg-background py-20 md:py-28 overflow-hidden">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow-dark mb-5">SCOPE</p>
            <h2 className="font-black text-[32px] md:text-[52px] leading-[1.03] tracking-heading text-primary max-w-[860px]">
              No narrow brief. Build what deserves to exist.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-12 border-y border-border py-5" aria-hidden>
          <div className="flex w-max animate-marquee-full items-center">
            {[...keywords, ...keywords, ...keywords].map((k, i) => (
              <span key={i} className="flex items-center">
                <span className="px-7 text-[15px] font-black uppercase tracking-[0.18em] text-primary/70">
                  {k}
                </span>
                <span className="text-accent text-[10px]">✦</span>
              </span>
            ))}
          </div>
        </div>

        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[980px]">
              <p className="text-base text-primary/70">
                Residents are not forced into a predefined category.
              </p>
              <p className="text-base text-primary/70">
                Partner-powered tracks, technologies, credits, bounties or challenges may be
                introduced during the residency, but builders remain free to work on the product
                that makes sense for them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================ 6. MENTORS ========================= */}
      <section className="bg-warm-cream py-20 md:py-28">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow-dark mb-5">MENTORS, NOT LECTURES</p>
                <h2 className="font-black text-[32px] md:text-[50px] leading-[1.03] tracking-heading text-primary">
                  The right person at the right moment.
                </h2>
                <p className="mt-6 text-base text-primary/70 max-w-[520px]">
                  A36 Labs will bring selected founders, engineers, researchers, investors, product
                  leaders and operators into the residency throughout the program.
                </p>
                <p className="mt-8 font-black text-xl md:text-2xl leading-tight text-primary max-w-[480px]">
                  The goal is not to collect mentors.
                  <br />
                  <span className="text-accent">The goal is to unblock builders.</span>
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mentorFormats.map((f) => (
                  <StaggerItem key={f}>
                    <div className="a36-card-lift border border-border bg-background p-4 text-sm font-bold text-primary">
                      {f}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.1}>
                <div className="mt-6 border border-dashed border-border bg-background/60 p-6">
                  <div className="flex flex-wrap gap-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span
                        key={i}
                        aria-hidden
                        className="h-12 w-12 border border-border bg-warm-cream a36-drift"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                    ))}
                  </div>
                  <p className="mt-5 text-[11px] font-black uppercase tracking-[0.2em] text-primary/50">
                    MENTORS &amp; OPERATORS — ANNOUNCING SOON
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= 7. PARTNER TRACKS ===================== */}
      <section className="bg-background py-20 md:py-28">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow-dark mb-5">PARTNER TRACKS</p>
            <h2 className="font-black text-[32px] md:text-[50px] leading-[1.03] tracking-heading text-primary max-w-[860px]">
              Partners don't just put logos on the wall.
            </h2>
            <p className="mt-6 text-base text-primary/70 max-w-[720px]">
              Residency partners may bring technology, infrastructure, developer credits, product
              challenges, mentors, bounties and technical support directly into the room.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tracks.map((t) => (
              <StaggerItem key={t.t}>
                <div className="a36-card-lift a36-tick-corners a36-tick-corners-gold h-full border border-border bg-warm-cream p-6">
                  <h3 className="font-black text-sm uppercase tracking-[0.1em] text-primary">
                    {t.t}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">{t.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-primary/60">
              Partner-powered tracks will be announced as the residency develops.
            </p>
            <a
              href={PARTNER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark group mt-8 inline-block"
            >
              PARTNER WITH THE RESIDENCY <span className="a36-arrow">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ========================= 8. WHO APPLIES ======================== */}
      <section className="bg-warm-cream py-20 md:py-28">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow-dark mb-5">WHO SHOULD APPLY?</p>
            <h2 className="font-black text-[32px] md:text-[50px] leading-[1.03] tracking-heading text-primary max-w-[760px]">
              Selective by design.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full border border-border bg-background p-7">
                <h3 className="font-black text-lg text-primary">You should probably apply if:</h3>
                <ul className="mt-6 space-y-4">
                  {applyYes.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-green-600/40 text-[11px] font-black text-green-700"
                      >
                        ✓
                      </span>
                      <p className="text-sm text-primary/80">{r}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full border border-border bg-background p-7">
                <h3 className="font-black text-lg text-primary">Probably not for you if:</h3>
                <ul className="mt-6 space-y-4">
                  {applyNo.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-red-600/30 text-[11px] font-black text-red-700"
                      >
                        ✗
                      </span>
                      <p className="text-sm text-primary/80">{r}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== 9. INTERNATIONAL BUILDERS ================= */}
      <section className="bg-background py-16 md:py-20">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="border-l-2 border-accent bg-warm-cream/60 p-7 md:p-10">
              <h2 className="font-black text-[26px] md:text-[38px] leading-tight tracking-heading text-primary">
                Global applications are welcome. 🌍
              </h2>
              <p className="mt-4 text-base text-primary/70 max-w-[720px]">
                International builders are welcome to apply and join the Mumbai residency.
              </p>
              <p className="mt-5 font-bold text-sm md:text-base text-primary max-w-[760px]">
                International residents must be visa-ready and independently eligible to enter
                India. A36 Labs does not provide visa sponsorship or visa processing support.
              </p>
              <p className="mt-3 text-sm text-primary/60 max-w-[720px]">
                Applicants should have the required travel and visa documentation before confirming
                participation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====================== 10. WHAT RESIDENTS GET =================== */}
      <section className="bg-warm-cream py-20 md:py-28">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow-dark mb-5">WHAT RESIDENTS GET</p>
                <h2 className="font-black text-[32px] md:text-[50px] leading-[1.03] tracking-heading text-primary">
                  Everything around the work.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="a36-img-zoom mt-8 hidden border border-border lg:block">
                  <img
                    src={roomImage}
                    alt="Builders collaborating in a shared A36 Labs workspace"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Stagger className="border-t border-border" stagger={0.05}>
                {benefits.map((b, i) => (
                  <StaggerItem key={b}>
                    <div className="group flex items-baseline gap-5 border-b border-border py-5">
                      <span className="text-[11px] font-black tracking-[0.18em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base md:text-lg font-bold text-primary group-hover:text-accent transition-colors duration-200">
                        {b}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1}>
                <p className="mt-6 text-sm text-primary/60">
                  Accommodation, meals, travel and additional resident support will depend on the
                  final residency partner structure and will be communicated clearly to selected
                  residents before confirmation.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== 11. DEMO DAY ======================== */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--accent)/0.10) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--accent)/0.10) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(70% 70% at 30% 40%, #000, transparent 85%)",
            WebkitMaskImage: "radial-gradient(70% 70% at 30% 40%, #000, transparent 85%)",
          }}
        />
        <div className="container relative max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow mb-5">DAY 16 · 02 NOV 2026</p>
            <h2 className="font-black text-[46px] md:text-[86px] leading-[0.95] tracking-heading text-white">
              Show what changed.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px]">
              <p className="text-base text-white/70">
                Demo Day is not about polished startup theatre.
              </p>
              <p className="text-base text-white/70">
                Residents show what they shipped, tested, learned and where the product goes next.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {demoItems.map((d) => (
              <StaggerItem key={d}>
                <div className="h-full bg-primary p-5 text-sm font-bold text-white/80 transition-colors duration-200 hover:text-accent">
                  {d}
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap items-end gap-10">
              <div>
                <p className="font-black text-[48px] md:text-[64px] leading-none text-accent">
                  <CountUp to={36} />
                </p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                  Selected residents
                </p>
              </div>
              <div>
                <p className="font-black text-[48px] md:text-[64px] leading-none text-accent">
                  <CountUp to={16} />
                </p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                  Days in the room
                </p>
              </div>
              <div>
                <p className="font-black text-[48px] md:text-[64px] leading-none text-accent">
                  <CountUp to={1} />
                </p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/50">
                  Demo Day
                </p>
              </div>
            </div>
            <p className="mt-10 text-sm text-white/60 max-w-[720px]">
              Selected residents may present to an invited audience of founders, investors,
              ecosystem leaders, mentors and residency partners.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================ 12. ALUMNI ========================= */}
      <section className="bg-background py-20 md:py-28">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow-dark mb-5">A36 RESIDENCY ALUMNI</p>
                <h2 className="font-black text-[32px] md:text-[52px] leading-[1.02] tracking-heading text-primary">
                  The residency ends.
                  <br />
                  The network doesn't.
                </h2>
                <p className="mt-6 text-base text-primary/70 max-w-[520px]">
                  Selected residents become part of the private A36 Residency Alumni Network.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  {["001", "002", "003"].map((c, i) => (
                    <span key={c} className="flex items-center gap-3">
                      <span
                        className={`border px-4 py-2 text-[11px] font-black tracking-[0.2em] ${
                          i === 0
                            ? "border-accent bg-accent/10 text-primary"
                            : "border-dashed border-border text-primary/40"
                        }`}
                      >
                        {c}
                      </span>
                      <span aria-hidden className="text-accent">
                        →
                      </span>
                    </span>
                  ))}
                  <span className="text-[11px] font-black tracking-[0.2em] text-primary/30">
                    ...
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-border bg-border">
                {alumniPerks.map((p) => (
                  <StaggerItem key={p}>
                    <div className="h-full bg-background p-5 text-sm text-primary/80">{p}</div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 13. PARTNERS & COLLABORATORS ============== */}
      <section className="bg-warm-cream py-20 md:py-24">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow-dark mb-5">PARTNERS &amp; COLLABORATORS</p>
            <h2 className="font-black text-[28px] md:text-[42px] leading-[1.05] tracking-heading text-primary">
              Residency Partners — Announcing Soon
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {partnerCategories.map((c) => (
              <StaggerItem key={c}>
                <div className="border border-dashed border-border bg-background/50 p-5 text-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-primary/50">
                    {c}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============================ 14. A36 LABS ======================= */}
      <section className="bg-background py-16 md:py-20">
        <div className="container max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border pt-12">
              <h2 className="lg:col-span-4 font-black text-[28px] md:text-[38px] leading-tight tracking-heading text-primary">
                Built by A36 Labs.
              </h2>
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-base text-primary/70">
                  A36 Labs is a global frontier technology ecosystem connecting founders,
                  developers, operators, students, startups and emerging technology communities.
                </p>
                <p className="mt-4 text-base text-primary/70">
                  We create environments where ambitious people can meet the right people, access
                  useful resources and ship meaningful work.
                </p>
                <a
                  href="https://a36labs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-block text-sm font-black uppercase tracking-[0.12em] text-primary underline underline-offset-4 hover:text-accent"
                >
                  a36labs.com <span className="a36-arrow">→</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =============================== FAQ ============================= */}
      <section className="bg-warm-cream py-20 md:py-24">
        <div className="container max-w-[900px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow-dark mb-5">FAQ</p>
            <h2 className="font-black text-[30px] md:text-[44px] leading-[1.05] tracking-heading text-primary">
              Questions, answered.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion type="single" collapsible className="mt-10 border-t border-border">
              {faqs.map(([q, a]) => (
                <AccordionItem key={q} value={q} className="border-b border-border">
                  <AccordionTrigger className="text-left font-black text-base text-primary hover:text-accent hover:no-underline">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-primary/70">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ========================== 15. APPLICATION ====================== */}
      <section id="apply" className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="container relative max-w-[1360px] mx-auto px-6 md:px-12">
          <Reveal>
            <p className="eyebrow mb-5">APPLICATIONS</p>
            <h2 className="font-black text-[34px] md:text-[58px] leading-[1.02] tracking-heading text-white max-w-[760px]">
              Think you should be in the room?
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px]">
              <p className="text-sm text-white/70">Every application is reviewed manually.</p>
              <p className="text-sm text-white/70">
                Selection is based on what you have built, what you are capable of building and
                what you want to accomplish during the residency.
              </p>
              <p className="text-sm text-white/70">
                Registration does not guarantee acceptance.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 w-full max-w-[680px]">
              <iframe
                src={LUMA_EMBED}
                title="A36 Global Residency Mumbai registration"
                frameBorder="0"
                loading="lazy"
                allow="fullscreen; payment"
                aria-hidden="false"
                tabIndex={0}
                style={{ border: "1px solid #bfcbda88" }}
                className="block h-[600px] w-full md:h-[620px]"
              />
              <p className="mt-6 text-sm text-white/60">
                Having trouble with the embed?{" "}
                <a
                  href={LUMA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-bold text-white underline underline-offset-4 hover:text-accent"
                >
                  OPEN FULL LUMA REGISTRATION <span className="a36-arrow">→</span>
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================= 16. PARTNERSHIP CTA ===================== */}
      <section className="relative overflow-hidden bg-dark-bg py-20 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 a36-grid-drift opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--accent)/0.12) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--accent)/0.12) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(70% 80% at 50% 50%, #000, transparent 85%)",
            WebkitMaskImage: "radial-gradient(70% 80% at 50% 50%, #000, transparent 85%)",
          }}
        />
        <div className="container relative max-w-[1360px] mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="font-black text-[38px] md:text-[68px] leading-[0.98] tracking-heading text-white">
              Help build the room.
            </h2>
            <p className="mx-auto mt-6 max-w-[700px] text-base text-white/70">
              A36 Residency partners get direct access to a selected builder ecosystem and
              opportunities to support real products, integrations, learning and founder
              relationships.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={PARTNER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group inline-block"
              >
                PARTNER WITH A36 <span className="a36-arrow">→</span>
              </a>
              <a
                href="mailto:partnerships@a36labs.com"
                className="text-sm font-bold text-white/70 underline underline-offset-4 hover:text-accent"
              >
                partnerships@a36labs.com
              </a>
            </div>
            <p className="mt-12 text-[10px] font-black uppercase tracking-[0.24em] text-white/35">
              A36 GLOBAL RESIDENCY · MUMBAI 2026
            </p>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Residency;
