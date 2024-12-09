

import rectangle from "../assets/images/Rectangle 3.jpg";
import rectangle2 from "../assets/images/Rectangle 4.jpg";
import rectangle3 from "../assets/images/Rectangle 2.jpg";
import rectangle4 from "../assets/images/Rectangle 1.jpg";
import rectangle5 from "../assets/images/Rectangle 5.jpg";

import AnimatedNumber from "./AnimatedNumber/AnimatedNumber";
import ImageZoomModal from "./ImageModel/ImageZoomModal";

const About = () => {
  const stats = [
    { number: "10", label: "Years" },
    { number: "200+", label: "Projects" },
    { number: "75", label: "Partners" },
  ];
  const imageData = [
    {
      src: rectangle,
      alt: "Stairway art",
    },
    {
      src: rectangle2,
      alt: "Typography art",
    },
    {
      src: rectangle3,
      alt: "Abstract art",
    },
    {
      src: rectangle4,
      alt: "City art",
    },
    {
      src: rectangle5,
      alt: "Fashion art",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16" id="about">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side with gallery wall and interior image */}
        <div className="flex flex-col space-y-6 rounded-md">
          <ImageZoomModal images={imageData} />
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
            <div className={`grid grid-cols-${stats.length} gap-4 py-8 border-t border-b border-gray-200 text-center`}>
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
