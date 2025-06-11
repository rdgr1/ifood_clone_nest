import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {

      @ApiProperty({
    description: 'Identificador único do pagamento',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Valor total do pagamento',
    example: 99.99,
  })
  amount: number;

  @ApiProperty({
    description: 'Método de pagamento utilizado',
    example: 'cartão de crédito',
  })
  method: string;

  @ApiProperty({
    description: 'Status atual do pagamento',
    example: 'aprovado',
  })
  status: string;

  @ApiProperty({
    description: 'Identificador da transação, caso exista',
    example: 'trx_123abc',
    required: false,
  })
  transactionId?: string;

  @ApiProperty({
    description: 'Identificador do pedido associado ao pagamento',
    example: 1,
  })
  orderId: number;

  @ApiProperty({
    description: 'Data em que o pagamento foi registrado',
    example: '2025-06-01T12:00:00Z',
  })
  createdAt: Date;

}
