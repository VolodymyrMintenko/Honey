import type { IDataEntity, Nullable } from '@/server/types';
import { JarShapePattern, JarSize } from '@/shared/enums';
import type { Model, Optional } from 'sequelize';

export interface IJarAttributes extends IDataEntity {
  jarName: string;
  description: Nullable<string>;
  amountJar: Nullable<string>;
  jarShapePattern: JarShapePattern;
  size: JarSize;
  price: number;
}

export type IJarCreationAttributes = Optional<
IJarAttributes,
  | 'id'
  | 'description'
  | 'amountJar'
  | 'createdAt'
  | 'updatedAt'
>;

export type IJar = Model<IJarAttributes, IJarCreationAttributes> & IJarAttributes;
