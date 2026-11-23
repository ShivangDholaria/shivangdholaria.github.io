import { useEffect, useRef, useState } from "react";

import Section from "./Section";
import { experiences } from "../constants";

// A timeline with gold dots; the current role gets a filled dot.
// With motion on, a gold line fills down the timeline as you scroll, and each dot fills when the line reaches it.
const useTimelineProgress = (ref) => {
  const [state, setState] = useState(null); // null = at rest (no motion)

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap || !document.documentElement.classList.contains("motion")) return;
    let raf = 0;
    const measure = () => {
      const r = wrap.getBoundingClientRect();
      const h = r.height || 1;
      const dots = [...wrap.querySelectorAll(":scope > ol > li")].map((li) => (li.offsetTop + 12) / h);
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - r.top) / h));
      setState({ p: Math.round(p * 1000) / 1000, dots });
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return state;
};

const Experience = () => {
  const wrapRef = useRef(null);
  const tl = useTimelineProgress(wrapRef);

  return (
    <Section id="experience" title="Experience">
      <div ref={wrapRef} className="relative ml-1.5">
        {tl && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-full w-px origin-top bg-accent"
            style={{ transform: `scaleY(${tl.p})` }}
          />
        )}
        <ol className="m-0 flex list-none flex-col border-l border-line p-0">
          {experiences.map((e, i) => {
            const filled = i === 0 || (tl ? tl.p >= (tl.dots[i] ?? 1) : false);
            return (
              <li key={e.company} data-reveal className="relative pb-12 pl-8 last:pb-1 sm:pl-10">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[7px] top-1.5 h-[13px] w-[13px] rounded-full border border-accent transition-colors duration-300 ${
                    filled ? "bg-accent" : "bg-bg"
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
            );
          })}
        </ol>
      </div>
    </Section>
  );
};

export default Experience;
