'use client';
import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { IconButton } from '@/components/IconButton';

type Props = {
  sizes: Size[];
  colors: Color[];
};

type FilterProps = {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
};

type MobileFiltersProps = {
  sizes: Size[];
  colors: Color[];
};

export const Filters: React.FC<Props> = ({ sizes, colors }) => {
  return (
    <article>
      <section className='lg:hidden'>
        <MobileFilters sizes={sizes} colors={colors} />
      </section>
      <section className='hidden lg:block'>
        <Filter valueKey='sizeId' name='Sizes' data={sizes} />
        <Filter valueKey='colorId' name='Colors' data={colors} />
      </section>
    </article>
  );
};

export const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // valueKey = sizeId/colorId
  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    // {[valueKey = colorId]: wkhcksd2k2h3kj3h}
    const query = {
      ...current,
      [valueKey]: id,
    };

    // Remove selected filter colorId/sizeId if already selected
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    // Creating new URL with query object
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    // Redirecting to the same category page but with
    // updated URL with queries.
    router.push(url, { scroll: false });
  };

  return (
    <div className='mb-8'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <hr className='my-4' />
      <div className='flex flex-wrap gap-2'>
        {data.map((filter) => (
          <div key={filter.id} className='flex items-center'>
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => onClick(filter.id)}>
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className='flex items-center gap-x-2'>
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as='div'
        className='relative z-40 lg:hidden'
        onClose={onClose}>
        {/* Background color and opacity */}
        <div className='fixed inset-0 bg-black bg-opacity-25' />

        {/* Dialog position */}
        <div className='fixed inset-0 z-40 flex'>
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            {/* Close button */}
            <div className='flex items-center justify-end px-4'>
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className='p-4'>
              <Filter valueKey='sizeId' name='Sizes' data={sizes} />
              <Filter valueKey='colorId' name='Colors' data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
