import Link from 'next/link';
import { createProject } from '@/app/lib/actions';

export default function Page() {
  const fieldClassName =
    'w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100';

  return (
    <main className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 py-12">
      <h1 className="mb-6 text-center text-3xl font-bold text-slate-900">
        Create Project
      </h1>

      <form
        action={createProject}
        className="grid w-full max-w-2xl gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-2">
          <label htmlFor="title" className="font-medium text-slate-800">
            Title
          </label>
          <input id="title" name="title" required className={fieldClassName} />
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
            className={fieldClassName}
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="type" className="font-medium text-slate-800">
            Type
          </label>
          <select id="type" name="type" required className={fieldClassName}>
            <option value="opensource">Open Source</option>
            <option value="school">School</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="link" className="font-medium text-slate-800">
            Link (optional)
          </label>
          <input id="link" name="link" className={fieldClassName} />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Save Project
          </button>
          <Link
            href="/dashboard/projects"
            className="rounded-lg border border-slate-300 px-5 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}
