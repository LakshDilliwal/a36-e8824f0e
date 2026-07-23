import PageWrapper from "@/components/PageWrapper";

const Cohort = () => {
  const scrollToSubscribe = () => {
    document.getElementById("cohort-subscribe")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24 md:py-32 border-b border-border">
        <div className="container max-w-[900px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">A36 COHORT</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary max-w-[820px]">
            A focused cohort for serious builders.
          </h1>
          <p className="text-base md:text-lg text-primary/70 mt-6 max-w-[720px] leading-relaxed">
            A36 Cohort is an upcoming structured program for builders, operators, founders, students, and emerging talent working across AI, Web3, startups, and frontier technology.
          </p>
          <p className="text-base text-primary/60 mt-4 max-w-[720px] leading-relaxed">
            Program details, format, dates, and applications will be announced by A36 Labs.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 border border-accent px-3 py-1.5">
            <span className="w-1.5 h-1.5 bg-accent" aria-hidden="true" />
            <span className="text-xs font-bold tracking-[0.15em] text-primary">COMING SOON</span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button onClick={scrollToSubscribe} className="btn-primary inline-block">
              GET COHORT UPDATES →
            </button>
            <a href="/" className="btn-ghost inline-block">
              EXPLORE A36 LABS →
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="cohort-subscribe" className="bg-primary py-24 md:py-32 relative">
        <div className="a36-hairline-gold-top" />
        <div className="container max-w-[900px] mx-auto px-6 md:px-16">
          <p className="eyebrow mb-4">A36 SIGNAL</p>
          <h2 className="font-black text-[32px] md:text-[48px] leading-[1.05] tracking-heading text-white max-w-[720px]">
            Be first to know when applications open.
          </h2>
          <p className="text-base text-white/70 mt-6 max-w-[640px] leading-relaxed">
            Subscribe to A36 Signal for Cohort announcements, applications, builder opportunities, events, and ecosystem updates.
          </p>

          <div className="mt-10 w-full max-w-[520px] bg-white/5 border border-white/10 p-4">
            <iframe
              src="https://a36signal.substack.com/embed?transparent=1&light=1"
              style={{ border: 0, background: "transparent", width: "100%", maxWidth: "480px", height: "320px", display: "block" }}
              frameBorder={0}
              scrolling="no"
              title="Subscribe to A36 Signal"
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Cohort;
