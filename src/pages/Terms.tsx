import PageWrapper from "@/components/PageWrapper";

const Terms = () => (
  <PageWrapper>
    <section className="bg-background py-24">
      <div className="container max-w-3xl mx-auto px-6 md:px-16">
        <h1 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">Terms of Service</h1>
        <p className="text-sm text-muted mt-4">Last updated: April 2026</p>

        <div className="mt-12 space-y-10 text-base text-primary/80 leading-relaxed">
          <div>
            <h3 className="font-black text-xl text-primary mb-3">Acceptance</h3>
            <p>By accessing and using the A36 Labs website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </div>
          <div>
            <h3 className="font-black text-xl text-primary mb-3">Use of Platform</h3>
            <p>You agree to use A36 Labs services only for lawful purposes and in accordance with these terms. You may not use our platform in any way that could damage, disable, or impair our services.</p>
          </div>
          <div>
            <h3 className="font-black text-xl text-primary mb-3">Intellectual Property</h3>
            <p>All content, trademarks, and intellectual property on this website are owned by A36 Labs. You may not reproduce, distribute, or create derivative works without our express written consent.</p>
          </div>
          <div>
            <h3 className="font-black text-xl text-primary mb-3">Limitations</h3>
            <p>A36 Labs shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you, if any, for access to our services.</p>
          </div>
          <div>
            <h3 className="font-black text-xl text-primary mb-3">Governing Law</h3>
            <p>These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
          </div>
          <div>
            <h3 className="font-black text-xl text-primary mb-3">Contact</h3>
            <p>For questions about these terms, contact us at <a href="mailto:partnerships@a36labs.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">partnerships@a36labs.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Terms;
