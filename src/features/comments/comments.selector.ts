import { createSelector } from 'reselect';
import { MapToList } from '../../utils';
import { Post } from '../posts/posts.model';
import { RootState } from '../store';
import { Comment } from './comments.model';

export const commentsOfPostSelector = (id: Post['id']) =>
  createSelector(
    (state: RootState) => state.comments,
    (commentsMap) =>
      MapToList(commentsMap).filter((comment: Comment) => comment.postId == id)
  );
