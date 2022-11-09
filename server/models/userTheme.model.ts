import {
  AllowNull,
  AutoIncrement,
  Column,
  Contains,
  DataType,
  Equals,
  Is,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

const HEX_REGEX = /^light|dark$/;

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_theme'
})
export class UserTheme extends Model<UserTheme> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  id: number;

  @Is('current theme', (value) => {
    if (!HEX_REGEX.test(value)) {
      throw new Error(`"${value}" is not "light" or "dark".`);
    }
  })
  @AllowNull(false)
  @Column(DataType.STRING)
  theme: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  user_id: number;
}
