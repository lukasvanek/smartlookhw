import { createModel } from '@rematch/core';
import { getPosts } from '../../api';
import { RootModel } from '../root.model';

export const posts = createModel<RootModel>()({
  state: [],
  reducers: {
    set: (state, payload: []) => payload,
  },
  effects: (dispatch) => ({
    async load() {
      const res: [] = await getPosts();
      dispatch.posts.set(res);
    },
  }),
});
