import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {

      @ApiProperty({ description: 'ID do usuário', example: 10, required: false })
  @IsOptional()
  @IsNumber()
  userId?: number;

  @ApiProperty({ description: 'ID do restaurante', example: 5, required: false })
  @IsOptional()
  @IsNumber()
  restaurantId?: number;

  @ApiProperty({ description: 'Nota de avaliação', example: 4, required: false })
  @IsOptional()
  @IsNumber()
  rating?: number;

  @ApiProperty({ description: 'Comentário do usuário', example: 'Ótimo atendimento!', required: false })
  @IsOptional()
  @IsString()
  comentario?: string;

}
