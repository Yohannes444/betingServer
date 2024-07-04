import { Injectable } from '@nestjs/common';
import { GrayhornDocument } from 'src/grayhorn/entities/grayhorn.entity'
import { Model } from 'mongoose';
import { AnimeDogDocument } from 'src/anime-dog/entities/anime-dog.entity'
import { AnimeHorDocument } from 'src/anime-hors/entities/anime-hor.entity'
import { InjectModel } from '@nestjs/mongoose';
import { KenoDocument } from 'src/keno/entities/keno.entity'
@Injectable()
export class AppService {

  constructor(
    @InjectModel('Grayhorn')
    private readonly grayhornModel:Model<GrayhornDocument>,

    @InjectModel("AnimeHor")
    private readonly animeHorModel:Model<AnimeHorDocument>,

    @InjectModel("AnimeDog")
    private readonly animeDogModel: Model<AnimeDogDocument>,

    @InjectModel("Keno")
    private readonly kenoModel: Model<KenoDocument>

  ){}

  private async calculateStats(model: Model<any>, tiketerId: string): Promise<{ total: number, paid: number, profit: number }> {
    const documents = await model.find({ tiketerId }).exec();
    let total = 0;
    let paid = 0;
    let profit = 0;

    documents.forEach(doc => {
      doc.bets.forEach(bet => {
        total += bet.betAmount;
        if (bet.win) {
          paid += bet.prize;
        }
      });
      profit = total - paid;
    });

    return { total, paid: paid, profit };
  }

  async getStat(tiketerId: string) {
    const stat = {
      animehors: await this.calculateStats(this.animeHorModel, tiketerId),
      animeDog: await this.calculateStats(this.animeDogModel, tiketerId),
      tryfecta: await this.calculateStats(this.grayhornModel, tiketerId),
      keno: await this.calculateStats(this.kenoModel, tiketerId)
    };
    return stat;
  }

  getHello(): any {
    const now = new Date();
    const currentTime = now;

    const timeDetails = { 
      time: currentTime, 
      year: now.getUTCFullYear(), 
      month: now.getUTCMonth() + 1, // Months are 0-indexed
      day: now.getUTCDate(), 
      hour: now.getUTCHours(), 
      minute: now.getUTCMinutes(), 
      second: now.getUTCSeconds() 
    };

    return timeDetails;
  }
}
