const tracks = [
  {
    label: "THE PROTOCOLS — BASE LAYER",
    logos: ["Solana", "Avalanche"],
  },
  {
    label: "THE COMPUTE — SCALING LAYER",
    logos: ["AWS Startups", "Cloudflare"],
  },
  {
    label: "TOOLING & DISTRIBUTION — GROWTH LAYER",
    logos: ["Superteam", "Team1", "GitHub", "Beehiiv"],
  },
];

const EcosystemPartners = () => (
  <section className="bg-primary py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="section-label-gold mb-4">THE NETWORK</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
        Integrated at the<br />base layer
      </h2>
      <p className="text-base text-white/60 mt-4 max-w-[560px]">
        A36 provides builders with direct routing to Tier-1 protocols, enterprise-grade compute, and global distribution networks
      </p>

      <div className="mt-16 space-y-0">
        {tracks.map((track, ti) => (
          <div key={track.label}>
            {ti > 0 && <div className="h-px bg-white/[0.08] my-0" />}
            <div className="py-8">
              <p className="font-bold text-[11px] text-accent uppercase tracking-[0.15em] mb-5">
                {track.label}
              </p>
              <div className="flex flex-wrap gap-16">
                {track.logos.map((logo) => (
                  <span
                    key={logo}
                    className="font-bold text-[22px] text-white/40 hover:text-white transition-opacity duration-200 cursor-default"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <a href="/apply" className="btn-gold inline-block">
          BECOME A PARTNER
        </a>
      </div>
    </div>
  </section>
);

export default EcosystemPartners;
