import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AddressModule } from './address/address.module';
import { CategoryModule } from './category/category.module';
import { FavoritRestaurantModule } from './favorit-restaurant/favorit-restaurant.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { PaymentModule } from './payment/payment.module';
import { ProductModule } from './product/product.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ReviewModule } from './review/review.module';
import { UserModule } from './user/user.module';  // <-- importe o módulo, não a entidade

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'rdgr777',
      password: process.env.DB_PASSWORD || '995647',
      database: process.env.DB_DATABASE || 'ifood_clone',
      synchronize: true,
      autoLoadEntities: true,  // já carrega todas as entidades registradas nos módulos
    }),
    AddressModule,
    CategoryModule,
    FavoritRestaurantModule,  // nome corrigido do módulo
    OrderModule,
    OrderItemModule,
    PaymentModule,
    ProductModule,
    RestaurantModule,
    ReviewModule,
    UserModule,                // Adicione aqui
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}