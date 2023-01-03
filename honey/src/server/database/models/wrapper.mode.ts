import { DataTypes } from 'sequelize';

import sequelize from '../connection';

import type { IWrapper, IWrapperAttributes } from '@/server/database';
import { WrapperMaterial } from '@/shared/enums';

const WrapperModel = sequelize.define<IWrapper, IWrapperAttributes, {}>(
  'Wrapper',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    wrapperName: {
      type: DataTypes.STRING,
      field: 'wrapper_name',
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    amountWrappers:{
      type: DataTypes.STRING,
    },
    wrapperType:{
      type: DataTypes.ENUM,
      values: Object.values(WrapperMaterial).map((val) => val.toString()),
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
    tableName: 'wrappers',
    timestamps: false,
  },
);

export default WrapperModel;
