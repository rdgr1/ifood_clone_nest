import { IsString, IsInt, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateFavoritRestaurantDto {
    
  @ApiProperty({
  description: 'Identificador único do favorito',
  example: 1,
 })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Identificador do usuário que favoritou o restaurante',
    example: 10,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'Identificador do restaurante favoritado',
    example: 5,
  })
  @IsNumber()
  restaurantId: number;

  @ApiProperty({
    description: 'Data em que o restaurante foi favoritado',
    example: '2025-06-01T12:00:00Z',
  })
  createdAt: Date;
}
