import { Models } from '@rematch/core';
import { comments } from './comments/comments.model';
import { posts } from './posts/posts.model';
import { users } from './users/users.model';

export interface RootModel extends Models<RootModel> {
  comments: typeof comments;
  posts: typeof posts;
  users: typeof users;
}

export const models: RootModel = { comments, posts, users };
