import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoritRestaurantDto } from './create-favorit-restaurant.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFavoritRestaurantDto extends PartialType(CreateFavoritRestaurantDto) {

      @ApiProperty({ description: 'Identificador do usuário', example: 10, required: false })
  userId?: number;

  @ApiProperty({ description: 'Identificador do restaurante', example: 5, required: false })
  restaurantId?: number;

}
