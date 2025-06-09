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
<<<<<<< HEAD
<<<<<<< HEAD
import { UserModule } from './user/user.module';  

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
=======
import { UserModule } from './user/user.module';  // <-- importe o módulo, não a entidade
=======
import { UserModule } from './user/user.module';  
>>>>>>> 9ad946a (fix swagger)

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
<<<<<<< HEAD
    FavoritRestaurantModule,  // nome corrigido do módulo
>>>>>>> e0b2a5f (fix)
=======
    FavoritRestaurantModule, 
>>>>>>> 9ad946a (fix swagger)
    OrderModule,
    OrderItemModule,
    PaymentModule,
    ProductModule,
    RestaurantModule,
    ReviewModule,
<<<<<<< HEAD
<<<<<<< HEAD
    UserModule,              
=======
    UserModule,                // Adicione aqui
>>>>>>> e0b2a5f (fix)
=======
    UserModule,              
>>>>>>> 9ad946a (fix swagger)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}