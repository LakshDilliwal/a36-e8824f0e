const posts = [
  {
    title: "The Builder Stack of July 2026",
    date: "Jul 2026",
    excerpt:
      "The tools, protocols, and platforms serious builders are actually shipping with this month.",
    href: "https://open.substack.com/pub/a36signal/p/the-builder-stack-of-july-2026?r=8bb3e0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
    tag: "BUILDER STACK",
  },
  {
    title: "The AI Talent War Has Officially Begun",
    date: "Jun 2026",
    excerpt:
      "Inside the compensation, equity, and mission fights redrawing the map for AI operators.",
    href: "https://a36signal.substack.com/p/the-ai-talent-war-has-officially?r=8bb3e0",
    tag: "AI",
  },
  {
    title: "AI Is a Force Multiplier, Not a Replacement",
    date: "May 2026",
    excerpt:
      "How the strongest teams are using AI to compound output without hollowing out craft.",
    href: "https://a36signal.substack.com/p/ai-is-a-force-multiplier-not-a-replacement?r=8bb3e0",
    tag: "OPERATING",
  },
];

const Newsletter = () => (
  <section id="newsletter" className="bg-primary py-14 md:py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
        {/* Left: intro + CTAs */}
        <div className="lg:col-span-5">
          <p className="eyebrow mb-3 md:mb-4">A36 SIGNAL</p>
          <h2 className="font-black text-[28px] md:text-[44px] leading-[1.05] tracking-heading text-white">
            Weekly Signal For Serious Builders
          </h2>
          <p className="text-sm md:text-base text-white/60 mt-4 md:mt-5 max-w-[440px] leading-relaxed">
            Curated opportunities, grants, bounties, events, protocol updates, startup moves and alpha drops from across Web3, AI and emerging technology.
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
        </div>

        {/* Right: 3 latest posts */}
        <div className="lg:col-span-7">
          <p className="eyebrow mb-4 md:mb-5">LATEST DROPS</p>
          <div className="flex flex-col gap-4 md:gap-5">
            {posts.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dark-card border border-[#374151] hover:border-accent/70 a36-card-lift flex flex-col sm:flex-row overflow-hidden"
              >
                {/* Cover block */}
                <div className="relative w-full sm:w-40 md:w-48 h-32 sm:h-auto flex-shrink-0 bg-primary border-b sm:border-b-0 sm:border-r border-[#374151] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-90"
                       style={{
                         background:
                           "radial-gradient(120% 100% at 100% 0%, hsl(var(--accent) / 0.20), transparent 60%), radial-gradient(120% 100% at 0% 100%, hsl(var(--accent) / 0.08), transparent 55%)",
                       }} />
                  <span className="relative font-black text-accent text-[11px] tracking-[0.2em] uppercase">
                    {p.tag}
                  </span>
                </div>
                <div className="flex-1 p-5 md:p-6 flex flex-col">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/40">
                    {p.date}
                  </p>
                  <h3 className="font-black text-[17px] md:text-[19px] text-white leading-snug mt-2">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;
