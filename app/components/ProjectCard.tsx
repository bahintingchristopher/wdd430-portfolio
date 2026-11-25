// app/components/ProjectCard.tsx
import Link from 'next/link';
import DeleteProjectButton from './DeleteProjectButton';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  showActions?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  link,
  showActions = false,
}: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-white rounded">
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      {link && (
        <p className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </p>
      )}

      {showActions && (
        <div className="mt-4 flex gap-3">
          <Link
            href={`/dashboard/projects/${id}/edit`}
            className="text-blue-600 hover:underline"
          >
            Edit
          </Link>
          <DeleteProjectButton projectId={id} />
        </div>
      )}
    </article>
  );
}