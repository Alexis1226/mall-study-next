import type { Metadata } from 'next';
import '@styles/globals.css';
import '@fontsource/dongle';
import Header from '@components/layout/header';
import Provider from '@utils/provider';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Mall-study',
  description: 'site for studying mall',
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable}`} style={{ fontFamily: 'Dongle' }}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
