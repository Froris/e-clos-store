import { MouseEventHandler } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export const IconButton: React.FC<Props> = ({ onClick, icon, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full flex items-center justify-center ' +
          'bg-white border shadow-md p-2 hover:scale-110 transition',
        className
      )}>
      {icon}
    </button>
  );
};
