import { Product } from '../types';
import { ProductCard } from '@/components/ProductCard';
import { NoResults } from '@/components/NoResults';

type Props = {
  title: string;
  items: Product[];
};

export const ProductList: React.FC<Props> = ({ title, items }) => {
  return (
    <article className='space-y-4'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      {items.length === 0 && <NoResults />}
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </section>
    </article>
  );
};
