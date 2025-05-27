import { Module } from '@nestjs/common';
import { FavoriteRestaurantService } from './favorit-restaurant.service';
import { FavoriteRestaurantController } from 'src/favorit-restaurant/favorit-restaurant.controller';
import { FavoriteRestaurant } from './entities/favorit-restaurant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteRestaurant])],
  controllers: [FavoriteRestaurantController],
  providers: [FavoriteRestaurantService],
})
export class FavoritRestaurantModule {}
