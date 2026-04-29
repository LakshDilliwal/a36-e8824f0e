import { Link } from "react-router-dom";
import { allVerticals } from "@/lib/verticals";

const VerticalsGrid = () => (
  <section className="bg-background py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">THE A36 LABS ECOSYSTEM</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        36 Verticals. One Network.
      </h2>
      <p className="text-base text-primary/65 mt-4 max-w-[560px]">
        From AI infrastructure to biotech to DeFi — A36 covers the full frontier of emerging tech.
      </p>

      <div className="flex flex-wrap gap-2 mt-12">
        {allVerticals.map((v) => (
          <Link
            key={v}
            to="/ecosystem"
            className="border border-border bg-white text-primary text-xs font-bold uppercase tracking-wider px-3 py-2 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
          >
            {v}
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/ecosystem" className="btn-ghost inline-block">EXPLORE ECOSYSTEM →</Link>
      </div>
    </div>
  </section>
);

export default VerticalsGrid;
