/** @jsx jsx */
import { jsx, Card } from 'theme-ui';
import { Comment } from '../features/comments/comments.model';
import { capitalize } from '../utils';

type CommentProps = {
  comment: Comment;
};

const CommentComponent = ({ comment }: CommentProps) => {
  return (
    <Card>
      <p>{capitalize(comment.body)}</p>
      <div sx={{ fontSize: 1 }}>
        By {comment.name} – {comment.email}
      </div>
    </Card>
  );
};

export default CommentComponent;
