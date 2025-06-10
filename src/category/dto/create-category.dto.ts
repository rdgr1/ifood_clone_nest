import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Identificador único da categoria',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome da categoria',
    example: 'Bebidas',
  })
  nome: string;
}
