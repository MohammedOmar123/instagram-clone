import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

import { User, Comment, Like } from 'src/modules/index.models';

@Table
export class Post extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  caption: string;

  // @Column({
  //   type: DataType.ARRAY(DataType.TEXT),
  //   allowNull: false,
  // })
  // media: string[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  archived: boolean;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Comment, { onDelete: 'CASCADE' })
  comments: Comment[];

  @HasMany(() => Like, { onDelete: 'CASCADE' })
  likes: Like[];
}
