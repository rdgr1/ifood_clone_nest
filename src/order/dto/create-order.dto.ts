import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {

    @ApiProperty({
    description: 'Identificador único do pedido',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Identificador do usuário que realizou o pedido',
    example: 10,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'Identificador do restaurante onde o pedido foi realizado',
    example: 5,
  })
  @IsNumber()
  restaurantId: number;

  @ApiProperty({
    description: 'Status atual do pedido',
    example: 'pendente',
  })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    description: 'Data em que o pedido foi realizado',
    example: '2025-06-01T12:00:00Z',
  })
  data_pedido: Date;

}
