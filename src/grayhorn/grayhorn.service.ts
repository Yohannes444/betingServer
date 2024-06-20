import { Injectable } from '@nestjs/common';
import { CreateGrayhornDto } from './dto/create-grayhorn.dto';
import { UpdateGrayhornDto } from './dto/update-grayhorn.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GrayhornDocument } from './entities/grayhorn.entity'

@Injectable()
export class GrayhornService {
  constructor(
    @InjectModel('AnimeDog')
    private readonly animeDogModel:Model<GrayhornDocument>

  ){}
  create(createGrayhornDto: CreateGrayhornDto) {
    return 'This action adds a new grayhorn';
  }

  findAll() {
    return `This action returns all grayhorn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grayhorn`;
  }

  update(id: number, updateGrayhornDto: UpdateGrayhornDto) {
    return `This action updates a #${id} grayhorn`;
  }

  remove(id: number) {
    return `This action removes a #${id} grayhorn`;
  }
}
