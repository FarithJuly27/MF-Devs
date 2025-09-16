import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="bg-background text-foreground scroll-smooth w-full">
      <Navbar />
      <main className=" w-[100%]">
        <section id="home" className="w-full">
          <Home />
        </section>
        <section id="about" className="w-full">
          <About />
        </section>
        <section id="skills" className="w-full">
          <Skills />
        </section>
        <section id="projects" className="w-full">
          <Projects />
        </section>
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

