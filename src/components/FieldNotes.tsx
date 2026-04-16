import { Link } from "react-router-dom";

const events = [
  { label: "Event · Indore, India" },
  { label: "Builder Room · Bangalore, India" },
  { label: "Side Event · Dubai, UAE" },
  { label: "A36 Infra Room · Singapore, 2026" },
];

const FieldNotes = () => (
  <section className="bg-warm-cream py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">FIELD NOTES</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        120+ Events<br />Real Builders<br />Real Rooms
      </h2>
      <p className="text-base text-primary/60 mt-4 max-w-[560px]">
        From MENA to APAC to LATAM to LATAM to NA<br />A36 has been in the room before it had a name.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
        {events.map((e) => (
          <div key={e.label} className="relative bg-[#C8BFB0] min-h-[220px]">
            <div className="absolute bottom-0 left-0 bg-black/50 px-3 py-2">
              <span className="font-bold text-[11px] text-white">{e.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/events" className="btn-ghost inline-block">VIEW ALL EVENTS →</Link>
      </div>
    </div>
  </section>
);

export default FieldNotes;
