const Podcast = () => (
  <section className="bg-background py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="section-label-charcoal mb-4">PODCAST</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        Straight from<br />operators
      </h2>
      <p className="text-base text-primary/65 mt-4 max-w-[520px]">
        Real conversations with founders, ecosystem leads, and capital operators in Web3, AI, and deep tech
      </p>

      <div className="mt-12 max-w-[680px] border border-border bg-warm-cream rounded-sm p-8">
        <p className="font-bold text-[11px] text-accent uppercase tracking-wider">
          EPISODE 01
        </p>
        <h3 className="font-black text-[22px] text-primary mt-2 tracking-heading">
          Booting Up. The A36 Signal
        </h3>
        <p className="text-sm text-primary/55 mt-2">
          Coming Q2 2026. Subscribe to be notified
        </p>
        <span className="inline-block mt-4 bg-accent text-primary font-bold text-[11px] px-2.5 py-1 rounded-sm">
          BOOTING UP
        </span>
      </div>

      <div className="mt-10">
        <a
          href="/transmissions"
          className="font-bold text-sm text-accent uppercase hover:underline tracking-wider"
        >
          ALL EPISODES →
        </a>
      </div>
    </div>
  </section>
);

export default Podcast;
