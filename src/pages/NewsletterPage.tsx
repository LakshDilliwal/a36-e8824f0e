import { useRef } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import cover005 from "@/assets/signal-005-builder-stack.png";
import cover004 from "@/assets/signal-004-ai-talent-war.png";
import cover003 from "@/assets/signal-003-force-multiplier.png";

const ease = [0.22, 1, 0.36, 1] as const;

const issues = [
  {
    cover: cover005,
    category: "BUILDER STACK",
    date: "JULY 2026",
    title: "The Builder Stack of July 2026",
    excerpt: "The tools serious builders are actually using to ship faster this month.",
    href: "https://open.substack.com/pub/a36signal/p/the-builder-stack-of-july-2026?r=8bb3e0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    cover: cover004,
    category: "AI",
    date: "JUNE 2026",
    title: "The AI Talent War Has Officially Begun",
    excerpt: "Why compute isn't the only scarce resource anymore.",
    href: "https://a36signal.substack.com/p/the-ai-talent-war-has-officially?r=8bb3e0",
  },
  {
    cover: cover003,
    category: "AI",
    date: "JUNE 2026",
    title: "AI Is a Force Multiplier, Not a Replacement",
    excerpt: "Why companies embracing AI will outperform the ones that fear it.",
    href: "https://a36signal.substack.com/p/ai-is-a-force-multiplier-not-a-replacement?r=8bb3e0",
  },
];

const pillars = [
  {
    title: "Builder Intelligence",
    body: "Curated analysis of startup, AI and ecosystem shifts that actually matter.",
  },
  {
    title: "Opportunities",
    body: "Hand-picked grants, hackathons, accelerators, jobs, fellowships and ecosystem programs.",
  },
  {
    title: "Frontier Technology",
    body: "Weekly coverage across AI, Web3, infrastructure, robotics, crypto and emerging technologies.",
  },
  {
    title: "Founder Perspective",
    body: "Practical insights, builder stories and market observations from operators and founders.",
  },
];

/* ---------- Hero mockup with parallax + float ---------- */
const HeroMockup = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-40, 40], [6, -6]), { stiffness: 120, damping: 15 });
  const ry = useSpring(useTransform(mx, [-40, 40], [-6, 6]), { stiffness: 120, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative w-full"
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease, delay: 0.15 }}
    >
      <motion.a
        href={issues[0].href}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-full overflow-hidden bg-dark-card border border-white/10"
             style={{ aspectRatio: "16/9", boxShadow: "0 50px 100px -30px rgba(0,0,0,0.7), 0 0 0 1px hsl(var(--accent) / 0.12)" }}>
          <img
            src={issues[0].cover}
            alt={issues[0].title}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-[10px] tracking-[0.2em] text-accent font-bold">LATEST ISSUE · {issues[0].date}</p>
            <h3 className="text-white font-black text-[16px] md:text-[20px] mt-1 leading-tight">{issues[0].title}</h3>
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

