import PageWrapper from "@/components/PageWrapper";

const features = [
  { title: "Protocol Updates", body: "What's moving across tech, builder, and startup ecosystems this week" },
  { title: "Opportunity Alerts", body: "Curated opportunities — bounties, grants, and jobs from the A36 network" },
  { title: "Event Previews", body: "Upcoming A36 rooms and partner events globally" },
];

const NewsletterPage = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="bg-background py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-6">NEWSLETTER</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          A36 Signal
        </h1>
        <p className="text-2xl md:text-3xl text-primary/80 mt-3 font-bold">Weekly signal from the frontier</p>
        <p className="text-base text-primary/70 mt-6 max-w-[640px]">
          No recap. No noise. One email per week<br />curated by A36 for builders, founders, and ecosystem operators who need alpha signal, not scroll
        </p>
        <p className="text-sm text-muted mt-3 italic">Published every Wednesday</p>
      </div>
    </section>

    {/* What's inside */}
    <section className="bg-warm-cream py-20">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">WHAT'S INSIDE</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-border p-6">
              <h3 className="font-black text-lg text-primary">{f.title}</h3>
              <p className="text-sm text-muted mt-3">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Subscribe */}
    <section className="bg-primary py-24">
      <div className="container max-w-2xl mx-auto px-6 md:px-16 text-center">
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
          Join A36 Signal
        </h2>
        <p className="text-base text-white/60 mt-4">Free. Weekly. Stay ahead of what's building</p>

        <div className="flex justify-center mt-10">
          <iframe
            src="https://a36signal.substack.com/embed"
            width="480"
            height="150"
            style={{ border: "none", background: "transparent", maxWidth: "100%" }}
            frameBorder="0"
            scrolling="no"
          />
        </div>
        <p className="text-sm text-white/60 mt-6">
          Read past issues at{" "}
          <a
            href="https://a36signal.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            a36signal.substack.com
          </a>
        </p>
      </div>
    </section>
  </PageWrapper>
);

export default NewsletterPage;
