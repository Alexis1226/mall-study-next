'use client';

import { Breadcrumb, BreadcrumbList } from '@components/ui/breadcrumb';
import { BreadcrumbItem } from '@components/ui/breadcrumb';
import { BreadcrumbLink } from '@components/ui/breadcrumb';
import { BreadcrumbSeparator } from '@components/ui/breadcrumb';
import { BreadcrumbPage } from '@components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

const CustomBreadcrumb = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 1 &&
          pathNames.map((link, index) => (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${pathNames.slice(0, index + 1).join('/')}`}>
                  link
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pathNames[pathNames.length - 1]}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
