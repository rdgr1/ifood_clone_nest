import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    
  @ApiProperty({
    description: 'Identificador único do usuário',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Nome do usuário',
    example: 'João Silva',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Email do usuário',
    example: 'joao.silva@example.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Tipo de usuário',
    example: 'cliente',
  })
  tipo: 'cliente' | 'restaurante' | 'entregador';

}
