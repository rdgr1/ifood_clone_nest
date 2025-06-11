import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {

      @ApiProperty({ description: 'Nome do usuário', example: 'João Silva', required: false })
  nome?: string;

  @ApiProperty({ description: 'Email do usuário', example: 'joao.silva@example.com', required: false })
  email?: string;

  @ApiProperty({ description: 'Senha do usuário', example: 'senhaSegura123', required: false })
  senha?: string;

  @ApiProperty({ description: 'Tipo de usuário', example: 'cliente', required: false })
  tipo?: 'cliente' | 'restaurante' | 'entregador';

}
