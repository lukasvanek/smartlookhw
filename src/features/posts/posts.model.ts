import { createModel } from '@rematch/core';
import { getPost, getPosts } from '../../api';
import { ListToMap } from '../../utils';
import { RootModel } from '../root.model';
import pluck from 'ramda/es/pluck';
import uniq from 'ramda/es/uniq';
import assoc from 'ramda/es/assoc';
import { User } from '../users/users.model';

export type Post = {
  id: string;
  body: string;
  title: string;
  userId: User['id'];
};

export type PostsMap = {
  [id: string]: Post;
};

export const posts = createModel<RootModel>()({
  state: {} as PostsMap,
  reducers: {
    setAll: (state, payload: PostsMap) => payload,
    setById: (state, payload: Post) => assoc(payload.id, payload)(state),
  },
  effects: (dispatch) => ({
    async fetchById(id: string) {
      const res: Post = await getPost(id);
      dispatch.posts.setById(res);
    },
    async load(payload, rootState) {
      const res: Post[] = await getPosts();
      dispatch.posts.setAll(ListToMap(res));

      // load users of posts
      const userIds = uniq(pluck('userId')(res));
      userIds.forEach((userId) => {
        if (!rootState.users[userId]) {
          dispatch.users.fetchById(userId);
        }
      });
    },
  }),
});
