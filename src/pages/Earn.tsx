import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";

const upcoming = [
  { title: "Bounties", body: "Short-term work from protocols, startups, and ecosystem teams." },
  { title: "Grants", body: "Curated grant opportunities for builders and researchers." },
  { title: "Jobs", body: "Roles and gigs from companies building across emerging tech." },
  { title: "Hackathons", body: "Challenges, prizes, and build programs worth your time." },
];

const Earn = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="bg-background py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-6">A36 EARN</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          Build. Get Paid.
        </h1>
        <p className="text-base text-primary/70 mt-6 max-w-[600px]">
          Real work from real ecosystems. Bounties, grants, jobs, hackathons, and opportunities curated by A36 Labs.
        </p>

        <div className="mt-10 max-w-[480px]">
          <p className="text-sm text-primary/60 mb-3">Platform launching soon. Get notified:</p>
          <iframe
            src="https://a36signal.substack.com/embed"
            width="480"
            height="150"
            style={{ border: "none", background: "transparent", maxWidth: "100%" }}
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </section>

    {/* What's coming */}
    <section className="bg-warm-cream py-20">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">WHAT'S COMING</p>
        <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary mb-10">
          Curated opportunities for builders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcoming.map((c) => (
            <div key={c.title} className="bg-white border border-border p-8">
              <h3 className="font-black text-xl text-primary leading-tight">{c.title}</h3>
              <p className="text-sm text-muted mt-3 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Dark CTA band */}
    <section className="bg-primary py-20">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-white">
          Zero commission for builders.
        </h2>
        <p className="text-base text-white/70 mt-4 max-w-[600px]">
          A36 Earn is built to help builders discover quality opportunities without spam, fake listings, or pay-to-play access.
        </p>
        <div className="mt-8">
          <Link to="/newsletter" className="btn-ghost-light inline-block">GET NOTIFIED →</Link>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Earn;
