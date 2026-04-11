const verticals = [
  {
    label: "AI & Data",
    tags: ["AI", "Cloud & Compute", "Data Infra"],
    body: "The intelligence layer. Models, compute, and the security rails everything else runs on",
  },
  {
    label: "Web3 & Crypto",
    tags: ["Blockchains", "DeFi", "Zero-Knowledge"],
    body: "The decentralised financial and physical layer. We back the math that removes trust from the equation",
  },
  {
    label: "Deep Tech & Hardware",
    tags: ["Defense Tech", "Robotics", "Quantum Computing"],
    body: "The physical world, rebuilt. Founders building atoms, not just bytes",
  },
  {
    label: "Healthcare, Climate & Beyond",
    tags: ["Biotech", "Energy Tech", "Spatial Computing"],
    body: "The hard problems. Builders solving what most won't touch",
  },
];

const Ecosystem = () => (
  <section className="bg-background py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="section-label-charcoal mb-4">THE A36 LABS ECOSYSTEM</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary max-w-2xl">
        36+ verticals{"\n"}
        <br />One network
      </h2>
      <p className="text-lg text-primary/65 mt-5 max-w-[600px]">
        A36 Labs operates across the full spectrum of what's being built next, connecting serious builders with the right ecosystems, infrastructure, and capital across every major technology vertical
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
        {verticals.map((v) => (
          <div
            key={v.label}
            className="border border-border bg-warm-cream rounded-sm p-7"
          >
            <h4 className="font-black text-lg text-primary">{v.label}</h4>
            <div className="flex flex-wrap items-center gap-1 mt-3">
              {v.tags.map((tag, i) => (
                <span key={tag} className="flex items-center">
                  <span className="font-bold text-[11px] text-accent uppercase tracking-wider">{tag}</span>
                  {i < v.tags.length - 1 && <span className="text-accent mx-1.5 text-[11px]">·</span>}
                </span>
              ))}
            </div>
            <p className="text-sm text-primary/60 mt-3">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="/ecosystem" className="btn-secondary inline-block">
          EXPLORE ALL 36+ VERTICALS →
        </a>
      </div>
    </div>
  </section>
);

export default Ecosystem;
