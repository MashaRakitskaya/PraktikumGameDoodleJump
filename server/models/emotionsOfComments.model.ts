import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { СommentToComment } from './commentToComment.model';
import { Topic } from './topic.model';
import { TopicComment } from './topicComment.model';

@Table({
  createdAt: true,
  updatedAt: false,
  timestamps: true,
  tableName: 'like'
})
export class Likes extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;

  @ForeignKey(() => Topic)
  @Column(DataType.INTEGER)
  topic_id: number;

  @BelongsTo(() => Topic)
  topic: Topic;

  @ForeignKey(() => TopicComment)
  @Column(DataType.INTEGER)
  topic_comment_id: number;

  @BelongsTo(() => TopicComment)
  topic_comment: TopicComment;

  @ForeignKey(() => СommentToComment)
  @Column(DataType.INTEGER)
  comment_to_comment_id: number;

  @BelongsTo(() => СommentToComment)
  comment_to_comment: СommentToComment;
}

@Table({
  createdAt: true,
  updatedAt: false,
  timestamps: true,
  tableName: 'dislike'
})
export class Dislikes extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;

  @ForeignKey(() => Topic)
  @Column(DataType.INTEGER)
  topic_id: number;

  @BelongsTo(() => Topic)
  topic: Topic;

  @ForeignKey(() => TopicComment)
  @Column(DataType.INTEGER)
  topic_comment_id: number;

  @BelongsTo(() => TopicComment)
  topic_comment: TopicComment;

  @ForeignKey(() => СommentToComment)
  @Column(DataType.INTEGER)
  comment_to_comment_id: number;

  @BelongsTo(() => СommentToComment)
  comment_to_comment: СommentToComment;
}
