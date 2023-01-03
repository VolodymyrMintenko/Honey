import { DataTypes } from 'sequelize';

import { UserRole } from '@/shared/enums';

import sequelize from '../connection';

import type { IUser, IUserAttributes } from '@/server/database';

const UserModel = sequelize.define<IUser, IUserAttributes, {}>(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailVerified: {
      type: DataTypes.DATE,
      field: 'email_verified',
    },
    role: {
      type: DataTypes.ENUM,
      values: Object.values(UserRole).map((val) => val.toString()),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    discount: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
      type: DataTypes.STRING,
    },
    otpExpiredAt: {
      type: DataTypes.DATE,
      field: 'otp_expired_at',
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  },
  {
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: 'UQ_users_email_role',
        fields: ['email', 'role'],
        type: 'UNIQUE',
      },
    ],
  },
);

export default UserModel;
