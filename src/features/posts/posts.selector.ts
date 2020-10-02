import { createSelector } from 'reselect';
import { MapToList } from '../../utils';
import { RootState } from '../store';
import { User } from '../users/users.model';
import { Post } from './posts.model';

export const postsOfUserSelector = (id: User['id']) =>
  createSelector(
    (state: RootState) => state.posts,
    (postsMap) =>
      MapToList(postsMap).filter(
        (post: Post) => Number(post.userId) === Number(id)
      )
  );
