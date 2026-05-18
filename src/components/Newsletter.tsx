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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open("https://a36signal.substack.com/", "_blank", "noopener,noreferrer");
          }}
        >
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-grow bg-dark-card border border-[#374151] text-white placeholder:text-white/40 text-[15px] px-4 py-3.5 focus:outline-none focus:border-white/30"
            />
            <button type="submit" className="btn-gold px-6 py-3.5 whitespace-nowrap">Subscribe →</button>
          </div>
        </form>
        <p className="text-xs text-white/40 mt-3">First drop lands soon. Subscribe before launch</p>
        <p className="text-xs text-white/30 mt-1">Powered by Substack</p>
      </div>
    </div>
  </section>
);

export default Newsletter;
