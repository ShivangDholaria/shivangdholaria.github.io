import Section from "./Section";
import { experiences } from "../constants";

// A timeline with gold dots; the current role gets a filled dot.
const Experience = () => (
  <Section id="experience" title="Experience">
    <ol className="m-0 ml-1.5 flex list-none flex-col border-l border-line p-0">
      {experiences.map((e, i) => (
        <li key={e.company} className="relative pb-12 pl-8 last:pb-1 sm:pl-10">
          <span
            aria-hidden="true"
            className={`absolute -left-[7px] top-1.5 h-[13px] w-[13px] rounded-full border border-accent ${
              i === 0 ? "bg-accent" : "bg-bg"
            }`}
          />
          <p className={`text-sm ${i === 0 ? "text-accent" : "text-muted"}`}>
            {e.date} · {e.place}
          </p>
          <h3 className="display mt-1 text-[clamp(28px,3vw,34px)] leading-[1.15]">
            {e.title}, {e.company}
          </h3>
          {e.summary && <p className="mt-2 max-w-[72ch] text-[15px] leading-relaxed text-muted">{e.summary}</p>}
          {e.points && (
            <ul className="mt-4 flex max-w-[72ch] list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-soft marker:text-accent">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
          {e.body && <p className="mt-4 max-w-[72ch] text-base leading-relaxed text-soft">{e.body}</p>}
          <p className="mt-4 text-[13px] text-muted">{e.stack}</p>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
