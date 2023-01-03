import type { IDataEntity, Nullable } from '@/server/types';
import type { Model, Optional } from 'sequelize';

export interface IToppingAttributes extends IDataEntity {
  toppingName: string;
  description: Nullable<string>;
  amountTopping: Nullable<string>;
  price: number;
}

export type IToppingCreationAttributes = Optional<
IToppingAttributes,
  | 'id'
  | 'description'
  | 'amountTopping'
  | 'createdAt'
  | 'updatedAt'
>;

export type ITopping = Model<IToppingAttributes, IToppingCreationAttributes> & IToppingAttributes;
