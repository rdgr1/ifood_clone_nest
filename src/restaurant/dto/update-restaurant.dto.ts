import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {

      @ApiProperty({ description: 'Nome do restaurante', example: 'Pizzaria Napoli', required: false })
  nome?: string;

  @ApiProperty({ description: 'Endereço do restaurante', example: 'Rua das Acácias, 123', required: false })
  endereco?: string;

  @ApiProperty({ description: 'Telefone de contato', example: '(11) 98765-4321', required: false })
  telefone?: string;

  @ApiProperty({ description: 'Tipo do restaurante', example: 'casual', required: false })
  tipo?: 'fast_food' | 'casual' | 'fine_dining';

}
