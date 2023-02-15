import { useAppDispatch, useAppSelector } from 'src/store/store';
import { removeUser as removeUserFromStore, setUser } from 'src/store/slices/user';

import userApi from 'src/api/userApi';
import { AuthTokens, User } from 'src/types';
import { setTokenToHeader } from 'src/api/axios';
import Storage from 'src/utils/Storage';

const useCurrentUser = () => {
  const dispatch = useAppDispatch();

  const { userData } = useAppSelector((state) => state.user);

  const setCurrentUser = (user: User, tokens?: AuthTokens) => {
    dispatch(setUser(user));

    if (tokens) {
      Storage.authToken.set(tokens.authorization);
      Storage.refreshToken.set(tokens.refresh);
      setTokenToHeader(tokens.authorization);
    }
  };

  const getUser = async () => {
    try {
      const token = await Storage.authToken.get();
      if (!token) return;

      setTokenToHeader(token);
      const { user } = await userApi.getMe();

      dispatch(setUser(user));
    } catch (err) {
      dispatch(removeUserFromStore());
    }
  };

  const removeUser = () => {
    Storage.authToken.remove();
    Storage.refreshToken.remove();

    dispatch(removeUserFromStore());
  };

  return {
    user: userData,
    setUser: setCurrentUser,
    getUser,
    removeUser,
  };
};

export default useCurrentUser;
