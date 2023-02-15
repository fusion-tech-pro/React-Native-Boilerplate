import { AuthTokens, User } from 'src/types';

export type AuthPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  tokens: AuthTokens;
  user: User;
};
