import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import AppChrome from './components/AppChrome';
import Provider from './provider';
import type { Metadata } from 'next';

export const instant = false;

export const metadata: Metadata = {
  title: {
    default: 'Christopher T. Bahinting | Project Portfolio',
    template: '%s | Project Portfolio',
  },
  description:
    "Explore Christopher T. Bahinting's web development portfolio, including full-stack applications, APIs, and school projects.",
  metadataBase: new URL(
    'https://wdd430-portfolio-feuhk17zp-bahintingchristopher-1330s-projects.vercel.app',
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <AppChrome header={<Header />} footer={<Footer />}>
            {children}
          </AppChrome>
        </Provider>
      </body>
    </html>
  );
}
