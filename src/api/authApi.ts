// import axios from './axios';
import { AuthPayload, AuthResponse } from './types';
import mockApi from './MOCK_api';

// const authRoute = '/auth';

const signIn = (payload: AuthPayload): Promise<AuthResponse> => {
  // return axios.post(`${authRoute}/sign-in`);
  return mockApi.signIn(payload.email, payload.password);
};

const signUp = (payload: AuthPayload): Promise<AuthResponse> => {
  // return axios.post(`${authRoute}/sign-up`);
  return mockApi.signUp(payload.email, payload.password);
};

export default {
  signIn,
  signUp,
};
