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
    private readonly grayhornResulatModel: Model<GameResultDocument>,
    @InjectModel('Grayhorn')
    private readonly grayhornTiketModel:Model<GrayhornDocument>
    
  ) {}
  async create(createGrayhornResulatDto: CreateGrayhornResulatDto) {
    // Save the result
    const createdResult = new this.grayhornResulatModel(createGrayhornResulatDto);
    await createdResult.save();

    // Find all tickets for the game
    const tickets = await this.grayhornTiketModel.find({ gameId: createGrayhornResulatDto.gameId });

    // Determine the winners and update the tickets
    const { resalt, windOdd, qunelaOdd, exactOdd, tryfectaOdd } = createGrayhornResulatDto;
    const winners = [];

    for (const ticket of tickets) {
      let totalPrize = 0;
      let isWinner = false;

      for (const bet of ticket.bets) {
        let betPrize = 0;

        if (this.isTryfectaWinner(bet.selectedButtons, resalt)) {
          betPrize += bet.betAmount * tryfectaOdd;
          bet.win = true;
          isWinner = true;
        }
        if (bet.isQuinellaActive && this.isQuinellaWinner(bet.selectedButtons, resalt)) {
          betPrize += bet.betAmount * qunelaOdd;
          bet.win = true;
          isWinner = true;
        }
        if (bet.isExactaActive && this.isExactaWinner(bet.selectedButtons, resalt)) {
          betPrize += bet.betAmount * exactOdd;
          bet.win = true;
          isWinner = true;
        }
        if (this.isWinWinner(bet.selectedButtons, resalt)) {
          betPrize += bet.betAmount * windOdd;
          bet.win = true;
          isWinner = true;
        }

        if (bet.win) {
          bet.prize = betPrize;
          totalPrize += betPrize;
        }
      }

      if (isWinner) {
        ticket.totslPrize = totalPrize;
        await ticket.save();
        winners.push(ticket);
      }
    }

    return winners;
  }

  private isTryfectaWinner(selectedButtons: number[][], resalt: { first: number, second: number, third: number }): boolean {
    return selectedButtons.some(buttons => 
      buttons.length === 3 &&
      buttons[0][1] === resalt.first && 
      buttons[1] [1]=== resalt.second && 
      buttons[2] [1] === resalt.third
    );
  }

  private isQuinellaWinner(selectedButtons: number[][], resalt: { first: number, second: number, third: number }): boolean {
    return selectedButtons.some(buttons => 
      buttons.length === 2 &&
      ((buttons[0] === resalt.first && buttons[1] === resalt.second) ||
       (buttons[0] === resalt.second && buttons[1] === resalt.first))
    );
  }

  private isExactaWinner(selectedButtons: number[][], resalt: { first: number, second: number, third: number }): boolean {
    return selectedButtons.some(buttons => 
      buttons.length === 2 &&
      buttons[0] === resalt.first && 
      buttons[1] === resalt.second
    );
  }

  private isWinWinner(selectedButtons: number[][], resalt: { first: number, second: number, third: number }): boolean {
    return selectedButtons.some(buttons => 
      buttons.length === 1 &&
      buttons[0] === resalt.first
    );
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
