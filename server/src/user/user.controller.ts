import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './user.DTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  create(@Body() user: UserDTO) {
    this.userservice.create(user);
  }
}
