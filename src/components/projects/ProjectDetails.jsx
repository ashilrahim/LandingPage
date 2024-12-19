import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import ProjectHero from './ProjectHero';
import ProjectInfo from './ProjectInfo';
import ProjectGallery from './ProjectGallery';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <ProjectHero project={project} onBack={() => navigate('/')} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectInfo project={project} />
        <ProjectGallery images={project.gallery} title={project.title} />
      </div>
    </div>
  );
}