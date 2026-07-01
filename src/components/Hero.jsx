import { motion } from "framer-motion";

import { profile } from "../constants";
import { ArrowRight, ArrowUpRight } from "./Icons";

// Headline stats — recruiter-facing proof points.
// Move to src/constants if you'd rather edit them alongside your other data.
const metrics = [
  {
    value: "$1M+",
    label: "Saved via a reporting system\nI built from the ground up",
  },
  {
    value: "Legacy → modern",
    label: "Migrated a full-stack app solo,\nzero disruption to operations",
  },
  {
    value: "3 domains",
    label: "Insurance · healthcare · fintech\nregulated, high-stakes systems",
  },
];

const rise = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    {/* ambient purple glow */}
    <div
      aria-hidden
      className="pointer-events-none absolute -right-24 -top-40 h-[560px] w-[560px] rounded-full bg-accent/20 blur-[150px]"
    />

    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pt-40">
      {profile.available && (
        <motion.a
          href="#contact"
          {...rise(0)}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/14 bg-white/5 px-3.5 py-1.5 font-mono text-xs tracking-wider text-muted transition-colors hover:border-white/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-ring rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          OPEN TO OPPORTUNITIES
        </motion.a>
      )}

      <motion.p
        {...rise(0.08)}
        className="mt-8 font-mono text-sm uppercase tracking-[0.12em] text-accent-2"
      >
        Backend-heavy full-stack engineer
      </motion.p>

      <motion.h1
        {...rise(0.14)}
        className="mt-3 text-[15vw] font-semibold leading-[0.95] tracking-tight sm:text-8xl"
      >
        Shivang
        <br />
        Dholaria
      </motion.h1>

      <motion.p
        {...rise(0.22)}
        className="mt-7 max-w-xl text-lg leading-relaxed text-faint sm:text-xl"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        {...rise(0.3)}
        className="mt-9 flex flex-wrap items-center gap-3.5"
      >
        <a
          href="#work"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-cta transition-transform hover:-translate-y-0.5"
        >
          View work
          <ArrowRight
            width={16}
            height={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-white/45"
        >
          Résumé
          <ArrowUpRight width={16} height={16} />
        </a>
      </motion.div>
    </div>

    {/* metrics */}
    <div className="mx-auto max-w-6xl border-t border-white/10 px-6">
      <div className="grid sm:grid-cols-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.value}
            {...rise(0.36 + i * 0.06)}
            className={`py-10 sm:px-8 ${
              i === 0 ? "sm:pl-0" : ""
            } ${i < metrics.length - 1 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""}`}
          >
            <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {m.value}
            </div>
            <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
