import PageWrapper from "@/components/PageWrapper";
import communityImg1 from "@/assets/a36-labs-community-image-1.jpg";
import communityImg2 from "@/assets/a36-labs-community-image-2.jpg";
import communityImg3 from "@/assets/a36-labs-community-image-3.jpg";
import communityImg4 from "@/assets/a36-labs-community-image-4.jpg";
import communityImg5 from "@/assets/a36-labs-community-image-5.jpg";
import communityImg6 from "@/assets/a36-labs-community-image-6.jpg";
import communityImg7 from "@/assets/a36-labs-community-image-7.jpg";
import communityImg8 from "@/assets/a36-labs-community-image-8.jpg";
import communityImg9 from "@/assets/a36-labs-community-image-9.jpg";
import communityImg10 from "@/assets/a36-labs-community-image-10.jpg";


const row2Images = [
  communityImg1,
  communityImg2,
  communityImg3,
  communityImg4,
  communityImg5,
  communityImg6,
  communityImg7,
  communityImg8,
  communityImg9,
  communityImg10,
];

const row2Doubled = [...row2Images, ...row2Images];

const Events = () => {
  return (
    <PageWrapper>
      {/* SECTION 1 - HERO */}
      <section className="bg-primary py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow mb-6">A36 EVENTS</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">
            120+ Events Across Global Builder Hubs
          </h1>
          <p className="text-base text-white/60 mt-6 max-w-[560px]">
            Side events, hackathons, workshops, founder meetups, builder rooms, and ecosystem events curated by A36 Labs.
          </p>
        </div>
      </section>

      {/* SECTION 2 - PHOTO SLIDER */}
      <section className="bg-background py-16 overflow-hidden">
        <div
          className="overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex gap-6 w-max animate-slide-right">
            {row2Doubled.map((src, i) => (
              <div key={`r2-${i}`} className="w-[320px] h-[200px] flex-shrink-0 bg-warm-cream overflow-hidden">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
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
            Upcoming Events
          </h2>
          <div className="w-full overflow-hidden">
            <iframe
              src="https://luma.com/embed/calendar/cal-PuV3v4w2KzbiPI7/events?lt=light"
              width="100%"
              height="650"
              frameBorder="0"
              loading="lazy"
              style={{ border: "1px solid #bfcbda88" }}
              allowFullScreen
              aria-hidden={false}
              tabIndex={0}
            />
          </div>
          <div className="mt-6">
            <a
              href="https://luma.com/a36"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Subscribe on Luma →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3 - LUMA CALENDAR */}
      <section className="bg-background py-16">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">2026 CALENDAR</p>
          <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary mb-8">
            Upcoming Events
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
              href="https://luma.com/a36"
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
            Want to build with us?
          </h2>
          <p className="text-base text-primary/60 mt-4 max-w-[560px] mx-auto">
            We co-host events with protocols, communities, startups, and ecosystem partners globally
          </p>
          <div className="mt-10">
            <a href="https://forms.gle/ww6WThmuo5vLupQ96" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              PARTNER WITH A36 →
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Events;
