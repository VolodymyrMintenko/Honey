import { DataTypes } from 'sequelize';

import sequelize from '../connection';

import { IOrder, IOrderAttributes, UserModel } from '@/server/database';
import { ShippingMethod } from '@/shared/enums';

const OrderModel = sequelize.define<IOrder, IOrderAttributes, {}>(
  'Order',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      field: 'user_id',
      references: {
        model: UserModel,
        key: 'id',
      },
      allowNull: false,
    },
    salesId: {
      type: DataTypes.UUID,
      field: 'sales_id',
      references: {
        model: UserModel,
        key: 'id',
      },
      allowNull: false,
    },
    shippingType: {
      type: DataTypes.ENUM,
      values: Object.values(ShippingMethod).map((val) => val.toString()),
      allowNull: false,
    },
    shippingAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    chequeNumber:{
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    paymentType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  },
  {
    tableName: 'orders',
    timestamps: false,
  },
);

export default OrderModel;
