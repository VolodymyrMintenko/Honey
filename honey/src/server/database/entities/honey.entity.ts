import type { IDataEntity, Nullable } from '@/server/types';
import type { Model, Optional } from 'sequelize';

export interface IHoneyAttributes extends IDataEntity {
  honeyName: string;
  description: Nullable<string>;
  amountHoney: Nullable<string>;
  price: number;
}

export type IHoneyCreationAttributes = Optional<
IHoneyAttributes,
  | 'id'
  | 'description'
  | 'amountHoney'
  | 'createdAt'
  | 'updatedAt'
>;

export type IHoney = Model<IHoneyAttributes, IHoneyCreationAttributes> & IHoneyAttributes;
