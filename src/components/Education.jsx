import Reveal from "./Reveal";
import { education } from "../constants";

const Education = () => (
  <section id="education" className="w-full border-b border-white/10">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[280px_1fr]">
      <Reveal>
        <div className="font-mono text-[13px] tracking-[0.12em] text-accent-2">
          04 / EDUCATION
        </div>
      </Reveal>

      <div className="flex flex-col gap-5">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div className="text-lg font-semibold">{e.school}</div>
                <div className="font-mono text-[13px] text-muted">{e.date}</div>
              </div>
              <div className="mt-1 text-[15px] text-muted">{e.degree}</div>
            </div>
            {i < education.length - 1 && (
              <div className="mt-5 h-px w-full bg-white/10" />
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
