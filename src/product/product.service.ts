import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repo: Repository<Product>,
  ) {}

  create(data: Product) {
    return this.repo.save(data);
  }

  async findByRestaurant(restaurantId: number) {
    const produtos = await this.repo.find({
      where: { restaurant: { id: restaurantId } },
      relations: ['category', 'restaurant'],
    });

    return produtos.map(p => ({
      ...p,
      preco: parseFloat(p.preco as any),
    }));
  }

  async findAll() {
    const produtos = await this.repo.find();
    return produtos.map(p => ({
      ...p,
      preco: parseFloat(p.preco as any),
    }));
  }

  async findOne(id: number) {
    const produto = await this.repo.findOne({ where: { id } });
    return {
      ...produto,
      preco: parseFloat(produto?.preco as any),
    };
  }

  update(id: number, data: Partial<Product>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}