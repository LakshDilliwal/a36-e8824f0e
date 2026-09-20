import { useEffect, type ElementType, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  FileText,
  Instagram,
  Linkedin,
  MessageCircle,
  Mic2,
  Newspaper,
  Radio,
  Send,
  Users,
  Youtube,
} from "lucide-react";
import a36LogoDark from "@/assets/a36-labs-logo-dark.svg.asset.json";
import { A36_LINKS } from "@/config/links";

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.844l-5.36-6.99L4.2 22H.94l8.02-9.17L1.5 2h7.02l4.84 6.4L18.244 2Zm-1.2 18h1.86L7.04 4H5.06l11.984 16Z" />
  </svg>
);

type HubLink = {
  label: string;
  description?: string;
  href: string;
  icon: ElementType;
  external?: boolean;
};

const communityLinks: HubLink[] = [
  { label: "WhatsApp", description: "Regional groups and quick updates.", href: A36_LINKS.community.whatsapp, icon: MessageCircle, external: true },
  { label: "Telegram", description: "Global chat and announcements.", href: A36_LINKS.community.telegram, icon: Send, external: true },
  { label: "Discord", description: "Builder rooms, opportunities and deeper conversations.", href: A36_LINKS.community.discord, icon: Radio, external: true },
];

const socialLinks: HubLink[] = [
  { label: "X", href: A36_LINKS.social.x, icon: XIcon, external: true },
  { label: "LinkedIn", href: A36_LINKS.social.linkedin, icon: Linkedin, external: true },
  { label: "Instagram", href: A36_LINKS.social.instagram, icon: Instagram, external: true },
  { label: "YouTube", href: A36_LINKS.social.youtube, icon: Youtube, external: true },
];

const contentLinks: HubLink[] = [
  { label: "A36 Signal", description: "Weekly signal for serious builders.", href: A36_LINKS.site.newsletter, icon: Newspaper },
  { label: "Base Layer", description: "Long-form conversations with builders and operators.", href: A36_LINKS.site.podcast, icon: Mic2 },
  { label: "Media Kit", description: "Official A36 brand and press resources.", href: A36_LINKS.site.mediaKit, icon: FileText },
];

const workLinks: HubLink[] = [
  { label: "A36 Earn", description: "Opportunities for builders.", href: A36_LINKS.site.earn, icon: BriefcaseBusiness },
  { label: "Residency", description: "Live, build and ship together.", href: A36_LINKS.site.residency, icon: Users },
  { label: "Cohort", description: "Structured builder programs.", href: A36_LINKS.site.cohort, icon: Users },
  { label: "Careers", description: "Join the A36 team.", href: A36_LINKS.site.careers, icon: BriefcaseBusiness },
  { label: "Partner", description: "Build something with A36.", href: A36_LINKS.applications.partner, icon: ArrowUpRight, external: true },
  { label: "Operator", description: "Help run the ecosystem.", href: A36_LINKS.applications.operator, icon: ArrowUpRight, external: true },
];

const LinkRow = ({ item, compact = false, social = false }: { item: HubLink; compact?: boolean; social?: boolean }) => {
  const Icon = item.icon;
  const body = (
    <>
      <span className="a36-links-accent" aria-hidden="true" />
      <span className="a36-links-icon"><Icon size={20} strokeWidth={1.8} /></span>
      <span className="min-w-0 flex-1">
        <span className={`block font-black leading-tight text-primary ${compact ? "text-xs" : "text-sm"}`}>{item.label}</span>
        {item.description ? <span className="mt-1 block text-[11px] leading-[1.45] text-muted">{item.description}</span> : null}
      </span>
      {item.external ? <ArrowUpRight className="a36-links-arrow shrink-0" size={18} aria-hidden="true" /> : <ChevronRight className="a36-links-arrow shrink-0" size={19} aria-hidden="true" />}
    </>
  );
  const className = `a36-links-row group relative flex min-h-[60px] items-center overflow-hidden border border-border bg-card py-3 focus-visible:outline-none ${compact ? "gap-2 px-3 sm:min-h-[56px]" : "gap-3 px-4"} ${social ? "a36-links-social" : ""}`;

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>{body}</a>
  ) : (
    <Link to={item.href} className={className}>{body}</Link>
  );
};

