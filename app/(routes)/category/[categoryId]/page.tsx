import { Container } from '@/components/Container';
import { Billboard } from '@/components/Billboard';
import { NoResults } from '@/components/NoResults';
import { ProductCard } from '@/components/ProductCard';

import { getProducts } from '@/actions/products';
import { getSizes } from '@/actions/sizes';
import { getCategory } from '@/actions/categories';
import { getColors } from '@/actions/colors';
import { Filter } from '@/(routes)/category/[categoryId]/Filter';
import { MobileFilters } from '@/(routes)/category/[categoryId]/MobileFilters';

export const revalidate = 0;

type Props = {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
};

const CategoryPage: React.FC<Props> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <main className='bg-white'>
      <Container>
        <Billboard data={category.billboard} />
        <div className='px-4 sm:px-6 lg:px-8 pb-24'>
          <article className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
            <section className='lg:hidden'>
              <MobileFilters sizes={sizes} colors={colors} />
            </section>
            <section className='hidden lg:block'>
              <Filter valueKey='sizeId' name='Sizes' data={sizes} />
              <Filter valueKey='colorId' name='Colors' data={colors} />
            </section>
            <section className='mt-6 lg:col-span-4 lg:mt-0'>
              {products.length === 0 && <NoResults />}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </section>
          </article>
        </div>
      </Container>
    </main>
  );
};

export default CategoryPage;
