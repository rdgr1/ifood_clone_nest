import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderItemDto {

      @ApiProperty({
    description: 'Identificador único do item do pedido',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Identificador do pedido associado',
    example: 1,
  })
  orderId: number;

  @ApiProperty({
    description: 'Identificador do produto associado',
    example: 10,
  })
  productId: number;

  @ApiProperty({
    description: 'Quantidade do produto no pedido',
    example: 2,
  })
  quantidade: number;

}
