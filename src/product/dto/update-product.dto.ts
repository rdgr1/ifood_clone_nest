import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {

      @ApiProperty({ description: 'Nome do produto', example: 'Hambúrguer', required: false })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({ description: 'Preço do produto', example: 25.50, required: false })
  @IsOptional()
  @IsNumber()
  preco?: number;

  @ApiProperty({ description: 'ID do restaurante', example: 5, required: false })
  @IsOptional()
  @IsNumber()
  restaurantId?: number;

  @ApiProperty({ description: 'ID da categoria', example: 3, required: false })
  @IsOptional()
  @IsNumber()
  categoryId?: number;

}
