import { createModel } from '@rematch/core';
import { RootModel } from '../root.model';

export const users = createModel<RootModel>()({
  state: 0,
  reducers: {},
  effects: (dispatch) => ({}),
});
