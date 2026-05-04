import PageWrapper from "@/components/PageWrapper";

const Earn = () => (
  <PageWrapper>
    <section className="bg-background py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow mb-6">A36 EARN</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          Build<br />Get Paid
        </h1>
        <p className="text-base text-primary/70 mt-6 max-w-[560px]">
          Real work from real ecosystems. Bounties, grants, and opportunities curated by A36.
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

    <section className="bg-primary py-16">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
        <p className="text-white text-base">
          A36 Earn launches mid-2026. Zero commission for builders. Multi-chain payouts.
        </p>
      </div>
    </section>
  </PageWrapper>
);

export default Earn;
