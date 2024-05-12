/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CategoryDto } from './dtos/category.dto';

@Injectable()
export class CategoryService {
  constructor(private database: DatabaseService) {}
  getCategory() {
    return this.database.category.findMany();
  }
  getCategoryById(id: number) {
    const findCategory = this.database.category.findUnique({
      where: {
        id: id,
      },
    });
    if (!findCategory) {
      throw new NotFoundException('Category not found');
    }
    return findCategory;
  }

  async createCategory(dto: CategoryDto) {
    // const IsCategoryExist = await this.database.category.findUnique({
    //   where: {
    //     id: id,
    //   },
    // });
    // if (IsCategoryExist) {
    //   throw new BadRequestException('Category already exist');
    // }
    const createCategory = await this.database.category.create({
      data: dto,
    });
    return createCategory;
  }
  async updateCategory(id: number) {
    const findCategory = this.database.category.findUnique({
      where: {
        id: id,
      },
    });
    if (!findCategory) {
      throw new NotFoundException('Category not found');
    }
    const updateCategory = await this.database.category.update({
      data: {
        id,
      },
      where: {
        id: id,
      },
    });
    return updateCategory;
  }
  async deleteCategory(id: number) {
    const findCategory = await this.database.category.findUnique({
      where: {
        id: id,
      },
    });
    if (!findCategory) {
      throw new NotFoundException('Category not found');
    }
    await this.database.category.delete({
      where: {
        id: id,
      },
    });
    return 'category deleted successfully';
  }
}
