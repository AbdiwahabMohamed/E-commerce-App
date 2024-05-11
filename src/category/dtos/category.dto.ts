/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CategoryDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, {
    message: 'Category name must be between 3 and 100 characters',
  })
  name: string;
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, {
    message: 'Category description must be between 3 and 100 characters',
  })
  description: string;
}
