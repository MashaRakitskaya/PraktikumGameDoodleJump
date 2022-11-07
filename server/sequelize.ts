import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { User } from './models/user.model';

export function sequelize() {
  const sequelizeOptions: SequelizeOptions = {
    //host: 'postgres',
    host: 'localhost',
    port: 5432,
    // username: process.env.POSTGRES_USER,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DB,
    username: 'postgres',
    password: 'newPassword',
    database: 'my-db-name',
    dialect: 'postgres'
  };

  const sequelize = new Sequelize(sequelizeOptions);
  sequelize.addModels([User]);

  // Create database tables
  sequelize.sync({ force: true });
}
