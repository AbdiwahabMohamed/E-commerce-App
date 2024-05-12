/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UserDto } from './Dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}
  async getUsers() {
    return await this.databaseService.user.findMany();
  }
  async getUserById(id: number) {
    const findUser = await this.databaseService.user.findUnique({
      where: {
        id: id,
      },
    });
    return findUser;
  }
  async createUser(dto: UserDto) {
    const { email, password } = dto;
    const IsUserExist = await this.databaseService.user.findUnique({
      where: {
        email: email,
      },
    });
    if (IsUserExist) {
      throw new BadRequestException('User already exist');
    }
    const createUser = await this.databaseService.user.create({
      data: {
        name: dto.name,
        email,
        password,
        location: dto.location,
        phone: dto.phone,
      },
    });
    return { password, ...createUser };
  }
  async updateUser(id: number, dto: UserDto) {
    const findUser = await this.databaseService.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new BadRequestException('User not found');
    }
    const updateUser = await this.databaseService.user.update({
      where: {
        id: id,
      },
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
        location: dto.location,
        phone: dto.phone,
      },
    });
    return updateUser;
  }
  async deleteUser(id: number) {
    const findUser = await this.databaseService.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!findUser) {
      throw new BadRequestException('User not found');
    }
    await this.databaseService.user.delete({
      where: {
        id: id,
      },
    });
    return 'user deleted successfully';
  }
}
