import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";

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
            Base Layer is A36 Labs' long-form conversation series with founders, operators, researchers, investors, and ecosystem leaders building across Web3, AI, and emerging tech.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href={GUEST_FORM} target="_blank" rel="noopener noreferrer" className="btn-primary">BE A GUEST →</a>
            <Link to="/newsletter" className="btn-ghost">GET NOTIFIED →</Link>
          </div>
        </div>
      </section>

      {/* Season 1 coming soon card */}
      <section className="bg-warm-cream py-20">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <div className="bg-white border border-border p-10 md:p-14 transition-all duration-150 hover:border-accent">
            <p className="eyebrow-dark mb-4">SEASON 1 — COMING SOON</p>
            <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary">
              First episodes dropping soon.
            </h2>
            <p className="text-base text-primary/70 mt-4 max-w-[640px]">
              We are curating deep conversations with builders shipping real products, protocols, and infrastructure. Platform links and the full episode lineup will be published when Season 1 goes live.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/newsletter" className="btn-primary inline-block">GET NOTIFIED →</Link>
              <a href={GUEST_FORM} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-block">APPLY AS GUEST →</a>
            </div>
          </div>

          {/* Upcoming episodes placeholder strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {["EPISODE 001 — TBA", "EPISODE 002 — TBA", "EPISODE 003 — TBA"].map((code) => (
              <div
                key={code}
                className="border border-border bg-white p-6 min-h-[120px] flex flex-col justify-between transition-all duration-150 hover:border-accent hover:-translate-y-px"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent inline-block" aria-hidden="true" />
                  <span className="font-bold text-[11px] uppercase tracking-[0.15em] text-accent">{code}</span>
                </div>
                <p className="text-sm text-primary/55 mt-4">Guest and topic to be announced.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PodcastPage;
