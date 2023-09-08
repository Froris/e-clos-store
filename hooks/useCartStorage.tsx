import { Product } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast('Item already in cart.');
        }

        set({ items: [...get().items, data] });
        toast.success('Item added to cart.');
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const filteredItems = currentItems.filter((item) => item.id !== id);

        set({ items: filteredItems });

        toast.success('Item removed from the cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
