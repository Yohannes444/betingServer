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
    try {
      const { bets, gameId, tiketId } = createKenoDto;

      const totalPossibleWin = bets.reduce((sum, bet) => sum + bet.possibleWin, 0);


      const newKeno = {
        bets: bets.map(bet => ({
          selectedButtonsS:bet.selectedButtonsS,
          betAmount:bet.betAmount,
          odd:bet.odd,
          possibleWin:bet.possibleWin,
          win: false, // default value
          prize: 0    // default value
        })),
        gameId: Number(gameId),
        TotalPossibleWin: totalPossibleWin,
        canceled: false, // default value
        payd: false,     // default value
        tiketId: tiketId
      };

      const newKenoTiket = await this.kenoModel.create(newKeno);
      console.log("createKenoDto:=>", createKenoDto, "\n newKenoTiket: ", newKenoTiket);
      
      return newKenoTiket;
    } catch (error) {
      console.error("Error creating Keno ticket:", error);
      throw error;
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
