'use client';

import { Breadcrumb, BreadcrumbList } from '@components/ui/breadcrumb';
import { BreadcrumbItem } from '@components/ui/breadcrumb';
import { BreadcrumbLink } from '@components/ui/breadcrumb';
import { BreadcrumbSeparator } from '@components/ui/breadcrumb';
import { BreadcrumbPage } from '@components/ui/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CustomBreadcrumb = () => {
  const urlPath = usePathname();

  return (
    <Breadcrumb className="mt-4 text-xs">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {urlPath
          .split('/')
          .slice(1)
          .map((word) => {
            return (
              <>
                <BreadcrumbSeparator key={word} />
                <BreadcrumbItem>{word}</BreadcrumbItem>
              </>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
