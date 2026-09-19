import { useEffect, type ElementType, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  CircleUserRound,
  Disc3,
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
import Logo from "@/components/Logo";
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
  { label: "WhatsApp", description: "Regional updates and local groups", href: A36_LINKS.community.whatsapp, icon: MessageCircle, external: true },
  { label: "Telegram", description: "Global discussion and announcements", href: A36_LINKS.community.telegram, icon: Send, external: true },
  { label: "Discord", description: "Builders, opportunities and deeper collaboration", href: A36_LINKS.community.discord, icon: Radio, external: true },
  { label: "Community page", description: "Explore the A36 builder network", href: A36_LINKS.site.community, icon: Users },
];

const socialLinks: HubLink[] = [
  { label: "X", href: A36_LINKS.social.x, icon: XIcon, external: true },
  { label: "LinkedIn", href: A36_LINKS.social.linkedin, icon: Linkedin, external: true },
  { label: "Instagram", href: A36_LINKS.social.instagram, icon: Instagram, external: true },
  { label: "YouTube", href: A36_LINKS.social.youtube, icon: Youtube, external: true },
];

const contentLinks: HubLink[] = [
  { label: "A36 Signal", description: "Weekly signal for serious builders", href: A36_LINKS.site.newsletter, icon: Newspaper },
  { label: "A36 Signal on Substack", description: "Read the latest dispatch", href: A36_LINKS.content.substack, icon: ArrowUpRight, external: true },
  { label: "Base Layer", description: "Long-form conversations with builders and operators", href: A36_LINKS.site.podcast, icon: Mic2 },
  { label: "Media Kit", description: "Official A36 brand and press resources", href: A36_LINKS.site.mediaKit, icon: FileText },
];

const workLinks: HubLink[] = [
  { label: "A36 Earn", description: "Curated ecosystem opportunities", href: A36_LINKS.site.earn, icon: BriefcaseBusiness },
  { label: "Residency", description: "The flagship global builder residency", href: A36_LINKS.site.residency, icon: CircleUserRound },
  { label: "Cohort", description: "Structured programs for emerging builders", href: A36_LINKS.site.cohort, icon: Users },
  { label: "Careers", description: "Build the A36 ecosystem with us", href: A36_LINKS.site.careers, icon: BriefcaseBusiness },
  { label: "Partner With A36", description: "Collaborate with the A36 network", href: A36_LINKS.applications.partner, icon: ArrowUpRight, external: true },
  { label: "Apply as an Operator", description: "Support A36 programs and operations", href: A36_LINKS.applications.operator, icon: ArrowUpRight, external: true },
];

const LinkRow = ({ item, compact = false }: { item: HubLink; compact?: boolean }) => {
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
  const className = `a36-links-row group relative flex min-h-[60px] items-center overflow-hidden border border-border bg-card py-3 focus-visible:outline-none ${compact ? "gap-2 px-3 sm:min-h-[56px]" : "gap-3 px-4"}`;

  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>{body}</a>
  ) : (
    <Link to={item.href} className={className}>{body}</Link>
  );
};

