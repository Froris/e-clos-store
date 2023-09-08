'use client';

import qs from 'query-string';

import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '@/components/Button';
import { cn } from '@/lib/utils';

type Props = {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
};

export const Filter: React.FC<Props> = ({ data, name, valueKey }) => {
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
