import React from 'react';
import { cn } from '@utils/cn';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@components/ui/card';
import { productType } from '@utils/types';
import { ShoppingCart01Icon } from 'hugeicons-react';
import Image from 'next/image';

type CardProps = React.ComponentProps<typeof Card>;

export const ProductCard = ({ className, item, ...props }: CardProps & { item: productType }) => {
  const {
    id,
    name,
    price,
    size,
    colors,
    texture,
    thumbnail_url,
    img_url,
    created_at,
    updated_at,
    category_1,
    category_2,
  } = item;

  return (
    <Card className={cn('w-[100%]', className)} {...props}>
      <CardHeader>
        <CardTitle
          style={{
            fontSize: '30px',
            width: '90%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="relative flex items-center space-x-4 rounded-md border p-4 aspect-product">
          <Image src={img_url[0]} alt={`image_${id}`} fill></Image>
        </div>
        <div>
          {colors?.map((color, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span
                style={{ background: `${color}` }}
                className="flex h-5 w-5 translate-y-1 rounded-full"
              />
              {color}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="flex w-full text-2xl px-8 justify-between">
          <ShoppingCart01Icon size={24} color="white" />₩
          {Number(price.substring(1)).toLocaleString()}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
