import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoritRestaurantDto } from './create-favorit-restaurant.dto';

export class UpdateFavoritRestaurantDto extends PartialType(CreateFavoritRestaurantDto) {}
