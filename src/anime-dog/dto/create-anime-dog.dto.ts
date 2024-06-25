import { IsArray, IsPositive, IsNumber, ArrayMinSize, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAnimeDogDto {
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
