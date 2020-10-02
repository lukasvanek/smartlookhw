import { createModel } from '@rematch/core';
import { getCommentsOfPost } from '../../api';
import { RootModel } from '../root.model';
import assoc from 'ramda/es/assoc';
import { ListToMap } from '../../utils';
import { Post } from '../posts/posts.model';

export type Comment = {
  body: string;
  email: string;
  id: string;
  name: string;
  postId: Post['id'];
};

export type CommentsMap = {
  [id: string]: Comment;
};

export const comments = createModel<RootModel>()({
  state: {} as CommentsMap,
  reducers: {
    addMany: (state, payload: CommentsMap) => ({ ...state, ...payload }),
  },
  effects: (dispatch) => ({
    async fetchCommentsOfPost(id: string) {
      const res: Comment[] = await getCommentsOfPost(id);
      dispatch.comments.addMany(ListToMap(res));
    },
  }),
});
