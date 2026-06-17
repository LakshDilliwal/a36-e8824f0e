import { useMemo, useState } from "react";
import { Globe } from "lucide-react";
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
    company: "MeWe",
    category: "Content",
    description:
      "Create educational content showcasing MeWe's social networking platform and creator tools.",
    reward: "$500 USDC",
    location: "Remote",
    website: "https://mewe.com/register",
    twitter: "https://x.com/mewe",
    apply: "https://scribble.network/bounties/mewe-1x2f",
    logo: "https://unavatar.io/x/mewe",
  },
  {
    company: "ClusterProtocol",
    category: "Content",
    description:
      "Create engaging video content explaining CodeXero and the ClusterProtocol ecosystem.",
    reward: "Up to $2,000 USDC",
    location: "Remote",
    website: "https://www.clusterprotocol.ai/",
    twitter: "https://x.com/clusterprotocol",
    apply: "https://app.firstdollar.money/company/clusterprotocol/bounty/video-creator-bounty-for-codexero",
    logo: "https://unavatar.io/x/clusterprotocol",
  },
  {
    company: "Superteam Germany",
    category: "Design",
    description:
      "Create content highlighting the Best Solana Summit Germany experience and ecosystem.",
    reward: "$5,000 USDC",
    location: "Global",
    website: "https://superteam.fun/",
    twitter: "https://x.com/SuperteamDE",
    apply: "https://superteam.fun/earn/listing/best-solana-summit-germany-content-bounty",
    logo: "https://unavatar.io/x/SuperteamDE",
  },
  {
    company: "Superteam",
    category: "Development",
    description: "Build useful agent skills that can be integrated into Solana AI Kit.",
    reward: "Open Reward",
    location: "Remote",
    website: "https://superteam.fun/",
    twitter: "https://x.com/Superteam",
    apply: "https://superteam.fun/earn/listing/skills/",
    logo: "https://unavatar.io/x/Superteam",
  },
  {
    company: "Superteam",
    category: "Grants",
    description:
      "Funding for builders creating agentic engineering tools and AI infrastructure.",
    reward: "Grant Funding Available",
    location: "Global",
    website: "https://superteam.fun/",
    twitter: "https://x.com/Superteam",
    apply: "https://superteam.fun/earn/grants/agentic-engineering",
    logo: "https://unavatar.io/x/Superteam",
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
        className="w-14 h-14 object-cover border border-border bg-white shrink-0"
      />
    );
  }
  return (
    <div className="w-14 h-14 bg-accent text-primary font-black text-xl flex items-center justify-center shrink-0">
      {company.charAt(0)}
    </div>
  );
};

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.91l-4.82-6.29L5.7 22H2.44l8.03-9.18L1.5 2h7.06l4.36 5.77L18.24 2Zm-2.42 18h1.87L7.27 4H5.27l10.55 16Z" />
  </svg>
);

const OpportunityCard = ({ o }: { o: Opportunity }) => (
  <article className="bg-white border border-border p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5 transition-colors hover:border-accent">
    <div className="flex items-start gap-4 md:flex-1 min-w-0">
      <LogoMark company={o.company} logo={o.logo} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-black text-lg text-primary leading-tight">{o.company}</h3>
          <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-accent border border-accent px-2 py-0.5">
            {o.category}
          </span>
        </div>
        <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-2">{o.description}</p>
      </div>
    </div>

    <div className="flex md:flex-col md:items-end md:text-right gap-4 md:gap-1 md:min-w-[140px] md:border-l md:border-border md:pl-5">
      <div className="flex-1 md:flex-none">
        <p className="text-muted uppercase tracking-wider text-[10px]">Reward</p>
        <p className="font-bold text-primary text-sm mt-0.5">{o.reward}</p>
      </div>
      <div className="flex-1 md:flex-none">
        <p className="text-muted uppercase tracking-wider text-[10px]">Location</p>
        <p className="font-bold text-primary text-sm mt-0.5">{o.location}</p>
      </div>
    </div>

    <div className="flex items-center gap-4 md:gap-3 md:shrink-0">
      <a
        href={o.apply}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-xs px-5 py-2.5 flex-1 md:flex-none text-center"
      >
        APPLY →
      </a>
      <a
        href={o.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${o.company} website`}
        className="text-primary/60 hover:text-accent transition-colors"
      >
        <Globe className="w-5 h-5" />
      </a>
      <a
        href={o.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${o.company} on X`}
        className="text-primary/60 hover:text-accent transition-colors"
      >
        <XIcon className="w-4 h-4" />
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
      {/* Hero — compact */}
      <section className="bg-background relative a36-tick-corners a36-tick-corners-charcoal py-10 md:py-12">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-3">A36 EARN</p>
          <h1 className="font-black text-[36px] md:text-[56px] leading-[1.05] tracking-heading text-primary">
            Build. Get Paid.
          </h1>
          <p className="text-sm md:text-base text-primary/75 mt-4 max-w-[640px]">
            Discover curated opportunities across AI, Web3, startups, design, research, growth, and engineering. Real work from trusted protocols, founders, and ecosystem partners.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a href="#opportunities" className="btn-primary text-center">EXPLORE OPPORTUNITIES →</a>
            <a
              href={LIST_OPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-center"
            >
              LIST AN OPPORTUNITY →
            </a>
          </div>

          <p className="mt-5 text-xs text-muted uppercase tracking-[0.15em]">
            Curated by A36 Labs <span className="text-accent">·</span> Zero platform fees <span className="text-accent">·</span> Global opportunities
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section id="opportunities" className="bg-warm-cream py-10 md:py-14">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-2">OPPORTUNITIES</p>
          <h2 className="font-black text-[26px] md:text-[36px] leading-[1.05] tracking-heading text-primary mb-6">
            Real work, curated weekly
          </h2>

          <div
            className="-mx-6 md:mx-0 px-6 md:px-0 overflow-x-auto mb-6"
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
                No opportunities in this category yet. Check back soon.
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
            <div className="flex flex-col gap-3">
              {filtered.map((o, i) => (
                <OpportunityCard key={`${o.company}-${o.category}-${i}`} o={o} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Builder Value */}
      <section className="bg-background py-12 md:py-20">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow mb-2">WHY A36 EARN</p>
          <h2 className="font-black text-[26px] md:text-[36px] leading-[1.05] tracking-heading text-primary mb-8">
            Built for serious builders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Curated Opportunities", b: "Every listing is reviewed before publishing." },
              { t: "Zero Commission", b: "Builders keep 100% of their earnings." },
              { t: "Global Network", b: "Access opportunities from founders, protocols, and startups worldwide." },
            ].map((c) => (
              <div key={c.t} className="bg-white border border-border p-6">
                <h3 className="font-black text-xl text-primary leading-tight">{c.t}</h3>
                <p className="text-sm text-muted mt-3 leading-relaxed">{c.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-14 md:py-20">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="font-black text-[26px] md:text-[36px] leading-[1.05] tracking-heading text-white">
            Have an opportunity to share?
          </h2>
          <p className="text-sm md:text-base text-white/70 mt-4 max-w-[600px]">
            List bounties, grants, jobs, and gigs in front of A36 Labs builders worldwide.
          </p>
          <div className="mt-7">
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
