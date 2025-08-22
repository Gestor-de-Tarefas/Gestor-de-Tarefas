/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthDTO } from './auth.DTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  singIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ): AuthDTO {
    return this.authservice.singIn(email, password);
  }
}
