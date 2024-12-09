/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
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
        const easeOutQuad = (percentage) =>
          1 - (1 - percentage) * (1 - percentage);
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
      rootMargin: "0px",
    });
  
    const [count, setIsAnimating] = useCountUp(
      parseInt(number.replace(/\D/g, "")), // Remove non-digits for "200+"
      2000, // duration
      0, // start
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
          {count}
          {number.includes("+") ? "+" : ""}
        </div>
        <div className="text-gray-600 text-sm">{label}</div>
      </div>
    );
  };

  export default AnimatedNumber