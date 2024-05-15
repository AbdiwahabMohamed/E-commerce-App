/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { createOrderDto } from './dto/create.order.dto';

@Injectable()
export class OrderService {
  constructor(private databaseService: DatabaseService) {}
  async getOrder() {
    return await this.databaseService.order.findMany();
  }

  async getOrderById(id: number) {
    const findOrder = await this.databaseService.order.findUnique({
      where: {
        id: id,
      },
    });
    return findOrder;
  }

  async createOrder(dto: createOrderDto) {
    const createdOrder = await this.databaseService.order.create({
      data: {
        description: dto.description,
      },
    });
    return createdOrder;
  }

  async updateOrder(id: number, dto: createOrderDto) {
    const findOrder = await this.databaseService.order.findUnique({
      where: {
        id: id,
      },
    });
    if (!findOrder) {
      throw new NotFoundException('Order not found');
    }
    const updatedOrder = await this.databaseService.order.update({
      where: {
        id: id,
      },
      data: {
        description: dto.description,
      },
    });
    return updatedOrder;
  }

  async deleteOrder(id: number) {
    const findOrder = await this.databaseService.order.findUnique({
      where: {
        id: id,
      },
    });
    if (!findOrder) {
      throw new NotFoundException('Order not found');
    }
    await this.databaseService.order.delete({
      where: {
        id: id,
      },
    });
    return {
      message: 'Order deleted successfully',
    };
  }
}
