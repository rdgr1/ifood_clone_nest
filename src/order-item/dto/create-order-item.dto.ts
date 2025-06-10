import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderItemDto {

      @ApiProperty({
    description: 'Identificador único do item do pedido',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Identificador do pedido associado',
    example: 1,
  })
  @IsNumber()
  orderId: number;

  @ApiProperty({
    description: 'Identificador do produto associado',
    example: 10,
  })
  @IsNumber()
  productId: number;

  @ApiProperty({
    description: 'Quantidade do produto no pedido',
    example: 2,
  })
  @IsNumber()
  quantidade: number;

}
