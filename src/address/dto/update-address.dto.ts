import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressDto } from './create-address.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto extends PartialType(CreateAddressDto) {
  @ApiProperty({ description: 'Nome da rua do endereço', example: 'Rua das Flores', required: false })
  street?: string;

  @ApiProperty({ description: 'Número do endereço', example: '123A', required: false })
  number?: string;

  @ApiProperty({ description: 'Bairro do endereço', example: 'Centro', required: false })
  neighborhood?: string;

  @ApiProperty({ description: 'Cidade do endereço', example: 'São Paulo', required: false })
  city?: string;

  @ApiProperty({ description: 'Estado do endereço', example: 'SP', required: false })
  state?: string;

  @ApiProperty({ description: 'CEP do endereço', example: '01000-000', required: false })
  zipCode?: string;

  @ApiProperty({ description: 'Complemento do endereço', example: 'Apartamento 101', required: false })
  complement?: string;

  @ApiProperty({ description: 'Indica se este é o endereço padrão', example: true, required: false })
  isDefault?: boolean;
}
