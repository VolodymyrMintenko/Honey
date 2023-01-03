import type { IDataEntity } from '@/server/types';
import { ShippingMethod } from '@/shared/enums';
import type { Model, Optional } from 'sequelize';

export interface IOrderAttributes extends IDataEntity {
  userId: string;
  salesId: string;
  shippingType: ShippingMethod;
  shippingAddress: string;
  chequeNumber: number;
  paymentType: string;
}

export type IOrderCreationAttributes = Optional<
IOrderAttributes,
 'id'

>;

export type IOrder = Model<IOrderAttributes, IOrderCreationAttributes> & IOrderAttributes;
