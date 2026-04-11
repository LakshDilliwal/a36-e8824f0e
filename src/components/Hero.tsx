const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center bg-background pt-16">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 py-20">
        <p className="section-label-gold text-xs tracking-[0.15em] mb-6">
          THE INFRASTRUCTURE LAB
        </p>

        <h1 className="font-black text-[44px] md:text-[80px] leading-[1.0] tracking-heading text-primary max-w-3xl">
          Where Builders{"\n"}Become Leaders
        </h1>

        <p className="mt-6 text-primary/70 text-lg max-w-[520px] leading-relaxed">
          A36 filters, connects, and deploys serious builders into the world's best ecosystems
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <button onClick={() => scrollTo("#apply")} className="btn-primary">
            APPLY FOR A36 PASSPORT
          </button>
          <a href="/sprints" className="btn-secondary">
            VIEW EVENTS
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-0">
          {[
            { num: "120+", label: "Events Hosted" },
            { num: "36+", label: "Verticals" },
            { num: "Global", label: "Network" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col py-4 px-8 ${
                i > 0 ? "border-l border-border" : ""
              }`}
            >
              <span className="font-black text-[32px] text-accent">{stat.num}</span>
              <span className="text-[13px] text-primary mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
