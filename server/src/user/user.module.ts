import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [UserController],
  exports: [UserService],
  providers: [UserService, PrismaService,AuthService],
})
export class UserModule {}
