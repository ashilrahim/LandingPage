/* eslint-disable react/prop-types */
import  { useState, useEffect, useRef } from 'react';
import rectangle from '../assets/images/Rectangle 3.jpg'
import rectangle2 from '../assets/images/Rectangle 4.jpg'
import rectangle3 from '../assets/images/Rectangle 2.jpg'
import rectangle4 from '../assets/images/Rectangle 1.jpg'
import rectangle5 from '../assets/images/Rectangle 5.jpg'
// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

// Custom hook for count animation
const useCountUp = (end, duration = 2000, start = 0, delay = 0) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = percentage => 1 - (1 - percentage) * (1 - percentage);
      const easedProgress = easeOutQuad(percentage);
      
      setCount(Math.floor(easedProgress * (end - start) + start));

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [end, duration, start, delay, isAnimating]);

  return [count, setIsAnimating];
};

// Animated number component
const AnimatedNumber = ({ number, label, delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px'
  });
  
  const [count, setIsAnimating] = useCountUp(
    parseInt(number.replace(/\D/g, '')), // Remove non-digits for "200+"
    2000, // duration
    0,    // start
    delay // delay
  );

  useEffect(() => {
    if (isIntersecting) {
      setIsAnimating(true);
    }
  }, [isIntersecting, setIsAnimating]);

  return (
    <div ref={ref}>
      <div className="text-3xl md:text-4xl font-bold mb-2">
        {count}{number.includes('+') ? '+' : ''}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
};

const About = () => {
  const stats = [
    { number: '10', label: 'Years' },
    { number: '200+', label: 'Projects' },
    { number: '75', label: 'Partners' }
  ];

  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side with gallery wall and interior image */}
        <div className="flex flex-col space-y-6">
          {/* Gallery wall */}
          <div className="bg-gray-50 p-6">
            {/* Top row - 3 images */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="aspect-square">
                <img 
                  src={rectangle} 
                  alt="Stairway art" 
                  className="w-full h-full object-cover border-2 border-gray-200"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src={rectangle2} 
                  alt="Typography art" 
                  className="w-full h-full object-cover border-2 border-gray-200"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src={rectangle3} 
                  alt="Abstract art" 
                  className="w-full h-full object-cover border-2 border-gray-200"
                />
              </div>
            </div>
            {/* Bottom row - 2 images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5]">
                <img 
                  src={rectangle4} 
                  alt="City art" 
                  className="w-full h-full object-cover border-2 border-gray-200"
                />
              </div>
              <div className="aspect-[4/5]">
                <img 
                  src={rectangle5} 
                  alt="Fashion art" 
                  className="w-full h-full object-cover border-2 border-gray-200"
                />
              </div>
            </div>
          </div>
          
          
        </div>

        {/* Right side content */}
        <div className="flex flex-col justify-center lg:pl-8">
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-wider mb-4 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-px before:bg-black">
              Hello There
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We Work Professionally And Wholeheartedly
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed font-mono">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra 
              non. Integer lorem in scelerisque tortor dui tempor, volutpat 
              viverra faucibus. Sagittis maecenas tincidunt at purus. Amet non 
              vel elit aliquet id dolor risus imperdiet vitae. Amet, sagittis 
              mauris morbi erat velit id nullam. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Adipiscing dui tellus commodo 
              convallis.
            </p>

            {/* Animated Statistics */}
            <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-gray-200 text-center">
              {stats.map((stat, index) => (
                <AnimatedNumber
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  delay={index * 200} // Stagger the animations
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;