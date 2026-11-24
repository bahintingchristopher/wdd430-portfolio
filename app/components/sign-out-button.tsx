'use client';

import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <button
      type="button"
      className="rounded-lg bg-white px-4 py-2 font-medium text-blue-700 shadow-sm transition hover:bg-slate-100"
      onClick={() => signOut({ redirectTo: '/' })}
    >
      Sign Out
    </button>
  );
}
