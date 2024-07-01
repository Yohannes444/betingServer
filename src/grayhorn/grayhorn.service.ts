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

  async findOne(id: number) {
    const oneTikets= await this.grayhornModel.findById(id)
    return oneTikets;
  }

  update(id: number, updateGrayhornDto: UpdateGrayhornDto) {
    return `This action updates a #${id} grayhorn`;
  }

  remove(id: number) {
    return `This action removes a #${id} grayhorn`;
  }
}
