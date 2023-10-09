import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

export const MainPageSectionSkeleton = ({
  title,
  amount = 4,
}: {
  title?: string;
  amount?: number;
}) => {
  const arr = new Array(amount).fill(undefined);

  return (
    <article className='flex flex-col gap-y-8 w-full'>
      <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
      <Separator className='border-[1px] border-neutral-200' />

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {arr.map((item, index) => (
          <Skeleton
            key={index}
            className='bg-gray-300 rounded-xl w-[266.25px] h-[370.25px] p-3 space-y-4'>
            <Skeleton className='bg-gray-200 rounded-xl w-[240.25px] h-[240.25px]' />
          </Skeleton>
        ))}
      </section>
    </article>
  );
};
