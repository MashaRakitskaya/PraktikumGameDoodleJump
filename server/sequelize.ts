import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { UserTheme } from './models/userTheme.model';

export function sequelize() {
  const sequelizeOptions: SequelizeOptions = {
    host: 'postgres',
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dialect: 'postgres'
  };

  const sequelize = new Sequelize(sequelizeOptions);
  sequelize.addModels([UserTheme]);

  // Create in database empty tables { force: true }
  sequelize.sync({ force: true });
}
