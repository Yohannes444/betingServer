import { Injectable } from '@nestjs/common';
import { CreateAnimeHorDto } from './dto/create-anime-hor.dto';
import { UpdateAnimeHorDto } from './dto/update-anime-hor.dto';

@Injectable()
export class AnimeHorsService {
  create(createAnimeHorDto: CreateAnimeHorDto) {
    return 'This action adds a new animeHor';
  }

  findAll() {
    return `This action returns all animeHors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animeHor`;
  }

  update(id: number, updateAnimeHorDto: UpdateAnimeHorDto) {
    return `This action updates a #${id} animeHor`;
  }

  remove(id: number) {
    return `This action removes a #${id} animeHor`;
  }
}
