/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, Dispatch } from '../features/store';

interface ParamTypes {
  id: string;
}

const User = () => {
  const { id } = useParams<ParamTypes>();
  const dispatch = useDispatch<Dispatch>();
  const user = useSelector((state: RootState) => state.users[id]) || {};

  useEffect(() => {
    dispatch.users.fetchById(id);
  }, []);

  return <h1>{user.name}</h1>;
};

export default User;
