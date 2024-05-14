/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private databaseServive: DatabaseService) {}
  async signun(dto: AuthDto) {
    const findUser = await this.databaseServive.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (findUser) {
      throw new BadRequestException('User already exist');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(dto.password, salt);
    const createUser = await this.databaseServive.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        name: dto.name,
        location: dto.location,
        phone: dto.phone,
      },
    });
    return createUser;
  }
  async signin(dto: AuthDto) {
    const findUser = await this.databaseServive.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!findUser) {
      throw new BadRequestException('User not found');
    }
    const isPasswordMatch = await bcrypt.compare(
      findUser.password,
      dto.password,
    );
    if (!isPasswordMatch) {
      throw new BadRequestException('Invalid password');
    }
    return findUser;
  }
}
