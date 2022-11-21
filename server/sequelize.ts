import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { UserTheme } from './models/userTheme.model';
import { Topic } from './models/topic.model';
import { TopicComment } from './models/topicComment.model';
import { СommentToComment } from './models/commentToComment.model';
import { Dislikes, Likes } from './models/emotionsOfComments.model';

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
  sequelize.addModels([
    UserTheme,
    Topic,
    TopicComment,
    СommentToComment,
    Likes,
    Dislikes
  ]);

  // Create in database empty tables { force: true }
  sequelize.sync({ force: true });
}
