'use client';

import { getClient } from '@src/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useCallback, useEffect, useState } from 'react';
import { objectType } from './types';
import { useParams } from 'next/navigation';
import { useMenuStore } from './zustand/menu';

function Provider({ children }: { children: React.ReactNode }) {
  const updateMenus = useMenuStore((state) => state.updateMenus);
  const menus = useMenuStore((state) => state.menu);
  const params = useParams<{ category: string; gender: string }>();
  const queryClient = getClient();

  useEffect(() => {
    readMenuUrl(params);
  }, [params]);

  const readMenuUrl = useCallback(
    (params: objectType) => {
      updateMenus(params);
    },
    [updateMenus]
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Provider;
