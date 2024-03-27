import { ADD_CART } from '@src/graphql/cart';
import { Product } from '@src/graphql/products';
import { graphQlFetcher } from '@src/queryClient';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';

const ProductDetail = ({
  item: { description, price, title, imageUrl, id },
}: {
  item: Product;
}) => {
  const { mutate: addCart } = useMutation((id: string) => graphQlFetcher(ADD_CART, { id }));

  return (
    <div className="product-detail">
      <h2 className="product-detail__title">{title}</h2>
      <Image
        className="product-detail__image"
        src={imageUrl}
        alt="product_image"
        width={300}
        height={300}
      />
      <div className="product__price-button">
        <span className="product-detail__price">₩{price}</span>
        <button className="product-detail__add-cart" onClick={() => addCart(id)}>
          담기
        </button>
      </div>
      <p className="product-detail__description">{description}</p>
    </div>
  );
};

export default ProductDetail;
