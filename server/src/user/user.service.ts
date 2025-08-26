import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDTO } from './dto/user.DTO';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { ReturnUserDTO } from './dto/returnUser.DTO';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  // Criando usuário
  async create(user: UserDTO) {
    const EmailAlreadyExist = await this.findByEamil(user.Email);

    if (EmailAlreadyExist) {
      throw new UnauthorizedException();
    }

    user.Password = bcryptHashSync(user.Password, 10);
    const new_user = await this.prismaService.user.create({
      data: {
        id: uuid(),
        Name: user.Name,
        Email: user.Email,
        Password: user.Password,
        Type: user.Type,
      },
    });
    return new_user;
  }

  // Buscando usuário pelo email
  async findByEamil(email: string): Promise<ReturnUserDTO | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        Email: email,
      },
    });

    if (user) {
      return user;
    }

    return null;
  }
}
