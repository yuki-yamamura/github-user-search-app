import { rest } from 'msw';
import { fakeUsers } from './fakeData';

export const handlers = [
  rest.get('https://api.github.com/users/octocat', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeUsers.at(0)));
  }),
  rest.get('https://api.github.com/users/yuki-yamamura', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeUsers.at(1)));
  }),
];
