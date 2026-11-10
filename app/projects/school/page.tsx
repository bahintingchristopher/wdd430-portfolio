import { Suspense } from 'react';
import ProjectCard from '@/app/components/ProjectCard';
import { getProjects } from '@/lib/projects-db';

async function SchoolProjectsContent() {
  const projects = await getProjects('school');

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">School Projects</h1>
      <p className="text-lg text-gray-700 mb-6">
        Projects completed as part of my coursework and academic program.
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

export default function SchoolProjectsPage() {
  return (
    <Suspense fallback={null}>
      <SchoolProjectsContent />
    </Suspense>
  );
}
