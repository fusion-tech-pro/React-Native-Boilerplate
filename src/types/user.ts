export interface User {
  userId: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  email: string | null;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  phoneNumber: string | null;
  avatar?: string | null;
}
