const regions = ["APAC", "MENA", "LATAM", "North America", "Europe", "Africa"];

const GlobalPresence = () => (
  <section className="bg-warm-cream py-24 relative overflow-hidden">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16 relative">
      <p className="eyebrow-dark mb-4">WHERE WE OPERATE</p>
      <h2 className="font-black text-[28px] md:text-[36px] leading-[1.05] tracking-heading text-primary mb-4">
        Global Network<br />Regional Depth
      </h2>
      <p className="text-base text-primary/65 mb-12 max-w-[680px]">
        A36 operates through regional builder hubs, event chapters, ecosystem partners, and curated programs across key global markets
      </p>

      {/* Abstract network visual */}
      <div className="relative">
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <line x1="120" y1="120" x2="380" y2="280" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="3 4" />
          <line x1="380" y1="280" x2="640" y2="120" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="3 4" />
          <line x1="640" y1="120" x2="900" y2="280" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="3 4" />
          <line x1="900" y1="280" x2="1080" y2="120" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="3 4" />
          <line x1="120" y1="120" x2="640" y2="120" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="3 4" />
          <line x1="380" y1="280" x2="900" y2="280" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="3 4" />
        </svg>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border relative">
          {regions.map((r) => (
            <div
              key={r}
              className="bg-warm-cream p-8 flex items-center gap-3 relative group hover:bg-cream transition-colors duration-200"
            >
              <span className="w-2 h-2 bg-accent shrink-0" />
              <p className="font-black text-sm md:text-base uppercase tracking-wider text-primary">
                {r}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GlobalPresence;
