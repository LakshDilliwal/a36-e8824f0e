import PageWrapper from "@/components/PageWrapper";

const About = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="bg-primary py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow mb-6">OUR STORY</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">
          A Network Built<br />For Operators.
        </h1>
      </div>
    </section>

    {/* Origin */}
    <section className="bg-background py-24">
      <div className="container max-w-3xl mx-auto px-6 md:px-16">
        <h2 className="font-black text-[28px] md:text-[36px] leading-[1.1] tracking-heading text-primary">Why A36Labs exists.</h2>
        <div className="mt-8 space-y-6 text-base text-primary/80 leading-relaxed">
          <p>A36 Labs is a global builder network operating across 36+ tech verticals. We curate serious builders, founders, and investors, run high-signal summits, and connect talent to protocols, capital, and real work that moves the world forward.</p>
          <p>We have hosted 120+ events globally. We publish A36 Signal, a weekly dispatch for operators and founders who need alpha, not scroll.</p>
          <p>A36 Labs is building toward a full ecosystem operator model with a physical presence, a global investor network, and a cohort program launching in 2027.</p>
        </div>
      </div>
    </section>

    {/* Geography */}
    <section className="bg-warm-cream py-24">
      <div className="container max-w-3xl mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">WHERE WE OPERATE</p>
        <p className="mt-6 text-base text-primary/80 leading-relaxed">
          A36 operates across APAC, MENA, LATAM, North America, Europe, and Africa. Our builder network spans 6 continents and 36+ tech verticals.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="bg-background py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">OUR VALUES</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "High Trust", body: "We curate, not aggregate. Every builder in the A36 network has earned their seat." },
            { title: "Real Summits", body: "The most important conversations happen in person. We build the summits where they happen." },
            { title: "Signal Over Noise", body: "Everything A36 produces is filtered for quality. No filler. No vanity. Just the work." },
          ].map((v) => (
            <div key={v.title} className="bg-white border border-border p-6">
              <h3 className="font-black text-xl text-primary">{v.title}</h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* By the Numbers */}
    <section className="bg-primary py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "120+", label: "Events Hosted" },
            { num: "10K+", label: "Builders" },
            { num: "36", label: "Verticals" },
            { num: "6", label: "Continents" },
          ].map((s) => (
            <div key={s.label}>
              <span className="font-black text-[40px] text-accent">{s.num}</span>
              <p className="text-sm text-white/60 uppercase tracking-wider mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default About;
