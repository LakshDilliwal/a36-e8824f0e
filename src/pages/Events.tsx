import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

type EventType = "Meetup" | "Side Event" | "Conference" | "Hackathon" | "Residency";

const upcomingEvents: Array<{
  badge: string;
  type: EventType;
  name: string;
  subtitle: string;
  context: string;
  date: string;
  location: string;
  format: string;
  tags: string[];
  cta: string;
  ctaLink: string;
  dark: boolean;
}> = [
  {
    badge: "RESIDENCY · APPLICATIONS OPEN",
    type: "Residency",
    name: "A36 Residency × ETH DevCon Mumbai",
    subtitle: "5-day immersive builder sprint. 20 selected builders.",
    context: "Co-located alongside ETH DevCon Mumbai 2026",
    date: "October 29 – November 2, 2026",
    location: "Mumbai, India",
    format: "Invite-selected · 20 seats · Free for accepted builders",
    tags: ["Web3", "Builder", "Residency", "India"],
    cta: "APPLY NOW →",
    ctaLink: "/residency",
    dark: true,
  },
  {
    badge: "FEATURED · SIDE EVENT",
    type: "Side Event",
    name: "A36 Infra Room — Singapore",
    subtitle: "AI × Web3 × Capital. By invitation only.",
    context: "Alongside SuperAI 2026",
    date: "June 10–11, 2026",
    location: "Marina Bay Sands, Singapore",
    format: "Invite-only · 50–80 seats · Infra operators + capital",
    tags: ["AI", "Web3", "Infrastructure", "Capital"],
    cta: "REQUEST INVITE →",
    ctaLink: "/apply",
    dark: true,
  },
  {
    badge: "SIDE EVENT · Q4 2026",
    type: "Side Event",
    name: "A36 Founder × Infra Capital Salon",
    subtitle: "Web3 infrastructure founders meet capital operators.",
    context: "Alongside TOKEN2049 Singapore 2026",
    date: "October 7–8, 2026",
    location: "Marina Bay Sands, Singapore",
    format: "Curated · 50 seats · No pitches on stage",
    tags: ["Web3", "DeFi", "Infrastructure", "VC"],
    cta: "REQUEST INVITE →",
    ctaLink: "/apply",
    dark: false,
  },
];

const pastEvents: Array<{ name: string; loc: string; type: EventType }> = [
  { name: "Solana Builder Meetup", loc: "Indore, India", type: "Meetup" },
  { name: "Web3 Dev Night", loc: "Bangalore, India", type: "Meetup" },
  { name: "Avalanche India Tour", loc: "Indore, India", type: "Conference" },
  { name: "Diamante Ecosystem", loc: "Indore, India", type: "Side Event" },
  { name: "Crypto Founders Dinner", loc: "Delhi, India", type: "Side Event" },
  { name: "A36 Builder Room", loc: "Mumbai, India", type: "Meetup" },
];

const hackathonPartners = [
  { name: "ETHIndia", desc: "India's largest Ethereum hackathon" },
  { name: "Devfolio", desc: "The platform powering India's best hackathons" },
];

const tabs = ["ALL", "MEETUPS", "SIDE EVENTS", "CONFERENCES", "HACKATHONS", "RESIDENCY"] as const;

const tabToType: Record<string, EventType | "ALL"> = {
  ALL: "ALL",
  MEETUPS: "Meetup",
  "SIDE EVENTS": "Side Event",
  CONFERENCES: "Conference",
  HACKATHONS: "Hackathon",
  RESIDENCY: "Residency",
};

