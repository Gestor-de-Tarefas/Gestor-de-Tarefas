/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthDTO } from './auth.DTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  // rota de login
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async singIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<AuthDTO> {
    const JWT = this.authservice.singIn(email, password);
    return JWT;
  }
}
