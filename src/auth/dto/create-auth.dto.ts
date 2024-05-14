/* eslint-disable prettier/prettier */
import { IsEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsEmpty()
  @IsString()
  name: string;
  @IsEmpty()
  @IsString()
  @Length(5, 20, { message: 'email must be at between 5 and 20 characters' })
  email: string;
  @IsEmpty()
  @IsString()
  @Length(8, 50, { message: 'password must be at between 5 and 50 characters' })
  password: string;
  @IsEmpty()
  @IsString()
  location: string;
  @IsEmpty()
  @IsString()
  phone: string;
}
