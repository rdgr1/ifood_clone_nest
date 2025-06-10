import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
      @ApiProperty({ description: 'Nome da categoria', example: 'Bebidas', required: false })
  @IsOptional()
  @IsString()
  nome?: string;
}
