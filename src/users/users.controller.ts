/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './Dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get(':id')
  getUserById(id: number) {
    return this.usersService.getUserById(id);
  }
  @Post()
  createUser(@Body() dto: UserDto) {
    return this.usersService.createUser(dto);
  }
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() dto: UserDto) {
    return this.usersService.updateUser(id, dto);
  }
  @Delete(':id')
  deleteUser(id: number) {
    return this.usersService.deleteUser(id);
  }
}
