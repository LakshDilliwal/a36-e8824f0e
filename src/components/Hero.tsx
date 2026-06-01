import { Link } from "react-router-dom";

const Hero = () => (
  <section className="min-h-[64vh] md:min-h-[85vh] flex items-center bg-background relative a36-tick-corners a36-tick-corners-charcoal">
    <div className="container max-w-5xl mx-auto px-6 md:px-16 py-10 md:py-16">
      <p className="eyebrow mb-4 md:mb-6 a36-hero-item a36-hero-item-1">A36 LABS</p>

      <h1 className="font-black text-[34px] md:text-[64px] leading-[1.05] tracking-heading text-primary a36-hero-item a36-hero-item-2">
        Where Serious<br />Builders Operate
      </h1>

      <p className="mt-3 md:mt-4 text-primary/80 text-sm md:text-lg max-w-[640px] a36-hero-item a36-hero-item-3">
        A36 Labs is a global builder network across Web3, AI, and emerging tech. We connect serious builders with curated events, opportunities, communities, protocols, capital, and real work.
      </p>

      <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-10 a36-hero-item a36-hero-item-4">
        <Link to="/apply" className="btn-primary">APPLY TO JOIN →</Link>
        <Link to="/events" className="btn-ghost">VIEW EVENTS →</Link>
      </div>

      <div className="mt-8 grid grid-cols-2 md:flex md:flex-wrap border-t border-border md:border-t-0">
        {[
          { num: "120+", label: "EVENTS HOSTED" },
          { num: "50K+", label: "BUILDERS REACHED" },
          { num: "36+", label: "TECH VERTICALS" },
          { num: "GLOBAL", label: "NETWORK" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col py-3 md:py-4 px-4 md:px-8 border-border ${
              i % 2 === 1 ? "border-l md:border-l" : ""
            } ${i >= 2 ? "border-t md:border-t-0" : ""} ${
              i === 0 ? "md:border-l-0" : "md:border-l"
            }`}
          >
            <span className="font-black text-[22px] md:text-[32px] text-accent">{stat.num}</span>
            <span className="text-[10px] md:text-xs text-muted uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
