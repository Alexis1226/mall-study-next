'use client';
import ProductCard from '@src/app/components/card/Product';
import { productType } from '@utils/types';
import axios from 'axios';
import { Span } from 'next/dist/trace';
import { useParams } from 'next/navigation';
import React, { Suspense, useCallback, useEffect, useState } from 'react';

const ProductListPage = () => {
  const [data, setData] = useState<productType[]>();

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

  return (
    <div
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(245px, 1fr))' }}
      className="grid gap-4 grid-cols-3 my-8"
    >
      <Suspense fallback={'loading..'}>
        {data?.map((value) => (
          <ProductCard key={value.id} item={value}></ProductCard>
        ))}
      </Suspense>
      {data?.length === 0 && <span className="col-span-full text-center">결과가 없습니다.</span>}
    </div>
  );
};

export default ProductListPage;
