import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameResultDocument = GrayhornResulat & Document;

class GameResult {
  @Prop({ type: Number, required: true })
  first: number;

  @Prop({ type: Number, required: true })
  second: number;

  @Prop({ type: Number, required: true })
  third: number;
}

const GameResultSchema = SchemaFactory.createForClass(GameResult);

// Define the main schema
@Schema({ timestamps: true })
export class GrayhornResulat {
  @Prop({ type: Number, required: true })
  gameId: number;

  @Prop({ type: String, required: true })
  tiketerId: string;

  @Prop({ type: GameResultSchema, required: true })
  resalt: GameResult;

  @Prop({ type: Number, required: true })
  windOdd: number;

  @Prop({ type: Number, required: true })
  qunelaOdd: number;

  @Prop({ type: Number, required: true })
  exactOdd: number;

  @Prop({ type: Number, required: true })
  tryfectaOdd: number;
}

export const GrayhornResulatSchema = SchemaFactory.createForClass(GrayhornResulat);
