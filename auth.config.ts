// auth.config.ts  (project root)
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login', // use your own login page instead of the Auth.js default
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Protect all routes under /dashboard
      const isProtected = nextUrl.pathname.startsWith('/dashboard');

      if (isProtected) {
        if (isLoggedIn) return true;
        return false; // redirects to /login
      }

      return true;
    },
  },
  providers: [], // providers are added in auth.ts
} satisfies NextAuthConfig;