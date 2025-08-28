import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TeamDTO } from './dto/time.dto';
import { v4 as uuid } from 'uuid';
import { UserDTO } from 'src/user/dto/user.DTO';

@Injectable()
export class TimeService {
    constructor(private readonly prismaService: PrismaService) {}

    //criando um time
    async createTime( time: TeamDTO){

        const new_time = await this.prismaService.time.create({
            data:{
                id: uuid(),
                Name: time.Name,            
            },
        })
        return new_time;
    }

    
}