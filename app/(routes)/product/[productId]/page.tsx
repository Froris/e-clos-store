import { getProduct, getProducts } from '@/actions/products';
import { MainContainer } from '@/components/Container';

import { Gallery } from '@/components/Gallery';
import { Info } from '@/components/Info';
import { NoResults } from '@/components/NoResults';
import { ProductsList } from '@/components/ProductsList';

type Props = {
  params: {
    productId: string;
  };
};

const Page: React.FC<Props> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <MainContainer>
      <article className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
        <Gallery images={product.images} />
        <section className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
          <Info data={product} />
        </section>
      </article>
      <hr className='my-10' />
      <article className='space-y-4'>
        <h3 className='font-bold text-3xl'>Related Products</h3>
        {suggestedProducts.length === 0 && <NoResults />}
        <ProductsList items={suggestedProducts} />
      </article>
    </MainContainer>
  );
};
export default Page;
