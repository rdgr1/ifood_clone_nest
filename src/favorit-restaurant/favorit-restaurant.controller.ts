import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FavoriteRestaurantService } from 'src/favorit-restaurant/favorit-restaurant.service';
import { FavoriteRestaurant } from 'src/favorit-restaurant/entities/favorit-restaurant.entity';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('favorite-restaurant')
@Controller('favorite-restaurant')
export class FavoriteRestaurantController {
  constructor(private readonly service: FavoriteRestaurantService) {}

  @Post()
  create(@Body() data: FavoriteRestaurant) {
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
  update(@Param('id') id: number, @Body() data: Partial<FavoriteRestaurant>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}