import { Injectable } from '@nestjs/common';
import { CreateGrayhornResulatDto } from './dto/create-grayhorn-resulat.dto';
import { UpdateGrayhornResulatDto } from './dto/update-grayhorn-resulat.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { GameResultDocument } from './entities/grayhorn-resulat.entity'
import { GrayhornDocument } from 'src/grayhorn/entities/grayhorn.entity'

@Injectable()
export class GrayhornResulatService {

  constructor(
    @InjectModel('GrayhornResulat')
    private readonly dogRaceModel: Model<GameResultDocument>,
    @InjectModel('Grayhorn')
    private readonly grayhornTiketModel:Model<GrayhornDocument>
    
  ) {}
  async create(createGrayhornResulatDto: CreateGrayhornResulatDto) {
   
  }

  findAll() {
    return `This action returns all grayhornResulat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grayhornResulat`;
  }

  update(id: number, updateGrayhornResulatDto: UpdateGrayhornResulatDto) {
    return `This action updates a #${id} grayhornResulat`;
  }

  remove(id: number) {
    return `This action removes a #${id} grayhornResulat`;
  }
}
