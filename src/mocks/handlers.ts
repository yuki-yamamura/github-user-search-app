import { rest } from 'msw';
import { fakeUser } from './fakeData';

export const handlers = [
  rest.get('https://api.github.com/users/octocat', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeUser));
  }),
];
