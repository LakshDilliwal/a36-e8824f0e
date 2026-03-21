const Comms = () => (
  <section className="bg-background py-16">
    <div className="container max-w-5xl mx-auto px-6 md:px-16 text-center">
      <h3 className="font-black text-[28px] md:text-[32px] tracking-heading text-primary leading-tight">
        Not for everyone.<br />For the right ones.
      </h3>
      <div className="mt-6 flex flex-wrap justify-center gap-2 text-base text-primary">
        <a
          href="mailto:partnerships@a36labs.com"
          className="hover:underline"
        >
          partnerships@a36labs.com
        </a>
        <span>·</span>
        <a
          href="https://x.com/a36labs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          @a36labs on X
        </a>
      </div>
    </div>
  </section>
);

export default Comms;
