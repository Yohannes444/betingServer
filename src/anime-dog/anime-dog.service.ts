import { Injectable } from '@nestjs/common';
import { CreateAnimeDogDto } from './dto/create-anime-dog.dto';
import { UpdateAnimeDogDto } from './dto/update-anime-dog.dto';
import { AnimeDogDocument,AnimeDog } from './entities/anime-dog.entity'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
@Injectable()
export class AnimeDogService {
  constructor(
    @InjectModel('AnimeDog')
    private readonly animeDogModel:Model<AnimeDogDocument>

  ){}

  async create(createAnimeDogDto: CreateAnimeDogDto) {
    try{
      const createAnimeHorObj = plainToInstance(CreateAnimeDogDto, createAnimeDogDto);

      // Validate the DTO instance
      await validateOrReject(createAnimeHorObj);

      const newAnimeHorData: Partial<AnimeDog> = {
        ...createAnimeDogDto,
        canceled: false, // default value
        payd: false, // default value
        totslPrize: 0, // initial value
        tiketerId: null, // can be set to a specific User object if available
        bets: createAnimeDogDto.bets.map(bet => ({
          ...bet,
          win: false, // default value
          prize: 0 // initial value
        })),
      };
      console.log('newAnimeHorData: ',newAnimeHorData)
      const newAnimedogTiket= await this.animeDogModel.create(newAnimeHorData)
      return newAnimedogTiket;
    }catch (error){
      console.log("error activating customer")
    }
  }

  async findAll() {
    return `This action returns all animeDog`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} animeDog`;
  }

  async update(id: number, updateAnimeDogDto: UpdateAnimeDogDto) {
    return `This action updates a #${id} animeDog`;
  }

  async remove(id: number) {
    return `This action removes a #${id} animeDog`;
  }
}
