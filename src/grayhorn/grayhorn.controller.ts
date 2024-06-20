import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrayhornService } from './grayhorn.service';
import { CreateGrayhornDto } from './dto/create-grayhorn.dto';
import { UpdateGrayhornDto } from './dto/update-grayhorn.dto';

@Controller('grayhorn')
export class GrayhornController {
  constructor(private readonly grayhornService: GrayhornService) {}

  @Post()
  create(@Body() createGrayhornDto: CreateGrayhornDto) {
    return this.grayhornService.create(createGrayhornDto);
  }

  @Get()
  findAll() {
    return this.grayhornService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grayhornService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrayhornDto: UpdateGrayhornDto) {
    return this.grayhornService.update(+id, updateGrayhornDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grayhornService.remove(+id);
  }
}
