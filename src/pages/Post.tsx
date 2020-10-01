/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, Dispatch } from '../features/store';
import { commentsOfPostSelector } from '../features/comments/comments.selector';
import Identity from '../components/Identity';
import { Comment } from '../features/comments/comments.model';

interface ParamTypes {
  id: string;
}

const Post = () => {
  const { id } = useParams<ParamTypes>();
  const dispatch = useDispatch<Dispatch>();
  const post = useSelector((state: RootState) => state.posts[id]) || {};
  const comments: Comment[] = useSelector(commentsOfPostSelector(id));

  useEffect(() => {
    dispatch.posts.fetchById(id);
    dispatch.comments.fetchCommentsOfPost(id);
  }, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Identity userId={post.userId} />
      {comments.map((comment) => (
        <div key={`comment-${comment.id}`}>{comment.body}</div>
      ))}
    </div>
  );
};

export default Post;
