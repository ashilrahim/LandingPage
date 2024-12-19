import { 
  AnimatedHero,
  AnimatedAbout,
  AnimatedServices,
  AnimatedProjects,
  AnimatedContact,
  AnimatedFooter
} from '../lib/animations/AnimatedComponents';

function Home() {
  return (
    <div className="space-y-16">
      <AnimatedHero />
      <AnimatedAbout />
      <AnimatedServices />
      <AnimatedProjects />
      <AnimatedContact />
      <AnimatedFooter />
    </div>
  );
}

export default Home
