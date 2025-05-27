import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from 'src/address/entities/address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly service: AddressService) {}

  @Post()
  create(@Body() data: Address) {
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
  update(@Param('id') id: number, @Body() data: Partial<Address>) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
