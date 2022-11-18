import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { TopicComment } from './topicComment.model';

@Table({
  createdAt: true,
  updatedAt: false,
  timestamps: true,
  tableName: 'topic'
})
export class Topic extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  topic: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  user_second_name: string;

  @HasMany(() => TopicComment)
  comments: TopicComment[];
}
