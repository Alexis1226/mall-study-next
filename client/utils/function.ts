import { categoryObj } from '@src/constants/category';

/**
 * string을 받아 첫글자만 대문자로 바꿔주는 함수
 * @param str string
 * @returns string
 */
export const capitalize = (str: string) => {
  if (typeof str === 'string') return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * URL에서 받은 Params를 DB에 저장된 단어로 변환
 * @param fromUrl url에서 받은 Params
 */
export const changeToDBCategory = (
  fromUrl: string
):
  | (typeof categoryObj)[keyof typeof categoryObj]
  | (typeof categoryObj.clothes)[keyof typeof categoryObj.clothes]
  | (
      | (typeof categoryObj)[keyof typeof categoryObj]
      | (typeof categoryObj.clothes)[keyof typeof categoryObj.clothes]
    )[] => {
  if (fromUrl === 'shoes-accessories') {
    const dbCategoryArr = fromUrl.split('-').map((word) => {
      // @ts-expect-error : word에는 shoes 또는 accessories만 할당 가능
      const keyValue: 'shoes' | 'accessories' = word;
      return categoryObj[keyValue];
    });
    return dbCategoryArr;
  } else if (fromUrl === 'clothes') return Object.values(categoryObj.clothes);
  else {
    const flatCategoryObj = {
      ...categoryObj.clothes,
      ...categoryObj,
    };
    // @ts-expect-error : 해당 블럭에는 dbCategory 타입에 해당하는 fromUrl 변수만 진입 가능
    const dbCategory: keyof typeof flatCategoryObj = fromUrl;
    return flatCategoryObj[dbCategory];
  }
};
