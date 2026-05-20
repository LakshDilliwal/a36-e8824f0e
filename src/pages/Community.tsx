import PageWrapper from "@/components/PageWrapper";

const WHATSAPP_URL = "https://chat.whatsapp.com/CdyFYIzDSMj17jWfGJGtkw";
const TELEGRAM_URL = "https://t.me/+sqfR_6vZCdZhY2Fl";
const DISCORD_URL = "https://discord.gg/Ha5yvx3R";
const SUBSTACK_URL = "https://a36signal.substack.com/";
const LUMA_URL = "https://luma.com/a36";
const X_URL = "https://x.com/A36Labs";
const LINKEDIN_URL = "https://www.linkedin.com/company/a36labs/";
const INSTAGRAM_URL = "https://www.instagram.com/a36labs/";

// Replace `image` with real photo URLs later (16:9 recommended).
const gallery: { image: string }[] = [
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
  { image: "" },
];

const Ext = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
);

const primaryCards = [
  { name: "WhatsApp", body: "Regional updates, events, and fast announcements", href: WHATSAPP_URL },
  { name: "Telegram", body: "Open global discussion and community updates", href: TELEGRAM_URL },
  { name: "Discord", body: "Builder channels, cohorts, opportunities, and deeper collaboration", href: DISCORD_URL },
];

const slimLinks = [
  { label: "A36 Signal", href: SUBSTACK_URL },
  { label: "Events Calendar", href: LUMA_URL },
  { label: "X", href: X_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Instagram", href: INSTAGRAM_URL },
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

const Community = () => {
  // Duplicate gallery for seamless marquee loop
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
            A36 Network brings together founders, developers, operators, researchers, and ecosystem partners across Web3, AI, and emerging tech. Open enough to discover, curated enough to stay high quality.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Ext href={WHATSAPP_URL} className="btn-primary inline-block">JOIN WHATSAPP →</Ext>
            <Ext href={DISCORD_URL} className="btn-primary inline-block">JOIN DISCORD →</Ext>
            <Ext href={TELEGRAM_URL} className="btn-primary inline-block">JOIN TELEGRAM →</Ext>
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
            Events, workshops, hackathons, founder circles, and community moments from across A36
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
                className="shrink-0 w-[280px] md:w-[360px] aspect-video bg-primary/10 overflow-hidden"
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
          .marquee-track:hover {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none; }
          }
        `}</style>
      </section>

      {/* 3. ACCESS */}
      <section className="bg-background py-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">ACCESS</p>
          <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading max-w-[720px]">
            Start open<br />Go deeper with proof
          </h2>
          <p className="text-base text-primary/70 mt-4 max-w-[640px]">
            Join the public channels, show your work, meet builders, and unlock deeper access through contribution
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {primaryCards.map((c) => (
              <div key={c.name} className="border border-primary/15 p-8 flex flex-col min-h-[220px] hover:border-accent transition-colors">
                <h3 className="font-black text-2xl text-primary">{c.name}</h3>
                <p className="text-sm text-primary/70 mt-3 flex-1">{c.body}</p>
                <Ext href={c.href} className="mt-6 text-sm font-bold uppercase tracking-wider text-accent hover:text-primary">
                  Join {c.name} →
                </Ext>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-primary/10 pt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
            {slimLinks.map((l) => (
              <Ext
                key={l.label}
                href={l.href}
                className="text-xs font-bold uppercase tracking-[0.18em] text-primary/70 hover:text-accent"
              >
                {l.label} →
              </Ext>
            ))}
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
            <Ext href={WHATSAPP_URL} className="btn-primary inline-block">JOIN WHATSAPP →</Ext>
            <Ext
              href={DISCORD_URL}
              className="inline-block border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-3 hover:bg-white hover:text-primary transition-colors"
            >
              JOIN DISCORD →
            </Ext>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Ext href={TELEGRAM_URL} className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-accent">
              Telegram →
            </Ext>
            <Ext href={LUMA_URL} className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-accent">
              Events Calendar →
            </Ext>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Community;
