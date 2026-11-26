// app/projects/[id]/page.tsx
import { cache, Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { getProjectById } from '@/public/projects-db';

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

const getProject = cache((id: string) => getProjectById(Number(id)));

export async function generateMetadata(
  { params }: ProjectDetailPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested portfolio project could not be found.',
    };
  }

  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: previousImages,
    },
  };
}

async function ProjectDetailContent({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <Link href="/projects" className="text-blue-600 hover:underline">
        ← Back to Projects
      </Link>

      <article className="mt-6 p-6 border rounded bg-white text-black">
        <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="text-sm text-gray-600">
          <strong>Technologies:</strong> {project.technologies.join(', ')}
        </p>
        {project.link && (
          <p className="mt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </p>
        )}
      </article>
    </main>
  );
}

export default function ProjectPage({ params }: ProjectDetailPageProps) {
  return (
    <Suspense fallback={<p className="p-8">Loading project...</p>}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}