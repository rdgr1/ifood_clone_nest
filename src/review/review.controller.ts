import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReviewService } from './review.service';
import { Review } from 'src/review/entities/review.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('review')
@Controller('review')
export class ReviewController {
  constructor(private readonly service: ReviewService) {}

  @Post()
  create(@Body() data: Review) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Review>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
