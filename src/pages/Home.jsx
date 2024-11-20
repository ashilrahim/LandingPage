import About from "../components/About";
import Contact from "../components/Contacts";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="w-full h-full bg-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
