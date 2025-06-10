import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('order-item')
@Controller('order-item')
export class OrderItemController {
  constructor(private readonly service: OrderItemService) {}

  @Post()
  create(@Body() data: OrderItem) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<OrderItem>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
