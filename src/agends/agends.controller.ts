import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AgendsService } from './agends.service';
import { CreateAgendDto } from './dto/create-agend.dto';
import { UpdateAgendDto } from './dto/update-agend.dto';

@Controller('agends')
export class AgendsController {
  constructor(private readonly agendsService: AgendsService) {}

  @Post()
  create(@Body() createAgendDto: CreateAgendDto) {
    return this.agendsService.create(createAgendDto);
  }

  @Get()
  findAll() {
    return this.agendsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.agendsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAgendDto: UpdateAgendDto) {
    return this.agendsService.update(id, updateAgendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.agendsService.remove(id);
  }
}
