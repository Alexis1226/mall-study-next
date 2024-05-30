type TcategoryObj = {
  clothes: { [key: string]: string };
  accessories: string;
  shoes: string;
};

export const categoryObj = {
  clothes: { dresses: 'Dress', outer: 'Outer', shirts: 'Shirts', sportswear: 'Sportswear' },
  accessories: 'Acc',
  shoes: 'Shoes',
};

/**
 * URL에서 받은 Params를 DB에 저장된 단어로 변환
 * @param fromUrl url에서 받은 Params
 */
export const changeToDBCategory = (fromUrl: string): string | string[] => {
  console.log(fromUrl);
  if (fromUrl === 'accessories' || fromUrl === 'shoes') return categoryObj[fromUrl];
  else if (fromUrl === 'clothes') return Object.values(categoryObj.clothes);
  else return categoryObj.clothes[fromUrl];
};
