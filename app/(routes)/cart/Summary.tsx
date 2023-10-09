'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';

import { toast } from 'react-hot-toast';
import { useCart } from '@/hooks/useCartStorage';

import { Currency } from '@/components/Currency';
import { PayOptionCard } from '@/components/PayOptionCard';

import stripe from '@/assets/stripe.png';
import liqpay from '@/assets/liqpay.png';
import portmone from '@/assets/portmone.png';
import { useIsMounted } from '@/hooks/useIsMounted';

export const Summary = () => {
  const searchParams = useSearchParams();
  const isMounted = useIsMounted();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onStripeCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  const onLiqpayCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  const onPortmoneCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium text-gray-900'>Order summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Order total</div>
          <Currency value={totalPrice} />
        </div>

        {items.length > 0 && (
          <div className='flex flex-col gap-y-9 py-16'>
            <h1 className='text-xl font-bold text-black'>Pay with...</h1>
            <section className='w-full gap-2 flex flex-col md:flex-row items-center justify-between'>
              <PayOptionCard
                onClick={onStripeCheckout}
                image={stripe}
                title='Stripe'
              />

              <PayOptionCard
                onClick={onLiqpayCheckout}
                image={liqpay}
                title='Liqpay'
              />
              <PayOptionCard
                onClick={onPortmoneCheckout}
                image={portmone}
                title='Portmone'
              />
            </section>
          </div>
        )}
      </div>

      {/*<Button*/}
      {/*  onClick={onCheckout}*/}
      {/*  disabled={items.length === 0}*/}
      {/*  className='w-full mt-6'>*/}
      {/*  Checkout*/}
      {/*</Button>*/}
    </div>
  );
};
