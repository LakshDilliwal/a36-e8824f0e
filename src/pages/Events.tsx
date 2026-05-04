import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";

const row1Images = [
  "/events/group1.webp",
  "/events/group2.webp",
  "/events/group3.webp",
  "/events/group4.webp",
  "/events/group5.webp",
  "/events/group6.webp",
  "/events/group7.webp",
  "/events/group8.webp",
  "/events/group9.webp",
  "/events/group10.webp",
];

const row2Images = [
  "/events/candid1.webp",
  "/events/candid2.webp",
  "/events/candid3.webp",
  "/events/candid4.webp",
  "/events/candid5.webp",
  "/events/candid6.webp",
  "/events/candid7.webp",
  "/events/candid8.webp",
  "/events/candid9.webp",
  "/events/candid10.webp",
];

const row1 = [...row1Images, ...row1Images];
const row2Doubled = [...row2Images, ...row2Images];

const Events = () => {
  return (
    <PageWrapper>
      {/* SECTION 1 - HERO */}
      <section className="bg-primary py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-6">A36 | EVENTS</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">
            120+ Summits.<br />6 Continents.<br />All Signal.
          </h1>
          <p className="text-base text-white/60 mt-6 max-w-[560px]">
            Side events, hacker houses, founder salons, and builder summits curated by A36 across every major tech conference globally.
          </p>
        </div>
      </section>

      {/* SECTION 2 - DUAL PHOTO SLIDERS */}
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

      {/* SECTION 3 - LUMA CALENDAR */}
      <section className="bg-background py-16">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">2026 CALENDAR</p>
          <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary mb-8">
            Upcoming Summits.
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

      {/* SECTION 5 - CO-HOST CTA */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Want to build a summit with us?
          </h2>
          <p className="text-base text-primary/60 mt-4 max-w-[560px] mx-auto">
            We co-host with protocols, communities, and funds globally. Singapore. Dubai. Bangalore. And everywhere the builders are.
          </p>
          <div className="mt-10">
            <Link to="/apply" className="btn-primary inline-block">
              PARTNER WITH A36 →
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Events;
