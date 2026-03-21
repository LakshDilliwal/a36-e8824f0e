import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Sprints = () => (
  <>
    <Nav />
    <main className="bg-background pt-16 min-h-screen">
      <div className="container max-w-5xl mx-auto px-6 md:px-16 py-20">
        <h1 className="font-black text-[40px] md:text-[56px] tracking-heading text-primary leading-[1.05]">
          A36 Global Sprints.
        </h1>
        <p className="text-base text-primary/60 mt-4 max-w-lg">
          High-signal, invite-filtered, IRL and online builder events.
        </p>

        <div className="mt-16">
          <h2 className="font-black text-2xl text-primary tracking-heading mb-6">Upcoming Events</h2>
          <div className="border border-border bg-warm-cream rounded-sm p-8 text-center">
            <p className="text-primary/50 text-sm">No upcoming events announced yet. Stay tuned.</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-black text-2xl text-primary tracking-heading mb-6">Past Sprints</h2>
          <div className="border border-border bg-warm-cream rounded-sm p-8 text-center">
            <p className="text-primary/50 text-sm">Sprint archive coming soon.</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://lu.ma/a36labs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            REGISTER ON LUMA ↗
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Sprints;
