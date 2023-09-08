import { Category } from '../types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

// TODO придумать как отлавливать ошибки. Мы должны показывать альтернативную страницу,
// чтобы пользователь не смог ничего купить/добавить и НЕ СМОГ ПЕРЕЙТИ НА другие старницы

export const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);

    return res.json();
  } catch (e) {
    console.log('[ACTION: getCategories] Unable to fetch the categories.', e);
    return [];
  }
};

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};
