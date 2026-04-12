import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <section id="newsletter" className="bg-primary py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="eyebrow mb-4">A36 SIGNAL</p>
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
          Ecosystem intelligence.<br />Zero noise.
        </h2>
        <p className="text-base text-white/60 mt-4 max-w-[520px]">
          Founder interviews. Operator playbooks. Ecosystem signals. Weekly, straight from the operators.
        </p>

        <div className="mt-10 max-w-[480px]">
          {subscribed ? (
            <p className="text-accent font-bold text-lg">You're in. Welcome to A36 Signal.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-grow bg-dark-card border border-[#374151] text-white placeholder:text-white/40 text-[15px] px-4 py-3.5 focus:outline-none focus:border-white/30"
                />
                <button type="submit" className="btn-gold px-6 py-3.5">SUBSCRIBE →</button>
              </div>
              <p className="text-xs text-white/40 mt-3">
                Trusted by builders across 10+ ecosystems. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
