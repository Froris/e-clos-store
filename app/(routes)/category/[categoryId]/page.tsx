import { Container } from '@/components/Container';
import { Billboard } from '@/components/Billboard';
import { getSizes } from '@/actions/sizes';
import { getCategory } from '@/actions/categories';
import { getColors } from '@/actions/colors';
import { Filters } from '@/components/Filters';
import { Suspense } from 'react';
import { Products } from '@/(routes)/category/[categoryId]/Products';
import ProductsLoader from '@/(routes)/category/[categoryId]/ProductsLoader';

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
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <main className='bg-white'>
      <Container>
        {category.billboard && (
          <div className='p-4 sm:p-6 lg:p-8'>
            <Billboard data={[category.billboard]} />
          </div>
        )}
        <div className='px-4 sm:px-6 lg:px-8 py-24'>
          <article className='lg:grid lg:grid-cols-5 lg:gap-x-10'>
            <Filters colors={colors} sizes={sizes} />
            <Suspense fallback={<ProductsLoader />}>
              <Products params={params} searchParams={searchParams} />
            </Suspense>
          </article>
        </div>
      </Container>
    </main>
  );
};

export default CategoryPage;
