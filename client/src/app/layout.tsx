import type { Metadata } from 'next';
import '@styles/globals.css';
import '@fontsource/dongle';
import Header from '@components/layout/header';
import Provider from '@utils/provider';

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
      <body style={{ fontFamily: 'Dongle' }}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
