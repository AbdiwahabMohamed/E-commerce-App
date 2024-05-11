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
import { CategoryService } from './category.service';
import { CategoryDto } from './dtos/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  getCategory() {
    return this.categoryService.getCategory();
  }
  @Get(':id')
  getCategoryById(id: number) {
    return this.categoryService.getCategoryById(id);
  }
  @Post('createCategory')
  createCategory(@Body() dto: CategoryDto) {
    return this.categoryService.createCategory(dto);
  }
  @Put(':id')
  updateCategory(@Param('id') id: number) {
    return this.categoryService.updateCategory(id);
  }
  @Delete(':id')
  deleteCategory(id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
