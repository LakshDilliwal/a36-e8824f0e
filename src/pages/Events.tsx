import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    badge: "FEATURED · SIDE EVENT",
    name: "A36 Infra Room — Singapore",
    subtitle: "AI × Web3 × Capital. By invitation only.",
    context: "Alongside SuperAI 2026",
    date: "June 10–11, 2026",
    location: "Marina Bay Sands, Singapore",
    format: "Invite-only · 50–80 seats · Infra operators + capital",
    tags: ["AI", "Web3", "Infrastructure", "Capital"],
    dark: true,
  },
  {
    badge: "SIDE EVENT · Q4 2026",
    name: "A36 Founder × Infra Capital Salon",
    subtitle: "Web3 infrastructure founders meet capital operators.",
    context: "Alongside TOKEN2049 Singapore 2026",
    date: "October 7–8, 2026",
    location: "Marina Bay Sands, Singapore",
    format: "Curated · 50 seats · No pitches on stage",
    tags: ["Web3", "DeFi", "Infrastructure", "VC"],
    dark: false,
  },
];

const pastEvents = [
  { name: "Solana Builder Meetup", loc: "Indore, India", type: "Ecosystem" },
  { name: "Web3 Dev Night", loc: "Bangalore, India", type: "Developer" },
  { name: "Avalanche India Tour", loc: "Indore, India", type: "Protocol" },
  { name: "Diamante Ecosystem", loc: "Indore, India", type: "L1" },
  { name: "Crypto Founders Dinner", loc: "Delhi, India", type: "Private" },
  { name: "A36 Builder Room", loc: "Mumbai, India", type: "Accelerator" },
];

const Events = () => (
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

    {/* Upcoming */}
    <section className="bg-background py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">COMING SOON</p>
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
          Global Rooms. 2026.
        </h2>

        <div className="space-y-8 mt-12">
          {upcomingEvents.map((ev) => (
            <div key={ev.name} className={`p-8 md:p-12 ${ev.dark ? "bg-primary text-white" : "bg-warm-cream text-primary"}`}>
              <span className={`eyebrow ${ev.dark ? "" : "!text-accent"} mb-4 block`}>{ev.badge}</span>
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
                <button className="btn-primary">REQUEST INVITE →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Past Events */}
    <section className="bg-warm-cream py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">PAST EVENTS</p>
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
          The rooms we've already built.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {pastEvents.map((ev) => (
            <div key={ev.name} className="relative bg-[#C8BFB0] min-h-[200px]">
              <div className="absolute bottom-0 left-0 right-0 flex justify-between p-3">
                <span className="bg-black/50 px-2 py-1 text-[11px] font-bold text-white">{ev.loc}</span>
                <span className="bg-black/50 px-2 py-1 text-[11px] font-bold text-white">{ev.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

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

export default Events;
