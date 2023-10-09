import { Loader } from '@/components/Loader';

const ProductsLoader = () => {
  return (
    <section className='mt-6 col-span-4 flex justify-center items-center'>
      <Loader size={60} color='#232120' />
    </section>
  );
};

export default ProductsLoader;
