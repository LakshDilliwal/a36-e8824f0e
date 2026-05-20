import PageWrapper from "@/components/PageWrapper";

const WHATSAPP_URL = "https://chat.whatsapp.com/CdyFYIzDSMj17jWfGJGtkw";
const TELEGRAM_URL = "https://t.me/+sqfR_6vZCdZhY2Fl";
const DISCORD_URL = "https://discord.gg/Ha5yvx3R";
const SUBSTACK_URL = "https://a36signal.substack.com/";
const LUMA_URL = "https://luma.com/a36";

const layers = [
  { title: "Public Signal", body: "Newsletter, podcast, events, and public updates for the wider ecosystem." },
  { title: "Regional Hubs", body: "WhatsApp groups for local events, meetups, workshops, and city chapters." },
  { title: "Builder Network", body: "Telegram and Discord spaces for serious builders, founders, developers, and operators." },
  { title: "High-Trust Rooms", body: "Private groups for residency cohorts, partners, mentors, investors, and ecosystem operators." },
];

const access = [
  "Curated opportunities through A36 Earn",
  "Event and residency access",
  "Builder introductions",
  "Private discussions",
  "Partner and mentor access",
  "Weekly A36 Signal drops",
  "Regional community hubs",
  "Proof-of-work visibility",
];

const channels = [
  { name: "WhatsApp", body: "For regional hubs, event updates, and fast announcements.", cta: "Join WhatsApp →", href: WHATSAPP_URL },
  { name: "Telegram", body: "For global public discussion and community updates.", cta: "Join Telegram →", href: TELEGRAM_URL },
  { name: "Discord", body: "For structured builder channels, cohorts, opportunities, and private rooms.", cta: "Join Discord →", href: DISCORD_URL },
  { name: "A36 Signal", body: "Weekly alpha drops, opportunities, grants, events, and ecosystem updates.", cta: "Subscribe →", href: SUBSTACK_URL },
  { name: "A36 Events", body: "Upcoming events, meetups, workshops, founder connects, and residency programs.", cta: "View Events →", href: LUMA_URL },
  { name: "Socials", body: "Follow A36 across public channels — X, LinkedIn, and Instagram.", cta: "Follow A36 →", href: "https://x.com/A36Labs" },
];

const whoFor = [
  "Founders building products",
  "Developers shipping real work",
  "Operators growing ecosystems",
  "Researchers and technical writers",
  "Community leads and city hosts",
  "Protocol contributors",
  "Early-stage startup teams",
];

const rules = [
  "No spam, shilling, or referral farming",
  "No fake airdrops, pump groups, or low-quality promotions",
  "Share proof of work, not hype",
  "No cold DMs without permission",
  "Opportunities must include source, deadline, eligibility, and link",
  "Admins may remove posts or members to protect signal",
];

const Ext = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
);

const Community = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="bg-background py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-6">A36 NETWORK</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          The Private Network<br />for Serious Builders.
        </h1>
        <p className="text-base text-primary/70 mt-6 max-w-[640px]">
          A36 Network connects founders, developers, operators, researchers, community leads, and ecosystem partners across Web3, AI, and emerging tech. Built for signal, access, opportunities, and real-world collaboration.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Ext href={WHATSAPP_URL} className="btn-primary inline-block">JOIN THE NETWORK →</Ext>
          <a href="/earn" className="btn-ghost inline-block">EXPLORE A36 EARN →</a>
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="bg-warm-cream py-20">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">HOW IT WORKS</p>
        <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">One Network. Multiple Access Layers.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {layers.map((l) => (
            <div key={l.title} className="bg-background border border-primary/10 p-8">
              <h3 className="font-black text-xl text-primary">{l.title}</h3>
              <p className="text-sm text-primary/70 mt-3">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Member Access */}
    <section className="bg-background py-20">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">MEMBER ACCESS</p>
        <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">Built for access, not noise.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {access.map((a) => (
            <div key={a} className="border border-primary/15 p-5 text-sm text-primary font-bold">{a}</div>
          ))}
        </div>
      </div>
    </section>

    {/* Join the Network */}
    <section className="bg-warm-cream py-20">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">JOIN THE NETWORK</p>
        <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">Choose your access layer.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {channels.map((c) => (
            <div key={c.name} className="bg-background border border-primary/10 p-8 flex flex-col">
              <h3 className="font-black text-xl text-primary">{c.name}</h3>
              <p className="text-sm text-primary/70 mt-3 flex-1">{c.body}</p>
              <Ext href={c.href} className="mt-6 text-sm font-bold uppercase tracking-wider text-accent hover:text-primary">
                {c.cta}
              </Ext>
              {c.name === "Socials" && (
                <div className="mt-3 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider text-primary/60">
                  <Ext href="https://x.com/A36Labs" className="hover:text-primary">X</Ext>
                  <Ext href="https://www.linkedin.com/company/a36labs/" className="hover:text-primary">LinkedIn</Ext>
                  <Ext href="https://www.instagram.com/a36labs/" className="hover:text-primary">Instagram</Ext>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Who it's for */}
    <section className="bg-background py-20">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">WHO IT'S FOR</p>
        <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">Who belongs in A36 Network.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {whoFor.map((w) => (
            <div key={w} className="border-l-4 border-accent pl-4 py-2 text-base text-primary font-bold">{w}</div>
          ))}
        </div>
      </div>
    </section>

    {/* Signal Rules */}
    <section className="bg-warm-cream py-20">
      <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">SIGNAL RULES</p>
        <h2 className="font-black text-3xl md:text-5xl text-primary tracking-heading">Spam-free by design.</h2>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {rules.map((r) => (
            <li key={r} className="bg-background border border-primary/10 p-5 text-sm text-primary/80">{r}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* Final CTA */}
    <section className="bg-primary py-20">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <h2 className="font-black text-3xl md:text-5xl text-white tracking-heading">
          Join the network where serious builders operate.
        </h2>
        <p className="text-base text-white/60 mt-4 max-w-[640px]">
          Start with the public network. Deeper access opens through contribution, proof-of-work, events, and residency programs.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Ext href={WHATSAPP_URL} className="btn-primary inline-block">JOIN WHATSAPP →</Ext>
          <Ext href={DISCORD_URL} className="inline-block border-2 border-white text-white font-bold uppercase tracking-wider px-6 py-3 hover:bg-white hover:text-primary transition-colors">
            JOIN DISCORD →
          </Ext>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Community;
