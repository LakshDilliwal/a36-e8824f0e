const partners = [
  "Solana", "Avalanche", "BNB Chain", "Anthropic",
  "Cursor", "BullBit", "BitMart", "Optimism", "Starknet",
];

const EcosystemPartners = () => (
  <section
    style={{ background: "#1a2333" }}
    className="w-full py-5 relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

    <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-5 select-none">
      IN THE ROOM WITH
    </p>

    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28"
           style={{ background: "linear-gradient(to right, #1a2333, transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28"
           style={{ background: "linear-gradient(to left, #1a2333, transparent)" }} />

      <div className="flex w-max animate-marquee-full items-center gap-0">
        {[...partners, ...partners, ...partners].map((name, i) => (
          <span key={i} className="flex-shrink-0 flex items-center">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/40 hover:text-white/80 transition-colors duration-300 cursor-default select-none px-8">
              {name}
            </span>
            <span className="text-white/20 text-[8px]">✦</span>
          </span>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
  </section>
);

export default EcosystemPartners;
