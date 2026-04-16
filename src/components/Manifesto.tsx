import { Link } from "react-router-dom";

const cards = [
  {
    label: "EARN",
    title: "A36 Earn",
    body: "Bounties, grants, and jobs from protocols. Builders earn. Sponsors reach talent. A36 takes 6% — only when value is created.",
    cta: "Browse Listings →",
    href: "https://earn.a36labs.com",
    external: true,
  },
  {
    label: "EVENTS",
    title: "A36 Events",
    body: "120+ events hosted across India, Singapore, Dubai, and beyond. From builder meetups to global side events — we own the room.",
    cta: "View Events →",
    href: "/events",
    external: false,
  },
  {
    label: "RESIDENCY",
    title: "A36 Residency",
    body: "A 5-day immersive builder sprint. 20 selected builders. Invite-only. Co-located with ETH DevCon Mumbai — November 2026.",
    cta: "Apply Now →",
    href: "/residency",
    external: false,
  },
];

const Manifesto = () => (
  <section className="bg-primary py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow mb-4">WHAT WE DO</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
        One Network.<br />Six Ways We Show Up.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {cards.map((c) => (
          <div key={c.label} className="bg-dark-card border border-[#374151] p-8 flex flex-col">
            <span className="font-bold text-[11px] text-accent uppercase tracking-[0.15em]">{c.label}</span>
            <h3 className="font-black text-2xl text-white mt-3">{c.title}</h3>
            <p className="text-[15px] text-white/60 mt-4 leading-relaxed flex-1">{c.body}</p>
            {c.external ? (
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-accent font-bold text-sm uppercase tracking-wider mt-6 hover:underline">
                {c.cta}
              </a>
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
