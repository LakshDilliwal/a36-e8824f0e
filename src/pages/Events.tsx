import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";

const placeholderImages = [
  "/events/ev1.jpg",
  "/events/ev2.jpg",
  "/events/ev3.jpg",
  "/events/ev4.jpg",
  "/events/ev5.jpg",
  "/events/ev6.jpg",
];

const row1 = [...placeholderImages, ...placeholderImages];
const row2 = [...placeholderImages].reverse();
const row2Doubled = [...row2, ...row2];

const Events = () => {
  return (
    <PageWrapper>
      {/* SECTION 1 — HERO */}
      <section className="bg-primary py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-6">A36 | EVENTS</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">
            120+ Events.<br />Real Rooms.<br />No Fluff.
          </h1>
          <p className="text-base text-white/60 mt-6 max-w-[560px]">
            We don't sponsor banners. We build the room.
          </p>
        </div>
      </section>

      {/* SECTION 2 — DUAL PHOTO SLIDERS */}
      <section className="bg-background py-16 overflow-hidden space-y-6">
        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-slide-left">
            {row1.map((src, i) => (
              <div key={`r1-${i}`} className="w-[320px] h-[200px] flex-shrink-0 bg-warm-cream overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 w-max animate-slide-right">
            {row2Doubled.map((src, i) => (
              <div key={`r2-${i}`} className="w-[320px] h-[200px] flex-shrink-0 bg-warm-cream overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — LUMA CALENDAR */}
      <section className="bg-background py-16">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">2026 CALENDAR</p>
          <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary mb-8">
            What's Coming Up.
          </h2>
          <div className="w-full overflow-hidden">
            <iframe
              src="https://luma.com/embed/calendar/cal-PuV3v4w2KzbiPI7/events?lt=light"
              width="100%"
              height="650"
              frameBorder="0"
              style={{ border: "1px solid #bfcbda88", borderRadius: "4px" }}
              allowFullScreen
              aria-hidden={false}
              tabIndex={0}
            />
          </div>
          <div className="mt-6">
            <a
              href="https://lu.ma/a36"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Subscribe on Luma →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 4 — EVENT OF THE YEAR: THE RESIDENCY */}
      <section className="bg-primary py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow mb-4">EVENT OF THE YEAR</p>
          <div className="max-w-[720px]">
            <h2 className="font-black text-[36px] md:text-[56px] leading-[1.05] tracking-heading text-white">
              The A36 Residency.
            </h2>
            <p className="text-white/60 text-base mt-6 leading-relaxed">
              Five days. Twenty builders. Zero distractions.<br />
              An immersive sprint where the most serious Web3 builders ship, connect, and accelerate — co-located with ETH DevCon Mumbai 2026.
            </p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>→ October 29 – November 2, 2026 · Mumbai, India</li>
              <li>→ Invite-selected · 20 seats · Free for accepted builders</li>
              <li>→ Direct access to A36 network, capital, and ecosystem</li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/residency" className="btn-primary inline-block">
                Apply for Residency →
              </Link>
              <Link
                to="/pitch"
                className="inline-block border border-white/30 text-white font-bold text-sm uppercase tracking-wider px-6 py-3 hover:border-white/60 transition-colors"
              >
                Partner With Us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CO-HOST CTA */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Want to co-host an A36 room?
          </h2>
          <p className="text-base text-primary/60 mt-4 max-w-[560px] mx-auto">
            We partner with communities, protocols, and funds to run high-signal events globally. From Singapore to Dubai to Bangalore.
          </p>
          <div className="mt-10">
            <Link to="/pitch" className="btn-primary inline-block">
              PARTNER WITH US →
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Events;
