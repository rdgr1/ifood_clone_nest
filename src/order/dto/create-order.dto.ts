import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {

    @ApiProperty({
    description: 'Identificador único do pedido',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Identificador do usuário que realizou o pedido',
    example: 10,
  })
  userId: number;

  @ApiProperty({
    description: 'Identificador do restaurante onde o pedido foi realizado',
    example: 5,
  })
  restaurantId: number;

  @ApiProperty({
    description: 'Status atual do pedido',
    example: 'pendente',
  })
  status: string;

  @ApiProperty({
    description: 'Data em que o pedido foi realizado',
    example: '2025-06-01T12:00:00Z',
  })
  data_pedido: Date;

}
