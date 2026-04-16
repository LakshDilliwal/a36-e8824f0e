const partners = [
  "Solana", "Avalanche", "Anthropic", "Diamante",
  "AWS Startups", "Cloudflare", "Superteam", "Substack",
];

const EcosystemPartners = () => (
  <section className="bg-primary py-20">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow mb-8 text-center">ECOSYSTEM PARTNERS</p>

      <div className="overflow-hidden relative">
        <div className="flex gap-12 md:gap-16 animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((logo, i) => (
            <span key={i} className="font-bold text-[20px] md:text-[24px] text-white/50 hover:text-white transition-opacity duration-200 cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EcosystemPartners;
