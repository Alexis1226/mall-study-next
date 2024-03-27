import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { Product } from '@src/graphql/products';
import { ADD_CART } from '@src/graphql/cart';
import { graphQlFetcher } from '@src/queryClient';
import Image from 'next/image';

const ProductItem = ({ id, imageUrl, price, title }: Product) => {
  const { mutate: addCart } = useMutation((id: string) => graphQlFetcher(ADD_CART, { id }));

  return (
    <li className="product-item">
      <Link href={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <Image
          className="product-item__image"
          src={imageUrl}
          alt="item image"
          width={300}
          height={300}
        />
      </Link>
      <div className="product__price-button">
        <span className="product-item__price">₩{price}</span>
        <button className="product-item__add-cart" onClick={() => addCart(id)}>
          담기
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
