/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../features/posts/posts.model';
import { RootState, Dispatch } from '../features/store';
import { MapToList } from '../utils';
import PostPreview from '../components/PostPreview';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Posts = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.posts.load();
  }, [dispatch.posts]);

  return (
    <main sx={{ variant: 'styles.container', pt: 100 }}>
      {MapToList(posts).map((post: Post) => (
        <Fade key={`post-${post.id}`}>
          <PostPreview post={post} />
        </Fade>
      ))}
    </main>
  );
};

export default Posts;
