'use client';
import ProductList from '@src/app/components/product/list';
import { productType } from '@utils/types';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const ProductListPage = () => {
  const [data, setData] = useState<productType[]>([]);

  const { gender, category } = useParams();

  const getData = useCallback(
    async (origin: string) => {
      const { data } = await axios.get(`${origin}/products/${gender}/${category}/api`);
      setData(data.data);
    },
    [category, gender]
  );

  useEffect(() => {
    const origin = (window && window.location.origin) ?? '';
    getData(origin);
  }, [getData]);

  return <ProductList data={data} />;
};

export default ProductListPage;
