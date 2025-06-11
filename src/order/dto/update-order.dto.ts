import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

      @ApiProperty({ description: 'Identificador do usuário', example: 10, required: false })
  @IsOptional()
  @IsNumber()
  userId?: number;

  @ApiProperty({ description: 'Identificador do restaurante', example: 5, required: false })
  @IsOptional()
  @IsNumber()
  restaurantId?: number;

  @ApiProperty({ description: 'Status do pedido', example: 'em preparo', required: false })
  @IsOptional()
  @IsString()
  status?: string;

}
