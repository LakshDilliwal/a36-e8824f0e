import { Link } from "react-router-dom";
import { Mic, Play } from "lucide-react";

const platforms = [
  { name: "Spotify", href: "#" },
  { name: "Apple Podcasts", href: "#" },
  { name: "YouTube", href: "#" },
];

const Podcast = () => (
  <section className="bg-background py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">BASE LAYER PODCAST</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        Signal Over Noise.
      </h2>
      <p className="text-base text-primary/65 mt-4 max-w-[560px]">
        Long-form conversations with founders, operators, and protocol leads shipping in Web3, AI, and deep tech.
      </p>

      {/* Featured episode card */}
      <div className="mt-12 border border-border bg-white p-8 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-48 h-48 bg-primary flex items-center justify-center flex-shrink-0">
          <Mic size={56} className="text-accent" />
        </div>
        <div className="flex-1">
          <p className="eyebrow-dark mb-2">EPISODE 001</p>
          <h3 className="font-black text-[24px] text-primary leading-tight">Booting Up. The A36 Signal.</h3>
          <p className="text-sm text-muted mt-2">First guest announcement coming soon.</p>
          <p className="text-sm text-primary/70 mt-3">
            Subscribe to be notified when Base Layer Episode 001 drops. The first chapter. Why A36 exists, what it's building, and who it's for.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <span className="bg-primary text-accent font-bold text-[11px] px-2.5 py-1">~45 MIN</span>
            <Link to="/podcast" className="btn-primary !py-2 !px-4 text-xs">LISTEN NOW →</Link>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <div className="w-14 h-14 bg-accent flex items-center justify-center">
            <Play size={22} className="text-primary" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Platforms */}
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <span className="text-[11px] font-bold text-muted uppercase tracking-[0.15em]">Available on</span>
        {platforms.map((p) => (
          <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="font-bold text-primary/70 hover:text-primary transition-opacity duration-200 text-sm">
            {p.name}
          </a>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/podcast" className="text-accent font-bold text-sm uppercase hover:underline tracking-wider">
          MORE EPISODES →
        </Link>
      </div>
    </div>
  </section>
);

export default Podcast;
