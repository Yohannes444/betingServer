import { Injectable } from '@nestjs/common';
import { CreateAnimeDogDto } from './dto/create-anime-dog.dto';
import { UpdateAnimeDogDto } from './dto/update-anime-dog.dto';
import { AnimeDogDocument } from './entities/anime-dog.entity'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnimeDogService {
  constructor(
    @InjectModel('AnimeDog')
    private readonly animeDogModel:Model<AnimeDogDocument>

  ){}

  async create(createAnimeDogDto: CreateAnimeDogDto) {
    try{
      const newAnimedogTiket= await this.animeDogModel.create(createAnimeDogDto)
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
