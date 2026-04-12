import PageWrapper from "@/components/PageWrapper";

const About = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="bg-primary py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow mb-6">OUR STORY</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">
          Built in the field.<br />Not in a boardroom.
        </h1>
        <p className="text-base text-white/60 mt-6 max-w-[560px]">
          A36 was not born in a co-working space. It was built event by event, ecosystem by ecosystem, builder by builder — starting in Indore, India.
        </p>
      </div>
    </section>

    {/* Origin */}
    <section className="bg-background py-24">
      <div className="container max-w-3xl mx-auto px-6 md:px-16">
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">Why A36 exists.</h2>
        <div className="mt-8 space-y-6 text-base text-primary/80 leading-relaxed">
          <p>Most builder programs talk about community. A36 talks about output. We started hosting events when there was no ecosystem to speak of — and we built one, room by room, city by city.</p>
          <p>The name A36 is not a metaphor. It is a system. 36 infrastructure domains across four execution vectors. Every domain has a role. Every builder has a lane. Nothing is cosmetic.</p>
          <p>We are infrastructure-first. That means we are patient, precise, and deliberate. We do not chase trends. We identify the base layer, back the right people, and stay in the room until it ships.</p>
        </div>
      </div>
    </section>

    {/* Three Rules */}
    <section className="bg-warm-cream py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">THE THREE RULES</p>
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
          Three rules.<br />No exceptions.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { num: "01", title: "BUILD", body: "Ship real infrastructure. A36 rewards execution, never intention." },
            { num: "02", title: "CONNECT", body: "Leverage the network. Give before you take. Your network is your real net worth." },
            { num: "03", title: "LEAD", body: "Every builder who enters A36 leaves as a leader. That is the only acceptable output." },
          ].map((r) => (
            <div key={r.num} className="bg-white border border-border p-6">
              <span className="font-black text-xs text-accent">{r.num}</span>
              <h3 className="font-black text-xl text-primary mt-2">{r.title}</h3>
              <p className="text-sm text-muted mt-3">{r.body}</p>
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
            { num: "4", label: "Core Verticals" },
            { num: "3+", label: "Years in Ecosystem" },
            { num: "Global", label: "Network" },
          ].map((s) => (
            <div key={s.label}>
              <span className="font-black text-[40px] text-accent">{s.num}</span>
              <p className="text-sm text-white/60 uppercase tracking-wider mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="bg-accent py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
          Zero Noise. Early Alpha. Real Infrastructure.
        </h2>
        <p className="text-base text-primary/70 mt-6 max-w-[560px] mx-auto">
          A36 exists to find the builders who are serious, filter out the noise, and deploy resources where they create compounding infrastructure value.
        </p>
      </div>
    </section>
  </PageWrapper>
);

export default About;
