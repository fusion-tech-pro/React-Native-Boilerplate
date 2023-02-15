import AsyncStorage from '@react-native-async-storage/async-storage';
import EncryptedStorage from 'react-native-encrypted-storage';

import { ColorTheme, User } from 'src/types';

import errorHandler from './errorHandler';

class StorageField<DataType> {
  key: string;

  Storage: typeof AsyncStorage | typeof EncryptedStorage;

  constructor(key: string, isEncrypted?: boolean) {
    this.key = key;
    this.Storage = isEncrypted ? EncryptedStorage : AsyncStorage;
  }

  get = async (): Promise<DataType | null> => {
    try {
      const data = await this.Storage.getItem(this.key);
      const parsedData = data ? JSON.parse(data) : null;
      return parsedData;
    } catch (error) {
      errorHandler.logError('STORAGE_GET', error, { extraData: this.key });
      return null;
    }
  };

  set = async (data: DataType): Promise<void> => {
    try {
      await this.Storage.setItem(this.key, JSON.stringify(data));
    } catch (error) {
      errorHandler.logError('STORAGE_SET', error, { extraData: this.key });
    }
  };

  remove = async (): Promise<void> => {
    try {
      await this.Storage.removeItem(this.key);
    } catch (error) {
      errorHandler.logError('STORAGE_REMOVE', error, { extraData: this.key });
    }
  };
}

export default {
  isOnboarded: new StorageField<boolean>('IS_ONBOARDED'),
  activeColorTheme: new StorageField<ColorTheme>('ACTIVE_COLOR_THEME'),
  authToken: new StorageField<string>('AUTH_TOKEN', true),
  refreshToken: new StorageField<string>('REFRESH_TOKEN', true),
  MOCK_usersDataObject: new StorageField<{
    [email: string]: {
      user: User;
      password: string;
    }
  }>('MOCK_userObject'),
};
