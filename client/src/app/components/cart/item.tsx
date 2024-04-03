import { useMutation } from '@tanstack/react-query';
import { ForwardedRef, SyntheticEvent, forwardRef } from 'react';
import ItemData from './itemData';
import { CartType, DELETE_CART, UPDATE_CART } from '@src/graphql/cart';
import { QueryKeys, getClient, graphQlFetcher } from '@src/queryClient';

const CartItem = (
  { id, product: { imageUrl, price, title, createdAt }, amount }: CartType,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation({
    mutationFn: ({ id, amount }: { id: string; amount: number }) =>
      graphQlFetcher(UPDATE_CART, { id, amount }),
    onMutate: async ({ id, amount }) => {
      await queryClient.cancelQueries({ queryKey: [QueryKeys.CART] });
      const { cart: prevCart } = queryClient.getQueryData<{ cart: CartType[] }>([
        QueryKeys.CART,
      ]) || { cart: [] };
      if (!prevCart) return null;

      const targetIndex = prevCart.findIndex((CartItem) => CartItem.id === id);
      if (targetIndex === undefined || targetIndex < -1) return prevCart;

      const newCart = [...prevCart];
      newCart.splice(targetIndex, 1, { ...newCart[targetIndex], amount });
      queryClient.setQueryData([QueryKeys.CART], { cart: newCart });
      return prevCart;
    },
    onSuccess: ({ updateCart }) => {
      const { cart: prevCart } = queryClient.getQueryData<{ cart: CartType[] }>([
        QueryKeys.CART,
      ]) || { cart: [] };
      const targetIndex = prevCart?.findIndex((CartItem) => CartItem.id === updateCart.id);
      if (!prevCart || targetIndex === undefined || targetIndex < 0) return;

      const newCart = [...prevCart];
      newCart.splice(targetIndex, 1, updateCart);
      queryClient.setQueryData([QueryKeys.CART], { cart: newCart });
    },
  });

  const { mutate: deleteCart } = useMutation({
    mutationFn: ({ id }: { id: string }) => graphQlFetcher(DELETE_CART, { id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.CART] });
    },
  });

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    if (amount < 1) return;
    updateCart({ id, amount });
  };

  const handleDeleteItem = () => {
    deleteCart({ id });
  };
  return (
    <li className="cart-item">
      <input
        className="cart-item__checkbox"
        type="checkbox"
        name={`select-item`}
        ref={ref}
        data-id={id}
        disabled={!createdAt}
      />
      <ItemData imageUrl={imageUrl} price={price} title={title} />
      <div className="cart_amount-button">
        {!createdAt ? (
          <div className="cart-item__delete-msg">삭제된 상품입니다</div>
        ) : (
          <input
            className="cart_item__amount"
            type="number"
            min={1}
            value={amount}
            onChange={handleUpdateAmount}
            style={{ color: 'black' }}
          />
        )}
        <button className="cart-item__button" type="button" onClick={handleDeleteItem}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default forwardRef(CartItem);
