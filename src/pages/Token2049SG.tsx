import { useEffect, useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3, Mail, MapPin, Send } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import runTheBayAsset from "@/assets/run-the-bay-token2049-singapore.gif.asset.json";
import previousMomentsAsset from "@/assets/token2049-previous-week-moments.png.asset.json";
import pastAttendeesAsset from "@/assets/token2049-past-attendees.png.asset.json";
import officialLogo from "@/assets/a36-labs-official-logo.svg";

type EventCard = {
  number: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  href: string;
  image?: string;
  placeholder?: string;
};

const events: EventCard[] = [
  {
    number: "01",
    title: "Run the Bay: Crypto Whales Edition",
    date: "6 October 2026",
    time: "7:00 AM – 10:00 AM",
    location: "Marina Bay Sands, Singapore",
    description: "A morning 5K, breakfast and conversations with traders, investors, founders and crypto industry professionals.",
    href: "https://luma.com/cja6d4ku",
    image: runTheBayAsset.url,
  },
  {
    number: "02",
    title: "Whale Talks: Trading, Capital & Payments",
    date: "6 October 2026",
    time: "2:00 PM – 6:00 PM",
    location: "Marina Bay Sands, Singapore",
    description: "Focused conversations around trading, liquidity, stablecoins, payments, capital and the infrastructure shaping digital markets.",
    href: "https://luma.com/5kdau1ak",
    placeholder: "WHALE TALKS",
  },
  {
    number: "03",
    title: "Pickleball + Crypto Whales",
    date: "9 October 2026",
    time: "2:00 PM – 6:00 PM",
    location: "Dempsey Hill, Singapore",
    description: "An afternoon of pickleball, food and relaxed conversations with founders, traders, investors and industry professionals.",
    href: "https://luma.com/6mv7bwxa",
    placeholder: "PICKLEBALL + CRYPTO WHALES",
  },
];

const audiences = [
  ["TRADERS & MARKET MAKERS", "Liquidity, trading platforms and market infrastructure."],
  ["EXCHANGES & FINTECH", "Wallets, payments, stablecoins and digital asset infrastructure."],
  ["INVESTORS & FUNDS", "VCs, angels, fund managers and digital asset investors."],
  ["FOUNDERS & BUILDERS", "Teams building across DeFi, payments, trading and infrastructure."],
] as const;

const partnerTypes = ["ECOSYSTEM PARTNER", "SPORTS PARTNER", "MEDIA PARTNER", "EVENT PARTNER"] as const;

const partnershipIncludes = [
  "Branding across all three event pages and agreed promotional materials",
  "Relevant on-site activations",
  "Event photography and consolidated post-event coverage",
  "Curated introductions and attendee contacts where participants provide consent",
  "Opportunity for relevant Whale Talks panel participation, subject to speaker selection and agenda approval",
  "Merchandise and activation arrangements finalized with each partner",
] as const;

const SectionIntro = ({ eyebrow, children, light = false }: { eyebrow: string; children: ReactNode; light?: boolean }) => (
  <Reveal>
    <p className={light ? "eyebrow" : "eyebrow-dark"}>{eyebrow}</p>
    <h2 className={`mt-3 text-[34px] font-black leading-[1.02] sm:text-[44px] lg:text-[56px] ${light ? "text-primary-foreground" : "text-primary"}`}>
      {children}
    </h2>
  </Reveal>
);

