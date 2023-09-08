import { Size } from '../types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  return res.json();
};

export const getSize = async (id: string): Promise<Size> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};
