import { IsEmail, IsEnum, IsString } from 'class-validator';
import { UserType } from 'src/user/entities/user-type.enum';

export class RegisterDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  senha: string;

  @IsEnum(UserType)
  tipo: UserType;
}