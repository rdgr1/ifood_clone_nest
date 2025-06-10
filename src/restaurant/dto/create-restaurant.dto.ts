import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateRestaurantDto {

      @ApiProperty({
    description: 'Identificador único do restaurante',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Nome do restaurante',
    example: 'Pizzaria Napoli',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Endereço do restaurante',
    example: 'Rua das Acácias, 123',
  })
  @IsString()
  @IsNotEmpty()
  endereco: string;

  @ApiProperty({
    description: 'Telefone de contato do restaurante',
    example: '(11) 98765-4321',
  })
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({
    description: 'Tipo do restaurante',
    example: 'casual',
  })
  tipo: 'fast_food' | 'casual' | 'fine_dining';

}
