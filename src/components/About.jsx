import Reveal from "./Reveal";
import { about, services } from "../constants";

const About = () => (
  <section id="about" className="w-full border-b border-white/10">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[280px_1fr]">
      <Reveal>
        <div className="font-mono text-[13px] tracking-[0.12em] text-accent-2">
          01 / ABOUT
        </div>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-[34px]">
          Owning features end&#8209;to&#8209;end.
        </h2>
      </Reveal>

      <div>
        <Reveal>
          <p className="text-[17px] leading-relaxed text-faint">
            {about.paragraph}
          </p>
        </Reveal>

        <div className="mt-9 grid gap-5 sm:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-white/10 bg-surface p-6 transition-colors duration-300 hover:border-white/25">
                <div className="font-semibold">{s.title}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
