const partners = [
  "Solana",
  "Avalanche",
  "BNB Chain",
  "Anthropic",
  "Cursor",
  "BullBit",
  "BitMart",
  "Optimism",
  "Starknet",
];

const EcosystemPartners = () => (
  <>
    <section className="bg-background py-10 border-b-2 border-border">
      <p className="eyebrow-dark text-center mb-8">IN THE ROOM WITH</p>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee-full items-center gap-16">
          {[...partners, ...partners, ...partners].map((name, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-sm font-bold uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground/90 transition-colors duration-200 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>

    <div className="w-full h-px bg-border" />
  </>
);

export default EcosystemPartners;
