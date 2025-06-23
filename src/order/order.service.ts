import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';
import { OrderItem } from 'src/order-item/entities/order-item.entity';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { Address } from 'src/address/entities/address.entity';
import { Payment } from 'src/payment/entities/payment.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,

    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async create(data: any) {
    const { userId, addressId, items, paymentId } = data;

    const user = await this.userRepository.findOneBy({ id: userId });
    const payment = await this.paymentRepository.findOneBy({ id: paymentId });
    const address = await this.addressRepository.findOneBy({ id: addressId });

    if (!user || !payment || !address) {
      throw new Error('Dados inválidos');
    }

    // Obtenha o primeiro produto (com restaurante) para associar ao pedido
    const product = await this.productRepository.findOne({
      where: { id: items[0].productId },
      relations: ['restaurant'],
    });
    if (!product) {
      throw new Error(`Produto com ID ${items[0].productId} não encontrado.`);
    }

    const order = this.orderRepository.create({
      user,
      payment,
      restaurant: product.restaurant,
      status: 'pendente',
      orderItems: [],
    });

    const savedOrder = await this.orderRepository.save(order);

    for (const item of items) {
      const product = await this.productRepository.findOneBy({ id: item.productId });
      if (!product) {
        throw new Error(`Produto com ID ${item.productId} não encontrado.`);
      }
      await this.orderItemRepository.save({
        order: savedOrder,
        product,
        quantidade: item.quantity,
      });
    }

    return savedOrder;
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return this.orderRepository.findOne({ where: { id } });
  }

  update(id: number, data: Partial<Order>) {
    if (!data || Object.keys(data).length === 0) {
      throw new Error('Nenhum dado fornecido para atualização');
    }
    return this.orderRepository.update(id, data);
  }

  async findByCliente(userId: number) {
    return this.orderRepository.find({
      where: { user: { id: userId } },
      relations: ['restaurant', 'orderItems', 'orderItems.product', 'payment'],
      order: { data_pedido: 'DESC' },
    });
  }

  remove(id: number) {
    return this.orderRepository.delete(id);
  }
}