const HubSection = ({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) => (
  <section className="a36-links-reveal mt-12" data-links-reveal>
    <p className="eyebrow-dark mb-2">{eyebrow}</p>
    <h2 className="text-[26px] font-black leading-tight text-primary">{title}</h2>
    <div className="mt-5 space-y-2.5">{children}</div>
  </section>
);

const Links = () => {
  useEffect(() => {
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
      <div className="mx-auto w-full max-w-[580px] px-5 pb-[calc(32px+env(safe-area-inset-bottom))] pt-[calc(32px+env(safe-area-inset-top))] min-[390px]:px-6 sm:pt-12">
        <header className="a36-links-intro border-b border-border pb-8">
          <Link to="/" aria-label="A36 Labs — Home" className="inline-flex min-h-11 items-center">
            <Logo className="!h-auto !w-[92px]" />
          </Link>
          <p className="eyebrow-dark mt-6">A36 LABS</p>
          <h1 className="mt-3 text-[34px] font-black leading-[1.04] text-primary min-[390px]:text-[38px] sm:text-[44px]">
            Where serious builders operate.
          </h1>
          <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-primary/70">
            Community, events, opportunities, content and ways to work with A36.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted">
            <span className="text-primary normal-case tracking-[0.04em]">a36labs.com</span>
            <span aria-hidden="true">/</span>
            <span>Global Builder Ecosystem</span>
          </div>
        </header>

        <div className="a36-links-actions mt-6">
          <a href={A36_LINKS.community.whatsapp} target="_blank" rel="noopener noreferrer" className="a36-links-primary group flex min-h-[58px] w-full items-center justify-between bg-accent px-5 py-3 text-sm font-black uppercase text-accent-foreground focus-visible:outline-none">
            <span>Join the community</span><ArrowUpRight className="a36-links-arrow" size={20} aria-hidden="true" />
          </a>
          <Link to={A36_LINKS.site.home} className="mt-2 flex min-h-12 w-full items-center justify-center border border-primary px-5 py-3 text-xs font-black uppercase text-primary hover:bg-primary hover:text-primary-foreground">
            Explore A36 →
          </Link>
        </div>

        <HubSection eyebrow="COMMUNITY" title="Join the network.">
          {communityLinks.map((item) => <LinkRow key={item.label} item={item} />)}
        </HubSection>

        <HubSection eyebrow="SOCIAL" title="Follow A36.">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {socialLinks.map((item) => <LinkRow key={item.label} item={item} compact />)}
          </div>
        </HubSection>

        <HubSection eyebrow="CONTENT" title="Read. Watch. Listen.">
          {contentLinks.map((item) => <LinkRow key={item.label} item={item} />)}
        </HubSection>

        <HubSection eyebrow="EVENTS" title="Meet A36 IRL.">
          <a href={A36_LINKS.events.calendar} target="_blank" rel="noopener noreferrer" className="a36-links-event group relative flex min-h-[74px] items-center gap-4 overflow-hidden border border-accent bg-primary px-5 py-4 text-primary-foreground focus-visible:outline-none">
            <span className="a36-links-accent" aria-hidden="true" />
            <CalendarDays className="shrink-0 text-accent" size={22} aria-hidden="true" />
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-accent">Upcoming events</span>
              <span className="mt-1 block text-sm font-black">View the A36 calendar</span>
            </span>
            <ArrowUpRight className="a36-links-arrow shrink-0" size={19} aria-hidden="true" />
          </a>
        </HubSection>

        <HubSection eyebrow="WORK WITH A36" title="Build with us.">
          {workLinks.map((item) => <LinkRow key={item.label} item={item} />)}
        </HubSection>

        <footer className="a36-links-reveal mt-14 border-t border-border pt-8" data-links-reveal>
          <Logo className="!h-auto !w-[74px]" />
          <p className="mt-4 text-sm font-black">A36 Labs</p>
          <p className="mt-1 text-xs text-muted">The Home of Serious Builders</p>
          <a href="https://www.a36labs.com" className="mt-4 inline-flex min-h-11 items-center text-xs font-bold text-primary hover:text-muted">a36labs.com</a>
          <div className="mt-3 flex gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="flex h-11 w-11 items-center justify-center border border-border text-primary hover:border-accent hover:bg-card">
                  <Icon size={17} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
          <p className="mt-7 text-[10px] uppercase tracking-[0.12em] text-muted">© 2026 A36 Labs</p>
        </footer>
      </div>

      <style>{`
        .a36-links-intro { animation: a36LinksEnter 340ms cubic-bezier(.22,1,.36,1) 60ms both; }
        .a36-links-actions { animation: a36LinksEnter 360ms cubic-bezier(.22,1,.36,1) 160ms both; }
        .a36-links-reveal { opacity: 0; transform: translateY(8px); transition: opacity 340ms cubic-bezier(.22,1,.36,1), transform 340ms cubic-bezier(.22,1,.36,1); }
        .a36-links-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .a36-links-row, .a36-links-event { transition: transform 190ms ease-out, border-color 190ms ease-out, background-color 190ms ease-out; }
        .a36-links-icon { display: flex; width: 36px; height: 36px; flex: none; align-items: center; justify-content: center; border: 1px solid hsl(var(--border)); color: hsl(var(--primary)); transition: transform 190ms ease-out, border-color 190ms ease-out; }
        .a36-links-arrow { transition: transform 190ms ease-out; }
        .a36-links-accent { position: absolute; inset: 0 auto 0 0; width: 2px; background: hsl(var(--accent)); transform: scaleY(.35); transform-origin: center; transition: transform 160ms ease-out; }
        .a36-links-row:hover { transform: translateY(-2px); border-color: hsl(var(--accent)); background: hsl(var(--card) / .72); }
        .a36-links-row:hover .a36-links-arrow, .a36-links-event:hover .a36-links-arrow, .a36-links-primary:hover .a36-links-arrow { transform: translateX(4px); }
        .a36-links-row:hover .a36-links-icon { transform: scale(1.04); border-color: hsl(var(--accent)); }
        .a36-links-row:hover .a36-links-accent, .a36-links-event:hover .a36-links-accent { transform: scaleY(1); }
        .a36-links-row:active, .a36-links-event:active, .a36-links-primary:active { transform: scale(.985); }
        .a36-links-row:active .a36-links-accent, .a36-links-event:active .a36-links-accent { transform: scaleY(1); }
        @keyframes a36LinksEnter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) {
          .a36-links-intro, .a36-links-actions { animation: none; }
          .a36-links-reveal { opacity: 1; transform: none; transition: opacity 120ms linear; }
          .a36-links-row, .a36-links-event, .a36-links-primary, .a36-links-icon, .a36-links-arrow, .a36-links-accent { transition-duration: 0ms; }
        }
        @supports (-webkit-touch-callout: none) {
          .a36-links-page { min-height: -webkit-fill-available; }
        }
      `}</style>
    </main>
  );
};

export default Links;