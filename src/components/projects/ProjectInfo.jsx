export default function ProjectInfo({ project }) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Project</h2>
          <p className="text-gray-600 leading-relaxed">{project.description}</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
          <dl className="space-y-4">
            <div>
              <dt className="text-sm text-gray-500">Client</dt>
              <dd className="text-gray-900">{project.details.client}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Location</dt>
              <dd className="text-gray-900">{project.details.location}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Year</dt>
              <dd className="text-gray-900">{project.details.year}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500">Size</dt>
              <dd className="text-gray-900">{project.details.size}</dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }