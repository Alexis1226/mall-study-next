import { QueryClient } from '@tanstack/react-query';
import request, { RequestDocument } from 'graphql-request';

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            gcTime: Infinity,
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL as string;

export const graphQlFetcher = (query: RequestDocument, variables = {}) =>
  request(`${BASE_URL}/graphql`, query, variables, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': BASE_URL,
  });

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
  CART: 'CART',
};
