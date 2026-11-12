import ProjectListSkeleton from '@/app/components/ProjectListSkeleton';

export default function Loading() {
  return (
    <main className="animate-pulse" aria-busy="true">
      <div className="mb-4 h-9 w-2/3 rounded bg-slate-200" />
      <div className="mb-6 space-y-2">
        <div className="h-5 w-full rounded bg-slate-200" />
        <div className="h-5 w-4/5 rounded bg-slate-200" />
      </div>
      <ProjectListSkeleton label="Loading open source projects..." />
    </main>
  );
}
