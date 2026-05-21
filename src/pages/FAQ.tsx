import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const sections = [
  {
    heading: "ABOUT A36",
    items: [
      { q: "What is A36 Labs?", a: "A36 Labs is a global builder ecosystem network across Web3, AI, and emerging tech. We curate serious builders, run IRL events and residencies, publish A36 Signal, and connect talent to protocols, capital, and real work." },
      { q: "What does A36 mean?", a: "A36 is the operating layer for serious builders. It represents the network, events, opportunities, and systems we are building across 36+ tech verticals." },
      { q: "Is A36 only for Web3 builders?", a: "No. A36 works across Web3, AI, deep tech, developer tools, fintech, consumer, climate, healthcare, infrastructure, and other emerging tech verticals." },
    ],
  },
  {
    heading: "A36 NETWORK",
    items: [
      { q: "What is A36 Network?", a: "A36 Network is the community layer of A36 Labs. It connects founders, developers, operators, researchers, community leads, and ecosystem partners through public channels, events, and deeper access layers." },
      { q: "How do I join?", a: "You can join through the community page. Start with the public WhatsApp, Telegram, Discord, events calendar, or A36 Signal." },
      { q: "Is the network free?", a: "Public channels are free. Deeper access is curated through contribution, proof of work, events, and trusted relationships." },
    ],
  },
  {
    heading: "A36 RESIDENCY",
    items: [
      { q: "What is A36 Residency?", a: "A36 Residency is a 15-day builder residency for selected founders, developers, and operators working on serious products and ecosystems." },
      { q: "How do I apply?", a: "Residency applications happen through the live Luma event page when applications are open." },
      { q: "Is A36 Residency free?", a: "For accepted builders, accommodation, food, and workspace are covered when listed on the residency page. Travel is not covered unless specifically mentioned." },
      { q: "Who is it for?", a: "Builders with a product shipping or close to shipping, founders at pre-seed or seed stage, protocol operators, ecosystem leads, and developers building real infrastructure." },
    ],
  },
  {
    heading: "IRL EVENTS",
    items: [
      { q: "How do A36 events work?", a: "A36 hosts hackathons, meetups, workshops, founder connects, side events, and curated builder rooms with ecosystem partners." },
      { q: "How do I attend an A36 event?", a: "Visit the events page or follow the A36 Luma calendar for upcoming events and registration links." },
      { q: "Where does A36 host events?", a: "A36 runs events across global builder hubs, with current activity across APAC, MENA, LATAM, North America, Europe, and Africa." },
    ],
  },
  {
    heading: "A36 EARN",
    items: [
      { q: "What is A36 Earn?", a: "A36 Earn is the upcoming opportunity platform for builders. It will curate bounties, grants, jobs, hackathons, and ecosystem work from serious protocols and startups." },
    ],
  },
  {
    heading: "PARTNERSHIPS",
    items: [
      { q: "How do we partner with A36?", a: "Use the Partner With A36 Labs form on the Apply page for ecosystem partnerships, community collaborations, event partnerships, sponsorships, media collaborations, and strategic support." },
      { q: "Does A36 take equity?", a: "A36 does not take equity for joining the network, attending public events, or subscribing to A36 Signal. Specific partnerships, investments, or residency support may have separate terms." },
    ],
  },
  {
    heading: "A36 SIGNAL",
    items: [
      { q: "What is A36 Signal?", a: "A36 Signal is the weekly newsletter from A36 Labs covering curated opportunities, grants, bounties, startup moves, protocol updates, events, and alpha drops." },
      { q: "Is A36 Signal free?", a: "Yes. A36 Signal is free to subscribe." },
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
