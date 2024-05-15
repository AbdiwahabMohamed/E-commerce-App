/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/create-auth.dto';
// import { Response } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('siginup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('siginin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
