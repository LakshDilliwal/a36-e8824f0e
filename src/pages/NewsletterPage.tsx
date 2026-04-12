import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";

const features = [
  { title: "FOUNDER INTERVIEWS", body: "In-depth conversations with founders shipping real infrastructure." },
  { title: "OPERATOR PLAYBOOKS", body: "Step-by-step breakdowns of how top ecosystem builders operate." },
  { title: "ECOSYSTEM SIGNALS", body: "Early signals from Web3, AI, and infra ecosystems before they go mainstream." },
  { title: "EVENT RECAPS", body: "Field notes from A36 rooms globally — what was said, what matters." },
];

const issues = [
  { num: "#001", title: "The Infrastructure Gap", date: "Published April 2026", live: true },
  { num: "#002", title: "AI × On-chain: What's actually real", date: "Coming Soon", live: false },
  { num: "#003", title: "How to raise ecosystem grants in 2026", date: "Coming Soon", live: false },
];

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <PageWrapper>
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">A36 SIGNAL</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Ecosystem intelligence.<br />Zero noise.
          </h1>
          <p className="text-base text-primary/65 mt-6 max-w-[560px]">
            Weekly dispatches for infrastructure builders. Founder interviews. Operator playbooks. On-chain signals. The early alpha you won't find anywhere else.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-border p-6">
                <h3 className="font-black text-sm text-accent uppercase tracking-wider">{f.title}</h3>
                <p className="text-sm text-muted mt-3">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-primary py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">Join A36 Signal.</h2>
          <p className="text-base text-white/60 mt-4">Free. Weekly. For serious builders only.</p>
          <div className="mt-8 max-w-[480px]">
            {subscribed ? (
              <p className="text-accent font-bold text-lg">Welcome to A36 Signal. Check your inbox.</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}>
                <div className="flex">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required className="flex-grow bg-dark-card border border-[#374151] text-white placeholder:text-white/40 px-4 py-3.5 focus:outline-none" />
                  <button type="submit" className="btn-gold px-6 py-3.5">SUBSCRIBE NOW →</button>
                </div>
                <p className="text-xs text-white/40 mt-3">Hosted on Beehiiv. No spam. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Past Issues */}
      <section className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">RECENT ISSUES</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">From the archive.</h2>
          <div className="space-y-4 mt-12">
            {issues.map((iss) => (
              <div key={iss.num} className="bg-white border border-border p-6 flex flex-col md:flex-row md:items-center gap-4">
                <span className="font-black text-accent text-lg w-16">Issue {iss.num}</span>
                <p className="font-bold text-primary flex-1">{iss.title}</p>
                <span className="text-xs text-muted">{iss.date}</span>
                <button className={`font-bold text-sm uppercase tracking-wider ${iss.live ? "text-accent hover:underline" : "text-muted cursor-not-allowed"}`}>
                  {iss.live ? "READ →" : "COMING SOON"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default NewsletterPage;
