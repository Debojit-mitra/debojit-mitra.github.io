import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
