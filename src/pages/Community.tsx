import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const WHATSAPP_URL = "https://chat.whatsapp.com/CdyFYIzDSMj17jWfGJGtkw";
const TELEGRAM_URL = "https://t.me/+sqfR_6vZCdZhY2Fl";
const DISCORD_URL = "https://discord.gg/Ha5yvx3R";
const SUBSTACK_URL = "https://a36signal.substack.com/";
const LUMA_URL = "https://luma.com/a36";
const X_URL = "https://x.com/A36Labs";
const LINKEDIN_URL = "https://www.linkedin.com/company/a36labs/";
const INSTAGRAM_URL = "https://www.instagram.com/a36labs/";

// Replace `image` with real photo URLs later. Keep label + caption short.
const gallery = [
  { label: "Hackathon", caption: "Builders shipping together over a weekend", image: "" },
  { label: "Builder Meetup", caption: "Local hubs, real introductions", image: "" },
  { label: "Workshop", caption: "Deep-dive sessions with operators", image: "" },
  { label: "Founder Connect", caption: "Small-room conversations that matter", image: "" },
  { label: "Community Gathering", caption: "Ecosystem night across cities", image: "" },
  { label: "Residency", caption: "15 days. 36 builders. Mumbai.", image: "" },
  { label: "Demo Day", caption: "Live demos from cohort teams", image: "" },
  { label: "Ecosystem Event", caption: "Partner-led events across regions", image: "" },
];

const Ext = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
);

const primaryCards = [
  { name: "WhatsApp", body: "Regional hubs, event updates, and fast announcements.", href: WHATSAPP_URL },
  { name: "Telegram", body: "Global discussion, community updates, and open access conversations.", href: TELEGRAM_URL },
  { name: "Discord", body: "Structured builder channels, curated discussion, and deeper collaboration.", href: DISCORD_URL },
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
  "Admins may remove low-signal content",
];

const Community = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 720), behavior: "smooth" });
  };

  return (
    <PageWrapper>
      {/* 1. HERO */}
      <section className="bg-background py-20 md:py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">A36 NETWORK</p>
          <h1 className="font-black text-[40px] md:text-[60px] leading-[1.05] tracking-heading text-primary">
            The Private Network<br />for Serious Builders.
          </h1>
          <p className="text-base text-primary/70 mt-6 max-w-[640px]">
            A36 Network connects founders, developers, operators, researchers, and ecosystem partners across Web3, AI, and emerging tech. Built for signal, access, and real-world collaboration.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Ext href={WHATSAPP_URL} className="btn-primary inline-block">JOIN WHATSAPP →</Ext>
            <Ext href={DISCORD_URL} className="btn-ghost inline-block">JOIN DISCORD →</Ext>
            <Ext href={TELEGRAM_URL} className="text-sm font-bold uppercase tracking-wider text-primary/70 hover:text-accent">
              Join Telegram →
            </Ext>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL PHOTO SCROLLER */}
      <section className="bg-warm-cream py-20">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-[680px]">
              <p className="eyebrow-dark mb-4">IN THE NETWORK</p>
              <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">
                Built in public. Connected in real life.
              </h2>
              <p className="text-base text-primary/70 mt-4">
                Events, builder meetups, workshops, founder circles, and ecosystem moments across the A36 network.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                aria-label="Scroll left"
                onClick={() => scrollBy(-1)}
                className="w-11 h-11 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Scroll right"
                onClick={() => scrollBy(1)}
                className="w-11 h-11 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-16 pb-4"
          style={{ scrollbarWidth: "thin" }}
        >
          {gallery.map((g) => (
            <article
              key={g.label}
              className="snap-start shrink-0 w-[78vw] sm:w-[440px] md:w-[460px]"
            >
              <div className="aspect-[4/3] bg-primary/10 overflow-hidden relative">
                {g.image ? (
                  <img src={g.image} alt={g.label} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary/30 text-xs font-bold uppercase tracking-[0.2em]">
                    {g.label}
                  </div>
                )}
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{g.label}</p>
                <p className="text-sm text-primary/75 mt-1">{g.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. SIMPLIFIED ACCESS */}
      <section className="bg-background py-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">ACCESS</p>
          <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading max-w-[720px]">
            Choose your access layer.
          </h2>
          <p className="text-base text-primary/70 mt-4 max-w-[640px]">
            Start public. Go deeper through contribution, proof of work, events, and residency.
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

      {/* 4. WHO IT'S FOR + RULES */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">CURATED BY DESIGN</p>
          <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">Who this network is for.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <ul className="space-y-3">
              {whoFor.map((w) => (
                <li key={w} className="border-l-4 border-accent pl-4 py-1 text-base text-primary font-bold">{w}</li>
              ))}
            </ul>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/60 mb-4">SIGNAL RULES</p>
              <ul className="space-y-3">
                {rules.map((r) => (
                  <li key={r} className="text-sm text-primary/80">— {r}</li>
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
            Join the network where serious builders operate.
          </h2>
          <p className="text-base text-white/60 mt-5 max-w-[600px] mx-auto">
            A36 Network is built for signal, opportunities, and high-trust connections across global builder communities.
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
