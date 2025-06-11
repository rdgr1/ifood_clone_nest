import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {

      @ApiProperty({ description: 'ID do usuário', example: 10, required: false })
  userId?: number;

  @ApiProperty({ description: 'ID do restaurante', example: 5, required: false })
  restaurantId?: number;

  @ApiProperty({ description: 'Nota de avaliação', example: 4, required: false })
  rating?: number;

  @ApiProperty({ description: 'Comentário do usuário', example: 'Ótimo atendimento!', required: false })
  comentario?: string;

}
