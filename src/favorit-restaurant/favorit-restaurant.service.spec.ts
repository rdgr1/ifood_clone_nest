import { Test, TestingModule } from '@nestjs/testing';
import { FavoritRestaurantService } from './favorit-restaurant.service';

describe('FavoritRestaurantService', () => {
  let service: FavoritRestaurantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritRestaurantService],
    }).compile();

    service = module.get<FavoritRestaurantService>(FavoritRestaurantService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
