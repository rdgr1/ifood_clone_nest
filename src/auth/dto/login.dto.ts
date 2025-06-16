// login.dto.ts
import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsEnum(['cliente', 'restaurante', 'entregador'])
  tipo: 'cliente' | 'restaurante' | 'entregador';
}