const Events = () => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("ALL");

  const matchType = activeTab === "ALL"
    ? () => true
    : (t: EventType) => t === tabToType[activeTab];

  const visibleUpcoming = upcomingEvents.filter((e) => matchType(e.type));
  const visiblePast = pastEvents.filter((e) => matchType(e.type));
  const showHackathons = activeTab === "ALL" || activeTab === "HACKATHONS";

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-6">FIELD NOTES</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">
            120+ Events.<br />Real Rooms.<br />No Fluff.
          </h1>
          <p className="text-base text-white/60 mt-6 max-w-[560px]">
            From campus meetups to global side events — A36 has been in the room before it had a name. We don't sponsor banners. We host rooms.
          </p>
        </div>
      </section>

      {/* Luma calendar embed */}
      <section className="bg-background py-16">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">2026 CALENDAR</p>
          <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary mb-8">
            What's Coming Up.
          </h2>
          <div className="w-full overflow-hidden">
            <iframe
              src="https://luma.com/embed/calendar/cal-PuV3v4w2KzbiPI7/events?lt=dark"
              width="100%"
              height="600"
              frameBorder="0"
              style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
              allowFullScreen
              aria-hidden={false}
              tabIndex={0}
            />
          </div>
          <div className="mt-6">
            <a
              href="https://lu.ma/a36"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-bold text-sm uppercase tracking-wider hover:underline"
            >
              Follow A36 on Luma for updates →
            </a>
          </div>
        </div>
      </section>

      {/* Tab filter */}
      <section className="bg-background border-b border-border sticky top-16 z-30">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex flex-wrap gap-1 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-4 py-4 text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap border-b-2 ${
                  activeTab === t
                    ? "text-primary border-accent"
                    : "text-muted border-transparent hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      {visibleUpcoming.length > 0 && (
        <section className="bg-background py-20">
          <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
            <p className="eyebrow-dark mb-4">COMING SOON</p>
            <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
              Global Rooms. 2026.
            </h2>

            <div className="space-y-8 mt-12">
              {visibleUpcoming.map((ev) => (
                <div key={ev.name} className={`p-8 md:p-12 ${ev.dark ? "bg-primary text-white" : "bg-warm-cream text-primary"}`}>
                  <span className="font-bold text-[10px] uppercase tracking-[0.15em] text-accent mb-4 block">{ev.badge}</span>
                  <h3 className="font-black text-2xl md:text-3xl">{ev.name}</h3>
                  <p className={`text-base mt-2 ${ev.dark ? "text-white/60" : "text-muted"}`}>{ev.subtitle}</p>
                  <p className={`text-sm mt-1 ${ev.dark ? "text-white/40" : "text-muted"}`}>{ev.context}</p>
                  <div className={`mt-4 space-y-1 text-sm ${ev.dark ? "text-white/70" : "text-primary/70"}`}>
                    <p>📅 {ev.date}</p>
                    <p>📍 {ev.location}</p>
                    <p>{ev.format}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {ev.tags.map((t) => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-accent">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link to={ev.ctaLink} className="btn-primary inline-block">{ev.cta}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hackathons partner section */}
      {showHackathons && (
        <section className="bg-warm-cream py-20">
          <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
            <p className="eyebrow-dark mb-4">HACKATHON PARTNERS</p>
            <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary">
              We back the platforms that ship hackers.
            </h2>
            <p className="text-base text-primary/70 mt-4 max-w-[640px]">
              A36 partners with leading hackathon platforms as an ecosystem partner. Builders in our network get early access and co-branded opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {hackathonPartners.map((p) => (
                <div key={p.name} className="bg-white border border-border p-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-accent text-primary px-2 py-1">A36 Ecosystem Partner</span>
                  <h3 className="font-black text-2xl text-primary mt-4">{p.name}</h3>
                  <p className="text-sm text-muted mt-2">{p.desc}</p>
                  <a href="#" className="text-accent font-bold text-sm uppercase tracking-wider mt-4 inline-block hover:underline">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {visiblePast.length > 0 && (
        <section className="bg-warm-cream py-20">
          <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
            <p className="eyebrow-dark mb-4">PAST EVENTS</p>
            <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
              The rooms we've already built.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {visiblePast.map((ev) => (
                <div key={ev.name} className="relative bg-[#C8BFB0] min-h-[200px]">
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3">
                    <span className="bg-black/50 px-2 py-1 text-[11px] font-bold text-white">{ev.loc}</span>
                    <span className="bg-black/50 px-2 py-1 text-[11px] font-bold text-white">{ev.type}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/80 px-2 py-1 text-[11px] font-bold text-white">{ev.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Host CTA */}
      <section className="bg-primary py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
            Want to co-host an A36 room?
          </h2>
          <p className="text-base text-white/60 mt-4 max-w-[560px] mx-auto">
            We partner with communities, protocols, and funds to run high-signal events globally. From Singapore to Dubai to Bangalore.
          </p>
          <div className="mt-10">
            <Link to="/pitch" className="btn-primary inline-block">PARTNER WITH US →</Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Events;
