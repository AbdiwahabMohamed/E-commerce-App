/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private databaseService: DatabaseService) {}
  async getProducts() {
    return await this.databaseService.product.findMany();
  }

  async getProductById(id: number) {
    const findProduct = await this.databaseService.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!findProduct) {
      throw new NotFoundException('Product not found');
    }
  }
  async createProduct(product: any) {
    return await this.databaseService.product.create({
      data: product,
    });
  }
  async updateProduct(id: number) {
    const findProduct = await this.databaseService.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!findProduct) {
      throw new NotFoundException('Product not found');
    }
  }
  async deleteProduct(id: number) {
    const findProduct = await this.databaseService.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!findProduct) {
      throw new NotFoundException('Product not found');
    }
    return await this.databaseService.product.delete({
      where: {
        id: id,
      },
    });
  }
}