const HubSection = ({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) => (
  <section className="a36-links-reveal mt-9" data-links-reveal>
    <p className="eyebrow-dark mb-2">{eyebrow}</p>
    <h2 className="text-[26px] font-black leading-tight text-primary">{title}</h2>
    <div className="a36-links-items mt-4 space-y-2.5">{children}</div>
  </section>
);

const Links = () => {
  useEffect(() => {
    document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]').forEach((link) => {
      if (link.href === "https://www.a36labs.com/") link.remove();
    });

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-links-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="a36-links-page min-h-screen overflow-x-hidden bg-background text-primary">
      <div className="a36-links-ambient" aria-hidden="true"><span /><span /></div>
      <div className="relative z-10 mx-auto w-full max-w-[580px] px-5 pb-[calc(28px+env(safe-area-inset-bottom))] pt-[calc(28px+env(safe-area-inset-top))] min-[390px]:px-6 sm:pt-10">
        <header className="border-b border-border pb-7">
          <Link to="/" aria-label="A36 Labs — Home" className="a36-links-logo inline-flex min-h-11 items-center focus-visible:outline-none">
            <img src={a36LogoDark.url} alt="A36 Labs" className="h-auto w-[112px] object-contain" />
          </Link>
          <div className="a36-links-copy">
          <p className="eyebrow-dark mt-5">A36 LABS</p>
          <h1 className="mt-2.5 text-[32px] font-black leading-[1.06] text-primary min-[390px]:text-[36px] sm:text-[42px]">
            Where serious builders operate.
          </h1>
          <p className="mt-3 max-w-[520px] text-[13px] leading-[1.65] text-primary/70 min-[390px]:text-sm">
            Everything A36 in one place. Join the community, find events, follow the work, or build with us.
          </p>
          <p className="mt-4 text-[9px] font-bold uppercase leading-relaxed tracking-[0.13em] text-muted min-[390px]:text-[10px]">COMMUNITY · EVENTS · OPPORTUNITIES · CONTENT</p>
          </div>
        </header>

        <div className="a36-links-actions mt-5">
          <Link to={A36_LINKS.site.community} className="a36-links-primary group flex min-h-[56px] w-full items-center justify-between bg-accent px-5 py-3 text-sm font-black uppercase text-accent-foreground focus-visible:outline-none">
            <span>Join the community</span><ChevronRight className="a36-links-arrow" size={20} aria-hidden="true" />
          </Link>
        </div>

        <HubSection eyebrow="COMMUNITY" title="Find your people.">
          {communityLinks.map((item) => <LinkRow key={item.label} item={item} />)}
        </HubSection>

        <HubSection eyebrow="SOCIAL" title="Follow the work.">
          <div className="grid grid-cols-2 gap-2.5">
            {socialLinks.map((item) => <LinkRow key={item.label} item={item} compact social />)}
          </div>
        </HubSection>

        <HubSection eyebrow="CONTENT" title="Signals and conversations.">
          {contentLinks.map((item) => <LinkRow key={item.label} item={item} />)}
        </HubSection>

        <HubSection eyebrow="IRL" title="Meet in real life.">
          <Link to={A36_LINKS.site.events} className="a36-links-event group relative flex min-h-[92px] items-center gap-4 overflow-hidden border border-accent bg-primary px-5 py-4 text-primary-foreground focus-visible:outline-none">
            <span className="a36-links-accent" aria-hidden="true" />
            <CalendarDays className="shrink-0 text-accent" size={22} aria-hidden="true" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-black">A36 Events</span>
              <span className="mt-1 block text-[11px] leading-[1.45] text-primary-foreground/65">Workshops, builder rooms, meetups and ecosystem gatherings.</span>
              <span className="mt-2 block text-[10px] font-black uppercase text-accent">View events →</span>
            </span>
            <ChevronRight className="a36-links-arrow shrink-0" size={19} aria-hidden="true" />
          </Link>
          <a href={A36_LINKS.events.calendar} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-11 items-center text-xs font-bold text-primary focus-visible:outline-none">A36 Calendar ↗</a>
        </HubSection>

        <HubSection eyebrow="BUILD WITH A36" title="Find your way in.">
          <div className="grid grid-cols-1 gap-2.5 min-[360px]:grid-cols-2">
            {workLinks.map((item) => <LinkRow key={item.label} item={item} compact />)}
          </div>
        </HubSection>

        <footer className="a36-links-reveal mt-11 border-t border-border pt-7" data-links-reveal>
          <Link to="/" aria-label="A36 Labs — Home" className="inline-flex min-h-11 items-center focus-visible:outline-none">
            <img src={a36LogoDark.url} alt="A36 Labs" className="h-auto w-[92px] object-contain" />
          </Link>
          <p className="mt-2 text-xs font-bold text-primary">The Home of Serious Builders</p>
          <a href="https://www.a36labs.com" target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex min-h-11 items-center text-xs font-bold text-primary hover:text-muted focus-visible:outline-none">a36labs.com</a>
          <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-muted">© 2026 A36 Labs</p>
        </footer>
      </div>

      <style>{`
        .a36-links-page { position: relative; isolation: isolate; }
        .a36-links-logo { animation: a36LinksEnter 260ms cubic-bezier(.22,1,.36,1) 20ms both; }
        .a36-links-copy { animation: a36LinksEnter 300ms cubic-bezier(.22,1,.36,1) 75ms both; }
        .a36-links-actions { animation: a36LinksEnter 320ms cubic-bezier(.22,1,.36,1) 125ms both; }
        .a36-links-reveal { opacity: 0; transform: translateY(8px); transition: opacity 340ms cubic-bezier(.22,1,.36,1), transform 340ms cubic-bezier(.22,1,.36,1); }
        .a36-links-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .a36-links-reveal .a36-links-items > * { transition-delay: 0ms; }
        .a36-links-reveal.is-visible .a36-links-items > *:nth-child(2) { transition-delay: 25ms; }
        .a36-links-reveal.is-visible .a36-links-items > *:nth-child(3) { transition-delay: 50ms; }
        .a36-links-reveal.is-visible .a36-links-items > *:nth-child(4) { transition-delay: 75ms; }
        .a36-links-row, .a36-links-event { transition: transform 200ms ease-out, border-color 200ms ease-out, background-color 200ms ease-out, box-shadow 200ms ease-out; }
        .a36-links-icon { display: flex; width: 36px; height: 36px; flex: none; align-items: center; justify-content: center; border: 1px solid hsl(var(--border)); color: hsl(var(--primary)); transition: transform 190ms ease-out, border-color 190ms ease-out; }
        .a36-links-arrow { transition: transform 190ms ease-out; }
        .a36-links-accent { position: absolute; inset: 0 auto 0 0; width: 2px; background: hsl(var(--accent)); transform: scaleY(.35); transform-origin: center; transition: transform 180ms ease-out, width 180ms ease-out; }
        .a36-links-row:hover, .a36-links-row:focus-visible { transform: translateY(-3px); border-color: hsl(var(--accent)); background: hsl(var(--card) / .78); box-shadow: 0 10px 24px -18px hsl(var(--primary) / .55); }
        .a36-links-event:hover, .a36-links-event:focus-visible { transform: translateY(-3px); box-shadow: 0 12px 26px -18px hsl(var(--primary) / .65); }
        .a36-links-row:hover .a36-links-arrow, .a36-links-event:hover .a36-links-arrow, .a36-links-primary:hover .a36-links-arrow { transform: translateX(4px); }
        .a36-links-row:hover .a36-links-icon { transform: scale(1.04); border-color: hsl(var(--accent)); }
        .a36-links-row:hover .a36-links-accent, .a36-links-row:focus-visible .a36-links-accent, .a36-links-event:hover .a36-links-accent, .a36-links-event:focus-visible .a36-links-accent { transform: scaleY(1); width: 3px; }
        .a36-links-row:active, .a36-links-event:active, .a36-links-primary:active { transform: scale(.985); }
        .a36-links-row:active .a36-links-accent, .a36-links-event:active .a36-links-accent { transform: scaleY(1); width: 4px; }
        .a36-links-page a:focus-visible { box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--accent)); }
        .a36-links-ambient { position: fixed; inset: 0; z-index: -1; overflow: hidden; pointer-events: none; }
        .a36-links-ambient span { position: absolute; width: 72rem; height: 72rem; opacity: .04; filter: blur(90px); background: radial-gradient(circle, hsl(var(--accent)) 0%, transparent 68%); animation: a36AmbientOne 22s ease-in-out infinite alternate; }
        .a36-links-ambient span:first-child { top: -38rem; left: -34rem; }
        .a36-links-ambient span:last-child { right: -42rem; bottom: -38rem; opacity: .035; background: radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--secondary)) 34%, transparent 68%); animation-name: a36AmbientTwo; animation-duration: 27s; }
        @keyframes a36LinksEnter { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes a36AmbientOne { from { transform: translate3d(-2%, -1%, 0) scale(.98); } to { transform: translate3d(6%, 4%, 0) scale(1.04); } }
        @keyframes a36AmbientTwo { from { transform: translate3d(2%, 3%, 0) scale(1); } to { transform: translate3d(-5%, -4%, 0) scale(1.05); } }
        @media (prefers-reduced-motion: reduce) {
          .a36-links-logo, .a36-links-copy, .a36-links-actions, .a36-links-ambient span { animation: none; }
          .a36-links-reveal { opacity: 1; transform: none; transition: opacity 120ms linear; }
          .a36-links-row, .a36-links-event, .a36-links-primary, .a36-links-icon, .a36-links-arrow, .a36-links-accent { transition-duration: 0ms; }
        }
        @media (max-width: 339px) { .a36-links-ambient { display: none; } }
        @supports (-webkit-touch-callout: none) {
          .a36-links-page { min-height: -webkit-fill-available; }
        }
      `}</style>
    </main>
  );
};

export default Links;