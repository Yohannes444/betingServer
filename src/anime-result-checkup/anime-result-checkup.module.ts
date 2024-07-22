import { Module } from '@nestjs/common';
import { AnimeResultCheckupService } from './anime-result-checkup.service';
import { AnimeResultCheckupController } from './anime-result-checkup.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeResultCheckup, TicketSchema } from './entities/anime-result-checkup.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: AnimeResultCheckup.name, schema: TicketSchema }])
  ],
  controllers: [AnimeResultCheckupController],
  providers: [AnimeResultCheckupService],
})
export class AnimeResultCheckupModule {}
