
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div 
    className="group relative h-full w-full overflow-hidden rounded-lg cursor-pointer"
    onClick={() => navigate(`/project/${project.id}`)}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-sm text-gray-300">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-white">
          {project.title}
        </h3>
      </div>
    </div>
  </div>
  );
}