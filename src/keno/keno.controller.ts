import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KenoService } from './keno.service';
import { CreateKenoDto } from './dto/create-keno.dto';
import { UpdateKenoDto } from './dto/update-keno.dto';

@Controller('keno')
export class KenoController {
  constructor(private readonly kenoService: KenoService) {}

  @Post()
  create(@Body() createKenoDto: CreateKenoDto) {
    return this.kenoService.create(createKenoDto);
  }

  @Get()
  findAll() {
    return this.kenoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kenoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKenoDto: UpdateKenoDto) {
    return this.kenoService.update(+id, updateKenoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kenoService.remove(+id);
  }
}
