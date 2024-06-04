import React from 'react';
import Header from '@components/layout/header';
import { cn } from '@utils/cn';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={cn('p-4')}>
      <Header />
      {children}
    </div>
  );
};

export default layout;
