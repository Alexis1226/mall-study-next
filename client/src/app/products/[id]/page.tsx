'use client';
import { useQuery } from '@tanstack/react-query';
import ProductDetail from '../../components/product/detail';
import { RequestDocument } from 'graphql-request';
import { QueryKeys, graphQlFetcher } from '@src/queryClient';
import { GET_PRODUCT, Product } from '@src/graphql/products';
import { useParams } from 'next/navigation';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery<{ product: Product }>({
    queryKey: [QueryKeys.PRODUCTS, id],
    queryFn: () => graphQlFetcher(GET_PRODUCT as RequestDocument, { id }),
  });

  if (!data) return null;

  return (
    <div>
      <ProductDetail item={data.product} />
    </div>
  );
};

export default ProductDetailPage;
