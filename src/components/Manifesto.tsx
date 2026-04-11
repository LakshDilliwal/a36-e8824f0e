const pillars = [
  {
    num: "01",
    title: "BUILD",
    body: "Ship real products. We bet on execution",
  },
  {
    num: "02",
    title: "CONNECT",
    body: "Our network is your net worth",
  },
  {
    num: "03",
    title: "EARN",
    body: "Find bounties, grants, and real work",
  },
  {
    num: "04",
    title: "LEAD",
    body: "Every builder who enters A36 leaves as a leader",
  },
];

const Manifesto = () => (
  <section className="bg-primary py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="section-label-gold mb-4">THE A36 SYSTEM</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
        We don't sell intention{"\n"}
        <br className="hidden md:block" />We ship outcomes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {pillars.map((p) => (
          <div key={p.num}>
            <div className="h-px bg-accent mb-5" />
            <span className="font-black text-xs text-accent">{p.num}</span>
            <h3 className="font-black text-xl text-white mt-2 tracking-heading">{p.title}</h3>
            <p className="text-[15px] text-white/60 mt-3 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Manifesto;
