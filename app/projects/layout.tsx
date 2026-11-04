import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
        <h2 className="text-lg font-bold text-blue-800 mb-2">
          Projects Section
        </h2>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/projects" className="text-blue-600 hover:underline">
                All Projects
              </Link>
            </li>
            <li>
              <Link
                href="/projects/settings"
                className="text-blue-600 hover:underline"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </section>
  );
}
