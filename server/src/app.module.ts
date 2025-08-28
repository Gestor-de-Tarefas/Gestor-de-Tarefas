import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { TimeController } from './time/time.controller';
import { TimeModule } from './time/time.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, AuthModule, PrismaModule, TimeModule],
  controllers: [TimeController],
  providers: [PrismaService],
})
export class AppModule {}
