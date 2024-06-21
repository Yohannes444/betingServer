import { Injectable } from '@nestjs/common';
import { CreateAnimeHorDto } from './dto/create-anime-hor.dto';
import { UpdateAnimeHorDto } from './dto/update-anime-hor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnimeHorDocument } from './entities/anime-hor.entity'

@Injectable()
export class AnimeHorsService {
  constructor(
    @InjectModel('AnimeHor')
    private readonly AnimeHorModel:Model<AnimeHorDocument>

  ){}
  async create(createAnimeHorDto: CreateAnimeHorDto) {
    try{
      const newAnimeHorTiket= await this.AnimeHorModel.create(createAnimeHorDto)
      return newAnimeHorTiket;
    }catch (error){
      console.log("error activating customer")
    }
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
