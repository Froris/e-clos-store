import { getProducts } from '@/actions/products';
import { NoResults } from '@/components/NoResults';
import { ProductsList } from '@/components/ProductsList';

type Props = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
};

export const Products: React.FC<Props> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  return (
    <section className='mt-6 lg:col-span-4 lg:mt-0'>
      {products.length === 0 && <NoResults />}
      <ProductsList items={products} />
    </section>
  );
};
