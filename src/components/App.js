import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About"
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);

  return (
    <div className="App" >
      
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
