import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from 'src/user/dto/user.DTO';
import { TeamDTO } from './dto/time.dto';
import { TimeService } from './time.service';

@Controller('time')
export class TimeController {
    constructor (private readonly timeServce: TimeService) {}

    @Post('create')
    async CreateTeam(@Body() time:TeamDTO){
        const team = await this.timeServce.createTime(time)
        console.log(team)
        return team;
    }
}
