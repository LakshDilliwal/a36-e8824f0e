import { Link } from "react-router-dom";

const cards = [
  {
    label: "EARN",
    title: "A36 Earn",
    body: "Bounties, grants, and jobs from verified protocols. Builders find real work. Sponsors reach curated talent.",
    cta: "Coming Soon",
    href: "/earn",
    disabled: true,
  },
  {
    label: "EVENTS",
    title: "A36 Events",
    body: "120+ summits across 6 continents. Side events, hacker houses, and founder salons curated around every major tech conference globally.",
    cta: "View Events",
    href: "/events",
    disabled: false,
  },
  {
    label: "PASSPORT",
    title: "A36 Passport",
    body: "The builder cohort. Selected builders get ecosystem resources, capital introductions, and access to A36's global operator network.",
    cta: "Apply Now",
    href: "/apply",
    disabled: false,
  },
  {
    label: "SIGNAL",
    title: "A36 Signal",
    body: "Weekly dispatch for builders and operators. No recap. No noise. One email curated for founders who need alpha, not scroll.",
    cta: "Subscribe",
    href: "/newsletter",
    disabled: false,
  },
  {
    label: "ECOSYSTEM",
    title: "A36 Ecosystem",
    body: "A directory of protocols, funds, and communities operating across A36's 36 tech verticals. The map of what is being built.",
    cta: "Coming Soon",
    href: "#",
    disabled: true,
  },
  {
    label: "COMMUNITY",
    title: "A36 Community",
    body: "The private network. Builders, operators, and founders who have earned their seat, connected across continents and verticals.",
    cta: "Coming Soon",
    href: "#",
    disabled: true,
  },
];

const Manifesto = () => (
  <section className="bg-primary py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow mb-4">WHAT WE DO</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
        One Network.<br />Six Ways We Operate.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {cards.map((c) => (
          <div key={c.label} className="bg-dark-card border border-[#374151] p-8 flex flex-col">
            <span className="font-bold text-[11px] text-accent uppercase tracking-[0.15em]">{c.label}</span>
            <h3 className="font-black text-2xl text-white mt-3">{c.title}</h3>
            <p className="text-[15px] text-white/60 mt-4 leading-relaxed flex-1">{c.body}</p>
            {c.disabled ? (
              <span className="text-accent/40 font-bold text-sm uppercase tracking-wider mt-6 cursor-not-allowed">
                {c.cta}
              </span>
            ) : (
              <Link to={c.href} className="text-accent font-bold text-sm uppercase tracking-wider mt-6 hover:underline">
                {c.cta}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Manifesto;
