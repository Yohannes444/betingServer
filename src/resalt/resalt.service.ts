import { Injectable } from '@nestjs/common';
import { CreateResaltDto } from './dto/create-resalt.dto';
import { UpdateResaltDto } from './dto/update-resalt.dto';
import { DogRaceDocument } from './entities/resalt.entity'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Type } from './entities/type.enum'; // Ensure you have the Type enum
import { AnimeHorsService } from 'src/anime-hors/anime-hors.service'
import { AnimeDogService } from 'src/anime-dog/anime-dog.service'
import { AnimeDog } from 'src/anime-dog/entities/anime-dog.entity'
import { AnimeHor } from 'src/anime-hors/entities/anime-hor.entity'

@Injectable()
export class ResaltService {
  constructor(
    @InjectModel('Resalt')
    private readonly dogRaceModel: Model<DogRaceDocument>,
    @InjectModel('AnimeDog')
    private readonly animeDogModel: Model<AnimeDog>,
    @InjectModel('AnimeHor')
    private readonly animeHorModel: Model<AnimeHor>,
    private readonly animeHorsService: AnimeHorsService,
    private readonly animeDogService: AnimeDogService,
  ) {}

   async create(createResaltDto: CreateResaltDto) {
    try {
      const { gameId, type, First, Second } = createResaltDto;
      const createdResalt = new this.dogRaceModel({
        ...createResaltDto,
      });

      await createdResalt.save();

      // Determine the type and find the corresponding tickets
      if (type === Type.Dog) {
        // Find tickets for Dog races
        const tickets = await this.animeDogModel.find({ gameId }).exec();

        // Identify winning tickets
        for (const ticket of tickets) {
          let totalPrize = 0;

          ticket.bets.forEach(bet => {
            if (bet.selectedButtons[1] === First.DogPlaceNum) {
              bet.win = true;
              bet.prize = First.DogPlaceOdd * bet.betAmount;
              totalPrize += bet.prize;
            } else {
              bet.win = false;
              bet.prize = 0;
            }
          });

          ticket.totslPrize = totalPrize;
          await ticket.save();
        }
      } else if (type === Type.Hors) {
        // Find tickets for Horse races
        const tickets = await this.animeHorModel.find({ gameId }).exec();

        // Identify winning tickets
        for (const ticket of tickets) {
          let totalPrize = 0;

          ticket.bets.forEach(bet => {
            if (bet.selectedButtons[1] === Second.DogPlaceNum) {
              bet.win = true;
              bet.prize = Second.DogPlaceOdd * bet.betAmount;
              totalPrize += bet.prize;
            } else {
              bet.win = false;
              bet.prize = 0;
            }
          });

          ticket.totslPrize = totalPrize;
          await ticket.save();
        }
      }

      return createdResalt;
    } catch (error) {
      console.log('Error creating result:', error);
      throw error;
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
