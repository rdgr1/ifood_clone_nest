import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {

      @ApiProperty({ description: 'Nome do usuário', example: 'João Silva', required: false })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({ description: 'Email do usuário', example: 'joao.silva@example.com', required: false })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({ description: 'Senha do usuário', example: 'senhaSegura123', required: false })
  @IsOptional()
  @IsString()
  senha?: string;

  @ApiProperty({ description: 'Tipo de usuário', example: 'cliente', required: false })
  tipo?: 'cliente' | 'restaurante' | 'entregador';

}
