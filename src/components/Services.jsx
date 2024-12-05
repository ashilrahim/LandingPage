import { TreesIcon, Hammer, Leaf, ClipboardList } from "lucide-react";
import { BsBuildings } from "react-icons/bs";
import sofaIcon from "../assets/images/sofaicon.png";
import architecture from "../assets/images/architectureicons.png";
import landscape from "../assets/images/park.png";
import remodel from "../assets/images/remodeling.png";
import sustainable from "../assets/images/implementation.png";
import management from "../assets/images/project-management.png";
const Services = () => {
  const serviceItems = [
    {
      icon: architecture,
      title: "Architectural Design",
      description:
        "We design innovative and functional spaces, ensuring every project is both aesthetically pleasing and structurally sound.",
    },
    {
      icon: sofaIcon,
      title: "Interior Design",
      description:
        "Transform interiors with personalized designs that blend comfort, style, and functionality to create your dream space.",
    },
    {
      icon: landscape,
      title: "Landscape Design",
      description:
        "Enhance your outdoor spaces with lush, sustainable designs that complement the architecture and provide serene environments.",
    },
    {
      icon: remodel,
      title: "Renovation and Remodeling",
      description:
        "Modernize and reimagine your spaces with expert renovation and remodeling solutions tailored to your lifestyle.",
    },
    {
      icon: sustainable,
      title: "Sustainable Design",
      description:
        "Incorporate eco-friendly practices and energy-efficient solutions for a sustainable and cost-effective future.",
    },
    {
      icon: management,
      title: "Project Management",
      description:
        "Ensure seamless project execution with our professional oversight, managing everything from design to completion.",
    },
  ];

  const renderIcons = (Icons) => {
    if (typeof Icons === "function") {
      return (
        <Icons
          className="text-[#f3bc77] group-hover:text#f3bc77 transition-colors duration-300"
          size={48}
        />
      );
    }
    if (typeof Icons === "string") {
      return (
        <img
          src={Icons}
          alt="service icon"
          className="w-12 h-12 object-contain"
        />
      );
    }
    return null;
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl  text-start">
          <h2 className="text-xl font-medium tracking-wider mb-4 flex items-center justify-start ">
            Our Services
            <span className="block w-8 h-px bg-black ml-2 relative top-1"></span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg leading-loose text-gray-700 font-serif ml-4">
            We offer comprehensive architectural and interior design solutions
            to create beautiful and functional spaces that reflect your style
            and needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {serviceItems.map((service, index) => {
            return (
              <div
                key={index}
                className="overflow-hidden bg-white rounded-xl shadow transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg group"
              >
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {renderIcons(service.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-black group-hover:text-[#f3bc77] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            title="Explore More"
            className="inline-flex items-center p-3 font-medium text-gray-600 transition-all duration-200 hover:text-gray-700 focus:text-blue-700 hover:underline"
          >
            Get To Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
