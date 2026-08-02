import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import cover005 from "@/assets/signal-005-builder-stack.png";
import cover004 from "@/assets/signal-004-ai-talent-war.png";
import cover003 from "@/assets/signal-003-force-multiplier.png";
import cover006 from "@/assets/a36-signal-006-jack-of-all-trades.png";

const posts = [
  {
    cover: cover006,
    alt: "Jack of All Trades, Master of None? — A36 Signal 006",
    issue: "A36 SIGNAL #006",
    title: "Jack of All Trades, Master of None?",
    excerpt: "What to do when you have no clue what to do with your life.",
    href: "https://substack.com/@a36signal/note/p-209483093?r=8bb3e0&utm_source=notes-share-action&utm_medium=web",
  },
  {
    cover: cover005,
    title: "The Builder Stack of July 2026",
    excerpt: "The tools serious builders are actually using to ship faster this month",
    href: "https://open.substack.com/pub/a36signal/p/the-builder-stack-of-july-2026?r=8bb3e0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    cover: cover004,
    title: "The AI Talent War Has Officially Begun",
    excerpt: "Why compute isn't the only scarce resource anymore",
    href: "https://a36signal.substack.com/p/the-ai-talent-war-has-officially?r=8bb3e0",
  },
  {
    cover: cover003,
    title: "AI Is a Force Multiplier, Not a Replacement",
    excerpt: "Why companies embracing AI will outperform the ones that fear it",
    href: "https://a36signal.substack.com/p/ai-is-a-force-multiplier-not-a-replacement?r=8bb3e0",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const ArticleCard = ({ post, index }: { post: typeof posts[number]; index: number }) => {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.a
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      className="a36-signal-card group relative flex flex-col bg-dark-card border border-[#2a3340] overflow-hidden"
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease, delay: index * 0.1 }}
    >
      {/* 16:9 cover, never cropped */}
      <div className="relative w-full overflow-hidden bg-primary" style={{ aspectRatio: "16 / 9" }}>
        <img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="a36-signal-img absolute inset-0 w-full h-full object-cover object-center will-change-transform"
          style={{
            transition: "transform 600ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease-out, filter 400ms ease-out",
            opacity: loaded ? 1 : 0,
          }}
        />
        {/* shine sweep */}
        <span className="a36-signal-shine pointer-events-none absolute inset-0" aria-hidden />
      </div>

      {/* body */}
      <div className="flex-1 flex flex-col p-5 md:p-6">
        <h3 className="font-black text-[17px] md:text-[19px] text-white leading-[1.2] tracking-heading line-clamp-2">
          {post.title}
        </h3>
        <p className="text-[13.5px] md:text-[14px] text-white/55 mt-2 leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>
        <span className="text-accent font-bold text-[11px] uppercase tracking-[0.18em] mt-4 inline-flex items-center gap-2">
          READ ARTICLE
          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>
    </motion.a>
  );
};

const Newsletter = () => {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease, delay: i * 0.07 },
    }),
  };

  return (
    <section id="newsletter" className="relative bg-primary py-14 md:py-20 overflow-hidden">
      {/* subtle premium background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 15% 0%, hsl(var(--accent) / 0.06), transparent 70%), radial-gradient(50% 40% at 90% 100%, hsl(var(--accent) / 0.05), transparent 70%)",
        }}
      />

      <div className="container relative max-w-[1240px] mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12"
        >
          <div className="max-w-[560px]">
            <motion.p variants={fadeUp} className="eyebrow mb-3">A36 SIGNAL</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black text-[30px] md:text-[44px] leading-[1.05] tracking-heading text-white"
            >
              Signal, not noise
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[14px] md:text-[15px] text-white/60 mt-3 leading-relaxed"
            >
              A weekly editorial dispatch for serious builders across AI, Web3 and frontier technology
            </motion.p>
          </div>
          <motion.a
            variants={fadeUp}
            href="https://a36signal.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-primary inline-flex items-center gap-2 self-start md:self-auto"
          >
            READ ON SUBSTACK
            <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
              →
            </span>
          </motion.a>
        </motion.div>

        {/* Three cards — one horizontal row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {posts.map((p, i) => (
            <ArticleCard key={p.href} post={p} index={i} />
          ))}
        </div>

        {/* Subscribe card — below cards, centered */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease, delay: 0.1 }}
          className="mt-10 md:mt-14 flex justify-center"
        >
          <div
            className="a36-subscribe-card relative w-full max-w-[560px] bg-dark-card border border-[#2a3340] p-6 md:p-8"
            style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.65)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-black text-white text-[20px] tracking-heading">
                A36<span className="text-accent">.</span>
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="eyebrow">A36 SIGNAL</span>
            </div>
            <h3 className="font-black text-white text-[20px] md:text-[22px] leading-tight tracking-heading">
              Subscribe to the Newsletter
            </h3>
            <p className="text-[13px] md:text-[13.5px] text-white/55 mt-2 leading-relaxed">
              One editorial email per week. No spam. Unsubscribe anytime.
            </p>
            <div className="w-full mt-5 overflow-hidden">
              <iframe
                title="A36 Signal — Substack subscribe"
                src="https://a36signal.substack.com/embed?transparent=1&light=1"
                width="480"
                height="150"
                style={{
                  border: 0,
                  background: "transparent",
                  width: "100%",
                  maxWidth: "480px",
                  display: "block",
                }}
                frameBorder={0}
                scrolling="no"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* scoped interactions */}
      <style>{`
        .a36-signal-card {
          transition: transform 380ms cubic-bezier(0.22,1,0.36,1),
                      border-color 300ms ease-out,
                      box-shadow 380ms cubic-bezier(0.22,1,0.36,1);
          will-change: transform;
        }
        .a36-signal-card:hover {
          transform: translateY(-8px);
          border-color: hsl(var(--accent) / 0.55);
          box-shadow: 0 30px 60px -28px rgba(0,0,0,0.7),
                      0 0 0 1px hsl(var(--accent) / 0.18);
        }
        .a36-signal-card:hover .a36-signal-img {
          transform: scale(1.05);
          filter: brightness(1.05);
        }
        .a36-signal-shine {
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%);
          transform: translateX(-120%);
          transition: transform 800ms cubic-bezier(0.22,1,0.36,1);
        }
        .a36-signal-card:hover .a36-signal-shine {
          transform: translateX(120%);
        }
        .a36-subscribe-card {
          transition: transform 380ms cubic-bezier(0.22,1,0.36,1),
                      border-color 300ms ease-out,
                      box-shadow 380ms cubic-bezier(0.22,1,0.36,1);
        }
        .a36-subscribe-card:hover {
          transform: translateY(-4px);
          border-color: hsl(var(--accent) / 0.4);
        }
        @media (prefers-reduced-motion: reduce) {
          .a36-signal-card, .a36-subscribe-card, .a36-signal-img, .a36-signal-shine {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
