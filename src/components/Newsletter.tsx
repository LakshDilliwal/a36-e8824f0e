import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import cover005 from "@/assets/signal-005-builder-stack.png";
import cover004 from "@/assets/signal-004-ai-talent-war.png";
import cover003 from "@/assets/signal-003-force-multiplier.png";

const posts = [
  {
    cover: cover005,
    title: "The Builder Stack of July 2026",
    excerpt: "The tools serious builders are actually using to ship faster this month.",
    href: "https://open.substack.com/pub/a36signal/p/the-builder-stack-of-july-2026?r=8bb3e0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    cover: cover004,
    title: "The AI Talent War Has Officially Begun",
    excerpt: "Why compute isn't the only scarce resource anymore.",
    href: "https://a36signal.substack.com/p/the-ai-talent-war-has-officially?r=8bb3e0",
  },
  {
    cover: cover003,
    title: "AI Is a Force Multiplier, Not a Replacement",
    excerpt: "Why companies embracing AI will outperform the ones that fear it.",
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
      className="group relative flex bg-dark-card border border-[#2a3340] hover:border-accent/40 overflow-hidden"
      initial={{ opacity: 0, y: reduce ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease, delay: index * 0.1 }}
      whileHover={reduce ? {} : { y: -4 }}
      style={{ transition: "border-color .35s ease-out" }}
    >
      {/* Cover — 16:9, never cropped square. Width ~38% */}
      <div className="relative w-[38%] flex-shrink-0 overflow-hidden bg-primary self-stretch">
        <div className="relative w-full h-full min-h-[160px]" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={post.cover}
            alt={post.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
            style={{
              transition: "transform 600ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease-out",
              opacity: loaded ? 1 : 0,
            }}
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 p-5 md:p-6 flex flex-col justify-center">
        <h3 className="font-black text-[16px] md:text-[18px] text-white leading-[1.2] tracking-heading line-clamp-2">
          {post.title}
        </h3>
        <p className="text-[13px] md:text-[13.5px] text-white/55 mt-2 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <span className="text-accent font-bold text-[11px] uppercase tracking-[0.18em] mt-3 inline-flex items-center gap-2">
          READ ARTICLE
          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>

      {/* Hover image scale via group */}
      <style>{`
        .a36-signal-card-${index}:hover img { transform: scale(1.03); }
      `}</style>
      <span className={`a36-signal-card-${index} absolute inset-0 pointer-events-none`} />
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
      transition: { duration: 0.5, ease, delay: i * 0.07 },
    }),
  };

  return (
    <section id="newsletter" className="bg-primary py-12 md:py-16">
      <div className="container max-w-[1240px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-20 gap-8 lg:gap-12" style={{ gridTemplateColumns: undefined }}>
          <div className="grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-8 lg:gap-12 w-full col-span-full">
            {/* LEFT — 35% */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
              className="flex flex-col"
            >
              <motion.p variants={fadeUp} className="eyebrow mb-3">
                A36 SIGNAL
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-black text-[26px] md:text-[32px] leading-[1.05] tracking-heading text-white"
              >
                Signal, not noise.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-[13.5px] md:text-[14.5px] text-white/60 mt-3 max-w-[360px] leading-relaxed"
              >
                A weekly editorial dispatch for serious builders across AI, Web3 and frontier technology.
              </motion.p>

              <motion.a
                variants={fadeUp}
                href="https://a36signal.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary inline-flex items-center gap-2 mt-5 self-start"
              >
                READ ON SUBSTACK
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                  →
                </span>
              </motion.a>

              {/* Embedded Substack — native A36 wrapper */}
              <motion.div
                variants={fadeUp}
                className="mt-5 bg-dark-card border border-[#2a3340] p-4 md:p-5 max-w-[440px]"
                style={{ boxShadow: "0 20px 40px -28px rgba(0,0,0,0.6)" }}
              >
                <p className="eyebrow mb-3">SUBSCRIBE</p>
                <div className="w-full overflow-hidden">
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
              </motion.div>
            </motion.div>

            {/* RIGHT — 65% */}
            <div className="flex flex-col gap-4 md:gap-5">
              {posts.map((p, i) => (
                <ArticleCard key={p.href} post={p} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
