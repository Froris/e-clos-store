import { Container } from '@/components/Container';
import { Billboard } from '@/components/Billboard';
import getBillboard from '../../actions/billboards';
import { getProducts } from '@/actions/products';
import { ProductList } from '@/components/ProductList';

export const revalidate = 0;

const Page = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('7bfc6851-4fa7-4992-b0be-d6c8b377ab8a');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Page;
