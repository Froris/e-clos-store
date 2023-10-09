import Image, { StaticImageData } from 'next/image';
import Button from '@/components/Button';

type PayOptionCardProps = {
  image: StaticImageData;
  title: string;
  onClick: () => void;
};

export const PayOptionCard: React.FC<PayOptionCardProps> = ({
  image,
  title,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      className='w-2/3 md:w-1/3 h-[65px] relative
      border-2 border-neutral-300 rounded-md p-1 bg-transparent
      overflow-hidden'>
      <Image
        alt={title}
        src={image}
        quality={100}
        sizes='10vw'
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </Button>
  );
};
