import { useState } from "react";

const Passport = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    building: "",
    handle: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would submit to backend
    alert("Application submitted. We'll review within 72 hours.");
  };

  return (
    <section id="passport" className="bg-accent py-20">
      <div className="container max-w-5xl mx-auto px-6 md:px-16">
        <p className="font-bold text-[11px] text-primary uppercase tracking-[0.2em] mb-4">
          JOIN THE DOJO
        </p>
        <h2 className="font-black text-[36px] md:text-[48px] leading-[1.05] tracking-heading text-primary">
          Apply.<br />Get Filtered.<br />Get Access.
        </h2>
        <p className="text-base text-primary/75 mt-4 max-w-lg">
          We review every application. No noise tolerated. No exceptions made.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 max-w-[560px] mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-background border-2 border-primary rounded-sm px-4 py-3.5 text-[15px] text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="bg-background border-2 border-primary rounded-sm px-4 py-3.5 text-[15px] text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select
            required
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="bg-background border-2 border-primary rounded-sm px-4 py-3.5 text-[15px] text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>I am a...</option>
            <option>Founder</option>
            <option>Builder</option>
            <option>Developer</option>
            <option>Investor</option>
            <option>University</option>
            <option>Mentor</option>
          </select>
          <textarea
            rows={4}
            placeholder="What are you building? Drop a link."
            value={form.building}
            onChange={(e) => setForm({ ...form, building: e.target.value })}
            className="bg-background border-2 border-primary rounded-sm px-4 py-3.5 text-[15px] text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <input
            type="url"
            placeholder="X / LinkedIn / GitHub handle"
            value={form.handle}
            onChange={(e) => setForm({ ...form, handle: e.target.value })}
            className="bg-background border-2 border-primary rounded-sm px-4 py-3.5 text-[15px] text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-accent font-black uppercase tracking-widest rounded-sm py-[18px] text-sm mt-2 hover:opacity-85 active:scale-[0.98] transition-opacity"
          >
            SUBMIT APPLICATION →
          </button>
          <p className="text-[12px] text-primary/60 text-center mt-1">
            Applications reviewed within 72 hours. Only high-signal founders and builders accepted.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Passport;
