import { Suspense } from 'react';
import Link from 'next/link';
import ProjectCard from '@/app/components/ProjectCard';
import ProjectSearch from '@/app/components/ProjectSearch';
import Pagination from '@/app/components/Pagination';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';

async function ProjectsContent(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const rawQuery = typeof searchParams?.query === 'string' ? searchParams.query : '';
  const query = rawQuery.trim().slice(0, 100);
  const parsedPage = Number.parseInt(searchParams?.page ?? '1', 10);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;
  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

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
        <div className="mb-6">
          <ProjectSearch />
        </div>
        {projects.length === 0 ? (
          <p className="text-gray-700">No projects found.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
        <Pagination totalPages={totalPages} />
      </section>
    </main>
  );
}

export default function ProjectsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <ProjectsContent searchParams={props.searchParams} />
    </Suspense>
  );
}
