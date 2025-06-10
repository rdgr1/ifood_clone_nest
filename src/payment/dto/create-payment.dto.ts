import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {

      @ApiProperty({
    description: 'Identificador único do pagamento',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Valor total do pagamento',
    example: 99.99,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Método de pagamento utilizado',
    example: 'cartão de crédito',
  })
  @IsString()
  @IsNotEmpty()
  method: string;

  @ApiProperty({
    description: 'Status atual do pagamento',
    example: 'aprovado',
  })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({
    description: 'Identificador da transação, caso exista',
    example: 'trx_123abc',
    required: false,
  })
  @IsOptional()
  @IsString()
  transactionId?: string;

  @ApiProperty({
    description: 'Identificador do pedido associado ao pagamento',
    example: 1,
  })
  @IsNumber()
  orderId: number;

  @ApiProperty({
    description: 'Data em que o pagamento foi registrado',
    example: '2025-06-01T12:00:00Z',
  })
  createdAt: Date;

}
