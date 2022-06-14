/* eslint import/no-cycle: "off" */
import {
  Model,
  PrimaryKey,
  Column,
  Table,
  Length,
  AutoIncrement,
  BelongsToMany,
} from 'sequelize-typescript';
import { User } from 'data/models';

@Table({
  freezeTableName: true,
})
export default class Role extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  roleId: number;

  @Length({ min: 0, max: 255 })
  @Column
  name: string;

  @BelongsToMany(() => User, 'RoleUser', 'roleId', 'userId')
  users: User[];
}
