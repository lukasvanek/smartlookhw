/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, Dispatch } from '../features/store';

interface ParamTypes {
  id: string;
}

const Post = () => {
  const { id } = useParams<ParamTypes>();
  const dispatch = useDispatch<Dispatch>();
  const post = useSelector((state: RootState) => state.posts[id]) || {};

  useEffect(() => {
    dispatch.posts.fetchById(id);
    dispatch.comments.fetchCommentsOfPost(id);
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
