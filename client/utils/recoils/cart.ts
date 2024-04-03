import { CartType } from '@src/graphql/cart';
import { atom } from 'recoil';

export const checkedCartState = atom<CartType[]>({
  key: 'cartState',
  default: [],
});
