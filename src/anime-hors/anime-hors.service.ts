import { Injectable } from '@nestjs/common';
import { CreateAnimeHorDto } from './dto/create-anime-hor.dto';
import { UpdateAnimeHorDto } from './dto/update-anime-hor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnimeHorDocument, AnimeHor } from './entities/anime-hor.entity'
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

@Injectable()
export class AnimeHorsService {
  constructor(
    @InjectModel('AnimeHor')
    private readonly AnimeHorModel:Model<AnimeHorDocument>

  ){}
  async create(createAnimeHorDto: CreateAnimeHorDto) {

    try {
      // Convert plain object to class instance for validation
      const createAnimeHorObj = plainToInstance(CreateAnimeHorDto, createAnimeHorDto);

      // Validate the DTO instance
      await validateOrReject(createAnimeHorObj);

      // Set default values or computed values for attributes not in the DTO
      const newAnimeHorData: Partial<AnimeHor> = {
        ...createAnimeHorDto,
        canceled: false, 
        payd: false, 
        totslPrize: 0,
        tiketerId: null, 
        bets: createAnimeHorDto.bets.map(bet => ({
          ...bet,
          win: false, 
          prize: 0 
        })),
      };

      const newAnimeHorTiket = await this.AnimeHorModel.create(newAnimeHorData);
      return newAnimeHorTiket;
    } catch (error) {
      console.error("Error creating AnimeHor ticket:", error);
      throw error; // Re-throw the error after logging it
    }
  }

  findAll() {
    return `This action returns all animeHors`;
  }

  async findOne(id: string) {
    const tiket = await this.AnimeHorModel.findById(id)
    return tiket;
  }

  update(id: number, updateAnimeHorDto: UpdateAnimeHorDto) {
    return `This action updates a #${id} animeHor`;
  }

  remove(id: number) {
    return `This action removes a #${id} animeHor`;
  }
}
