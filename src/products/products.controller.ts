/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(id: number) {
    return this.productsService.getProductById(id);
  }
  @Post()
  createProduct(product: any) {
    return this.productsService.createProduct(product);
  }
  @Put(':id')
  updateProduct(id: number) {
    return this.productsService.updateProduct(id);
  }
  @Delete(':id')
  deleteProduct(id: number) {
    return this.productsService.deleteProduct(id);
  }
}
