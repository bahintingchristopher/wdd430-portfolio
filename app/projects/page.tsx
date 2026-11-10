import { Suspense } from 'react';
import Link from 'next/link';
import ProjectCard from '@/app/components/ProjectCard';
import { getProjects } from '@/lib/projects-db';

async function ProjectsContent() {
  const projects = await getProjects();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Projects Overview</h1>
      <p className="text-lg text-gray-700 mb-6">
        Browse the projects I have built, grouped by category.
      </p>
      <ul className="grid gap-4 md:grid-cols-2">
        <li>
          <Link
            href="/projects/opensource"
            className="block p-4 border-l-4 border-blue-600 bg-white rounded hover:shadow-md"
          >
            <h3 className="text-xl font-bold text-black mb-2">
              Open Source Projects
            </h3>
            <p className="text-gray-700">
              Community-driven work and contributions.
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="/projects/school"
            className="block p-4 border-l-4 border-blue-600 bg-white rounded hover:shadow-md"
          >
            <h3 className="text-xl font-bold text-black mb-2">
              School Projects
            </h3>
            <p className="text-gray-700">
              Coursework and academic assignments.
            </p>
          </Link>
        </li>
      </ul>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">All Projects</h2>
        {projects.length === 0 ? (
          <p className="text-gray-700">No projects found.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsContent />
    </Suspense>
  );
}
