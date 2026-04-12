import { Link } from "react-router-dom";

const Hero = () => (
  <section className="min-h-screen flex items-center bg-background">
    <div className="container max-w-5xl mx-auto px-6 md:px-16 py-20">
      <p className="eyebrow mb-6">INFRASTRUCTURE LAB · ACCELERATOR · BUILDER NETWORK</p>

      <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
        Zero Noise &<br />Early Alpha
      </h1>
      <h2 className="font-normal text-[20px] text-muted mt-4">Where Builders Become Leaders</h2>

      <p className="mt-6 text-primary text-base max-w-[600px]">
        We filter, back, and deploy the foundational layers of technology. A36 is the ecosystem, accelerator, and builder lab for Web3, AI, Healthcare, and Finance founders.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <Link to="/apply" className="btn-primary">APPLY FOR A36 PASSPORT</Link>
        <Link to="/events" className="btn-ghost">VIEW EVENTS →</Link>
      </div>

      <div className="mt-14 flex flex-wrap">
        {[
          { num: "120+", label: "Events Hosted" },
          { num: "4", label: "Verticals" },
          { num: "Global", label: "Network Open to the World" },
        ].map((stat, i) => (
          <div key={stat.label} className={`flex flex-col py-4 px-8 ${i > 0 ? "border-l border-border" : ""}`}>
            <span className="font-black text-[32px] text-accent">{stat.num}</span>
            <span className="text-xs text-muted uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
