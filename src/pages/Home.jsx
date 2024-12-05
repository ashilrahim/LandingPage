import About from "../components/About";
import Contact from "../components/Contacts";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Services from "../components/Services";

function Home() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
