import PageWrapper from "@/components/PageWrapper";

const products = [
  { title: "Hoodies & Tees", sub: "Premium cotton. Builder-grade." },
  { title: "Caps & Accessories", sub: "Structured fits. Conference-ready." },
  { title: "Event Swag Kits", sub: "Bulk kits for your next event." },
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
          A36 x BitSwags. Premium event merchandise, branded swags, and builder gear. Worn at 120+ events across India, Dubai, and Singapore.
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
            BitSwags is the official merchandise brand of A36. We produce premium-quality event swags, branded merchandise, and builder gear for conferences, hackathons, and ecosystem events globally.
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title} className="bg-[#C8BFB0] p-8 min-h-[200px] flex flex-col justify-end">
              <h3 className="font-black text-lg text-primary">{p.title}</h3>
              <p className="text-sm text-primary/60 mt-1">{p.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Merch;
