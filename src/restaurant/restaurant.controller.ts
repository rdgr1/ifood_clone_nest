import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('restaurant')
@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly service: RestaurantService) {}

  @Post()
  create(@Body() data: Restaurant) {
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
  update(@Param('id') id: number, @Body() data: Partial<Restaurant>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}