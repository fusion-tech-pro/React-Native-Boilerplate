import dayjs from 'dayjs';

import { sleep } from 'src/utils/common';
import Storage from 'src/utils/Storage';

const INITIAL_USER_DATA = {
  deletedAt: null,
  firstName: null,
  lastName: null,
  fullName: null,
  phoneNumber: null,
  avatar: null,
};

const getMe = async () => {
  await sleep(1000);

  const authToken = await Storage.authToken.get();

  if (authToken) {
    const users = await Storage.MOCK_usersDataObject.get();
    if (users && users[authToken]) {
      return {
        user: users[authToken].user,
        tokens: {
          authorization: authToken,
          refresh: 'refreshToken',
        },
      };
    }
  }

  throw new Error('Invalid email or password');
};

const signIn = async (email: string, password: string) => {
  await sleep(1000);

  const users = await Storage.MOCK_usersDataObject.get();
  if (users && users[email] && users[email].password === password) {
    return {
      user: users[email].user,
      tokens: {
        authorization: email,
        refresh: 'refreshToken',
      },
    };
  }

  throw new Error('Invalid email or password');
};

const signUp = async (email: string, password: string) => {
  await sleep(1000);

  let users = await Storage.MOCK_usersDataObject.get();
  if (users && users[email]) {
    throw new Error('User with this email already exists');
  }

  if (!users) {
    users = {};
  }

  users[email] = {
    user: {
      ...INITIAL_USER_DATA,
      createdAt: dayjs().toString(),
      updatedAt: dayjs().toString(),
      userId: Math.random() * 1000,
      email,
    },
    password,
  };

  await Storage.MOCK_usersDataObject.set(users);

  return {
    user: users[email].user,
    tokens: {
      authorization: email,
      refresh: 'refreshToken',
    },
  };
};

export default {
  getMe,
  signIn,
  signUp,
};
