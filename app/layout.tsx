import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Header from './components/Header';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Body fat calculator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
