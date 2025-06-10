import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/product/entities/product.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post()
  create(@Body() data: Product) {
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
  update(@Param('id') id: number, @Body() data: Partial<Product>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}