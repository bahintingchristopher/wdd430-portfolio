'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center gap-4">
      {currentPage <= 1 ? (
        <span className="rounded border border-gray-200 px-3 py-1 text-gray-400">Previous</span>
      ) : (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded border border-gray-300 px-3 py-1 hover:bg-gray-100"
        >
          Previous
        </Link>
      )}
      <span className="text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage >= totalPages ? (
        <span className="rounded border border-gray-200 px-3 py-1 text-gray-400">Next</span>
      ) : (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded border border-gray-300 px-3 py-1 hover:bg-gray-100"
        >
          Next
        </Link>
      )}
    </div>
  );
}
