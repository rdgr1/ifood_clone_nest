import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Order } from 'src/order/entities/order.entity';
import { FavoriteRestaurant } from 'src/favorit-restaurant/entities/favorit-restaurant.entity';
import { Review } from 'src/review/entities/review.entity';

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    endereco: string;

    @Column()
    telefone: string;

    @Column()
    tipo: 'fast_food' | 'casual' | 'fine_dining';

    @OneToMany(() => Product, product => product.restaurant)
    products: Product[];

    @OneToMany(() => Order, order => order.restaurant)
    orders: Order[];

    @OneToMany(() => FavoriteRestaurant, favoriteRestaurant => favoriteRestaurant.restaurant)
    favorites: FavoriteRestaurant[];

    @OneToMany(() => Review, review => review.restaurant)
    reviews: Review[];
}
