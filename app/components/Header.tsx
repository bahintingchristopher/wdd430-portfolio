import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div id="header-title" className="text-2xl font-bold ml-[20px]">
          Christopher T. Bahinting
        </div>
        <nav className="mr-[20px]">
          <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}