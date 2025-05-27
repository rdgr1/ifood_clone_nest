import { Test, TestingModule } from '@nestjs/testing';
import { FavoritRestaurantController } from './favorit-restaurant.controller';
import { FavoritRestaurantService } from './favorit-restaurant.service';

describe('FavoritRestaurantController', () => {
  let controller: FavoritRestaurantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritRestaurantController],
      providers: [FavoritRestaurantService],
    }).compile();

    controller = module.get<FavoritRestaurantController>(FavoritRestaurantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
