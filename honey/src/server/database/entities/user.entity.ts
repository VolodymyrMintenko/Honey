import type { IDataEntity, Nullable } from '@/server/types';
import type { UserRole } from '@/shared/enums';
import type { Model, Optional } from 'sequelize';

export interface IPublicUserAttributes extends IDataEntity {
  fullName: string;
  userName: Nullable<string>;
  email: string;
  role: UserRole;
  emailVerified: Nullable<Date>;
  phoneVerified: boolean;
  isOnboardingFinished: boolean;
  image: Nullable<string>;
  phone: string;
  otp: Nullable<string>;
  otpExpiredAt: Nullable<Date>;
}

// User attributes need to extends Record to be compatible with `AdapterUser` interface from `next-auth`
export interface IUserAttributes extends IPublicUserAttributes, Record<string, unknown> {
  password: string;
}

export type IUserCreationAttributes = Optional<
  IUserAttributes,
  | 'id'
  | 'userName'
  | 'status'
  | 'emailVerified'
  | 'phoneVerified'
  | 'isOnboardingFinished'
  | 'image'
  | 'otp'
  | 'otpExpiredAt'
  | 'createdAt'
  | 'updatedAt'
>;

export type IUser = Model<IUserAttributes, IUserCreationAttributes> & IUserAttributes;
