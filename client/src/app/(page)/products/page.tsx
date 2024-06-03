'use client';

import { useCallback, useEffect, useState } from 'react';
import ProductList from '../../components/product/list';
import { productType } from '@utils/types';
import axios from 'axios';

const ProductListPage = () => {
  // const fetchMoreRef = useRef<HTMLDivElement>(null);
  // const intersecting = useIntersection(fetchMoreRef);

  // const { data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } =
  //   useInfiniteQuery<Products>({
  //     queryKey: [QueryKeys.PRODUCTS, 'products'],
  //     queryFn: ({ pageParam }) => graphQlFetcher(GET_PRODUCTS, { cursor: pageParam }),
  //     getNextPageParam: (lastPage) => {
  //       return lastPage.products.at(-1)?.id;
  //     },
  //   });

  // useEffect(() => {
  //   if (!intersecting || !isSuccess || !intersecting || !hasNextPage || isFetchingNextPage) return;
  //   fetchNextPage();
  // }, [intersecting]);

  const [data, setData] = useState<productType[]>([]);

  const getData = useCallback(async (origin: string) => {
    const { data } = await axios.get(`${origin}/products/api`);
    setData(data.data);
  }, []);

  useEffect(() => {
    const origin = (window && window.location.origin) ?? '';
    getData(origin);
  }, [getData]);

  return <ProductList data={data} />;
};

export default ProductListPage;
