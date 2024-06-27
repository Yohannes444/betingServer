import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GrayhornResulatService } from './grayhorn-resulat.service';
import { CreateGrayhornResulatDto } from './dto/create-grayhorn-resulat.dto';
import { UpdateGrayhornResulatDto } from './dto/update-grayhorn-resulat.dto';

@Controller('grayhorn-resulat')
export class GrayhornResulatController {
  constructor(private readonly grayhornResulatService: GrayhornResulatService) {}

  @Post()
  create(@Body() createGrayhornResulatDto: CreateGrayhornResulatDto) {
    return this.grayhornResulatService.create(createGrayhornResulatDto);
  }

  @Get()
  findAll() {
    return this.grayhornResulatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grayhornResulatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGrayhornResulatDto: UpdateGrayhornResulatDto) {
    return this.grayhornResulatService.update(+id, updateGrayhornResulatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grayhornResulatService.remove(+id);
  }
}
