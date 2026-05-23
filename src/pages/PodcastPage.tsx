import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";

const platforms = [
  { name: "Spotify", href: "#" },
  { name: "Apple Podcasts", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Google Podcasts", href: "#" },
];

const GUEST_FORM = "https://forms.gle/CbWcnNHxwXqMyQ159";

const PodcastPage = () => {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">BASE LAYER</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Conversations With Builders In The Arena.
          </h1>
          <p className="text-base text-primary/70 mt-6 max-w-[640px]">
            Long-form conversations with founders, operators, protocol leads, investors, and researchers building across Web3, AI, and emerging tech.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href={GUEST_FORM} target="_blank" rel="noopener noreferrer" className="btn-primary">BE A GUEST →</a>
            <Link to="/newsletter" className="btn-ghost">GET NOTIFIED →</Link>
          </div>
        </div>
      </section>

      {/* Available on */}
      <section className="bg-warm-cream py-12">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="font-bold text-[11px] text-primary uppercase tracking-[0.15em] mb-4">AVAILABLE ON — LAUNCHING SOON</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {platforms.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="font-bold text-lg text-primary/70 hover:text-primary transition-opacity">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Season 1 coming soon card */}
      <section className="bg-background py-20">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <div className="bg-white border border-border p-10 md:p-14">
            <p className="eyebrow-dark mb-4">SEASON 1</p>
            <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary">
              First episodes dropping soon.
            </h2>
            <p className="text-base text-primary/70 mt-4 max-w-[640px]">
              We are curating deep conversations with builders shipping real products, protocols, and infrastructure.
            </p>
            <div className="mt-8">
              <Link to="/newsletter" className="btn-primary inline-block">GET NOTIFIED →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lineup coming soon */}
      <section className="bg-warm-cream py-20">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">LINEUP</p>
          <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary">
            Season 1 is being curated.
          </h2>
          <p className="text-base text-primary/70 mt-4 max-w-[640px]">
            Founder stories, operator lessons, protocol deep dives, and investor conversations from the A36 network.
          </p>
        </div>
      </section>

      {/* Guest invitation */}
      <section className="bg-background py-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">GUESTS</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Building something real?
          </h2>
          <p className="text-base text-primary/70 mt-4 max-w-[640px]">
            We invite founders, operators, investors, researchers, and ecosystem leads with real work to share.
          </p>
          <div className="mt-8">
            <a href={GUEST_FORM} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">APPLY AS GUEST →</a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PodcastPage;
