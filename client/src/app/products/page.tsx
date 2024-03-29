'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { QueryKeys, graphQlFetcher } from '../../queryClient';
import { useEffect, useRef } from 'react';
import { GET_PRODUCTS, Products } from '@src/graphql/products';
import ProductList from '../components/product/list';
import useIntersection from '@src/hooks/useIntersection';

const ProductListPage = () => {
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useIntersection(fetchMoreRef);

  const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Products>({
      queryKey: [QueryKeys.PRODUCTS, 'products'],
      queryFn: ({ pageParam }) => graphQlFetcher(GET_PRODUCTS, { cursor: pageParam }),
      getNextPageParam: (lastPage) => {
        return lastPage.products.at(-1)?.id;
      },
    });

  useEffect(() => {
    if (!intersecting || !isSuccess || !intersecting || !hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  }, [intersecting]);

  return (
    <div>
      products
      <ProductList list={data?.pages || []} />
      <div ref={fetchMoreRef}></div>
    </div>
  );
};

export default ProductListPage;
