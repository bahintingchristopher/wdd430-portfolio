export default function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse rounded border-l-4 border-blue-200 bg-white p-4">
      <div className="mb-2 h-6 w-2/3 rounded bg-slate-200" />
      <div className="mb-2 h-4 w-full rounded bg-slate-200" />
      <div className="mb-2 h-4 w-5/6 rounded bg-slate-200" />
      <div className="h-4 w-1/2 rounded bg-slate-200" />
    </div>
  );
}
