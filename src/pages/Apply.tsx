import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

const paths = [
  {
    label: "FOR BUILDERS",
    title: "A36 Passport",
    body: "Apply to join the A36 builder cohort. Ship real products. Get access to ecosystem resources, capital introductions, and global event rooms.",
    cta: "APPLY AS BUILDER →",
    dark: false,
  },
  {
    label: "FOR PROTOCOLS & SPONSORS",
    title: "List on A36 Earn",
    body: "Post bounties, grants, and job opportunities to A36's builder network. Access curated talent across Web3, AI, and infrastructure.",
    cta: "LIST AN OPPORTUNITY →",
    dark: true,
  },
  {
    label: "FOR COMMUNITIES & FUNDS",
    title: "Become a Partner",
    body: "Co-host events, cross-promote to our builder network, or integrate into the A36 ecosystem as a capital or community partner.",
    cta: "PARTNER WITH US →",
    dark: false,
  },
];

const verticals = ["Web3", "AI", "Healthcare", "Finance", "DePIN", "Infrastructure", "Other"];

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", twitter: "", github: "", role: "", building: "", verticals: [] as string[], workLink: "",
  });

  const toggleVertical = (v: string) => {
    setForm((f) => ({
      ...f,
      verticals: f.verticals.includes(v) ? f.verticals.filter((x) => x !== v) : [...f.verticals, v],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">JOIN A36</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Apply.<br />Get Filtered.<br />Get Access.
          </h1>
          <p className="text-base text-primary/70 mt-6 max-w-[560px]">
            A36 reviews every application. No shortcuts. No exceptions. This is not for everyone.
          </p>
        </div>
      </section>

      {/* Three Paths */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paths.map((p) => (
              <div key={p.title} className={`p-8 ${p.dark ? "bg-primary text-white" : "bg-white border border-border text-primary"}`}>
                <p className="eyebrow mb-3">{p.label}</p>
                <h3 className={`font-black text-xl ${p.dark ? "text-white" : "text-primary"}`}>{p.title}</h3>
                <p className={`text-sm mt-3 ${p.dark ? "text-white/60" : "text-muted"}`}>{p.body}</p>
                <button className="btn-primary mt-6">{p.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-background py-24">
        <div className="container max-w-3xl mx-auto px-6 md:px-16">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Apply for A36 Passport
          </h2>
          <p className="text-muted mt-2">The cohort for infrastructure builders. Applications open.</p>

          {submitted ? (
            <div className="mt-12 bg-accent p-8 text-center">
              <h3 className="font-black text-2xl text-primary">Application Submitted.</h3>
              <p className="text-primary/70 mt-2">We'll review your application and get back to you. Welcome to the process.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <input type="text" placeholder="Full Name" required className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email Address" required className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="text" placeholder="@yourhandle" className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.twitter} onChange={(e) => setForm({ ...form, twitter: e.target.value })} />
              <input type="url" placeholder="GitHub Profile URL" className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.github} onChange={(e) => setForm({ ...form, github: e.target.value })} />
              <select className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
                <option value="">I am a...</option>
                <option>Founder</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Ecosystem Builder</option>
                <option>Investor</option>
                <option>Other</option>
              </select>
              <textarea placeholder="What are you building?" rows={4} className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent resize-none" value={form.building} onChange={(e) => setForm({ ...form, building: e.target.value })} />
              <div>
                <p className="font-bold text-sm text-primary mb-3">Which verticals does your work touch?</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {verticals.map((v) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.verticals.includes(v)} onChange={() => toggleVertical(v)} className="accent-accent" />
                      <span className="text-sm text-primary">{v}</span>
                    </label>
                  ))}
                </div>
              </div>
              <input type="url" placeholder="Link to your work (GitHub, portfolio, or product)" className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.workLink} onChange={(e) => setForm({ ...form, workLink: e.target.value })} />
              <button type="submit" className="btn-primary w-full">SUBMIT APPLICATION →</button>
            </form>
          )}

          <p className="text-sm text-muted mt-8 text-center">
            Not for everyone. For the right ones. —{" "}
            <a href="mailto:partnerships@a36labs.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              partnerships@a36labs.com
            </a>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Apply;
