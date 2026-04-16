const regions = ["APAC", "MENA", "LATAM", "North America", "Europe", "Africa"];

// Approximate dot positions on a flat world map (percent-based)
const dots = [
  { label: "India", x: "70%", y: "50%" },
  { label: "Singapore", x: "76%", y: "60%" },
  { label: "UAE", x: "62%", y: "47%" },
  { label: "USA", x: "22%", y: "42%" },
  { label: "Brazil", x: "32%", y: "68%" },
  { label: "UK", x: "48%", y: "32%" },
  { label: "Nigeria", x: "51%", y: "57%" },
];

const GlobalPresence = () => (
  <section className="bg-warm-cream py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">WE'RE PRESENT ACROSS</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        Built from India.<br />Operating Everywhere.
      </h2>

      <div className="relative mt-12 bg-white border border-border aspect-[2/1] overflow-hidden">
        {/* Stylized world map silhouette using simple shapes */}
        <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          {/* North America */}
          <path d="M10,15 Q15,10 25,12 L30,20 L28,28 L20,32 L12,28 Z" fill="hsl(var(--border))" opacity="0.4" />
          {/* South America */}
          <path d="M28,35 L32,32 L36,38 L34,46 L30,48 L26,42 Z" fill="hsl(var(--border))" opacity="0.4" />
          {/* Europe */}
          <path d="M45,18 L52,16 L55,22 L50,26 L46,24 Z" fill="hsl(var(--border))" opacity="0.4" />
          {/* Africa */}
          <path d="M48,28 L56,28 L58,38 L54,46 L50,44 L46,38 Z" fill="hsl(var(--border))" opacity="0.4" />
          {/* Asia */}
          <path d="M56,16 L78,14 L82,22 L78,28 L72,30 L62,28 L56,22 Z" fill="hsl(var(--border))" opacity="0.4" />
          {/* Australia */}
          <path d="M78,38 L86,38 L88,44 L82,46 L78,42 Z" fill="hsl(var(--border))" opacity="0.4" />
        </svg>

        {/* Dots */}
        {dots.map((d) => (
          <div
            key={d.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: d.x, top: d.y }}
          >
            <div className="w-3 h-3 bg-accent ring-4 ring-accent/30" />
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] font-bold text-primary uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {d.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10">
        {regions.map((r) => (
          <span key={r} className="text-sm font-bold text-primary uppercase tracking-wider">
            {r}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default GlobalPresence;