const handleTilt = (event: ReactPointerEvent<HTMLElement>) => {
  if (event.pointerType !== "mouse" || !window.matchMedia("(pointer: fine)").matches) return;
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${(x * 4).toFixed(2)}deg`);
  card.style.setProperty("--image-x", `${(x * 5).toFixed(1)}px`);
  card.style.setProperty("--image-y", `${(y * 5).toFixed(1)}px`);
};

const resetTilt = (event: ReactPointerEvent<HTMLElement>) => {
  event.currentTarget.style.removeProperty("--tilt-x");
  event.currentTarget.style.removeProperty("--tilt-y");
  event.currentTarget.style.removeProperty("--image-x");
  event.currentTarget.style.removeProperty("--image-y");
};

const handleProofParallax = (event: ReactPointerEvent<HTMLDivElement>) => {
  if (event.pointerType !== "mouse" || !window.matchMedia("(pointer: fine)").matches) return;
  const frame = event.currentTarget;
  const rect = frame.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  frame.style.setProperty("--proof-x", `${(x * 1.5).toFixed(2)}deg`);
  frame.style.setProperty("--proof-y", `${(-y * 1.5).toFixed(2)}deg`);
};

const resetProofParallax = (event: ReactPointerEvent<HTMLDivElement>) => {
  event.currentTarget.style.removeProperty("--proof-x");
  event.currentTarget.style.removeProperty("--proof-y");
};

const Token2049SG = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      page.style.setProperty("--cursor-x", `${event.clientX}px`);
      page.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <>
      <Nav />
      <main ref={pageRef} className="token-page overflow-hidden bg-background pt-16 text-primary">
        <div className="token-cursor" aria-hidden="true" />

        <section className="token-hero relative isolate flex min-h-[680px] items-end overflow-hidden bg-primary px-5 pb-12 pt-16 text-primary-foreground sm:px-8 sm:pb-16 lg:h-[min(900px,calc(100svh-4rem))] lg:min-h-[680px] lg:px-10 lg:pb-16 2xl:px-16 2xl:pb-20">
          <div className="token-grid" aria-hidden="true" />
          <div className="token-orbit token-orbit-one" aria-hidden="true" />
          <div className="token-orbit token-orbit-two" aria-hidden="true" />
          <div className="token-shell relative z-10 mx-auto w-full">
            <div className="a36-hero-item a36-hero-item-1 mb-10 flex items-center justify-between border-b border-primary-foreground/15 pb-5">
              <img src={officialLogo} alt="A36 Labs" className="h-auto w-[108px] sm:w-[132px]" />
              <span className="text-right text-[9px] font-bold uppercase text-primary-foreground/55 sm:text-[10px]">6–9 October 2026<br />Singapore</span>
            </div>
            <p className="a36-hero-item a36-hero-item-1 eyebrow">TOKEN2049 SINGAPORE WEEK 2026</p>
            <h1 className="a36-hero-item a36-hero-item-2 mt-4 max-w-[1220px] text-[clamp(3rem,5vw,6.5rem)] font-black leading-[0.94] text-primary-foreground">
              Three events.<br />One week.<br /><span className="text-accent">The people moving markets.</span>
            </h1>
            <div className="a36-hero-item a36-hero-item-3 mt-7 grid gap-6 border-t border-primary-foreground/15 pt-6 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-[720px] text-[clamp(0.95rem,0.55vw+0.55rem,1.125rem)] leading-relaxed text-primary-foreground/70">
                A36 Labs is bringing together traders, founders, investors, exchanges, builders and operators across three curated experiences during TOKEN2049 Singapore Week.
              </p>
              <p className="text-xs font-black uppercase text-accent">6–9 OCTOBER 2026 · SINGAPORE</p>
            </div>
            <div className="a36-hero-item a36-hero-item-4 mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#events" className="token-button token-button-gold inline-flex min-h-12 items-center justify-between gap-8 bg-accent px-5 py-3 text-xs font-black uppercase text-accent-foreground">EXPLORE THE EVENTS <ArrowRight size={18} /></a>
              <a href="#partnership" className="token-button inline-flex min-h-12 items-center justify-between gap-8 border border-primary-foreground/35 px-5 py-3 text-xs font-black uppercase text-primary-foreground">PARTNER WITH A36 <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section id="events" className="scroll-mt-20 bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-10 2xl:px-16">
          <div className="token-shell mx-auto">
            <SectionIntro eyebrow="THREE EXPERIENCES">Choose your room.</SectionIntro>
            <Stagger className="mt-9 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3" stagger={0.07}>
              {events.map((event) => (
                <StaggerItem key={event.title} className="h-full">
                   <article className="token-event-card group flex h-full min-w-0 flex-col border border-border bg-card" onPointerMove={handleTilt} onPointerLeave={resetTilt}>
                    <div className="token-event-media relative aspect-[4/3] overflow-hidden border-b border-border bg-primary">
                      {event.image ? (
                        <img src={event.image} alt="Run the Bay: Crypto Whales Edition at Marina Bay Sands" className="h-full w-full object-cover" />
                      ) : (
                        <div className="token-placeholder flex h-full flex-col justify-between p-5 text-primary-foreground">
                          <Logo className="brightness-0 invert" />
                          <div>
                            <p className="text-[10px] font-bold uppercase text-accent">TOKEN2049 SINGAPORE WEEK</p>
                            <p className="mt-2 text-xl font-black leading-tight">{event.placeholder}</p>
                          </div>
                        </div>
                      )}
                      <span className="absolute right-0 top-0 bg-accent px-3 py-2 text-[10px] font-black text-accent-foreground">{event.number}</span>
                    </div>
                     <div className="flex min-w-0 flex-1 flex-col p-5 2xl:p-6">
                      <h3 className="text-[21px] font-black leading-[1.08] text-primary">{event.title}</h3>
                      <div className="mt-5 space-y-2 border-y border-border py-4 text-[11px] font-bold text-primary/65">
                        <p className="flex items-center gap-2"><CalendarDays size={15} className="text-accent" />{event.date}</p>
                        <p className="flex items-center gap-2"><Clock3 size={15} className="text-accent" />{event.time}</p>
                        <p className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-accent" />{event.location}</p>
                      </div>
                      <p className="mt-4 text-xs leading-relaxed text-primary/65">{event.description}</p>
                      <a href={event.href} target="_blank" rel="noopener noreferrer" className="token-event-link mt-auto flex min-h-12 items-center justify-between pt-5 text-xs font-black uppercase text-primary">VIEW EVENT <ArrowRight size={18} /></a>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-warm-cream px-5 py-16 sm:px-8 sm:py-24 lg:px-10 2xl:px-16">
          <div className="token-shell mx-auto">
            <SectionIntro eyebrow="IN THE ROOM">Built for people who move fast.</SectionIntro>
            <Stagger className="mt-9 grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-4" stagger={0.06}>
              {audiences.map(([title, description], index) => (
                <StaggerItem key={title} className="border-b border-r border-border bg-background/35 p-5 sm:p-6">
                  <p className="text-[10px] font-black text-accent">0{index + 1}</p>
                  <h3 className="mt-8 text-sm font-black leading-tight text-primary">{title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-primary/65">{description}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-10 2xl:px-16">
          <div className="token-shell mx-auto">
            <SectionIntro eyebrow="SINGAPORE, AGAIN">We’ve built here before.</SectionIntro>
            <Reveal delay={0.08} className="mt-5 max-w-[760px]">
              <p className="text-[clamp(0.95rem,0.55vw+0.55rem,1.125rem)] leading-relaxed text-primary/65">Previous A36 moments from TOKEN2049 Week Singapore, from community sports and founder rooms to dinners and conversations that carried beyond the event.</p>
            </Reveal>
            <Reveal delay={0.12} className="mt-8">
              <div className="token-proof-frame border border-border bg-card p-1.5 sm:p-2" onPointerMove={handleProofParallax} onPointerLeave={resetProofParallax}>
                <img src={previousMomentsAsset.url} alt="Collage of previous A36 TOKEN2049 Week Singapore moments" loading="lazy" className="h-auto w-full object-contain" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-warm-cream px-5 py-16 sm:px-8 sm:py-24 lg:px-10 2xl:px-16">
          <div className="token-shell mx-auto">
            <SectionIntro eyebrow="PAST ATTENDEES">People from teams shaping technology and markets.</SectionIntro>
            <Reveal delay={0.08} className="mt-5 max-w-[780px]">
              <p className="text-[clamp(0.95rem,0.55vw+0.55rem,1.125rem)] leading-relaxed text-primary/65">Across previous A36 events, our rooms have brought together people from global technology, finance, startup and blockchain ecosystems.</p>
            </Reveal>
            <Reveal delay={0.12} className="mt-8">
              <div className="token-proof-frame border border-border bg-background p-1.5 sm:p-2" onPointerMove={handleProofParallax} onPointerLeave={resetProofParallax}>
                <img src={pastAttendeesAsset.url} alt="Organizations represented by past attendees across previous A36 events" loading="lazy" className="h-auto w-full object-contain" />
              </div>
              <p className="mt-3 max-w-[920px] text-[11px] leading-relaxed text-primary/55">Past attendees across previous A36 events. Logos do not indicate partnership or confirmed attendance at these Singapore 2026 events.</p>
            </Reveal>
          </div>
        </section>

        <section id="partnership" className="scroll-mt-16 bg-primary px-5 py-16 text-primary-foreground sm:px-8 sm:py-24 lg:px-10 2xl:px-16">
          <div className="token-shell mx-auto">
            <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] xl:gap-16">
              <div className="min-w-0">
                <SectionIntro eyebrow="PARTNER WITH A36" light>One partnership.<br /><span className="text-accent">All three events.</span></SectionIntro>
                <Reveal delay={0.08} className="mt-9 border-y border-primary-foreground/15 py-6">
                  <p className="text-[10px] font-bold uppercase text-primary-foreground/50">PARTNERSHIP PACKAGE</p>
                  <p className="mt-2 text-[42px] font-black leading-none text-primary-foreground sm:text-[56px]">USD 3,600</p>
                  <p className="mt-4 max-w-md text-xs leading-relaxed text-primary-foreground/65">One package across Run the Bay, Whale Talks and Pickleball + Crypto Whales.</p>
                </Reveal>
                <div className="mt-7 grid grid-cols-2 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
                  <div className="bg-primary p-4"><strong className="block text-xl text-accent">1,000+</strong><span className="text-[10px] uppercase text-primary-foreground/55">Expected registrations</span></div>
                  <div className="bg-primary p-4"><strong className="block text-xl text-accent">100+</strong><span className="text-[10px] uppercase text-primary-foreground/55">Targeted curated attendees</span></div>
                </div>
                <p className="mt-5 text-[11px] font-black uppercase text-accent">Partnerships close · 28 September 2026</p>
                <a href="https://canva.link/w7n7nrhlkq2bqf3" target="_blank" rel="noopener noreferrer" className="token-deck-link mt-6 inline-flex min-h-12 items-center gap-2 border border-primary-foreground/30 px-5 py-3 text-xs font-black uppercase text-primary-foreground">VIEW SPONSORSHIP DECK <ArrowUpRight size={17} /></a>
              </div>
              <Reveal delay={0.12} className="min-w-0 border border-primary-foreground/15 p-5 sm:p-7">
                <p className="text-[10px] font-black uppercase text-accent">THE PACKAGE INCLUDES</p>
                <ul className="mt-5 divide-y divide-primary-foreground/15">
                  {partnershipIncludes.map((item, index) => (
                    <li key={item} className="grid grid-cols-[28px_1fr] gap-3 py-4 text-xs leading-relaxed text-primary-foreground/75">
                      <span className="font-black text-accent">0{index + 1}</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="mt-14 border-t border-primary-foreground/15 pt-10">
              <p className="eyebrow">PARTNER TYPES</p>
               <Stagger className="mt-6 grid border-l border-t border-primary-foreground/15 sm:grid-cols-2 xl:grid-cols-4" stagger={0.05}>
                {partnerTypes.map((type) => (
                  <StaggerItem key={type} className="flex min-h-[145px] flex-col justify-between border-b border-r border-primary-foreground/15 p-4 sm:p-5">
                    <span className="text-[10px] font-black text-accent">{type}</span>
                    <span className="text-[10px] font-bold uppercase text-primary-foreground/40">PARTNER SLOT OPEN</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-10 2xl:px-16">
          <Reveal className="token-shell mx-auto border border-border p-6 sm:p-10 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
            <div className="min-w-0">
              <p className="eyebrow-dark">LET'S BUILD THE WEEK</p>
              <h2 className="mt-3 text-[34px] font-black leading-[1.02] text-primary sm:text-[48px]">Want your brand in the room?</h2>
              <p className="mt-5 max-w-[700px] text-sm leading-relaxed text-primary/65">If you want to activate across all three events, speak at Whale Talks, support the sports formats or collaborate around media, let’s talk.</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
              <a href="mailto:hello@a36labs.com" className="token-button token-button-gold inline-flex min-h-12 items-center justify-between gap-8 bg-accent px-5 py-3 text-xs font-black uppercase text-accent-foreground"><Mail size={17} /> EMAIL US <ArrowRight size={17} /></a>
              <a href="https://t.me/lakshdilliwal" target="_blank" rel="noopener noreferrer" className="token-button inline-flex min-h-12 items-center justify-between gap-8 border border-primary px-5 py-3 text-xs font-black uppercase text-primary"><Send size={17} /> TELEGRAM <ArrowRight size={17} /></a>
               <a href="https://canva.link/w7n7nrhlkq2bqf3" target="_blank" rel="noopener noreferrer" className="token-deck-link inline-flex min-h-11 items-center justify-center gap-2 text-[11px] font-black uppercase text-primary/70">VIEW THE DECK <ArrowUpRight size={15} /></a>
            </div>
          </Reveal>
        </section>

        <style>{`
          .token-page { --cursor-x: -100px; --cursor-y: -100px; position: relative; }
           .token-shell { width: min(100%, 1440px); }
          .token-cursor { position: fixed; z-index: 60; left: var(--cursor-x); top: var(--cursor-y); width: 220px; height: 220px; transform: translate(-50%, -50%); background: radial-gradient(circle, hsl(var(--accent) / .075), transparent 68%); pointer-events: none; }
          .token-grid { position: absolute; inset: 0; opacity: .11; background-image: linear-gradient(hsl(var(--primary-foreground) / .17) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground) / .17) 1px, transparent 1px); background-size: 56px 56px; mask-image: linear-gradient(to bottom, transparent, black 30%, black); }
          .token-hero::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 78% 20%, hsl(var(--accent) / .12), transparent 32%); pointer-events: none; }
          .token-orbit { position: absolute; border: 1px solid hsl(var(--accent) / .18); width: 38vw; height: 38vw; min-width: 360px; min-height: 360px; animation: tokenOrbit 28s linear infinite; }
          .token-orbit::before, .token-orbit::after { content: ""; position: absolute; background: hsl(var(--accent)); }
          .token-orbit::before { width: 8px; height: 8px; top: -4px; left: 30%; }
          .token-orbit::after { width: 42px; height: 1px; bottom: 20%; right: -21px; }
          .token-orbit-one { right: -12%; top: 8%; transform: rotate(18deg); }
          .token-orbit-two { right: 4%; top: 18%; transform: rotate(62deg); animation-direction: reverse; animation-duration: 36s; }
          .token-button { transition: transform 200ms ease, border-color 200ms ease, background-color 200ms ease, box-shadow 200ms ease; }
          .token-button svg, .token-event-link svg { transition: transform 200ms ease; }
          .token-button:hover { transform: translateY(-2px); border-color: hsl(var(--accent)); }
          .token-button:hover svg, .token-event-link:hover svg { transform: translateX(4px); }
           .token-deck-link { transition: transform 200ms ease, border-color 200ms ease, color 200ms ease; }
           .token-deck-link:hover { transform: translateY(-2px); border-color: hsl(var(--accent)); color: hsl(var(--accent)); }
          .token-button:active { transform: scale(.985); }
          .token-button-gold:hover { box-shadow: 0 12px 26px -16px hsl(var(--accent) / .7); }
          .token-event-card { --tilt-x: 0deg; --tilt-y: 0deg; --image-x: 0px; --image-y: 0px; transform: perspective(1000px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y)); transform-style: preserve-3d; transition: transform 180ms ease, border-color 200ms ease, box-shadow 200ms ease; }
          .token-event-card:hover { border-color: hsl(var(--accent)); box-shadow: 0 24px 44px -30px hsl(var(--primary) / .7); }
          .token-event-media img { transform: scale(1.025) translate(var(--image-x), var(--image-y)); transition: transform 220ms ease; }
          .token-placeholder { background-image: linear-gradient(hsl(var(--primary-foreground) / .06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground) / .06) 1px, transparent 1px); background-size: 32px 32px; }
           .token-proof-frame { --proof-x: 0deg; --proof-y: 0deg; transform: perspective(1800px) rotateX(var(--proof-y)) rotateY(var(--proof-x)); box-shadow: 0 28px 60px -46px hsl(var(--primary) / .75); transition: transform 260ms ease, box-shadow 260ms ease; }
           .token-proof-frame:hover { box-shadow: 0 34px 70px -44px hsl(var(--primary) / .8); }
          @keyframes tokenOrbit { from { rotate: 0deg; } to { rotate: 360deg; } }
           @media (hover: none), (pointer: coarse) { .token-cursor { display: none; } .token-event-card, .token-proof-frame { transform: none !important; } .token-event-media img { transform: none !important; } .token-event-card:active { transform: scale(.99) !important; border-color: hsl(var(--accent)); } }
           @media (prefers-reduced-motion: reduce) { .token-cursor { display: none; } .token-orbit { animation: none; } .token-event-card, .token-event-media img, .token-proof-frame, .token-button, .token-button svg, .token-event-link svg, .token-deck-link { transition-duration: 0ms; transform: none !important; } }
          @media (max-width: 359px) { .token-orbit { display: none; } }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default Token2049SG;