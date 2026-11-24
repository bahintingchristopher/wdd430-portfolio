'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="grid gap-5">
      <div>
        <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          required
          minLength={3}
          autoComplete="username"
          placeholder="bahintingchristopher"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          minLength={6}
          required
          autoComplete="current-password"
          placeholder="Enter your password"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {errorMessage && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        aria-disabled={isPending}
        disabled={isPending}
        type="submit"
        className="mt-1 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}
