import img1 from "@/assets/a36-labs-community-image-1.jpg";
import img2 from "@/assets/a36-labs-community-image-2.jpg";
import img3 from "@/assets/a36-labs-community-image-3.jpg";
import img4 from "@/assets/a36-labs-community-image-4.jpg";
import img5 from "@/assets/a36-labs-community-image-5.jpg";
import img6 from "@/assets/a36-labs-community-image-6.jpg";
import img7 from "@/assets/a36-labs-community-image-7.jpg";
import img8 from "@/assets/a36-labs-community-image-8.jpg";
import img9 from "@/assets/a36-labs-community-image-9.jpg";
import img10 from "@/assets/a36-labs-community-image-10.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const doubled = [...images, ...images];

const IRLProof = () => (
  <section className="bg-background py-12 md:py-20">
    <div className="container max-w-[1200px] mx-auto px-6 md:px-16 mb-8 md:mb-12">
      <p className="eyebrow-dark mb-3 md:mb-4">A36 IRL</p>
      <h2 className="font-black text-[28px] md:text-[44px] leading-[1.05] tracking-heading text-primary">
        Built in public. Connected in rooms.
      </h2>
      <p className="text-sm md:text-base text-primary/65 mt-3 md:mt-4 max-w-[640px]">
        Moments from A36 Labs events, workshops, founder circles, and community gatherings
      </p>
    </div>

    <div
      className="overflow-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex gap-5 md:gap-7 w-max animate-slide-left">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="a36-img-zoom a36-card-lift w-[220px] h-[124px] sm:w-[280px] sm:h-[158px] md:w-[400px] md:h-[225px] flex-shrink-0 bg-warm-cream border border-border"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IRLProof;
