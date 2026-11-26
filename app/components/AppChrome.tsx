'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

interface AppChromeProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export default function AppChrome({ header, footer, children }: AppChromeProps) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <>
      {!isLoginPage && header}
      {children}
      {!isLoginPage && footer}
    </>
  );
}
