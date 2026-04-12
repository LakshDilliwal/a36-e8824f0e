import { Link } from "react-router-dom";

const rows = [
  { logos: ["Solana", "Avalanche", "Diamante"] },
  { logos: ["AWS Startups", "Cloudflare", "GitHub"] },
  { logos: ["Superteam", "Beehiiv"] },
];

const EcosystemPartners = () => (
  <section className="bg-primary py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow mb-4">ECOSYSTEM PARTNERS</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
        Built with the builders<br />who are building what's next.
      </h2>

      <div className="mt-16 space-y-8">
        {rows.map((row, ri) => (
          <div key={ri} className="flex flex-wrap gap-16">
            {row.logos.map((logo) => (
              <span key={logo} className="font-bold text-[22px] text-white/50 hover:text-white transition-opacity duration-200 cursor-default">
                {logo}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemPartners;
