import { createModel } from '@rematch/core';
import { getPosts } from '../../api';
import { ListToMap } from '../../utils';
import { RootModel } from '../root.model';

export type Post = {
  id: string;
  body: string;
  title: string;
  userId: string;
};

export type PostsMap = {
  [id: string]: Post;
};

export const posts = createModel<RootModel>()({
  state: {} as PostsMap,
  reducers: {
    set: (state, payload: PostsMap) => payload,
  },
  effects: (dispatch) => ({
    async load() {
      const res: Post[] = await getPosts();
      dispatch.posts.set(ListToMap(res));
    },
  }),
});
