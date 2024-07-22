// export class AnimeResultCheckup {}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnimeResultCheckupDocument = TryfectaResultCheckup & Document;

@Schema({ timestamps: true })

export class TryfectaResultCheckup  {
  @Prop({ required: true })
  gameId: string;

  @Prop({ required: true })
  tiketerId: string;

  @Prop({ required: true })
  first: number;

  @Prop({ required: true })
  second: number;

  @Prop({ required: true })
  third: number;

  @Prop({ required: true })
  windOdd: number;

  @Prop({ required: true })
  qunelaOdd: number;

  @Prop({ required: true })
  exactOdd: number;
  @Prop({ required: true })
  tryfectaOdd: number;
}

export const TicketSchema = SchemaFactory.createForClass(TryfectaResultCheckup);
