import { createModel } from '@rematch/core';
import { RootModel } from '../root.model';
import assoc from 'ramda/es/assoc';
import { getUser } from '../../api';

export type User = {
  id: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: any;
  company: any;
  email: string;
};

export type UsersMap = {
  [id: string]: User;
};

export const users = createModel<RootModel>()({
  state: {} as UsersMap,
  reducers: {
    setAll: (state, payload: UsersMap) => payload,
    setById: (state, payload: User) => assoc(payload.id, payload)(state),
  },
  effects: (dispatch) => ({
    async fetchById(id: string) {
      const res: User = await getUser(id);
      dispatch.users.setById(res);
    },
  }),
});
