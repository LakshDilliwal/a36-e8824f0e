import PageWrapper from "@/components/PageWrapper";
import { Link } from "react-router-dom";
import { A36_LINKS } from "@/config/links";
import { Ghost, Globe, Timer, Trophy, Building2, Handshake, Zap, Users, Rocket, Sparkles } from "lucide-react";
import shipAsset from "@/assets/stranger/sb-ship.jpg.asset.json";
import firstAppAsset from "@/assets/stranger/sb-first-app.jpg.asset.json";
import welcomeAsset from "@/assets/stranger/sb-welcome.jpg.asset.json";

const registerPageUrl = A36_LINKS.strangerBuilds.registerPage;
const communityUrl = A36_LINKS.site.community;

const facts = [
  { Icon: Timer, label: "STARTS", value: "31 October 2026" },
  { Icon: Globe, label: "FORMAT", value: "Online edition" },
  { Icon: Ghost, label: "DURATION", value: "Seven days" },
  { Icon: Trophy, label: "PRIZES", value: "US$10K in prizes and credits" },
  { Icon: Building2, label: "HOSTED BY", value: "NERDCONF" },
  { Icon: Handshake, label: "A36 LABS", value: "Community Partner" },
];

const reasons = [
  { Icon: Zap, title: "Start strange, ship fast", copy: "Seven days is enough to take your weirdest idea from sketch to something people can actually use." },
  { Icon: Users, title: "Find first users", copy: "The goal isn't a demo that dies on Monday. Build it, ship it, and put it in front of strangers." },
  { Icon: Trophy, title: "Real rewards", copy: "US$10K in prizes and credits — plus an extra US$1,500 pool for the A36 Labs community." },
  { Icon: Globe, title: "Hack from anywhere", copy: "The whole edition runs online. Your desk, your timezone, your spooky season energy." },
];

const timeline = [
  { tag: "NOW", title: "Register", copy: "Apply on the official page. Registration requires host approval." },
  { tag: "31 OCT", title: "Halloween kickoff", copy: "The hackathon opens. Lock in your idea and start building." },
  { tag: "DAYS 1–7", title: "Build & find first users", copy: "Seven days to ship your project and get it in front of real people." },
  { tag: "AFTER", title: "Prizes", copy: "Winners share US$10K in prizes and credits, plus the A36 community bonus." },
];

const floaters = [
  { e: "👻", c: "left-[6%] top-[18%] text-3xl", d: "0s", t: "9s" },
  { e: "🎃", c: "right-[8%] top-[12%] text-4xl", d: "1.5s", t: "11s" },
  { e: "🦇", c: "left-[42%] top-[8%] text-2xl", d: "0.8s", t: "7s" },
  { e: "🛸", c: "right-[22%] bottom-[18%] text-3xl", d: "2s", t: "10s" },
  { e: "✨", c: "left-[18%] bottom-[14%] text-xl", d: "0.4s", t: "6s" },
  { e: "👽", c: "right-[4%] bottom-[40%] text-2xl hidden md:block", d: "3s", t: "12s" },
  { e: "🦇", c: "left-[70%] top-[30%] text-xl hidden md:block", d: "1s", t: "8s" },
];

const stars = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  delay: `${(i % 7) * 0.6}s`,
}));

const Atmosphere = ({ dense = true }: { dense?: boolean }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {stars.slice(0, dense ? 28 : 14).map((s, i) => (
      <span key={i} className="sb-twinkle absolute h-[2px] w-[2px] bg-accent" style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
    ))}
    <div className="sb-orb absolute -left-24 top-1/4 h-72 w-72 bg-accent/20 blur-3xl" />
    <div className="sb-orb absolute -right-24 bottom-0 h-80 w-80 bg-accent/10 blur-3xl" style={{ animationDelay: "3s" }} />
    <div className="sb-fog absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/10 to-transparent" />
    {dense &&
      floaters.map((f, i) => (
        <span key={i} className={`sb-float absolute opacity-40 ${f.c}`} style={{ animationDelay: f.d, animationDuration: f.t }}>
          {f.e}
        </span>
      ))}
  </div>
);

