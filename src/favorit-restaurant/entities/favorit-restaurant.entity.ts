import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';

@Entity()
export class FavoriteRestaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.favorites)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Restaurant, restaurant => restaurant.favorites)
    @JoinColumn({ name: 'restaurant_id' })
    restaurant: Restaurant;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}

