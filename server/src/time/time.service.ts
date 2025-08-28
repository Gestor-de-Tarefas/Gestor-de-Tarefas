import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TimeDTO } from './dto/time.dto';
import { v4 as uuid } from 'uuid';
import { UserDTO } from 'src/user/dto/user.DTO';

@Injectable()
export class TimeService {
    constructor(private readonly prismaService: PrismaService) {}

    //criando um time
    async createTime( user:UserDTO, time: TimeDTO){

        const new_time = await this.prismaService.time.create({
            data:{
                id: uuid(),
                Name: time.Name,
                UserTimes: this.CreateUserTeam(user, time)              
            },
        })
                return new_time;

    }

    async CreateUserTeam(user: UserDTO, time: TimeDTO){
        const new_Usertime = await this.prismaService.userTimes.create(
            data: {
                id: uuid(),
                id_user: user.id,
                id_time: time.id,
            },
            return new_Usertime.id
        )
    }
}