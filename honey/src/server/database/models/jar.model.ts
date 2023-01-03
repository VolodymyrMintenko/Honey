import { DataTypes } from 'sequelize';

import sequelize from '../connection';

import type { IJar, IJarAttributes } from '@/server/database';
import { JarShapePattern, JarSize } from '@/shared/enums';

const JarModel = sequelize.define<IJar, IJarAttributes, {}>(
  'Jar',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    jarName: {
      type: DataTypes.STRING,
      field: 'jar_name',
      allowNull: false,
    },
    jarShapePattern: {
      type: DataTypes.ENUM,
      values: Object.values(JarShapePattern).map((val) => val.toString()),
      allowNull: false,
    },
    size: {
      type: DataTypes.ENUM,
      values: Object.values(JarSize).map((val) => val.toString()),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    amountJar:{
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
    tableName: 'jars',
    timestamps: false,
  },
);

export default JarModel;
