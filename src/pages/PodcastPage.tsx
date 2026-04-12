import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Mic } from "lucide-react";

const upcomingEps = [
  { num: "EP02", title: "The Infrastructure Gap — Why most Web3 projects never find product-market fit", dur: "~40 min" },
  { num: "EP03", title: "AI × Blockchain: Beyond the hype — Real infra use cases in 2026", dur: "~45 min" },
  { num: "EP04", title: "How to raise from ecosystem funds vs. traditional VCs", dur: "~35 min" },
];

const PodcastPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">A36 PODCAST</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Straight from<br />operators.
          </h1>
          <p className="text-base text-primary/65 mt-6 max-w-[560px]">
            No hype. No panels for the sake of panels. Real conversations with founders, ecosystem leads, and capital operators building the infrastructure layer of the internet.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="btn-ghost opacity-50 cursor-not-allowed">SPOTIFY — COMING SOON</button>
            <button className="btn-ghost opacity-50 cursor-not-allowed">APPLE PODCASTS — COMING SOON</button>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="bg-primary py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 bg-accent flex items-center justify-center flex-shrink-0">
              <span className="font-black text-primary text-2xl">EP01</span>
            </div>
            <div className="flex-1">
              <p className="eyebrow mb-2">EPISODE 01</p>
              <h3 className="font-black text-2xl text-white">Booting Up. The A36 Signal.</h3>
              <p className="text-base text-white/60 mt-2">The beginning. Why A36 exists, what it's building, and who it's for.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Founders", "Infrastructure", "Web3", "AI"].map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase text-accent tracking-wider">{t}</span>
                ))}
              </div>
              <p className="text-sm text-white/40 mt-2">~45 min</p>
              <span className="inline-block mt-4 bg-accent text-primary font-bold text-[11px] px-2.5 py-1">RECORDING IN PROGRESS</span>
            </div>
            <div className="w-16 h-16 border-2 border-white/20 flex items-center justify-center opacity-40">
              <span className="text-white text-2xl">▶</span>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">ALL EPISODES</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Season 01 — Booting Up
          </h2>
          <p className="text-base text-muted mt-4">New episodes dropping soon. Subscribe to A36 Signal to get notified.</p>

          <div className="space-y-4 mt-12">
            {upcomingEps.map((ep) => (
              <div key={ep.num} className="bg-white border border-border p-6 flex flex-col md:flex-row md:items-center gap-4">
                <span className="font-black text-accent text-lg w-16">{ep.num}</span>
                <p className="font-bold text-primary flex-1">{ep.title}</p>
                <span className="text-xs text-muted">{ep.dur}</span>
                <span className="bg-primary text-accent font-bold text-[10px] px-2 py-1 uppercase">UPCOMING</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-accent py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Get notified when we go live.
          </h2>
          <div className="mt-8 max-w-[480px] mx-auto">
            {subscribed ? (
              <p className="font-bold text-primary text-lg">Subscribe to A36 Signal — our newsletter includes new episode drops.</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }}>
                <div className="flex">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required className="flex-grow bg-white border border-border text-primary px-4 py-3.5 focus:outline-none" />
                  <button type="submit" className="btn-dark px-6 py-3.5">SUBSCRIBE →</button>
                </div>
              </form>
            )}
            <p className="text-sm text-primary/60 mt-3">Subscribe to A36 Signal — our newsletter includes new episode drops.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PodcastPage;
