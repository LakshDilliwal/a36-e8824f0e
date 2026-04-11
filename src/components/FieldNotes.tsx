const events = [
  "Indore, 2024",
  "Bangalore, 2024",
  "Indore, 2025",
  "Online, 2025",
];

const FieldNotes = () => (
  <section className="bg-warm-cream py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="section-label-charcoal mb-4">FIELD NOTES</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        120+ Events<br />Real Builders<br />Real Rooms
      </h2>
      <p className="text-base text-primary/60 mt-4 max-w-[560px]">
        From local stages to global rooms. A36 has been in the room before it had a name
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
        {events.map((e) => (
          <div
            key={e}
            className="relative bg-border rounded-sm overflow-hidden min-h-[280px]"
          >
            <div className="absolute bottom-0 left-0 bg-black/50 px-3 py-2">
              <span className="font-bold text-[11px] text-white">
                Event — {e}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="font-bold text-xs text-accent uppercase tracking-[0.15em] mb-4">
          NEXT EVENT — COMING SOON
        </p>
        <a
          href="https://lu.ma/a36labs"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          REGISTER ON LUMA
        </a>
      </div>
    </div>
  </section>
);

export default FieldNotes;
