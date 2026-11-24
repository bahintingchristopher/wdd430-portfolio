import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import AppChrome from './components/AppChrome';
import Provider from './provider';

export const instant = false;

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
