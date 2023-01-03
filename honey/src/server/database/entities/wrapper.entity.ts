import type { IDataEntity, Nullable } from '@/server/types';
import { WrapperMaterial } from '@/shared/enums';
import type { Model, Optional } from 'sequelize';

export interface IWrapperAttributes extends IDataEntity {
  wrapperName: string;
  description: Nullable<string>;
  amountWrappers: Nullable<string>;
  wrapperType: WrapperMaterial
  price: number;
}

export type IWrapperCreationAttributes = Optional<
IWrapperAttributes,
  | 'id'
  | 'description'
  | 'amountWrappers'
  | 'createdAt'
  | 'updatedAt'
>;

export type IWrapper = Model<IWrapperAttributes, IWrapperCreationAttributes> & IWrapperAttributes;
