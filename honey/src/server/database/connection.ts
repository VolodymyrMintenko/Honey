import cls from 'cls-hooked';
import { Sequelize } from 'sequelize';

import { sequelizeConstants } from '@/server/constants';
import { envUtil } from '@/shared/utils';

import type { ISequelize } from '@/server/types';

const env = envUtil.getEnv();

const namespace = cls.createNamespace(sequelizeConstants.namespace);

const sequelize = new Sequelize({
  ...env.database,
  dialect: 'postgres',
  logging: envUtil.isProdEnv() ? console.log : false,
});

sequelize.Sequelize.useCLS(namespace);

export default sequelize as ISequelize;
