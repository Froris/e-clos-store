import getBillboard from '../actions/billboards';
import { mockBillboard } from '../mocks/data';

jest.mock('query-string', () => ({
  stringifyUrl: jest
    .fn()
    .mockReturnValueOnce(
      `${process.env.NEXT_PUBLIC_API_URL}/billboards?isMain=false`
    ),
}));

describe('[ACTIONS] Billboards', () => {
  it('Should [GET] billboards', async () => {
    const billboards = await getBillboard();

    expect(billboards).toEqual([mockBillboard]);
  });
});
