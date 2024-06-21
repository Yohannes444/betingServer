import { Injectable } from '@nestjs/common';
import { CreateKenoDto } from './dto/create-keno.dto';
import { UpdateKenoDto } from './dto/update-keno.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KenoDocument } from './entities/keno.entity'

@Injectable()
export class KenoService {

 constructor(
    @InjectModel('Keno')
    private readonly kenoModel:Model<KenoDocument>

  ){}

  async create(createKenoDto: CreateKenoDto) {
    try{
      const newKenoTiket= await this.kenoModel.create(createKenoDto)
      return newKenoTiket;
    }catch (error){
      console.log("error activating customer")
    }
  }

  findAll() {
    return `This action returns all keno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} keno`;
  }

  update(id: number, updateKenoDto: UpdateKenoDto) {
    return `This action updates a #${id} keno`;
  }

  remove(id: number) {
    return `This action removes a #${id} keno`;
  }
}
