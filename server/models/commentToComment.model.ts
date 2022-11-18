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
import { TopicComment } from './topicComment.model';

@Table({
  createdAt: true,
  updatedAt: false,
  timestamps: true,
  tableName: 'comment_to_comment'
})
export class СommentToComment extends Model {
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

  @ForeignKey(() => TopicComment)
  @Column(DataType.INTEGER)
  topic_comment_id: number;

  @BelongsTo(() => TopicComment)
  topic_comment: TopicComment;
}
