import PageWrapper from "@/components/PageWrapper";

const team = [
  { name: "Laksh Dilliwal", role: "Founder & Ecosystem Lead", bio: "Builder. Ecosystem operator. Has hosted 120+ events across India, Dubai, and Singapore.", twitter: "@laksh_xyz" },
  { name: "Team Member", role: "Developer Relations", bio: "Full-stack developer and Web3 protocol specialist.", twitter: "@handle" },
  { name: "Team Member", role: "Community & Events", bio: "Community architect and global event organizer.", twitter: "@handle" },
  { name: "Team Member", role: "Operations", bio: "Operator. Systems builder. Keeps A36 running at scale.", twitter: "@handle" },
];

const advisors = ["Advisor One", "Advisor Two", "Advisor Three", "Advisor Four", "Advisor Five", "Advisor Six"];

const Team = () => (
  <PageWrapper>
    <section className="bg-background py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-6">THE TEAM</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          The operators<br />behind A36.
        </h1>
        <p className="text-base text-primary/65 mt-6 max-w-[560px]">
          A36 is run by ecosystem builders who have been in the room. No advisors-on-paper. No logos-for-optics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {team.map((m) => (
            <div key={m.name + m.role} className="bg-white border border-border p-6 flex gap-6">
              <div className="w-[120px] h-[120px] bg-[#E5D5C0] flex-shrink-0" />
              <div>
                <h3 className="font-black text-lg text-primary">{m.name}</h3>
                <p className="text-accent font-bold text-xs uppercase tracking-wider mt-1">{m.role}</p>
                <p className="text-sm text-muted mt-3">{m.bio}</p>
                <a href={`https://x.com/${m.twitter.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-bold mt-2 inline-block hover:underline">
                  {m.twitter}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Advisors */}
    <section className="bg-warm-cream py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-4">ADVISORS</p>
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
          The network behind the lab.
        </h2>
        <div className="flex flex-wrap gap-3 mt-8">
          {advisors.map((a) => (
            <span key={a} className="bg-primary text-white font-bold text-sm px-4 py-2">{a}</span>
          ))}
        </div>
      </div>
    </section>

    {/* Join CTA */}
    <section className="bg-primary py-24">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
          Want to build A36 with us?
        </h2>
        <p className="text-base text-white/60 mt-4">We're looking for ecosystem operators, developers, and community builders.</p>
        <div className="mt-10">
          <a href="mailto:partnerships@a36labs.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
            REACH OUT →
          </a>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Team;
