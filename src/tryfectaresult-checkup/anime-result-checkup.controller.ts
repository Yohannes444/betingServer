import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors  } from '@nestjs/common';
import { AnimeResultCheckupService } from './anime-result-checkup.service';
import { CreateAnimeResultCheckupDto } from './dto/create-anime-result-checkup.dto';
import { UpdateAnimeResultCheckupDto } from './dto/update-anime-result-checkup.dto';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('tryfecta-result-checkup')
export class AnimeResultCheckupController {
  constructor(private readonly animeResultCheckupService: AnimeResultCheckupService) {}

  @Post()
  create(@Body() createAnimeResultCheckupDto: CreateAnimeResultCheckupDto) {
    return this.animeResultCheckupService.create(createAnimeResultCheckupDto);
  }

  @Get()
  findAll() {
    return this.animeResultCheckupService.findAll();
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file:Express.MulterFile) {
    return this.animeResultCheckupService.saveTicketsFromExcel(file);
  }
  @Post('compareResults')
  @UseInterceptors(FileInterceptor('file'))
  async compareResults(@UploadedFile() file: Express.MulterFile, @Body('date') date: string) {
    return this.animeResultCheckupService.compareResults(file, new Date(date));
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.animeResultCheckupService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAnimeResultCheckupDto: UpdateAnimeResultCheckupDto) {
  //   return this.animeResultCheckupService.update(+id, updateAnimeResultCheckupDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.animeResultCheckupService.remove(+id);
  // }
}
