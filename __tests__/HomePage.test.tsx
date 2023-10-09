import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Billboard } from '../components/Billboard';
import { mockBillboard, mockProduct } from '../mocks/data';
import { ProductsList } from '@/components/ProductsList';

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ storeId: 'test-store-123' }),
  usePathname: jest.fn().mockReturnValue('/test-store-123'),
  useRouter: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

describe('[HOME PAGE] Rendering', () => {
  it('should render <Billboard /> with correct image url', async () => {
    const { container } = render(<Billboard data={[mockBillboard]} />);

    const billboardImage = container.querySelector(
      '[data-testid="billboard-image"]'
    ) as Element;

    const backgroundImageStyle = window
      .getComputedStyle(billboardImage)
      .getPropertyValue('background-image');

    expect(screen.getByTestId('billboard')).toBeInTheDocument();
    expect(screen.getByTestId('billboard-image')).toBeInTheDocument();
    expect(backgroundImageStyle).toContain(`url(example.com)`);
  });

  it('Should render <ProductsList /> with correct data', () => {
    render(<ProductsList items={[mockProduct]} />);

    expect(screen.getByText('Example Product')).toBeInTheDocument();
    expect(screen.getByText('Example Category')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });
});
