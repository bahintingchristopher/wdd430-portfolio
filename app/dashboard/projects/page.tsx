import Link from 'next/link';
import ProjectList from '@/app/components/ProjectList';
import { SignOutButton } from '@/app/components/sign-out-button';
import { getProjects } from '@/app/lib/data';

export default async function DashboardProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Projects</h1>
          <p className="mt-2 text-slate-600">
            Create, edit, or delete the projects shown on your portfolio.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/projects/new"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            New Project
          </Link>
          <SignOutButton />
        </div>
      </div>

      <ProjectList projects={projects} showActions />
    </main>
  );
}
