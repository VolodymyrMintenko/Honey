import { DataTypes } from 'sequelize';

import sequelize from '../connection';

import type { ITopping, IToppingAttributes } from '@/server/database';

const ToppingModel = sequelize.define<ITopping, IToppingAttributes, {}>(
  'Topping',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    toppingName: {
      type: DataTypes.STRING,
      field: 'topping_name',
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    amountTopping:{
      type: DataTypes.STRING,
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
    tableName: 'toppings',
    timestamps: false,
  },
);

export default ToppingModel;
