const partners = [
  "Solana", "Avalanche", "BNB Chain", "Anthropic",
  "Cursor", "BullBit", "BitMart", "Optimism", "Starknet",
];

const EcosystemPartners = () => (
  <section
    style={{ background: "#f5a623" }}
    className="w-full py-6 relative overflow-hidden"
  >
    <div
      className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32"
      style={{ background: "linear-gradient(to right, #f5a623, transparent)" }}
    />
    <div
      className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32"
      style={{ background: "linear-gradient(to left, #f5a623, transparent)" }}
    />

    <p className="text-center text-[11px] font-extrabold tracking-[0.3em] uppercase text-black/40 mb-4 select-none">
      IN THE ROOM WITH
    </p>

    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee-full items-center gap-0">
        {[...partners, ...partners, ...partners].map((name, i) => (
          <span key={i} className="flex-shrink-0 flex items-center">
            <span className="text-[15px] font-black tracking-[0.18em] uppercase text-black/70 hover:text-black transition-colors duration-200 cursor-default select-none px-8">
              {name}
            </span>
            <span className="text-black/30 text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemPartners;
