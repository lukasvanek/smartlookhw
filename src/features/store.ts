import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { models, RootModel } from './root.model';
import { createLogger } from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({ diff: true, collapsed: true }));
}

export const store = init({
  redux: {
    middlewares,
  },
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
