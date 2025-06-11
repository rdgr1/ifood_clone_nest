import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {

      @ApiProperty({ description: 'Nome do restaurante', example: 'Pizzaria Napoli', required: false })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({ description: 'Endereço do restaurante', example: 'Rua das Acácias, 123', required: false })
  @IsOptional()
  @IsString()
  endereco?: string;

  @ApiProperty({ description: 'Telefone de contato', example: '(11) 98765-4321', required: false })
  @IsOptional()
  @IsString()
  telefone?: string;

  @ApiProperty({ description: 'Tipo do restaurante', example: 'casual', required: false })
  tipo?: 'fast_food' | 'casual' | 'fine_dining';

}
