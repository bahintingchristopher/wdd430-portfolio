import ProjectCard from '@/app/components/ProjectCard';
import { getProjects } from '@/lib/projects-db';

export default async function SchoolProjectList() {
  const projects = await getProjects('school');

  if (projects.length === 0) {
    return <p className="text-gray-700">No projects found.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}
