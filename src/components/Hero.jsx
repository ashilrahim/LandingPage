/* eslint-disable react/prop-types */

import { Carousel } from "flowbite-react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/images/hero-image.jpg";
import HeroImage1 from "../assets/images/Herosection2.jpg";
import HeroImage2 from "../assets/images/Herosection1.jpg";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  const customTheme = {
    root: {
      base: "relative h-full w-full",
      leftControl: "hidden", // This hides the left control
      rightControl: "hidden", // This hides the default right control
    },
  };

  const CustomControls = ({ Slide }) => (
    <div className="absolute bottom-4 right-4 flex gap-2 z-20">
      <button
        className="bg-black/50 p-3 rounded-full hover:bg-black transition-colors group"
        onClick={() => Slide("prev")}
      >
        <MdKeyboardArrowLeft className="text-white text-xl" />
      </button>
      <button
        className="bg-black/50 p-3 rounded-full hover:bg-black transition-colors group"
        onClick={() => Slide("next")}
      >
        <MdKeyboardArrowRight className="text-white text-xl" />
      </button>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row w-full gap-10 items-center min-h-screen">
      {/* Text Content */}
      <div className="pl-8 lg:pl-24 flex flex-col justify-center lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
          Create A Modern And Unique Design Your Dream
        </h1>
        <p className="text-gray-600 mb-8 font-mono">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          dui tellus commodo convallis. Auctor eget orci pharetra non. Integer
          lorem in scelerisque tortor dui tempor
        </p>
        {/* button */}
        <button className="relative group bg-gradient-to-r from-[#233142] to-[#344256] text-white px-6 py-3 flex items-center w-fit rounded-full overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-[#344256] hover:to-[#455470]">
      {/* Hidden hover state with arrow */}
      <span className="absolute inset-0 flex items-center justify-center w-full h-full bg-[#1c2535] text-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
        <GoArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-45 ease-in-out" />
      </span>
      
      {/* Original text */}
      <span className="relative flex items-center text-sm transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-full ease-in-out">
        CONNECT US
      </span>
    </button>
      </div>

      {/* Image Carousel */}
      <div className="lg:w-1/2 relative h-[600px] w-full">
        <Carousel
          theme={customTheme}
          slide={true}
          indicators={true}
          slideInterval={2000}
          onSlideChange={(index) => console.log("Slide changed to:", index)}
        >
          <div className="relative h-full">
            <img
              src={HeroImage}
              alt="Slide 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-full">
            <img
              src={HeroImage1}
              alt="Slide 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-full">
            <img
              src={HeroImage2}
              alt="Slide 3"
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
        <CustomControls
          Slide={(direction) => {
            const button = document.querySelector(
              direction === "next"
                ? '[data-testid="carousel-right-control"]'
                : '[data-testid="carousel-left-control"]'
            );
            button?.click();
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
