import PageWrapper from "@/components/PageWrapper";

const Community = () => (
  <PageWrapper>
    <section className="bg-background py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-6">A36 COMMUNITY</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          The Private<br />Network.
        </h1>
        <p className="text-base text-primary/70 mt-6 max-w-[560px]">
          Builders, operators, and founders who have earned their seat. Connected across continents and 36 tech verticals.
        </p>

        <div className="mt-10 max-w-[480px]">
          <p className="text-sm text-primary/60 mb-3">Community launching soon. Get notified:</p>
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
          A36 Community launches 2026. By invitation and application only.
        </p>
      </div>
    </section>
  </PageWrapper>
);

export default Community;
