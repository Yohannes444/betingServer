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
        canceled: false, 
        payd: false, 
        totslPrize: 0, 
        tiketerId: null, 
        bets: createAnimeDogDto.bets.map(bet => ({
          ...bet,
          win: false, 
          prize: 0 
        })),
      };
      const newAnimedogTiket= await this.animeDogModel.create(newAnimeHorData)
      return newAnimedogTiket;
    }catch (error){
      console.log("error activating customer")
    }
  }

  async findAll() {
    const allTikets= await this.animeDogModel.find()
    return allTikets;
  }

  async findOne(id: string) {
    const tiket= await this.animeDogModel.findById(id)

    return tiket;
  }

  async update(id: number, updateAnimeDogDto: UpdateAnimeDogDto) {
    return `This action updates a #${id} animeDog`;
  }

  async remove(id: number) {
    return `This action removes a #${id} animeDog`;
  }

  async findByCriteria(
    startDate: Date,
    endDate: Date,
    payd: boolean,
    canceled: boolean,
    gameId: number,
    minTotalPrize: number,
  ) {
    const query: any = {};

    if (startDate && endDate) {
      query['createdAt'] = { $gte: startDate, $lte: endDate };
    } else if (startDate) {
      query['createdAt'] = { $gte: startDate };
    } else if (endDate) {
      query['createdAt'] = { $lte: endDate };
    }

    if (payd !== undefined) {
      query['payd'] = payd;
    }

    if (canceled !== undefined) {
      query['canceled'] = canceled;
    }

    if (gameId) {
      query['gameId'] = gameId;
    }

    if (minTotalPrize > 0) {
      query['totalPrize'] = { $gt: 0 };
    }

    return await this.animeDogModel.find(query).exec();
  }
}
