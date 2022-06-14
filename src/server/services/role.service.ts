import { User } from 'data/models';
import { RoleRepository } from 'data/repositories';

export default class RoleService {
  static create(createBody: { name?: string; users?: User[] }) {
    return RoleRepository.create(createBody);
  }

  static get(roleId: number) {
    return RoleRepository.get(roleId);
  }

  static getAll(args: any) {
    return RoleRepository.getAll(args);
  }

  static update(updateBody: { roleId: number; name: string; users: User[] }) {
    return RoleRepository.update(updateBody);
  }

  static partialUpdate(updateBody: { roleId: number; name?: string; users?: User[] }) {
    return RoleRepository.partialUpdate(updateBody);
  }

  static destroy(roleId: number) {
    return RoleRepository.destroy(roleId);
  }
}
