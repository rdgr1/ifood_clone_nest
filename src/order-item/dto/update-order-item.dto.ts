import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderItemDto } from './create-order-item.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderItemDto extends PartialType(CreateOrderItemDto) {

      @ApiProperty({ description: 'ID do pedido', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  orderId?: number;

  @ApiProperty({ description: 'ID do produto', example: 10, required: false })
  @IsOptional()
  @IsNumber()
  productId?: number;

  @ApiProperty({ description: 'Quantidade', example: 2, required: false })
  @IsOptional()
  @IsNumber()
  quantidade?: number;

}
