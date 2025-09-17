import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-background text-foreground scroll-smooth w-[100%]">
      <Navbar />
      <main className=" w-[100%]">
        <section id="home" className="w-[100%]">
          <Home />
        </section>
        <section id="about" className="w-[100%]">
          <About />
        </section>
        <section id="skills" className="w-[100%]">
          <Skills />
        </section>
        <section id="projects" className="w-[100%]">
          <Projects />
        </section>
        <section id="contact" className="w-[100%]">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

