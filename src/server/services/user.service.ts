import { Role } from 'data/models';
import { UserRepository } from 'data/repositories';

export default class UserService {
  static create(createBody: { enabled?: boolean; roles?: Role[] }) {
    return UserRepository.create(createBody);
  }

  static get(userId: number) {
    return UserRepository.get(userId);
  }

  static getAll(args: any) {
    return UserRepository.getAll(args);
  }

  static update(updateBody: { userId: number; enabled: boolean; roles: Role[] }) {
    return UserRepository.update(updateBody);
  }

  static partialUpdate(updateBody: { userId: number; enabled?: boolean; roles?: Role[] }) {
    return UserRepository.partialUpdate(updateBody);
  }

  static destroy(userId: number) {
    return UserRepository.destroy(userId);
  }
}
