/** @jsx jsx */
import { jsx, Divider } from 'theme-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, Dispatch } from '../features/store';
import { commentsOfPostSelector } from '../features/comments/comments.selector';
import Identity from '../components/Identity';
import { Comment } from '../features/comments/comments.model';
import CommentComponent from '../components/Comment';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { capitalize } from '../utils';

interface ParamTypes {
  id: string;
}

const Post = () => {
  const { id } = useParams<ParamTypes>();
  const dispatch = useDispatch<Dispatch>();
  const post = useSelector((state: RootState) => state.posts[id]) || {};
  const comments: Comment[] = useSelector(commentsOfPostSelector(id));

  useEffect(() => {
    if (post.userId) {
      dispatch.users.fetchById(post.userId);
    }
  }, [post, dispatch.users]);

  useEffect(() => {
    dispatch.posts.fetchById(id);
    dispatch.comments.fetchCommentsOfPost(id);
  }, [dispatch.posts, dispatch.comments, id]);

  return (
    <main sx={{ variant: 'styles.container', pt: 100 }}>
      <h1>{capitalize(post.title)}</h1>

      <Identity userId={post.userId} />

      <p>{capitalize(post.body)}.</p>

      <Divider sx={{ my: 4 }} />

      <h3>Comments ({comments.length})</h3>

      {comments.map((comment) => (
        <Fade key={`comment-${comment.id}`}>
          <CommentComponent comment={comment} />
        </Fade>
      ))}
    </main>
  );
};

export default Post;
