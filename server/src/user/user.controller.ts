import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.DTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  // Rota de criação de usuário
  @Post()
  create(@Body() user: UserDTO) {
    const test = this.userservice.create(user);
    console.log(test);
  }
}
