const ApplyCTA = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="apply" className="bg-accent py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
        <p className="font-bold text-[11px] text-primary uppercase tracking-[0.2em] mb-4">
          JOIN THE DOJO
        </p>
        <h2 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          Apply<br />Get Filtered<br />Get Access
        </h2>
        <p className="text-lg text-primary/70 mt-5">
          A36 reviews every application personally. No shortcuts. No exceptions
        </p>
        <div className="mt-10">
          <a href="/apply" className="btn-primary inline-block">
            APPLY NOW
          </a>
        </div>
        <p className="text-[13px] text-primary/50 mt-6">
          Not for everyone but for the right ones
        </p>
      </div>
    </section>
  );
};

export default ApplyCTA;
