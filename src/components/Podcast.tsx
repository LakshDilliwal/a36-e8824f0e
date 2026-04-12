import { Link } from "react-router-dom";
import { Mic } from "lucide-react";

const Podcast = () => (
  <section className="bg-background py-24">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-4">PODCAST</p>
      <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        Straight from operators.
      </h2>
      <p className="text-base text-primary/65 mt-4 max-w-[520px]">
        No hype. No noise. Real conversations with founders, ecosystem leads, and capital operators in Web3 and AI.
      </p>

      <div className="mt-12 border border-border bg-white p-8 flex flex-col md:flex-row gap-6">
        <div className="w-16 h-16 bg-accent flex items-center justify-center flex-shrink-0">
          <Mic size={28} className="text-primary" />
        </div>
        <div className="flex-1">
          <p className="eyebrow mb-2">EPISODE 01</p>
          <h3 className="font-black text-[22px] text-primary">Booting Up. The A36 Signal.</h3>
          <p className="text-sm text-muted mt-2">The beginning. Why A36 exists and what it's building.</p>
          <span className="inline-block mt-4 bg-primary text-accent font-bold text-[11px] px-2.5 py-1">COMING SOON</span>
        </div>
        <div className="flex items-center">
          <div className="w-12 h-12 border-2 border-border flex items-center justify-center opacity-40">
            <span className="text-lg">▶</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link to="/podcast" className="text-accent font-bold text-sm uppercase hover:underline tracking-wider">
          SEE ALL EPISODES →
        </Link>
      </div>
    </div>
  </section>
);

export default Podcast;
