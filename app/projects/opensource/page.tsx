import { Suspense } from 'react';
import ProjectCard from '@/app/components/ProjectCard';
import { getProjects } from '@/lib/projects-db';

async function OpenSourceProjectsContent() {
  const projects = await getProjects('opensource');

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Open Source Projects</h1>
      <p className="text-lg text-gray-700 mb-6">
        Projects I have contributed to or shared publicly for the community.
      </p>
      {projects.length === 0 ? (
        <p className="text-gray-700">No projects found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </main>
  );
}

export default function OpenSourceProjectsPage() {
  return (
    <Suspense fallback={null}>
      <OpenSourceProjectsContent />
    </Suspense>
  );
}
