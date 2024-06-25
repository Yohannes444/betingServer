import { IsArray, IsPositive, IsNumber, ArrayMinSize, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAnimeHorDto {
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => Number)
  selectedButtons: number[];

  @IsNumber()
  betAmount: number;

  @IsString()
  @IsPositive()
  gameId: string;

  @IsString()
  @IsPositive()
  tiketId: string;
 
}
