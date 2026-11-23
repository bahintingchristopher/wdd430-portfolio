import { notFound } from 'next/navigation';
import { updateProject } from '@/app/lib/actions';
import { getProjectById } from '@/lib/projects-db';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const project = await getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Edit Project</h1>
      <form action={updateProject.bind(null, id)} className="grid gap-4 max-w-xl">
        <label htmlFor="title" className="font-medium">Title</label>
        <input id="title" name="title" required defaultValue={project.title} className="border p-2 rounded" />

        <label htmlFor="description" className="font-medium">Description</label>
        <textarea id="description" name="description" required defaultValue={project.description} className="border p-2 rounded" />

        <label htmlFor="technologies" className="font-medium">Technologies (comma-separated)</label>
        <input id="technologies" name="technologies" required defaultValue={project.technologies.join(', ')} className="border p-2 rounded" />

        <label htmlFor="type" className="font-medium">Type</label>
        <select id="type" name="type" required defaultValue={project.type} className="border p-2 rounded">
          <option value="opensource">Open Source</option>
          <option value="school">School</option>
        </select>

        <label htmlFor="link" className="font-medium">Link (optional)</label>
        <input id="link" name="link" defaultValue={project.link ?? ''} className="border p-2 rounded" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Project</button>
      </form>
    </main>
  );
}
