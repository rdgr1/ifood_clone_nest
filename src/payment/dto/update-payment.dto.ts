import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {

      @ApiProperty({ description: 'Valor do pagamento', example: 99.99, required: false })
  amount?: number;

  @ApiProperty({ description: 'Método de pagamento', example: 'cartão de crédito', required: false })
  method?: string;

  @ApiProperty({ description: 'Status do pagamento', example: 'aprovado', required: false })
  status?: string;

  @ApiProperty({ description: 'ID da transação', example: 'trx_123abc', required: false })
  transactionId?: string;

  @ApiProperty({ description: 'ID do pedido associado', example: 1, required: false })
  orderId?: number;

}
