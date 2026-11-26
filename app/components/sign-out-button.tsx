'use client';

import { signOutUser } from '@/app/lib/actions';

export function SignOutButton({
  className = 'rounded-lg bg-white px-4 py-2 font-medium text-blue-700 shadow-sm transition hover:bg-slate-100',
}: {
  className?: string;
}) {
  return (
    <form action={signOutUser}>
      <button type="submit" className={className}>
        Sign Out
      </button>
    </form>
  );
}
