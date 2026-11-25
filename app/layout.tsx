import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import AppChrome from './components/AppChrome';
import Provider from './provider';
import { auth } from '@/auth';

export const instant = false;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <Provider session={session}>
          <AppChrome header={<Header />} footer={<Footer />}>
            {children}
          </AppChrome>
        </Provider>
      </body>
    </html>
  );
}
