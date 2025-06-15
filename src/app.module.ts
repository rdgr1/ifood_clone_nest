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
import { UserModule } from './user/user.module';  
import { AuthModule } from './auth/auth.module';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'rdgr777',
      password: '995647',
      database: 'ifood_clone',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AddressModule,
    CategoryModule,
    FavoritRestaurantModule, 
    OrderModule,
    OrderItemModule,
    PaymentModule,
    ProductModule,
    RestaurantModule,
    ReviewModule,
    UserModule,
    AuthModule,              
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}