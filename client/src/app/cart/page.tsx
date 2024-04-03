'use client';

import { QueryKeys, graphQlFetcher } from '../../queryClient';
import { CartType, GET_CART } from '../../graphql/cart';
import { useQuery } from '@tanstack/react-query';
import CartList from '../components/cart/cart';

const Cart = () => {
  const { data, error, isSuccess } = useQuery({
    queryKey: [QueryKeys.CART],
    queryFn: () => graphQlFetcher(GET_CART),
  });

  const cartItems = (data?.cart || []) as CartType[];

  if (!cartItems.length) return <div> 장바구니가 비었어요</div>;

  return <CartList items={cartItems} />;
};

export default Cart;
