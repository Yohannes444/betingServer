import { Controller, Get, Post, Body, Patch,Query , Param, Delete } from '@nestjs/common';
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
  @Get('filter')
  async findByCriteria(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
    @Body('payd') payd: boolean,
    @Body('canceled') canceled: boolean,
    @Body('gameId') gameId: number,
    @Body('minTotalPrize') minTotalPrize: number,
  ) {
    console.log("{param: ", payd)

    return this.animeDogService.findByCriteria(startDate, endDate, payd, canceled, gameId, minTotalPrize);
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
