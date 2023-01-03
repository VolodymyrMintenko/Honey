import { DataTypes } from 'sequelize';

import sequelize from '../connection';

import type { IHoney, IHoneyAttributes } from '@/server/database';

const HoneyModel = sequelize.define<IHoney, IHoneyAttributes, {}>(
  'Honey',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    honeyName: {
      type: DataTypes.STRING,
      field: 'honey_name',
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    amountHoney:{
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
    tableName: 'honeys',
    timestamps: false,
  },
);

export default HoneyModel;
