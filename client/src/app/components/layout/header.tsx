'use client';

import CustomBreadcrumb from './breadcrumb';
import Navigation from './navigation';
import { useParams, usePathname } from 'next/navigation';

const Header = () => {
  const params = useParams();
  const pathname = usePathname();
  console.log('params', params);
  console.log('pathname', pathname);
  return (
    <div>
      <Navigation />
      <CustomBreadcrumb />
    </div>
  );
};

export default Header;
