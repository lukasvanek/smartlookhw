/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { pics } from '../utils';
import { RootState } from '../features/store';
import { User } from '../features/users/users.model';
import Avatar from './Avatar';

type IdentityProps = {
  userId: User['id'];
};

const Identity = ({ userId }: IdentityProps) => {
  const user = useSelector((state: RootState) => state.users[userId]) || {};
  return (
    <Link to={`/user/${userId}`}>
      <Flex sx={{ alignItems: 'center' }}>
        <Box sx={{ mr: 2, height: 32 }}>
          <Avatar
            size={32}
            src={`https://tinyfac.es/data/avatars/${
              pics[Number(userId)]
            }-200w.jpeg`}
          />
        </Box>

        <Box>{user.name}</Box>
      </Flex>
    </Link>
  );
};

export default Identity;
