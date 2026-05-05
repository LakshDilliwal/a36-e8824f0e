const brands = [
  "Solana",
  "Avalanche",
  "Anthropic",
  "AWS Startups",
  "Cloudflare",
  "Superteam",
  "Substack",
  "Polygon",
  "Aptos",
  "Sui",
  "Near Protocol",
  "Arbitrum",
  "Optimism",
  "Chainlink",
  "The Graph",
  "Filecoin",
  "Uniswap",
  "Aave",
];

const EcosystemPartners = () => (
  <section className="bg-primary py-20">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow mb-8 text-center">IN THE ROOM WITH</p>
      <div className="overflow-hidden relative">
        <div className="flex gap-12 md:gap-16 animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((name, i) => (
            <span
              key={i}
              className="font-bold text-[20px] md:text-[24px] text-white/50 hover:text-white transition-opacity duration-200 cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EcosystemPartners;
