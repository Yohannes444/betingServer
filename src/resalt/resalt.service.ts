import { Injectable } from '@nestjs/common';
import { CreateResaltDto } from './dto/create-resalt.dto';
import { UpdateResaltDto } from './dto/update-resalt.dto';
import { DogRaceDocument } from './entities/resalt.entity'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from './entities/type.enum'; // Ensure you have the Type enum


@Injectable()
export class ResaltService {
  constructor(
    @InjectModel('Resalt')
    private readonly dogRaceModel:Model<DogRaceDocument>

  ){}
  async create(createResaltDto: CreateResaltDto) {
    try{
      const type: Type = Type.Dog; // Add logic here to determine the type if needed
      const createdDogRace = new this.dogRaceModel({
        ...createResaltDto,
        type,
      });
      return createdDogRace.save();
    }catch (error){
      console.log("error activating customer")
    }
  }

  async createHorsResult(createResaltDto: CreateResaltDto) {
    try{
      const type: Type = Type.Hors; // Add logic here to determine the type if needed
      const createdDogRace = new this.dogRaceModel({
        ...createResaltDto,
        type,
      });
      return createdDogRace.save();
    }catch (error){
      console.log("error activating customer")
    }
  }
  findAll() {
    return `This action returns all resalt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resalt`;
  }

  update(id: number, updateResaltDto: UpdateResaltDto) {
    return `This action updates a #${id} resalt`;
  }

  remove(id: number) {
    return `This action removes a #${id} resalt`;
  }
}
