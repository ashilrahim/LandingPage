import { ArrowLeft } from "lucide-react";

export default function ProjectHero({ project, onBack }) {
  return (
    <div className="relative h-[60vh]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            onClick={onBack}
            role="button"
            className="mb-8 inline-flex items-center text-white hover:text-gray-200 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-gray-200">{project.category}</p>
        </div>
      </div>
    </div>
  );
}
