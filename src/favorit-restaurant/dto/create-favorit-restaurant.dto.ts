import { ApiProperty } from "@nestjs/swagger";

export class CreateFavoritRestaurantDto {
    
  @ApiProperty({
  description: 'Identificador único do favorito',
  example: 1,
 })
  id: number;

  @ApiProperty({
    description: 'Identificador do usuário que favoritou o restaurante',
    example: 10,
  })
  userId: number;

  @ApiProperty({
    description: 'Identificador do restaurante favoritado',
    example: 5,
  })
  restaurantId: number;

  @ApiProperty({
    description: 'Data em que o restaurante foi favoritado',
    example: '2025-06-01T12:00:00Z',
  })
  createdAt: Date;
}