const RegisterButton = ({ label = "REGISTER NOW" }: { label?: string }) => (
  <a
    href={registerPageUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-gold sb-glow inline-block bg-accent text-accent-foreground hover:bg-accent/90"
  >
    {label} <span className="a36-arrow">→</span>
  </a>
);

const StrangerBuilds = () => {
  return (
    <PageWrapper>
      <style>{`
        @keyframes sb-float { 0%,100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-18px) rotate(4deg); } }
        @keyframes sb-twinkle { 0%,100% { opacity: .15; } 50% { opacity: .9; } }
        @keyframes sb-orb { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,-20px) scale(1.1); } }
        @keyframes sb-fog { 0%,100% { opacity: .5; transform: translateX(0); } 50% { opacity: .9; transform: translateX(-3%); } }
        @keyframes sb-beam { 0%,100% { opacity: .35; } 50% { opacity: .7; } }
        .sb-float { animation: sb-float 9s ease-in-out infinite; }
        .sb-twinkle { animation: sb-twinkle 3.5s ease-in-out infinite; }
        .sb-orb { animation: sb-orb 14s ease-in-out infinite; }
        .sb-fog { animation: sb-fog 12s ease-in-out infinite; }
        .sb-beam { animation: sb-beam 4s ease-in-out infinite; }
        .sb-glow { box-shadow: 0 0 0 0 hsl(var(--accent) / 0); transition: box-shadow .3s, transform .3s; }
        .sb-glow:hover { box-shadow: 0 0 32px 4px hsl(var(--accent) / .45); transform: translateY(-2px); }
        .sb-title { text-shadow: 4px 4px 0 hsl(var(--destructive) / .85), 0 0 40px hsl(var(--accent) / .35); }
        .sb-poster { transition: transform .4s, box-shadow .4s; }
        .sb-poster:hover { transform: translateY(-6px) rotate(-.5deg); box-shadow: 0 20px 50px -10px hsl(var(--accent) / .35); }
        @media (prefers-reduced-motion: reduce) {
          .sb-float,.sb-twinkle,.sb-orb,.sb-fog,.sb-beam { animation: none; }
          .sb-poster:hover,.sb-glow:hover { transform: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-36 a36-tick-corners a36-tick-corners-gold">
        <Atmosphere />
        <div className="sb-beam pointer-events-none absolute left-1/2 top-0 h-full w-[40%] -translate-x-1/2 bg-gradient-to-b from-accent/15 via-accent/5 to-transparent [clip-path:polygon(40%_0,60%_0,100%_100%,0_100%)]" aria-hidden="true" />
        <div className="container relative mx-auto max-w-6xl px-6 md:px-16">
          <p className="eyebrow mb-6">🎃 HALLOWEEN HACKATHON · ONLINE EDITION</p>
          <h1 className="sb-title font-black uppercase leading-[0.92] tracking-heading text-accent text-[clamp(48px,11vw,132px)]">
            Stranger
            <br />
            Builds
          </h1>
          <p className="mt-8 max-w-[680px] font-black text-white text-[clamp(22px,3vw,34px)] leading-tight">
            Seven days to ship your weirdest idea.
          </p>
          <p className="mt-4 max-w-[620px] text-base md:text-lg text-white/65">
            Halloween hacking starts now. Build fast, find first users and compete for US$10K in prizes and credits — online, from anywhere.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <RegisterButton />
          </div>
          <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white/45">Registration requires host approval</p>

          <div className="mt-14 grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="min-w-0 bg-primary/90 p-4 md:p-5 backdrop-blur-sm transition-colors hover:bg-white/5">
                <div className="mb-2 flex items-center gap-2">
                  <Icon size={14} className="shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">{label}</span>
                </div>
                <p className="text-sm md:text-base font-bold leading-snug text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="a36-hairline-gold" />
      </section>

      {/* A36 COMMUNITY BONUS */}
      <section className="relative bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6 md:px-16">
          <div className="relative overflow-hidden border-2 border-accent bg-primary p-8 md:p-14 sb-poster">
            <Atmosphere dense={false} />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div className="min-w-0">
                <p className="eyebrow mb-4">✨ EXCLUSIVE · A36 LABS COMMUNITY BONUS</p>
                <h2 className="font-black leading-[1.02] tracking-heading text-white text-[clamp(28px,4.5vw,52px)]">
                  An additional <span className="text-accent">$1,500 prize pool</span> for the A36 Labs community
                </h2>
                <p className="mt-5 max-w-[560px] text-base text-white/65">
                  Builders from the A36 Labs community get access to an extra $1,500 in prizes on top of the main Stranger Builds rewards.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <RegisterButton />
                      </div>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <span className="font-black leading-none text-accent text-[clamp(64px,10vw,128px)] sb-title">$1.5K</span>
                <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Extra · A36 community only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW + SPOTLIGHT */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center md:px-16">
          <div className="min-w-0">
            <p className="eyebrow-dark mb-4">EVENT OVERVIEW</p>
            <h2 className="mb-6 font-black leading-[1.05] tracking-heading text-primary text-[clamp(30px,4vw,48px)]">
              Hack the season.
            </h2>
            <p className="text-base text-primary/65">
              Stranger Builds is the online Halloween hackathon hosted by NERDCONF, starting 31 October 2026. Builders get seven days
              to build and find first users, competing for US$10K in prizes and credits. A36 Labs joins as a Community Partner —
              and brings an extra prize pool for our builders.
            </p>
          </div>
          <figure className="sb-poster min-w-0 border-2 border-primary">
            <img src={shipAsset.url} alt="Stranger Builds poster: Ship to strangers." className="block h-auto w-full" loading="lazy" width={1600} height={900} />
          </figure>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <Atmosphere dense={false} />
        <div className="container relative mx-auto max-w-6xl px-6 md:px-16">
          <p className="eyebrow mb-4">WHY JOIN</p>
          <h2 className="mb-12 max-w-[720px] font-black leading-[1.05] tracking-heading text-white text-[clamp(30px,4vw,48px)]">
            Build something strangers remember.
          </h2>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {reasons.map(({ Icon, title, copy }) => (
              <div key={title} className="group min-w-0 bg-primary p-7 transition-colors hover:bg-white/5">
                <Icon size={22} className="mb-4 text-accent transition-transform group-hover:scale-110" aria-hidden="true" />
                <h3 className="mb-2 text-lg font-black text-white">{title}</h3>
                <p className="text-sm text-white/60">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMAT / TIMELINE */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6 md:px-16">
          <p className="eyebrow-dark mb-4">FORMAT</p>
          <h2 className="mb-12 font-black leading-[1.05] tracking-heading text-primary text-[clamp(30px,4vw,48px)]">
            Seven days. One strange build.
          </h2>
          <ol className="grid gap-px border border-primary/10 bg-primary/10 md:grid-cols-4">
            {timeline.map((step, i) => (
              <li key={step.title} className="relative min-w-0 bg-background p-6">
                <span className="mb-4 inline-block bg-accent px-2 py-1 text-[11px] font-black tracking-[0.15em] text-accent-foreground">{step.tag}</span>
                <p className="mb-1 text-[11px] font-bold text-primary/40">0{i + 1}</p>
                <h3 className="mb-2 text-lg font-black text-primary">{step.title}</h3>
                <p className="text-sm text-primary/60">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PRIZES */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6 md:px-16">
          <p className="eyebrow-dark mb-4">PRIZES</p>
          <h2 className="mb-12 font-black leading-[1.05] tracking-heading text-primary text-[clamp(30px,4vw,48px)]">What's on the table.</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="sb-poster min-w-0 border-2 border-primary bg-background p-8">
              <Trophy className="mb-4 text-accent" aria-hidden="true" />
              <p className="font-black text-primary text-[clamp(44px,6vw,72px)] leading-none">US$10K</p>
              <p className="mt-3 font-bold text-primary">Main prize pool</p>
              <p className="mt-1 text-sm text-primary/60">Prizes and credits across the Stranger Builds hackathon.</p>
            </div>
            <div className="sb-poster min-w-0 border-2 border-accent bg-primary p-8">
              <Sparkles className="mb-4 text-accent" aria-hidden="true" />
              <p className="font-black text-accent text-[clamp(44px,6vw,72px)] leading-none">+$1,500</p>
              <p className="mt-3 font-bold text-white">A36 Labs community bonus</p>
              <p className="mt-1 text-sm text-white/60">An additional prize pool for builders from the A36 Labs community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative overflow-hidden bg-primary py-16 md:py-24">
        <Atmosphere dense={false} />
        <div className="container relative mx-auto max-w-6xl px-6 md:px-16">
          <p className="eyebrow mb-4">📼 CAMPAIGN MEDIA</p>
          <h2 className="mb-12 font-black leading-[1.05] tracking-heading text-white text-[clamp(30px,4vw,48px)]">From the Stranger Builds files.</h2>
          <div className="grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-start">
            <figure className="sb-poster min-w-0 border-2 border-accent">
              <img src={welcomeAsset.url} alt="Stranger Builds: A36 Labs welcomed as a new nerd community." className="block aspect-square h-auto w-full object-cover" loading="lazy" width={680} height={680} />
              <figcaption className="bg-accent px-4 py-2 text-[11px] font-black tracking-[0.15em] text-accent-foreground">A36 LABS × STRANGER BUILDS</figcaption>
            </figure>
            <div className="grid min-w-0 gap-6">
              <figure className="sb-poster min-w-0 border-2 border-white/20">
                <img src={firstAppAsset.url} alt="Stranger Builds poster: Your first app starts Saturday." className="block h-auto w-full" loading="lazy" width={1600} height={900} />
                <figcaption className="px-4 py-2 text-[11px] font-bold tracking-[0.15em] text-white/50">POSTER 02 · YOUR FIRST APP STARTS SATURDAY</figcaption>
              </figure>
              <figure className="sb-poster min-w-0 border-2 border-white/20">
                <img src={shipAsset.url} alt="Stranger Builds poster: Ship to strangers." className="block h-auto w-full" loading="lazy" width={1600} height={900} />
                <figcaption className="px-4 py-2 text-[11px] font-bold tracking-[0.15em] text-white/50">POSTER 01 · SHIP TO STRANGERS</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-background py-20 md:py-28">
        <div className="container relative mx-auto max-w-5xl px-6 text-center md:px-16">
          <Rocket className="mx-auto mb-6 text-accent" size={32} aria-hidden="true" />
          <h2 className="font-black leading-[1.02] tracking-heading text-primary text-[clamp(34px,5.5vw,64px)]">Start strange. Ship fast.</h2>
          <p className="mx-auto mt-4 max-w-[560px] text-base text-primary/60">
            Seven days. US$10K in prizes and credits, plus $1,500 extra for the A36 community. Starts 31 October 2026 — online.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <RegisterButton />
            <Link
              to={communityUrl}
              className="inline-block border-2 border-primary px-6 py-3 font-bold text-[13px] uppercase tracking-[0.1em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              JOIN A36 COMMUNITY <span className="a36-arrow">→</span>
            </Link>
          </div>
          <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.1em] text-primary/45">Registration requires host approval</p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default StrangerBuilds;
