import { Link } from "react-router-dom";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";

const cards = [
  {
    label: "ECOSYSTEM OPPORTUNITIES",
    title: "A36 Earn",
    body: "Curated grants, bounties, jobs, hackathons, fellowships, and ecosystem opportunities for builders across emerging tech",
    cta: "Join Waitlist",
    href: "/earn",
    disabled: false,
  },
  {
    label: "IRL EVENTS",
    title: "A36 Events",
    body: "Hackathons, meetups, workshops, founder connects, side events, and curated builder rooms hosted across global tech ecosystems",
    cta: "View Events",
    href: "/events",
    disabled: false,
  },
  {
    label: "COMMUNITY",
    title: "A36 Network",
    body: "A curated global network of founders, developers, operators, researchers, community leads, and ecosystem builders who are serious about shipping",
    cta: "Join",
    href: "/community",
    disabled: false,
  },
  {
    label: "PODCAST",
    title: "Base Layer",
    body: "Long-form conversations with founders, operators, protocol teams, investors, and builders working at the edge of Web3, AI, and deep tech",
    cta: "Explore",
    href: "/podcast",
    disabled: false,
  },
  {
    label: "NEWSLETTER",
    title: "A36 Signal",
    body: "Weekly alpha drops covering grants, bounties, events, protocol updates, startup opportunities, and ecosystem moves",
    cta: "Subscribe",
    href: "/newsletter",
    disabled: false,
  },
  {
    label: "RESIDENCY",
    title: "A36 Residency",
    body: "A 15-day global builder residency for selected founders, developers, and operators to ship, collaborate, meet mentors, and access ecosystem partners",
    cta: "Apply Now",
    href: "/residency",
    disabled: false,
  },
];

const Manifesto = () => (
  <section className="bg-primary py-14 md:py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow mb-3 md:mb-4">WHAT WE DO</p>
      <h2 className="font-black text-[28px] md:text-[52px] leading-[1.05] tracking-heading text-white">
        One Network<br />Six Ways We Operate
      </h2>
      <p className="text-sm md:text-base text-white/60 mt-3 md:mt-4 max-w-[640px]">
        A36 Labs connects builders to people, opportunities, events, media, ecosystem access, and residency programs across emerging tech.
      </p>

      <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16" stagger={0.07}>
        {cards.map((c) => (
          <StaggerItem key={c.label}>
            <div className="group bg-dark-card border border-[#374151] p-6 md:p-8 flex flex-col h-full a36-card-lift hover:border-accent/70">
              <span className="font-bold text-[11px] text-accent uppercase tracking-[0.15em]">{c.label}</span>
              <h3 className="font-black text-xl md:text-2xl text-white mt-3 leading-tight transition-transform duration-200 group-hover:scale-[1.02] origin-left">
                {c.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/60 mt-3 md:mt-4 leading-snug md:leading-relaxed flex-1">{c.body}</p>
              {c.disabled ? (
                <span className="text-accent/40 font-bold text-sm uppercase tracking-wider mt-5 md:mt-6 cursor-not-allowed">
                  {c.cta}
                </span>
              ) : (
                <Link to={c.href} className="text-accent font-bold text-sm uppercase tracking-wider mt-5 md:mt-6 hover:underline inline-flex items-center gap-1">
                  {c.cta} <span className="a36-arrow">→</span>
                </Link>
              )}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  </section>
);

export default Manifesto;
