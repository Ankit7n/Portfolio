import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Revel";

function App() {
  return (
    <main className="bg-[#0b1326] text-[#dae2fd] scroll-smooth">
      <Navbar />

      <section id="home">
        <Reveal>
          <Hero />
        </Reveal>
      </section>

      <section id="about">
        <Reveal>
          <About />
        </Reveal>
      </section>

      <section id="skills">
        <Reveal>
          <Skills />
        </Reveal>
      </section>

      <section id="projects">
        <Reveal>
          <Projects />
        </Reveal>
      </section>

      <section id="contact">
        <Reveal>
          <Contact />
        </Reveal>
      </section>

      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}

export default App;
