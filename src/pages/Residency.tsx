import PageWrapper from "@/components/PageWrapper";

const LUMA_URL = "https://luma.com/g3oz48ck";
const PARTNER_MAILTO = "mailto:hello@a36labs.com?subject=A36 Residency Partnership";

const phases = [
  { name: "Arrival & Context", body: "Kickoff, introductions, builder onboarding, residency goals, and working context." },
  { name: "Build Mode", body: "Focused shipping blocks, mentor sessions, protocol access, product reviews, and daily founder check-ins." },
  { name: "Demo Day", body: "Founder pitches, partner reviews, investor conversations, and ecosystem demos." },
  { name: "Devconnect Week", body: "Curated access to Mumbai's builder week, side events, meetings, and ecosystem networking." },
  { name: "Closing Mixer", body: "Final reflections, community handoff, partner follow-ups, and next-step support." },
];

const partnerCards = [
  { title: "Sponsor Partner", body: "Support accommodation, food, workspace, grants, builder support, or demo day programming." },
  { title: "Ecosystem Partner", body: "Bring protocol access, mentor sessions, product reviews, grants, bounties, or technical support." },
  { title: "Community Partner", body: "Nominate builders, distribute applications, co-host sessions, and activate your community around the residency." },
  { title: "Media Partner", body: "Cover the residency, interview builders, capture stories, publish recaps, or support founder visibility." },
  { title: "Mentor / Investor", body: "Join office hours, review products, meet selected builders, and support teams with capital, feedback, or intros." },
];

const Residency = () => {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">A36 RESIDENCY</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            A 15-Day Residency for<br />Serious Builders.
          </h1>
          <p className="text-base text-primary/70 mt-6 max-w-[640px]">
            A36 Residency brings selected founders, developers, and operators into one focused environment to ship, collaborate, meet mentors, access ecosystem partners, and build alongside high-conviction peers.
          </p>
          <div className="mt-10 flex flex-col items-start gap-3">
            <a href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">REGISTER ON LUMA →</a>
            <a href="#schedule" className="text-sm text-primary/60 hover:text-primary font-bold uppercase tracking-wider">
              ↓ See what happens inside
            </a>
          </div>
        </div>
      </section>

      {/* Featured Program Card */}
      <section className="bg-warm-cream py-16">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <div className="bg-primary text-white p-8 md:p-12">
            <span className="font-bold text-[10px] uppercase tracking-[0.15em] text-accent">APPLICATIONS OPEN</span>
            <h2 className="font-black text-3xl md:text-4xl mt-3">A36 Global Residency: Mumbai</h2>
            <div className="border-t border-white/10 my-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-white/80">
              <p>📅 October 25 – November 8, 2026</p>
              <p>📍 Mumbai, India</p>
              <p>👥 36 selected builders</p>
              <p>🛏️ Accommodation, food, and workspace covered for accepted builders</p>
            </div>
            <p className="text-sm text-white/60 mt-6">
              Approval required. Every registration is reviewed manually.
            </p>
            <div className="mt-8">
              <a href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">REGISTER ON LUMA →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">WHAT HAPPENS INSIDE</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            15 Days. One Room. Real Output.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
            {phases.map((p, i) => (
              <div key={p.name} className="bg-white border border-border p-5">
                <p className="font-black text-accent text-xs">PHASE {i + 1}</p>
                <h3 className="font-black text-base text-primary mt-2 leading-tight">{p.name}</h3>
                <p className="text-xs text-muted mt-3 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">WHO GETS IN</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Not for Everyone.
          </h2>

          <div className="mt-10 space-y-3">
            {[
              "Builders with a product shipping or close to shipping",
              "Founders at pre-seed or seed stage",
              "Protocol operators and ecosystem leads",
              "Developers building real infrastructure",
            ].map((row) => (
              <div key={row} className="flex items-start gap-3 bg-white border border-border p-4">
                <span className="text-green-600 font-black text-lg leading-none mt-0.5">✓</span>
                <p className="text-sm text-primary">{row}</p>
              </div>
            ))}
            {[
              "No tourists. No spectators.",
              "No idea-stage only applicants.",
            ].map((row) => (
              <div key={row} className="flex items-start gap-3 bg-white border border-border p-4">
                <span className="text-red-600 font-black text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-primary">{row}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">PARTNER WITH THE RESIDENCY</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Support the room where serious builders ship.
          </h2>
          <p className="text-base text-primary/70 mt-6 max-w-[720px]">
            A36 Residency partners help bring together selected builders, ecosystem operators, mentors, funds, communities, and media around one focused 15-day builder environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {partnerCards.map((c) => (
              <div key={c.title} className="bg-white border border-border p-6">
                <h3 className="font-black text-lg text-primary leading-tight">{c.title}</h3>
                <p className="text-sm text-muted mt-3 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href={PARTNER_MAILTO} className="btn-primary inline-block">PARTNER WITH A36 →</a>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-primary py-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow mb-4">SPONSOR THE RESIDENCY</p>
          <h2 className="font-black text-[28px] md:text-[40px] leading-[1.1] tracking-heading text-white max-w-[820px]">
            Residency partners get direct access to 36 selected builders in the A36 ecosystem.
          </h2>
          <p className="text-base text-white/70 mt-6 max-w-[720px]">
            Support the residency, meet high-conviction founders, and build long-term relationships with serious operators across Web3, AI, and emerging tech.
          </p>
          <div className="mt-8">
            <a href={PARTNER_MAILTO} className="btn-primary inline-block">PARTNER WITH A36 →</a>
          </div>

          <p className="text-sm text-white/60 mt-12">
            Partnership packages available. Contact{" "}
            <a href="mailto:hello@a36labs.com" className="font-bold text-white underline">
              hello@a36labs.com
            </a>
          </p>
        </div>
      </section>

      {/* Application via Luma */}
      <section id="apply" className="bg-warm-cream py-24">
        <div className="container max-w-[720px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">APPLY</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Register for A36 Global Residency: Mumbai.
          </h2>
          <p className="text-base text-primary/70 mt-4">
            Applications are handled through Luma. Submit your registration request below. Approval is required and every application is reviewed manually.
          </p>

          <div className="mt-10 w-full mx-auto">
            <p className="text-sm font-bold uppercase tracking-wider text-primary mb-4">
              Complete your registration request inside the Luma form below
            </p>
            <iframe
              src="https://luma.com/embed/event/evt-Xw3tOfbza5zUUKd/simple"
              frameBorder="0"
              style={{ border: "1px solid #bfcbda88", borderRadius: 4 }}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex={0}
              title="A36 Residency registration"
              className="w-full block h-[620px] md:h-[700px] mx-auto"
            />
            <p className="text-sm text-primary/60 mt-6">
              Having trouble with the embed?{" "}
              <a href={LUMA_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-primary underline">
                Open full Luma registration →
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Residency;
