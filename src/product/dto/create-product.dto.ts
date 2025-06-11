import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

    
  @ApiProperty({
    description: 'Identificador único do produto',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Nome do produto',
    example: 'Hambúrguer',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Preço do produto',
    example: 25.50,
  })
  @IsNumber()
  preco: number;

  @ApiProperty({
    description: 'Identificador do restaurante que oferece o produto',
    example: 5,
  })
  @IsNumber()
  restaurantId: number;

  @ApiProperty({
    description: 'Identificador da categoria do produto',
    example: 3,
  })
  @IsNumber()
  categoryId: number;

}
