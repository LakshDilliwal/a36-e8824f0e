const Newsletter = () => (
  <section id="newsletter" className="bg-primary py-16">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow mb-4">A36 SIGNAL</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
        Weekly Signal For Serious Builders
      </h2>
      <p className="text-base text-white/60 mt-4 max-w-[640px]">
        Curated opportunities, grants, bounties, events, protocol updates, startup moves, and alpha drops from across Web3, AI, and emerging tech
      </p>

      <div className="mt-10 max-w-[480px]">
        <p className="text-xs text-white/40 mb-3">First drop lands soon. Subscribe before launch</p>
        <iframe
          src="https://a36signal.substack.com/embed"
          title="Subscribe to A36 Signal on Substack"
          width="480"
          height="320"
          style={{ border: "1px solid #EEE", background: "transparent" }}
          frameBorder="0"
          scrolling="no"
          className="block h-[320px] w-full max-w-[480px]"
        />
        <a
          href="https://a36signal.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs font-bold uppercase text-white/50 hover:text-white"
        >
          Read on Substack →
        </a>
      </div>
    </div>
  </section>
);

export default Newsletter;
