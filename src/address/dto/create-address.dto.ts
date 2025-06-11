import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressDto {

    @ApiProperty({
    description: 'Identificador único do endereço',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Identificador do usuário associado a este endereço',
    example: 42,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'Nome da rua do endereço',
    example: 'Rua das Flores',
  })
  @IsString()
  @IsNotEmpty()
  street: string;

  @ApiProperty({
    description: 'Número do endereço',
    example: '123A',
  })
  @IsString()
  @IsNotEmpty()
  number: string;

  @ApiProperty({
    description: 'Bairro do endereço',
    example: 'Centro',
  })
  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @ApiProperty({
    description: 'Cidade do endereço',
    example: 'São Paulo',
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    description: 'Estado do endereço',
    example: 'SP',
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    description: 'CEP do endereço',
    example: '01000-000',
  })
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @ApiProperty({
    description: 'Complemento do endereço, caso exista',
    example: 'Apartamento 101',
    required: false,
  })
  @IsOptional()
  @IsString()
  complement?: string;

  @ApiProperty({
    description: 'Indica se este é o endereço padrão do usuário',
    example: true,
  })
  isDefault: boolean;

  @ApiProperty({
    description: 'Data de criação do endereço',
    example: '2025-06-01T12:00:00Z',
  })
  createdAt: Date;

}
