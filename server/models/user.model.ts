import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Length,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'users'
})
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Length({ max: 20, min: 1 })
  @AllowNull(false)
  @Column(DataType.STRING)
  first_name: string;
}
