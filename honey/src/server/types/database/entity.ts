import type { Nullable } from './nullable';

export interface IBaseEntity {
  id: string;
}

export interface IDataEntity extends IBaseEntity {
  createdAt: Date;
  updatedAt: Nullable<Date>;
}
