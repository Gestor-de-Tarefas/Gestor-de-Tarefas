import { Module } from '@nestjs/common';
import { TimeService } from './time.service';
import { TimeController } from './time.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TimeController],
  exports: [TimeService],
  providers: [TimeService,PrismaService]
})
export class TimeModule {}
