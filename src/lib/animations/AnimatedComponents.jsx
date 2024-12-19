import { withScrollAnimation } from "./WithScrollAnimation";
import About from "../../components/About";
import Contact from "../../components/Contacts";
import Hero from "../../components/Hero";
import Navigation from "../../components/Navigation";
import Projects from "../../components/Projects";
import Services from "../../components/Services";
import Footer from "../../components/Footer";

// Wrapped components with display names
export const AnimatedNavigation = withScrollAnimation(Navigation, {
  once: true,
  duration: 0.3,
  y: 20,
});
AnimatedNavigation.displayName = "AnimatedNavigation";

export const AnimatedHero = withScrollAnimation(Hero, {
  once: true,
  duration: 0.5,
  x: 30,
});
AnimatedHero.displayName = "AnimatedHero";

export const AnimatedAbout = withScrollAnimation(About, {
  y: 75,
  duration: 0.8,
});
AnimatedAbout.displayName = "AnimatedAbout";

export const AnimatedServices = withScrollAnimation(Services, {
  y: 75,
  duration: 0.9,
});
AnimatedServices.displayName = "AnimatedServices";

export const AnimatedProjects = withScrollAnimation(Projects, {
  y: 100,
  duration: 0.8,
});
AnimatedProjects.displayName = "AnimatedProjects";

export const AnimatedContact = withScrollAnimation(Contact, {
  y: 50,
  duration: 0.6,
  once: false,
});
AnimatedContact.displayName = "AnimatedContact";

export const AnimatedFooter = withScrollAnimation(Footer, {
  y: 50,
  duration: 0.6,
  once: true,
});
