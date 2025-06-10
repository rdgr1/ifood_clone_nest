import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto {
  @ApiProperty({
    description: 'Identificador único da avaliação',
    example: 1,
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Identificador do usuário que fez a avaliação',
    example: 10,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'Identificador do restaurante avaliado',
    example: 5,
  })
  @IsNumber()
  restaurantId: number;

  @ApiProperty({
    description: 'Nota de avaliação dada pelo usuário',
    example: 4,
  })
  @IsNumber()
  rating: number;

  @ApiProperty({
    description: 'Comentário adicional do usuário',
    example: 'Ótimo atendimento!',
    required: false,
  })
  @IsOptional()
  @IsString()
  comentario?: string;

  @ApiProperty({
    description: 'Data em que a avaliação foi realizada',
    example: '2025-06-01T12:00:00Z',
  })
  createdAt: Date;
}


