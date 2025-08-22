import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.DTO';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';

@Injectable()
export class UserService {
  private users: UserDTO[] = [];

  create(user: UserDTO) {
    user.id = uuid();
    user.password = bcryptHashSync(user.password, 10);
    this.users.push(user);
  }

  findByEamil(email: string): UserDTO | void {
    return this.users.find((user) => user.email === email);
  }
}
