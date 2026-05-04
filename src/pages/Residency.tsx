import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";
import { allVerticals } from "@/lib/verticals";

const days = [
  { day: "Day 1", date: "Oct 29", title: "CHECK-IN + CONTEXT", body: "Who's in the summit. What everyone is building. A36 orientation and vertical pairing." },
  { day: "Day 2", date: "Oct 30", title: "DEEP DIVES", body: "Vertical workshops across A36's tech domains. Mentor sessions. Protocol introductions." },
  { day: "Day 3", date: "Oct 31", title: "BUILD DAY", body: "No meetings. No panels. Just builders shipping for 12 hours straight." },
  { day: "Day 4", date: "Nov 1", title: "CAPITAL DAY", body: "Investor 1:1 speed meetings. Protocol partnership intros. GTM conversations." },
  { day: "Day 5", date: "Nov 2", title: "DEMO + DINNER", body: "Closed-summit demos to investors and mentors. Builder graduation dinner. End of sprint." },
];

const Residency = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", building: "", url: "", why: "", vertical: "",
  });

  const handle = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">RESIDENCY</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            The 5-Day Sprint for<br />Serious Builders.
          </h1>
          <p className="text-base text-primary/70 mt-6 max-w-[640px]">
            Not a conference. Not a bootcamp. A closed summit where 20 selected builders spend 5 days shipping, connecting with investors, and going deep with ecosystem operators.
          </p>
          <div className="mt-10 flex flex-col items-start gap-3">
            <a href="#apply" className="btn-primary inline-block">APPLY FOR OCT–NOV 2026 →</a>
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
            <span className="font-bold text-[10px] uppercase tracking-[0.15em] text-accent">UPCOMING · APPLICATIONS OPEN</span>
            <h2 className="font-black text-3xl md:text-4xl mt-3">A36 Residency</h2>
            <div className="border-t border-white/10 my-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-white/80">
              <p>📅 October 29 – November 2, 2026</p>
              <p>📍 Mumbai, India</p>
              <p>👥 20 builders · Invite-selected application</p>
              <p>💰 Free for accepted builders · Fully sponsored</p>
            </div>
            <p className="text-sm text-white/60 mt-6">
              Co-located with a major global tech event, Mumbai.
            </p>
            <div className="mt-8">
              <a href="#apply" className="btn-primary inline-block">APPLY NOW →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-background py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">WHAT HAPPENS INSIDE</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Five Days. One Room. Real Output.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
            {days.map((d) => (
              <div key={d.day} className="bg-white border border-border p-5">
                <p className="font-black text-accent text-xs">{d.day}, {d.date}</p>
                <h3 className="font-black text-base text-primary mt-2 leading-tight">{d.title}</h3>
                <p className="text-xs text-muted mt-3 leading-relaxed">{d.body}</p>
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
              'No "idea-stage only" applicants.',
            ].map((row) => (
              <div key={row} className="flex items-start gap-3 bg-white border border-border p-4">
                <span className="text-red-600 font-black text-lg leading-none mt-0.5">✗</span>
                <p className="text-sm text-primary">{row}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-primary py-24">
        <div className="container max-w-[1100px] mx-auto px-6 md:px-16">
          <p className="eyebrow mb-4">PRESENTED BY</p>
          <h2 className="font-black text-[28px] md:text-[40px] leading-[1.1] tracking-heading text-white max-w-[720px]">
            Residency sponsors get direct access to 20 of the most serious builders in the ecosystem.
          </h2>
          <div className="mt-8">
            <Link to="/apply" className="btn-primary inline-block">SPONSOR THE RESIDENCY →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-2 border-dashed border-white/20 p-12 text-center">
                <p className="text-xs font-bold text-white/40 uppercase tracking-wider">Your brand here</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-white/60 mt-8">
            Sponsorship packages available. Contact hello@a36labs.com
          </p>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="bg-warm-cream py-24">
        <div className="container max-w-2xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-4">APPLY</p>
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">
            Apply for October–November 2026.
          </h2>
          <p className="text-base text-primary/70 mt-4">
            Applications are reviewed manually. We accept 20 builders per cohort. All verticals welcome.
          </p>

          {submitted ? (
            <div className="bg-primary text-white p-8 mt-10">
              <h3 className="font-black text-2xl text-accent">Application received.</h3>
              <p className="text-white/70 mt-2">We'll review and respond within 7–14 business days. Questions? hello@a36labs.com</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-10 space-y-4 bg-white border border-border p-8"
            >
              <input required value={form.name} onChange={handle("name")} placeholder="Full name" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent" />
              <input required type="email" value={form.email} onChange={handle("email")} placeholder="Email address" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent" />
              <input required value={form.building} onChange={handle("building")} placeholder="What are you building?" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent" />
              <input required type="url" value={form.url} onChange={handle("url")} placeholder="GitHub, portfolio, or product URL" className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent" />
              <textarea required value={form.why} onChange={handle("why")} placeholder="Why do you want to join this residency? (200 words max)" rows={5} className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none" />
              <select required value={form.vertical} onChange={handle("vertical")} className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent">
                <option value="">Primary vertical</option>
                {allVerticals.map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
              <button type="submit" className="btn-primary w-full">SUBMIT APPLICATION →</button>
              <p className="text-xs text-muted text-center mt-2">Questions? Email hello@a36labs.com</p>
            </form>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Residency;
