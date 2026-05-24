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

const WHATSAPP_URL = "https://chat.whatsapp.com/CdyFYIzDSMj17jWfGJGtkw";
const TELEGRAM_URL = "https://t.me/+sqfR_6vZCdZhY2Fl";
const DISCORD_URL = "https://discord.gg/Ha5yvx3R";
const SUBSTACK_URL = "https://a36signal.substack.com/";
const LUMA_URL = "https://luma.com/a36";
const X_URL = "https://x.com/A36Labs";
const LINKEDIN_URL = "https://www.linkedin.com/company/a36labs/";
const INSTAGRAM_URL = "https://www.instagram.com/a36labs/";

const gallery: { image: string }[] = [
  { image: communityImg1 },
  { image: communityImg2 },
  { image: communityImg3 },
  { image: communityImg4 },
  { image: communityImg5 },
  { image: communityImg6 },
  { image: communityImg7 },
  { image: communityImg8 },
  { image: communityImg9 },
  { image: communityImg10 },
];

const Ext = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
);

type AccessCard = {
  name: string;
  body: string;
  cta: string;
  href: string;
  socials?: { label: string; href: string }[];
};

const accessCards: AccessCard[] = [
  {
    name: "WhatsApp",
    body: "Regional updates, event alerts, and fast announcements",
    cta: "Join WhatsApp →",
    href: WHATSAPP_URL,
  },
  {
    name: "Telegram",
    body: "Open global discussion and community updates",
    cta: "Join Telegram →",
    href: TELEGRAM_URL,
  },
  {
    name: "Discord",
    body: "Builder channels, opportunities, private rooms, and deeper collaboration",
    cta: "Join Discord →",
    href: DISCORD_URL,
  },
  {
    name: "Events Calendar",
    body: "Upcoming A36 Labs events, meetups, workshops, founder connects, and residency programs",
    cta: "View Events →",
    href: LUMA_URL,
  },
  {
    name: "A36 Signal",
    body: "Newsletter for weekly alpha drops, opportunities, grants, events, and ecosystem updates",
    cta: "Subscribe →",
    href: SUBSTACK_URL,
  },

];

const whoFor = [
  "Founders building products",
  "Developers shipping real work",
  "Operators growing ecosystems",
  "Researchers and technical writers",
  "Community leads and city hosts",
  "Early-stage startup teams",
];

const rules = [
  "No spam or low-quality promotion",
  "No fake airdrops or shill groups",
  "Share proof of work, not hype",
  "No cold DMs without permission",
  "Low-quality posts may be removed",
];

const scrollToAccess = (e: React.MouseEvent) => {
  e.preventDefault();
  const el = document.getElementById("access");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Community = () => {
  const marqueeItems = [...gallery, ...gallery];

  return (
    <PageWrapper>
      {/* 1. HERO */}
      <section className="bg-background py-20 md:py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">A36 NETWORK</p>
          <h1 className="font-black text-[40px] md:text-[60px] leading-[1.05] tracking-heading text-primary">
            A Curated Network<br />for Builders
          </h1>
          <p className="text-base text-primary/70 mt-6 max-w-[640px]">
            A36 Network brings together founders, developers, operators, researchers, and ecosystem partners across Web3, AI, and emerging tech. Open enough to discover, curated enough to stay high quality
          </p>
          <div className="mt-8">
            <a href="#access" onClick={scrollToAccess} className="btn-primary inline-block">
              JOIN THE NETWORK →
            </a>
          </div>
        </div>
      </section>

      {/* 2. AUTO-SLIDING PHOTO MARQUEE */}
      <section className="bg-warm-cream py-20 overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">IN THE NETWORK</p>
          <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">
            Build in Public<br />Connect IRL
          </h2>
          <p className="text-base text-primary/70 mt-4 max-w-[640px]">
            Events, workshops, hackathons, founder circles, and community moments from across A36 Labs
          </p>
        </div>

        <div
          className="mt-12 relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="marquee-track flex gap-5 w-max">
            {marqueeItems.map((g, i) => (
              <div
                key={i}
                className="shrink-0 w-[240px] md:w-[300px] aspect-video bg-primary/10 overflow-hidden"
              >
                {g.image ? (
                  <img src={g.image} alt="" className="w-full h-full object-cover" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes a36-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: a36-marquee 40s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none; }
          }
        `}</style>
      </section>

      {/* 3. ACCESS */}
      <section id="access" className="bg-background py-24 scroll-mt-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">ACCESS</p>
          <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading max-w-[720px]">
            Choose your access layer
          </h2>
          <p className="text-base text-primary/70 mt-4 max-w-[640px]">
            Start with the public channels. Go deeper through contribution, events, and proof of work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-12">
            {accessCards.map((c, i) => {
              // First 3 cards span 2 cols each (full row). Last 2 span 3 cols each (balanced row).
              const span = i < 3 ? "md:col-span-2" : "md:col-span-3";
              return (
                <div key={c.name} className={`${span} border border-primary/15 p-8 flex flex-col min-h-[240px] hover:border-accent transition-colors`}>
                  <h3 className="font-black text-2xl text-primary">{c.name}</h3>
                  <p className="text-sm text-primary/70 mt-3 flex-1">{c.body}</p>
                  <Ext href={c.href} className="mt-6 text-sm font-bold uppercase tracking-wider text-accent hover:text-primary">
                    {c.cta}
                  </Ext>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-primary/70">
            <span className="font-bold uppercase tracking-wider text-primary/60">Follow A36 Labs:</span>
            <Ext href={X_URL} className="font-bold text-primary hover:text-accent">X</Ext>
            <span className="text-primary/30">·</span>
            <Ext href={LINKEDIN_URL} className="font-bold text-primary hover:text-accent">LinkedIn</Ext>
            <span className="text-primary/30">·</span>
            <Ext href={INSTAGRAM_URL} className="font-bold text-primary hover:text-accent">Instagram</Ext>
          </div>

        </div>
      </section>

      {/* 4. CURATED BY DESIGN */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">CURATED BY DESIGN</p>
          <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">Built for people who build</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <ul className="space-y-3">
              {whoFor.map((w) => (
                <li key={w} className="border-l-4 border-accent pl-4 py-1 text-base text-primary font-bold">{w}</li>
              ))}
            </ul>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60 mb-4">NETWORK RULES</p>
              <ul className="space-y-3">
                {rules.map((r) => (
                  <li key={r} className="text-sm text-primary/80">{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-primary py-24">
        <div className="container max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="font-black text-3xl md:text-5xl text-white tracking-heading">
            Join the network where builders operate
          </h2>
          <p className="text-base text-white/60 mt-5 max-w-[600px] mx-auto">
            A36 Network is built for access, opportunities, and high-trust connections across global builder communities
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#access" onClick={scrollToAccess} className="btn-primary inline-block">
              JOIN THE NETWORK →
            </a>
            <Ext
              href={LUMA_URL}
              className="inline-block border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-3 hover:bg-white hover:text-primary transition-colors"
            >
              VIEW EVENTS →
            </Ext>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Community;
