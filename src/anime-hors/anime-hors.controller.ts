import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnimeHorsService } from './anime-hors.service';
import { CreateAnimeHorDto } from './dto/create-anime-hor.dto';
import { UpdateAnimeHorDto } from './dto/update-anime-hor.dto';

@Controller('anime-hors')
export class AnimeHorsController {
  constructor(private readonly animeHorsService: AnimeHorsService) {}

  @Post()
  create(@Body() createAnimeHorDto: CreateAnimeHorDto) {
    return this.animeHorsService.create(createAnimeHorDto);
  }

  @Get()
  findAll() {
    return this.animeHorsService.findAll();
  }
  @Get('filter')
  async findByCriteria(
    @Body('startDate') startDate: Date,
    @Body('endDate') endDate: Date,
    @Body('payd') payd: boolean,
    @Body('canceled') canceled: boolean,
    @Body('gameId') gameId: number,
    @Body('minTotalPrize') minTotalPrize: number,
  ) {
    
    return this.animeHorsService.findByCriteria(startDate, endDate, payd, canceled, gameId, minTotalPrize);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animeHorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimeHorDto: UpdateAnimeHorDto) {
    return this.animeHorsService.update(+id, updateAnimeHorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeHorsService.remove(+id);
  }
}
