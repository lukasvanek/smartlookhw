/** @jsx jsx */
import { jsx, Card } from 'theme-ui';
import { Link } from 'react-router-dom';
import { Post } from '../features/posts/posts.model';

import Identity from '../components/Identity';

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

export default PostPreview;
