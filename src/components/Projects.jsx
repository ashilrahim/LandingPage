/* eslint-disable react/prop-types */
import { Carousel } from "flowbite-react";
import image1 from "../assets/images/project1.jpg";
import image2 from "../assets/images/hero-image.jpg";
import image3 from "../assets/images/hero-image.jpg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Projects = () => {
  const ProjectCarousel = [
    {
      img: image1,
      title: "Hanani Home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non. ",
    },
    {
      img: image2,
      title: "John's Home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non. ",
    },
    {
      img: image3,
      title: "Another Home Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non. ",
    },
  ];

  const customTheme = {
    root: {
      base: "relative h-full w-full rounded-none",
      
    },
  };

  // Custom Left Control
  const LeftControl = ({ onclick }) => (
  
      <MdKeyboardArrowLeft className="text-white text-4xl -translate-y-1/2 z-20   rounded-xl hover:bg-gray-600 transition-colors" onClick={onclick} />
    
  );

  // Custom Right Control
  const RightControl = ({ onclick }) => (
   
     
      <MdKeyboardArrowRight className="text-white text-4xl -translate-y-1/2 z-20   rounded-xl hover:bg-gray-600 transition-colors" onClick={onclick} />
    
  );

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24" id="works">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl text-start">
          <h2 className="text-xl font-medium tracking-wider mb-4 flex items-center justify-start">
            Our Projects
            <span className="block w-8 h-px bg-black ml-2 relative top-1"></span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-3xl text-gray-700 font-raleway font-bold ml-4">
            Our capacity to help make your wishes come true
          </p>
        </div>
        
        <div className="max-w-4/5 relative h-auto mt-8 rounded-none">
          <Carousel
            theme={customTheme}
            
            slide={true}
            slideInterval={3000}
            indicators={true}
            pauseOnHover={true}
            leftControl={<LeftControl />}
            rightControl={<RightControl />}
          >
            {ProjectCarousel.map((project, index) => (
              <div key={index} className="relative w-full h-[500px] rounded-none">
                <div className="relative w-full h-full rounded-none">
                  {/* Image */}
                  <img
                    src={project.img}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-none"
                  />
                  
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 rounded-none"
                    style={{
                      background: 
                        'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), ' +
                        'linear-gradient(-102.803deg, ' +
                        'rgba(0, 0, 0, 0) 0%, ' +
                        'rgba(0, 0, 0, 0.27) 90%, ' +
                        'rgba(0, 0, 0, 0.3) 100%)'
                    }}
                  />
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full md:w-1/2 z-10">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;