const NewsletterPage = () => {
  const reduce = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: i * 0.06 } }),
  };

  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative bg-background overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50% 40% at 90% 10%, hsl(var(--accent) / 0.10), transparent 70%), radial-gradient(45% 40% at 5% 90%, hsl(var(--primary) / 0.05), transparent 70%)" }} />
        <div className="container relative max-w-[1240px] mx-auto px-6 md:px-16 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
              <motion.p variants={fadeUp} className="eyebrow-dark mb-5">A36 SIGNAL</motion.p>
              <motion.h1 variants={fadeUp} className="font-black text-[44px] md:text-[68px] leading-[1.02] tracking-heading text-primary">
                Weekly Signal For<br />Serious Builders.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[15px] md:text-[17px] text-primary/75 mt-6 max-w-[560px] leading-relaxed">
                Curated opportunities, startup intelligence, AI breakthroughs, protocol updates and ecosystem signals from across frontier technology—delivered with clarity for founders, builders and operators.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-5 text-[13.5px] text-primary/70">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent" />
                  Editorial Publication
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent" />
                  Free Subscription
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent" />
                  Weekly Dispatch
                </span>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
                <a href="https://a36signal.substack.com/" target="_blank" rel="noopener noreferrer"
                   className="group btn-primary inline-flex items-center gap-2">
                  READ ON SUBSTACK <span className="a36-arrow">→</span>
                </a>
                <a href="#latest-issues" className="group btn-ghost inline-flex items-center gap-2">
                  BROWSE LATEST ISSUES <span className="a36-arrow">→</span>
                </a>
              </motion.div>
            </motion.div>

            <div className="relative"><HeroMockup /></div>
          </div>
        </div>
      </section>

      {/* LATEST ISSUES */}
      <section id="latest-issues" className="bg-background py-24 md:py-36">
        <div className="container max-w-[1240px] mx-auto px-6 md:px-16">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="eyebrow-dark mb-3">EDITORIAL</p>
              <h2 className="font-black text-[32px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
                Latest Issues
              </h2>
            </div>
            <a href="https://a36signal.substack.com/archive" target="_blank" rel="noopener noreferrer"
               className="hidden md:inline-flex group items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-primary hover:text-accent transition-colors">
              VIEW ARCHIVE <span className="a36-arrow">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {issues.map((post, i) => (
              <motion.a key={post.href} href={post.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: reduce ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease, delay: i * 0.1 }}
                className="a36-issue-card group relative flex flex-col bg-white border border-border overflow-hidden">
                <div className="relative w-full overflow-hidden bg-primary" style={{ aspectRatio: "16/9" }}>
                  <img src={post.cover} alt={post.title} loading="lazy"
                    className="a36-issue-img absolute inset-0 w-full h-full object-cover"
                    style={{ transition: "transform 700ms cubic-bezier(0.22,1,0.36,1), filter 400ms ease" }} />
                  <span className="a36-issue-shine pointer-events-none absolute inset-0" aria-hidden />
                </div>
                <div className="flex-1 flex flex-col p-6 md:p-7">
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-primary/50 uppercase">
                    <span className="text-accent">{post.category}</span>
                    <span className="w-1 h-1 bg-primary/30" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-black text-[20px] md:text-[22px] text-primary leading-[1.2] tracking-heading mt-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-primary/65 mt-3 leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-accent font-bold text-[11px] uppercase tracking-[0.18em] mt-6 inline-flex items-center gap-2">
                    READ ARTICLE <span className="a36-arrow">→</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS A36 SIGNAL? */}
      <section className="bg-warm-cream py-24 md:py-36">
        <div className="container max-w-[1240px] mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="max-w-[780px]"
          >
            <p className="eyebrow-dark mb-4">EDITORIAL</p>
            <h2 className="font-black text-[32px] md:text-[52px] leading-[1.05] tracking-heading text-primary mb-8">
              What is A36 Signal?
            </h2>
            <div className="space-y-5 text-[15.5px] md:text-[17px] text-primary/75 leading-relaxed">
              <p>
                A36 Signal is the editorial publication of A36 Labs.
              </p>
              <p>
                Each edition curates the most important opportunities, startup movements, AI breakthroughs, protocol updates, founder insights and ecosystem trends across frontier technology—so builders spend less time filtering information and more time building.
              </p>
              <p className="text-primary">
                No hype. No noise. Only high-signal insights.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY BUILDERS READ */}
      <section className="bg-background py-24 md:py-36">
        <div className="container max-w-[1240px] mx-auto px-6 md:px-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }} className="mb-14 md:mb-20">
            <motion.p variants={fadeUp} className="eyebrow-dark mb-3">WHY IT MATTERS</motion.p>
            <motion.h2 variants={fadeUp} className="font-black text-[32px] md:text-[52px] leading-[1.05] tracking-heading text-primary max-w-[720px]">
              Why Builders Read A36 Signal
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="a36-pillar-card group relative bg-white border border-border p-6 md:p-7 flex flex-col">
                <h3 className="font-black text-primary text-[18px] tracking-heading">{p.title}</h3>
                <p className="text-[13.5px] text-primary/65 mt-2 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="relative bg-primary py-24 md:py-36 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(55% 45% at 50% 0%, hsl(var(--accent) / 0.12), transparent 70%), radial-gradient(60% 50% at 50% 100%, hsl(var(--accent) / 0.06), transparent 70%)" }} />
        <div className="container relative max-w-[1240px] mx-auto px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease }}
            className="a36-subscribe-hero mx-auto w-full max-w-[640px] bg-dark-card border border-white/10 p-8 md:p-12 text-center relative"
            style={{ boxShadow: "0 60px 120px -40px rgba(0,0,0,0.8), 0 0 0 1px hsl(var(--accent) / 0.1)" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="font-black text-white text-[22px] tracking-heading">
                A36<span className="text-accent">.</span>
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="eyebrow">A36 SIGNAL</span>
            </div>
            <h2 className="font-black text-white text-[30px] md:text-[42px] leading-[1.05] tracking-heading">
              One email.<br />Infinite signal.
            </h2>
            <p className="text-[14px] md:text-[15px] text-white/60 mt-4 max-w-[440px] mx-auto leading-relaxed">
              Join thousands of builders following A36 Signal for curated opportunities, startup insights and frontier technology updates.
            </p>

            <div className="mt-8 flex justify-center">
              <iframe
                title="A36 Signal — Substack subscribe"
                src="https://a36signal.substack.com/embed?transparent=1&light=1"
                width="480"
                height="320"
                style={{ border: 0, background: "transparent", width: "100%", maxWidth: 480 }}
                frameBorder={0}
                scrolling="no"
              />
            </div>

            <a href="https://a36signal.substack.com/archive" target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 mt-6 text-[12px] font-bold uppercase tracking-[0.18em] text-white/70 hover:text-accent transition-colors">
              READ PREVIOUS EDITIONS <span className="a36-arrow">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* scoped interactions */}
      <style>{`
        .a36-issue-card {
          transition: transform 450ms cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 300ms ease-out,
                      box-shadow 450ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .a36-issue-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: hsl(var(--accent) / 0.55);
          box-shadow: 0 40px 70px -32px rgba(31,41,55,0.35),
                      0 0 0 1px hsl(var(--accent) / 0.22);
        }
        .a36-issue-card:hover .a36-issue-img { transform: scale(1.06); filter: brightness(1.04); }
        .a36-issue-card:hover .a36-arrow { transform: translateX(4px); }
        .a36-issue-shine {
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%);
          transform: translateX(-120%);
          transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
          mix-blend-mode: overlay;
        }
        .a36-issue-card:hover .a36-issue-shine { transform: translateX(120%); }

        .a36-pillar-card {
          transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 260ms ease-out,
                      box-shadow 380ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .a36-pillar-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: hsl(var(--accent) / 0.5);
          box-shadow: 0 30px 55px -26px rgba(31,41,55,0.3),
                      0 0 0 1px hsl(var(--accent) / 0.18);
        }

        .a36-subscribe-hero {
          transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1), border-color 300ms ease-out;
        }
        .a36-subscribe-hero:hover {
          transform: translateY(-4px) scale(1.01);
          border-color: hsl(var(--accent) / 0.4);
        }

        .a36-arrow {
          transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
          display: inline-block;
        }
        .group:hover .a36-arrow { transform: translateX(4px); }

        @media (prefers-reduced-motion: reduce) {
          .a36-issue-card, .a36-issue-img, .a36-issue-shine, .a36-pillar-card, .a36-subscribe-hero, .a36-arrow {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </PageWrapper>
  );
};

export default NewsletterPage;
