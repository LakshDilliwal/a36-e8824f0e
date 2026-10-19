import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ResidencyLineField, ResidencyStatus } from "@/components/residency/ResidencyVisuals";
import residencyImage from "@/assets/a36-residency-coming-soon.png.asset.json";
import { A36_LINKS } from "@/config/links";

const PARTNER_MAIL = "mailto:partnerships@a36labs.com?subject=A36%20Residency%20Partnership";

const Rise = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <p className={`font-mono text-[10px] uppercase tracking-[0.28em] ${light ? "text-accent" : "text-accent"}`}>
    {children}
  </p>
);

const Hero = () => (
  <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-primary py-20 text-primary-foreground md:min-h-[88vh] md:py-28">
    <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(hsl(var(--accent))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--accent))_1px,transparent_1px)] bg-[size:72px_72px]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_82%_18%,hsl(var(--accent)/0.14),transparent_72%)]" />
    <ResidencyLineField className="pointer-events-none absolute inset-x-0 bottom-0 h-[44%] w-full opacity-50" />

    <div className="container relative z-10 mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
      <Rise>
        <Eyebrow light>A36 RESIDENCY · COMING SOON</Eyebrow>
      </Rise>
      <h1 className="mt-5 max-w-[12ch] font-black leading-[0.98] tracking-tighter text-[clamp(2.75rem,10vw,6.5rem)]">
      {["The right room", "changes what’s", "possible"].map((line, index) => (
          <span key={line} className="block overflow-hidden">
            <motion.span
              className="block"
               initial={window.matchMedia("(prefers-reduced-motion: reduce)").matches ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>
      <Rise delay={0.36} className="max-w-2xl">
        <p className="mt-7 text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-primary-foreground/78">
          A residency for builders, founders and researchers working on ambitious ideas at the edge of technology and culture.
        </p>
        <p className="mt-4 font-bold leading-relaxed text-accent">
          Live together. Build deeply. Leave with something that did not exist before.
        </p>
      </Rise>
      <Rise delay={0.46}>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="btn-gold h-auto min-h-[48px] rounded-none bg-accent px-6 text-accent-foreground hover:bg-accent/90">
            <a href={A36_LINKS.content.substack} target="_blank" rel="noopener noreferrer" className="whitespace-normal text-center">STAY UPDATED VIA A36 SIGNAL <span className="a36-arrow">↗</span></a>
          </Button>
          <Button asChild className="btn-ghost-light h-auto min-h-[48px] rounded-none px-6">
            <a href={PARTNER_MAIL} target="_blank" rel="noopener noreferrer">PARTNER WITH A36 <span className="a36-arrow">→</span></a>
          </Button>
        </div>
      </Rise>
      <Rise delay={0.55}>
        <ResidencyStatus className="mt-10 border-t border-primary-foreground/15 pt-6 text-primary-foreground/60" />
      </Rise>
    </div>
  </section>
);

const PRINCIPLES = [
  ["DEEP WORK", "Time and space to focus on what matters"],
  ["PROXIMITY", "Builders, operators and thinkers under one roof"],
  ["COLLISION", "Unexpected conversations that move ideas forward"],
];

const Idea = () => (
  <section className="bg-background py-20 md:py-32">
    <div className="container mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <Rise className="min-w-0">
        <Eyebrow>THE IDEA</Eyebrow>
        <h2 className="mt-4 max-w-[14ch] font-black leading-[1.03] tracking-tighter text-primary text-[clamp(2rem,7vw,4.5rem)]">
          Get out of the noise<br />Into the room
        </h2>
        <div className="mt-7 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted md:text-lg">
          <p>Ambitious ideas need time, proximity and the right people around them</p>
          <p>A curated environment for serious builders. Space to think deeply, exchange ideas and find momentum</p>
        </div>
      </Rise>
      <Rise delay={0.12} className="min-w-0">
        <figure>
          <div className="aspect-square w-full overflow-hidden border border-border">
            <img src={residencyImage.url} alt="A36 Residency editorial artwork: a modern retreat overlooking the water at golden hour" width="768" height="768" loading="lazy" className="block h-full w-full object-contain" />
          </div>
          <figcaption className="mt-3 flex flex-wrap justify-between gap-2 text-[10px] font-semibold uppercase text-muted">
            <span>A36 RESIDENCY</span><span>{"\n"}</span>
          </figcaption>
        </figure>
      </Rise>
      </div>
      <div className="mt-14 grid border-y border-border md:grid-cols-3">
        {PRINCIPLES.map(([title, copy], index) => (
          <Rise key={title} delay={index * 0.08} className={`min-w-0 py-7 md:px-7 md:py-9 ${index > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}>
            <h3 className="font-black text-lg text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
          </Rise>
        ))}
      </div>
    </div>
  </section>
);

const ROOM_LABELS = [
  ["BUILD", "Work on something real"],
  ["LEARN", "Exchange ideas with people outside your usual circle"],
  ["CONNECT", "Find collaborators, peers and second believers"],
  ["SHIP", "Move the work forward"],
];

const Room = () => (
  <section className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground md:py-32">
    <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(hsl(var(--accent))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--accent))_1px,transparent_1px)] bg-[size:64px_64px]" />
    <ResidencyLineField className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full opacity-30" />
    <div className="container relative z-10 mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
      <Rise>
        <Eyebrow light>THE ROOM</Eyebrow>
        <h2 className="mt-4 max-w-[13ch] font-black leading-[1.03] tracking-tighter text-[clamp(2rem,7vw,4.5rem)]">
          Different minds<br />Shared momentum
        </h2>
        <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/72 md:text-lg">
          {"\n"}
        </p>
      </Rise>
      <div className="mt-14 grid gap-px border border-primary-foreground/15 bg-primary-foreground/15 sm:grid-cols-2">
        {ROOM_LABELS.map(([title, copy], index) => (
          <Rise key={title} delay={index * 0.06} className="min-w-0 bg-primary p-6 md:p-8">
            <h3 className="font-black text-xl text-accent">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/68">{copy}</p>
          </Rise>
        ))}
      </div>
    </div>
  </section>
);

const PEOPLE = [
  ["FOUNDERS", "Building something early, ambitious or unconventional."],
  ["BUILDERS", "Engineers, designers and makers who want to push an idea further."],
  ["RESEARCHERS", "Exploring questions that could become products, systems or new fields."],
  ["OPERATORS", "People creating communities, infrastructure and ecosystems around frontier work."],
];

const WhoItsFor = () => (
  <section className="bg-secondary py-20 md:py-28">
    <div className="container mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
      <Rise>
        <Eyebrow>WHO IT’S FOR</Eyebrow>
        <h2 className="mt-4 font-black leading-[1.04] tracking-tighter text-primary text-[clamp(2rem,7vw,4rem)]">For people already in motion.</h2>
      </Rise>
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
        {PEOPLE.map(([title, copy], index) => (
          <Rise key={title} delay={index * 0.06} className="min-w-0 bg-secondary p-6 md:p-8">
            <h3 className="font-black text-lg text-primary">{title}</h3>
            <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-muted">{copy}</p>
          </Rise>
        ))}
      </div>
    </div>
  </section>
);

const DIFFERENCE = [
  ["FOCUS", "Space to go deeper."],
  ["PEERS", "People who challenge how you think."],
  ["SERENDIPITY", "Room for the unexpected."],
];

const WhyResidency = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="container mx-auto grid w-full max-w-6xl gap-12 px-5 max-[389px]:px-4 md:px-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
      <Rise className="min-w-0">
        <Eyebrow>WHY A RESIDENCY</Eyebrow>
        <h2 className="mt-4 font-black leading-[1.04] tracking-tighter text-primary text-[clamp(2rem,7vw,4rem)]">Less programming.<br />More possibility.</h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-lg">
          A36 Residency is intentionally not built around a public agenda. The structure exists to support the people in the room, not compete with them.
        </p>
      </Rise>
      <div className="min-w-0 border-t border-border">
        {DIFFERENCE.map(([title, copy], index) => (
          <Rise key={title} delay={index * 0.08} className="border-b border-border py-6">
            <h3 className="font-black text-lg text-primary">{title}</h3>
            <p className="mt-1.5 text-sm text-muted">{copy}</p>
          </Rise>
        ))}
      </div>
    </div>
  </section>
);

const Outcomes = () => (
  <section className="bg-primary py-20 text-primary-foreground md:py-28">
    <div className="container mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Rise>
          <Eyebrow light>WHAT YOU LEAVE WITH</Eyebrow>
          <h2 className="mt-4 font-black leading-[1.04] tracking-tighter text-[clamp(2rem,7vw,4rem)]">Something moved forward</h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-primary-foreground/70 md:text-lg">
            That might be a product, a new direction, a collaborator, a company, a research question or simply much greater clarity on what comes next.
          </p>
        </Rise>
        <Rise delay={0.1} className="border-l-2 border-accent pl-6 md:pl-9 lg:self-end">
          <h3 className="font-black leading-[1.08] tracking-tighter text-[clamp(1.7rem,5vw,3rem)]">The residency ends<br />The network stays</h3>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-primary-foreground/70">
            The room is temporary. The relationships, collaborations and work that begin there can continue long after people leave.
          </p>
        </Rise>
      </div>
    </div>
  </section>
);

const SUPPORT = ["VENUE", "INFRASTRUCTURE", "TOOLS", "TRAVEL SUPPORT", "COMMUNITY", "ECOSYSTEM SUPPORT"];

const Partners = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="container mx-auto w-full max-w-6xl px-5 max-[389px]:px-4 md:px-16">
      <Rise>
        <Eyebrow>PARTNERS</Eyebrow>
        <h2 className="mt-4 font-black leading-[1.04] tracking-tighter text-primary text-[clamp(2rem,7vw,4rem)]">Help build the room.</h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted md:text-lg">
          Support the environment through venue, infrastructure, tools, travel support, community and ecosystem support
        </p>
      </Rise>
      <Rise delay={0.1}>
        <ul className="mt-10 grid border-y border-border sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT.map((item, index) => (
            <li key={item} className={`flex min-h-[72px] items-center py-5 font-mono text-[11px] tracking-[0.18em] text-primary/70 sm:px-5 ${index > 0 ? "border-t border-border sm:border-t-0" : ""} ${index > 1 ? "sm:border-t" : ""} ${index % 2 === 1 ? "sm:border-l" : ""} ${index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"} ${index > 2 ? "lg:border-t" : ""}`}>
              {item}
            </li>
          ))}
        </ul>
        <Button asChild className="btn-dark mt-8 h-auto min-h-[48px] rounded-none px-6">
          <a href={PARTNER_MAIL} target="_blank" rel="noopener noreferrer">PARTNER WITH A36 <span className="a36-arrow">→</span></a>
        </Button>
      </Rise>
    </div>
  </section>
);

const FAQS = [
  ["Who is the residency for?", "Serious builders, founders, researchers and operators working on ambitious ideas."],
  ["When and where will it happen?", "DATES COMING SOON · LOCATION COMING SOON."],
  ["How can I stay in the loop?", "Subscribe to A36 Signal on Substack for residency announcements and application updates."],
  ["Can organizations support the residency?", "Yes. Get in touch with A36 to explore supporting the room and the people in it."],
];

const ComingSoon = () => (
  <section id="stay-updated" className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
    <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(hsl(var(--accent))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--accent))_1px,transparent_1px)] bg-[size:72px_72px]" />
    <ResidencyLineField className="pointer-events-none absolute inset-x-0 top-0 h-64 w-full opacity-25" />
    <div className="container relative z-10 mx-auto w-full max-w-4xl px-5 max-[389px]:px-4 md:px-16">
      <Rise>
        <Eyebrow light>THE NEXT ROOM</Eyebrow>
        <h2 className="mt-4 font-black leading-[1.04] tracking-normal text-4xl md:text-6xl">Applications<br />coming soon</h2>
        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/70 md:text-lg">
          The right room is worth waiting for. Stay in the loop with A36 Signal.
        </p>
        <ResidencyStatus className="mt-7 text-primary-foreground/60" />
      </Rise>
      <Rise delay={0.1}>
        <Button asChild className="btn-gold mt-9 h-auto min-h-[52px] max-w-full rounded-none bg-accent px-6 py-4 text-accent-foreground hover:bg-accent/90">
          <a href={A36_LINKS.content.substack} target="_blank" rel="noopener noreferrer" className="whitespace-normal text-center">SUBSCRIBE ON SUBSTACK <span className="a36-arrow">↗</span></a>
        </Button>
        <p className="mt-4 text-xs text-primary-foreground/60">Residency announcements. Application updates. A36 Signal.</p>
      </Rise>
      <Rise delay={0.1}>
        <div className="mt-16 border-t border-primary-foreground/15 pt-10">
          <Eyebrow light>QUESTIONS?</Eyebrow>
          <Accordion type="single" collapsible className="mt-5 w-full">
            {FAQS.map(([question, answer], index) => (
              <AccordionItem key={question} value={`faq-${index}`} className="border-b border-primary-foreground/20">
                <AccordionTrigger className="min-h-[52px] items-start gap-4 py-4 text-left font-bold text-sm hover:no-underline [&>svg]:mt-1 [&>svg]:shrink-0">
                  <span className="min-w-0 flex-1">{question}</span>
                </AccordionTrigger>
                <AccordionContent className="max-w-[68ch] pb-5 text-sm leading-relaxed text-primary-foreground/70">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Rise>
    </div>
  </section>
);

const StickyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
       const updates = document.getElementById("stay-updated");
       const updatesVisible = updates ? updates.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
       setShow(window.scrollY > window.innerHeight * 0.8 && !updatesVisible);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-accent/40 bg-primary/95 px-4 py-3 backdrop-blur-sm transition-transform duration-300 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/80">A36 RESIDENCY</p>
      <Button asChild className="btn-gold h-auto min-h-[44px] rounded-none bg-accent px-5 py-2 text-[11px] text-accent-foreground hover:bg-accent/90">
         <a href={A36_LINKS.content.substack} target="_blank" rel="noopener noreferrer">A36 SIGNAL <span className="a36-arrow">↗</span></a>
      </Button>
    </div>
  );
};

const Residency = () => (
  <PageWrapper>
    <Hero />
    <Idea />
    <Room />
    <WhoItsFor />
    <Outcomes />
    <Partners />
    <ComingSoon />
    <StickyCTA />
  </PageWrapper>
);

export default Residency;