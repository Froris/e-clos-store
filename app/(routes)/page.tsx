import { Suspense } from 'react';
import { Container } from '@/components/Container';
import { Billboard } from '@/components/Billboard';
import getBillboard from '../../actions/billboards';
import { MainPageSection } from '@/(routes)/MainPageSection';
import { MainPageSectionSkeleton } from '@/(routes)/MainPageSectionSkeleton';

export const revalidate = 0;

const Page = async () => {
  const billboard = await getBillboard({ isMain: true });

  return (
    <Container>
      <div className='flex flex-col gap-y-8 p-4 sm:p-6 lg:p-8 space-y-20'>
        {!!billboard.length && <Billboard data={billboard} />}
        <Suspense fallback={<MainPageSectionSkeleton title='Featured' />}>
          <MainPageSection title='Featured' query={{ isFeatured: true }} />
        </Suspense>
        <Suspense fallback={<MainPageSectionSkeleton title='New products' />}>
          <MainPageSection title='New products' query={{}} />
        </Suspense>
      </div>
    </Container>
  );
};

export default Page;
