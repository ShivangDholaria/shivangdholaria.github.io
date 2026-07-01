import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Now from "./components/Now";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
  <div className="relative min-h-screen bg-ink text-fg">
    <Navbar />
    <main>
      <Hero />
      <Now />
      <About />
      <Tech />
      <Experience />
      <Education />
      <Works />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
