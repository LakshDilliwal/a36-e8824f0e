import { useMemo, useState } from "react";
import PageWrapper from "@/components/PageWrapper";

type Category = "Content" | "Design" | "Development" | "Grants" | "Other";

type Opportunity = {
  company: string;
  category: Category;
  description: string;
  reward: string;
  location: string;
  website: string;
  twitter: string;
  apply: string;
  logo?: string;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    company: "Kaito",
    category: "Content",
    description: "Create educational content about AI agents and emerging Web3 products.",
    reward: "$500–$1,500",
    location: "Remote",
    website: "https://kaito.ai",
    twitter: "https://x.com/KaitoAI",
    apply: "https://kaito.ai",
    logo: "https://unavatar.io/x/KaitoAI",
  },
  {
    company: "Story Protocol",
    category: "Design",
    description: "Design social assets, campaign visuals, and ecosystem graphics.",
    reward: "$800–$2,000",
    location: "Remote",
    website: "https://story.foundation",
    twitter: "https://x.com/StoryProtocol",
    apply: "https://story.foundation",
    logo: "https://unavatar.io/x/StoryProtocol",
  },
  {
    company: "Thirdweb",
    category: "Development",
    description: "Build integrations and developer tooling for AI and Web3 applications.",
    reward: "$2,000–$5,000",
    location: "Remote",
    website: "https://thirdweb.com",
    twitter: "https://x.com/thirdweb",
    apply: "https://thirdweb.com",
    logo: "https://unavatar.io/x/thirdweb",
  },
  {
    company: "Arbitrum",
    category: "Grants",
    description: "Funding available for infrastructure, developer tools, and ecosystem growth.",
    reward: "Up to $25,000",
    location: "Global",
    website: "https://arbitrum.io",
    twitter: "https://x.com/arbitrum",
    apply: "https://arbitrum.io",
    logo: "https://unavatar.io/x/arbitrum",
  },
  {
    company: "Virtuals Protocol",
    category: "Other",
    description: "Community operations and ecosystem growth opportunities.",
    reward: "$300–$1,000",
    location: "Remote",
    website: "https://www.virtuals.io",
    twitter: "https://x.com/virtuals_io",
    apply: "https://www.virtuals.io",
    logo: "https://unavatar.io/x/virtuals_io",
  },
];

const FILTERS = ["All", "Content", "Design", "Development", "Grants", "Other"] as const;
type Filter = (typeof FILTERS)[number];

const LIST_OPP_URL = "https://t.me/LakshDilliwal";

const LogoMark = ({ company, logo }: { company: string; logo?: string }) => {
  const [errored, setErrored] = useState(false);
  if (logo && !errored) {
    return (
      <img
        src={logo}
        alt={`${company} logo`}
        loading="lazy"
        onError={() => setErrored(true)}
        className="w-12 h-12 object-cover border border-border bg-white"
      />
    );
  }
  return (
    <div className="w-12 h-12 bg-accent text-primary font-black text-lg flex items-center justify-center">
      {company.charAt(0)}
    </div>
  );
};

const OpportunityCard = ({ o }: { o: Opportunity }) => (
  <article className="bg-white border border-border p-6 flex flex-col transition-colors hover:border-accent">
    <div className="flex items-start gap-4">
      <LogoMark company={o.company} logo={o.logo} />
      <div className="min-w-0 flex-1">
        <h3 className="font-black text-lg text-primary leading-tight truncate">{o.company}</h3>
        <span className="inline-block mt-1 text-[10px] uppercase tracking-[0.15em] font-bold text-accent border border-accent px-2 py-0.5">
          {o.category}
        </span>
      </div>
    </div>

    <p className="text-sm text-muted mt-4 leading-relaxed flex-1">{o.description}</p>

    <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-2 text-xs">
      <div>
        <p className="text-muted uppercase tracking-wider text-[10px]">Reward</p>
        <p className="font-bold text-primary mt-0.5">{o.reward}</p>
      </div>
      <div>
        <p className="text-muted uppercase tracking-wider text-[10px]">Location</p>
        <p className="font-bold text-primary mt-0.5">{o.location}</p>
      </div>
    </div>

    <div className="mt-5 flex flex-wrap gap-2">
      <a
        href={o.apply}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-xs px-4 py-2"
      >
        APPLY →
      </a>
      <a
        href={o.website}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost text-xs px-4 py-2"
      >
        WEBSITE
      </a>
      <a
        href={o.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${o.company} on X`}
        className="btn-ghost text-xs px-3 py-2"
      >
        X
      </a>
    </div>
  </article>
);

const Earn = () => {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? OPPORTUNITIES : OPPORTUNITIES.filter((o) => o.category === filter)),
    [filter],
  );

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background relative a36-tick-corners a36-tick-corners-charcoal py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-4 md:mb-6">A36 EARN</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Build. Get Paid.
          </h1>
          <p className="text-base md:text-lg text-primary/75 mt-5 max-w-[640px]">
            Discover curated opportunities across AI, Web3, startups, design, research, growth, and emerging technology. Real work from trusted founders, protocols, and ecosystem partners.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 mt-8">
            <a href="#opportunities" className="btn-primary">EXPLORE OPPORTUNITIES →</a>
            <a
              href={LIST_OPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LIST AN OPPORTUNITY →
            </a>
          </div>

          <p className="mt-6 text-xs text-muted uppercase tracking-[0.15em]">
            Curated by A36 Labs <span className="text-accent">•</span> Zero platform fees <span className="text-accent">•</span> Global opportunities
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section id="opportunities" className="bg-warm-cream py-16 md:py-20">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-3">OPPORTUNITIES</p>
          <h2 className="font-black text-[28px] md:text-[40px] leading-[1.05] tracking-heading text-primary mb-8">
            Real work, curated weekly
          </h2>

          {/* Filter bar */}
          <div
            className="-mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto mb-8"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-2 min-w-max">
              {FILTERS.map((f) => {
                const active = f === filter;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] border transition-colors ${
                      active
                        ? "bg-accent text-primary border-accent"
                        : "bg-background text-primary border-border hover:border-accent"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white border border-border p-10 text-center">
              <p className="text-primary font-bold">
                No opportunities available yet. Check back soon.
              </p>
              <a
                href={LIST_OPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block mt-5"
              >
                LIST AN OPPORTUNITY →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((o) => (
                <OpportunityCard key={o.company} o={o} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why A36 Earn */}
      <section className="bg-background py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow mb-3">WHY A36 EARN</p>
          <h2 className="font-black text-[28px] md:text-[40px] leading-[1.05] tracking-heading text-primary mb-10">
            Built for serious builders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: "Curated Opportunities", b: "Every opportunity is reviewed before publishing." },
              { t: "Zero Commission", b: "Builders keep 100% of what they earn." },
              { t: "Global Network", b: "Access opportunities from founders, protocols, and startups worldwide." },
            ].map((c) => (
              <div key={c.t} className="bg-white border border-border p-7">
                <h3 className="font-black text-xl text-primary leading-tight">{c.t}</h3>
                <p className="text-sm text-muted mt-3 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="font-black text-[28px] md:text-[40px] leading-[1.05] tracking-heading text-white">
            Have an opportunity to share?
          </h2>
          <p className="text-base text-white/70 mt-4 max-w-[600px]">
            List bounties, grants, jobs, and gigs in front of A36 Labs builders worldwide.
          </p>
          <div className="mt-8">
            <a
              href={LIST_OPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light inline-block"
            >
              LIST AN OPPORTUNITY →
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Earn;
