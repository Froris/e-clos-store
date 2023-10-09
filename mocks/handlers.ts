import { rest } from 'msw';
import { mockBillboard } from './data';

// TODO сделать POST
const billboardsURL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export const handlers = [
  rest.get(billboardsURL, (req, res, ctx) => {
    return res(ctx.json([mockBillboard]));
  }),
];
