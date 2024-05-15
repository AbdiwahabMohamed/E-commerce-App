/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
// import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private databaseServive: DatabaseService,
    private jwtServices: JwtService,
  ) {}
  async signup(dto: AuthDto) {
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
    const payload = {
      sub: findUser.id,
      email: findUser.email,
      name: findUser.name,
    };
    const token = await this.jwtServices.signAsync(payload, {
      secret: process.env.JWT_SEKRET_KEY,
    });
    if (!token) {
      throw new ForbiddenException('Could not signin');
    }
    return { findUser, token };
  }
}
