import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { –°ommentToComment } from './commentToComment.model';
import { Dislikes, Likes } from './emotionsOfComments.model';
import { Topic } from './topic.model';

@Table({
  createdAt: true,
  updatedAt: false,
  timestamps: true,
  tableName: 'topic_comment'
})
export class TopicComment extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  comment: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  user_second_name: string;

  @ForeignKey(() => Topic)
  @Column(DataType.INTEGER)
  topic_id: number;

  @BelongsTo(() => Topic)
  topic: Topic;

  @HasMany(() => –°ommentToComment)
  comments: –°ommentToComment[];

  @HasMany(() => Likes)
  likes: Likes[];

  @HasMany(() => Dislikes)
  dislikes: Dislikes[];
}
