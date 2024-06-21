import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KenoModule } from './keno/keno.module';
import { AnimeHorsModule } from './anime-hors/anime-hors.module';
import { AnimeDogModule } from './anime-dog/anime-dog.module';
import { GrayhornModule } from './grayhorn/grayhorn.module';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from  '@nestjs/config'
import { config } from './config'

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[config],
      isGlobal: true
    }),

    MongooseModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: async (ConfigService: ConfigService)=>({
        uri: ConfigService.get<string>('mongoUri'),
        connectTimeoutMS: 30000,
        socketTimeoutMS:45000
      })
    }),

    GrayhornModule, 
    AnimeDogModule, 
    AnimeHorsModule, 
    KenoModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
