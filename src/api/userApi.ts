// import axios from './axios';
import { GetMeResponseData } from './types';
import mockApi from './MOCK_api';

// const userRoute = '/user';

const getMe = (): Promise<GetMeResponseData> => {
  // return axios.get(`${userRoute}/me`);
  return mockApi.getMe();
};

export default {
  getMe,
};
