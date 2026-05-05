import { Link } from "react-router-dom";

const featured = [
  "Blockchain Protocols",
  "DeFi",
  "DePIN",
  "Artificial Intelligence",
  "Cloud & Compute",
  "Developer Tools",
  "Fintech & Payments",
  "Healthtech & MedTech",
  "CleanTech & Energy",
  "Creator Economy & Media",
  "Cybersecurity",
  "Tokenized Real-World Assets",
];

const VerticalsGrid = () => (
  <section className="bg-background py-16">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">THE ECOSYSTEM</p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <h2 className="font-black text-[28px] md:text-[36px] leading-[1.05] tracking-heading text-primary">
          36 Verticals. One Network.
        </h2>
        <Link to="/ecosystem" className="btn-ghost inline-block shrink-0">
          VIEW ALL 36 VERTICALS →
        </Link>
      </div>
      <div className="flex flex-wrap gap-2">
        {featured.map((v) => (
          <Link
            key={v}
            to="/ecosystem"
            className="border border-border bg-white text-primary text-xs font-bold uppercase tracking-wider px-3 py-2 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200"
          >
            {v}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default VerticalsGrid;
