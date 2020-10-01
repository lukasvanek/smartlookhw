/** @jsx jsx */
import { jsx, Card } from 'theme-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Post } from '../features/posts/posts.model';
import { RootState, Dispatch } from '../features/store';
import { MapToList } from '../utils';
import { User } from '../features/users/users.model';

const Identity = ({ userId }: { userId: User['id'] }) => {
  const user = useSelector((state: RootState) => state.users[userId]) || {};
  return <Link to={`/user/${userId}`}>{user.name}</Link>;
};

const PostPreview = ({ post }: { post: Post }) => {
  return (
    <Card>
      <h3>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h3>
      <p>{post.body}</p>
      <Identity userId={post.userId} />
    </Card>
  );
};

const Posts = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.posts.load();
  }, []);

  return (
    <div>
      {MapToList(posts).map((post: Post) => (
        <PostPreview key={`post-${post.id}`} post={post} />
      ))}
    </div>
  );
};

export default Posts;
