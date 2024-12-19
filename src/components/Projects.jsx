import React from "react";
import ProjectGrid from "./projects/ProjectGrid";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-xl font-medium tracking-wider mb-4 flex items-center">
            Our Projects
            <span className="block w-8 h-px bg-black ml-2 relative top-1"></span>
          </h2>
          <p className="text-3xl text-gray-700 font-bold">
            Our capacity to help make your wishes come true
          </p>
        </div>
        <ProjectGrid />
        <Link
          to="/projects"
          className="inline-block px-6 py-3 text-gray-700  transition-colors"
        >
          <p className="text-xl font-medium tracking-wider mb-4 flex items-center">
            View More Projects
            <span className="block w-8 h-px bg-black ml-2 relative top-1"></span>
          </p>
        </Link>
      </div>
    </section>
  );
}
