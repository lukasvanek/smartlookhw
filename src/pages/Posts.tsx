/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from '../features/store';

const Posts = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    dispatch.posts.load();
  }, []);

  return <div>posts</div>;
};

export default Posts;
