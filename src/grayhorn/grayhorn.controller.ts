import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
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


  @Patch('pay')
  update(@Query() updateGrayhornDto: UpdateGrayhornDto) {
    return this.grayhornService.update(updateGrayhornDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.grayhornService.remove(id);
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
    
    return this.grayhornService.findByCriteria(startDate, endDate, payd, canceled, gameId, minTotalPrize);
  }
  @Get('tiketId/:id')
  findBayTiketId(@Param('id') id: string) {
    return this.grayhornService.findBayTiketId(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.grayhornService.findOne(id);
  }
}
