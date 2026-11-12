import { Suspense } from 'react';
import SchoolProjectList from '@/app/components/SchoolProjectList';
import ProjectListSkeleton from '@/app/components/ProjectListSkeleton';

export default function SchoolProjectsPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">School Projects</h1>
      <p className="text-lg text-gray-700 mb-6">
        Projects completed as part of my coursework and academic program.
      </p>
      <Suspense
        fallback={<ProjectListSkeleton label="Loading school projects..." />}
      >
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}
