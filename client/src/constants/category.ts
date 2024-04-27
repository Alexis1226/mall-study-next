export const category = {
  clothes: { dresses: 'Dress', outer: 'Outer', shirts: 'Shirts', sportswear: 'Sportswear' },
  accessories: 'Acc',
  shoes: 'Shoes',
};

/**
 * URL에서 받은 Params를 DB에 저장된 단어로 변환
 * @param fromUrl url에서 받은 Params
 */
export const changeToDBCategory = (fromUrl: string) => {
  if (fromUrl === 'accessories' || fromUrl === 'shoes') return category[fromUrl];
  else return category.clothes[fromUrl];
};
