const events = [
  "Mumbai, 2024",
  "Bangalore, 2024",
  "Indore, 2025",
  "Online, 2025",
];

const FieldNotes = () => (
  <section className="bg-warm-cream py-20">
    <div className="container max-w-5xl mx-auto px-6 md:px-16">
      <p className="section-label-charcoal mb-4">FIELD NOTES</p>
      <h2 className="font-black text-[36px] md:text-[48px] leading-[1.05] tracking-heading text-primary">
        120+ Events.<br />Real Builders.<br />Real Rooms.
      </h2>
      <p className="text-base text-primary/60 mt-4 max-w-lg">
        From Indore to global stages — A36 has been in the room before it had a name.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
        {events.map((e) => (
          <div
            key={e}
            className="relative bg-border rounded-sm overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-primary/60 px-4 py-2">
              <span className="font-bold text-[11px] text-white">
                Event — {e}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="font-bold text-[13px] text-accent uppercase tracking-wider mb-4">
          NEXT SPRINT — COMING SOON
        </p>
        <a
          href="https://lu.ma/a36labs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          REGISTER ON LUMA ↗
        </a>
      </div>
    </div>
  </section>
);

export default FieldNotes;
