import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import { Category } from 'src/category/entities/category.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column('decimal', { precision: 10, scale: 2 })
    preco: number;

    @ManyToOne(() => Restaurant, restaurant => restaurant.products)
    restaurant: Restaurant;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @OneToMany(() => OrderItem, orderItem => orderItem.product)
    orderItems: OrderItem[];
}
