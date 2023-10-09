import { Billboard as BillboardData } from '../types';
import { BillboardSlider } from '../components/BillboardSlider';

type Props = {
  data: BillboardData[];
};

export const Billboard: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.length > 1 ? (
        <BillboardSlider slides={data} />
      ) : (
        <div data-testid='billboard' className='rounded-xl overflow-hidden'>
          {data.map((billboard) => (
            <div
              data-testid='billboard-image'
              key={billboard.id}
              style={{ backgroundImage: `url(${billboard.imageUrl})` }}
              className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center'
            />
          ))}
        </div>
      )}
    </>
  );
};
