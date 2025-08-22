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
    private readonly userService: UserService,
    private readonly jwtservice: JwtService,
    private readonly ConfigService: ConfigService,
  ) {
    this.JWTExpirationTimeInSeconds = +ConfigService.get<number>(
      'JWT_EXPIRATION_TIME',
    )!;
  }

  singIn(email: string, password: string): AuthDTO {
    const founduser = this.userService.findByEamil(email);

    if (!founduser || !bcryptCompareSync(password, founduser.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: founduser.id, username: founduser.name };

    const token = this.jwtservice.sign(payload);

    return { token, expiresIn: this.JWTExpirationTimeInSeconds };
  }
}
