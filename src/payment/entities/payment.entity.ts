
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal', { precision: 10, scale: 2 })
    amount: number;

    @Column()
    method: string;

    @Column()
    status: string;

    @Column({ nullable: true })
    transactionId: string;

    @OneToOne(() => Order, order => order.payment)
    order: Order;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
