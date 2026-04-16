import { Link } from "react-router-dom";

const events = [
  {
    badge: "FEATURED · SIDE EVENT",
    name: "A36 Infra Room — Singapore",
    subtitle: "AI × Web3 × Capital. By invitation only.",
    context: "Alongside SuperAI 2026",
    date: "June 10–11, 2026",
    location: "Marina Bay Sands, Singapore",
    dark: true,
  },
  {
    badge: "SIDE EVENT · Q4 2026",
    name: "A36 Founder × Infra Capital Salon",
    subtitle: "Web3 infrastructure founders meet capital operators.",
    context: "Alongside TOKEN2049 Singapore 2026",
    date: "October 7–8, 2026",
    location: "Marina Bay Sands, Singapore",
    dark: false,
  },
];

const UpcomingEvents = () => (
  <section className="bg-warm-cream py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">UPCOMING</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        Global Rooms. 2026.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {events.map((ev) => (
          <div key={ev.name} className={`p-8 ${ev.dark ? "bg-primary text-white" : "bg-white border border-border text-primary"}`}>
            <span className={`font-bold text-[10px] uppercase tracking-[0.15em] ${ev.dark ? "text-accent" : "text-accent"}`}>
              {ev.badge}
            </span>
            <h3 className="font-black text-xl md:text-2xl mt-3">{ev.name}</h3>
            <p className={`text-sm mt-2 ${ev.dark ? "text-white/60" : "text-muted"}`}>{ev.subtitle}</p>
            <p className={`text-xs mt-1 ${ev.dark ? "text-white/40" : "text-muted"}`}>{ev.context}</p>
            <div className={`mt-4 space-y-1 text-sm ${ev.dark ? "text-white/70" : "text-primary/70"}`}>
              <p>📅 {ev.date}</p>
              <p>📍 {ev.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/events" className="btn-ghost inline-block">SEE ALL EVENTS →</Link>
      </div>
    </div>
  </section>
);

export default UpcomingEvents;
