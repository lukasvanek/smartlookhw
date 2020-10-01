/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../features/store';
import { User } from '../features/users/users.model';

const Identity = ({ userId }: { userId: User['id'] }) => {
  const user = useSelector((state: RootState) => state.users[userId]) || {};
  return <Link to={`/user/${userId}`}>{user.name}</Link>;
};

export default Identity;
