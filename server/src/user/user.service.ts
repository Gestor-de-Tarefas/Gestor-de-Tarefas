import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.DTO';

@Injectable()
export class UserService {
  private users: UserDTO[] = [];

  create(user: UserDTO) {
    this.users.push(user);
    console.log(this.users);
  }

  getusers() {
    console.log(this.users);
  }
}
