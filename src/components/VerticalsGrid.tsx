import { Link } from "react-router-dom";
import { Stagger, StaggerItem } from "@/components/Reveal";

const layers = [
  {
    title: "Infrastructure Layer",
    items: "Protocols · DevTools · Data · Cloud · Cybersecurity",
  },
  {
    title: "Intelligence Layer",
    items: "AI · Automation · Robotics · Research · Compute",
  },
  {
    title: "Market Layer",
    items: "DeFi · Fintech · Gaming · Consumer · Creator Economy",
  },
  {
    title: "Frontier Layer",
    items: "DePIN · Climate · Energy · Space · Tokenized RWAs",
  },
];

const VerticalsGrid = () => (
  <section className="bg-background py-14 md:py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">THE ECOSYSTEM</p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4">
        <h2 className="font-black text-[28px] md:text-[36px] leading-[1.05] tracking-heading text-primary">
          36+ Verticals<br />Mapped Into One Network
        </h2>
        <Link to="/ecosystem" className="btn-ghost inline-block shrink-0">
          EXPLORE ECOSYSTEM →
        </Link>
      </div>
      <p className="text-base text-primary/65 mb-12 max-w-[680px]">
        A36 Labs connects builders across the verticals shaping the next decade of technology, infrastructure, intelligence, frontier systems, capital markets, and digital economies
      </p>
      <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border" stagger={0.06}>
        {layers.map((l) => (
          <StaggerItem key={l.title}>
            <Link
              to="/ecosystem"
              className="bg-background p-8 md:p-10 group hover:bg-warm-cream transition-colors duration-200 block h-full"
            >
              <h3 className="font-black text-xl md:text-2xl text-primary tracking-heading transition-transform duration-200 group-hover:translate-x-1">
                {l.title}
              </h3>
              <p className="text-sm text-primary/60 mt-3 leading-relaxed">{l.items}</p>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default VerticalsGrid;
