import PageWrapper from "@/components/PageWrapper";

const About = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="bg-primary py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow mb-6">OUR STORY</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">
          Built From India.<br />Operating Everywhere.
        </h1>
      </div>
    </section>

    {/* Origin */}
    <section className="bg-background py-24">
      <div className="container max-w-3xl mx-auto px-6 md:px-16">
        <h2 className="font-black text-[28px] md:text-[36px] leading-[1.1] tracking-heading text-primary">Why A36Labs exists.</h2>
        <div className="mt-8 space-y-6 text-base text-primary/80 leading-relaxed">
          <p>A36Labs is a global builder ecosystem network founded in Indore, India. We curate serious builders across Web3, AI, and 36 emerging tech verticals — connecting them to protocols, capital, and real work that matters.</p>
          <p>We've hosted 120+ events across India, Singapore, Dubai, and beyond. We operate A36 Earn — a platform connecting builders to bounties, grants, and jobs from ecosystem protocols. We run A36 Residency — an invite-only builder sprint co-located with major global events.</p>
          <p>A36Labs is MSME registered in India. We are building toward becoming a full ecosystem operator and accelerator — with a physical presence, an investor network, and a cohort program launching in 2027.</p>
        </div>
      </div>
    </section>

    {/* Geography */}
    <section className="bg-warm-cream py-24">
      <div className="container max-w-3xl mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">WHERE WE OPERATE</p>
        <h2 className="font-black text-[28px] md:text-[36px] leading-[1.1] tracking-heading text-primary">Where We Operate</h2>
        <p className="mt-6 text-base text-primary/80 leading-relaxed">
          A36 is present across APAC, MENA, LATAM, North America, Europe, and Africa. Our builder network spans 6 continents and 36 tech verticals.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="bg-background py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">OUR VALUES</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { title: "High Trust", body: "We curate, not aggregate. Every builder in the A36 network is here because they've earned it." },
            { title: "Real Rooms", body: "We believe the most important conversations happen in person. We build the rooms where they happen." },
            { title: "Signal Over Noise", body: "Everything A36 produces — events, content, earn listings — is filtered for quality. No fluff." },
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
