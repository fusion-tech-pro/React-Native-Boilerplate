import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

import store from 'src/store';
import { removeUser } from 'src/store/slices/user';
import Storage from 'src/utils/Storage';
import { sleep } from 'src/utils/common';
import errorHandler from 'src/utils/errorHandler';

const defaultHeaders = {
  'Device-Id': DeviceInfo.getUniqueIdSync(),
  'Device-Model': DeviceInfo.getModel(),
  'App-Version': DeviceInfo.getVersion(),
  'App-Build-Number': DeviceInfo.getBuildNumber(),
};

const customAxios = axios.create({
  baseURL: 'baseURL',
  headers: defaultHeaders,
});

let refreshPromise: Promise<boolean> | null = null;

customAxios.interceptors.response.use(
  ({ data: { data } }) => data,
  async (error: any) => {
    const responseConfig = error.config;
    const isBadGatewayError = (error?.status === 502 || error?.response?.status === 502 || error?.message === 'Network Error');

    if (isBadGatewayError && (responseConfig.numberOfAttempts || 0) < 10) {
      await sleep(200);
      responseConfig.numberOfAttempts = (responseConfig.numberOfAttempts || 1) + 1;
      return customAxios(responseConfig);
    }

    if (error?.response?.data.message === 'Expired token') {
      if (!refreshPromise) {
        refreshPromise = sendRefreshToken();
      }
      const isReseted = await refreshPromise;
      if (!isReseted) {
        throw error;
      }
      const request = error.config;

      const tokenFromStorage = await Storage.authToken.get();
      request.headers.Authorization = `Bearer ${tokenFromStorage}`;

      return customAxios(request);
    }

    return Promise.reject(error?.response || error);
  },
);

export const sendRefreshToken = async () => {
  try {
    const refreshTokenFromStorage = await Storage.refreshToken.get();
    const {
      authorization,
      refresh,
    }: any = await customAxios.post(
      '/auth/refresh-token',
      { token: refreshTokenFromStorage },
      {
        headers: defaultHeaders,
      },
    );

    await Promise.all([
      Storage.authToken.set(authorization),
      Storage.refreshToken.set(refresh),
    ]);

    setTokenToHeader(authorization);

    return true;
  } catch (error) {
    errorHandler.logError('REFRESH_TOKEN', error);
    store.dispatch(removeUser());
    return false;
  } finally {
    refreshPromise = null;
  }
};

export const setTokenToHeader = (token: string) => {
  const { headers } = customAxios.defaults;
  if (headers) {
    headers.common.Authorization = `Bearer ${token}`;
  }
};

export default customAxios;
