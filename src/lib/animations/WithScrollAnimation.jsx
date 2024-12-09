
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const withScrollAnimation = (
  WrappedComponent, 
  options = {
    once: true,
    duration: 0.5,
    y: 75,
    ease: "easeOut"
  }
) => {
  // Create a wrapper component with a meaningful display name
  const ScrollAnimatedComponent = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: options.once });
    const mainControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
    }, [isInView, mainControls]);

    return (
      <div ref={ref} className="scroll-animation-wrapper">
        <motion.div
          variants={{
            hidden: { 
              opacity: 0, 
              y: options.y,
              x: options.x 
            },
            visible: { 
              opacity: 1, 
              y: 0,
              x: 0,
              transition: {
                duration: options.duration,
                ease: options.ease
              }
            }
          }}
          initial="hidden"
          animate={mainControls}
          exit="hidden"
        >
          <WrappedComponent {...props} />
        </motion.div>
      </div>
    );
  };

  // Set display name to help with debugging
  ScrollAnimatedComponent.displayName = `ScrollAnimated(${
    WrappedComponent.displayName || 
    WrappedComponent.name || 
    'Component'
  })`;

  return ScrollAnimatedComponent;
};