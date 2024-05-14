/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }
  // @Post('createUser')
  // createUser(@Body() dto: UserDto) {
  //   return this.usersService.createUser(dto);
  // }
  // @Put(':id')
  // updateUser(@Param('id') id: number, @Body() dto: UserDto) {
  //   return this.usersService.updateUser(id, dto);
  // }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
