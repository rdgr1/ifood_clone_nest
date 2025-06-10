import { ApiProperty } from "@nestjs/swagger";

export class CreateRestaurantDto {

      @ApiProperty({
    description: 'Identificador único do restaurante',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome do restaurante',
    example: 'Pizzaria Napoli',
  })
  nome: string;

  @ApiProperty({
    description: 'Endereço do restaurante',
    example: 'Rua das Acácias, 123',
  })
  endereco: string;

  @ApiProperty({
    description: 'Telefone de contato do restaurante',
    example: '(11) 98765-4321',
  })
  telefone: string;

  @ApiProperty({
    description: 'Tipo do restaurante',
    example: 'casual',
  })
  tipo: 'fast_food' | 'casual' | 'fine_dining';

}
