import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.css';
import Gnb from './components/gnb';
import Provider from 'utils/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mall-study',
  description: 'site for studying mall',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Gnb />
          {children}
        </Provider>
      </body>
    </html>
  );
}
