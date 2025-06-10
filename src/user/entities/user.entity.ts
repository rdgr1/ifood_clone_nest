import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Address } from 'src/address/entities/address.entity';
import { FavoriteRestaurant } from 'src/favorit-restaurant/entities/favorit-restaurant.entity';
import { Order } from 'src/order/entities/order.entity';
import { Review } from 'src/review/entities/review.entity';
import { UserType } from './user-type.enum'; 

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({ unique: true })
    email: string;

    @Column()
    senha: string;

    @Column({
      type: 'enum',
      enum: UserType,
      default: UserType.CLIENTE,
    })
    tipo: UserType;

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

    @OneToMany(() => Address, address => address.user)
    addresses: Address[];

    @OneToMany(() => FavoriteRestaurant, favoriteRestaurant => favoriteRestaurant.user)
    favorites: FavoriteRestaurant[];

    @OneToMany(() => Review, review => review.user)
    reviews: Review[];
}
