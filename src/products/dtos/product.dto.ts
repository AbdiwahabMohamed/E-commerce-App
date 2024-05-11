/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, { message: 'Product must be between 3 and 100 characters' })
  name: string;
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, { message: 'Product must be between 3 and 100 characters' })
  description: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
