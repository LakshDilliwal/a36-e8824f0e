const pillars = [
  { num: "01", title: "BUILD", body: "Ship real products. A36 rewards execution, not intention. Build in public. Build fast." },
  { num: "02", title: "CONNECT", body: "Leverage the network. Give before you take. Your network is your net worth." },
  { num: "03", title: "EARN", body: "Bounties, grants, and real work from verified ecosystems — paid on-chain." },
  { num: "04", title: "LEAD", body: "Every builder who enters A36 leaves as a leader. That is the only acceptable output." },
];

const Manifesto = () => (
  <section className="bg-primary py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow mb-4">THE A36 SYSTEM</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
        We don't sell intention.<br />We ship outcomes.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {pillars.map((p) => (
          <div key={p.num} className="bg-dark-card border border-[#374151] p-6">
            <span className="font-black text-xs text-accent">{p.num}</span>
            <h3 className="font-black text-xl text-white mt-2">{p.title}</h3>
            <p className="text-[15px] text-white/60 mt-3 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Manifesto;
