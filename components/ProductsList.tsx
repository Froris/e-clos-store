import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';

type Props = {
  items: Product[];
};

export const ProductsList: React.FC<Props> = ({ items }) => {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {items.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </section>
  );
};
