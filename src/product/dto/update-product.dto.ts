import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {

      @ApiProperty({ description: 'Nome do produto', example: 'Hambúrguer', required: false })
  nome?: string;

  @ApiProperty({ description: 'Preço do produto', example: 25.50, required: false })
  preco?: number;

  @ApiProperty({ description: 'ID do restaurante', example: 5, required: false })
  restaurantId?: number;

  @ApiProperty({ description: 'ID da categoria', example: 3, required: false })
  categoryId?: number;

}
