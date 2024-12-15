import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
        hideProgressBar
      />
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
