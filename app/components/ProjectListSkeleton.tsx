import ProjectCardSkeleton from './ProjectCardSkeleton';

interface ProjectListSkeletonProps {
  label?: string;
  count?: number;
}

export default function ProjectListSkeleton({
  label = 'Loading projects...',
  count = 4,
}: ProjectListSkeletonProps) {
  return (
    <div>
      <span className="sr-only" role="status">
        {label}
      </span>
      <div className="grid gap-4 md:grid-cols-2" aria-hidden="true">
        {Array.from({ length: count }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
