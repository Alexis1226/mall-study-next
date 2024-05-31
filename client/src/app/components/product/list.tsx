import { Suspense } from 'react';
import ProductCard from '../card/Product';
import { productType } from '@utils/types';

const ProductList = ({ data }: { data: productType[] }) => {
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

export default ProductList;
