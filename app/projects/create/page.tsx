import { createProject } from '@/app/lib/actions';

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Create Project</h1>
      <form action={createProject} className="grid gap-4 max-w-xl">
        <label htmlFor="title" className="font-medium">Title</label>
        <input id="title" name="title" required className="border p-2 rounded" />

        <label htmlFor="description" className="font-medium">Description</label>
        <textarea id="description" name="description" required className="border p-2 rounded" />

        <label htmlFor="technologies" className="font-medium">Technologies (comma-separated)</label>
        <input id="technologies" name="technologies" required className="border p-2 rounded" />

        <label htmlFor="type" className="font-medium">Type</label>
        <select id="type" name="type" required className="border p-2 rounded">
          <option value="opensource">Open Source</option>
          <option value="school">School</option>
        </select>

        <label htmlFor="link" className="font-medium">Link (optional)</label>
        <input id="link" name="link" className="border p-2 rounded" />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Project</button>
      </form>
    </main>
  );
}
