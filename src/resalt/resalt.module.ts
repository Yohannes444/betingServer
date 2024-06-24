import { Module } from '@nestjs/common';
import { ResaltService } from './resalt.service';
import { ResaltController } from './resalt.controller';
import { Resalt,DogRaceSchema } from './entities/resalt.entity'
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Resalt.name, schema: DogRaceSchema }])
  ],
  controllers: [ResaltController],
  providers: [ResaltService],
})
export class ResaltModule {}
