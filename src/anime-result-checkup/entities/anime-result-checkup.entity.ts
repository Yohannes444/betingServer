// export class AnimeResultCheckup {}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnimeResultCheckupDocument = AnimeResultCheckup & Document;

@Schema({ timestamps: true })

export class AnimeResultCheckup  {
  @Prop({ required: true })
  gameId: string;

  @Prop({ required: true })
  tiketerId: string;

  @Prop({ required: true })
  first: number;

  @Prop({ required: true })
  second: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  firstOdd: number;

  @Prop({ required: true })
  secondOdd: number;
}

export const TicketSchema = SchemaFactory.createForClass(AnimeResultCheckup);
