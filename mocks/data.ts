import { Billboard, Product } from '@/types';

export const mockBillboard: Billboard = {
  id: '123aa123',
  label: 'Test Billboard',
  imageUrl: 'example.com',
  cloudinaryImageId: 'abc123',
};

export const mockProduct: Product = {
  id: '12345',
  category: {
    id: '54321',
    name: 'Example Category',
    billboard: {
      id: '67890',
      label: 'Test label',
      imageUrl: 'example.com',
      cloudinaryImageId: 'abc123',
    },
  },
  name: 'Example Product',
  price: '29.99',
  isFeatured: true,
  size: {
    id: '1',
    name: 'Medium',
    value: 'M',
  },
  color: {
    id: '2',
    name: 'Red',
    value: '#FF0000',
  },
  images: [
    {
      id: '101',
      url: 'https://example.com/image1.jpg',
    },
    {
      id: '102',
      url: 'https://example.com/image2.jpg',
    },
  ],
};
