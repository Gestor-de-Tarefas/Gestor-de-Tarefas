import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UserDTO } from './user.DTO';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  create(@Body() user: UserDTO) {
    this.userservice.create(user);
  }

  @Get('/:id')
  getByID(@Param('id') id: string) {
    console.log(id);
  }
}
