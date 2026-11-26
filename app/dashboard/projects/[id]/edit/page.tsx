import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { updateProject } from '@/app/lib/actions';
import { getProjectById } from '@/public/projects-db';

type EditPageProps = {
  params: Promise<{ id: string }>;
};

export default function Page({ params }: EditPageProps) {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Edit Project</h1>
      <Suspense fallback={<p className="text-slate-600">Loading project...</p>}>
        <EditProjectForm params={params} />
      </Suspense>
    </main>
  );
}

async function EditProjectForm({ params }: EditPageProps) {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  const fieldClassName =
    'w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100';

  return (
    <form
      action={updateProject.bind(null, id)}
      className="grid max-w-2xl gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-2">
        <label htmlFor="title" className="font-medium text-slate-800">
          Title
        </label>
        <input
          id="title"
          name="title"
          required
          defaultValue={project.title}
          className={fieldClassName}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="description" className="font-medium text-slate-800">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          defaultValue={project.description}
          className={fieldClassName}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="technologies" className="font-medium text-slate-800">
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          required
          defaultValue={project.technologies.join(', ')}
          className={fieldClassName}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="type" className="font-medium text-slate-800">
          Type
        </label>
        <select
          id="type"
          name="type"
          required
          defaultValue={project.type}
          className={fieldClassName}
        >
          <option value="opensource">Open Source</option>
          <option value="school">School</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="link" className="font-medium text-slate-800">
          Link (optional)
        </label>
        <input
          id="link"
          name="link"
          defaultValue={project.link ?? ''}
          className={fieldClassName}
        />
      </div>

      <button
        type="submit"
        className="justify-self-start rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
      >
        Update Project
      </button>
    </form>
  );
}
