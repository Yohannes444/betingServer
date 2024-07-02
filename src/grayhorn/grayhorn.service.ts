import { Injectable } from '@nestjs/common';
import { CreateGrayhornDto } from './dto/create-grayhorn.dto';
import { UpdateGrayhornDto } from './dto/update-grayhorn.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GrayhornDocument } from './entities/grayhorn.entity'

@Injectable()
export class GrayhornService {
  constructor(
    @InjectModel('Grayhorn')
    private readonly grayhornModel:Model<GrayhornDocument>

  ){}
  async create(createGrayhornDto: CreateGrayhornDto) {
    try{
      const newGrayhornTiket= await this.grayhornModel.create(createGrayhornDto)
      console.log("createGrayhornDto: ",createGrayhornDto , "\n newGrayhornTiket: ",newGrayhornTiket)
      return newGrayhornTiket;
    }catch (error){
      console.log("error activating customer")
    }
  }

  async findAll() {
    const allTikets= await this.grayhornModel.find()
    return allTikets;
  }

  async findOne(id:string) {
    const oneTikets= await this.grayhornModel.findById(id)
    return oneTikets;
  }

  update(id: string, updateGrayhornDto: UpdateGrayhornDto) {
    return `This action updates a #${id} grayhorn`;
  }

  remove(id: string) {
    return `This action removes a #${id} grayhorn`;
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

    if (payd !== undefined && payd == true) {
      query['payd'] = payd;
    }

    if (canceled !== undefined) {
      query['canceled'] = canceled;
    }

    if (gameId) {
      query['gameId'] = gameId;
    }

    if (minTotalPrize !== undefined && minTotalPrize > 0) {
      query['totalPrize'] = { $gt: minTotalPrize };
    }

    return await this.grayhornModel.find(query).exec();
  }
}
