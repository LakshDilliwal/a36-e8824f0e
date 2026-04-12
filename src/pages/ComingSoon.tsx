import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

const ComingSoonPage = ({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) => {
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  return (
    <PageWrapper>
      <section className="bg-primary min-h-[80vh] flex items-center">
        <div className="container max-w-3xl mx-auto px-6 md:px-16 text-center py-24">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-white">{title}</h1>
          <p className="text-base text-white/60 mt-6 max-w-[480px] mx-auto">{body}</p>
          <div className="mt-10 max-w-[400px] mx-auto">
            {notified ? (
              <p className="text-accent font-bold">You'll be the first to know.</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setNotified(true); }} className="flex">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required className="flex-grow bg-dark-card border border-[#374151] text-white placeholder:text-white/40 px-4 py-3.5 focus:outline-none" />
                <button type="submit" className="btn-gold px-6 py-3.5">NOTIFY ME →</button>
              </form>
            )}
          </div>
          <Link to="/" className="text-white/60 hover:text-white text-sm mt-8 inline-block">← Back to Home</Link>
        </div>
      </section>
    </PageWrapper>
  );
};

export const Residency = () => (
  <ComingSoonPage
    eyebrow="A36 RESIDENCY"
    title="Coming Soon."
    body="A36 Residency is a focused builder sprint for infrastructure founders. Limited seats. By application only."
  />
);

export const Fellowship = () => (
  <ComingSoonPage
    eyebrow="A36 FELLOWSHIP"
    title="Coming Soon."
    body="The A36 Fellowship is for ecosystem operators and researchers building foundational knowledge in Web3 and AI infrastructure."
  />
);

export const Books = () => (
  <ComingSoonPage
    eyebrow="A36 BOOKS"
    title="Coming Soon."
    body="Curated reading lists and original publications for infrastructure builders. Knowledge, distilled."
  />
);
