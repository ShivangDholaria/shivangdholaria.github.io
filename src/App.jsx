import { BrowserRouter } from "react-router-dom"; //Used for routing in browser
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'; //Section Imports

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relateve z-0"> {/* for displaying "star" content */ }
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>      
  )
}

export default App
