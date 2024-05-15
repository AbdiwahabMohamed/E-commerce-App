/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, Length } from 'class-validator';

export class createOrderDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 200, {
    message: 'Description must be between 4 and 200 characters',
  })
  description: string;
}
