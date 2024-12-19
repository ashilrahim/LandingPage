import { Carousel } from "flowbite-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects.js";



const ProjectGrid = () => {

  return (
    <div className="relative mt-16">
      <div className="max-w-7xl mx-auto h-[600px]">
        <Carousel
          slide={true}
          slideInterval={5000}
          leftControl={
            <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 rounded-sm transition-colors cursor-pointer">
              <ChevronLeft className="h-8 w-8 text-white" />
            </button>
          }
          rightControl={
            <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 rounded-sm transition-colors cursor-pointer">
              <ChevronRight className="h-8 w-8 text-white" />
            </button>
          }
          indicators={false}
          className="h-full"
        >
          {projects.map((project) => (
            <div key={project.id} className="relative h-full w-full p-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectGrid;
