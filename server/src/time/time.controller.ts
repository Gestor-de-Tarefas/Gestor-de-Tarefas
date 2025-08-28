import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/user/dto/user.DTO';
import { TimeDTO } from './dto/time.dto';
import { TimeService } from './time.service';

@Controller('time')
export class TimeController {
    constructor (private readonly timeServce: TimeService) {}

    @Post()
    async CreateTeam(@Body() user:UserDTO, time:TimeDTO){
        const team = await this.timeServce.createTime(user,time)
        console.log(team)
        return team;
    }
}
