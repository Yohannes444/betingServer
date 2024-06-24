import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResaltService } from './resalt.service';
import { CreateResaltDto } from './dto/create-resalt.dto';
import { UpdateResaltDto } from './dto/update-resalt.dto';

@Controller('gameresult')
export class ResaltController {
  constructor(private readonly resaltService: ResaltService) {}

  @Post('DogResult')
  create(@Body() createResaltDto: CreateResaltDto) {
    return this.resaltService.create(createResaltDto);
  }

  @Post('HourseResult')
  createHorsResult(@Body() createResaltDto: CreateResaltDto) {
    return this.resaltService.createHorsResult(createResaltDto);
  }

  @Get()
  findAll() {
    return this.resaltService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resaltService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResaltDto: UpdateResaltDto) {
    return this.resaltService.update(+id, updateResaltDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resaltService.remove(+id);
  }
}
