import { Link } from "react-router-dom";
import { Mic, Play } from "lucide-react";

const platforms = [
  { name: "Spotify", href: "#" },
  { name: "Apple Podcasts", href: "#" },
  { name: "YouTube", href: "#" },
];

const Podcast = () => (
  <section className="bg-background py-16">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">BASE LAYER BY A36</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        Conversations With Builders In The Arena
      </h2>
      <p className="text-base text-primary/65 mt-4 max-w-[640px]">
        Base Layer is A36's long-form podcast featuring founders, operators, developers, protocol teams, investors, and ecosystem leaders building across Web3, AI, and emerging tech.
      </p>

      {/* Featured episode card */}
      <div className="mt-12 border border-border bg-white p-8 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-48 h-48 bg-primary flex items-center justify-center flex-shrink-0">
          <Mic size={56} className="text-accent" />
        </div>
        <div className="flex-1">
          <p className="eyebrow-dark mb-2">SEASON 1</p>
          <h3 className="font-black text-[24px] text-primary leading-tight">Season 1 Coming Soon</h3>
          <p className="text-sm text-primary/70 mt-3">
            Guest outreach is open. We are speaking with builders, operators, and ecosystem leaders shaping the next layer of technology.
          </p>
          <div className="flex items-center gap-4 mt-5 flex-wrap">
            <Link to="/apply" className="btn-primary !py-2 !px-4 text-xs">APPLY AS GUEST →</Link>
            <a href="https://a36labs.substack.com" target="_blank" rel="noopener noreferrer" className="btn-ghost !py-2 !px-4 text-xs">GET NOTIFIED →</a>
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
