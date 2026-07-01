import { useMemo, useState } from "react";
import PageWrapper from "@/components/PageWrapper";

type Category = "Content" | "Design" | "Development" | "Community";

type Opportunity = {
  title: string;
  category: Category;
  description: string;
  reward: string;
  location: string;
  status: string;
  buttonLabel: string;
};

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Full Stack Developer",
    category: "Development",
    description:
      "Build core products across the A36 Labs ecosystem including Earn, Community, Residency, and internal tools.",
    reward: "Competitive",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Coming Soon",
  },
  {
    title: "Frontend Developer (React / Next.js)",
    category: "Development",
    description:
      "Build fast, accessible, and premium frontend experiences for A36 Labs products and builders.",
    reward: "Competitive",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Coming Soon",
  },
  {
    title: "Backend Developer",
    category: "Development",
    description:
      "Design and scale APIs, databases, and backend systems that power the A36 Labs platform.",
    reward: "Competitive",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Coming Soon",
  },
  {
    title: "AI Engineer",
    category: "Development",
    description:
      "Develop AI-powered workflows, automation tools, and builder experiences across the A36 ecosystem.",
    reward: "Competitive",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Coming Soon",
  },
  {
    title: "Mobile App Developer",
    category: "Development",
    description:
      "Build mobile-first experiences for A36 Labs builders, community members, and event attendees.",
    reward: "Competitive",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Coming Soon",
  },
  {
    title: "Short Form Video Creator",
    category: "Content",
    description:
      "Create high-quality short-form videos covering A36 Labs events, builders, startups, AI, Web3, and emerging technologies.",
    reward: "Paid per project",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Opens Soon",
  },
  {
    title: "Technical Writer",
    category: "Content",
    description:
      "Write documentation, guides, and explainers for A36 Labs products, events, and ecosystem partners.",
    reward: "Paid",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Opens Soon",
  },
  {
    title: "Newsletter Editor",
    category: "Content",
    description:
      "Curate weekly startup, AI, Web3, funding, and ecosystem opportunities for A36 Signal.",
    reward: "Paid",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Opens Soon",
  },
  {
    title: "Social Media Content Creator",
    category: "Content",
    description:
      "Create native content for A36 Labs across X, LinkedIn, Instagram, and other platforms.",
    reward: "Paid per project",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Opens Soon",
  },
  {
    title: "UI/UX Designer",
    category: "Design",
    description:
      "Design premium builder-first experiences for A36 Labs products and future launches.",
    reward: "Paid per project",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Opens Soon",
  },
  {
    title: "Motion Graphics Designer",
    category: "Design",
    description:
      "Create motion and video graphics for event recaps, product launches, and social content.",
    reward: "Paid per project",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Opens Soon",
  },
  {
    title: "Brand Designer",
    category: "Design",
    description:
      "Evolve the A36 Labs visual identity across digital, print, and event touchpoints.",
    reward: "Paid per project",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Opens Soon",
  },
  {
    title: "Community Moderator",
    category: "Community",
    description:
      "Moderate discussions, enforce Signal Rules, and keep A36 Network spaces productive and welcoming.",
    reward: "Paid",
    location: "Remote",
    status: "Launching Soon",
    buttonLabel: "Opens Soon",
  },
  {
    title: "Regional Community Lead",
    category: "Community",
    description:
      "Represent A36 Labs in your city, organize local events, and help grow the global builder ecosystem.",
    reward: "Performance Based",
    location: "Global",
    status: "Launching Soon",
    buttonLabel: "Coming Soon",
  },
  {
    title: "Event Operations Coordinator",
    category: "Community",
    description:
      "Support logistics, production, and attendee experience for A36 Labs IRL events worldwide.",
    reward: "Paid per project",
    location: "Hybrid",
    status: "Launching Soon",
    buttonLabel: "Coming Soon",
  },
];

const FILTERS = ["All", "Content", "Design", "Development", "Community"] as const;
type Filter = (typeof FILTERS)[number];

const LIST_OPP_URL = "https://t.me/LakshDilliwal";

const LogoMark = () => (
  <div className="w-14 h-14 bg-accent flex items-center justify-center shrink-0 p-2">
    <img
      src="/apple-touch-icon.png"
      alt="A36 Labs logo"
      className="w-12 h-12 object-contain"
      loading="lazy"
    />
  </div>
);

const OpportunityCard = ({ o }: { o: Opportunity }) => (
  <article className="bg-white border border-border p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5 transition-colors hover:border-accent">
    <div className="flex items-start gap-4 md:flex-1 min-w-0">
      <LogoMark />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-black text-lg text-primary leading-tight">{o.title}</h3>
          <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-accent border border-accent px-2 py-0.5">
            {o.category}
          </span>
        </div>
        <p className="text-sm text-muted mt-2 leading-relaxed line-clamp-2">{o.description}</p>
      </div>
    </div>

    <div className="flex md:flex-col md:items-end md:text-right gap-4 md:gap-1 md:min-w-[140px] md:border-l md:border-border md:pl-5">
      <div className="flex-1 md:flex-none">
        <p className="text-muted uppercase tracking-wider text-[10px]">Status</p>
        <p className="font-bold text-primary text-sm mt-0.5">{o.status}</p>
      </div>
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
      <button
        disabled
        className="btn-primary text-xs px-5 py-2.5 flex-1 md:flex-none text-center opacity-50 cursor-not-allowed"
      >
        {o.buttonLabel} →
      </button>
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

          {/* Beta announcement */}
          <div className="bg-primary border border-primary p-5 md:p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.15em] font-bold bg-accent text-primary px-2 py-0.5">
                BETA ACCESS
              </span>
            </div>
            <h3 className="font-black text-xl md:text-2xl text-white leading-tight">
              Applications Open Soon
            </h3>
            <p className="text-sm text-white/70 mt-2 max-w-[720px] leading-relaxed">
              A36 Earn is launching soon. Browse upcoming opportunities from the A36 Labs ecosystem. Applications will open as the platform enters public beta.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {filtered.map((o, i) => (
              <OpportunityCard key={`${o.title}-${o.category}-${i}`} o={o} />
            ))}
          </div>
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
