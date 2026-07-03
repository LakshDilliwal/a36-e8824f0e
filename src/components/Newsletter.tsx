import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import cover005 from "@/assets/signal-005-builder-stack.png";
import cover004 from "@/assets/signal-004-ai-talent-war.png";
import cover003 from "@/assets/signal-003-force-multiplier.png";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const posts = [
  {
    cover: cover005,
    title: "The Builder Stack of July 2026",
    date: "Jul 2026",
    excerpt:
      "The tools serious builders are actually using to ship faster this month.",
    href: "https://open.substack.com/pub/a36signal/p/the-builder-stack-of-july-2026?r=8bb3e0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    cover: cover004,
    title: "The AI Talent War Has Officially Begun",
    date: "Jun 2026",
    excerpt: "Why compute isn't the only scarce resource anymore.",
    href: "https://a36signal.substack.com/p/the-ai-talent-war-has-officially?r=8bb3e0",
  },
  {
    cover: cover003,
    title: "AI Is a Force Multiplier, Not a Replacement",
    date: "May 2026",
    excerpt:
      "Why the companies that embrace AI will outperform the ones that fear it.",
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
      className="group relative block bg-dark-card border border-[#2a3340] overflow-hidden"
      initial={{ opacity: 0, y: reduce ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease, delay: index * 0.12 }}
      whileHover={reduce ? {} : { y: -6 }}
    >
      {/* Cover — always 16:9, never cropped tightly */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-primary">
        <motion.img
          src={post.cover}
          alt={post.title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.04 }}
          transition={{ duration: 0.7, ease }}
          className="w-full h-full object-cover object-center transition-transform duration-[600ms]"
          style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        />
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
             style={{
               background:
                 "linear-gradient(180deg, transparent 55%, hsl(var(--primary) / 0.35) 100%)",
             }} />
        {/* Hover scale via CSS */}
        <style>{`.group:hover img[data-cover="${index}"]{transform:scale(1.04)}`}</style>
        <img aria-hidden="true" data-cover={index} className="hidden" />
      </div>

      {/* Body */}
      <div className="p-6 md:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          {post.date}
        </p>
        <h3 className="font-black text-[20px] md:text-[24px] text-white leading-[1.15] mt-3 tracking-heading">
          {post.title}
        </h3>
        <p className="text-[14px] md:text-[15px] text-white/55 mt-3 leading-relaxed max-w-[560px]">
          {post.excerpt}
        </p>
        <span className="text-accent font-bold text-xs uppercase tracking-[0.15em] mt-6 inline-flex items-center gap-2">
          READ ARTICLE
          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>

      {/* Border brighten + shadow on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border border-transparent group-hover:border-accent/40 transition-colors duration-300"
      />
    </motion.a>
  );
};

const Newsletter = () => {
  const reduce = useReducedMotion();
  const [subscribeOpen, setSubscribeOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease, delay: i * 0.08 },
    }),
  };

  return (
    <section id="newsletter" className="bg-primary py-16 md:py-28">
      <div className="container max-w-[1240px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16">
          {/* LEFT — 40% */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-24 self-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-4">
              A36 SIGNAL
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-black text-[32px] md:text-[48px] leading-[1.02] tracking-heading text-white"
            >
              Signal, not noise.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[15px] md:text-[16px] text-white/60 mt-5 max-w-[380px] leading-relaxed"
            >
              A weekly editorial dispatch for serious builders — grants, protocol
              moves, opportunities and long-form perspective from the A36 network.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://a36signal.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary inline-flex items-center gap-2"
              >
                READ ON SUBSTACK
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  →
                </span>
              </a>
              <button
                type="button"
                onClick={() => setSubscribeOpen(true)}
                className="group btn-ghost-light inline-flex items-center gap-2"
              >
                SUBSCRIBE
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  →
                </span>
              </button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[12px] uppercase tracking-[0.18em] text-white/35 mt-8"
            >
              Weekly insights across AI, Web3 and frontier technology.
            </motion.p>
          </motion.div>

          {/* RIGHT — 60% */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-baseline justify-between mb-8 md:mb-10"
            >
              <p className="eyebrow">LATEST ARTICLES</p>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                ISSUE 003 — 005
              </span>
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-10">
              {posts.map((p, i) => (
                <ArticleCard key={p.href} post={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe modal — Substack iframe */}
      <Dialog open={subscribeOpen} onOpenChange={setSubscribeOpen}>
        <DialogContent className="max-w-[520px] bg-background border border-border p-0 overflow-hidden">
          <div className="p-6 md:p-8 pb-4">
            <DialogTitle className="font-black text-[22px] md:text-[26px] tracking-heading text-primary">
              Subscribe to A36 Signal
            </DialogTitle>
            <DialogDescription className="text-sm text-primary/60 mt-2">
              Weekly dispatch delivered straight to your inbox.
            </DialogDescription>
          </div>
          <div className="px-4 md:px-6 pb-6 md:pb-8">
            <div className="w-full flex justify-center">
              <iframe
                title="A36 Signal — Substack subscribe"
                src="https://a36signal.substack.com/embed?transparent=1&light=1"
                width="480"
                height="320"
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
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Newsletter;
