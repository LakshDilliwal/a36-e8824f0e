import { Link } from "react-router-dom";

const ApplyCTA = () => (
  <section className="bg-accent py-24">
    <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
      <h2 className="font-black text-[40px] md:text-[64px] leading-[1.05] tracking-heading text-primary">
        Apply.<br />Get Filtered.<br />Get Access.
      </h2>
      <p className="text-lg text-primary/70 mt-5">
        A36 reviews every application. No shortcuts. No exceptions. Made for the right ones.
      </p>
      <div className="mt-10">
        <Link to="/apply" className="btn-dark inline-block">APPLY NOW →</Link>
      </div>
      <p className="text-[13px] text-primary/50 mt-6">Not for everyone. For the right ones.</p>
    </div>
  </section>
);

export default ApplyCTA;
