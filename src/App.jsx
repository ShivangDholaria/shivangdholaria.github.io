import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
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

export default App;
