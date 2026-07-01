import Reveal from "./Reveal";

// Light "impact" band — current headline work. Edit the copy here.
const Now = () => (
  <section className="w-full bg-paper text-paper-ink">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-paper-accent">
          Now — Surya Insurance Company, RRG
        </p>
        <p className="mt-6 max-w-4xl text-2xl font-normal leading-snug tracking-tight sm:text-[34px]">
          Shipping an{" "}
          <span className="text-paper-accent">AI intake pipeline</span> that
          parses policy applications, validates them against underwriting
          guidelines, and writes clean records straight into the policy
          management system.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Now;
