import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const swatches = [
  { color: "#FEF5E6", label: "Vintage Ivory", token: "--background" },
  { color: "#1F2937", label: "Deep Charcoal", token: "--primary" },
  { color: "#FDB813", label: "Gold", token: "--accent" },
  { color: "#F0E6D0", label: "Warm Cream 2", token: "--warm-cream" },
  { color: "#D1C4A8", label: "Border", token: "--border" },
];

const MediaKit = () => (
  <>
    <Nav />
    <main className="bg-background pt-16 min-h-screen">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 py-20">
        <h1 className="font-black text-[40px] md:text-[56px] tracking-heading text-primary leading-[1.05]">
          A36 Labs Media Kit
        </h1>
        <p className="text-base text-primary/60 mt-4 max-w-lg">
          For press and partnerships
        </p>

        {/* Brand overview */}
        <section className="mt-16">
          <h2 className="font-black text-2xl text-primary tracking-heading mb-4">Brand Overview</h2>
          <p className="text-primary/70 max-w-2xl leading-relaxed">
            A36 Labs is a global builder ecosystem. We curate serious founders across Web3, AI,
            and emerging tech — running high-signal events, residencies, and programs that
            accelerate the people building the next wave of infrastructure. Our brand is
            operator-level: fast and high-conviction.
          </p>
        </section>

        {/* Logo Downloads */}
        <section className="mt-16">
          <h2 className="font-black text-2xl text-primary tracking-heading mb-4">Logo</h2>
          <div className="flex gap-8 items-center">
            <div className="bg-background border border-border rounded-sm p-8">
              <span className="font-black text-5xl tracking-logo text-primary">A36<span className="text-accent">.</span></span>
            </div>
            <div className="bg-primary border border-border rounded-sm p-8">
              <span className="font-black text-5xl tracking-logo text-white">A36<span className="text-accent">.</span></span>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mt-16">
          <h2 className="font-black text-2xl text-primary tracking-heading mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {swatches.map((s) => (
              <div key={s.token} className="flex flex-col">
                <div
                  className="w-full aspect-square rounded-sm border border-border"
                  style={{ backgroundColor: s.color }}
                />
                <span className="font-bold text-sm text-primary mt-2">{s.label}</span>
                <span className="text-xs text-primary/50">{s.color}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mt-16">
          <h2 className="font-black text-2xl text-primary tracking-heading mb-4">Typography</h2>
          <p className="text-primary/70 max-w-2xl leading-relaxed">
            Montserrat — used exclusively across all A36 brand materials.
          </p>
          <div className="mt-6 space-y-1 text-sm text-primary/60">
            <p>Black (900) — headings</p>
            <p>Bold (700) — subheadings</p>
            <p>Regular (400) — body</p>
          </div>
          <div className="mt-6 space-y-1 text-sm text-primary/60">
            <p>Letter spacing: −0.04em (headings)</p>
            <p>Letter spacing: 0.15em (eyebrow labels)</p>
          </div>
        </section>

        {/* Download */}
        <section className="mt-16">
          <a
            href="https://drive.google.com/drive/folders/1v1QXyu5z6SfVfOicy1fv1hJE28TYYIF9?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            ↓ Download Brand Assets
          </a>
        </section>

        {/* Contact */}
        <section className="mt-16">
          <h2 className="font-black text-2xl text-primary tracking-heading mb-4">Contact</h2>
          <a href="mailto:hello@a36labs.com" className="text-primary hover:underline">
            hello@a36labs.com
          </a>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default MediaKit;
