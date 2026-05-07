const partners = [
  {
    name: "Solana",
    logo: "https://pbs.twimg.com/profile_images/1472933274209107976/6u-LQfjG_400x400.jpg",
  },
  {
    name: "Avalanche",
    logo: "https://pbs.twimg.com/profile_images/1595473846987751425/LGqDFBZp_400x400.jpg",
  },
  {
    name: "BNB Chain",
    logo: "https://pbs.twimg.com/profile_images/1689917124521123840/n0gR0_qR_400x400.jpg",
  },
  {
    name: "Anthropic",
    logo: "https://pbs.twimg.com/profile_images/1657390105986891778/SnyrPRem_400x400.jpg",
  },
  {
    name: "Cursor",
    logo: "https://pbs.twimg.com/profile_images/1754920344468881408/gHF4IIJV_400x400.jpg",
  },
  {
    name: "BullBit",
    logo: "https://pbs.twimg.com/profile_images/2021442269610639361/dmZCdYz3_400x400.jpg",
  },
  {
    name: "BitMart",
    logo: "https://pbs.twimg.com/profile_images/2043674779668869120/Uhi_rJFt_400x400.jpg",
  },
  {
    name: "Optimism",
    logo: "https://pbs.twimg.com/profile_images/1491700646164246531/7D1GtGBn_400x400.jpg",
  },
  {
    name: "Starknet",
    logo: "https://pbs.twimg.com/profile_images/1656467662385938433/4M4U5HKy_400x400.jpg",
  },
];

const EcosystemPartners = () => (
  <section className="bg-primary py-20 overflow-hidden">
    <p className="eyebrow mb-8 text-center">IN THE ROOM WITH</p>
    <div className="overflow-hidden relative w-full">
      <div className="flex gap-12 md:gap-16 animate-marquee-full whitespace-nowrap w-max">
        {[...partners, ...partners, ...partners].map((p, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <img
              src={p.logo}
              alt={p.name}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              loading="lazy"
            />
            <span className="font-bold text-[20px] md:text-[24px] text-white/70">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemPartners;
