import { useEffect, useRef, useState } from "react";

import { StepIcon } from "./Icons";
import { pipeline } from "../constants";

const startIndex = Math.max(0, pipeline.steps.findIndex((s) => s.highlight));

// "Building now" drawn as a small flow (steps from `pipeline` in constants), a pulse running down the wires.
// While it's on screen, the gold highlight moves from step to step; at rest it sits on the `highlight` step.
const Pipeline = ({ className = "" }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(startIndex);

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("motion")) return;
    let timer = null;
    const start = () => {
      if (!timer) timer = setInterval(() => setActive((a) => (a + 1) % pipeline.steps.length), 1400);
    };
    const stop = () => {
      clearInterval(timer);
      timer = null;
    };
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), { threshold: 0.4 });
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  return (
    <div ref={ref} className={`card p-5 sm:p-6 ${className}`}>
      <div className="mb-5 flex items-center justify-between gap-3 text-sm text-muted">
        <span className="min-w-0">{pipeline.title}</span>
        {/* Fixed height + flex centring keeps the text optically centred; it never wraps or shrinks. */}
        <span className="inline-flex h-6 flex-none items-center whitespace-nowrap rounded-full border border-accent px-2.5 pt-[2.5px] text-xs leading-none font-medium text-accent">
          {pipeline.status}
        </span>
      </div>
      <ol className="m-0 flex list-none flex-col p-0">
        {pipeline.steps.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.label}>
              {i > 0 && (
                <div
                  className="wire ml-[1.85rem] h-5 w-0.5"
                  style={{ "--d": `${i * 0.9}s` }}
                  aria-hidden="true"
                />
              )}
              <div
                className={`flex items-center gap-3.5 rounded-2xl border px-3.5 py-3 transition-colors duration-500 ${
                  on ? "border-accent bg-bg" : "border-transparent bg-surface-2"
                }`}
              >
                <span
                  className={`grid h-8 w-8 flex-none place-items-center rounded-xl transition-colors duration-500 ${
                    on ? "bg-accent text-accent-fg" : "bg-bg text-muted"
                  }`}
                >
                  <StepIcon name={s.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[15px] font-semibold">{s.label}</span>
                  <span className="block text-[13px] text-muted">{s.note}</span>
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Pipeline;
