import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

    
  @ApiProperty({
    description: 'Identificador único do produto',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome do produto',
    example: 'Hambúrguer',
  })
  nome: string;

  @ApiProperty({
    description: 'Preço do produto',
    example: 25.50,
  })
  preco: number;

  @ApiProperty({
    description: 'Identificador do restaurante que oferece o produto',
    example: 5,
  })
  restaurantId: number;

  @ApiProperty({
    description: 'Identificador da categoria do produto',
    example: 3,
  })
  categoryId: number;

}
