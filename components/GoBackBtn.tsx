'use client';
import Button from '@/components/Button';
import { ArrowLeftCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Props = {};

export const GoBackBtn: React.FC<Props> = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.back();
  };

  return (
    <Button
      className='px-3 flex items-center gap-x-2 bg-transparent text-black border-black'
      onClick={handleOnClick}>
      <ArrowLeftCircle size='30' />
      <span className='text-lg'>Go back</span>
    </Button>
  );
};
