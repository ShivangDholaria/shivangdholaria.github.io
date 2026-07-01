import Reveal from "./Reveal";
import { experiences } from "../constants";

const Experience = () => (
  <section id="experience" className="w-full border-b border-white/10">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="font-mono text-[13px] tracking-[0.12em] text-accent-2">
          03 / EXPERIENCE
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-[34px]">
          Where I&apos;ve shipped.
        </h2>
      </Reveal>

      <div className="mt-11">
        {experiences.map((e, i) => (
          <Reveal key={`${e.company_name}-${i}`} delay={i * 0.05}>
            <div
              className={`grid gap-6 md:grid-cols-[220px_1fr] ${
                i === 0 ? "" : "pt-9"
              } ${
                i === experiences.length - 1
                  ? ""
                  : "border-b border-white/10 pb-9"
              }`}
            >
              <p className="order-2 font-mono text-[13px] leading-relaxed text-muted md:order-1">
                {e.date}
              </p>
              <div className="order-1 md:order-2">
                <div className="text-xl font-semibold tracking-tight">
                  {e.title}
                </div>
                <div className="mt-0.5 text-[15px] text-accent-2">
                  {e.company_name}
                </div>
                <ul className="mt-4 space-y-2">
                  {e.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[15px] leading-relaxed text-faint"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {p}
                    </li>
                  ))}
                </ul>
                {e.stack && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-white/14 px-2.5 py-1 font-mono text-xs text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
