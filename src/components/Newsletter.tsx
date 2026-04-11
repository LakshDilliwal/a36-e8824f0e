import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="bg-primary py-24">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-16">
        <p className="section-label-gold mb-4">NEWSLETTER</p>
        <h2 className="font-black text-[36px] md:text-[52px] leading-[1.05] tracking-heading text-white">
          A36 Signal
        </h2>
        <p className="text-base text-white/60 mt-4 max-w-[520px]">
          Founder interviews. Operator playbooks. Ecosystem signals, straight from the field
        </p>

        <div className="mt-10 max-w-[480px]">
          <div className="flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow bg-white/[0.08] border border-white/[0.15] text-white placeholder:text-white/40 font-normal text-[15px] px-4 py-3.5 rounded-l-sm rounded-r-none focus:outline-none focus:border-white/30"
            />
            <button className="bg-accent text-primary font-bold uppercase text-sm px-6 py-3.5 rounded-r-sm rounded-l-none hover:opacity-85 transition-opacity">
              SUBSCRIBE
            </button>
          </div>
          <p className="text-xs text-white/40 mt-3">
            Dispatches go out every two weeks. Unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
