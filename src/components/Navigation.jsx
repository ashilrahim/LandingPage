import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { GoArrowRight } from "react-icons/go";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === "/");

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // NavLink component that conditionally renders ScrollLink or RouterLink
  const NavLink = ({ to, children, className }) => {
    if (isHome) {
      return (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={className}
        >
          {children}
        </ScrollLink>
      );
    }
    return (
      <RouterLink
        to={`/${to === "Hero" ? "" : to}`}
        className={className}
      >
        {children}
      </RouterLink>
    );
  };

  return (
    <nav className="bg-[#FAF9F6] p-2 relative">
      <div className="max-w-[83rem] mx-auto flex items-center justify-between px-5">
        {/* Logo or brand */}
        <div className="text-[#444444] text-xl font-bold cursor-pointer">
          <RouterLink to="/">
            <img src={Logo} alt="Logo" />
          </RouterLink>
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
              <NavLink
                to="Hero"
                className="cursor-pointer inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="services"
                className="cursor-pointer inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="works"
                className="cursor-pointer inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Our Works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className="cursor-pointer inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
              >
                <button className="cursor-pointer group px-5 py-3 bg-[#996830] flex items-center gap-1 hover:text-[#dddddd] text-[#ffffff]">
                  CONTACT US
                  <GoArrowRight className="hover: transition-transform duration-500 ease-in-out group-hover:rotate-45" />
                </button>
              </NavLink>
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
            <NavLink
              to="Hero"
              className="inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              className="inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="works"
              className="inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              Our Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className="inline-block text-[#333333] hover:text-[#777777] transform hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
            >
              <button className="group px-5 py-3 bg-[#996830] flex items-center gap-1 hover:text-[#dddddd] text-[#ffffff]">
                CONTACT US
                <GoArrowRight className="hover: transition-transform duration-500 ease-in-out group-hover:rotate-45" />
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;