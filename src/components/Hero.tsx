import { Link } from "react-router-dom";

const Hero = () => (
  <section className="min-h-[85vh] flex items-center bg-background">
    <div className="container max-w-5xl mx-auto px-6 md:px-16 py-20">
      <p className="eyebrow mb-6">A36 LABS</p>

      <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
        Where Serious<br />Builders Operate.
      </h1>

      <p className="mt-6 text-primary/80 text-base md:text-lg max-w-[640px]">
        A36 Labs is a global builder network operating across 36+ tech verticals. We curate the builders, run the summits, and connect serious talent to protocols, capital, and real work.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <Link to="/apply" className="btn-primary">APPLY FOR A36 PASSPORT →</Link>
        <Link to="/events" className="btn-ghost">VIEW EVENTS →</Link>
      </div>

      <div className="mt-14 flex flex-wrap">
        {[
          { num: "120+", label: "EVENTS" },
          { num: "10K+", label: "BUILDERS" },
          { num: "36", label: "VERTICALS" },
          { num: "6", label: "CONTINENTS" },
        ].map((stat, i) => (
          <div key={stat.label} className={`flex flex-col py-4 px-6 md:px-8 ${i > 0 ? "border-l border-border" : ""}`}>
            <span className="font-black text-[28px] md:text-[32px] text-accent">{stat.num}</span>
            <span className="text-xs text-muted uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
