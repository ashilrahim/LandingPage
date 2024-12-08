import { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-scroll";
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FAF9F6] p-2 relative">
      <div className="max-w-[83rem] mx-auto flex items-center justify-between px-5">
        {/* Logo or brand */}
        <div className="text-[#444444] text-xl font-bold cursor-pointer">
          <Link to="Hero" spy={true} smooth={true} offset={50} duration={500}>
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex space-x-2">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                to="Hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Our Works
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="cursor-pointer inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button className="cursor-pointer group px-5 py-3 bg-[#996830] flex items-center gap-1 hover:text-[#dddddd] text-[#ffffff]">
                  CONTACT US
                  <GoArrowRight className="hover: transition-transform duration-500 ease-in-out group-hover:rotate-45" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile nav links dropdown */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center bg-[#FAF9F6] space-y-4 py-4">
          <li>
            <Link
              to="Hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="works"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Our Works
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <button className="group px-5 py-3 bg-[#996830] flex items-center gap-1 hover:text-[#dddddd] text-[#ffffff]">
                CONTACT US
                <GoArrowRight className="hover: transition-transform duration-500 ease-in-out group-hover:rotate-45" />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
