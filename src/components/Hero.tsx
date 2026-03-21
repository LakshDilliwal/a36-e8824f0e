const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center bg-background pt-16">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 py-20">
        <p className="section-label-gold text-xs tracking-[0.15em] mb-6">
          ECOSYSTEM · ACCELERATOR · BUILDER DOJO
        </p>

        <h1 className="font-black text-[40px] md:text-[72px] leading-[1.0] tracking-heading text-primary max-w-3xl">
          Where Builders{"\n"}Become Leaders.
        </h1>

        <p className="mt-6 text-primary/75 text-lg max-w-[520px] leading-relaxed">
          A36 is the ecosystem, accelerator, and builder dojo for Web3, AI,
          Healthcare, and Finance founders. We don't motivate. We filter,
          build, and ship.<br />India → Global.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button onClick={() => scrollTo("#passport")} className="btn-primary">
            APPLY FOR A36 PASSPORT →
          </button>
          <a href="/sprints" className="btn-secondary">
            VIEW SPRINTS ↗
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-0">
          {[
            { num: "120+", label: "Events Hosted" },
            { num: "4", label: "Verticals" },
            { num: "India → Global", label: "Reach" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col py-4 px-6 ${
                i > 0 ? "border-l border-border" : ""
              }`}
            >
              <span className="font-black text-[28px] text-accent">{stat.num}</span>
              <span className="text-[13px] text-primary mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
