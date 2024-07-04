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

  async getStat(id: string){
    const stat= {
      animehors:{
        total:null,
        payd:null,
        profit:null
      },
      animeDog:{
        total:null,
        payd:null,
        profit:null
      },
      tryfecta:{
        total:null,
        payd:null,
        profit:null
      },
      keno:{
        total:null,
        payd:null,
        profit:null
      }
    }
    
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
