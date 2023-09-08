'use client';

import { MouseEventHandler } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Expand, ShoppingCart } from 'lucide-react';

import { IconButton } from '@/components/IconButton';
import { Currency } from '@/components/Currency';
import usePreviewModal from '@/hooks/usePreviewModal';
import { useCart } from '@/hooks/useCartStorage';
import { Product } from '@/types';

type Props = {
  data: Product;
};

export const ProductCard: React.FC<Props> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <article
      onClick={handleClick}
      className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      {/* Image & actions */}
      <section className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image
          src={data.images?.[0]?.url}
          alt=''
          fill
          className='aspect-square object-cover rounded-md'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className='text-gray-600' />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className='text-gray-600' />}
            />
          </div>
        </div>
      </section>
      {/* Description */}
      <section>
        <p className='font-semibold text-lg'>{data.name}</p>
        <p className='text-sm text-gray-500'>{data.category?.name}</p>
      </section>
      {/* Price & Review */}
      <section className='flex items-center justify-between'>
        <Currency value={data?.price} />
      </section>
    </article>
  );
};
