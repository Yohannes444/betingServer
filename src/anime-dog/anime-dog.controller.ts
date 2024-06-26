import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimeDogService } from './anime-dog.service';
import { CreateAnimeDogDto } from './dto/create-anime-dog.dto';
import { UpdateAnimeDogDto } from './dto/update-anime-dog.dto';

@Controller('anime-dog')
export class AnimeDogController {
  constructor(private readonly animeDogService: AnimeDogService) {}

  @Post()
  create(@Body() createAnimeDogDto: CreateAnimeDogDto) {
    return this.animeDogService.create(createAnimeDogDto);
  }

  @Get()
  findAll() {
    return this.animeDogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animeDogService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimeDogDto: UpdateAnimeDogDto) {
    return this.animeDogService.update(+id, updateAnimeDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeDogService.remove(+id);
  }
}
