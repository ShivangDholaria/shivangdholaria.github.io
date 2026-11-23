import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Reveal [data-reveal] elements once, as they scroll into view.
const useReveal = () => {
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion")) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

// Case-study cards: a soft gold light follows the pointer (mouse and trackpad only).
const useCardGlow = () => {
  useEffect(() => {
    const ok =
      document.documentElement.classList.contains("motion") &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!ok) return;
    const onMove = (e) => {
      const card = e.target instanceof Element ? e.target.closest(".glow-card") : null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--gx", `${e.clientX - r.left}px`);
      card.style.setProperty("--gy", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
};

const App = () => {
  useReveal();
  useCardGlow();
  return (
  <div className="relative min-h-screen bg-bg text-fg">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-fg"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <Hero />
      <Works />
      <Experience />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
  );
};

export default App;
