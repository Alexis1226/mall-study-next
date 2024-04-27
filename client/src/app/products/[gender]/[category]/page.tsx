'use client';
import ProductCard from '@src/app/components/card/Product';
import { productType } from '@utils/types';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';

const ProductListPage = () => {
  const [data, setData] = useState<productType[]>();

  const { gender, category } = useParams();

  async function getData(origin: string) {
    const { data } = await axios.get(`${origin}/products/${gender}/${category}/api`);
    setData(data.data);
  }

  useEffect(() => {
    const origin = (window && window.location.origin) ?? '';
    getData(origin);
  }, []);

  return (
    <div
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(20%, 300px))' }}
      className="grid gap-4 grid-cols-3 my-8"
    >
      <Suspense fallback={'loading..'}>
        {data?.map((value) => (
          <ProductCard key={value.id} item={value}></ProductCard>
        ))}
      </Suspense>
    </div>
  );
};

export default ProductListPage;
