import { Container } from '@/components/Container';
import { Summary } from '@/(routes)/cart/Summary';
import { CartItems } from '@/(routes)/cart/CartItems';

export const revalidate = 0;

const CartPage = () => {
  return (
    <main className='bg-white'>
      <Container>
        <div className='px-4 py-16 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-black'>Shopping Cart</h1>
          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <CartItems />
            <Summary />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CartPage;
