import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from './type.enum'
export type DogRaceDocument = Resalt & Document;

class DogRacing {
  @Prop({ type: Number, required: true })
  DogPlaceNum: number;

  @Prop({ type: Number, required: true })
  DogPlaceOdd: number;
}

const DogRacingSchema = SchemaFactory.createForClass(DogRacing);

@Schema({ timestamps: true })
export class Resalt {
  @Prop({ type: Number, required: true })
  gameId: number;

  @Prop({ type: DogRacingSchema, required: true })
  First: DogRacing;

  @Prop({ type: DogRacingSchema, required: true })
  Second: DogRacing;

  @Prop({ enum:Type, required: true })
  type: Type;
}

export const DogRaceSchema = SchemaFactory.createForClass(Resalt);
