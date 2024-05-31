export type TcategoryObj = keyof typeof categoryObj & {
  clothes: keyof typeof categoryObj.clothes;
};

export const categoryObj = {
  clothes: { dresses: 'Dress', outer: 'Outer', shirts: 'Shirts', sportswear: 'Sportswear' },
  accessories: 'Acc',
  shoes: 'Shoes',
};
