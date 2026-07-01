import Reveal from "./Reveal";
import { technologies } from "../constants";

const Tech = () => (
  <section id="tech" className="w-full border-b border-white/10">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[280px_1fr]">
      <Reveal>
        <div className="font-mono text-[13px] tracking-[0.12em] text-accent-2">
          02 / STACK
        </div>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-[34px]">
          Tools I reach for.
        </h2>
      </Reveal>

      <div className="flex flex-wrap content-start gap-3">
        {technologies.map((t, i) => (
          <Reveal key={t.name} delay={(i % 8) * 0.04}>
            <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-surface py-2.5 pl-3 pr-4 transition-colors duration-300 hover:border-white/25">
              <img
                src={t.icon}
                alt=""
                className="h-[22px] w-[22px] object-contain"
              />
              <span className="text-sm font-medium">{t.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Tech;
