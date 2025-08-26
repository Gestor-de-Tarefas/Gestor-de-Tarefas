/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { AuthDTO } from './auth.DTO';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private JWTExpirationTimeInSeconds: number;

  constructor(
    // Importando outros Providers
    private readonly userService: UserService,
    private readonly jwtservice: JwtService,
    private readonly ConfigService: ConfigService,
  ) {
    this.JWTExpirationTimeInSeconds = +ConfigService.get<number>(
      'JWT_EXPIRATION_TIME',
    )!;
  }

  // Função de login
  async singIn(email: string, password: string): Promise<AuthDTO> {
    // Procurando usuário existente no banco
    const founduser = await this.userService.findByEamil(email);

    if (!founduser || !bcryptCompareSync(password, founduser.Password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: founduser.id, username: founduser.Name };

    // Criando JWT
    const token = this.jwtservice.sign(payload);

    return { token, expiresIn: this.JWTExpirationTimeInSeconds };
  }
}
