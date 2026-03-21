const rules = [
  {
    num: "01",
    title: "BUILD",
    body: "Ship or stay silent. A36 rewards execution, not intention.",
  },
  {
    num: "02",
    title: "CONNECT",
    body: "Leverage the network. Give before you take. Your network is your net worth.",
  },
  {
    num: "03",
    title: "LEAD",
    body: "Every builder who enters A36 leaves as a leader. That is the only acceptable output.",
  },
];

const Manifesto = () => (
  <section className="bg-primary py-20">
    <div className="container max-w-5xl mx-auto px-6 md:px-16">
      <p className="section-label-gold mb-4">THE DOJO RULES</p>
      <h2 className="font-black text-[36px] md:text-[48px] leading-[1.05] tracking-heading text-white">
        Three rules.<br />No exceptions.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {rules.map((r) => (
          <div key={r.num}>
            <div className="h-px bg-accent mb-4" />
            <span className="font-black text-sm text-accent">{r.num}</span>
            <h3 className="font-black text-2xl text-white mt-2 tracking-heading">{r.title}</h3>
            <p className="text-[15px] text-white/70 mt-3 leading-relaxed">{r.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Manifesto;
