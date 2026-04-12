import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    heading: "ABOUT A36",
    items: [
      { q: "What is A36?", a: "A36 is an infrastructure venture lab and accelerator for serious builders in Web3, AI, Healthcare, and Finance. We filter, back, and deploy resources to founders building foundational technology." },
      { q: 'What does "A36" mean?', a: "A36 represents 36 infrastructure domains across four core execution vectors. Every domain has a purpose. Every builder has a lane. Nothing is cosmetic." },
      { q: "Is A36 only for Web3 builders?", a: "No. A36 operates across Web3, AI, Healthcare, Finance, and Deep Tech. The common thread is infrastructure — we back base-layer builders regardless of vertical." },
    ],
  },
  {
    heading: "A36 PASSPORT (COHORT)",
    items: [
      { q: "What is the A36 Passport?", a: "A36 Passport is our builder cohort program. Accepted builders get access to ecosystem resources, capital introductions, global event rooms, and direct operator mentorship." },
      { q: "How do I apply?", a: "Submit an application at a36labs.com/apply. We review every application manually. No shortcuts, no exceptions." },
      { q: "Is A36 Passport free?", a: "The application is free. Cohort details including any program fees are shared with accepted applicants." },
      { q: "How long is the cohort?", a: "The A36 Passport cohort is structured as a focused 8–12 week sprint. Details shared upon acceptance." },
    ],
  },
  {
    heading: "EVENTS",
    items: [
      { q: "How do A36 events work?", a: "A36 hosts high-signal, invite-only rooms at global conferences and builder hubs. Events are curated — not open to the public unless specified. Focus is always on operators, infrastructure builders, and capital." },
      { q: "How do I attend an A36 event?", a: "Request an invite via the Events page or apply for A36 Passport. Partner protocols and communities receive priority access." },
      { q: "Where does A36 host events?", a: "India (Indore, Bangalore, Delhi, Mumbai), Singapore, Dubai, and expanding to other global builder hubs through 2026–2027." },
    ],
  },
  {
    heading: "A36 EARN",
    items: [
      { q: "What is A36 Earn?", a: "A36 Earn (earn.a36labs.com) is our on-chain bounty and grant platform. Protocols list opportunities, builders complete work, and get paid on-chain. Zero commission for builders." },
      { q: "Which chains are supported on A36 Earn?", a: "A36 Earn supports multi-chain payouts including Solana, Ethereum, Base, Avalanche, Polygon, and NEAR Protocol." },
    ],
  },
  {
    heading: "PARTNERSHIPS",
    items: [
      { q: "How do we partner with A36?", a: "Email partnerships@a36labs.com or apply via the Become a Partner form. We partner with protocols, funds, communities, and media brands." },
      { q: "Does A36 take equity?", a: "A36's model is evolving. Current engagements are ecosystem partnership-based. Equity arrangements are considered case-by-case for cohort participants." },
    ],
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button className="w-full flex justify-between items-center py-5 text-left" onClick={() => setOpen(!open)}>
        <span className="font-bold text-base text-primary pr-4">{q}</span>
        <ChevronDown size={18} className={`text-accent flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="text-sm text-muted pb-5 leading-relaxed">{a}</p>}
    </div>
  );
};

const FAQ = () => (
  <PageWrapper>
    <section className="bg-background py-24">
      <div className="container max-w-3xl mx-auto px-6 md:px-16">
        <p className="eyebrow-dark mb-6">FAQ</p>
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
          Questions.<br />Direct answers.
        </h1>

        <div className="mt-16 space-y-12">
          {sections.map((sec) => (
            <div key={sec.heading}>
              <h3 className="font-black text-sm text-accent uppercase tracking-wider mb-4">{sec.heading}</h3>
              <div>
                {sec.items.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default FAQ;
