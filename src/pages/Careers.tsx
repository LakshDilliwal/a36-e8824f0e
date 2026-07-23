import PageWrapper from "@/components/PageWrapper";

const LINKEDIN_JOBS = "https://www.linkedin.com/company/a36labs/jobs/?viewAsMember=true";

const contributeCards = [
  {
    title: "Ecosystem & Community",
    copy: "Support builder communities, campus programs, regional chapters, and ecosystem initiatives.",
  },
  {
    title: "Partnerships & Growth",
    copy: "Develop relationships with protocols, startups, communities, universities, media teams, and ecosystem partners.",
  },
  {
    title: "Events & Programs",
    copy: "Help execute workshops, founder sessions, residencies, meetups, side events, and builder programs.",
  },
  {
    title: "Product, Content & Media",
    copy: "Contribute across A36 Earn, A36 Signal, Base Layer, design, development, research, and digital content.",
  },
];

const values = [
  { title: "Ownership", copy: "Take responsibility for outcomes, not only assigned tasks." },
  { title: "Curiosity", copy: "Explore emerging technology, new markets, and better ways to build." },
  { title: "Practical Execution", copy: "Turn ideas into useful programs, products, partnerships, and experiences." },
  { title: "Global Collaboration", copy: "Work across regions, disciplines, communities, and time zones." },
];

const Careers = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="bg-background py-24 md:py-32 border-b border-border">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">CAREERS</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary max-w-[900px]">
          Build the ecosystem with us.
        </h1>
        <p className="text-base md:text-lg text-primary/70 mt-6 max-w-[760px] leading-relaxed">
          Join A36 Labs as we build a global frontier technology ecosystem connecting builders, founders, startups, students, operators, and communities through products, events, partnerships, media, and real-world programs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a href={LINKEDIN_JOBS} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            VIEW OPEN ROLES →
          </a>
          <a href="mailto:careers@a36labs.com" className="btn-ghost inline-block">
            CONTACT CAREERS →
          </a>
        </div>
      </div>
    </section>

    {/* Where you can contribute */}
    <section className="bg-warm-cream py-24 md:py-32 border-b border-border">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">WHERE YOU CAN CONTRIBUTE</p>
        <h2 className="font-black text-[32px] md:text-[48px] leading-[1.05] tracking-heading text-primary max-w-[720px]">
          Contribute across the ecosystem.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {contributeCards.map((c) => (
            <div key={c.title} className="a36-card-lift bg-background border border-border p-8">
              <h3 className="font-black text-xl text-primary tracking-heading">{c.title}</h3>
              <p className="text-primary/70 mt-3 leading-relaxed">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How we work */}
    <section className="bg-background py-24 md:py-32 border-b border-border">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">HOW WE WORK</p>
        <h2 className="font-black text-[32px] md:text-[48px] leading-[1.05] tracking-heading text-primary max-w-[720px]">
          Principles that guide the work.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {values.map((v) => (
            <div key={v.title} className="border-l-2 border-accent pl-6 py-2">
              <h3 className="font-black text-lg text-primary tracking-heading">{v.title}</h3>
              <p className="text-primary/70 mt-2 leading-relaxed">{v.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-primary py-24 md:py-32 relative">
      <div className="a36-hairline-gold-top" />
      <div className="container max-w-[900px] mx-auto px-6 md:px-16">
        <h2 className="font-black text-[32px] md:text-[48px] leading-[1.05] tracking-heading text-white max-w-[720px]">
          See where you can contribute.
        </h2>
        <p className="text-base text-white/70 mt-6 max-w-[640px] leading-relaxed">
          Current A36 Labs openings and opportunities are published on our LinkedIn jobs page.
        </p>
        <div className="mt-10">
          <a href={LINKEDIN_JOBS} target="_blank" rel="noopener noreferrer" className="btn-gold inline-block">
            EXPLORE OPEN ROLES →
          </a>
        </div>
        <p className="text-sm text-white/60 mt-12">
          Questions?{" "}
          <a href="mailto:careers@a36labs.com" className="font-bold text-white underline">
            careers@a36labs.com
          </a>
        </p>
      </div>
    </section>
  </PageWrapper>
);

export default Careers;
