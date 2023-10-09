import { Billboard } from '../types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (query?: {
  isMain: boolean;
}): Promise<Billboard[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isMain: query ? `${query.isMain}` : 'false',
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getBillboard;
