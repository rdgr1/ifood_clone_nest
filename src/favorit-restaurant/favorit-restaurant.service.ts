import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteRestaurant } from 'src/favorit-restaurant/entities/favorit-restaurant.entity';

@Injectable()
export class FavoriteRestaurantService {
  constructor(
    @InjectRepository(FavoriteRestaurant)
    private readonly repo: Repository<FavoriteRestaurant>,
  ) {}

  create(data: FavoriteRestaurant) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: number, data: Partial<FavoriteRestaurant>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
