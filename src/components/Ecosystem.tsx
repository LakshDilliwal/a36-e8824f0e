import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { key: "web3", label: "WEB3", sub: "Protocols · DeFi · DePIN · ZK" },
  { key: "ai", label: "AI", sub: "Models · Agents · Compute · Data" },
  { key: "healthcare", label: "HEALTHCARE", sub: "MedTech · Biotech · Digital Health" },
  { key: "finance", label: "FINANCE", sub: "Payments · DeFi · Compliance" },
];

const Ecosystem = () => {
  const [active, setActive] = useState("web3");

  return (
    <section className="bg-background py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">THE A36 ECOSYSTEM</p>
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
          Built alongside the best<br />infrastructure in the world.
        </h2>
        <p className="text-lg text-primary/65 mt-5 max-w-[600px]">
          We engineer the base layer. A36 deploys capital and network resources across 36+ specific infrastructure verticals, driven by four core execution vectors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-14">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`p-6 text-left border border-border transition-colors duration-200 ${
                active === t.key
                  ? "bg-primary text-white border-b-[3px] border-b-accent"
                  : "bg-white text-primary"
              }`}
            >
              <h4 className="font-black text-lg">{t.label}</h4>
              <p className={`text-xs mt-2 ${active === t.key ? "text-white/60" : "text-muted"}`}>{t.sub}</p>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/ecosystem" className="text-accent font-bold text-sm uppercase tracking-wider hover:underline">
            EXPLORE ALL 36+ DOMAINS →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
