'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProjectCard from '@/app/components/ProjectCard';
import type { Project } from '@/lib/projects-db';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadProjects() {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data: Project[] = await response.json();
        if (!ignore) setProjects(data);
      } catch (err) {
        if (!ignore) {
          setError(
            err instanceof Error ? err.message : 'Failed to fetch projects'
          );
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadProjects();

    return () => {
      ignore = true;
    };
  }, []);

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
        {loading && <p className="text-gray-700">Loading projects...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && projects.length === 0 && (
          <p className="text-gray-700">No projects found.</p>
        )}
        {!loading && !error && projects.length > 0 && (
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
