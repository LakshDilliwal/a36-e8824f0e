import PageWrapper from "@/components/PageWrapper";

type Card = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

const cards: Card[] = [
  {
    eyebrow: "OPERATORS",
    title: "Become an A36 Operator",
    body: "For people who want to support events, community, partnerships, content, BD, research, and ecosystem operations",
    cta: "APPLY AS OPERATOR →",
    href: "https://forms.gle/72NttXRmytK4uH1z7",
  },
  {
    eyebrow: "PARTNERSHIPS",
    title: "Partner With A36 Labs",
    body: "For protocols, communities, funds, startups, media teams, and ecosystem partners who want to collaborate with A36 Labs",
    cta: "PARTNER WITH A36 →",
    href: "https://forms.gle/ww6WThmuo5vLupQ96",
  },
  {
    eyebrow: "RESIDENCY",
    title: "Partner With A36 Residency",
    body: "For sponsors, ecosystem partners, mentors, investors, media partners, and communities supporting the 15-day builder residency",
    cta: "PARTNER WITH RESIDENCY →",
    href: "https://forms.gle/ashs3kUvVVey5k4K9",
  },
  {
    eyebrow: "PODCAST",
    title: "Join Base Layer as a Guest",
    body: "For founders, operators, investors, researchers, and ecosystem leaders with real work to share",
    cta: "APPLY AS GUEST →",
    href: "https://forms.gle/CbWcnNHxwXqMyQ159",
  },
  {
    eyebrow: "MEDIA",
    title: "Media and Press Inquiry",
    body: "For interviews, press requests, media collaborations, and brand inquiries",
    cta: "CONTACT MEDIA TEAM →",
    href: "https://forms.gle/5WzAfE6M93ZBJqeVA",
  },
];

const Apply = () => {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-24">
        <div className="container max-w-5xl mx-auto px-6 md:px-16">
          <p className="eyebrow-dark mb-6">GET IN</p>
          <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
            Work With A36 Labs
          </h1>
          <p className="text-base text-primary/70 mt-6 max-w-[640px]">
            Apply to operate with A36, partner with the network, support the residency, join Base Layer as a guest, or reach us for media and press
          </p>
        </div>
      </section>

      {/* Forms Hub */}
      <section className="bg-warm-cream py-24">
        <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div key={c.title} className="bg-white border border-border p-8 flex flex-col">
                <p className="eyebrow-dark mb-3">{c.eyebrow}</p>
                <h3 className="font-black text-xl text-primary leading-tight">{c.title}</h3>
                <p className="text-sm text-muted mt-3 flex-1 leading-relaxed">{c.body}</p>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 inline-block text-center"
                >
                  {c.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted mt-12 text-center">
            Questions?{" "}
            <a href="mailto:hello@a36labs.com" className="text-accent hover:underline font-bold">
              hello@a36labs.com
            </a>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Apply;
