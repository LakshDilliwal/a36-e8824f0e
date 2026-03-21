import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const TransmissionsPage = () => (
  <>
    <Nav />
    <main className="bg-primary pt-16 min-h-screen">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 py-20">
        <h1 className="font-black text-[40px] md:text-[56px] tracking-heading text-white leading-[1.05]">
          Transmissions.
        </h1>
        <p className="text-base text-white/60 mt-4 max-w-lg">
          Every dispatch from the A36 Dojo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
          <div className="rounded-sm border border-white/10 bg-white/5 p-8">
            <p className="font-bold text-[11px] text-accent uppercase tracking-wider mb-3">
              TRANSMISSION 001
            </p>
            <h3 className="font-black text-lg text-white tracking-heading">
              Booting Up. The A36 Signal.
            </h3>
            <p className="text-sm text-white/50 mt-2">Coming Q2 2026</p>
            <span className="inline-block mt-4 bg-accent text-primary font-bold text-[11px] px-3 py-1 rounded-sm">
              BOOTING UP...
            </span>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/#passport"
            className="font-bold text-accent hover:underline text-sm"
          >
            APPLY TO BE A GUEST →
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default TransmissionsPage;
