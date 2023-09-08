'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import { toast } from 'react-hot-toast';

type Props = {
  data: Category[];
};

export const MainNav: React.FC<Props> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  useEffect(() => {
    setIsMounted(true);
    
    if (!data.length) {
      toast.error('Unable to fetch the categories.');
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
