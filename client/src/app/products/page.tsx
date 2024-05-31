'use client';

import { useCallback, useEffect, useState } from 'react';
import ProductList from '../components/product/list';
import { productType } from '@utils/types';
import axios from 'axios';

const ProductListPage = () => {
  // const fetchMoreRef = useRef<HTMLDivElement>(null);
  // const intersecting = useIntersection(fetchMoreRef);

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
