import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {

      @ApiProperty({ description: 'Identificador do usuário', example: 10, required: false })
  userId?: number;

  @ApiProperty({ description: 'Identificador do restaurante', example: 5, required: false })
  restaurantId?: number;

  @ApiProperty({ description: 'Status do pedido', example: 'em preparo', required: false })
  status?: string;

}
