import Section from "./Section";
import { about, education, stack } from "../constants";

const About = () => (
  <Section id="about" title={about.headline}>
    <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <div data-reveal className="flex flex-col gap-5">
        {about.paragraphs.map((p) => (
          <p key={p} className="max-w-[64ch] text-[17px] leading-[1.7] text-soft">
            {p}
          </p>
        ))}
        <p className="max-w-[64ch] text-[17px] font-medium leading-[1.7] text-fg">{about.next}</p>
      </div>

      <div data-reveal style={{ "--i": 1 }} className="card flex flex-col gap-8 p-7">
        <div>
          <h3 className="text-sm text-accent">Stack</h3>
          <dl className="m-0 mt-3 flex flex-col">
            {stack.map((s) => (
              <div key={s.group} className="grid gap-1 border-t border-line py-3 sm:grid-cols-[140px_1fr] sm:gap-4">
                <dt className="text-sm text-muted">{s.group}</dt>
                <dd className="m-0 text-[15px]">{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="text-sm text-accent">Education</h3>
          <ul className="m-0 mt-3 flex list-none flex-col p-0">
            {education.map((e) => (
              <li key={e.school} className="flex flex-wrap justify-between gap-x-4 gap-y-0.5 border-t border-line py-3">
                <span>
                  <span className="block text-[15px] font-medium">{e.school}</span>
                  <span className="block text-sm text-muted">{e.degree}</span>
                </span>
                <span className="text-sm text-muted tabular-nums">{e.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-3">
      {about.principles.map((p, i) => (
        <li key={p.title} data-reveal style={{ "--i": i }} className="card p-7">
          <span className="mark text-2xl">{["i.", "ii.", "iii."][i] ?? `${i + 1}.`}</span>
          <h3 className="display mt-2 text-[28px] leading-tight">{p.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
        </li>
      ))}
    </ul>
  </Section>
);

export default About;
