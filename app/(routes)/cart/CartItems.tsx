'use client';

import { CartItem } from '@/components/CartItem';
import { useCart } from '@/hooks/useCartStorage';
import { useIsMounted } from '@/hooks/useIsMounted';

type Props = {};

export const CartItems: React.FC<Props> = () => {
  const isMounted = useIsMounted();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
 
  return (
    <div className='lg:col-span-7'>
      {cart.items.length === 0 && (
        <p className='text-neutral-500'>No items added to cart.</p>
      )}
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};
