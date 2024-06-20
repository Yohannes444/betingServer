import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Type } from 'class-transformer';

export type KenoDocument = Keno & Document;

class Bet {
  @Prop({ type: [[Number]] })
  selectedButtons: number[][];

  @Prop({ type: Number })
  betAmount: number;

  @Prop({ type: Boolean })
  isExactaActive: boolean;

  @Prop({ type: Boolean })
  isQuinellaActive: boolean;
}

const BetSchema = SchemaFactory.createForClass(Bet);

@Schema({ timestamps: true })
export class Keno {
  @Prop({ type: [BetSchema] })
  @Type(() => Bet)
  bets: Bet[];

  @Prop({ type: Number, required: true })
  gameId: number;

  @Prop({ type: Boolean, default: false })
  win: boolean;

  @Prop({ type: Boolean, default: false })
  canceled: boolean;

  @Prop({ type: Boolean, default: false })
  payd: boolean;
}

export const KenoSchema = SchemaFactory.createForClass(Keno);
