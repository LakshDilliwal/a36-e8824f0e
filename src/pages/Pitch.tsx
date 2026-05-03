import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";

const categories = [
  { title: "Infrastructure & Protocol", body: "Layer 1s, Layer 2s, DePIN networks, and foundational protocols" },
  { title: "AI Infrastructure", body: "Compute, data, agents, and AI developer tooling" },
  { title: "Deep Tech & Hardware", body: "Robotics, defense, quantum, biotech, and hard tech" },
  { title: "Community & Talent", body: "Builder networks, accelerators, and distribution infrastructure" },
];

const Pitch = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", website: "", building: "", stage: "", raising: "", oneliner: "", deck: "",
  });

  return (
    <PageWrapper>
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">PITCH TO A36</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Got something<br />worth backing?
          </h1>
          <p className="text-base text-primary/65 mt-6 max-w-[560px]">
            A36 reviews pitches from infrastructure founders. If you're building base-layer technology in Web3, AI, Healthcare, or Finance — we want to hear from you.
          </p>
        </div>
      </section>

      {/* What we back */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <div key={c.title} className="bg-white border border-border p-6">
                <h3 className="font-black text-sm text-primary">{c.title}</h3>
                <p className="text-sm text-muted mt-3">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Form */}
      <section className="bg-background py-24">
        <div className="container max-w-3xl mx-auto px-6 md:px-16">
          <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-primary">Submit Your Pitch</h2>

          {submitted ? (
            <div className="mt-12 bg-accent p-8 text-center">
              <h3 className="font-black text-2xl text-primary">Pitch Submitted.</h3>
              <p className="text-primary/70 mt-2">We read every pitch. Response within 7–14 business days.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-12 space-y-6">
              <input type="text" placeholder="Founder Name" required className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email" required className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="text" placeholder="Project/Company Name" className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              <input type="url" placeholder="Website" className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
              <textarea placeholder="What are you building?" rows={4} className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent resize-none" value={form.building} onChange={(e) => setForm({ ...form, building: e.target.value })} />
              <select className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.stage} onChange={(e) => setForm({ ...form, stage: e.target.value })}>
                <option value="">Stage</option>
                <option>Idea</option><option>Pre-seed</option><option>Seed</option><option>Series A</option><option>Growth</option>
              </select>
              <select className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.raising} onChange={(e) => setForm({ ...form, raising: e.target.value })}>
                <option value="">How much are you raising?</option>
                <option>Not raising</option><option>{"<$100K"}</option><option>$100K–$500K</option><option>$500K–$2M</option><option>$2M+</option>
              </select>
              <input type="text" placeholder="One-liner (max 140 chars)" maxLength={140} className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.oneliner} onChange={(e) => setForm({ ...form, oneliner: e.target.value })} />
              <input type="url" placeholder="Pitch deck or demo link" className="w-full border border-border bg-white px-4 py-3.5 text-primary focus:outline-none focus:border-accent" value={form.deck} onChange={(e) => setForm({ ...form, deck: e.target.value })} />
              <button type="submit" className="btn-primary w-full">SUBMIT PITCH →</button>
            </form>
          )}

          <p className="text-sm text-muted mt-8 text-center">
            We read every pitch. Response within 7–14 business days. —{" "}
            <a href="mailto:hello@a36labs.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">hello@a36labs.com</a>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Pitch;
