import { Link } from "react-router-dom";
import { Mic, Play } from "lucide-react";

const GUEST_FORM = "https://forms.gle/CbWcnNHxwXqMyQ159";

const Podcast = () => (
  <section className="bg-background py-12 md:py-16">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
      <p className="eyebrow-dark mb-3 md:mb-4">BASE LAYER BY A36 LABS</p>
      <h2 className="font-black text-[28px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
        Conversations With Builders In The Arena
      </h2>
      <p className="text-sm md:text-base text-primary/65 mt-3 md:mt-4 max-w-[640px]">
        Base Layer is A36's long-form podcast featuring founders, operators, developers, protocol teams, investors, and ecosystem leaders building across Web3, AI, and emerging tech.
      </p>

      {/* Featured episode card */}
      <div className="mt-8 md:mt-12 border border-border bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 a36-card-lift hover:border-accent group">
        <div className="w-full md:w-48 h-40 md:h-48 bg-primary flex items-center justify-center flex-shrink-0 overflow-hidden">
          <Mic size={56} className="text-accent transition-transform duration-500 ease-out group-hover:scale-110" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="eyebrow-dark mb-2">SEASON 1</p>
          <h3 className="font-black text-[22px] md:text-[26px] text-primary leading-tight">Season 1 Coming Soon</h3>
          <p className="text-sm md:text-[15px] text-primary/70 mt-3 leading-relaxed">
            Guest outreach is open. We are speaking with builders, operators, and ecosystem leaders shaping the next layer of technology.
          </p>
          <div className="flex items-center gap-3 md:gap-4 mt-5 md:mt-6 flex-wrap">
            <a href={GUEST_FORM} target="_blank" rel="noopener noreferrer" className="group btn-primary !py-2 !px-4 text-xs inline-flex items-center gap-1">
              APPLY AS GUEST <span className="a36-arrow">→</span>
            </a>
            <Link to="/newsletter" className="group btn-ghost !py-2 !px-4 text-xs inline-flex items-center gap-1">
              GET NOTIFIED <span className="a36-arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <div className="w-14 h-14 bg-accent flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_0_30px_-4px_hsl(var(--accent)/0.6)]">
            <Play size={22} className="text-primary" fill="currentColor" />
          </div>
        </div>
      </div>


      <div className="mt-6 md:mt-8">
        <Link to="/podcast" className="group text-accent font-bold text-sm uppercase hover:underline tracking-wider inline-flex items-center gap-1">
          MORE EPISODES <span className="a36-arrow">→</span>
        </Link>
      </div>
    </div>
  </section>
);

export default Podcast;
