/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private databaseService: DatabaseService) {}
  async getProducts() {
    return await this.databaseService.product.findMany();
  }

  async getProductById(@Param('id') id: number) {
    const findProduct = await this.databaseService.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!findProduct) {
      throw new NotFoundException('Product not found');
    }
    return findProduct;
  }
  async createProduct(product: any) {
    return await this.databaseService.product.create({
      data: product,
    });
  }
  async updateProduct(@Param('id') id: number) {
    const findProduct = await this.databaseService.product.findUnique({
      where: {
        id: id,
      },
    });

    if (!findProduct) {
      throw new NotFoundException('Product not found');
    }
  }
  async deleteProduct(@Param('id') id: number) {
    const findProduct = await this.databaseService.product.findUnique({
      where: {
        id: id,
      },
    });
    if (!findProduct) {
      throw new NotFoundException('Product not found');
    }
    await this.databaseService.product.delete({
      where: {
        id: id,
      },
    });
    return 'Product deleted successfully';
  }
}
