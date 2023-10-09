import { getProducts, Query } from '@/actions/products';
import { Separator } from '@/components/ui/separator';
import { ProductList } from '@/components/ProductList';

interface QueryProps extends Query {
  isNew?: boolean;
}

type Props = {
  title: string;
  query: QueryProps;
};

export const MainPageSection: React.FC<Props> = async ({ title, query }) => {
  const products = await getProducts(query);

  return (
    <article className='flex flex-col gap-y-8'>
      <h2 className='text-3xl font-bold tracking-tight'>{title}</h2>
      <Separator className='border-[1px] border-neutral-200' />

      <ProductList items={products} />
    </article>
  );
};
