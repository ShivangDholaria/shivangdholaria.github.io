import { useEffect, useRef, useState } from "react";

// Counts a figure like "$1M+" or "250K" up from zero the first time it is seen.
// Shows the final value at rest, and stays still for reduced motion.
const UNITS = { K: 1e3, M: 1e6 };

const CountUp = ({ value, duration = 1400, delay = 450 }) => {
  const ref = useRef(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    const m = /^(\$?)(\d+(?:\.\d+)?)([KM]?)(\+?)$/.exec(value);
    const el = ref.current;
    if (!m || !el || !document.documentElement.classList.contains("motion")) return;
    const [, prefix, num, unit] = m;
    const target = parseFloat(num) * (UNITS[unit] || 1);
    if (!target) return;

    const fmt = (v) =>
      v >= 1e6 ? `${prefix}${Math.floor(v / 1e5) / 10}M` : v >= 1e3 ? `${prefix}${Math.floor(v / 1e3)}K` : `${prefix}${Math.floor(v)}`;

    let raf = 0;
    let timer = 0;
    const run = () => {
      let start;
      const tick = (t) => {
        start ??= t;
        const p = Math.min((t - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setText(p < 1 ? fmt(eased * target) : value);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setText(fmt(0));
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        timer = setTimeout(run, delay);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [value, duration, delay]);

  return (
    <span ref={ref} aria-hidden="true">
      {text}
    </span>
  );
};

export default CountUp;
