import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from 'class-transformer';
import { ArrayMinSize } from 'class-validator';

export type GrayhornDocument = Grayhorn & Document;

@Schema({ _id: false })  // Using _id: false to avoid nested _id for subdocuments
export class Bet {
  @Prop({ type: [[Number]], required: true })
  @ArrayMinSize(1)  // Validate that the array has at least one element
  selectedButtons: number[][];

  @Prop({ type: Number, required: true })
  betAmount: number;

  @Prop({ type: Boolean, required: true })
  isExactaActive: boolean;

  @Prop({ type: Boolean, required: true })
  isQuinellaActive: boolean;

  @Prop({ type: Boolean, default: false })
  win: boolean;
  @Prop({ type: Number })
  prize: number;
}

export const BetSchema = SchemaFactory.createForClass(Bet);

@Schema({ timestamps: true })
export class Grayhorn {
  @Prop({ type: [BetSchema], required: true })
  @Type(() => Bet)
  @ArrayMinSize(1)  // Validate that the array has at least one element
  bets: Bet[];

  @Prop({ type: Number, required: true })
  gameId: number;

  @Prop({ type: Number })
  totslPrize: number;

  @Prop({ type: Boolean, default: false })
  canceled: boolean;

  @Prop({ type: Boolean, default: false })
  payd: boolean;
}

export const GrayhornSchema = SchemaFactory.createForClass(Grayhorn);
