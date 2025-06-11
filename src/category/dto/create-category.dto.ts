import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Identificador único da categoria',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Nome da categoria',
    example: 'Bebidas',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;
}
