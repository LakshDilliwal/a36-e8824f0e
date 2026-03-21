const tweetPlaceholders = [
  "@a36labs — Tweet content loading...",
  "@a36labs — Tweet content loading...",
  "@a36labs — Tweet content loading...",
];

const Transmissions = () => (
  <section className="bg-primary py-20">
    <div className="container max-w-5xl mx-auto px-6 md:px-16">
      <p className="section-label-gold mb-4">TRANSMISSIONS</p>
      <h2 className="font-black text-[36px] md:text-[48px] leading-[1.05] tracking-heading text-white">
        Dispatches from<br />the Dojo.
      </h2>
      <p className="text-base text-white/60 mt-4">
        Founder interviews. Operator playbooks. Ecosystem signals.
      </p>

      {/* Episode card */}
      <div className="mt-12 rounded-sm border border-white/10 bg-white/5 p-8">
        <p className="font-bold text-[11px] text-accent uppercase tracking-wider mb-3">
          TRANSMISSION 001
        </p>
        <h3 className="font-black text-[22px] text-white tracking-heading">
          Booting Up. The A36 Signal.
        </h3>
        <p className="text-sm text-white/50 mt-2">
          Coming Q2 2026 — Subscribe to be notified.
        </p>
        <span className="inline-block mt-4 bg-accent text-primary font-bold text-[11px] px-3 py-1 rounded-sm">
          BOOTING UP...
        </span>
      </div>

      {/* Twitter highlights */}
      <div className="mt-12">
        <p className="section-label-gold mb-6">SIGNAL FEED — @A36LABS</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tweetPlaceholders.map((t, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/[0.04] rounded-sm p-5"
            >
              <p className="text-sm text-white/50">{t}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <a
          href="/transmissions"
          className="font-bold text-accent hover:underline text-sm"
        >
          FULL ARCHIVE → /TRANSMISSIONS
        </a>
      </div>
    </div>
  </section>
);

export default Transmissions;
