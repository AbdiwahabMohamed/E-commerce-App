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
import { ProductsService } from './products.service';
import { ProductDto } from './dtos/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }
  @Post('createProduct')
  createProduct(@Body() dto: ProductDto) {
    return this.productsService.createProduct(dto);
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
