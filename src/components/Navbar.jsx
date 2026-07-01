import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { navLinks, profile } from "../constants";
import { Menu, Close } from "./Icons";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Spring-smoothed scroll progress for the top bar.
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section is currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/70 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent"
      />

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight transition-colors hover:text-white"
        >
          <span className="h-2.5 w-2.5 rounded-[3px] bg-accent" />
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 font-mono text-[13px] sm:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`group relative transition-colors hover:text-fg ${
                active === l.id ? "text-fg" : "text-muted"
              }`}
            >
              0{navLinks.indexOf(l) + 1}_{l.title.toLowerCase()}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                  active === l.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-4 py-1.5 text-fg transition-colors hover:border-white/40"
          >
            Résumé ↗
          </a>
        </div>

        <button
          className="text-fg sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-6 py-4 font-mono text-sm backdrop-blur-md sm:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`transition-colors hover:text-fg ${
                  active === l.id ? "text-fg" : "text-muted"
                }`}
              >
                0{navLinks.indexOf(l) + 1}_{l.title.toLowerCase()}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-accent-2"
              onClick={() => setOpen(false)}
            >
              Résumé ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
