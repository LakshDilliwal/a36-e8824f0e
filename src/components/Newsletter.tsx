import cover005 from "@/assets/signal-005-builder-stack.png";
import cover004 from "@/assets/signal-004-ai-talent-war.png";
import cover003 from "@/assets/signal-003-force-multiplier.png";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";

const posts = [
  {
    cover: cover005,
    tag: "BUILDER STACK",
    title: "The Builder Stack of July 2026",
    date: "Jul 2026",
    excerpt:
      "The tools serious builders are actually using to ship faster this month.",
    href: "https://open.substack.com/pub/a36signal/p/the-builder-stack-of-july-2026?r=8bb3e0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    cover: cover004,
    tag: "AI TALENT",
    title: "The AI Talent War Has Officially Begun",
    date: "Jun 2026",
    excerpt:
      "Why compute isn't the only scarce resource anymore.",
    href: "https://a36signal.substack.com/p/the-ai-talent-war-has-officially?r=8bb3e0",
  },
  {
    cover: cover003,
    tag: "OPERATING",
    title: "AI Is a Force Multiplier, Not a Replacement",
    date: "May 2026",
    excerpt:
      "Why the companies that embrace AI will outperform the ones that fear it.",
    href: "https://a36signal.substack.com/p/ai-is-a-force-multiplier-not-a-replacement?r=8bb3e0",
  },
];

const Newsletter = () => (
  <section id="newsletter" className="bg-primary py-14 md:py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
        {/* Left: intro + CTAs + embedded subscribe */}
        <Reveal className="lg:col-span-5" y={20}>
          <p className="eyebrow mb-3 md:mb-4">A36 SIGNAL</p>
          <h2 className="font-black text-[28px] md:text-[44px] leading-[1.05] tracking-heading text-white">
            Weekly Signal For Serious Builders
          </h2>
          <p className="text-sm md:text-base text-white/60 mt-4 md:mt-5 max-w-[440px] leading-relaxed">
            Curated opportunities, grants, bounties, events, protocol updates,
            startup moves and alpha drops from across Web3, AI and emerging
            technology.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
            <a
              href="https://a36signal.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary inline-flex items-center gap-1"
            >
              READ ON SUBSTACK <span className="a36-arrow">→</span>
            </a>
            <a
              href="https://a36signal.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-ghost-light inline-flex items-center gap-1"
            >
              SUBSCRIBE <span className="a36-arrow">→</span>
            </a>
          </div>

          {/* Embedded Substack subscribe form */}
          <div className="mt-8 md:mt-10 border border-[#374151] bg-dark-card/60 p-3 md:p-4 max-w-[480px]">
            <p className="eyebrow mb-3">SUBSCRIBE INLINE</p>
            <div className="w-full overflow-hidden">
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
        </Reveal>

        {/* Right: 3 latest posts with cover images */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-4 md:mb-5">LATEST DROPS</p>
          </Reveal>
          <Stagger className="flex flex-col gap-4 md:gap-5" stagger={0.09}>
            {posts.map((p) => (
              <StaggerItem key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-dark-card border border-[#374151] hover:border-accent/70 a36-card-lift flex flex-col sm:flex-row overflow-hidden"
                >
                  <div className="relative w-full sm:w-56 md:w-64 aspect-video sm:aspect-auto flex-shrink-0 overflow-hidden border-b sm:border-b-0 sm:border-r border-[#374151] bg-primary">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex-1 p-5 md:p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">
                        {p.tag}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                        {p.date}
                      </span>
                    </div>
                    <h3 className="font-black text-[17px] md:text-[19px] text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/55 mt-2 leading-relaxed line-clamp-2">
                      {p.excerpt}
                    </p>
                    <span className="text-accent font-bold text-xs uppercase tracking-wider mt-4 inline-flex items-center gap-1">
                      READ ARTICLE <span className="a36-arrow">→</span>
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;
