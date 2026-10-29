import PageWrapper from "@/components/PageWrapper";
import { A36_LINKS } from "@/config/links";
import { Ghost, Globe, Timer, Trophy, Users, Sparkles, Building2, Handshake } from "lucide-react";

const registerPageUrl = A36_LINKS.strangerBuilds.registerPage;

const facts = [
  { Icon: Globe, label: "FORMAT", value: "Online edition" },
  { Icon: Timer, label: "STARTS", value: "31 October 2026" },
  { Icon: Ghost, label: "DURATION", value: "Seven days" },
  { Icon: Trophy, label: "PRIZES", value: "US$10K in prizes and credits" },
  { Icon: Building2, label: "HOSTED BY", value: "NERDCONF" },
  { Icon: Handshake, label: "A36 LABS", value: "Community Partner" },
];

const StrangerBuilds = () => {
  return (
    <PageWrapper>
      {/* SECTION 1 - HERO */}
      <section className="bg-primary a36-hero-glow a36-tick-corners a36-tick-corners-gold relative py-24 md:py-32">
        <div className="container max-w-5xl mx-auto px-6 md:px-16 relative">
          <p className="eyebrow mb-6">HALLOWEEN HACKATHON · ONLINE EDITION</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">
            Stranger Builds
          </h1>
          <p className="text-base md:text-lg text-white/60 mt-6 max-w-[620px]">
            Seven days to build and find first users. Starts 31 October 2026, with US$10K in prizes and credits.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href={registerPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block bg-accent text-accent-foreground hover:bg-accent/90"
            >
              REGISTER NOW <span className="a36-arrow">→</span>
            </a>
            <span className="text-[12px] text-white/50 font-bold uppercase tracking-[0.1em]">
              Registration requires host approval
            </span>
          </div>
          <p className="text-[13px] text-white/45 mt-6 font-bold">
            Hosted by NERDCONF · A36 Labs is a Community Partner
          </p>
        </div>
        <div className="a36-hairline-gold" />
      </section>

      {/* SECTION 2 - OVERVIEW */}
      <section className="bg-background py-16 md:py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">EVENT OVERVIEW</p>
          <h2 className="font-black text-[32px] md:text-[44px] leading-[1.05] tracking-heading text-primary mb-6 max-w-[720px]">
            Seven days to build and find first users.
          </h2>
          <p className="text-base text-primary/60 max-w-[640px]">
            Stranger Builds is the online Halloween hackathon hosted by NERDCONF, starting 31 October 2026. Builders
            get seven days to build and find first users, competing for US$10K in prizes and credits. A36 Labs is a
            Community Partner.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/10 border border-primary/10 mt-12">
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="bg-background p-6 min-w-0">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-accent shrink-0" aria-hidden="true" />
                  <span className="font-bold text-[11px] uppercase tracking-[0.15em] text-primary/60">{label}</span>
                </div>
                <p className="font-bold text-primary text-base md:text-lg leading-snug">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2 text-primary/60">
            <Users size={16} className="text-accent shrink-0" aria-hidden="true" />
            <p className="text-sm font-bold">Open to builders everywhere — the whole hackathon runs online.</p>
          </div>
          <div className="mt-2 flex items-center gap-2 text-primary/60">
            <Sparkles size={16} className="text-accent shrink-0" aria-hidden="true" />
            <p className="text-sm font-bold">Registration requires host approval.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - REGISTER CTA */}
      <section className="bg-primary py-20 md:py-28 a36-tick-corners a36-tick-corners-gold relative">
        <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center relative">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
            Build something strangers remember.
          </h2>
          <p className="text-base text-white/60 mt-4 max-w-[560px] mx-auto">
            Seven days. US$10K in prizes and credits. Starts 31 October 2026 — online.
          </p>
          <div className="mt-10">
            <a
              href={registerPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block bg-accent text-accent-foreground hover:bg-accent/90"
            >
              REGISTER NOW <span className="a36-arrow">→</span>
            </a>
            <p className="text-[12px] text-white/45 font-bold uppercase tracking-[0.1em] mt-4">
              Registration requires host approval
            </p>
          </div>
        </div>
        <div className="a36-hairline-gold" />
      </section>
    </PageWrapper>
  );
};

export default StrangerBuilds;
