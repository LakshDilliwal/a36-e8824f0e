import PageWrapper from "@/components/PageWrapper";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const previousEpisodes = [1, 2, 3].map((i) => ({
  num: `EP 00${i}`,
  title: "Coming Soon",
  guest: "TBA",
}));

const platforms = [
  { name: "Spotify", href: "#" },
  { name: "Apple Podcasts", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Google Podcasts", href: "#" },
];

const guestCategories = [
  "Founder · Protocol",
  "Investor · APAC",
  "Operator · DePIN",
  "Researcher · ZK",
  "Founder · AI",
  "Builder · MENA",
];

const stats = [
  { num: "0", label: "Episodes", note: "Launching soon" },
  { num: "—", label: "Total Views" },
  { num: "0", label: "Guests" },
  { num: "—", label: "Subscribers" },
];

const PodcastPage = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollerRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">BASE LAYER</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Conversations With The Builders Already In The Arena.
          </h1>
          <p className="text-base text-primary/70 mt-6 max-w-[640px]">
            No hype. No surface-level takes. Long-form interviews with founders, operators, and protocol leads who are shipping in Web3, AI, and deep tech.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn-primary">WATCH ON YOUTUBE →</a>
            <Link to="/apply" className="btn-ghost">BE A GUEST →</Link>
          </div>
        </div>
      </section>

      {/* Listen on */}
      <section className="bg-warm-cream py-12">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="font-bold text-[11px] text-primary uppercase tracking-[0.15em] mb-4">AVAILABLE ON</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {platforms.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="font-bold text-lg text-primary/70 hover:text-primary transition-opacity">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Episode Featured */}
      <section className="bg-background py-20">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">LATEST EPISODE</p>
          <div className="bg-white border border-border">
            <div className="aspect-video bg-[#C8BFB0] flex items-center justify-center">
              <Play size={64} className="text-primary/40" fill="currentColor" />
            </div>
            <div className="p-8">
              <span className="bg-primary text-accent font-bold text-[11px] px-2.5 py-1">EP 001</span>
              <h2 className="font-black text-2xl md:text-3xl text-primary mt-4">
                Coming Soon — Episode 1 Dropping Shortly
              </h2>
              <p className="text-sm text-muted mt-2">First guest announcement coming soon.</p>
              <p className="text-base text-primary/75 mt-4">
                Subscribe to be notified when Base Layer Episode 001 drops.
              </p>
              <div className="mt-6">
                <a href="https://a36labs.substack.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                  NOTIFY ME →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous episodes scroller */}
      <section className="bg-warm-cream py-20">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow-dark mb-4">MORE EPISODES</p>
              <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary">
                Previous Episodes
              </h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className="w-10 h-10 border border-border bg-white text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center" aria-label="Scroll left">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => scroll("right")} className="w-10 h-10 border border-border bg-white text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center" aria-label="Scroll right">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div ref={scrollerRef} className="flex gap-4 mt-8 overflow-x-auto pb-4 snap-x">
            {previousEpisodes.map((ep) => (
              <div key={ep.num} className="bg-white border border-border min-w-[280px] snap-start">
                <div className="aspect-video bg-[#C8BFB0]" />
                <div className="p-5">
                  <span className="font-bold text-[10px] text-accent uppercase tracking-wider">{ep.num} — {ep.title}</span>
                  <p className="text-sm text-muted mt-2">Guest: {ep.guest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-black text-[36px] md:text-[44px] text-accent">{s.num}</span>
                <p className="text-xs text-white/60 uppercase tracking-wider mt-1">{s.label}</p>
                {s.note && <p className="text-[10px] text-white/40 mt-1">{s.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured guests */}
      <section className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">WHO WE TALK TO</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            The Operators Shaping the Frontier.
          </h2>
          <p className="text-base text-primary/70 mt-4 max-w-[640px]">
            A36 guests are founders, protocol leads, and investors building in Web3, AI, and emerging tech globally.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {guestCategories.map((g) => (
              <div key={g} className="text-center">
                <div className="w-24 h-24 mx-auto bg-[#C8BFB0] rounded-full" />
                <p className="text-xs font-bold text-primary uppercase tracking-wider mt-3">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PodcastPage;
