import PageWrapper from "@/components/PageWrapper";

const products = [
  { code: "DROP 001 — TBA", title: "Hoodies & Tees", sub: "Premium cotton. Builder-grade." },
  { code: "EVENT SWAG — TBA", title: "Caps & Accessories", sub: "Structured fits. Conference-ready." },
  { code: "BUILDER GEAR — TBA", title: "Event Swag Kits", sub: "Bulk kits for your next event." },
];

const Merch = () => (
  <PageWrapper>
    <section className="bg-background py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-6">MERCHANDISE</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          Gear for<br />real builders.
        </h1>
        <p className="text-base text-primary/65 mt-6 max-w-[560px]">
          A36 × BitSwags. Premium event merchandise, branded swag, and builder gear for hackathons, meetups, conferences, residencies, and ecosystem events.
        </p>
      </div>
    </section>

    {/* BitSwags Card */}
    <section className="bg-primary py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="p-8 md:p-12">
          <h3 className="font-black text-3xl text-white">BitSwags</h3>
          <p className="text-sm text-white/40 mt-1">Merch & Swags for Web3 Events</p>
          <p className="text-base text-white/60 mt-6 max-w-[600px]">
            BitSwags is the merchandise partner for A36 events and ecosystem activations. We produce premium-quality event swag, branded merchandise, and builder gear for conferences, hackathons, and ecosystem events globally.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/60">
            <li>• Event merchandise for protocols and conferences</li>
            <li>• Custom branded hoodies, t-shirts, caps</li>
            <li>• Swag kits for hackathons and side events</li>
            <li>• Bulk orders for ecosystem partners</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="https://bitswags.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">SHOP BITSWAGS →</a>
            <a href="mailto:hello@a36labs.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-light inline-block">ORDER FOR YOUR EVENT →</a>
          </div>
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="bg-background py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">PRODUCT LINES — COMING SOON</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="border border-border p-8 min-h-[180px] flex flex-col justify-between transition-all duration-150 hover:border-accent hover:-translate-y-px"
            >
              <span className="eyebrow-dark text-accent">COMING SOON</span>
              <div>
                <h3 className="font-black text-lg text-primary">{p.title}</h3>
                <p className="text-sm text-primary/60 mt-1">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Merch;
