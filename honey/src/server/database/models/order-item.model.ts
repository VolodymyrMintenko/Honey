import { DataTypes } from 'sequelize';

import sequelize from '../connection';

import { HoneyModel, IOrderItem, IOrderItemAttributes, WrapperModel } from '@/server/database';
import ToppingModel from './topping.model';
import JarModel from './jar.model';

const OrderItemModel = sequelize.define<IOrderItem, IOrderItemAttributes, {}>(
  'OrderItem',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    honeyId: {
      type: DataTypes.UUID,
      field: 'honey_id',
      references: {
        model: HoneyModel,
        key: 'id',
      },
      allowNull: false,
    },
    jarId: {
      type: DataTypes.UUID,
      field: 'jar_id',
      references: {
        model: JarModel,
        key: 'id',
      },
      allowNull: false,
    },
    wrapperId: {
      type: DataTypes.UUID,
      field: 'wrapper_id',
      references: {
        model: WrapperModel,
        key: 'id',
      },
      allowNull: false,
    },
    toppingIds: {
      type: DataTypes.UUID,
      field: 'topping_id',
      references: {
        model: ToppingModel,
        key: 'id',
      },
      allowNull: false,
    },
    orderId: {
      type: DataTypes.STRING,
      field: 'order_id',
      allowNull: false,
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
    tableName: 'order-items',
    timestamps: false,
  },
);

export default OrderItemModel;
