import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './dto/user.DTO';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService,
    private readonly autheService: AuthService
  ) {}

  // Rota de criação de usuário
  @Post()
  create(@Body() user: UserDTO) {
    const test = this.userservice.create(user);
    console.log(test);
    const jwt = this.autheService.signIn(user.Email, user.Password)
    console.log(jwt)
    return user
  }
}
