/* eslint import/no-cycle: "off" */
import {
  Model,
  PrimaryKey,
  Column,
  Table,
  Default,
  AutoIncrement,
  BelongsToMany,
} from 'sequelize-typescript';
import { Role } from 'data/models';

@Table({
  freezeTableName: true,
})
export default class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  userId: number;

  @Default(true)
  @Column
  enabled: boolean;

  @BelongsToMany(() => Role, 'RoleUser', 'userId', 'roleId')
  roles: Role[];
}
