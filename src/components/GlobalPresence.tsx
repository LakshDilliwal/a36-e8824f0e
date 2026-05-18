const regions = [
  { label: "APAC", cities: "Singapore · Bangalore · Tokyo · Mumbai" },
  { label: "MENA", cities: "Dubai · Riyadh · Cairo" },
  { label: "LATAM", cities: "São Paulo · Buenos Aires · Mexico City" },
  { label: "North America", cities: "New York · San Francisco · Austin" },
  { label: "Europe", cities: "London · Berlin · Lisbon" },
  { label: "Africa", cities: "Lagos · Nairobi · Cape Town" },
];

const GlobalPresence = () => (
  <section className="bg-warm-cream py-16">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">WHERE WE OPERATE</p>
      <h2 className="font-black text-[28px] md:text-[36px] leading-[1.05] tracking-heading text-primary mb-4">
        Everywhere Builders Are
      </h2>
      <p className="text-base text-primary/65 mb-10 max-w-[640px]">
        A36 is active and expanding across global builder hubs through events, community chapters, ecosystem partnerships, and curated programs.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
        {regions.map((r) => (
          <div key={r.label} className="bg-warm-cream p-6">
            <p className="font-black text-sm uppercase tracking-wider text-primary">{r.label}</p>
            <p className="text-xs text-primary/50 mt-1 leading-relaxed">{r.cities}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalPresence;
