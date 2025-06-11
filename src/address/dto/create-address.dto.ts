import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressDto {

    @ApiProperty({
    description: 'Identificador único do endereço',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Identificador do usuário associado a este endereço',
    example: 42,
  })
  userId: number;

  @ApiProperty({
    description: 'Nome da rua do endereço',
    example: 'Rua das Flores',
  })
  street: string;

  @ApiProperty({
    description: 'Número do endereço',
    example: '123A',
  })
  number: string;

  @ApiProperty({
    description: 'Bairro do endereço',
    example: 'Centro',
  })
  neighborhood: string;

  @ApiProperty({
    description: 'Cidade do endereço',
    example: 'São Paulo',
  })
  city: string;

  @ApiProperty({
    description: 'Estado do endereço',
    example: 'SP',
  })
  state: string;

  @ApiProperty({
    description: 'CEP do endereço',
    example: '01000-000',
  })
  zipCode: string;

  @ApiProperty({
    description: 'Complemento do endereço, caso exista',
    example: 'Apartamento 101',
    required: false,
  })
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
