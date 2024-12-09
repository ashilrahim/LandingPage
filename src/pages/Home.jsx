import { 
  AnimatedNavigation,
  AnimatedHero,
  AnimatedAbout,
  AnimatedServices,
  AnimatedProjects,
  AnimatedContact
} from '../lib/animations/AnimatedComponents';

function Home() {
  return (
    <div className="">
      <AnimatedNavigation />
      <AnimatedHero />
      <AnimatedAbout />
      <AnimatedServices />
      <AnimatedProjects />
      <AnimatedContact />
    </div>
  );
}

export default Home
