import type { IDataEntity, Nullable } from '@/server/types';
import type { Model, Optional } from 'sequelize';

export interface IOrderItemAttributes extends IDataEntity {
  jarId: string;
  wrapperId: string;
  honeyId: string;
  orderId: string;
  toppingIds: string[];
}

export type IOrderItemCreationAttributes = Optional<IOrderItemAttributes, 'id'>;

export type IOrderItem = Model<IOrderItemAttributes, IOrderItemCreationAttributes> & IOrderItemAttributes;
