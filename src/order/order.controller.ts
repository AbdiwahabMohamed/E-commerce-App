/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { createOrderDto } from './dto/create.order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrder() {
    return this.orderService.getOrder();
  }
  @Get(':id')
  getOrderById(@Param('id') id: string) {
    return this.orderService.getOrderById(+id);
  }
  @Post('/create')
  async createOrder(@Body() dto: createOrderDto) {
    return this.orderService.createOrder(dto);
  }
  @Patch(':id')
  updateOrder(@Param('id') id: number, @Body() dto: createOrderDto) {
    return this.orderService.updateOrder(+id, dto);
  }
  @Delete(':id')
  deleteOrder(@Param('id') id: string) {
    return this.orderService.deleteOrder(+id);
  }
}
