'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '@/app/components/ProjectCard';
import type { Project } from '@/lib/projects-db';

export default function SchoolProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadProjects() {
      try {
        const response = await fetch('/api/projects?type=school');
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
      <h1 className="text-3xl font-bold mb-4">School Projects</h1>
      <p className="text-lg text-gray-700 mb-6">
        Projects completed as part of my coursework and academic program.
      </p>
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
    </main>
  );
}
