import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Privacy = () => (
  <>
    <Nav />
    <main className="bg-background pt-16 min-h-screen">
      <div className="container max-w-[720px] mx-auto px-6 py-20">
        <h1 className="font-black text-[40px] md:text-[48px] tracking-heading text-primary leading-[1.05] mb-8">
          Privacy Policy
        </h1>

        <div className="text-primary/80 leading-relaxed space-y-6 text-base">
          <p><strong>Last updated:</strong> March 2026</p>

          <h2 className="font-bold text-xl text-primary mt-8">1. Information We Collect</h2>
          <p>
            We collect information you provide directly, including your name, email address,
            role, and project details when you submit an application through the A36 Passport form.
          </p>

          <h2 className="font-bold text-xl text-primary mt-8">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to review applications, communicate with applicants,
            and improve our programs and services.
          </p>

          <h2 className="font-bold text-xl text-primary mt-8">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as required by law.
          </p>

          <h2 className="font-bold text-xl text-primary mt-8">4. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="font-bold text-xl text-primary mt-8">5. Contact</h2>
          <p>
            For questions about this privacy policy, contact us at{" "}
            <a href="mailto:hello@a36labs.com" className="underline">
              hello@a36labs.com
            </a>.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Privacy;
