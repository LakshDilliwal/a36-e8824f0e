import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";

const steps = [
  { num: "01", title: "EXPLORE", body: "Browse open bounties and grants from verified ecosystems" },
  { num: "02", title: "APPLY", body: "Submit your work or proposal to A36-verified partners" },
  { num: "03", title: "GET PAID", body: "Direct payouts. No middlemen. No delays." },
];

const Earn = () => (
  <PageWrapper>
    <section className="bg-background py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow mb-6">A36 EARN</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          Build.<br />Get Paid.
        </h1>
        <p className="text-base text-primary/70 mt-6 max-w-[560px]">
          Real work from real ecosystems. Bounties, grants, and builder opportunities — curated by A36. Platform launching soon.
        </p>

        <div className="mt-10 max-w-[480px]">
          <p className="text-sm text-primary/60 mb-3">Stay updated — get notified when we launch:</p>
          <iframe
            src="https://a36signal.substack.com/embed"
            width="480"
            height="150"
            style={{ border: "none", background: "transparent", maxWidth: "100%" }}
            frameBorder="0"
            scrolling="no"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {steps.map((s) => (
            <div key={s.num} className="bg-white border border-border p-6">
              <span className="font-black text-xs text-accent">{s.num}</span>
              <h3 className="font-black text-lg text-primary mt-2">{s.title}</h3>
              <p className="text-sm text-muted mt-3">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-primary py-16">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
        <p className="text-white text-base">
          A36 Earn is coming soon.
        </p>
      </div>
    </section>
  </PageWrapper>
);

export default Earn;
