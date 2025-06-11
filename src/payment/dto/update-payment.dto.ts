import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {

      @ApiProperty({ description: 'Valor do pagamento', example: 99.99, required: false })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiProperty({ description: 'Método de pagamento', example: 'cartão de crédito', required: false })
  @IsOptional()
  @IsString()
  method?: string;

  @ApiProperty({ description: 'Status do pagamento', example: 'aprovado', required: false })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({ description: 'ID da transação', example: 'trx_123abc', required: false })
  @IsOptional()
  @IsString()
  transactionId?: string;

  @ApiProperty({ description: 'ID do pedido associado', example: 1, required: false })
  @IsOptional()
  @IsNumber()
  orderId?: number;

}
