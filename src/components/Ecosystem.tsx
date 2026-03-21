const partners = ["Solana", "Avalanche", "Diamante", "Web3 Connect Global"];

const verticals = [
  { label: "WEB3", sub: "DeFi, Infrastructure, DAOs, Protocols" },
  { label: "AI", sub: "Agents, Models, Developer Tooling" },
  { label: "HEALTHCARE", sub: "Digital Health, MedTech, BioFi" },
  { label: "FINANCE", sub: "DeFi, Fintech, Payments, Capital" },
];

const Ecosystem = () => (
  <section className="bg-background py-20">
    <div className="container max-w-5xl mx-auto px-6 md:px-16">
      <p className="section-label-charcoal mb-4">THE A36 ECOSYSTEM</p>
      <h2 className="font-black text-[36px] md:text-[48px] leading-[1.05] tracking-heading text-primary max-w-2xl">
        Built alongside the best infrastructure in the world.
      </h2>
      <p className="text-base text-primary/60 mt-4">
        Across Web3, AI, Healthcare, and Finance.
      </p>

      <div className="mt-14">
        <p className="section-label-charcoal text-[11px] mb-6">PROTOCOL PARTNERS</p>
        <div className="flex flex-wrap gap-8 md:gap-12 items-center">
          {partners.map((p) => (
            <span
              key={p}
              className="font-bold text-xl text-primary opacity-40 hover:opacity-100 transition-opacity cursor-default select-none"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
        {verticals.map((v) => (
          <div
            key={v.label}
            className="border border-border bg-warm-cream rounded-sm p-6"
          >
            <h4 className="font-black text-lg text-primary">{v.label}</h4>
            <p className="text-[13px] text-primary/60 mt-2">{v.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ecosystem;
