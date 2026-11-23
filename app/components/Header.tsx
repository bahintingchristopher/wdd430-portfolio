import { Suspense } from 'react';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="relative bg-blue-600 text-white py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div id="header-title" className="text-2xl font-bold ml-[20px]">
          Christopher T. Bahinting
        </div>
        <div className="mr-[20px]">
          <Suspense fallback={null}>
            <NavLinks />
          </Suspense>
        </div>
      </div>
    </header>
  );
}