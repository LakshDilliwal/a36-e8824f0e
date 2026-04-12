import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

const filters = ["All", "Web3", "AI", "Healthcare", "Finance", "Infrastructure", "DePIN", "Tooling", "DeFi", "ZK", "Compute", "Deep Tech"];

const vectors = [
  {
    num: "01", title: "COMPUTE & DATA",
    tags: ["AI", "Machine Learning", "Cloud & Compute", "Cybersecurity", "Data Infrastructure", "Developer Tooling", "SaaS"],
    body: "The raw horsepower of the digital economy. We back the models, the servers, and the security rails.",
  },
  {
    num: "02", title: "WEB3 & CRYPTOGRAPHY",
    tags: ["Layer 1", "Layer 2 / Rollups", "DeFi", "NFTs", "DAOs", "Zero-Knowledge", "DePIN", "Wallets & Identity", "Cross-chain"],
    body: "Decentralized financial and physical systems. We back the math that removes trust from the equation.",
  },
  {
    num: "03", title: "DEEP TECH & HARDWARE",
    tags: ["Defense Tech", "Robotics", "Quantum", "Space & Aerospace", "Climate Tech", "Energy", "Biotech", "MedTech", "AgriTech"],
    body: "Hard tech for the physical world. We back the founders building atoms, not just bytes.",
  },
  {
    num: "04", title: "COMMUNITY & TALENT",
    tags: ["Universities", "Communities & Guilds", "Open Source", "Creator Economy", "Media", "Events & Experiences"],
    body: "The distribution layer. We back the networks, labs, and regional hubs where Tier-1 talent aggregates.",
  },
];

const companies = [
  { name: "Diamante", stage: "Mainnet", vertical: "Layer 1 Blockchain", desc: "The fastest decentralized settlement layer" },
  { name: "Project Alpha", stage: "Early", vertical: "AI Infra", desc: "Decentralized compute for AI workloads" },
  { name: "BuilderDAO", stage: "Growth", vertical: "Community", desc: "India's largest Web3 builder network" },
  { name: "Chain Zero", stage: "Early", vertical: "ZK", desc: "Zero-knowledge proof generation at scale" },
  { name: "MedChain", stage: "Early", vertical: "Healthcare", desc: "On-chain health records infrastructure" },
  { name: "FinStack", stage: "Growth", vertical: "DeFi", desc: "Compliant DeFi rails for emerging markets" },
];

const EcosystemPage = () => {
  const [active, setActive] = useState("All");

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">THE A36 ECOSYSTEM</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Over 36 domains.<br />One infrastructure lab.
          </h1>
          <p className="text-lg text-primary/65 mt-5 max-w-[640px]">
            We work closely with founders and protocols across the full builder lifecycle — from first commit to global scale. A36 operates across four core vectors and 36+ specific infrastructure domains.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-warm-cream py-6">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  active === f ? "bg-accent text-primary border-accent" : "bg-white text-primary border-border hover:border-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vectors */}
      <section className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16 space-y-12">
          {vectors.map((v) => (
            <div key={v.num} className="border border-border bg-white p-8">
              <span className="font-black text-accent text-sm">{v.num}</span>
              <h3 className="font-black text-2xl text-primary mt-2">{v.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {v.tags.map((t) => (
                  <span key={t} className="text-[11px] font-bold text-accent uppercase tracking-wider">{t}</span>
                ))}
              </div>
              <p className="text-base text-muted mt-4">{v.body}</p>
              <Link to="/ecosystem" className="text-accent font-bold text-sm uppercase mt-4 inline-block hover:underline">EXPLORE →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Companies Grid */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">IN THE ECOSYSTEM</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Companies we've worked with.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {companies.map((c) => (
              <div key={c.name} className="bg-white border border-border p-6">
                <div className="w-[60px] h-[60px] bg-[#C8BFB0] mb-4" />
                <h4 className="font-black text-lg text-primary">{c.name}</h4>
                <div className="flex gap-2 mt-2">
                  <span className="text-[10px] font-bold uppercase bg-primary text-accent px-2 py-0.5">{c.stage}</span>
                  <span className="text-[10px] font-bold uppercase bg-warm-cream text-primary px-2 py-0.5">{c.vertical}</span>
                </div>
                <p className="text-sm text-muted mt-3">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-accent py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Want to be part of the ecosystem?
          </h2>
          <p className="text-base text-primary/70 mt-4">
            Apply to join A36 as a builder, protocol, or ecosystem partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/apply" className="btn-ghost inline-block">APPLY AS BUILDER</Link>
            <Link to="/apply" className="btn-dark inline-block">BECOME A PARTNER</Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default EcosystemPage;
