import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoritRestaurantDto } from './create-favorit-restaurant.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFavoritRestaurantDto extends PartialType(CreateFavoritRestaurantDto) {

      @ApiProperty({ description: 'Identificador do usuário', example: 10, required: false })
  @IsOptional()
  @IsNumber()
  userId?: number;

  @ApiProperty({ description: 'Identificador do restaurante', example: 5, required: false })
  @IsOptional()
  @IsNumber()
  restaurantId?: number;

}
