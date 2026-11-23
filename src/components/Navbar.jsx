import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { navLinks, profile } from "../constants";
import { Menu, Close } from "./Icons";
import Logo from "./Logo";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pillRef = useRef(null);
  const linkRefs = useRef({});
  const [ind, setInd] = useState(null);

  // Move the highlight under the active link (it glides there when motion is on).
  useLayoutEffect(() => {
    const update = () => {
      const el = linkRefs.current[active];
      setInd(el && el.offsetWidth ? { x: el.offsetLeft, w: el.offsetWidth } : null);
    };
    update();
    if (typeof ResizeObserver === "undefined" || !pillRef.current) return;
    const ro = new ResizeObserver(update);
    ro.observe(pillRef.current);
    return () => ro.disconnect();
  }, [active]);

  // Highlight whichever section is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex min-h-20 max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8"
      >
        <a href="#top" className="brand inline-flex items-center gap-3 font-serif text-[26px] leading-none text-fg">
          <Logo size={38} className="flex-none text-accent" />
          {profile.name}
        </a>

        <div
          ref={pillRef}
          className="relative hidden items-center gap-1.5 rounded-full bg-surface p-1.5 text-sm font-medium md:flex"
        >
          <span
            aria-hidden="true"
            className="nav-ind pointer-events-none absolute inset-y-1.5 left-0 rounded-full bg-surface-2"
            style={ind ? { width: ind.w, transform: `translateX(${ind.x}px)`, opacity: 1 } : { width: 0, opacity: 0 }}
          />
          {navLinks.map((l) => (
            <a
              key={l.id}
              ref={(el) => {
                linkRefs.current[l.id] = el;
              }}
              href={`#${l.id}`}
              aria-current={active === l.id ? "location" : undefined}
              className={`relative inline-flex min-h-9 items-center rounded-full px-3.5 transition-colors ${
                active === l.id ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {l.title}
            </a>
          ))}
          <ResumeButton
            iconSize={15}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-accent px-3.5 text-accent-fg transition-colors hover:bg-accent-hover active:scale-[0.98]"
          />
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-fg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-20 z-50 flex flex-col gap-1 bg-bg px-5 py-6 md:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="display flex min-h-16 items-center border-b border-line text-5xl"
            >
              {l.title}
            </a>
          ))}
          <ResumeButton
            label="Download resume"
            onDone={() => setOpen(false)}
            className="btn btn-primary mt-6 w-full justify-center"
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
